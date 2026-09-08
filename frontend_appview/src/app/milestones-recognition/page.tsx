import { Metadata } from 'next';
import { OccasionPageTemplate } from '@/features/occasions/OccasionPageTemplate';
import { getOccasionData } from '@/data/occasionsData';
import { JsonLd } from '@/components/JsonLd';

const PAGE_URL = 'https://thegourmetgifts.co/milestones-recognition';

export const metadata: Metadata = {
  title: 'Milestone & Recognition Gifts | The Gourmet Gifts',
  description:
    'Curated recognition gifting for years of service, promotions, achievements and company milestones — meaningful, personal and worth keeping.',
  keywords: [
    'milestone gifting',
    'recognition gifts',
    'employee recognition gift hampers',
    'years of service gifts',
    'promotion gifts corporate',
    'retirement gift hampers',
    'achievement award gifts',
    'leadership recognition gifts',
    'team milestone gifts',
    'milestone gifting company Mumbai',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: 'Milestone & Recognition Gifts | The Gourmet Gifts',
    description:
      'Curated recognition gifting for years of service, promotions, achievements and company milestones — meaningful, personal and worth keeping.',
    type: 'website',
    images: ['https://thegourmetgifts.co/meta.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milestone & Recognition Gifts | The Gourmet Gifts',
    description:
      'Curated recognition gifting for years of service, promotions, achievements and company milestones — meaningful, personal and worth keeping.',
    images: ['https://thegourmetgifts.co/meta.png'],
  },
};

const milestonesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Milestones & Recognition Gifting',
      url: PAGE_URL,
      description:
        'Curated recognition experiences around the achievement, the person and what the moment represents.',
      serviceType: 'Corporate Milestone & Recognition Gifting',
      provider: {
        '@id': 'https://thegourmetgifts.co/#organization',
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      audience: {
        '@type': 'BusinessAudience',
        audienceType: 'Corporates and businesses',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Milestones & Recognition Gifting Budget Tiers',
        itemListElement: [
          {
            '@type': 'Offer',
            position: 1,
            itemOffered: {
              '@type': 'Service',
              name: 'Milestones & Recognition Gifting — Up to ₹999',
            },
            priceCurrency: 'INR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 0,
              maxPrice: 999,
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'Offer',
            position: 2,
            itemOffered: {
              '@type': 'Service',
              name: 'Milestones & Recognition Gifting — ₹1,000–₹1,499',
            },
            priceCurrency: 'INR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 1000,
              maxPrice: 1499,
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'Offer',
            position: 3,
            itemOffered: {
              '@type': 'Service',
              name: 'Milestones & Recognition Gifting — ₹1,500–₹2,499',
            },
            priceCurrency: 'INR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 1500,
              maxPrice: 2499,
              priceCurrency: 'INR',
            },
          },
          {
            '@type': 'Offer',
            position: 4,
            itemOffered: {
              '@type': 'Service',
              name: 'Milestones & Recognition Gifting — ₹2,500+',
            },
            priceCurrency: 'INR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              minPrice: 2500,
              maxPrice: 10000,
              priceCurrency: 'INR',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Milestone & Recognition Gifts | The Gourmet Gifts',
      isPartOf: {
        '@id': 'https://thegourmetgifts.co/#website',
      },
      about: {
        '@id': `${PAGE_URL}#service`,
      },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://thegourmetgifts.co/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Occasions',
          item: 'https://thegourmetgifts.co/occasions',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Milestones & Recognition',
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function MilestonesRecognitionPage() {
  const data = getOccasionData('milestones-recognition');

  return (
    <>
      <JsonLd data={milestonesSchema} />
      <OccasionPageTemplate data={data} />
    </>
  );
}
