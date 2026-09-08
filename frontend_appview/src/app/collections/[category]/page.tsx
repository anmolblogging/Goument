import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CataloguePresentation } from '../CollectionsClientView';
import { CATALOGUE_CATEGORIES, HAMPERS_CATALOG } from '@/data/hampersData';
import { CATALOGUE_SEO_DATA } from '@/data/catalogueSeoData';
import { JsonLd } from '@/components/JsonLd';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATALOGUE_CATEGORIES.map((cat) => ({
    category: cat.id,
  }));
}

function generateCategorySchema(categorySlug: string, categoryLabel: string, seoDescription: string) {
  const pageUrl = `https://thegourmetgifts.co/collections/${categorySlug}`;
  const products = HAMPERS_CATALOG.filter((item) => item.category === categorySlug);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${categoryLabel} | The Gourmet Gifts`,
        description: seoDescription,
        isPartOf: {
          '@id': 'https://thegourmetgifts.co/#website',
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
            name: 'Catalogue',
            item: 'https://thegourmetgifts.co/collections',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: categoryLabel,
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#itemlist`,
        name: `${categoryLabel} — Product List`,
        itemListElement: products.map((prod, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          item: {
            '@type': 'Product',
            name: prod.name,
            description: prod.subCopy || prod.description,
            brand: {
              '@type': 'Brand',
              name: 'The Gourmet Gifts',
            },
            category: categoryLabel,
          },
        })),
      },
    ],
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const catMeta = CATALOGUE_CATEGORIES.find((c) => c.id === category);
  const seo = CATALOGUE_SEO_DATA[category];

  if (!catMeta) return {};

  const title = seo?.title || `${catMeta.label} — The Gourmet Gifts`;
  const description =
    seo?.description ||
    catMeta.subtitle ||
    `Browse ${catMeta.label} gifts curated for corporate hampers.`;
  const pageUrl = `https://thegourmetgifts.co/collections/${category}`;

  return {
    title,
    description,
    keywords: seo?.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      url: pageUrl,
      title,
      description,
      type: 'website',
      images: [
        {
          url: catMeta.image.startsWith('http')
            ? catMeta.image
            : `https://thegourmetgifts.co${catMeta.image}`,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        catMeta.image.startsWith('http')
          ? catMeta.image
          : `https://thegourmetgifts.co${catMeta.image}`,
      ],
    },
  };
}

export default async function CategoryDynamicPage({ params }: Props) {
  const { category } = await params;
  const catMeta = CATALOGUE_CATEGORIES.find((c) => c.id === category);
  if (!catMeta) notFound();

  const seo = CATALOGUE_SEO_DATA[category];
  const description =
    seo?.description ||
    catMeta.subtitle ||
    `Browse ${catMeta.label} gifts curated for corporate hampers.`;

  const schema = generateCategorySchema(category, catMeta.label, description);

  return (
    <>
      <JsonLd data={schema} />
      <CataloguePresentation selectedCategory={category} />
    </>
  );
}
