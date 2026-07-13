"use client";

import { useState } from 'react';
import { certificatesData } from '@/lib/data';
import CertificateCard from '@/components/ui/CertificateCard';
import CertificateModal from '@/components/ui/CertificateModal';

export default function CertificatesPageClient() {
  const all = certificatesData;
  const [active, setActive] = useState<any | null>(null);

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="s-head reveal">
            <span className="s-label mono">Sertifikatlar</span>
            <h1 className="s-title">Sertifikatlar</h1>
            <p className="s-sub">Dastur muhandisligi yo‘lidagi professional sertifikatlarim va erishgan yutuqlarim.</p>
          </div>
        </div>
      </section>

      <section className="section certs-list">
        <div className="container">
          <div className="certs-grid">
            {all.map((cert, idx) => (
              <div key={cert.id} className="reveal" style={{ ['--d' as any]: `${idx * 0.07}s` } as React.CSSProperties}>
                <button className="cert-btn" onClick={() => setActive(cert)} style={{ background: 'transparent', border: 'none', padding: 0, width: '100%' }} aria-label={`Open certificate ${cert.title}`}>
                  <CertificateCard cert={cert} detailed />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {active && <CertificateModal cert={active} onClose={() => setActive(null)} />}
    </>
  );
}
