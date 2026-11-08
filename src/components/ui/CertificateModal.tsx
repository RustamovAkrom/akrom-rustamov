"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import type { LocalizedCertificate } from '@/types';
import { useTranslations } from 'next-intl';

type Props = {
  cert: LocalizedCertificate;
  onClose: () => void;
};

export default function CertificateModal({ cert, onClose }: Props) {
  const t = useTranslations('Common');

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [onClose]);

  return (
    <div className="cert-modal" role="dialog" aria-modal="true" aria-label={t('openCertificate', { title: cert.title })}>
      <button type="button" className="cert-modal__backdrop" onClick={onClose} aria-label={t('closeCertificate')} />
      <div className="cert-modal__card">
        <button type="button" className="cert-modal__close" onClick={onClose} aria-label={t('closeCertificate')}>
          ×
        </button>
        <div className="cert-modal__inner">
          <div className="cert-modal__img">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              sizes="(max-width: 880px) 100vw, 720px"
              style={{ objectFit: 'contain' }}
              loading="eager"
            />
          </div>
          <div className="cert-modal__meta">
            <h3 className="cert-modal__title">{cert.title}</h3>
            <p className="cert-modal__issuer">{cert.issuer} • {cert.issueDate}</p>
            <p className="cert-modal__desc">{cert.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
