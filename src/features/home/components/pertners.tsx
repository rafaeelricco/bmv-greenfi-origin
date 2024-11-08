import { DictionaryProps } from '@/src/types/dictionary'

import React from 'react'

export const Pertners: React.FC<DictionaryProps> = ({
   dictionary
}: DictionaryProps) => {
   return (
      <React.Fragment>
         <div className="bg-green-default py-24">
            <div className="container">
               <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
                  <img
                     loading="lazy"
                     src="/basa-white.png"
                     alt="Logo 1"
                     className="object-contain"
                  />
                  <img
                     loading="lazy"
                     src="/bmv-white.png"
                     alt="Logo 2"
                     className="object-contain"
                  />
                  <div className="w-[150px] h-[42px] bg-[#D9D9D9]" />
                  <div className="w-[150px] h-[42px] bg-[#D9D9D9]" />
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}
