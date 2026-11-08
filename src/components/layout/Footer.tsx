"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("Common");
  const year = new Date().getFullYear();

  return (
    <footer className={`footer ${styles.footer}`}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.identity}>
            <Link className={`${styles.brand} mono`} href="/#home" aria-label="Akrom Rustamov — home">
              AR<span>.</span>
            </Link>
            <p className={styles.tagline}>{t("footerTagline")}</p>
          </div>
          <nav className={styles.navigation} aria-label={t("footerNavigation")}>
            <Link href="/#about">{t("footerAbout")}</Link>
            <Link href="/#portfolio">{t("footerProjects")}</Link>
            <Link href="/#contact">{t("footerContact")}</Link>
          </nav>
          <Link className={styles.backToTop} href="/#home">
            <span>{t("footerTop")}</span>
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 15V5m0 0L5.5 9.5M10 5l4.5 4.5" />
            </svg>
          </Link>
        </div>
        <div className={styles.bottom}>
          <span>© {year} Akrom Rustamov</span>
          <span>{t("footerLocation")}</span>
        </div>
      </div>
    </footer>
  );
}
