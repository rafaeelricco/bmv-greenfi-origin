'use client'

import { AboutBASA } from '@/features/home/components/about-basa'
import { Hero } from '@/features/home/components/hero'
import { TransformingSustainability } from '@/features/home/components/transforming-sustainability/transforming-sustainability'
import { WhatGuidesUs } from '@/features/home/components/what-guides-us'
import { WhyBuyUcs } from '@/features/home/components/why-buy-ucs'
import { Footer } from '@/src/components/ui/footer'
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
         <AboutBASA dictionary={dictionary} />
         <WhatGuidesUs dictionary={dictionary} />
         <WhyBuyUcs dictionary={dictionary} />
         <TransformingSustainability dictionary={dictionary} />
         <Footer dictionary={dictionary} />
      </React.Suspense>
   )
}
