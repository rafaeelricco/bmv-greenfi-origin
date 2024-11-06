'use client'

import { BrazilSVG, UnitedStatesSVG } from '@/components/icons/flags'
import { Button } from '@/components/ui/button'
import {
   Drawer,
   DrawerContent,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger
} from '@/components/ui/drawer'
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger
} from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger
} from '@/components/ui/tooltip'
import { i18n } from '@/i18n-config'
import { cn } from '@/lib/utils'
import { general_routes } from '@/routes/general'
import { DictionaryProps } from '@/src/types/dictionary'
import { setCookie } from 'cookies-next'
import { PanelLeftIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

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
               'w-full py-4 md:py-6 grid justify-items-center border-b border-gray-border min-h-[82px]',
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
                                                <p className="font-sf-pro-display text-green-default font-semibold flex-shrink cursor-default opacity-50">
                                                   {item.label}
                                                </p>
                                             </React.Fragment>
                                          ) : (
                                             <Link
                                                href={item.link}
                                                className="font-sf-pro-display text-green-default hover:text-green-default/80 flex-shrink cursor-pointer hover:underline font-semibold"
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
                     <SelectLanguage />
                  </div>
               </div>
               <div className="md:hidden">
                  <Drawer direction="right">
                     <DrawerTrigger asChild>
                        <Button size="icon" variant="outline">
                           <PanelLeftIcon className="h-5 w-5" />
                           <span className="sr-only">
                              {dictionary.header.accessibility.toggleMenu}
                           </span>
                        </Button>
                     </DrawerTrigger>
                     <DrawerContent className="max-w-xs bg-white-default fixed w-[40rem] h-screen overflow-y-scroll overflow-x-hidden flex flex-col top-0 right-0 z-[998] py-12 2xl:py-14 px-12 focus:outline-none space-y-8">
                        <DrawerHeader className="p-0">
                           <DrawerTitle className="p-0">
                              <Image
                                 src="/logo-header.png"
                                 alt="logo-header"
                                 width={315}
                                 height={33}
                                 priority
                                 className="w-64"
                              />
                           </DrawerTitle>
                        </DrawerHeader>
                        <div className="grid gap-8">
                           <SelectLanguage className="w-fit" />
                           <div className="grid gap-6">
                              {items.map((item, index) => (
                                 <div key={item.id + index}>
                                    <TooltipProvider>
                                       <Tooltip>
                                          <TooltipTrigger asChild>
                                             <div>
                                                {item.disabled ? (
                                                   <p className="font-sf-pro-display text-green-default font-semibold opacity-50">
                                                      {item.label}
                                                   </p>
                                                ) : (
                                                   <Link
                                                      href={item.link}
                                                      className="font-sf-pro-display text-green-default hover:text-green-default/80 hover:underline font-semibold"
                                                      target={
                                                         item.external
                                                            ? '_blank'
                                                            : '_self'
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
                                          <TooltipContent side="right">
                                             <p className="font-sf-pro-display text-base font-medium">
                                                {item.tooltip}
                                             </p>
                                          </TooltipContent>
                                       </Tooltip>
                                    </TooltipProvider>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </DrawerContent>
                  </Drawer>
               </div>
            </div>
         </nav>
      </React.Fragment>
   )
}

const SelectLanguage: React.FC<{ className?: string }> = ({
   className
}: {
   className?: string
}) => {
   const router = useRouter()
   const pathName = usePathname()

   const curr_locale = i18n.locales.find((locale) => {
      return locale === pathName.split('/')[1]
   }) as 'en' | 'pt'

   const labels = { en: 'Inglês (EUA)', pt: 'Português (PT-BR)' }

   const redirectedPathName = (locale: string) => {
      if (!pathName) return '/'
      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
   }

   return (
      <div className={cn(className)}>
         <Select
            value={
               i18n.locales.find((locale) => {
                  return locale === pathName.split('/')[1]
               }) as string
            }
            onValueChange={(value: string) => {
               router.push(redirectedPathName(value))
               setCookie('locale', value)
            }}
         >
            <SelectTrigger
               aria-label="button-select-language"
               className="rounded-3xl bg-green-default flex items-center justify-between gap-2 px-2"
            >
               {curr_locale ? (
                  <div className="flex items-center gap-2">
                     {curr_locale == 'pt' && <BrazilSVG width={24} height={24} />}
                     {curr_locale == 'en' && (
                        <UnitedStatesSVG width={24} height={24} />
                     )}
                     <span className="text-xs text-white-default font-semibold md:text-sm">
                        {labels[curr_locale]}
                     </span>
                  </div>
               ) : (
                  <Skeleton className="h-5 w-[180px]" />
               )}
            </SelectTrigger>
            <SelectContent className="z-[999]">
               <SelectGroup>
                  {i18n.locales.map(
                     (locale) =>
                        (
                           <SelectItem key={locale} value={locale}>
                              {labels[locale as 'en' | 'pt']}
                           </SelectItem>
                        ) as React.ReactNode
                  )}
               </SelectGroup>
            </SelectContent>
         </Select>
      </div>
   )
}

type HeaderProps = {
   dictionary: DictionaryProps['dictionary']
   className?: string
}

export { Header }
