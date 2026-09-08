import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OccasionPageTemplate } from '@/features/occasions/OccasionPageTemplate';
import { OCCASIONS_DATA, getOccasionData, OccasionPageData } from '@/data/occasionsData';
import { JsonLd } from '@/components/JsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: 'employee-gifting' },
    { slug: 'onboarding-kits' },
    { slug: 'client-gifting' },
    { slug: 'festive-gifting' },
    { slug: 'weddings-celebrations' },
    { slug: 'events-conferences' },
    { slug: 'milestones-recognition' },
    { slug: 'cx-gifting' },
    { slug: 'dealer-partner-gifting' },
  ];
}

function parsePriceTier(range: string): { minPrice: number; maxPrice: number } {
  const clean = range.replace(/[₹,]/g, '').trim();
  if (clean.toLowerCase().startsWith('up to') || clean.toLowerCase().startsWith('under')) {
    const max = parseInt(clean.replace(/[^0-9]/g, ''), 10) || 999;
    return { minPrice: 0, maxPrice: max };
  }
  if (clean.includes('–') || clean.includes('-')) {
    const parts = clean.split(/[–-]/).map((p) => parseInt(p.replace(/[^0-9]/g, ''), 10));
    return { minPrice: parts[0] || 1000, maxPrice: parts[1] || 2500 };
  }
  if (clean.includes('+')) {
    const min = parseInt(clean.replace(/[^0-9]/g, ''), 10) || 2500;
    return { minPrice: min, maxPrice: min * 3 };
  }
  return { minPrice: 999, maxPrice: 5000 };
}

function generateOccasionSchema(data: OccasionPageData, pageUrl: string) {
  const offers = data.budgetTiers.map((tier, idx) => {
    const { minPrice, maxPrice } = parsePriceTier(tier.range);
    return {
      '@type': 'Offer',
      position: idx + 1,
      itemOffered: {
        '@type': 'Service',
        name: `${data.title} — ${tier.range}`,
      },
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        minPrice,
        maxPrice,
        priceCurrency: 'INR',
      },
    };
  });

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: data.title,
        url: pageUrl,
        description: data.metaDescription,
        serviceType: `Corporate ${data.title}`,
        provider: {
          '@id': 'https://thegourmetgifts.co/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: data.slug === 'dealer-partner-gifting' 
            ? 'Channel partners and distributors'
            : 'Corporates and businesses',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${data.title} Budget Tiers`,
          itemListElement: offers,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: data.metaTitle,
        isPartOf: {
          '@id': 'https://thegourmetgifts.co/#website',
        },
        about: {
          '@id': `${pageUrl}#service`,
        },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
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
            name: data.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getOccasionData(slug);
  const pageUrl = `https://thegourmetgifts.co/occasions/${slug}`;

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      url: pageUrl,
      title: data.metaTitle,
      description: data.metaDescription,
      type: 'website',
      images: [
        {
          url: 'https://thegourmetgifts.co/meta.png',
          width: 1200,
          height: 1200,
          alt: data.metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.metaTitle,
      description: data.metaDescription,
      images: ['https://thegourmetgifts.co/meta.png'],
    },
  };
}

export default async function OccasionDynamicPage({ params }: Props) {
  const { slug } = await params;
  const data = getOccasionData(slug);
  if (!data) notFound();

  const pageUrl = `https://thegourmetgifts.co/occasions/${slug}`;
  const schema = generateOccasionSchema(data, pageUrl);

  return (
    <>
      <JsonLd data={schema} />
      <OccasionPageTemplate data={data} />
    </>
  );
}
