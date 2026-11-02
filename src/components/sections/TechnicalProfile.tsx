import type { AboutData, LocalizedData } from '@/types';
import styles from './TechnicalProfile.module.css';

interface TechnicalProfileProps {
    categories: LocalizedData<AboutData>['technicalProfile'];
    title: string;
}

export default function TechnicalProfile({ categories, title }: TechnicalProfileProps) {
    return (
        <section className={`${styles.profile} about__block reveal`} aria-labelledby="technical-profile-title">
            <div className="about__block-head">
                <span className="about__experience-index mono">02</span>
                <h3 id="technical-profile-title">{title}</h3>
            </div>
            <div className={styles.categories}>
                {categories.map((category, index) => (
                    <article
                        className={`${styles.category} reveal`}
                        key={category.title}
                        style={{ '--d': `${index * 0.1}s` } as React.CSSProperties}
                    >
                        <h4>{category.title}</h4>
                        <ul>
                            {category.technologies.map((technology) => (
                                <li key={technology}>{technology}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}
