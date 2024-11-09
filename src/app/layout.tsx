import '../styles/embla.css'
import '../styles/globals.css'

import { Toaster } from '@/components/ui/sonner'
import { i18n } from '@/i18n-config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
   metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
   title: 'Banco da Amazônia | Sustentabilidade e Desenvolvimento Regional',
   description:
      'Conheça as iniciativas do Banco da Amazônia voltadas para o desenvolvimento sustentável da região amazônica, promovendo práticas socioambientais responsáveis e soluções financeiras eficazes.',
   authors: [{ name: 'Banco da Amazônia' }],
   keywords: [
      'Banco da Amazônia',
      'sustentabilidade',
      'desenvolvimento sustentável',
      'responsabilidade socioambiental',
      'Amazônia',
      'crédito sustentável',
      'políticas ambientais',
      'ESG',
      'conservação ambiental',
      'financiamento verde'
   ],
   openGraph: {
      title: 'Banco da Amazônia | Sustentabilidade e Desenvolvimento Regional',
      description:
         'Descubra como o Banco da Amazônia promove o desenvolvimento sustentável na região amazônica por meio de práticas socioambientais responsáveis e soluções financeiras eficazes.',
      type: 'website',
      url: 'https://www.bancoamazonia.com.br/o-banco/sustentabilidade',
      images: [
         {
            url: 'https://www.bancoamazonia.com.br/images/sustentabilidade.jpg',
            width: 1200,
            height: 630,
            alt: 'Banco da Amazônia - Sustentabilidade'
         }
      ]
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Banco da Amazônia | Sustentabilidade e Desenvolvimento Regional',
      description:
         'Descubra como o Banco da Amazônia promove o desenvolvimento sustentável na região amazônica por meio de práticas socioambientais responsáveis e soluções financeiras eficazes.',
      images: [
         {
            url: 'https://www.bancoamazonia.com.br/images/sustentabilidade.jpg',
            alt: 'Banco da Amazônia - Sustentabilidade'
         }
      ]
   }
}
export async function generateStaticParams() {
   return i18n.locales.map((locale) => ({ lang: locale }))
}

type RootLayoutProps = {
   children: React.ReactNode
   params: Promise<{ lang: string }>
}

export default async function Root({ children, params }: RootLayoutProps) {
   const { lang } = await params

   return (
      <html lang={lang} className="antialiased">
         <head>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
               href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
               rel="stylesheet"
            />
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin="anonymous"
            />
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
               rel="stylesheet"
            />
         </head>
         <body id="root">
            <Toaster />
            {children}
         </body>
      </html>
   )
}
