'use client'

import { Background } from '@/src/components/icons/background'
import { Button } from '@/src/components/ui/button'
import { DictionaryProps } from '@/src/types/dictionary'
import { ArrowRight, Info } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Hero: React.FC<DictionaryProps> = ({ dictionary }: DictionaryProps) => {
   return (
      <React.Fragment>
         <Background className="absolute left-1/2 -translate-x-1/2 h-[calc(100vh-82px)] opacity-80 w-screen -z-10" />
         <div className="min-h-[calc(100vh-82px)] flex flex-col justify-between relative">
            <div className="flex-1 flex items-center container px-4 md:px-0">
               <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center w-full">
                  <div className="flex flex-col gap-4 mt-8 sm:mt-0">
                     <div className="flex items-center gap-2">
                        <Status status="active" />
                        <p className="text-sm font-semibold text-black-text">
                           {dictionary.hero.status.active}
                        </p>
                     </div>
                     <div className="flex flex-col gap-2">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight">
                           {dictionary.hero.title.first}
                           <br className="hidden md:block" />{' '}
                           {dictionary.hero.title.second}&nbsp;
                           <span className="from-gradient-start to-gradient-end bg-gradient-to-tl bg-clip-text text-transparent">
                              {dictionary.hero.title.highlight}
                           </span>
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-paragraph sm:max-w-[80%] lg:max-w-[70%]">
                           {dictionary.hero.description}
                        </p>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="default" className="w-full sm:w-auto">
                           {dictionary.hero.buttons.primary}
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto">
                           {dictionary.hero.buttons.secondary}
                        </Button>
                     </div>
                  </div>
                  <div className="w-full lg:w-[40vw] xl:w-[35vw] 2xl:w-[454px] h-[400px] md:h-[600px] 2xl:h-[600px] bg-green-default rounded-3xl relative overflow-hidden">
                     <Image
                        src="/floresta-hero.jpg"
                        alt="Floresta hero"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={50}
                     />
                     <div className="absolute bottom-4 left-4 bg-white-default px-2 py-2 flex items-center gap-2 rounded-xl hover:bg-white-default/80 transition-colors cursor-pointer">
                        <Link
                           href={'#'}
                           className="bg-green-default rounded-md w-6 h-6 flex items-center justify-center p-1"
                        >
                           <Info className="text-yellow-default" />
                        </Link>
                        <p className="text-sm font-semibold text-black-text">
                           {dictionary.hero.info.question}
                        </p>
                        <ArrowRight className="w-4 h-4" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

const Status: React.FC<{ status: 'active' | 'inactive' }> = ({
   status
}: {
   status: 'active' | 'inactive'
}) => {
   return (
      <React.Fragment>
         {status === 'active' ? (
            <span className="w-2 h-2 rounded-full bg-[#099817] inline-flex animate-green" />
         ) : (
            <span className="w-2 h-2 rounded-full bg-[#858585] inline-flex" />
         )}
      </React.Fragment>
   )
}
