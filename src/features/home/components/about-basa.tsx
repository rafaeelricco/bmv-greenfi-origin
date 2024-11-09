import { DictionaryProps } from '@/src/types/dictionary'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { CirclePlay } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const AboutBASA: React.FC<DictionaryProps> = ({
   dictionary
}: DictionaryProps) => {
   return (
      <React.Fragment>
         <div className="bg-green-default p-4 md:p-6" id="bank-of-amazonia">
            <div className="container bg-[#FBEFD5] rounded-3xl px-6 md:px-20 py-8 md:py-16 grid gap-6 md:gap-8">
               <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-20">
                  <div className="grid gap-6 md:gap-8 content-center">
                     <div className="space-y-3 md:space-y-4">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-black-black">
                           Sobre o Banco da Amazônia
                        </h2>
                        <p className="text-sm sm:text-base text-[#82857F]">
                           O Banco da Amazônia é uma instituição financeira
                           comprometida com o desenvolvimento sustentável da
                           Amazônia, promovendo o crédito verde e impulsionando a
                           agricultura familiar. Sua missão é oferecer soluções
                           financeiras inovadoras que preservem a biodiversidade e
                           incentivem o uso responsável dos recursos naturais,
                           pautando-se em ética, transparência e inovação.
                        </p>
                     </div>
                     <div className="space-y-3 md:space-y-4">
                        <p className="text-sm sm:text-base font-bold text-green-default">
                           Disrupção na sustentabilidade
                        </p>
                        <div className="space-y-2 md:space-y-2">
                           <div className="flex items-start md:items-center gap-2">
                              <CheckIcon className="size-4 md:size-5 mt-0.5 md:mt-0 flex-shrink-0" />
                              <p className="text-xs sm:text-sm font-semibold text-black-text">
                                 Compromisso socioambiental forte, com foco em apoiar
                                 projetos sustentáveis;
                              </p>
                           </div>
                           <div className="flex items-start md:items-center gap-2">
                              <CheckIcon className="size-4 md:size-5 mt-0.5 md:mt-0 flex-shrink-0" />
                              <p className="text-xs sm:text-sm font-semibold text-black-text">
                                 Destaque na transformação de ativos ecológicos em
                                 benefícios econômicos;
                              </p>
                           </div>
                           <div className="flex items-start md:items-center gap-2">
                              <CheckIcon className="size-4 md:size-5 mt-0.5 md:mt-0 flex-shrink-0" />
                              <p className="text-xs sm:text-sm font-semibold text-black-text">
                                 Reconhecimento pelo selo Tesouro Verde por três anos
                                 consecutivos;
                              </p>
                           </div>
                           <div className="flex items-start md:items-center gap-2">
                              <CheckIcon className="size-4 md:size-5 mt-0.5 md:mt-0 flex-shrink-0" />
                              <p className="text-xs sm:text-sm font-semibold text-black-text">
                                 Integração entre conservação ambiental e criação de
                                 oportunidades financeiras;
                              </p>
                           </div>
                           <div className="flex items-start md:items-center gap-2">
                              <CheckIcon className="size-4 md:size-5 mt-0.5 md:mt-0 flex-shrink-0" />
                              <p className="text-xs sm:text-sm font-semibold text-black-text">
                                 Alinhamento com a proposta inovadora da moeda UCS.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px] lg:w-[40vw] xl:w-[35vw] 2xl:w-[454px] 2xl:h-[600px] bg-green-default rounded-3xl relative overflow-hidden">
                     <Image
                        src="/basa-image.png"
                        alt="Floresta hero"
                        fill
                        className="object-cover object-center"
                        priority
                        quality={50}
                     />
                  </div>
               </div>
            </div>
            <div className="py-16 space-y-8">
               <h3 className="text-lg font-semibold text-white-default text-center">
                  Protegendo o futuro da floresta
               </h3>
               <div className="max-w-xl min-h-72 rounded-2xl mx-auto my-0">
                  <VideoPlayer dictionary={{ dictionary }} />
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
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

const VideoPlayer: React.FC<{ dictionary: DictionaryProps; thumbnail?: string }> = ({
   dictionary,
   thumbnail
}) => {
   const videoRef = React.useRef<HTMLVideoElement>(null)
   const pathname = usePathname()
   const [isFullscreen, setIsFullscreen] = React.useState(false)

   const currentLocale = pathname.split('/')[1] as 'pt' | 'en'
   const videoUrl =
      currentLocale === 'en'
         ? process.env.NEXT_PUBLIC_VIDEO_EN
         : process.env.NEXT_PUBLIC_VIDEO_PT

   const captureVideoFrame = () => {
      if (videoRef.current) {
         videoRef.current.currentTime = 1

         const canvas = document.createElement('canvas')
         canvas.width = videoRef.current.videoWidth
         canvas.height = videoRef.current.videoHeight

         const ctx = canvas.getContext('2d')
         ctx?.drawImage(videoRef.current, 0, 0)

         const thumbnailUrl = canvas.toDataURL('image/jpeg')
         return thumbnailUrl
      }
   }

   React.useEffect(() => {
      if (videoRef.current) {
         videoRef.current.addEventListener('loadeddata', () => {
            if (!thumbnail) {
               const frame = captureVideoFrame()
               if (videoRef.current) {
                  videoRef.current.poster = frame || ''
               }
            }
         })
      }
   }, [thumbnail])

   React.useEffect(() => {
      const handleFullscreenChange = () => {
         const isInFullscreen = Boolean(document.fullscreenElement)
         setIsFullscreen(isInFullscreen)

         if (!isInFullscreen && videoRef.current) {
            videoRef.current.pause()
         }
      }

      document.addEventListener('fullscreenchange', handleFullscreenChange)
      document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.addEventListener('mozfullscreenchange', handleFullscreenChange)
      document.addEventListener('MSFullscreenChange', handleFullscreenChange)

      const handleKeyPress = (e: KeyboardEvent) => {
         if (e.key === 'Escape' && videoRef.current) {
            videoRef.current.pause()
            setIsFullscreen(false)
         }
      }
      document.addEventListener('keydown', handleKeyPress)

      return () => {
         document.removeEventListener('fullscreenchange', handleFullscreenChange)
         document.removeEventListener(
            'webkitfullscreenchange',
            handleFullscreenChange
         )
         document.removeEventListener('mozfullscreenchange', handleFullscreenChange)
         document.removeEventListener('MSFullscreenChange', handleFullscreenChange)
         document.removeEventListener('keydown', handleKeyPress)
      }
   }, [])

   const handlePlay = () => {
      if (videoRef.current) {
         if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen()
         }
         videoRef.current.play()
         setIsFullscreen(true)
      }
   }

   return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
         <video
            ref={videoRef}
            className={cn(
               'w-full h-full object-cover rounded-2xl cursor-pointer',
               !isFullscreen && 'blur-[2px] brightness-[0.5]'
            )}
            onClick={handlePlay}
            poster={thumbnail}
            preload="metadata"
         >
            <source src={videoUrl} type="video/mp4" />
            {currentLocale === 'en'
               ? "Your browser doesn't support video playback."
               : 'Seu navegador não suporta a tag de vídeo.'}
         </video>
         {!isFullscreen && (
            <button
               onClick={handlePlay}
               className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-4 transition-all"
               aria-label="Play video"
            >
               <CirclePlay className="w-12 h-12 text-white-default" />
            </button>
         )}
      </div>
   )
}

const WhyBuyUcsItem: React.FC<{
   title: string
   description: string
   icon: React.ReactNode
}> = ({ title, description, icon }) => {
   return (
      <div className="flex flex-col gap-4">
         <div className="bg-green-default w-12 h-12 flex rounded-lg items-center justify-center">
            {icon}
         </div>
         <div className="flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-semibold text-black-black">
               {title}
            </h3>
            <p className="text-sm md:text-base font-medium text-gray-paragraph">
               {description}
            </p>
         </div>
      </div>
   )
}
