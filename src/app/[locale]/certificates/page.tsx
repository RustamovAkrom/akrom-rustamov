import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CertificatesPageClient from "@/components/certificates/CertificatesPageClient";
import type { AppLocale } from "@/i18n/routing";

type CertificatesPageProps = { params: Promise<unknown> };

export async function generateMetadata({ params }: CertificatesPageProps): Promise<Metadata> {
  const { locale } = await params as { locale: AppLocale };
  const t = await getTranslations({ locale, namespace: "CertificatesPage" });
  return { title: "Certificates | Akrom Rustamov", description: t("description") };
}

export default async function CertificatesPage({ params }: CertificatesPageProps) {
  const { locale } = await params as { locale: AppLocale };
  setRequestLocale(locale);
  return <main className="certificates-page"><CertificatesPageClient /></main>;
}
