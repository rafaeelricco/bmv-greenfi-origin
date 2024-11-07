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
      domains: ['res.cloudinary.com']
   },
   env: {
      API_TOKEN: process.env.API_TOKEN
   }
}

export default nextConfig
