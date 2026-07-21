import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { AppLocale } from "@/i18n/routing";

type Props = { params: Promise<unknown> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params as { locale: AppLocale };
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Blog" });
  return {
    title: t("heroEyebrow"),
    description: t("heroSub"),
    alternates: {
      canonical: "/blog",
    },
    openGraph: {
      title: "Backend Development Blog",
      description: t("heroSub"),
      url: "/blog",
    },
  };
}

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<unknown>;
}) {
  const { locale } = await params as { locale: AppLocale };
  setRequestLocale(locale);
  return children;
}
