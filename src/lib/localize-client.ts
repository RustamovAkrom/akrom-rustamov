import type { AppLocale } from '@/i18n/routing';
import type { Localized, LocalizedData } from '@/types';

function isLocalized(value: object): value is Localized {
  return 'uz' in value && 'ru' in value && 'en' in value && Object.keys(value).length === 3;
}

/** Resolve localized static data before a client-side API request completes. */
export function localizeClientData<T>(value: T, locale: AppLocale): LocalizedData<T> {
  if (Array.isArray(value)) {
    return value.map((item) => localizeClientData(item, locale)) as LocalizedData<T>;
  }

  if (value && typeof value === 'object') {
    if (isLocalized(value)) {
      return value[locale] as LocalizedData<T>;
    }

    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localizeClientData(item, locale)]),
    ) as LocalizedData<T>;
  }

  return value as LocalizedData<T>;
}
