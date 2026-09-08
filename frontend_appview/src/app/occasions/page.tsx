import { Metadata } from 'next';
import { OccasionsIndexView } from './OccasionsIndexView';
import { JsonLd } from '@/components/JsonLd';

const PAGE_URL = 'https://thegourmetgifts.co/occasions';

export const metadata: Metadata = {
  title: 'Corporate Gifting Occasions | The Gourmet Gifts',
  description:
    'Explore corporate gifting by occasion — employee, client, festive, events, milestones, partner and celebration gifting, all curated around your brand.',
  keywords: [
    'corporate gifting occasions',
    'occasion based corporate gifts',
    'corporate gift categories',
    'employee gifting',
    'client gifting',
    'festive corporate gifting',
    'milestone gifting',
    'dealer and partner gifting',
    'CX gifting',
    'wedding and celebration gifting',
    'types of corporate gifting for businesses',
    'corporate gifting by occasion India',
    'corporate gifting concierge for businesses',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: 'Corporate Gifting Occasions | The Gourmet Gifts',
    description:
      'Explore corporate gifting by occasion — employee, client, festive, events, milestones, partner and celebration gifting, all curated around your brand.',
    type: 'website',
    images: ['https://thegourmetgifts.co/meta.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Gifting Occasions | The Gourmet Gifts',
    description:
      'Explore corporate gifting by occasion — employee, client, festive, events, milestones, partner and celebration gifting, all curated around your brand.',
    images: ['https://thegourmetgifts.co/meta.png'],
  },
};

const occasionsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://thegourmetgifts.co/occasions/#webpage',
      url: 'https://thegourmetgifts.co/occasions',
      name: 'Corporate Gifting Occasions | The Gourmet Gifts',
      description:
        'Explore corporate gifting by occasion — employee, client, festive, events, milestones, partner and celebration gifting, all curated around your brand.',
      isPartOf: {
        '@id': 'https://thegourmetgifts.co/#website',
      },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thegourmetgifts.co/occasions/#breadcrumb',
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
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://thegourmetgifts.co/occasions/#itemlist',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Employee Gifting',
          url: 'https://thegourmetgifts.co/employee-gifting',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Client Gifting',
          url: 'https://thegourmetgifts.co/occasions/client-gifting',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Festive Gifting',
          url: 'https://thegourmetgifts.co/occasions/festive-gifting',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Events & Conferences',
          url: 'https://thegourmetgifts.co/occasions/events-conferences',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Milestones & Recognition',
          url: 'https://thegourmetgifts.co/milestones-recognition',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Dealer & Partner Gifting',
          url: 'https://thegourmetgifts.co/occasions/dealer-partner-gifting',
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'Celebrations',
          url: 'https://thegourmetgifts.co/occasions/weddings-celebrations',
        },
        {
          '@type': 'ListItem',
          position: 8,
          name: 'CX Gifting',
          url: 'https://thegourmetgifts.co/occasions/cx-gifting',
        },
      ],
    },
  ],
};

export default function OccasionsPage() {
  return (
    <>
      <JsonLd data={occasionsSchema} />
      <OccasionsIndexView />
    </>
  );
}
