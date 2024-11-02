import type { Config } from 'tailwindcss'

const config: Config = {
   darkMode: ['class'],
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}'
   ],
   theme: {
      extend: {
         colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)',

            gray: {
               default: '#394054',
               alto: 'rgba(219, 219, 219, 1)',
               boulder: 'rgba(122, 122, 122, 1)',
               dove: 'rgba(115, 115, 115, 1)',
               mineShaft: 'rgba(38, 38, 38, 1)',
               scorpion: 'rgba(95, 95, 95, 1)',
               shark: 'rgba(27, 29, 33, 1)',
               wildSand: 'rgba(245, 245, 245, 1)'
            },

            blue: {
               azureRadiance: 'rgba(0, 149, 246, 1)',
               deepCerulean: 'rgba(0, 119, 181, 1)'
            },

            green: {
               default: '#3a452d',
               deYork: 'rgba(152, 202, 137, 1)',
               emerald: 'rgba(97, 206, 112, 1)',
               kelp: 'rgba(58, 67, 46, 1)',
               killarney: 'rgba(59, 104, 71, 1)',
               thatchGreen: 'rgba(64, 76, 29, 1)'
            },

            yellow: {
               default: '#ecae2f',
               fuelYellow: 'rgba(236, 174, 47, 1)',
               luxorGold: 'rgba(167, 137, 44, 1)',
               selectiveYellow: 'rgba(239, 177, 0, 1)'
            },

            red: {
               thunderbird: 'rgba(205, 32, 31, 1)'
            },

            black: {
               default: '#231f20',
               bistre: 'rgba(58, 45, 30, 0.97)',
               black: 'rgba(0, 0, 0, 1)',
               charade: 'rgba(39, 41, 51, 1)'
            },

            white: {
               default: '#ffffff',
               '10': 'rgba(255, 255, 255, 0.1)'
            }
         },

         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)'
         },
         fontFamily: {
            raleway: ['"Raleway"', 'sans-serif'],
            montserrat: ['"Montserrat"', 'sans-serif']
         }
      }
   },
   plugins: [require('tailwindcss-animate')]
}

export default config
