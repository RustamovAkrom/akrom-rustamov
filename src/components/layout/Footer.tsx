"use client";

import { useTranslations } from "next-intl";
import styles from "./Footer.module.css";

export default function Footer() {
  const t = useTranslations("Common");
  const year = new Date().getFullYear();

  return (
    <footer className={`footer ${styles.footer}`}>
      <div className="container">
        <div className={styles.main}>
          <div className={styles.identity}>
            <a className={`${styles.brand} mono`} href="#home" aria-label="Akrom Rustamov — home">
              AR<span>.</span>
            </a>
            <p className={styles.tagline}>{t("footerTagline")}</p>
          </div>
          <nav className={styles.navigation} aria-label={t("footerNavigation")}>
            <a href="#about">{t("footerAbout")}</a>
            <a href="#portfolio">{t("footerProjects")}</a>
            <a href="#contact">{t("footerContact")}</a>
          </nav>
          <a className={styles.backToTop} href="#home">
            <span>{t("footerTop")}</span>
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 15V5m0 0L5.5 9.5M10 5l4.5 4.5" />
            </svg>
          </a>
        </div>
        <div className={styles.bottom}>
          <span>© {year} Akrom Rustamov</span>
          <span>{t("footerLocation")}</span>
        </div>
      </div>
    </footer>
  );
}
