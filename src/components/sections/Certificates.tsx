'use client';

import { useData } from '@/hooks/useData';
import { certificatesData } from '@/lib/data';
import type { Certificate } from '@/types';

export default function Certificates() {
  const { data } = useData<Certificate[]>('/api/certificates', certificatesData);

  return (
    <section className="section certs" id="certificates">
      <div className="container">
        <div className="s-head reveal">
          <span className="s-label mono">05 — credentials</span>
          <h2 className="s-title">Certificates</h2>
        </div>
        <div className="certs-grid">
          {data.map((cert, idx) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert reveal"
              style={{ '--d': `${idx * 0.09}s` } as React.CSSProperties}
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
              <div className="cert__shine" />
            </a>
          ))}
        </div>
        <div className="certs-foot reveal">
          <a href="https://akrom-omega.vercel.app/certificates" target="_blank" rel="noopener noreferrer" className="btn ghost">
            View All Certificates ↗
          </a>
        </div>
      </div>
    </section>
  );
}
