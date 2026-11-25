import type { MetadataRoute } from 'next';
import { ECOM_HAMPERS } from '@/data/hampersEcomData';

const BASE = 'https://thegourmetgifts.co';

const occasionUrls = [
  `${BASE}/employee-gifting`,
  `${BASE}/occasions/client-gifting`,
  `${BASE}/occasions/festive-gifting`,
  `${BASE}/occasions/events-conferences`,
  `${BASE}/occasions/milestones-recognition`,
  `${BASE}/dealer-partner-gifting`,
  `${BASE}/occasions/weddings-celebrations`,
  `${BASE}/occasions/cx-gifting`,
  `${BASE}/occasions/onboarding-kits`,
];

const categorySlugs = [
  'gourmet-food',
  'beverages',
  'decor-spiritual',
  'infinity-beyond',
  '3d-miniatures',
  'wellness-lifestyle',
  'office-travel-bags',
  'electronics-audio',
  'stationery-desk',
  'corporate-apparel',
  'awards-recognition',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${BASE}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE}/occasions`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...occasionUrls.map((url) => ({
      url,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/hampers`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...ECOM_HAMPERS.map((h) => ({
      url: `${BASE}/hampers/${h.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/collections`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...categorySlugs.map((slug) => ({
      url: `${BASE}/collections/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}
