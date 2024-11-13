import { TwitterX } from '@/components/icons/footer'
import { DictionaryProps } from '@/src/types/dictionary'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

import React from 'react'

export const Footer: React.FC<FooterProps> = ({ dictionary }: FooterProps) => {
   return (
      <React.Fragment>
         <div className="bg-[#6E7378] flex flex-col md:flex-row items-center justify-between min-h-32 px-4 md:px-20 py-8 md:py-0 gap-8 md:gap-0">
            <img
               src="/logo_negativa_Banco da Amazonia.png"
               className="w-[197px] h-[28px]"
            />
            <p className="text-base text-white-default text-center md:text-left px-4 md:px-0">
               {dictionary.footer.copyright}
            </p>
            <div className="flex flex-wrap items-center gap-4">
               <a
                  href="https://www.youtube.com/bancoamazonia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-default p-2 rounded-md cursor-pointer"
                  aria-label={dictionary.footer.socialLinks.youtube}
               >
                  <Youtube className="text-white-default size-5" />
               </a>
               <a
                  href="https://www.instagram.com/bancoamazonia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-default p-2 rounded-md cursor-pointer"
                  aria-label={dictionary.footer.socialLinks.instagram}
               >
                  <Instagram className="text-white-default size-5" />
               </a>
               <a
                  href="https://twitter.com/basa_oficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-default p-2 rounded-md cursor-pointer"
                  aria-label={dictionary.footer.socialLinks.twitter}
               >
                  <TwitterX className="size-5 text-white-default" />
               </a>
               <a
                  href="https://www.linkedin.com/company/banco-da-amaz%C3%B4nia?originalSubdomain=br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-default p-2 rounded-md cursor-pointer"
                  aria-label={dictionary.footer.socialLinks.linkedin}
               >
                  <Linkedin className="text-white-default size-5" />
               </a>
               <a
                  href="https://pt-br.facebook.com/bancoamazonia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-default p-2 rounded-md cursor-pointer"
                  aria-label={dictionary.footer.socialLinks.facebook}
               >
                  <Facebook className="text-white-default size-5" />
               </a>
               <a
                  href="https://open.spotify.com/show/784dYbQKKcOTvyV8WrNzZH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-default p-2 rounded-md cursor-pointer"
                  aria-label={dictionary.footer.socialLinks.spotify}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="text-white-default size-5 fill-current"
                     viewBox="0 0 256 256"
                  >
                     <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm31.07-46.26a8,8,0,0,1-10.81,3.33,42.79,42.79,0,0,0-40.52,0,8,8,0,0,1-7.48-14.14,59.33,59.33,0,0,1,55.48,0A8,8,0,0,1,159.07,169.74Zm32-56a8,8,0,0,1-10.83,3.29,110.62,110.62,0,0,0-104.46,0,8,8,0,0,1-7.54-14.12,126.67,126.67,0,0,1,119.54,0A8,8,0,0,1,191.06,113.76Zm-16,28a8,8,0,0,1-10.82,3.3,77,77,0,0,0-72.48,0,8,8,0,0,1-7.52-14.12,93,93,0,0,1,87.52,0A8,8,0,0,1,175.06,141.76Z"></path>
                  </svg>
               </a>
            </div>
         </div>
      </React.Fragment>
   )
}

type FooterProps = {
   dictionary: DictionaryProps['dictionary']
}
