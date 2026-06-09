"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
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

  const handleShare = async (e: React.MouseEvent, post: typeof allPosts[0]) => {
    e.preventDefault();
    e.stopPropagation();
    const articleUrl = window.location.origin + post.url;
    const shareData = {
      title: post.title,
      text: `${post.description} - ${articleUrl}`,
      url: articleUrl,
    };

    // Native share API (mobile)
    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share cancelled");
      }
      return;
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopiedSlug(post.slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

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

  const activeFilterLabel = activeTag === "all" ? "Filters" : activeTag;

  return (
    <main className="blog-page">
      {/* Reading Progress */}
      <div className="blog-progress">
        <div className="blog-progress__bar" style={{ width: "0%" }} />
      </div>

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
            <div className="blog-filters__row">
              <input
                type="text"
                className="blog-search"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className={`blog-filters__toggle ${showFilters ? "open" : ""} ${activeTag !== "all" ? "has-active" : ""}`}
                onClick={() => setShowFilters((s) => !s)}
                aria-expanded={showFilters}
                aria-label="Toggle filters"
              >
                <span className="blog-filters__toggle-text">{activeFilterLabel}</span>
                <svg className="blog-filters__toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
            <div className={`blog-filters__panel ${showFilters ? "open" : ""}`}>
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
                  onMouseEnter={() => setHoveredPost(post.slug)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div className="blog-post-card__meta">
                    <span className="blog-post-card__date mono">{post.formattedDate}</span>
                    <span className="blog-post-card__rt mono">{post.readingTime}</span>
                  </div>
                  <div className="blog-post-card__content">
                    <div className="blog-post-card__tags">
                      {post.tags.map((tag) => (
                        <span key={tag} className="pill sm">{tag}</span>
                      ))}
                    </div>
                    <h2 className="blog-post-card__title">
                      <Link href={post.url}>{post.title}</Link>
                    </h2>
                    <p className="blog-post-card__excerpt">{post.description}</p>
                    <div className="blog-post-card__actions">
                      <Link href={post.url} className="blog-post-card__link mono">
                        Read article →
                      </Link>
                      <button
                        className={`blog-post-card__action-btn ${copiedSlug === post.slug ? "copied" : ""}`}
                        onClick={(e) => handleShare(e, post)}
                        title="Share article"
                      >
                        {copiedSlug === post.slug ? (
                          <span className="mono" style={{ fontSize: "10px", fontWeight: 600 }}>
                            Copied
                          </span>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                            <circle cx="18" cy="5" r="3" />
                            <circle cx="6" cy="12" r="3" />
                            <circle cx="18" cy="19" r="3" />
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
