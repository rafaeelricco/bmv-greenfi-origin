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
   env: {
      API_TOKEN: process.env.API_TOKEN
   }
}

export default nextConfig
