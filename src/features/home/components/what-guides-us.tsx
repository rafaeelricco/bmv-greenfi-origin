import { i18n } from '@/i18n-config'
import {
   AcronymEN,
   AcronymPT,
   MissionIcon,
   ValuesIcon,
   VisionIcon
} from '@/src/components/icons/what-guides-us'
import { DictionaryProps } from '@/src/types/dictionary'
import { usePathname } from 'next/navigation'

import React from 'react'

export const WhatGuidesUs: React.FC<DictionaryProps> = ({
   dictionary
}: DictionaryProps) => {
   const pathName = usePathname()

   const curr_locale = i18n.locales.find((locale) => {
      return locale === pathName.split('/')[1]
   }) as 'en' | 'pt'

   return (
      <React.Fragment>
         <div className="py-16 space-y-8 bg-transparent" id="what-guides-us">
            <div className="space-y-3 md:space-y-4">
               <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black-black text-center">
                  {dictionary.whatGuidesUs.title}
               </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-8 container mx-auto px-4">
               <CardWhatGuidesUs
                  title={dictionary.whatGuidesUs.items.mission.title}
                  description={dictionary.whatGuidesUs.items.mission.description}
                  icon={<MissionIcon className="w-10 h-10" />}
               />
               <CardWhatGuidesUs
                  title={dictionary.whatGuidesUs.items.values.title}
                  description={
                     <React.Fragment>
                        {curr_locale === 'en' ? (
                           <AcronymEN className="min-w-[308px] min-h-[186px]" />
                        ) : (
                           <AcronymPT className="min-w-[308px] min-h-[186px]" />
                        )}
                     </React.Fragment>
                  }
                  icon={<ValuesIcon className="w-10 h-10" />}
               />
               <CardWhatGuidesUs
                  title={dictionary.whatGuidesUs.items.vision.title}
                  description={dictionary.whatGuidesUs.items.vision.description}
                  icon={<VisionIcon className="w-10 h-10" />}
               />
            </div>
         </div>
      </React.Fragment>
   )
}

export const CardWhatGuidesUs: React.FC<{
   icon: React.ReactNode
   title: string
   description: string | React.ReactNode
}> = ({ icon, title, description }) => {
   return (
      <React.Fragment>
         <div className="bg-green-default px-6 py-12 w-fit rounded-3xl grid place-items-center gap-4 justify-items-center content-center max-w-[356px]">
            {icon}
            <div className="flex flex-col items-center gap-2">
               <h3 className="text-lg text-center md:text-xl font-semibold text-white-default">
                  {title}
               </h3>
               {typeof description === 'string' ? (
                  <p className="text-sm md:text-base font-medium text-center text-gray-support">
                     {description}
                  </p>
               ) : (
                  description
               )}
            </div>
         </div>
      </React.Fragment>
   )
}
