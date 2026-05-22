'use client';

import { blogPostsData } from '@/lib/data';

export default function BlogPreview() {
    return (
        <section className="section blog" id="blog">
            <div className="container">
                <div className="s-head reveal">
                    <span className="s-label mono">04.5 — writing</span>
                    <h2 className="s-title">Latest <em>thoughts.</em></h2>
                </div>
                <div className="blog-grid">
                    {blogPostsData.map((post, idx) => (
                        <article
                            key={post.id}
                            className="blog-card reveal"
                            style={{ '--d': `${idx * 0.1}s` } as React.CSSProperties}
                        >
                            <div className="blog-card__head">
                                <span className="blog-card__date mono">{post.date}</span>
                                <div className="blog-card__tags">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="pill sm">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="blog-card__title">{post.title}</h3>
                            <p className="blog-card__excerpt">{post.excerpt}</p>
                            <span className="blog-card__link mono">Read more →</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
