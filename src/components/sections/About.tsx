'use client';

import Image from 'next/image';
import aboutImage from '../../../public/about_me.png';
import { aboutData } from '@/lib/data';
import { useLocale, useTranslations } from 'next-intl';
import type { AppLocale } from '@/i18n/routing';
import { localizeClientData } from '@/lib/localize-client';

export default function About({ className = "" }: { className?: string }) {
    const t = useTranslations('Sections');
    const locale = useLocale() as AppLocale;
    const data = localizeClientData(aboutData, locale);

    return (
        <section className={`section about ${className}`.trim()} id="about">
            <div className="container">
                <div className="s-head reveal">
                    <span className="s-label mono">01 — {t('about')}</span>
                    <h2 className="s-title">{t('about')}</h2>
                </div>

                <div className="about__grid">
                    <div className="about__left">
                        <p className="about__lead reveal" style={{ '--d': '.04s' } as React.CSSProperties}>{data.lead}</p>
                        <p className="about__body reveal" style={{ '--d': '.14s' } as React.CSSProperties}>
                            {data.body}
                        </p>
                    </div>

                    <div className="about__right reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
                        <div className="about__visual">
                            <div className="about__visual-frame">
                                <Image
                                    className="about__portrait"
                                    src={aboutImage}
                                    alt="Akrom Rustamov"
                                    fill
                                    sizes="(max-width: 880px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <section className="about__block reveal" aria-labelledby="about-approach-title">
                    <div className="about__block-head">
                        <span className="about__experience-index mono">01</span>
                        <h3 id="about-approach-title">{t('aboutApproach')}</h3>
                    </div>
                    <div className="about__highlights">
                        {data.highlights.map((highlight, index) => (
                            <article
                                className="about__highlight reveal"
                                key={highlight.title}
                                style={{ '--d': `${index * 0.12}s` } as React.CSSProperties}
                            >
                                <span className="mono">{String(index + 1).padStart(2, '0')}</span>
                                <div>
                                    <h4>{highlight.title}</h4>
                                    <p>{highlight.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="about__block about__experience reveal" aria-labelledby="about-experience-title">
                    <div className="about__block-head">
                        <span className="about__experience-index mono">03</span>
                        <h3 id="about-experience-title">{t('experience')}</h3>
                    </div>
                    <div className="tl">
                        {data.timeline.map((item, index) => (
                            <article
                                className="tl__item reveal"
                                key={item.role}
                                style={{ '--d': `${index * 0.12}s` } as React.CSSProperties}
                            >
                                <div className={`tl__dot ${item.isLive ? 'tl__dot--live' : ''}`} />
                                <div className="tl__body">
                                    <h4 className="tl__role">{item.role}</h4>
                                    <p className="tl__yr mono">{item.year}</p>
                                    <p className="tl__desc">{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
}
