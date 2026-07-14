"use client";

import NextLink from "next/link";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useNavbarBehavior } from "@/hooks/useNavbarBehavior";
import { useTheme } from "@/hooks/useTheme";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Navbar() {
  useNavbarBehavior();
  const { toggle } = useTheme();
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const navLinks = [
    { label: t("about"), href: "/#about", dataS: "about" },
    { label: t("skills"), href: "/#skills", dataS: "skills" },
    { label: t("portfolio"), href: "/#portfolio", dataS: "portfolio" },
    { label: t("services"), href: "/#services", dataS: "services" },
    { label: t("certificates"), href: "/#certificates", dataS: "certificates" },
    { label: t("blog"), href: "/blog", dataS: null },
    { label: t("contact"), href: "/#contact", dataS: "contact", isCta: true },
  ];
  const closeMenu = () => {
    document.getElementById("navList")?.classList.remove("open");
    document.getElementById("navBurger")?.classList.remove("open");
  };

  return (
    <nav className="nav" id="nav">
      <div className="nav__wrap">
        <Link href="/" className="nav__brand">AR<span className="nav__dot">.</span></Link>
        <ul className="nav__list" id="navList">
          {navLinks.map((link) => <li key={link.href}>
            {link.href === "/blog" ? (
              <NextLink href="/blog" className="nav__a" onClick={closeMenu}>{link.label}</NextLink>
            ) : (
              <Link href={isHome ? link.href.slice(1) : link.href} className={`nav__a ${link.isCta ? "nav__a--cta" : ""}`} data-s={link.dataS ?? undefined} onClick={closeMenu}>{link.label}</Link>
            )}
          </li>)}
          <li className="nav__theme-li">
            <LanguageSwitcher />
            <button className="nav__theme" aria-label={t("theme")} onClick={toggle}>
              <svg className="nav__theme-icon nav__theme-icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16"><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              <svg className="nav__theme-icon nav__theme-icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            </button>
          </li>
        </ul>
        <div className="nav__actions">
          <LanguageSwitcher />
          <button className="nav__theme nav__theme--standalone" aria-label={t("theme")} onClick={toggle}>
            <svg className="nav__theme-icon nav__theme-icon--sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16"><circle cx="12" cy="12" r="4.5" /><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
            <svg className="nav__theme-icon nav__theme-icon--moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
          </button>
          <button className="nav__burger" id="navBurger" aria-label={t("menu")}><span /><span /><span /></button>
        </div>
      </div>
    </nav>
  );
}
