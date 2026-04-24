/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // SSG - Static Site Generation
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
};

module.exports = nextConfig;
