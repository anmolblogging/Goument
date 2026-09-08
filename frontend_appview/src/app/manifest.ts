import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Gourmet Gifts',
    short_name: 'The Gourmet Gifts',
    description: 'B2B Corporate Gifting, curated around your brand.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#FAF8F5',
    icons: [
      {
        src: '/images/brand/redlogo.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/images/brand/redlogo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/brand/redlogo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
