import { createHash } from "node:crypto";
import { isIP } from "node:net";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const MAX_MESSAGES_PER_IP = 5;
const ipRequests = new Map<string, { count: number; expiresAt: number }>();

function jsonError(status: number, error: string) {
  return NextResponse.json({ error }, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function getClientIp(request: Request): string | null {
  const candidates = [
    request.headers.get("x-real-ip"),
    request.headers.get("x-forwarded-for")?.split(",").at(-1)?.trim(),
  ];

  return candidates.find((candidate): candidate is string => Boolean(candidate && isIP(candidate))) ?? null;
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const ipHash = createHash("sha256").update(ip).digest("hex");
  const current = ipRequests.get(ipHash);

  if (!current || current.expiresAt <= now) {
    ipRequests.set(ipHash, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });

    if (ipRequests.size > 1_000) {
      for (const [key, entry] of ipRequests) {
        if (entry.expiresAt <= now) ipRequests.delete(key);
      }
    }
    return false;
  }

  current.count += 1;
  return current.count > MAX_MESSAGES_PER_IP;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  let sameOrigin = false;
  try {
    sameOrigin = Boolean(origin && new URL(origin).host === new URL(request.url).host);
  } catch {
    sameOrigin = false;
  }
  if (!sameOrigin) {
    return jsonError(403, "Request rejected.");
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return jsonError(415, "Unsupported request format.");
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 8_192) return jsonError(413, "Message is too large.");

  let body: unknown;
  try {
    if (!request.body) return jsonError(400, "Invalid request.");
    const reader = request.body.getReader();
    const chunks: Uint8Array[] = [];
    let byteLength = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      byteLength += value.byteLength;
      if (byteLength > 8_192) {
        await reader.cancel();
        return jsonError(413, "Message is too large.");
      }
      chunks.push(value);
    }
    const rawBody = new TextDecoder().decode(Buffer.concat(chunks));
    body = JSON.parse(rawBody);
  } catch {
    return jsonError(400, "Invalid request.");
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return jsonError(400, "Invalid request.");
  }

  const payload = body as Record<string, unknown>;
  if (typeof payload.website === "string" && payload.website.length > 0) {
    return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const contactMethod = payload.contactMethod;
  const contactValue = typeof payload.contactValue === "string" ? payload.contactValue.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const validContactMethod = contactMethod === "telegram" || contactMethod === "email" || contactMethod === "phone";
  const normalizedTelegramUsername = contactValue.startsWith("@") ? contactValue.slice(1) : contactValue;
  const validContactValue = validContactMethod && (
    contactMethod === "email"
      ? contactValue.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue)
      : contactMethod === "telegram"
        ? /^\w{5,32}$/.test(normalizedTelegramUsername)
        : /^[+\d][\d\s().-]{5,24}$/.test(contactValue) && contactValue.replace(/\D/g, "").length >= 7
  );
  if (
    name.length < 1 || name.length > 100 ||
    !validContactValue ||
    message.length < 1 || message.length > 3000
  ) {
    return jsonError(400, "Please check the form fields.");
  }

  const ip = getClientIp(request);
  if (!ip) return jsonError(400, "Unable to verify request.");

  if (isRateLimited(ip)) return jsonError(429, "Too many messages. Please try again later.");

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) return jsonError(503, "Message delivery is temporarily unavailable.");

  let telegramResponse: Response;
  try {
    telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: `New portfolio message\n\nName: ${name}\nContact (${contactMethod}): ${contactValue}\n\n${message}`,
        link_preview_options: { is_disabled: true },
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(5000),
    });
  } catch {
    return jsonError(502, "Message delivery failed. Please try again later.");
  }

  if (!telegramResponse.ok) return jsonError(502, "Message delivery failed. Please try again later.");
  return NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
