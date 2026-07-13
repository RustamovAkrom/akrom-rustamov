"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Certificate } from '@/types';

type Props = {
  cert: Certificate;
  detailed?: boolean;
  href?: string;
};

export default function CertificateCard({ cert, detailed = false, href }: Props) {
  const content = (
    <article className={`cert reveal ${detailed ? 'cert--detailed' : ''}`}>
      <div className="cert__thumb">
        <Image
          src={cert.image}
          alt={cert.title}
          width={560}
          height={350}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
          loading={detailed ? 'eager' : 'lazy'}
        />
      </div>
      <div className="cert__body">
        <h3 className="cert__title">{cert.title}</h3>
        <p className="cert__org">{cert.issuer}</p>
        <p className="cert__desc">{cert.description}</p>
        {detailed && <p className="cert__date mono">Issued: {cert.issueDate}</p>}
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="cert-link">
        {content}
      </Link>
    );
  }

  return content;
}
