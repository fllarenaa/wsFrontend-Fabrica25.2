/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'], // ✅ adicione isso
  },
}

module.exports = nextConfig;
