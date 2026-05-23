"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [search, setSearch] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    allPosts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["all", ...Array.from(tags).sort()];
  }, []);

  const filtered = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesTag = activeTag === "all" || post.tags.includes(activeTag);
      const matchesSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());
      return matchesTag && matchesSearch;
    });
  }, [activeTag, search]);

  // Reveal animation for dynamically filtered posts
  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    container.querySelectorAll(".reveal:not(.in)").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [filtered]);

  return (
    <main className="blog-page">
      {/* Blog Hero */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero__inner reveal">
            <span className="s-label mono">Blog</span>
            <h1 className="blog-hero__title">
              Thoughts on <em>code,</em> architecture, and engineering.
            </h1>
            <p className="blog-hero__sub">
              Deep dives into backend development, system design, and the tools I use every day.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="blog-filters">
        <div className="container">
          <div className="blog-filters__inner reveal">
            <input
              type="text"
              className="blog-search"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="blog-tags">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`blog-tag ${activeTag === tag ? "active" : ""}`}
                  onClick={() => setActiveTag(tag)}
                >
                  {tag === "all" ? "All" : tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="blog-list-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="blog-empty reveal">
              <p>No articles found matching your criteria.</p>
            </div>
          ) : (
            <div ref={listRef} className="blog-list">
              {filtered.map((post, idx) => (
                <article
                  key={post.slug}
                  className="blog-post-card reveal"
                  style={{ "--d": `${idx * 0.08}s` } as React.CSSProperties}
                >
                  <div className="blog-post-card__meta">
                    <span className="blog-post-card__date mono">{post.formattedDate}</span>
                    <span className="blog-post-card__rt mono">{post.readingTime}</span>
                  </div>
                  <div className="blog-post-card__tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="pill sm">{tag}</span>
                    ))}
                  </div>
                  <h2 className="blog-post-card__title">
                    <Link href={post.url}>{post.title}</Link>
                  </h2>
                  <p className="blog-post-card__excerpt">{post.description}</p>
                  <Link href={post.url} className="blog-post-card__link mono">
                    Read article →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
