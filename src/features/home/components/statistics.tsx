import { DictionaryProps } from '@/src/types/dictionary'
import React from 'react'

export const Statistics: React.FC<DictionaryProps> = ({
   dictionary
}: DictionaryProps) => {
   return (
      <React.Fragment>
         <div className="bg-white-default py-16 container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-y-8">
               <StatisticsItem
                  title={dictionary.statistics.items.forest.title}
                  description={dictionary.statistics.items.forest.description}
               />
               <StatisticsItem
                  title={dictionary.statistics.items.water.title}
                  description={dictionary.statistics.items.water.description}
               />
               <StatisticsItem
                  title={dictionary.statistics.items.families.title}
                  description={dictionary.statistics.items.families.description}
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
