import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Signal',
            value: 'ai-train=no, search=yes, ai-input=yes',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/collections',
        has: [
          {
            type: 'query',
            key: 'category',
            value: '(?<category>[a-zA-Z0-9-]+)',
          },
        ],
        destination: '/collections/:category',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/dealer-partner-gifting',
        destination: '/occasions/dealer-partner-gifting',
      },
      {
        source: '/api/v1/:path*',
        destination: 'http://localhost:5001/api/v1/:path*',
      },
    ];
  },
};

export default nextConfig;
