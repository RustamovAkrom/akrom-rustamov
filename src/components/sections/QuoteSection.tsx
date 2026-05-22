'use client';

import { quoteData } from '@/lib/data';

export default function QuoteSection() {
    return (
        <section className="section quote-section" id="quote">
            <div className="container">
                <div className="quote-wrap reveal">
                    <blockquote className="quote-text">
                        &ldquo;{quoteData.text}&rdquo;
                    </blockquote>
                    <cite className="quote-author mono">— {quoteData.author}</cite>
                </div>
            </div>
            <div
                className="organic-blob"
                style={{
                    width: '400px',
                    height: '400px',
                    background: 'var(--glow-purple)',
                    top: '10%',
                    left: '-10%',
                    opacity: 0.4,
                }}
            />
            <div
                className="organic-blob"
                style={{
                    width: '300px',
                    height: '300px',
                    background: 'var(--glow-cyan)',
                    bottom: '10%',
                    right: '-5%',
                    opacity: 0.3,
                    animationDelay: '-6s',
                }}
            />
        </section>
    );
}
