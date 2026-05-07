'use client';

import { useEffect, useState } from 'react';

export default function Skills() {
    const [skills, setSkills] = useState<any>(null);

    useEffect(() => {
        fetch('/api/skills')
            .then(res => res.json())
            .then(data => {
                setSkills(data);
                // После загрузки данных принудительно показываем все блоки
                setTimeout(() => {
                    document.querySelectorAll('.sk').forEach(el => {
                        el.classList.add('in');
                    });
                }, 100);
            })
            .catch(console.error);
    }, []);

    // Статика пока грузятся данные
    if (!skills) {
        return (
            <section className="section skills" id="skills">
                <div className="container">
                    <div className="s-head reveal">
                        <span className="s-label mono">02 — skills</span>
                        <h2 className="s-title">Stack &amp; Expertise</h2>
                    </div>
                    <div className="sk-grid">
                        <div className="sk reveal" style={{ '--d': '0s' } as React.CSSProperties}>
                            <span className="sk__n mono">01</span>
                            <h3 className="sk__title">Backend &amp; Core</h3>
                            <div className="sk__pills">
                                <span className="pill hi">Python</span><span className="pill hi">FastAPI</span>
                                <span className="pill hi">Django</span><span className="pill">SQLAlchemy</span>
                                <span className="pill">Pydantic</span><span className="pill">Aiogram 3</span>
                            </div>
                            <div className="sk__glow"></div>
                        </div>

                        <div className="sk reveal" style={{ '--d': '.07s' } as React.CSSProperties}>
                            <span className="sk__n mono">02</span>
                            <h3 className="sk__title">Architecture</h3>
                            <div className="sk__pills">
                                <span className="pill hi">REST API Design</span><span className="pill hi">Clean Arch.</span>
                                <span className="pill">JWT Auth</span><span className="pill">RBAC</span>
                                <span className="pill">Async Programming</span>
                            </div>
                            <div className="sk__glow"></div>
                        </div>

                        <div className="sk reveal" style={{ '--d': '.14s' } as React.CSSProperties}>
                            <span className="sk__n mono">03</span>
                            <h3 className="sk__title">DB &amp; Messaging</h3>
                            <div className="sk__pills">
                                <span className="pill hi">PostgreSQL</span><span className="pill hi">Redis</span>
                                <span className="pill">RabbitMQ</span><span className="pill">Celery</span>
                            </div>
                            <div className="sk__glow"></div>
                        </div>

                        <div className="sk reveal" style={{ '--d': '.21s' } as React.CSSProperties}>
                            <span className="sk__n mono">04</span>
                            <h3 className="sk__title">DevOps</h3>
                            <div className="sk__pills">
                                <span className="pill hi">Docker</span><span className="pill hi">Linux</span>
                                <span className="pill">NGINX</span><span className="pill">Git / GitHub</span>
                            </div>
                            <div className="sk__glow"></div>
                        </div>

                        <div className="sk reveal" style={{ '--d': '.28s' } as React.CSSProperties}>
                            <span className="sk__n mono">05</span>
                            <h3 className="sk__title">Frontend (Basic)</h3>
                            <div className="sk__pills">
                                <span className="pill">HTML / CSS</span><span className="pill">JavaScript</span>
                                <span className="pill">React</span><span className="pill">Next.js</span>
                            </div>
                            <div className="sk__glow"></div>
                        </div>

                        <div className="sk reveal" style={{ '--d': '.35s' } as React.CSSProperties}>
                            <span className="sk__n mono">06</span>
                            <h3 className="sk__title">Languages</h3>
                            <div className="sk__pills">
                                <span className="pill hi">Uzbek (Native)</span>
                                <span className="pill">Russian (B2)</span><span className="pill">English (B2)</span>
                            </div>
                            <div className="sk__glow"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // API данные
    return (
        <section className="section skills" id="skills">
            <div className="container">
                <div className="s-head reveal">
                    <span className="s-label mono">02 — skills</span>
                    <h2 className="s-title">Stack &amp; Expertise</h2>
                </div>
                <div className="sk-grid">
                    {skills.map((category: any, idx: number) => (
                        <div
                            key={idx}
                            className="sk reveal"
                            style={{ '--d': `${idx * 0.07}s` } as React.CSSProperties}
                        >
                            <span className="sk__n mono">{String(idx + 1).padStart(2, '0')}</span>
                            <h3 className="sk__title">{category.title}</h3>
                            <div className="sk__pills">
                                {category.pills.map((pill: any, pillIdx: number) => (
                                    <span
                                        key={pillIdx}
                                        className={pill.highlight ? "pill hi" : "pill"}
                                    >
                                        {pill.name}
                                    </span>
                                ))}
                            </div>
                            <div className="sk__glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
