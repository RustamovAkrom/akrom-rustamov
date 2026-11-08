'use client';

import Image from 'next/image';
import { useData } from '@/hooks/useData';
import { skillsData } from '@/lib/data';
import type { SkillCategory } from '@/types';
import { useTranslations } from 'next-intl';

const categoryKeys: Record<string, string> = {
    Frontend: 'skillCategoryFrontend',
    Backend: 'skillCategoryBackend',
    Cybersecurity: 'skillCategoryCybersecurity',
    Data: 'skillCategoryData',
    DevOps: 'skillCategoryInfrastructure',
};

const categoryOrder: Record<string, number> = {
    Frontend: 0,
    Backend: 1,
    Cybersecurity: 2,
    Data: 3,
    DevOps: 4,
};

function iconSlug(name: string) {
    return name.toLowerCase().replace(/\./g, '').replace(/[^a-z0-9]+/g, '-');
}

export default function Skills({ className = "" }: { className?: string }) {
    const t = useTranslations('Sections');
    const { data } = useData<SkillCategory[]>('/api/skills', skillsData);
    const categories = [...data].sort((a, b) => categoryOrder[a.title] - categoryOrder[b.title]);

    return (
        <section className={`section skills ${className}`.trim()} id="skills">
            <div className="container">
                <div className="s-head reveal skill-head">
                    <span className="s-label mono">{t('skillsLabel')}</span>
                    <h2 className="s-title">{t('skills')}</h2>
                    <p className="skills-intro">{t('skillsIntro')}</p>
                </div>

                <div className="skills-groups">
                    {categories.map((category) => (
                        <section className="skills-group" key={category.title}>
                            <h3 className="skills-group__title">
                                <span className="skills-group__index mono">{String((categoryOrder[category.title] ?? 0) + 1).padStart(2, '0')}</span>
                                {t(categoryKeys[category.title] ?? 'skillCategoryBackend')}
                                <span className="skills-group__count mono">{String(category.items.length).padStart(2, '0')}</span>
                            </h3>
                            <ul className="skills-list">
                                {category.items.map((skill) => (
                                    <li key={skill.name}>
                                        <a className="skills-item" href={skill.href} target="_blank" rel="noreferrer">
                                            <Image
                                                className="skills-item__icon"
                                                src={`/skills/${iconSlug(skill.name)}.svg`}
                                                alt=""
                                                width={24}
                                                height={24}
                                                aria-hidden="true"
                                            />
                                            <span>{skill.name}</span>
                                            <span className="skills-item__arrow" aria-hidden="true">↗</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}
