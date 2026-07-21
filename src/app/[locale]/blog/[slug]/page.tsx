import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { allPosts } from "contentlayer/generated";
import MDXContent from "@/components/mdx/MDXContent";
import ViewCounter from "@/components/ViewCounter";
import type { AppLocale } from "@/i18n/routing";

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: AppLocale }>;
}) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const post = allPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: post.url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: post.url,
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
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const currentIdx = allPosts.findIndex((p) => p.slug === slug);
  const prev = currentIdx > 0 ? allPosts[currentIdx - 1] : null;
  const next = currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;

  return (
    <main className="blog-article-page">
      <article className="blog-article">
        <div className="container">
          <header className="blog-article__header reveal">
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

          <div className="blog-article__body reveal">
            <MDXContent code={post.body.code} />
          </div>

          <footer className="blog-article__footer reveal">
            <div className="blog-article__nav">
              {prev ? (
                <a href={prev.url} className="blog-article__nav-link blog-article__nav-link--prev">
                  <span className="mono">← {post.title}</span>
                  <strong>{prev.title}</strong>
                </a>
              ) : (
                <div />
              )}
              {next ? (
                <a href={next.url} className="blog-article__nav-link blog-article__nav-link--next">
                  <span className="mono">{next.title} →</span>
                  <strong>{next.title}</strong>
                </a>
              ) : (
                <div />
              )}
            </div>
            <div className="blog-article__back">
              <a href="/blog" className="btn ghost sm">
                ← All articles
              </a>
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
}
