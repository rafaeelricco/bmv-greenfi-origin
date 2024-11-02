'use client'

import { Button } from '@/src/components/ui/button'
import React from 'react'

export const Hero: React.FC = () => {
   return (
      <div className="container h-screen">
         <div className="flex items-center gap-2">
            <Status status="active" />
            <p className="text-sm font-medium">Sua UCS exclusiva está ativada!</p>
         </div>
         <div>
            <div>
               <h1 className="text-7xl font-semibold">
                  Bem-vindo ao futuro&nbsp;
                  <span className="from-gradient-start to-gradient-end bg-gradient-to-tl bg-clip-text text-transparent">
                     sustentável
                  </span>
               </h1>
               <p className="text-base font-medium text-gray-paragraph">
                  Transformando sustentabilidade em valor real através da proteção da
                  Amazônia e investimentos responsáveis.
               </p>
            </div>
            <div>
               <Button>Acessar</Button>
               <Button variant="outline">Saiba mais</Button>
            </div>
         </div>
      </div>
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
