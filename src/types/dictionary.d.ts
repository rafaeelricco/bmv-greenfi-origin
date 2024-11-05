import { getDictionary } from '@/get-dictionary'

export type DictionaryProps = {
   dictionary: Awaited<ReturnType<typeof getDictionary>>
}
