import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { allPosts } from "contentlayer/generated";
import MDXContent from "@/components/mdx/MDXContent";
import ViewCounter from "@/components/ViewCounter";
import type { AppLocale } from "@/i18n/routing";

export function generateStaticParams() {
  return Array.from(new Set(allPosts.map((post) => post.slug))).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: AppLocale }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Blog" });
  const post = allPosts.find((item) => item.slug === slug && item.locale === locale);

  if (!post) {
    return { title: t("translationMissingTitle"), robots: { index: false, follow: true } };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/${locale}${post.url}`,
      languages: Object.fromEntries(
        allPosts
          .filter((item) => item.slug === slug)
          .map((item) => [item.locale, `/${item.locale}${item.url}`]),
      ),
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/${locale}${post.url}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Akrom Rustamov"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: AppLocale }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Blog" });
  const localePosts = allPosts
    .filter((item) => item.locale === locale)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const postIndex = localePosts.findIndex((item) => item.slug === slug);
  const post = postIndex >= 0 ? localePosts[postIndex] : null;

  if (!post) {
    return (
      <main className="blog-article-page">
        <section className="blog-translation-missing container">
          <span className="s-label mono">{locale.toUpperCase()}</span>
          <h1>{t("translationMissingTitle")}</h1>
          <p>{t("translationMissingText")}</p>
          <Link href="/blog" className="btn ghost sm">{t("allArticles")}</Link>
        </section>
      </main>
    );
  }

  const prev = postIndex > 0 ? localePosts[postIndex - 1] : null;
  const next = postIndex < localePosts.length - 1 ? localePosts[postIndex + 1] : null;

  return (
    <main className="blog-article-page">
      <article className="blog-article">
        <div className="container">
          <header className="blog-article__header">
            <div className="blog-article__meta">
              <span className="blog-article__date mono">{post.formattedDate}</span>
              <span className="blog-article__dot">·</span>
              <span className="blog-article__rt mono">{post.readingTime}</span>
              <span className="blog-article__dot">·</span>
              <ViewCounter slug={slug} />
            </div>
            <h1 className="blog-article__title">{post.title}</h1>
            <div className="blog-article__tags">
              {post.tags.map((tag) => (
                <span key={tag} className="pill">{tag}</span>
              ))}
            </div>
          </header>

          <div className="blog-article__body">
            <MDXContent code={post.body.code} />
          </div>

          <footer className="blog-article__footer">
            <div className="blog-article__nav">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="blog-article__nav-link blog-article__nav-link--prev">
                  <span className="mono">← Previous</span>
                  <strong>{prev.title}</strong>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link href={`/blog/${next.slug}`} className="blog-article__nav-link blog-article__nav-link--next">
                  <span className="mono">Next →</span>
                  <strong>{next.title}</strong>
                </Link>
              ) : (
                <div />
              )}
            </div>
            <div className="blog-article__back">
              <Link href="/blog" className="btn ghost sm">← All articles</Link>
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
}
