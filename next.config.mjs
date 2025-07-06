/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'out',
    images: {
      unoptimized: true,
    },
    // Set the base path to your repository name
    basePath: '/karunaelectronisdev',
    assetPrefix: '/karunaelectronisdev/',
    // Disable server-side features that don't work with static export
    eslint: {
      ignoreDuringBuilds: true,
    },
  }
  
  module.exports = nextConfig
