'use client'

import { Background } from '@/src/components/icons/background'
import { Button } from '@/src/components/ui/button'

import Image from 'next/image'
import React from 'react'

export const Hero: React.FC = () => {
   return (
      <React.Fragment>
         <Background className="absolute left-1/2 -translate-x-1/2 h-[calc(100vh-82px)] opacity-80 w-screen overflow-hidden -z-10" />
         <div className="min-h-[calc(100vh-82px)] flex flex-col justify-between relative">
            <div className="flex-1 flex items-center container px-4 md:px-0">
               <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center w-full">
                  <div className="flex flex-col gap-4 mt-8 md:mt-0">
                     <div className="flex items-center gap-2">
                        <Status status="active" />
                        <p className="text-sm font-semibold text-black-text">
                           Sua UCS exclusiva está ativada!
                        </p>
                     </div>
                     <div className="flex flex-col gap-2">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight">
                           Bem-vindo ao
                           <br className="hidden md:block" /> futuro&nbsp;
                           <span className="from-gradient-start to-gradient-end bg-gradient-to-tl bg-clip-text text-transparent">
                              sustentável
                           </span>
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-paragraph sm:max-w-[80%] lg:max-w-[70%]">
                           Transformando sustentabilidade em valor real através da
                           proteção da Amazônia e{' '}
                           <span className="hidden md:inline">
                              <br />
                           </span>
                           investimentos responsáveis.
                        </p>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="default" className="w-full sm:w-auto">
                           Resgatar minha UCS
                        </Button>
                        <Button variant="outline" className="w-full sm:w-auto">
                           Saiba mais
                        </Button>
                     </div>
                  </div>
                  <div className="w-full lg:w-[40vw] xl:w-[35vw] 2xl:w-[454px] h-[400px] md:h-[600px] 2xl:h-[600px] bg-green-default rounded-xl relative overflow-hidden">
                     <Image
                        src="/floresta-hero.jpg"
                        alt="Floresta hero"
                        fill
                        className="object-cover object-center"
                        priority
                     />
                  </div>
               </div>
            </div>
            <div className="min-h-[224px] border-t border-b border-gray-border grid items-center bg-white-default mt-8 md:mt-0">
               <div className="grid grid-cols-1 md:grid-flow-col items-center container gap-8 md:gap-2 px-4 md:px-0 py-8 md:py-0">
                  <p className="text-sm font-semibold text-black-text text-center md:text-left">
                     Parceiros globais que confiam em nós
                  </p>
                  <div className="grid grid-cols-3 md:flex md:justify-end gap-8 md:gap-4">
                     <Image
                        src="/logo-01.png"
                        alt="Partner Logo 1"
                        width={72}
                        height={40}
                        className="object-contain"
                     />
                     <Image
                        src="/logo-02.png"
                        alt="Partner Logo 2"
                        width={72}
                        height={40}
                        className="object-contain"
                     />
                     <Image
                        src="/logo-03.png"
                        alt="Partner Logo 3"
                        width={72}
                        height={40}
                        className="object-contain"
                     />
                     <Image
                        src="/logo-04.png"
                        alt="Partner Logo 4"
                        width={72}
                        height={40}
                        className="object-contain"
                     />
                     <Image
                        src="/logo-05.png"
                        alt="Partner Logo 5"
                        width={72}
                        height={40}
                        className="object-contain"
                     />
                     <Image
                        src="/logo-06.png"
                        alt="Partner Logo 6"
                        width={72}
                        height={40}
                        className="object-contain"
                     />
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
