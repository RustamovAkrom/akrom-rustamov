'use client';

import { useEffect, useRef } from 'react';
import { funFactsData } from '@/lib/data';

function FactCard({ fact, idx }: { fact: typeof funFactsData[0]; idx: number }) {
    const countRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = countRef.current;
        if (!el) return;

        let startTime: number;
        let raf: number;
        const end = fact.value;
        const duration = 2000;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * end);
            el.textContent = current.toString();
            if (progress < 1) {
                raf = requestAnimationFrame(animate);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        raf = requestAnimationFrame(animate);
                        observer.unobserve(el);
                    }
                });
            },
            { threshold: 0.5 }
        );

        observer.observe(el);

        return () => {
            cancelAnimationFrame(raf);
            observer.disconnect();
        };
    }, [fact.value]);

    return (
        <div
            className="funfact reveal"
            style={{ "--d": `${idx * 0.1}s` } as React.CSSProperties}
        >
            <span className="funfact__n">
                <span ref={countRef}>0</span>
                <span className="funfact__suffix">{fact.suffix}</span>
            </span>
            <span className="funfact__l">{fact.label}</span>
        </div>
    );
}

export default function FunFacts() {
    return (
        <section className="section funfacts" id="funfacts">
            <div className="container">
                <div className="s-head reveal">
                    <span className="s-label mono">05.5 — stats</span>
                    <h2 className="s-title">By the <em>numbers.</em></h2>
                </div>
                <div className="funfacts-grid">
                    {funFactsData.map((fact, idx) => (
                        <FactCard key={idx} fact={fact} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}