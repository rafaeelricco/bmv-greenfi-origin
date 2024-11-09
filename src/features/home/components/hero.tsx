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
import { redeemUcsService } from '@/src/services/redeemUcs/redeemUcs.service'
import { DictionaryProps } from '@/src/types/dictionary'
import { ArrowRight, Info, Wallet } from 'lucide-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import Image from 'next/image'
import React from 'react'

export const Hero: React.FC<DictionaryProps> = ({ dictionary }: DictionaryProps) => {
   const {
      register,
      watch,
      handleSubmit,
      formState: { errors }
   } = useForm<redeemUcsProps>({
      defaultValues: {
         name: '',
         email: '',
         code: '',
         wallet: ''
      }
   })

   const [redeenLoading, setRedeemLoading] = React.useState(false)

   const handleScrollTo = (scrollTo: string) => {
      const element = document.querySelector(scrollTo)
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' })
      }
   }

   const onSubmit: SubmitHandler<redeemUcsProps> = async (data) => {
      setRedeemLoading(true)
      const response = await redeemUcsService({
         ownerEmail: data.email,
         ownerName: data.name,
         tokenCode: data.code,
         toWalletAddress: data.wallet
      })

      setRedeemLoading(false)

      // TODO: Colocar mensagens de erro e sucesso em ingles ou portugues
      if (response.status !== 200) {
         console.error('Error:', response)
         return
      }

      console.log('Success:', response)
   }

   return (
      <React.Fragment>
         <Dialog>
            <DialogContent className="space-y-2">
               <DialogTitle>
                  <div className="space-y-2">
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
               <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-4">
                     <Input type="text" placeholder="Nome" {...register('name')} />
                     <Input
                        type="email"
                        placeholder="E-mail"
                        {...register('email')}
                     />
                     <Input
                        type="text"
                        placeholder="Código de resgate"
                        {...register('code')}
                     />
                     <Input
                        type="text"
                        placeholder="Endereço da wallet"
                        {...register('wallet')}
                     />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                     <Button
                        type="submit"
                        variant={'default'}
                        className="w-full"
                        loading={redeenLoading}
                     >
                        Resgatar minha UCS
                     </Button>
                     <Button variant={'outline'} className="w-full">
                        <div className="flex items-center gap-2">
                           <Wallet className="w-4 h-4" />
                           Conectar wallet
                        </div>
                     </Button>
                  </div>
               </form>
            </DialogContent>
            <Background className="absolute left-1/2 -translate-x-1/2 h-[calc(100vh-82px)] opacity-80 w-screen -z-10" />
            <div
               className="min-h-[calc(100vh-82px)] flex flex-col justify-between relative"
               id="hero"
            >
               <div className="flex-1 flex items-center container px-4 md:px-0">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center w-full">
                     <div className="flex flex-col gap-6 mt-8 sm:mt-0">
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
                        <div className="flex flex-col sm:flex-row gap-6">
                           <DialogTrigger asChild>
                              <Button variant="default" className="w-full sm:w-auto">
                                 {dictionary.hero.buttons.primary}
                              </Button>
                           </DialogTrigger>
                           <Button
                              variant="outline"
                              className="w-full sm:w-auto"
                              onClick={() => handleScrollTo('#what-guides-us')}
                           >
                              {dictionary.hero.buttons.secondary}
                           </Button>
                        </div>
                        <div className="flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-[#099817] inline-flex animate-green" />
                           <p className="text-sm font-semibold text-black-text">
                              {dictionary.hero.status.active}
                           </p>
                        </div>
                     </div>
                     <div className="w-full lg:w-[40vw] xl:w-[35vw] 2xl:w-[454px] h-[400px] md:h-[600px] 2xl:h-[600px] bg-green-default rounded-3xl relative overflow-hidden">
                        <Image
                           src="/floresta-hero.jpg"
                           alt="Floresta hero"
                           fill
                           className="object-cover object-center select-none"
                           priority
                           quality={50}
                        />
                        <div
                           className="absolute bottom-4 left-4 bg-white-default px-2 py-2 flex items-center gap-2 rounded-xl hover:bg-white-default/80 transition-colors cursor-pointer select-none"
                           onClick={() => handleScrollTo('#why-buy-ucs')}
                        >
                           <button className="bg-green-default rounded-md w-6 h-6 flex items-center justify-center p-1">
                              <Info className="text-yellow-default" />
                           </button>
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

// TODO: Colocar mensagens de erro e sucesso em ingles ou portugues
const redeemUcsSchema = z.object({
   name: z.string({
      message: 'Nome é obrigatório'
   }),
   email: z
      .string({
         message: 'E-mail é obrigatório'
      })
      .email({
         message: 'E-mail inválido'
      }),
   code: z.string({
      message: 'Código de resgate é obrigatório'
   }),
   wallet: z.string({
      message: 'Endereço da wallet é obrigatório'
   })
})

type redeemUcsProps = z.infer<typeof redeemUcsSchema>
