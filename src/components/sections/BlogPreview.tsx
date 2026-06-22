'use client';

import Link from 'next/link';
import { allPosts } from 'contentlayer/generated';

export default function BlogPreview({ className = "" }: { className?: string }) {
    const previewPosts = allPosts.slice(0, 3);

    return (
        <section className={`section blog ${className}`.trim()} id="blog">
            <div className="container">
                <div className="s-head reveal">
                    <span className="s-label mono">04.5 — writing</span>
                    <h2 className="s-title">Latest <em>thoughts.</em></h2>
                </div>
                <div className="blog-grid">
                    {previewPosts.map((post, idx) => (
                        <Link
                            key={post.slug}
                            href={post.url}
                            className="blog-card reveal"
                            style={{ '--d': `${idx * 0.1}s` } as React.CSSProperties}
                        >
                            <div className="blog-card__head">
                                <span className="blog-card__date mono">{post.formattedDate}</span>
                                <div className="blog-card__tags">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="pill sm">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="blog-card__title">{post.title}</h3>
                            <p className="blog-card__excerpt">{post.description}</p>
                            <span className="blog-card__link mono">Read more →</span>
                        </Link>
                    ))}
                </div>
                <div className="blog-preview__foot reveal">
                    <Link href="/blog" className="btn ghost">
                        View all articles <span className="btn-arr">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
