import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing, locales } from "@/i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // For API requests, forward the resolved locale via the `x-locale` header so
  // that data routes can return already-localized payloads. We resolve the
  // locale the same way next-intl would (cookie / accept-language / prefix).
  if (pathname.startsWith("/api")) {
    const resolvedLocale = resolveLocale(request);
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", resolvedLocale);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  return intlMiddleware(request);
}

function resolveLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) {
    return cookieLocale;
  }
  const accept = request.headers.get("accept-language");
  if (accept) {
    const matched = accept
      .split(",")
      .map((part) => part.split(";")[0].trim().toLowerCase().split("-")[0])
      .find((l) => (locales as readonly string[]).includes(l));
    if (matched) return matched;
  }
  return routing.defaultLocale;
}

export const config = {
  // Run next-intl on all routes except static assets and internal Next files.
  // `/api` is handled separately above to inject the locale header only.
  matcher: ["/((?!_next|_vercel|.*\\..*).*)"],
};
