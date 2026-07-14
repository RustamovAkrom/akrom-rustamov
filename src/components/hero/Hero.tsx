"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { sporePositions } from "@/lib/fireflies";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="hero" id="home">
      <div className="spores" aria-hidden="true">
        {sporePositions.map((spore, index) => <div key={index} className="spore" style={{ left: spore.left, top: spore.top, animationDelay: spore.delay, animationDuration: spore.duration }} />)}
      </div>
      <div className="orb-wrap" id="heroOrb">
        <div className="orb">
          <div className="orb__core orb__core--with-image"><Image className="orb__img" src="/images/avatar.png" alt="Akrom Rustamov avatar" width={220} height={220} priority quality={95} /></div>
          <div className="orb__energy" /><div className="orb__energy orb__energy--soft" />
          <div className="orb__halo h1" /><div className="orb__halo h2" /><div className="orb__halo h3" /><div className="orb__shine" />
        </div>
        <div className="orb__badge"><span className="orb__badge-dot" /><span className="mono">{t("availability")}</span></div>
      </div>
      <div className="hero__copy">
        <p className="hero__eyebrow reveal in" style={{ "--d": "0s" } as React.CSSProperties}><span className="mono dim">&lt;</span><span className="typing">{t("role")}</span><span className="mono dim">/&gt;</span></p>
        <h1 className="hero__name"><span className="hn-line reveal in" style={{ "--d": ".06s" } as React.CSSProperties}>Akrom</span><span className="hn-line hn-stroke reveal in" style={{ "--d": ".12s" } as React.CSSProperties}>Rustamov</span></h1>
        <p className="hero__tag reveal in" style={{ "--d": ".18s" } as React.CSSProperties}>
          {t("tagline").split("\n").map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}
        </p>
        <div className="hero__btns reveal in" style={{ "--d": ".30s" } as React.CSSProperties}>
          <a href="#portfolio" className="btn solid">{t("projects")}</a>
          <a href="#contact" className="btn ghost">{t("contact")}</a>
          <a href="/cv.pdf" target="_blank" rel="noopener" className="btn ghost">{t("downloadCv")}</a>
        </div>
        <div className="hero__socs reveal in" style={{ "--d": ".30s" } as React.CSSProperties}>
          <a href="https://github.com/RustamovAkrom" target="_blank" rel="noopener noreferrer" className="hero__soc">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hero__soc">LinkedIn</a>
        </div>
      </div>
      <div className="hero__scroll-hint"><div className="scroll-track"><div className="scroll-thumb" /></div><span className="mono">{t("scroll")}</span></div>
    </section>
  );
}
