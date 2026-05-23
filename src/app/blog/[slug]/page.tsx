import { notFound } from "next/navigation";
import Link from "next/link";
import { allPosts } from "contentlayer/generated";
import MDXContent from "@/components/mdx/MDXContent";

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const currentIdx = allPosts.findIndex((p) => p.slug === slug);
  const prev = currentIdx > 0 ? allPosts[currentIdx - 1] : null;
  const next = currentIdx < allPosts.length - 1 ? allPosts[currentIdx + 1] : null;

  return (
    <main className="blog-article-page">
      <article className="blog-article">
        <div className="container">
          {/* Header */}
          <header className="blog-article__header reveal">
            <div className="blog-article__meta">
              <span className="blog-article__date mono">{post.formattedDate}</span>
              <span className="blog-article__dot">·</span>
              <span className="blog-article__rt mono">{post.readingTime}</span>
            </div>
            <h1 className="blog-article__title">{post.title}</h1>
            <div className="blog-article__tags">
              {post.tags.map((tag) => (
                <span key={tag} className="pill">{tag}</span>
              ))}
            </div>
          </header>

          {/* Content */}
          <div className="blog-article__body reveal">
            <MDXContent code={post.body.code} />
          </div>

          {/* Footer nav */}
          <footer className="blog-article__footer reveal">
            <div className="blog-article__nav">
              {prev ? (
                <Link href={prev.url} className="blog-article__nav-link blog-article__nav-link--prev">
                  <span className="mono">← Previous</span>
                  <strong>{prev.title}</strong>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link href={next.url} className="blog-article__nav-link blog-article__nav-link--next">
                  <span className="mono">Next →</span>
                  <strong>{next.title}</strong>
                </Link>
              ) : (
                <div />
              )}
            </div>
            <div className="blog-article__back">
              <Link href="/blog" className="btn ghost sm">
                ← All articles
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </main>
  );
}

