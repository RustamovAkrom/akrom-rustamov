"use client";

import { useEffect } from 'react';
import Image from 'next/image';
import type { Certificate } from '@/types';

type Props = {
  cert: Certificate;
  onClose: () => void;
};

export default function CertificateModal({ cert, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [onClose]);

  return (
    <div className="cert-modal" role="dialog" aria-modal="true" aria-label={`Sertifikat ${cert.title}`}>
      <div className="cert-modal__backdrop" onClick={onClose} />
      <div className="cert-modal__card">
        <button className="cert-modal__close" onClick={onClose} aria-label="Sertifikatni yoping">✕</button>
        <div className="cert-modal__inner">
          <div className="cert-modal__img">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              sizes="(max-width: 880px) 100vw, 680px"
              style={{ objectFit: 'contain' }}
              priority
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
