export const dynamic = 'force-static'

import { HomePageComponent } from '@/features/home/home'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

type Props = {
   params: Promise<{ lang: Locale }>
   searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function HomePage({ params }: Props) {
   const { lang } = await params
   const dictionary = await getDictionary(lang)
   return <HomePageComponent dictionary={dictionary} />
}
