"use client";

import { useData } from "@/hooks/useData";
import { useSlider } from "@/hooks/useSlider";
import { projectsData } from "@/lib/data";
import type { Project } from "@/types";
import { useTranslations } from "next-intl";

export default function Portfolio({ className = "" }: { className?: string }) {
  const t = useTranslations();
  const { data } = useData<Project[]>('/api/projects', projectsData);
  const total = data.length;
  const { index, next, prev, goTo } = useSlider(total);

  return (
    <section className={`section portfolio ${className}`.trim()} id="portfolio">
      <div className="container">
        <div className="pf-head">
          <div className="s-head reveal">
            <span className="s-label mono">03 — work</span>
            <h2 className="s-title">{t("Sections.portfolio")}</h2>
          </div>

          <div
            className="sl-nav reveal"
            style={{ "--d": ".08s" } as React.CSSProperties}
          >
            <button className="sl-btn" onClick={prev} aria-label={t("Common.previousProject")}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <span className="sl-counter mono">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

            <button className="sl-btn" onClick={next} aria-label={t("Common.nextProject")}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="sl-viewport">
        <div
          className="sl-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {data.map((project, idx) => (
            <div className="slide" key={project.id}>
              <div className="slide__inner container">
                <div className="slide__vis" style={{ "--hue": project.hue } as React.CSSProperties}>
                  <div className="slide__vis-blob" />
                  <span className="slide__vis-n mono">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <div className="slide__body">
                  <div className="slide__header">
                    <span className={`slide__badge ${project.isPublic ? 'slide__badge--public' : 'slide__badge--private'}`}>
                      {project.isPublic ? t('Common.public') : t('Common.private')}
                    </span>
                    <div className="slide__pills">
                      {project.pills.map((pill, i) => (
                        <span key={i} className="pill sm">{pill}</span>
                      ))}
                    </div>
                  </div>
                  <h3 className="slide__title">{project.title}</h3>
                  <p className="slide__sub mono">{project.subtitle}</p>
                  <p className="slide__desc">{project.description}</p>
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn ghost sm">
                      GitHub'da ko'rish →
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sl-dots">
        {data.map((_, i) => (
          <button
            key={i}
            className={`sl-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={t('Common.goToProject', { number: i + 1 })}
          />
        ))}
      </div>
    </section>
  );
}
