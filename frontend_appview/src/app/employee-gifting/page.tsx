import { Metadata } from 'next';
import { OccasionPageTemplate } from '@/features/occasions/OccasionPageTemplate';
import { OCCASIONS_DATA } from '@/data/occasionsData';
import { JsonLd } from '@/components/JsonLd';

const PAGE_URL = 'https://thegourmetgifts.co/employee-gifting';

export const metadata: Metadata = {
  title: 'Employee Gifting Ideas & Hampers | The Gourmet Gifts',
  description:
    'Curated employee gifting for onboarding, milestones, festivals and everyday appreciation — thoughtful hampers built around your people and culture.',
  keywords: [
    'employee gifting',
    'employee gift hampers',
    'corporate employee gifts',
    'employee appreciation gifts',
    'employee onboarding gifts',
    'employee recognition gifts',
    'work anniversary gifts',
    'employee welcome kit',
    'festive employee gifting',
    'bulk employee gift hampers for companies',
    'employee gifting company Mumbai',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: 'Employee Gifting Ideas & Hampers | The Gourmet Gifts',
    description:
      'Curated employee gifting for onboarding, milestones, festivals and everyday appreciation — thoughtful hampers built around your people and culture.',
    type: 'website',
    images: ['https://thegourmetgifts.co/meta.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employee Gifting Ideas & Hampers | The Gourmet Gifts',
    description:
      'Curated employee gifting for onboarding, milestones, festivals and everyday appreciation — thoughtful hampers built around your people and culture.',
    images: ['https://thegourmetgifts.co/meta.png'],
  },
};

const employeeGiftingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'Employee Gifting',
      url: PAGE_URL,
      description:
        'Curated employee gifting for onboarding, milestones, festivals and everyday appreciation.',
      serviceType: 'Corporate Employee Gifting',
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
        name: 'Employee Gifting Budget Tiers',
        itemListElement: [
          {
            '@type': 'Offer',
            position: 1,
            itemOffered: {
              '@type': 'Service',
              name: 'Employee Gifting — Up to ₹999',
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
              name: 'Employee Gifting — ₹1,000–₹1,499',
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
              name: 'Employee Gifting — ₹1,500–₹2,499',
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
              name: 'Employee Gifting — ₹2,500+',
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
      name: 'Employee Gifting Ideas & Hampers | The Gourmet Gifts',
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
          name: 'Employee Gifting',
          item: PAGE_URL,
        },
      ],
    },
  ],
};

export default function EmployeeGiftingPage() {
  const data = OCCASIONS_DATA['employee-gifting'];

  return (
    <>
      <JsonLd data={employeeGiftingSchema} />
      <OccasionPageTemplate data={data} />
    </>
  );
}
