import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
   metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
   title: 'Leilão Mais | Gerencie seus leilões com facilidade',
   description:
      'Sistema completo para gestão de leilões automotivos. Organize, gerencie e realize leilões de forma eficiente e transparente através da plataforma Pátio Mais.',
   authors: [{ name: 'Pátio Mais' }],
   keywords: [
      'leilão automotivo',
      'gestão de leilões',
      'leilão de veículos',
      'pátio mais',
      'sistema de leilões',
      'leilão online',
      'gestão de pátio'
   ],
   openGraph: {
      title: 'Leilão Mais | Módulo de Leilões do Pátio Mais',
      description:
         'Sistema completo para gestão de leilões automotivos. Organize, gerencie e realize leilões de forma eficiente e transparente.',
      type: 'website'
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Leilão Mais | Módulo de Leilões do Pátio Mais',
      description:
         'Sistema completo para gestão de leilões automotivos. Organize, gerencie e realize leilões de forma eficiente e transparente.'
   }
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <head>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
               href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
               rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin="anonymous"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
               rel="stylesheet"
            />
         </head>
         <body className="antialiased">{children}</body>
      </html>
   )
}
