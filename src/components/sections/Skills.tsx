'use client';

import { useData } from '@/hooks/useData';
import { skillsData } from '@/lib/data';
import type { SkillCategory } from '@/types';
import { useTranslations } from 'next-intl';

export default function Skills({ className = "" }: { className?: string }) {
    const t = useTranslations('Sections');
    const { data } = useData<SkillCategory[]>('/api/skills', skillsData);

    return (
        <section className={`section skills ${className}`.trim()} id="skills">
            <div className="container">
                <div className="s-head reveal">
                    <span className="s-label mono">{t('skillsLabel')}</span>
                    <h2 className="s-title">{t('skills')}</h2>
                </div>
                <div className="sk-grid">
                    {data.map((category, idx) => (
                        <div
                            key={idx}
                            className="sk reveal"
                            style={{ '--d': `${idx * 0.07}s` } as React.CSSProperties}
                        >
                            <span className="sk__n mono">{String(idx + 1).padStart(2, '0')}</span>
                            <h3 className="sk__title">{category.title}</h3>
                            <div className="sk__pills">
                                {category.pills.map((pill, pillIdx) => (
                                    <span
                                        key={pillIdx}
                                        className={pill.highlight ? 'pill hi' : 'pill'}
                                    >
                                        {pill.name}
                                    </span>
                                ))}
                            </div>
                            <div className="sk__glow" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
