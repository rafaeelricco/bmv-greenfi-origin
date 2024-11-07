'use client'

import { AboutBASA } from '@/features/home/components/about-basa'
import { Hero } from '@/features/home/components/hero'
import { Statistics } from '@/features/home/components/statistics'
import { TransformingSustainability } from '@/features/home/components/transforming-sustainability/transforming-sustainability'
import { WhyBuyUcs } from '@/features/home/components/why-buy-ucs'
import { Header } from '@/src/components/ui/header'
import { DictionaryProps } from '@/src/types/dictionary'

import { Footer } from '@/src/components/ui/footer'
import React from 'react'
import { Pertners } from './components/pertners'

export const HomePageComponent: React.FC<DictionaryProps> = ({
   dictionary
}: DictionaryProps) => {
   return (
      <React.Suspense>
         <Header dictionary={dictionary} />
         <Hero dictionary={dictionary} />
         <Statistics dictionary={dictionary} />
         <WhyBuyUcs dictionary={dictionary} />
         <TransformingSustainability dictionary={dictionary} />
         <AboutBASA dictionary={dictionary} />
         <Pertners dictionary={dictionary} />
         <Footer dictionary={dictionary} />
      </React.Suspense>
   )
}
