import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
   experimental: {
      turbo: {
         rules: {
            '*.svg': {
               loaders: ['@svgr/webpack'],
               as: '*.js'
            }
         }
      }
   },
   images: {
      remotePatterns: [{ hostname: 'res.cloudinary.com' }]
   },
   env: {
      API_TOKEN: process.env.API_TOKEN,
      WEB3AUTH_VERIFIER: process.env.WEB3AUTH_VERIFIER,
      GOOGLE_ID: process.env.GOOGLE_ID,
      WEB3AUTH_CLIENT_ID: process.env.WEB3AUTH_CLIENT_ID
   }
}

export default nextConfig
