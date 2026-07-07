import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    // Static export cannot use the Next.js image optimizer.
    unoptimized: true,
  },
  // Emit /route/index.html so static hosts serve clean URLs.
  trailingSlash: false,
}

export default nextConfig
