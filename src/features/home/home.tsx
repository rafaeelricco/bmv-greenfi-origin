'use client'

import { Hero } from '@/features/home/components/hero'
import { Statistics } from '@/features/home/components/statistics'
import { Header } from '@/src/components/ui/header'

import React from 'react'

export const HomePageComponent: React.FC = () => {
   return (
      <React.Suspense>
         <Header />
         <Hero />
         <Statistics />
      </React.Suspense>
   )
}
