/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

const quotes = [
    {
        text: 'Avval muammoni tushun, keyin yechim yoz.',
        author: 'John Johnson'
    },

    {
        text: 'Har qanday odam kompyuter tushunadigan kod yoza oladi. Yaxshi dasturchilar odamlar tushunadigan kod yozadi.',
        author: 'Martin Fowler'
    },

    {
        text: 'Soddalik — yaxshi arxitekturaning asosidir.',
        author: 'Unknown'
    },

    {
        text: 'Avval ishlaydigan qil, keyin to‘g‘ri qil, keyin tezlashtir.',
        author: 'Kent Beck'
    },

    {
        text: 'Yaxshi kod yozishdan ko‘ra, kodni tushunarli qilish muhimroq.',
        author: 'Unknown'
    },

    {
        text: 'Gapirish oson. Menga kodni ko‘rsat.',
        author: 'Linus Torvalds'
    },

    {
        text: 'Dasturlar avvalo insonlar o‘qishi uchun yoziladi, mashinalar bajarishi esa keyingi vazifa.',
        author: 'Harold Abelson'
    },

    {
        text: 'Murakkablik qo‘shish oson. Oddiylikni saqlash — haqiqiy mahorat.',
        author: 'Unknown'
    },

    {
        text: 'Yaxshi dastur murakkab jarayonlarni oddiy qilib ko‘rsatadi.',
        author: 'Grady Booch'
    },

    {
        text: 'Mukammallik qo‘shadigan narsa qolmaganda emas, olib tashlaydigan narsa qolmaganda keladi.',
        author: 'Antoine de Saint-Exupery'
    },

    {
        text: 'Kodni yozish bir marta, o‘qish esa yuzlab marta sodir bo‘ladi.',
        author: 'Unknown'
    },

    {
        text: 'Yaxshi arxitektura bugungi talabni emas, ertangi o‘zgarishni ham hisobga oladi.',
        author: 'Unknown'
    },

    {
        text: 'Eng yaxshi optimizatsiya — avval keraksiz murakkablikni olib tashlash.',
        author: 'Unknown'
    },

    {
        text: 'Kod faqat ishlashi emas, uni qo‘llab-quvvatlash ham oson bo‘lishi kerak.',
        author: 'Unknown'
    },

    {
        text: 'Professional dasturchi kod yozmaydi, u muammolarga yechim yaratadi.',
        author: 'Unknown'
    },
];

function getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
}

export default function QuoteSection({ className = "" }: { className?: string }) {
    const t = useTranslations();
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
                        aria-label={t('Common.newQuote')}
                        title={t('Common.newQuote')}
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
