import React from 'react'

export const Statistics: React.FC = () => {
   return (
      <React.Fragment>
         <div className="bg-white-default py-16 container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-y-8">
               <StatisticsItem
                  title="+ [X] m² Proteção Florestal"
                  description="Cada UCS adicional protege mais [X] m² de floresta, contribuindo para a preservação do meio ambiente."
               />
               <StatisticsItem
                  title="+ [Y] Litros Preservação de Água"
                  description="Preservação de Água Preserve [Y] litros de água limpa e ajude a manter a vitalidade dos recursos hídricos locais."
               />
               <StatisticsItem
                  title="+ [Z] Famílias Apoio às Comunidades"
                  description="Cada UCS apoia [Z] famílias em comunidades locais, promovendo sustentabilidade e desenvolvimento social."
               />
            </div>
         </div>
      </React.Fragment>
   )
}

const StatisticsItem: React.FC<{ title: string; description: string }> = ({
   title,
   description
}) => {
   return (
      <div className="flex flex-col items-center gap-2 px-4 py-6 md:p-0">
         <p className="text-lg md:text-xl font-semibold text-center text-black-black">
            {title}
         </p>
         <p className="text-sm md:text-base font-semibold text-center text-gray-paragraph">
            {description}
         </p>
      </div>
   )
}
