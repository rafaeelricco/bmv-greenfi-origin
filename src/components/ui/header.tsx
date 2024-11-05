'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { general_routes } from '@/routes/general'
import { DictionaryProps } from '@/src/types/dictionary'
import { PanelLeftIcon } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header: React.FC<HeaderProps> = ({ dictionary, className }: HeaderProps) => {
   const items = [
      {
         id: 1,
         label: dictionary.header.navigation.home.label,
         tooltip: dictionary.header.navigation.home.tooltip,
         disabled: false,
         scrollTo: '#',
         link: general_routes.home,
         external: false
      },
      {
         id: 2,
         label: dictionary.header.navigation.about.label,
         tooltip: dictionary.header.navigation.about.tooltip,
         disabled: false,
         scrollTo: '#',
         link: '/',
         external: false
      },
      {
         id: 3,
         label: dictionary.header.navigation.sustainability.label,
         tooltip: dictionary.header.navigation.sustainability.tooltip,
         disabled: false,
         scrollTo: '#',
         link: '/',
         external: false
      }
   ]

   return (
      <React.Fragment>
         <nav
            className={cn(
               'w-full py-4 md:py-6 grid justify-items-center border-b border-gray-border',
               className
            )}
         >
            <div className="flex items-center justify-between w-full container px-4 md:px-0">
               <Image
                  src="/logo-header.png"
                  alt="logo-header"
                  width={315}
                  height={33}
                  priority
                  className="w-64 lg:w-[315px]"
               />
               <div className="grid items-center gap-12">
                  <div className="hidden grid-flow-col items-center gap-12 md:grid">
                     {items.map((item, index) => (
                        <ul className="w-full" key={item.id + index}>
                           <li>
                              <TooltipProvider>
                                 <Tooltip>
                                    <TooltipTrigger asChild>
                                       <div>
                                          {item.disabled ? (
                                             <React.Fragment>
                                                <p className="font-sf-pro-display text-black-500 flex-shrink cursor-default opacity-50">
                                                   {item.label}
                                                </p>
                                             </React.Fragment>
                                          ) : (
                                             <Link
                                                href={item.link}
                                                className="font-sf-pro-display text-black-500 hover:text-black-500/80 flex-shrink cursor-pointer hover:underline font-medium"
                                                target={
                                                   item.external ? '_blank' : '_self'
                                                }
                                                rel={
                                                   item.external
                                                      ? 'noreferrer'
                                                      : undefined
                                                }
                                             >
                                                {item.label}
                                             </Link>
                                          )}
                                       </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                       <p className="font-sf-pro-display text-base font-medium">
                                          {item.tooltip}
                                       </p>
                                    </TooltipContent>
                                 </Tooltip>
                              </TooltipProvider>
                           </li>
                        </ul>
                     ))}
                  </div>
               </div>
               <div className="md:hidden">
                  <Sheet>
                     <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                           <PanelLeftIcon className="h-5 w-5" />
                           <span className="sr-only">
                              {dictionary.header.accessibility.toggleMenu}
                           </span>
                        </Button>
                     </SheetTrigger>
                     <SheetContent side="right" className="sm:max-w-xs">
                        <nav className="grid gap-6 text-lg font-medium">
                           <Link
                              href="#"
                              className="bg-primary text-primary-foreground group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
                              prefetch={false}
                           >
                              <span className="sr-only">
                                 {dictionary.header.accessibility.copyright}
                              </span>
                           </Link>
                           {items.map((item, index) => (
                              <Link
                                 key={item.id + index}
                                 href={item.link}
                                 className="text-muted-foreground flex items-center gap-4 px-2.5 hover:text-foreground hover:underline"
                                 prefetch={false}
                              >
                                 {item.label}
                              </Link>
                           ))}
                        </nav>
                     </SheetContent>
                  </Sheet>
               </div>
            </div>
         </nav>
      </React.Fragment>
   )
}

type HeaderProps = {
   dictionary: DictionaryProps['dictionary']
   className?: string
}

export { Header }
