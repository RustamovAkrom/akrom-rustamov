/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';

const quotes = [
    { text: 'First, solve the problem. Then, write the code.', author: 'John Johnson' },
    { text: 'Code is like humor. When you have to explain it, its bad.', author: 'Cory House' },
    { text: 'Simplicity is the soul of efficiency.', author: 'Austin Freeman' },
    { text: 'Make it work, make it right, make it fast.', author: 'Kent Beck' },
    { text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', author: 'Martin Fowler' },
    { text: 'The best error message is the one that doesnt show up.', author: 'Thomas Fuchs' },
    { text: 'Talk is cheap. Show me the code.', author: 'Linus Torvalds' },
    { text: 'Programs must be written for people to read, and only incidentally for machines to execute.', author: 'Harold Abelson' },
    { text: 'The most damaging phrase in the language is: We have always done it this way.', author: 'Grace Hopper' },
    { text: 'It is not a bug - it is an undocumented feature.', author: 'Anonymous' },
    { text: 'Cleaning up your code is like cleaning up your room. You have to do it regularly.', author: 'Unknown' },
    { text: 'Before software can be reusable it first has to be usable.', author: 'Ralph Johnson' },
    { text: 'The function of good software is to make the complex appear to be simple.', author: 'Grady Booch' },
    { text: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.', author: 'Antoine de Saint-Exupery' },
    { text: 'It is harder to read code than to write it.', author: 'Joel Spolsky' },
];

function getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
}

export default function QuoteSection({ className = "" }: { className?: string }) {
    const [quoteIndex, setQuoteIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        setQuoteIndex(getRandomIndex(quotes.length));
    }, []);

    const changeQuote = () => {
        setIsAnimating(true);
        setTimeout(() => {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * quotes.length);
            } while (newIndex === quoteIndex);
            setQuoteIndex(newIndex);
            setIsAnimating(false);
        }, 300);
    };

    // Show first quote while hydrating, then random quote after mount
    const quote = quotes[quoteIndex];

    return (
        <section className={`section quote-section ${className}`.trim()} id="quote">
            <span className="quote-mark" aria-hidden="true">&ldquo;</span>
            <div className="container">
                <div className="quote-wrap reveal">
                    <blockquote className={`quote-text ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                        {quote.text}
                    </blockquote>
                    <cite className="quote-author mono">— {quote.author}</cite>
                    <button
                        className="quote-refresh"
                        onClick={changeQuote}
                        aria-label="New quote"
                        title="New quote"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                            <path d="M3 3v5h5" />
                            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                            <path d="M16 21h5v-5" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
