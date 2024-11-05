import { HomePageComponent } from '@/features/home/home'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'

export default async function HomePage({
   params: { lang }
}: {
   params: { lang: Locale }
}) {
   const dictionary = await getDictionary(lang)
   return <HomePageComponent dictionary={dictionary} />
}
