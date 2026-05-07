'use client';

import { useEffect, useState } from 'react';

export default function Certificates() {
  const [certificates, setCertificates] = useState<any>(null);

  useEffect(() => {
    fetch('/api/certificates')
      .then(res => res.json())
      .then(data => {
        setCertificates(data);
        // Принудительно показываем блоки после загрузки
        setTimeout(() => {
          document.querySelectorAll('.cert').forEach(el => {
            el.classList.add('in');
          });
        }, 100);
      })
      .catch(console.error);
  }, []);

  // Статика пока грузятся данные
  if (!certificates) {
    return (
      <section className="section certs" id="certificates">
        <div className="container">
          <div className="s-head reveal">
            <span className="s-label mono">05 — credentials</span>
            <h2 className="s-title">Certificates</h2>
          </div>
          <div className="certs-grid">
            <a href="https://akrom-omega.vercel.app/certificates" target="_blank" rel="noopener"
              className="cert reveal" style={{ '--d': '0s' } as React.CSSProperties}>
              <div className="cert__head">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="24">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                <span className="cert__badge">Verified</span>
              </div>
              <h3 className="cert__title">Backend Development</h3>
              <p className="cert__org">Najot Ta'lim</p>
              <p className="cert__yr mono">2023 – 2024</p>
              <span className="cert__link mono">View ↗</span>
              <div className="cert__shine"></div>
            </a>

            <a href="https://akrom-omega.vercel.app/certificates" target="_blank" rel="noopener"
              className="cert reveal" style={{ '--d': '.09s' } as React.CSSProperties}>
              <div className="cert__head">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="24">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                <span className="cert__badge">Verified</span>
              </div>
              <h3 className="cert__title">Python &amp; Django</h3>
              <p className="cert__org">Najot Ta'lim</p>
              <p className="cert__yr mono">2023</p>
              <span className="cert__link mono">View ↗</span>
              <div className="cert__shine"></div>
            </a>

            <a href="https://akrom-omega.vercel.app/certificates" target="_blank" rel="noopener"
              className="cert reveal" style={{ '--d': '.18s' } as React.CSSProperties}>
              <div className="cert__head">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="24">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                <span className="cert__badge">Verified</span>
              </div>
              <h3 className="cert__title">FastAPI Mastery</h3>
              <p className="cert__org">Self-directed / GitHub</p>
              <p className="cert__yr mono">2024</p>
              <span className="cert__link mono">View ↗</span>
              <div className="cert__shine"></div>
            </a>

            <a href="https://akrom-omega.vercel.app/certificates" target="_blank" rel="noopener"
              className="cert reveal" style={{ '--d': '.27s' } as React.CSSProperties}>
              <div className="cert__head">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="24">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                <span className="cert__badge cert__badge--prog">In Progress</span>
              </div>
              <h3 className="cert__title">BSc Information Technology</h3>
              <p className="cert__org">IDU, Tashkent</p>
              <p className="cert__yr mono">2025 – Present</p>
              <span className="cert__link mono">View All ↗</span>
              <div className="cert__shine"></div>
            </a>
          </div>
          <div className="certs-foot reveal">
            <a href="https://akrom-omega.vercel.app/certificates" target="_blank" rel="noopener"
              className="btn ghost">View All Certificates ↗</a>
          </div>
        </div>
      </section>
    );
  }

  // API данные
  return (
    <section className="section certs" id="certificates">
      <div className="container">
        <div className="s-head reveal">
          <span className="s-label mono">05 — credentials</span>
          <h2 className="s-title">Certificates</h2>
        </div>
        <div className="certs-grid">
          {certificates.map((cert: any, idx: number) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener"
              className="cert reveal in"
              style={{
                '--d': `${idx * 0.09}s`,
                opacity: 1,
                transform: 'none'
              } as React.CSSProperties}
            >
              <div className="cert__head">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="24">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
                <span className={`cert__badge ${cert.badgeType === 'prog' ? 'cert__badge--prog' : ''}`}>
                  {cert.badge}
                </span>
              </div>
              <h3 className="cert__title">{cert.title}</h3>
              <p className="cert__org">{cert.organization}</p>
              <p className="cert__yr mono">{cert.year}</p>
              <span className="cert__link mono">{cert.inProgress ? 'View All ↗' : 'View ↗'}</span>
              <div className="cert__shine"></div>
            </a>
          ))}
        </div>
        <div className="certs-foot reveal">
          <a href="https://akrom-omega.vercel.app/certificates" target="_blank" rel="noopener" className="btn ghost">
            View All Certificates ↗
          </a>
        </div>
      </div>
    </section>
  );
}
