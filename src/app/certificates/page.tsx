import type { Metadata } from 'next';
import CertificatesPageClient from '@/components/certificates/CertificatesPageClient';

export const metadata: Metadata = {
  title: 'Sertifikatlar | Akrom Rustamov',
  description: 'Dastur muhandisligi yo‘lidagi professional sertifikatlarim va erishgan yutuqlarim.',
};

export default function CertificatesPage() {
  return (
    <main className="certificates-page">
      <CertificatesPageClient />
    </main>
  );
}
