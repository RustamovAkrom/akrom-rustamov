"use client";

import { useState } from 'react';
import { useData } from '@/hooks/useData';
import { certificatesData } from '@/lib/data';
import CertificateCard from '@/components/ui/CertificateCard';
import CertificateModal from '@/components/ui/CertificateModal';
import CertificateActions from '@/components/ui/CertificateActions';
import { useLocale, useTranslations } from 'next-intl';
import type { AppLocale } from '@/i18n/routing';
import type { LocalizedCertificate } from '@/types';
import { localizeClientData } from '@/lib/localize-client';
import { useReveal } from '@/hooks/useReveal';

type Props = {
  sharedCertificateId?: number;
};

export default function CertificatesPageClient({ sharedCertificateId }: Props) {
  useReveal();
  const t = useTranslations('CertificatesPage');
  const tc = useTranslations('Common');
  const locale = useLocale() as AppLocale;
  const fallback = localizeClientData(certificatesData, locale);
  const { data } = useData<LocalizedCertificate[]>('/api/certificates', fallback);
  const [active, setActive] = useState<LocalizedCertificate | null>(() =>
    fallback.find((certificate) => certificate.id === sharedCertificateId) ?? null,
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="s-head reveal">
            <span className="s-label mono">{t('eyebrow')}</span>
            <h1 className="s-title">{t('title')}</h1>
            <p className="s-sub">{t('description')}</p>
          </div>
        </div>
      </section>

      <section className="section certs-list">
        <div className="container">
          <div className="certs-grid">
            {data.map((cert, idx) => (
              <div id={`certificate-${cert.id}`} key={cert.id} className="cert-item reveal" style={{ '--d': `${idx * 0.07}s` } as React.CSSProperties & Record<'--d', string>}>
                <button className="cert-btn" onClick={() => setActive(cert)} style={{ background: 'transparent', border: 'none', padding: 0, width: '100%' }} aria-label={tc('openCertificate', { title: cert.title })}>
                  <CertificateCard cert={cert} detailed />
                </button>
                <CertificateActions cert={cert} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {active && <CertificateModal cert={active} onClose={() => setActive(null)} />}
    </>
  );
}
