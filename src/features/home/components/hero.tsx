'use client'

import { Background } from '@/src/components/icons/background'
import { Button } from '@/src/components/ui/button'

import Image from 'next/image'
import React from 'react'

export const Hero: React.FC = () => {
   return (
      <React.Fragment>
         <Background className="absolute left-1/2 -translate-x-1/2 h-[calc(100vh-82px)] w-screen overflow-hidden -z-10" />
         <div className="min-h-[calc(100vh-82px)] flex flex-col justify-between relative">
            <div className="flex-1 flex items-center container">
               <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center w-full">
                  <div className="flex flex-col gap-4">
                     <div className="flex items-center gap-2">
                        <Status status="active" />
                        <p className="text-sm font-semibold text-black-text">
                           Sua UCS exclusiva está ativada!
                        </p>
                     </div>
                     <div className="flex flex-col gap-2">
                        <h1 className="text-7xl font-semibold tracking-tight">
                           Bem-vindo ao
                           <br /> futuro&nbsp;
                           <span className="from-gradient-start to-gradient-end bg-gradient-to-tl bg-clip-text text-transparent">
                              sustentável
                           </span>
                        </h1>
                        <p className="text-base font-medium text-gray-paragraph">
                           Transformando sustentabilidade em valor real através da
                           proteção da Amazônia e<br /> investimentos responsáveis.
                        </p>
                     </div>
                     <div className="flex gap-4">
                        <Button variant="default">Resgatar minha UCS</Button>
                        <Button variant="outline">Saiba mais</Button>
                     </div>
                  </div>
                  <div className="w-[454px] h-[600px] bg-green-default rounded-xl relative overflow-hidden">
                     <Image
                        src="/floresta-hero.jpg"
                        alt="Floresta hero"
                        fill
                        className="object-cover object-center"
                     />
                  </div>
               </div>
            </div>
            <div className="min-h-[224px] border-t border-b border-gray-border grid items-center bg-white-default">
               <div className="grid grid-flow-col items-center container gap-2">
                  <p className="text-sm font-semibold text-black-text">
                     Parceiros globais que confiam em nós
                  </p>
                  <div className="flex justify-end gap-4">
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
