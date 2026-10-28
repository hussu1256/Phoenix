/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./lib/i18n/request.ts');

const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
  // Allow GSAP & Lenis to work without SSR issues
  transpilePackages: ['@studio-freight/lenis'],
};

module.exports = withNextIntl(nextConfig);
