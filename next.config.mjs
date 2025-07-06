/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    skipTrailingSlashRedirect: true,
    distDir: 'out',
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'raw.githubusercontent.com',
          pathname: '**',
        },
      ],
    },
    basePath: '/karunaelectronisdev',
    assetPrefix: '/karunaelectronisdev/',
    eslint: {
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;