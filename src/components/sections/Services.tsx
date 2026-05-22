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
};

export default function Services() {
    const { data } = useData<Service[]>('/api/services', servicesData);

    return (
        <section className="section services" id="services">
            <div className="container">
                <div className="s-head reveal">
                    <span className="s-label mono">04 — services</span>
                    <h2 className="s-title">What I Offer</h2>
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
