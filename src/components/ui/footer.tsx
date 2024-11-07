import { DictionaryProps } from '@/src/types/dictionary'
import { Instagram, Linkedin, Mail } from 'lucide-react'

import React from 'react'

export const Footer: React.FC<FooterProps> = ({
   dictionary,
   className
}: FooterProps) => {
   return (
      <React.Fragment>
         <div className="bg-white-default flex flex-col md:flex-row items-center justify-between min-h-32 px-4 md:px-20 py-6 md:py-0 gap-6 md:gap-0">
            <img
               loading="lazy"
               src="/footer-logo.png"
               alt="Basa"
               className="filter grayscale"
            />
            <p className="text-base text-gray-default text-center md:text-left px-4 md:px-0">
               Greenfi - Cultivando um futuro sustentável, juntos - © 2024 Todos os
               direitos reservados
            </p>
            <div className="flex items-center gap-4">
               <div className="bg-gray-default p-2 rounded-md cursor-pointer">
                  <Instagram className="text-white-default size-5" />
               </div>
               <div className="bg-gray-default p-2 rounded-md cursor-pointer">
                  <Linkedin className="text-white-default size-5" />
               </div>
               <div className="bg-gray-default p-2 rounded-md cursor-pointer">
                  <Mail className="text-white-default size-5" />
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

type FooterProps = {
   dictionary: DictionaryProps['dictionary']
   className?: string
}
