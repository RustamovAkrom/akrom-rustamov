'use client';

import { useData } from '@/hooks/useData';
import { certificatesData } from '@/lib/data';
import type { LocalizedCertificate } from '@/types';
import CertificateCard from '@/components/ui/CertificateCard';
import CertificateModal from '@/components/ui/CertificateModal';
import CertificateActions from '@/components/ui/CertificateActions';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import type { AppLocale } from '@/i18n/routing';
import { localizeClientData } from '@/lib/localize-client';

export default function Certificates({ className = "" }: { className?: string }) {
  const t = useTranslations();
  const locale = useLocale() as AppLocale;
  const fallback = localizeClientData(certificatesData, locale);
  const { data } = useData<LocalizedCertificate[]>('/api/certificates', fallback);
  const featured = data.filter((c) => c.featured).slice(0, 3);
  const [active, setActive] = useState<LocalizedCertificate | null>(null);

  return (
    <section className={`section certs ${className}`.trim()} id="certificates">
      <div className="container">
        <div className="s-head reveal">
          <span className="s-label mono">{t('Sections.certificatesLabel')}</span>
          <h2 className="s-title">{t('Sections.certificates')}</h2>
        </div>
        <div className="certs-grid">
          {featured.map((cert, idx) => (
            <div id={`certificate-${cert.id}`} key={cert.id} className="cert-item" style={{ '--d': `${idx * 0.09}s` } as React.CSSProperties & Record<'--d', string>}>
              <button
                className="cert-btn"
                onClick={() => setActive(cert)}
                aria-label={t('Common.openCertificate', { title: cert.title })}
                style={{ background: 'transparent', border: 'none', padding: 0, width: '100%' }}
              >
                <CertificateCard cert={cert} />
              </button>
              <CertificateActions cert={cert} />
            </div>
          ))}
        </div>
        <div className="certs-foot reveal">
          <Link href="/certificates" className="btn ghost">
            {t('Common.allCertificates')}
          </Link>
        </div>
      </div>
      {active && <CertificateModal cert={active} onClose={() => setActive(null)} />}
    </section>
  );
}
