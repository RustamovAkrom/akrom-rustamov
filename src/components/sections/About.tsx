'use client';

import { useData } from '@/hooks/useData';
import { aboutData } from '@/lib/data';
import type { AboutData, LocalizedData } from '@/types';
import { useLocale, useTranslations } from 'next-intl';
import type { AppLocale } from '@/i18n/routing';
import { localizeClientData } from '@/lib/localize-client';

export default function About({ className = "" }: { className?: string }) {
    const t = useTranslations('Sections');
    const locale = useLocale() as AppLocale;
    const fallback = localizeClientData(aboutData, locale);
    const { data } = useData<LocalizedData<AboutData>>('/api/about', fallback);

    return (
        <section className={`section about ${className}`.trim()} id="about">
            <div className="container">
                <div className="s-head reveal">
                    <span className="s-label mono">01 — {t('about')}</span>
                    <h2 className="s-title">{t('about')}</h2>
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

                        <div className="about__highlights reveal" style={{ '--d': '.12s' } as React.CSSProperties}>
                            <div className="about__highlight">
                                <span className="mono">01</span>
                                <div>
                                    <strong>Backend-first thinking</strong>
                                    <p>Clean APIs, strong data modeling, and systems designed for stability.</p>
                                </div>
                            </div>
                            <div className="about__highlight">
                                <span className="mono">02</span>
                                <div>
                                    <strong>Product-minded execution</strong>
                                    <p>Technical decisions aligned with the real business need and user experience.</p>
                                </div>
                            </div>
                            <div className="about__highlight">
                                <span className="mono">03</span>
                                <div>
                                    <strong>Reliable delivery</strong>
                                    <p>From architecture to deployment, I build systems that teams can trust.</p>
                                </div>
                            </div>
                        </div>

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
                        <div className="about__visual" aria-label="Animated backend network visual">
                            <div className="about__visual-frame">
                                <div className="about__matrix" aria-hidden="true">
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                <div className="about__visual-content">
                                    <span className="mono">System</span>
                                    <strong>Backend • Data • Delivery</strong>
                                </div>
                            </div>
                        </div>

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
