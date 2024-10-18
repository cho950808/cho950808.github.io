/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production' // 프로덕션 모드인지

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/' : '',
}

module.exports = nextConfig
