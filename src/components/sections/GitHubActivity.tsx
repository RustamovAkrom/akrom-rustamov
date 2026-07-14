'use client';

import { useEffect, useState } from 'react';
import { githubUsername } from '@/lib/data';
import { useTranslations } from 'next-intl';

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

export default function GitHubActivity({ className = "" }: { className?: string }) {
  const t = useTranslations('GitHub');
  const [stats, setStats] = useState<GitHubUser | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${githubUsername}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data) {
          setStats({
            public_repos: data.public_repos,
            followers: data.followers,
            following: data.following,
          });
        }
      })
      .catch(() => {
        // Silently fail — component shows fallback
      });
  }, []);

  const items = [
    { label: t('repositories'), value: stats?.public_repos ?? 12, fallback: '12+' },
    { label: t('followers'), value: stats?.followers ?? 8, fallback: '8+' },
    { label: t('following'), value: stats?.following ?? 15, fallback: '15+' },
  ];

    return (
    <section className={`section github ${className}`.trim()} id="github">
      <div className="container">
        <div className="github-bar reveal">
          {items.map((item, idx) => (
            <div key={idx} className="github-stat">
              <span className="github-stat__n mono">
                {stats ? item.value : item.fallback}
              </span>
              <span className="github-stat__l">{item.label}</span>
            </div>
          ))}
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link mono"
          >
            @RustamovAkrom ↗
          </a>
        </div>
      </div>
    </section>
  );
}
