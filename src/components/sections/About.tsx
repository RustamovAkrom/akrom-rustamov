'use client';

import { useEffect, useState } from 'react';

export default function About() {
    const [aboutData, setAboutData] = useState<any>(null);

    useEffect(() => {
        fetch('/api/about')
            .then(res => res.json())
            .then(setAboutData)
            .catch(console.error);
    }, []);

    // Показываем оригинальную статику пока грузятся данные
    if (!aboutData) {
        return (
            <>
                <section className="section about" id="about">
                    <div className="container">
                        <div className="s-head reveal">
                            <span className="s-label mono">01 — about</span>
                            <h2 className="s-title">Building systems<br /><em>that scale.</em></h2>
                        </div>
                        <div className="about__grid">
                            <div className="about__left">
                                <p className="about__lead reveal">Backend Engineer specializing in <strong>FastAPI</strong> and
                                    <strong>Django</strong>. Experienced in REST APIs, JWT/RBAC auth, and async services.</p>
                                <p className="about__body reveal" style={{ '--d': '.08s' } as React.CSSProperties}>Focused on clean architecture, performance
                                    optimization, and secure backend design. Pursuing BSc in IT (Cybersecurity) at IDU,
                                    Tashkent.</p>
                                <div className="about__stats reveal" style={{ '--d': '.14s' } as React.CSSProperties}>
                                    <div className="about__stat">
                                        <span className="about__stat-n" data-count="3">0</span><span className="about__stat-n">+</span>
                                        <span className="about__stat-l">Projects</span>
                                    </div>
                                    <div className="about__stat">
                                        <span className="about__stat-n mono">B2</span>
                                        <span className="about__stat-l">English</span>
                                    </div>
                                    <div className="about__stat">
                                        <span className="about__stat-n" data-count="2">0</span><span className="about__stat-n">+</span>
                                        <span className="about__stat-l">Yrs Coding</span>
                                    </div>
                                </div>
                            </div>
                            <div className="about__right reveal" style={{ '--d': '.1s' } as React.CSSProperties}>
                                <div className="tl">
                                    <div className="tl__item">
                                        <div className="tl__dot"></div>
                                        <div className="tl__body">
                                            <p className="tl__role">Freelance Backend Developer</p>
                                            <p className="tl__yr mono">2024 – 2025</p>
                                            <p className="tl__desc">REST APIs, JWT/RBAC, DB optimization. FastAPI &amp; Django for
                                                clients. Production-ready.</p>
                                        </div>
                                    </div>
                                    <div className="tl__item">
                                        <div className="tl__dot"></div>
                                        <div className="tl__body">
                                            <p className="tl__role">Najot Ta'lim — Backend Course</p>
                                            <p className="tl__yr mono">2023 – 2024</p>
                                            <p className="tl__desc">Intensive Python, Django, REST API fundamentals.</p>
                                        </div>
                                    </div>
                                    <div className="tl__item">
                                        <div className="tl__dot tl__dot--live"></div>
                                        <div className="tl__body">
                                            <p className="tl__role">IDU Tashkent — BSc IT (Cybersecurity)</p>
                                            <p className="tl__yr mono">2025 – Present</p>
                                            <p className="tl__desc">Information Technology, Cybersecurity track.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    // Когда данные загружены - показываем с обновлёнными данными
    return (
        <>
            <section className="section about" id="about">
                <div className="container">
                    <div className="s-head reveal">
                        <span className="s-label mono">01 — about</span>
                        <h2 className="s-title">Building systems<br /><em>that scale.</em></h2>
                    </div>
                    <div className="about__grid">
                        <div className="about__left">
                            <p className="about__lead reveal" dangerouslySetInnerHTML={{ __html: aboutData.lead }} />
                            <p className="about__body reveal" style={{ '--d': '.08s' } as React.CSSProperties}>
                                {aboutData.body}
                            </p>
                            <div className="about__stats reveal" style={{ '--d': '.14s' } as React.CSSProperties}>
                                {aboutData.stats.map((stat: any, idx: number) => (
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
                                {aboutData.timeline.map((item: any, idx: number) => (
                                    <div className="tl__item" key={idx}>
                                        <div className={`tl__dot ${item.isLive ? 'tl__dot--live' : ''}`}></div>
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
        </>
    );
}
