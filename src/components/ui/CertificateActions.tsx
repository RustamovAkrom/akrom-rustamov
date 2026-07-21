"use client";

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { LocalizedCertificate } from '@/types';

type Props = {
  cert: LocalizedCertificate;
};

export default function CertificateActions({ cert }: Props) {
  const locale = useLocale();
  const t = useTranslations('Common');
  const [copied, setCopied] = useState(false);

  const shareCertificate = async () => {
    const url = `${window.location.origin}/${locale}/certificates#certificate-${cert.id}`;
    const shareData = { title: cert.title, text: cert.description, url };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be unavailable outside a secure context.
    }
  };

  return (
    <div className="cert-actions">
      <button
        type="button"
        className="cert-actions__button"
        onClick={shareCertificate}
        aria-label={t('shareCertificate', { title: cert.title })}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        <span>{copied ? t('copied') : t('shareCertificate')}</span>
      </button>
      <a
        className="cert-actions__button"
        href={cert.image}
        download={`${cert.title}.jpg`}
        aria-label={t('downloadCertificate', { title: cert.title })}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
        <span>{t('downloadCertificate')}</span>
      </a>
    </div>
  );
}
