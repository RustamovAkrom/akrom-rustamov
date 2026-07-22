import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CertificatesPageClient from "@/components/certificates/CertificatesPageClient";
import type { AppLocale } from "@/i18n/routing";

type CertificatesPageProps = { params: Promise<unknown> };
type CertificatesPageSearchParams = Promise<{ certificate?: string | string[] }>;

export async function generateMetadata({ params }: CertificatesPageProps): Promise<Metadata> {
  const { locale } = await params as { locale: AppLocale };
  const t = await getTranslations({ locale, namespace: "CertificatesPage" });
  return { title: "Certificates | Akrom Rustamov", description: t("description") };
}

export default async function CertificatesPage({
  params,
  searchParams,
}: CertificatesPageProps & { searchParams: CertificatesPageSearchParams }) {
  const { locale } = await params as { locale: AppLocale };
  const { certificate } = await searchParams;
  const certificateId = typeof certificate === 'string' ? Number(certificate) : Number.NaN;
  setRequestLocale(locale);
  return (
    <main className="certificates-page">
      <CertificatesPageClient sharedCertificateId={Number.isSafeInteger(certificateId) ? certificateId : undefined} />
    </main>
  );
}
