import { headers } from "next/headers";
import { routing, locales, type AppLocale } from "@/i18n/routing";
import type { Localized } from "@/types";

/**
 * Resolve the locale for an API route. Priority:
 *  1. `x-locale` header (set by middleware for `/api/*` requests)
 *  2. `lang` search-param (?lang=ru)
 *  3. configured default locale
 *
 * Always falls back to a valid locale — never throws.
 */
export async function resolveLocaleFromRequest(): Promise<AppLocale> {
  const h = await headers();
  const headerLocale = h.get("x-locale");
  if (headerLocale && (locales as readonly string[]).includes(headerLocale)) {
    return headerLocale as AppLocale;
  }
  const url = h.get("x-url");
  if (url) {
    try {
      const search = new URL(url).searchParams.get("lang");
      if (search && (locales as readonly string[]).includes(search)) {
        return search as AppLocale;
      }
    } catch {
      // ignore malformed URL
    }
  }
  return routing.defaultLocale;
}

/** Pick the localized string for a given locale. */
export function pick<T>(value: Localized | T, locale: AppLocale): T {
  if (
    value !== null &&
    typeof value === "object" &&
    "uz" in value &&
    "ru" in value &&
    "en" in value
  ) {
    return (value as Localized)[locale] as T;
  }
  return value as T;
}

/**
 * Recursively flatten any `Localized` fields inside an arbitrary value to
 * plain strings for the given locale. Arrays, nested objects and already-flat
 * primitives are preserved. Safe to call on values already fully flattened.
 */
export function localize<T>(value: T, locale: AppLocale): Flatten<T> {
  if (Array.isArray(value)) {
    return value.map((item) => localize(item, locale)) as unknown as Flatten<T>;
  }
  if (value && typeof value === "object") {
    if (
      "uz" in value &&
      "ru" in value &&
      "en" in value &&
      Object.keys(value).length === 3
    ) {
      return (value as Localized)[locale] as unknown as Flatten<T>;
    }
    const out: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
      out[key] = localize(val, locale);
    }
    return out as unknown as Flatten<T>;
  }
  return value as unknown as Flatten<T>;
}

// Utility: maps a localized source type to its flattened (single-locale) shape.
// Deep enough for the data shapes used in this project (max 3 levels).
type Flatten<T> = T extends Localized
  ? string
  : T extends (infer U)[]
    ? Flatten<U>[]
    : T extends object
      ? { [K in keyof T]: Flatten<T[K]> }
      : T;
