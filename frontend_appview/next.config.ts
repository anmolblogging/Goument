import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Keep each resized image for 31 days and make fewer versions (one format,
    // fewer sizes). This keeps Vercel's free image limit (5,000 a month) low.
    // Serve images as they are (no Vercel resizing). Product photos already
    // come optimised from Cloudinary, and resizing used up the free limit,
    // which made images fail with "402 Payment Required".
    unoptimized: true,
    qualities: [75],
    formats: ['image/webp'],
    minimumCacheTTL: 2678400,
    deviceSizes: [640, 828, 1080, 1920],
    imageSizes: [64, 128, 256, 384],
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
        source: '/b2c',
        destination: 'http://localhost:3001/b2c',
      },
      {
        source: '/b2c/:path*',
        destination: 'http://localhost:3001/b2c/:path*',
      },
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
