import type { MetadataRoute } from 'next';

const BASE = 'https://thegourmetgifts.co';

const occasionSlugs = [
  'employee-gifting',
  'occasions/client-gifting',
  'occasions/festive-gifting',
  'occasions/events-conferences',
  'milestones-recognition',
  'occasions/dealer-partner-gifting',
  'occasions/weddings-celebrations',
  'occasions/cx-gifting',
  'occasions/onboarding-kits',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/occasions`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/collections`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    ...occasionSlugs.map((s) => ({
      url: `${BASE}/${s}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
