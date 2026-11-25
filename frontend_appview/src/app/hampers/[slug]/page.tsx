import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import { ECOM_HAMPERS } from '@/data/hampersEcomData';
import HamperDetailView from '@/features/hampers/HamperDetailView';

const BASE = 'https://thegourmetgifts.co';

// One static page per hamper; any other slug is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return ECOM_HAMPERS.map((h) => ({ slug: h.slug }));
}

const findHamper = (slug: string) => ECOM_HAMPERS.find((h) => h.slug === slug);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hamper = findHamper(slug);
  if (!hamper) return {};

  const url = `${BASE}/hampers/${hamper.slug}`;
  const title = `${hamper.name} | ${hamper.occasionLabel} Gift Hamper | The Gourmet Gifts`;
  const description = `${hamper.description} ₹${hamper.price.toLocaleString('en-IN')}, taxes and keepsake packaging included.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${hamper.name} | The Gourmet Gifts`,
      description: hamper.subtitle || hamper.description,
      url,
      type: 'website',
      images: [{ url: hamper.image, alt: hamper.name }],
    },
  };
}

export default async function HamperPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hamper = findHamper(slug);
  if (!hamper) notFound();

  // Related: same occasion first, then same recipient scale, then the rest
  const others = ECOM_HAMPERS.filter((h) => h.id !== hamper.id);
  const related = [
    ...others.filter((h) => h.occasion === hamper.occasion),
    ...others.filter((h) => h.occasion !== hamper.occasion && h.tier === hamper.tier),
    ...others.filter((h) => h.occasion !== hamper.occasion && h.tier !== hamper.tier),
  ].slice(0, 4);

  const url = `${BASE}/hampers/${hamper.slug}`;
  const images = (hamper.gallery?.length ? hamper.gallery : [hamper.image]).map((src) => `${BASE}${src}`);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: hamper.name,
    description: hamper.description,
    image: images,
    sku: hamper.id,
    url,
    brand: { '@type': 'Brand', name: 'The Gourmet Gifts' },
    offers: {
      '@type': 'Offer',
      url,
      priceCurrency: 'INR',
      price: hamper.price,
      availability: hamper.readyToShip ? 'https://schema.org/InStock' : 'https://schema.org/PreOrder',
      seller: { '@type': 'Organization', name: 'The Gourmet Gifts' },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: 'Curated Hampers', item: `${BASE}/hampers` },
      { '@type': 'ListItem', position: 3, name: hamper.name, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <HamperDetailView hamper={hamper} related={related} />
    </>
  );
}
