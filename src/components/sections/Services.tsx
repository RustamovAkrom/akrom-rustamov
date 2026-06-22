'use client';

import React from 'react';
import { useData } from '@/hooks/useData';
import { servicesData } from '@/lib/data';
import type { Service } from '@/types';

const iconMap: Record<string, React.ReactNode> = {
    code: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
    ),
    file: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
    ),
    database: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
    ),
    bot: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <circle cx="12" cy="16" r="2" />
            <path d="M12 11V7a4 4 0 0 0-4-4h8a4 4 0 0 0-4 4v4" />
            <line x1="1" y1="16" x2="5" y2="16" />
            <line x1="19" y1="16" x2="23" y2="16" />
        </svg>
    ),
    zap: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
    ),
    server: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
    ),
    radio: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0-8 0" />
            <path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0-14 0" />
        </svg>
    ),
    link: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
    ),
};

export default function Services({ className = "" }: { className?: string }) {
    const { data } = useData<Service[]>('/api/services', servicesData);

    return (
        <section className={`section services ${className}`.trim()} id="services">
            <div className="container">
                <div className="s-head reveal">
                    <span className="s-label mono">04 — services</span>
                    <h2 className="s-title">Xizmatlar</h2>
                </div>
                <div className="svc-list">
                    {data.map((service, idx) => (
                        <div
                            key={service.id}
                            className="svc reveal"
                            style={{ '--d': `${idx * 0.08}s` } as React.CSSProperties}
                        >
                            <span className="svc__n mono">{String(idx + 1).padStart(2, '0')}</span>
                            <div className="svc__ico">
                                {iconMap[service.icon] || iconMap.code}
                            </div>
                            <div className="svc__body">
                                <h3 className="svc__title">{service.title}</h3>
                                <p className="svc__desc">{service.description}</p>
                            </div>
                            <span className="svc__arr">↗</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
