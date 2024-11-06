import { i18n } from '@/i18n-config'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
   metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
   title: 'BMV Global | Soluções Sustentáveis e ESG para Empresas',
   description:
      'Explore soluções de sustentabilidade com a BMV Global, líder em ESG e conservação de biodiversidade. Descubra como a valorização da natureza e UCS (Unidades de Crédito de Sustentabilidade) podem gerar impacto positivo e viabilizar crescimento econômico sustentável.',
   authors: [{ name: 'BMV Global' }],
   keywords: [
      'ESG',
      'biodiversidade',
      'sustentabilidade',
      'créditos de carbono',
      'CPR Verde',
      'soluções ambientais',
      'economia verde',
      'impacto ambiental',
      'conservação da natureza'
   ],
   openGraph: {
      title: 'BMV Global | Inovação em Sustentabilidade e ESG',
      description:
         'A BMV Global integra tecnologia e conservação para fomentar projetos sustentáveis e impacto ambiental positivo.',
      type: 'website'
   },
   twitter: {
      card: 'summary_large_image',
      title: 'BMV Global | Inovação em Sustentabilidade e ESG',
      description:
         'A BMV Global integra tecnologia e conservação para fomentar projetos sustentáveis e impacto ambiental positivo.'
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
         <body id="root">{children}</body>
      </html>
   )
}
