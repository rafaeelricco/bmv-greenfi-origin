import {
   Community,
   HandHoldPlant,
   RootLegacy,
   Trophy
} from '@/src/components/icons/why-buy-ucs'
import { DictionaryProps } from '@/src/types/dictionary'

import React from 'react'

export const WhyBuyUcs: React.FC<DictionaryProps> = ({
   dictionary
}: DictionaryProps) => {
   return (
      <React.Fragment>
         <div className="bg-green-default p-4 md:p-6">
            <div className="container bg-[#FBEFD5] rounded-3xl px-6 md:px-20 py-8 md:py-16 grid gap-6 md:gap-8">
               <h2 className="text-3xl md:text-5xl font-semibold text-black-black">
                  {dictionary.whyBuyUcs.title}
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <WhyBuyUcsItem
                     title={dictionary.whyBuyUcs.items.impact.title}
                     icon={<HandHoldPlant className="size-6" />}
                     description={dictionary.whyBuyUcs.items.impact.description}
                  />
                  <WhyBuyUcsItem
                     title={dictionary.whyBuyUcs.items.legacy.title}
                     description={dictionary.whyBuyUcs.items.legacy.description}
                     icon={<RootLegacy className="size-6" />}
                  />
                  <WhyBuyUcsItem
                     title={dictionary.whyBuyUcs.items.recognition.title}
                     description={dictionary.whyBuyUcs.items.recognition.description}
                     icon={<Trophy className="size-6" />}
                  />
                  <WhyBuyUcsItem
                     title={dictionary.whyBuyUcs.items.community.title}
                     description={dictionary.whyBuyUcs.items.community.description}
                     icon={<Community className="size-6" />}
                  />
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

const WhyBuyUcsItem: React.FC<{
   title: string
   description: string
   icon: React.ReactNode
}> = ({ title, description, icon }) => {
   return (
      <div className="flex flex-col gap-4">
         <div className="bg-green-default w-12 h-12 flex rounded-lg items-center justify-center">
            {icon}
         </div>
         <div className="flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-semibold text-black-black">
               {title}
            </h3>
            <p className="text-sm md:text-base font-medium text-gray-paragraph">
               {description}
            </p>
         </div>
      </div>
   )
}
