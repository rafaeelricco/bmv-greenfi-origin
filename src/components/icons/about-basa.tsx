import React from 'react'

export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   )
}
