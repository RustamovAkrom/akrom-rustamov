'use client';

import { useData } from '@/hooks/useData';
import { aboutData } from '@/lib/data';
import type { AboutData } from '@/types';

export default function About({ className = "" }: { className?: string }) {
    const { data } = useData<AboutData>('/api/about', aboutData);

    return (
        <section className={`section about ${className}`.trim()} id="about">
            <div className="container">
                <div className="s-head reveal">
                    <span className="s-label mono">01 — about</span>
                    <h2 className="s-title">Men haqimda</h2>
                </div>
                <div className="about__grid">
                    <div className="about__left">
                        <p
                            className="about__lead reveal"
                            dangerouslySetInnerHTML={{ __html: data.lead }}
                        />
                        <p className="about__body reveal" style={{ '--d': '.08s' } as React.CSSProperties}>
                            {data.body}
                        </p>
                        <div className="about__stats reveal" style={{ '--d': '.14s' } as React.CSSProperties}>
                            {data.stats.map((stat, idx) => (
                                <div className="about__stat" key={idx}>
                                    {stat.isNumber ? (
                                        <>
                                            <span className="about__stat-n" data-count={stat.value}>0</span>
                                            <span className="about__stat-n">{stat.suffix || ''}</span>
                                        </>
                                    ) : (
                                        <span className="about__stat-n mono">{stat.value}</span>
                                    )}
                                    <span className="about__stat-l">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about__right reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
                        <div className="tl">
                            {data.timeline.map((item, idx) => (
                                <div className="tl__item" key={idx}>
                                    <div className={`tl__dot ${item.isLive ? 'tl__dot--live' : ''}`} />
                                    <div className="tl__body">
                                        <p className="tl__role">{item.role}</p>
                                        <p className="tl__yr mono">{item.year}</p>
                                        <p className="tl__desc">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
