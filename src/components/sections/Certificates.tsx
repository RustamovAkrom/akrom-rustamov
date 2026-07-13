'use client';

import { useData } from '@/hooks/useData';
import { certificatesData } from '@/lib/data';
import type { Certificate } from '@/types';
import CertificateCard from '@/components/ui/CertificateCard';
import CertificateModal from '@/components/ui/CertificateModal';
import { useState } from 'react';
import Link from 'next/link';

export default function Certificates({ className = "" }: { className?: string }) {
  const { data } = useData<Certificate[]>('/api/certificates', certificatesData);
  const featured = data.filter((c) => c.featured);
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section className={`section certs ${className}`.trim()} id="certificates">
      <div className="container">
        <div className="s-head reveal">
          <span className="s-label mono">05 — sertifikatlar</span>
          <h2 className="s-title">Sertifikatlar</h2>
        </div>
        <div className="certs-grid">
          {featured.map((cert, idx) => (
            <div key={cert.id} style={{ ['--d' as any]: `${idx * 0.09}s` } as React.CSSProperties}>
              <button
                className="cert-btn"
                onClick={() => setActive(cert)}
                aria-label={`Open certificate ${cert.title}`}
                style={{ background: 'transparent', border: 'none', padding: 0, width: '100%' }}
              >
                <CertificateCard cert={cert} />
              </button>
            </div>
          ))}
        </div>
        <div className="certs-foot reveal">
          <Link href="/certificates" className="btn ghost">
            Barcha Sertifikatlar →
          </Link>
        </div>
      </div>
      {active && <CertificateModal cert={active} onClose={() => setActive(null)} />}
    </section>
  );
}
