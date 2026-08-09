'use client';

import { useMemo, useState } from 'react';
import { useData } from '@/hooks/useData';
import { skillsData } from '@/lib/data';
import type { SkillCategory, SkillItem } from '@/types';
import { useTranslations } from 'next-intl';

const hashString = (value: string) => {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i++) {
        const code = value.charCodeAt(i);
        hash ^= code;
        hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
};

const stableShuffle = <T extends { name: string; category: string }>(items: T[]) => {
    return [...items].sort((a, b) => {
        const aSeed = hashString(`${a.category}:${a.name}`);
        const bSeed = hashString(`${b.category}:${b.name}`);
        return aSeed - bSeed;
    });
};

export default function Skills({ className = "" }: { className?: string }) {
    const t = useTranslations('Sections');
    const { data } = useData<SkillCategory[]>('/api/skills', skillsData);
    const [filter, setFilter] = useState('all');

    const tiles = useMemo(() => {
        const allTiles = data.flatMap((category) =>
            category.items.map((skill: SkillItem) => ({
                ...skill,
                category: category.title,
            }))
        );

        const filtered = filter === 'all'
            ? allTiles
            : allTiles.filter((tile) => tile.category.toLowerCase() === filter.toLowerCase());

        return stableShuffle(filtered).map((tile, index) => ({
            ...tile,
            revealDelay: `${index * 0.06}s`,
        }));
    }, [data, filter]);

    const marqueeTiles = useMemo(() => [...tiles, ...tiles], [tiles]);
    const categories = ['all', ...data.map((category) => category.title)];

    return (
        <section className={`section skills ${className}`.trim()} id="skills">
            <div className="container">
                <div className="s-head reveal skill-head">
                    <div>
                        <span className="s-label mono">{t('skillsLabel')}</span>
                        <h2 className="s-title">{t('skills')}</h2>
                    </div>

                    <label className="skill-sort" aria-label="Sort skills by category">
                        <span>Sort</span>
                        <select value={filter} onChange={(event) => setFilter(event.target.value)}>
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category === 'all' ? 'All categories' : category}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>

                <div className="skill-carousel" aria-label="Technology skills carousel">
                    <div className="skill-track" role="list">
                        {marqueeTiles.map((skill, index) => (
                            <a
                                key={`${skill.category}-${skill.name}-${index}`}
                                href={skill.href}
                                target="_blank"
                                rel="noreferrer"
                                className="skill-tile"
                                style={{
                                    '--skill-accent': skill.accent ?? 'var(--accent)',
                                    '--tile-delay': skill.revealDelay,
                                } as React.CSSProperties}
                                aria-label={`Open official site for ${skill.name}`}
                            >
                                <span className="skill-tile__logo" aria-hidden="true">{skill.icon}</span>
                                <span className="skill-tile__meta">
                                    <span className="skill-tile__category">{skill.category}</span>
                                    <span className="skill-tile__title">{skill.name}</span>
                                </span>
                                <span className="skill-tile__arrow" aria-hidden="true">↗</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
