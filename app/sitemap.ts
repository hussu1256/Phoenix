import { MetadataRoute } from 'next';
import { treatments } from '@/data/treatments';
import { hospitals } from '@/data/hospitals';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://phoenixglobalwellness.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/book-appointment',
    '/about/visionary',
    '/network/team',
    '/contact',
  ];

  const treatmentRoutes = treatments.map((t) => `/treatments/${t.slug}`);
  const hospitalRoutes  = hospitals.map((h)  => `/hospitals/${h.slug}`);

  const allRoutes = [...staticRoutes, ...treatmentRoutes, ...hospitalRoutes];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of allRoutes) {
    entries.push({
      url: `${BASE_URL}${route || '/'}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1 : route.startsWith('/treatments') ? 0.8 : 0.7,
    });
  }

  return entries;
}
