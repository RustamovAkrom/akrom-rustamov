'use client';

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';

export function useData<T>(url: string, fallback: T) {
  const locale = useLocale();
  const [data, setData] = useState<T>(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetch(url, { headers: { 'x-locale': locale } })
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) {
          setData(json);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [url, locale]);

  return { data, loading };
}
