import 'zod-i18n-map/locales/en/zod.json'
import 'zod-i18n-map/locales/pt/zod.json'

import { i18n } from '@/i18n-config'
import { getCookie } from 'cookies-next'
import { z } from 'zod'
import { zodI18nMap } from 'zod-i18n-map'

import en from '@/src/dictionaries/en.json'
import pt from '@/src/dictionaries/pt.json'
import i18next from 'i18next'

i18next.init({
   lng: getCookie('locale') || i18n.defaultLocale,
   resources: {
      pt: {
         translation: pt.validations,
         zod: require('zod-i18n-map/locales/pt/zod.json')
      },
      en: {
         translation: en.validations,
         zod: require('zod-i18n-map/locales/en/zod.json')
      }
   },
   fallbackLng: i18n.defaultLocale
})

z.setErrorMap(zodI18nMap)

export default i18next
