'use client'

import { Hero } from '@/features/home/components/hero'

import React from 'react'

export const HomePageComponent: React.FC = () => {
   return (
      <React.Suspense>
         <Hero />
      </React.Suspense>
   )
}
