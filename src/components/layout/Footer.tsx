"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Common");
  return <footer className="footer"><div className="container"><div className="footer-inner"><span className="f-logo mono">AR.</span><p className="f-copy mono">© 2025 Akrom Rustamov · Tashkent, UZ</p><a href="#home" className="f-top mono">{t("footerTop")}</a></div></div></footer>;
}
