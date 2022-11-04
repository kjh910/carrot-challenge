/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['specials-images.forbesimg.com'],
  },
}

module.exports = nextConfig;
