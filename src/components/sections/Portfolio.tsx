"use client";

import { useEffect, useState } from "react";
import { useSlider } from "@/hooks/useSlider";

export default function Portfolio() {
  const [projects, setProjects] = useState<any>(null);
  const total = projects?.length || 3;
  const { index, next, prev, goTo } = useSlider(total);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(console.error);
  }, []);

  // Статика пока грузятся данные
  if (!projects) {
    return (
      <section className="section portfolio" id="portfolio">
        <div className="container">
          <div className="pf-head">
            <div className="s-head reveal">
              <span className="s-label mono">03 — work</span>
              <h2 className="s-title">Projects</h2>
            </div>

            <div
              className="sl-nav reveal"
              style={{ "--d": ".08s" } as React.CSSProperties}
            >
              <button className="sl-btn" onClick={prev} aria-label="Prev">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <span className="sl-counter mono">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>

              <button className="sl-btn" onClick={next} aria-label="Next">
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
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {/* Slide 1 */}
            <div className="slide">
              <div className="slide__inner container">
                <div className="slide__vis" style={{ "--hue": "210" } as React.CSSProperties}>
                  <div className="slide__vis-blob"></div>
                  <span className="slide__vis-n mono">01</span>
                </div>
                <div className="slide__body">
                  <div className="slide__pills">
                    <span className="pill sm">FastAPI</span>
                    <span className="pill sm">PostgreSQL</span>
                    <span className="pill sm">SQLAlchemy</span>
                    <span className="pill sm">JWT</span>
                    <span className="pill sm">RBAC</span>
                  </div>
                  <h3 className="slide__title">Marketplace</h3>
                  <p className="slide__sub mono">E-commerce Backend Platform</p>
                  <p className="slide__desc">
                    Scalable REST API with JWT auth, RBAC, modular architecture.
                  </p>
                  <a href="https://github.com/RustamovAkrom/Marketplace-FastAPI" target="_blank" rel="noopener" className="btn ghost sm">
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="slide">
              <div className="slide__inner container">
                <div className="slide__vis" style={{ "--hue": "160" } as React.CSSProperties}>
                  <div className="slide__vis-blob"></div>
                  <span className="slide__vis-n mono">02</span>
                </div>
                <div className="slide__body">
                  <div className="slide__pills">
                    <span className="pill sm">Aiogram 3</span>
                    <span className="pill sm">DeepSeek API</span>
                  </div>
                  <h3 className="slide__title">DeepSeek Bot</h3>
                  <p className="slide__sub mono">AI Telegram Assistant</p>
                  <p className="slide__desc">
                    AI Telegram bot with async architecture.
                  </p>
                  <a href="https://github.com/RustamovAkrom/DeepSeek_TelegramBot" target="_blank" rel="noopener" className="btn ghost sm">
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="slide">
              <div className="slide__inner container">
                <div className="slide__vis" style={{ "--hue": "340" } as React.CSSProperties}>
                  <div className="slide__vis-blob"></div>
                  <span className="slide__vis-n mono">03</span>
                </div>
                <div className="slide__body">
                  <div className="slide__pills">
                    <span className="pill sm">Django</span>
                    <span className="pill sm">Next.js</span>
                  </div>
                  <h3 className="slide__title">Viberfy</h3>
                  <p className="slide__sub mono">Music Web App</p>
                  <p className="slide__desc">
                    Full-stack platform with Django + Next.js.
                  </p>
                  <a href="https://github.com/RustamovAkrom/Viberfy" target="_blank" rel="noopener" className="btn ghost sm">
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sl-dots">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={`sl-dot ${i === index ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </section>
    );
  }

  // API данные
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <div className="pf-head">
          <div className="s-head reveal">
            <span className="s-label mono">03 — work</span>
            <h2 className="s-title">Projects</h2>
          </div>

          <div
            className="sl-nav reveal"
            style={{ "--d": ".08s" } as React.CSSProperties}
          >
            <button className="sl-btn" onClick={prev} aria-label="Prev">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <span className="sl-counter mono">
              {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>

            <button className="sl-btn" onClick={next} aria-label="Next">
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
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {projects.map((project: any, idx: number) => (
            <div className="slide" key={project.id}>
              <div className="slide__inner container">
                <div className="slide__vis" style={{ "--hue": project.hue } as React.CSSProperties}>
                  <div className="slide__vis-blob"></div>
                  <span className="slide__vis-n mono">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <div className="slide__body">
                  <div className="slide__pills">
                    {project.pills.map((pill: string, i: number) => (
                      <span key={i} className="pill sm">{pill}</span>
                    ))}
                  </div>
                  <h3 className="slide__title">{project.title}</h3>
                  <p className="slide__sub mono">{project.subtitle}</p>
                  <p className="slide__desc">{project.description}</p>
                  <a href={project.github} target="_blank" rel="noopener" className="btn ghost sm">
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sl-dots">
        {projects.map((_: any, i: number) => (
          <button
            key={i}
            className={`sl-dot ${i === index ? "active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
