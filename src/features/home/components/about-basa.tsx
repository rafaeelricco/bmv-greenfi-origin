import { DictionaryProps } from '@/src/types/dictionary'
import Image from 'next/image'

import React from 'react'

export const AboutBASA: React.FC<DictionaryProps> = ({
   dictionary
}: DictionaryProps) => {
   return (
      <React.Fragment>
         <div className="bg-green-default p-4 md:p-6">
            <div className="container bg-[#FBEFD5] rounded-3xl px-6 md:px-20 py-8 md:py-16 grid gap-6 md:gap-8">
               <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-20">
                  <div className="grid gap-6 md:gap-8 content-center">
                     <div className="space-y-3 md:space-y-4">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black-black">
                           Sobre o Banco da Amazônia
                        </h2>
                        <p className="text-sm sm:text-base text-[#82857F]">
                           O Banco da Amazônia é uma instituição financeira
                           comprometida com o desenvolvimento sustentável da
                           Amazônia, promovendo o crédito verde e impulsionando a
                           agricultura familiar. Sua missão é oferecer soluções
                           financeiras inovadoras que preservem a biodiversidade e
                           incentivem o uso responsável dos recursos naturais,
                           pautando-se em ética, transparência e inovação.
                        </p>
                     </div>
                     <div className="space-y-3 md:space-y-4">
                        <p className="text-sm sm:text-base font-bold text-green-default">
                           Disrupção na sustentabilidade
                        </p>
                        <div className="space-y-2 md:space-y-2">
                           <div className="flex items-start md:items-center gap-2">
                              <CheckIcon className="size-4 md:size-5 mt-0.5 md:mt-0 flex-shrink-0" />
                              <p className="text-xs sm:text-sm font-semibold text-black-text">
                                 Compromisso socioambiental forte, com foco em apoiar
                                 projetos sustentáveis;
                              </p>
                           </div>
                           <div className="flex items-start md:items-center gap-2">
                              <CheckIcon className="size-4 md:size-5 mt-0.5 md:mt-0 flex-shrink-0" />
                              <p className="text-xs sm:text-sm font-semibold text-black-text">
                                 Destaque na transformação de ativos ecológicos em
                                 benefícios econômicos;
                              </p>
                           </div>
                           <div className="flex items-start md:items-center gap-2">
                              <CheckIcon className="size-4 md:size-5 mt-0.5 md:mt-0 flex-shrink-0" />
                              <p className="text-xs sm:text-sm font-semibold text-black-text">
                                 Reconhecimento pelo selo Tesouro Verde por três anos
                                 consecutivos;
                              </p>
                           </div>
                           <div className="flex items-start md:items-center gap-2">
                              <CheckIcon className="size-4 md:size-5 mt-0.5 md:mt-0 flex-shrink-0" />
                              <p className="text-xs sm:text-sm font-semibold text-black-text">
                                 Integração entre conservação ambiental e criação de
                                 oportunidades financeiras;
                              </p>
                           </div>
                           <div className="flex items-start md:items-center gap-2">
                              <CheckIcon className="size-4 md:size-5 mt-0.5 md:mt-0 flex-shrink-0" />
                              <p className="text-xs sm:text-sm font-semibold text-black-text">
                                 Alinhamento com a proposta inovadora da moeda UCS.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px] lg:w-[40vw] xl:w-[35vw] 2xl:w-[454px] 2xl:h-[600px] bg-green-default rounded-3xl relative overflow-hidden">
                     <Image
                        src="https://res.cloudinary.com/dnqiosdb6/image/upload/v1730938018/Floresta_60-min_y9t5hj.jpg"
                        alt="Floresta hero"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={50}
                     />
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
   props: React.SVGProps<SVGSVGElement>
) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 22 22"
         fill="none"
         {...props}
      >
         <path
            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
            fill="#ECAE2F"
            stroke="#ECAE2F"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M8 11L10 13L14 9"
            stroke="white"
            stroke-width="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
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
