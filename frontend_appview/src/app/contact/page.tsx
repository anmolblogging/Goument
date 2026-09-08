import { Metadata } from 'next';
import { ContactClientView } from './ContactClientView';
import { JsonLd } from '@/components/JsonLd';

const PAGE_URL = 'https://thegourmetgifts.co/contact';

export const metadata: Metadata = {
  title: 'Contact The Gourmet Gifts | Corporate Gifting Enquiry',
  description:
    'Contact The Gourmet Gifts for corporate gifting briefs, custom proposals and press enquiries. Mumbai studio, WhatsApp concierge, 24-hour response.',
  keywords: [
    'contact corporate gifting company',
    'corporate gifting enquiry',
    'gifting concierge contact',
    'corporate gifting brief submission',
    'custom gifting proposal request',
    'corporate gifting collaboration enquiry',
    'corporate gifting WhatsApp concierge',
    'how to submit a corporate gifting brief',
    'contact bespoke corporate gift supplier Mumbai',
    'request corporate gifting quote',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    url: PAGE_URL,
    title: 'Contact The Gourmet Gifts | Corporate Gifting Enquiry',
    description:
      'Contact The Gourmet Gifts for corporate gifting briefs, custom proposals and press enquiries. Mumbai studio, WhatsApp concierge, 24-hour response.',
    type: 'website',
    images: ['https://thegourmetgifts.co/meta.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact The Gourmet Gifts | Corporate Gifting Enquiry',
    description:
      'Contact The Gourmet Gifts for corporate gifting briefs, custom proposals and press enquiries. Mumbai studio, WhatsApp concierge, 24-hour response.',
    images: ['https://thegourmetgifts.co/meta.png'],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://thegourmetgifts.co/contact/#webpage',
      url: 'https://thegourmetgifts.co/contact',
      name: 'Contact The Gourmet Gifts | Corporate Gifting Enquiry',
      description:
        'Contact The Gourmet Gifts for corporate gifting briefs, custom proposals and press enquiries. Mumbai studio, WhatsApp concierge, 24-hour response.',
      isPartOf: {
        '@id': 'https://thegourmetgifts.co/#website',
      },
      about: {
        '@id': 'https://thegourmetgifts.co/#organization',
      },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://thegourmetgifts.co/contact/#breadcrumb',
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
          name: 'Contact',
          item: 'https://thegourmetgifts.co/contact',
        },
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://thegourmetgifts.co/#organization',
      name: 'The Gourmet Gifts',
      image: 'https://thegourmetgifts.co/meta.png',
      email: 'hello@thegourmetgifts.co',
      telephone: '+91-70214-63609',
      address: [
        {
          '@type': 'PostalAddress',
          name: 'Corporate Office',
          streetAddress:
            '1702, 17th Floor, INNOV8 Parinee Crescenzo, Crescenzo Building, Opp. MCA Ground, Bandra Kurla Complex, Plot No C-38/39, G Block, Bandra East',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400051',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          name: 'Warehouse',
          streetAddress:
            'Sharda Bhavan, Opposite Gala Provision Store, Fatak Road/Narayan Joshi Road, Kandivali West',
          addressLocality: 'Mumbai',
          addressRegion: 'Maharashtra',
          postalCode: '400067',
          addressCountry: 'IN',
        },
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Sales / Corporate Gifting Concierge',
        email: 'hello@thegourmetgifts.co',
        telephone: '+91-70214-63609',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <ContactClientView />
    </>
  );
}
