'use client'

import {
   Dialog,
   DialogContent,
   DialogTitle,
   DialogTrigger
} from '@/components/ui/dialog'
import { Background } from '@/src/components/icons/background'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { DictionaryProps } from '@/src/types/dictionary'
import { ArrowRight, Info, Wallet } from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Hero: React.FC<DictionaryProps> = ({ dictionary }: DictionaryProps) => {
   return (
      <React.Fragment>
         <Dialog>
            <DialogContent className="space-y-2">
               <DialogTitle>
                  <div className="space-y-2">
                     <div className="p-1 w-fit bg-green-default rounded-lg flex items-center justify-center">
                        <HandHoldCoin className="size-6" />
                     </div>
                     <div className="space-y-1">
                        <h1 className="text-xl font-raleway text-green-default font-semibold">
                           Sua UCS exclusiva está ativada!
                        </h1>
                        <p className="text-sm text-gray-paragraph">
                           Parabéns! Como participante do [Nome do Evento], você
                           recebeu uma Unidade de Crédito de Sustentabilidade (UCS).
                        </p>
                     </div>
                  </div>
               </DialogTitle>
               <div className="space-y-4">
                  <Input type="text" placeholder="Nome" />
                  <Input type="email" placeholder="E-mail" />
                  <Input type="text" placeholder="Código de resgate" />
                  <Input type="text" placeholder="Endereço da wallet" />
               </div>
               <div className="grid md:grid-cols-2 gap-4">
                  <Button variant={'default'} className="w-full" loading={false}>
                     Resgatar minha UCS
                  </Button>
                  <Button variant={'outline'} className="w-full">
                     <div className="flex items-center gap-2">
                        <Wallet className="w-4 h-4" />
                        Conectar wallet
                     </div>
                  </Button>
               </div>
            </DialogContent>
            <Background className="absolute left-1/2 -translate-x-1/2 h-[calc(100vh-82px)] opacity-80 w-screen -z-10" />
            <div className="min-h-[calc(100vh-82px)] flex flex-col justify-between relative">
               <div className="flex-1 flex items-center container px-4 md:px-0">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center w-full">
                     <div className="flex flex-col gap-4 mt-8 sm:mt-0">
                        <div className="flex items-center gap-2">
                           <Status status="active" />
                           <p className="text-sm font-semibold text-black-text">
                              {dictionary.hero.status.active}
                           </p>
                        </div>
                        <div className="flex flex-col gap-2">
                           <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight">
                              {dictionary.hero.title.first}
                              <br className="hidden md:block" />{' '}
                              {dictionary.hero.title.second}&nbsp;
                              <span className="from-gradient-start to-gradient-end bg-gradient-to-tl bg-clip-text text-transparent">
                                 {dictionary.hero.title.highlight}
                              </span>
                           </h1>
                           <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-paragraph sm:max-w-[80%] lg:max-w-[70%]">
                              {dictionary.hero.description}
                           </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                           <DialogTrigger asChild>
                              <Button variant="default" className="w-full sm:w-auto">
                                 {dictionary.hero.buttons.primary}
                              </Button>
                           </DialogTrigger>
                           <Button variant="outline" className="w-full sm:w-auto">
                              {dictionary.hero.buttons.secondary}
                           </Button>
                        </div>
                     </div>
                     <div className="w-full lg:w-[40vw] xl:w-[35vw] 2xl:w-[454px] h-[400px] md:h-[600px] 2xl:h-[600px] bg-green-default rounded-3xl relative overflow-hidden">
                        <Image
                           src="/floresta-hero.jpg"
                           alt="Floresta hero"
                           fill
                           className="object-cover object-center"
                           priority
                           quality={50}
                        />
                        <div className="absolute bottom-4 left-4 bg-white-default px-2 py-2 flex items-center gap-2 rounded-xl hover:bg-white-default/80 transition-colors cursor-pointer">
                           <Link
                              href={'#'}
                              className="bg-green-default rounded-md w-6 h-6 flex items-center justify-center p-1"
                           >
                              <Info className="text-yellow-default" />
                           </Link>
                           <p className="text-sm font-semibold text-black-text">
                              {dictionary.hero.info.question}
                           </p>
                           <ArrowRight className="w-4 h-4" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Dialog>
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

function HandHoldCoin(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg
         viewBox="0 0 17 18"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <path
            d="M6 4c0 2.205 1.794 4 4 4s4-1.795 4-4c0-2.206-1.794-4-4-4S6 1.794 6 4zm7.273 0A3.276 3.276 0 0110 7.273 3.276 3.276 0 016.727 4 3.276 3.276 0 0110 .727 3.276 3.276 0 0113.273 4zM3.825 17.901a.33.33 0 00.468.003l1.61-1.593c.274-.275.357-.682.236-1.036l.347-.335a.988.988 0 01.691-.28h4.414c.783 0 1.524-.303 2.085-.851.023-.023-.176.212 3.011-3.615a1.34 1.34 0 00-.158-1.88 1.327 1.327 0 00-1.863.148l-1.96 2.024a1.332 1.332 0 00-1.032-.497H7.972a4.266 4.266 0 00-1.663-.334c-1.6 0-2.995.742-3.744 2.134a.989.989 0 00-.889.276l-1.58 1.592a.335.335 0 000 .47l3.729 3.774zm2.484-7.578c.508 0 1 .102 1.462.305a.33.33 0 00.133.028h3.77a.668.668 0 010 1.335H8.965a.333.333 0 000 .667h2.71a1.333 1.333 0 001.316-1.509c1.895-1.957 2.162-2.232 2.174-2.246a.664.664 0 01.936-.08.67.67 0 01.078.942L13.2 13.342c-.435.42-1.006.65-1.61.65H7.177c-.432 0-.842.166-1.153.468l-.282.273-2.601-2.613c.608-1.146 1.749-1.797 3.168-1.797zm-4.163 2.213a.33.33 0 01.412-.046c.057.035-.108-.116 2.875 2.877a.335.335 0 01.002.47l-1.372 1.358L.8 13.893l1.346-1.357z"
            fill="#ECAE2F"
         />
         <path
            d="M9.68 1.857v.419c-.383.147-.659.544-.659 1.01 0 .59.444 1.071.99 1.071.181 0 .33.16.33.357 0 .197-.149.357-.33.357-.141 0-.294-.095-.429-.27a.313.313 0 00-.464-.043.378.378 0 00-.04.503c.176.227.383.385.603.465v.417c0 .197.147.357.33.357.182 0 .33-.16.33-.357v-.419c.383-.147.659-.544.659-1.01 0-.59-.444-1.071-.99-1.071-.181 0-.33-.16-.33-.357 0-.197.149-.357.33-.357.117 0 .24.064.357.186.131.137.34.134.467-.008a.378.378 0 00-.008-.505 1.262 1.262 0 00-.486-.329v-.416c0-.197-.147-.357-.33-.357-.182 0-.33.16-.33.357z"
            fill="#ECAE2F"
         />
      </svg>
   )
}
