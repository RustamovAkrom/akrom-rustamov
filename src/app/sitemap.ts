import type { MetadataRoute } from 'next';
import { allPosts } from 'contentlayer/generated';
import { locales } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.map((post) => ({
    url: `https://akrom-omega.vercel.app/${post.locale}${post.url}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: {
      languages: Object.fromEntries(
        allPosts
          .filter((translation) => translation.slug === post.slug)
          .map((translation) => [translation.locale, `https://akrom-omega.vercel.app/${translation.locale}${translation.url}`]),
      ),
    },
  }));

  return [
    ...locales.flatMap((locale) => [
      {
        url: `https://akrom-omega.vercel.app/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 1,
      },
      {
        url: `https://akrom-omega.vercel.app/${locale}/blog`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      },
    ]),
    ...posts,
  ];
}
