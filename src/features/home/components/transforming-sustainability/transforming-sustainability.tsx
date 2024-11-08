import { Background } from '@/src/components/icons/background'
import {
   House,
   People,
   PlantSheets,
   ThreePlants,
   WaterParticles,
   Wheat
} from '@/src/components/icons/transforming-sustainability'
import { DictionaryProps } from '@/src/types/dictionary'
import { EmblaOptionsType } from 'embla-carousel'

import EmblaCarousel from '@/src/features/home/components/transforming-sustainability/embla-carroussel/EmblaCarousel'
import React from 'react'

export const TransformingSustainability: React.FC<DictionaryProps> = ({
   dictionary
}: DictionaryProps) => {
   const cardItems = [
      {
         icon: <ThreePlants className="size-5" />,
         title: 'Preservação da natureza',
         description:
            'Protegemos [1.000.000] hectares a de floresta, conservando espécies de flora e fauna evitando [Número] toneladas de CO₂ através da manutenção de reservatórios de carbono.'
      },
      {
         icon: <WaterParticles className="size-5" />,
         title: 'Recursos hídricos',
         description:
            'Preservamos [Número] litros de água por ano por hectare, recuperando nascentes e melhorando a qualidade da água local.'
      },
      {
         icon: <PlantSheets className="size-5" />,
         title: 'Biodiversidade',
         description:
            'Estabelecemos corredores ecológicos, protegemos [Número] espécies e aumentamos a população de polinizadores.'
      },
      {
         icon: <People className="size-5" />,
         title: 'Impacto social',
         description:
            'Criamos empregos sustentáveis, beneficiamos diretamente [Número] famílias e implementamos projetos de educação ambiental.'
      },
      {
         icon: <House className="size-5" />,
         title: 'Desenvolvimento comunitário',
         description:
            'Apoio a cooperativas locais e aumento da renda média das comunidades envolvidas.'
      },
      {
         icon: <Wheat className="size-5" />,
         title: 'Agricultura custentável',
         description:
            'Convertidos [Número] hectares para práticas agrícolas sustentáveis, com redução no uso de pesticidas e reintrodução de cultivos nativos.'
      }
   ]

   const OPTIONS: EmblaOptionsType = {
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
         '(min-width: 768px)': { slidesToScroll: 3 },
         '(min-width: 1024px)': { slidesToScroll: 4 }
      }
   }
   return (
      <React.Fragment>
         <div className="relative overflow-hidden" id="sustainability">
            <div className="py-20">
               <div className="container">
                  <h2 className="text-3xl md:text-center md:text-5xl font-semibold text-black-black text-balance">
                     Transformando através da sustentabilidade
                  </h2>
               </div>
               <div className="pl-4 md:pl-[8vw]">
                  <EmblaCarousel slides={cardItems} options={OPTIONS} />
               </div>
            </div>
            <Background className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 w-screen -z-20" />
         </div>
      </React.Fragment>
   )
}

export type CardItemProps = {
   icon: React.ReactNode
   title: string
   description: string
}

export const CardItem: React.FC<CardItemProps> = ({ icon, title, description }) => {
   return (
      <React.Fragment>
         <div className="bg-green-default px-6 py-10 w-fit rounded-3xl grid place-items-center gap-4 justify-items-center max-w-[354px] h-[300px] md:h-[289px] content-center">
            <div className="w-10 h-10 bg-yellow-default rounded-lg flex items-center justify-center">
               {icon}
            </div>
            <div className="flex flex-col items-center gap-2">
               <h3 className="text-lg text-center md:text-xl font-semibold text-white-default">
                  {title}
               </h3>
               <p className="text-sm md:text-base font-medium text-center text-[#939393]">
                  {description}
               </p>
            </div>
         </div>
      </React.Fragment>
   )
}
