import { Metadata } from 'next';
import { CollectionsClientView } from './CollectionsClientView';
import { JsonLd } from '@/components/JsonLd';

const PAGE_URL = 'https://thegourmetgifts.co/collections';

export const metadata: Metadata = {
  title: 'Corporate Gift Catalogue | The Gourmet Gifts',
  description:
    'Browse The Gourmet Gifts catalogue — gourmet food, beverages, decor, wellness, stationery, apparel and recognition items for corporate gifting.',
  keywords: [
    'corporate gift catalogue',
    'corporate gift collections',
    'gift hamper categories',
    'gourmet food gifts',
    'corporate gift divisions',
    'branded corporate merchandise',
    'artisanal gift catalogue',
    'bespoke keepsake collections',
    'corporate gift product range',
    'corporate gifting catalogue by category India',
    'browse corporate gift hampers online catalogue',
    'artisanal corporate gift categories for businesses',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: 'Corporate Gift Catalogue | The Gourmet Gifts',
    description:
      'Browse The Gourmet Gifts catalogue — gourmet food, beverages, decor, wellness, stationery, apparel and recognition items for corporate gifting.',
    type: 'website',
    images: ['https://thegourmetgifts.co/meta.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Gift Catalogue | The Gourmet Gifts',
    description:
      'Browse The Gourmet Gifts catalogue — gourmet food, beverages, decor, wellness, stationery, apparel and recognition items for corporate gifting.',
    images: ['https://thegourmetgifts.co/meta.png'],
  },
};

const collectionsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://thegourmetgifts.co/collections/#webpage',
      url: 'https://thegourmetgifts.co/collections',
      name: 'Corporate Gift Catalogue | The Gourmet Gifts',
      description:
        'Browse The Gourmet Gifts catalogue — gourmet food, beverages, decor, wellness, stationery, apparel and recognition items for corporate gifting.',
      isPartOf: {
        '@id': 'https://thegourmetgifts.co/#website',
      },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thegourmetgifts.co/collections/#breadcrumb',
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
          name: 'Catalogue',
          item: 'https://thegourmetgifts.co/collections',
        },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': 'https://thegourmetgifts.co/collections/#itemlist',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Gourmet Food',
          url: 'https://thegourmetgifts.co/collections?category=gourmet-food',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Beverages',
          url: 'https://thegourmetgifts.co/collections?category=beverages',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Decor & Spiritual',
          url: 'https://thegourmetgifts.co/collections?category=decor-spiritual',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Wellness & Lifestyle',
          url: 'https://thegourmetgifts.co/collections?category=wellness-lifestyle',
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Eternal Paper Co',
          url: 'https://thegourmetgifts.co/collections?category=infinity-beyond',
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: '3D Miniatures',
          url: 'https://thegourmetgifts.co/collections?category=3d-miniatures',
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'Office & Travel Bags',
          url: 'https://thegourmetgifts.co/collections?category=office-travel-bags',
        },
        {
          '@type': 'ListItem',
          position: 8,
          name: 'Electronics',
          url: 'https://thegourmetgifts.co/collections?category=electronics-audio',
        },
        {
          '@type': 'ListItem',
          position: 9,
          name: 'Stationery & Desk',
          url: 'https://thegourmetgifts.co/collections?category=stationery-desk',
        },
        {
          '@type': 'ListItem',
          position: 10,
          name: 'Corporate Apparel',
          url: 'https://thegourmetgifts.co/collections?category=corporate-apparel',
        },
        {
          '@type': 'ListItem',
          position: 11,
          name: 'Recognition & Trophies',
          url: 'https://thegourmetgifts.co/collections?category=awards-recognition',
        },
      ],
    },
  ],
};

export default function CollectionsPage() {
  return (
    <>
      <JsonLd data={collectionsSchema} />
      <CollectionsClientView />
    </>
  );
}
