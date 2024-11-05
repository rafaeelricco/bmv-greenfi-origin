'use client'

import { Hero } from '@/features/home/components/hero'
import { Statistics } from '@/features/home/components/statistics'
import { Header } from '@/src/components/ui/header'
import { DictionaryProps } from '@/src/types/dictionary'

import React from 'react'

export const HomePageComponent: React.FC<DictionaryProps> = ({
   dictionary
}: DictionaryProps) => {
   return (
      <React.Suspense>
         <Header dictionary={dictionary} />
         <Hero dictionary={dictionary} />
         <Statistics dictionary={dictionary} />
      </React.Suspense>
   )
}
