import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://akrom-omega.vercel.app',
    sitemap: 'https://akrom-omega.vercel.app/sitemap.xml',
  };
}
