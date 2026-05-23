import Image from 'next/image';
import { sporePositions } from '@/lib/fireflies';

export default function Hero() {
    return (
        <>
            {/* <!-- ═══ HERO ═══ --> */}
            <section className="hero" id="home">

                {/* Spores - Forest Effect */}
                <div className="spores" aria-hidden="true">
                    {sporePositions.map((sp, i) => (
                        <div
                            key={i}
                            className="spore"
                            style={{
                                left: sp.left,
                                top: sp.top,
                                animationDelay: sp.delay,
                                animationDuration: sp.duration,
                            }}
                        />
                    ))}
                </div>

                {/* <!-- 3D Orb avatar --> */}
                <div className="orb-wrap" id="heroOrb">
                    <div className="orb">
                        <div className="orb__core">
                            <Image className="orb__img" src="/images/avatar.png" alt="Akrom Rustamov avatar" width={200} height={200} priority quality={85} />
                        </div>
                        <div className="orb__halo h1" />
                        <div className="orb__halo h2" />
                        <div className="orb__halo h3" />
                        <div className="orb__shine" />
                    </div>
                    <div className="orb__badge">
                        <span className="orb__badge-dot" />
                        <span className="mono">available · Tashkent</span>
                    </div>
                </div>

                <div className="hero__copy">
                    <p className="hero__eyebrow reveal in" style={{ '--d': '0s' } as React.CSSProperties}>
                        <span className="mono dim">&lt;</span>
                        <span className="typing">Backend Engineer · Python</span>
                        <span className="mono dim">/&gt;</span>
                    </p>
                    <h1 className="hero__name">
                        <span className="hn-line reveal in" style={{ '--d': '.06s' } as React.CSSProperties}>Akrom</span>
                        <span className="hn-line hn-stroke reveal in" style={{ '--d': '.12s' } as React.CSSProperties}>Rustamov</span>
                    </h1>
                    <p className="hero__tag reveal in" style={{ '--d': '.18s' } as React.CSSProperties}>
                        I build scalable,<br />high-performance<br />
                        <em className="hero__tag-em">backend systems.</em>
                    </p>
                    <div className="hero__btns reveal in" style={{ '--d': '.24s' } as React.CSSProperties}>
                        <a href="#portfolio" className="btn solid">View Work</a>
                        <a href="#contact" className="btn ghost">Contact</a>
                    </div>
                    <div className="hero__socs reveal in" style={{ '--d': '.30s' } as React.CSSProperties}>
                        <a href="https://github.com/RustamovAkrom" target="_blank" rel="noopener" className="hero__soc">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="15">
                                <path
                                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.55-1.4-1.33-1.77-1.33-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener" className="hero__soc">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="15">
                                <path
                                    d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9H7.12v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="hero__scroll-hint">
                    <div className="scroll-track">
                        <div className="scroll-thumb"></div>
                    </div>
                    <span className="mono">scroll</span>
                </div>

            </section>

        </>
    )
}
