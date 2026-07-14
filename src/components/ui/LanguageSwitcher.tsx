"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type AppLocale } from "@/i18n/routing";
import styles from "./LanguageSwitcher.module.css";

const languageNames: Record<AppLocale, string> = {
  uz: "O‘zbekcha",
  ru: "Русский",
  en: "English",
};

export default function LanguageSwitcher() {
  const t = useTranslations("Navigation");
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const changeLocale = (nextLocale: AppLocale) => {
    if (nextLocale === locale) {
      setIsOpen(false);
      return;
    }
    startTransition(() => router.replace(pathname, { locale: nextLocale }));
    setIsOpen(false);
  };

  return (
    <div className={styles.switcher} ref={rootRef}>
      <button className={styles.trigger} type="button" aria-label={t("language")} aria-expanded={isOpen} aria-haspopup="menu" onClick={() => setIsOpen((open) => !open)} disabled={isPending}>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z" /></svg>
        <span className={styles.label}>{locale.toUpperCase()}</span>
      </button>
      {isOpen && <div className={styles.menu} role="menu" aria-label={t("language")}>
        {locales.map((item) => <button type="button" role="menuitemradio" aria-checked={item === locale} className={`${styles.option} ${item === locale ? styles.active : ""}`} key={item} onClick={() => changeLocale(item)}><span className={styles.code}>{item.toUpperCase()}</span>{languageNames[item]}</button>)}
      </div>}
    </div>
  );
}
