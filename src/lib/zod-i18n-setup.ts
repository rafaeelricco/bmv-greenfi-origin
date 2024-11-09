import { i18n } from '@/i18n-config'
import { getCookie } from 'cookies-next'
import { z } from 'zod'
import { zodI18nMap } from 'zod-i18n-map'

import en from '@/src/dictionaries/en.json'
import pt from '@/src/dictionaries/pt.json'
import i18next from 'i18next'

/** @dev Initializing i18next with language settings, fetching the current language from cookies, defaulting to the default language if not set */
i18next.init({
   lng: getCookie('locale') || i18n.defaultLocale,
   fallbackLng: i18n.defaultLocale,
   resources: {
      pt: { validations: pt.validations },
      en: { validations: en.validations }
   }
})

/** @dev Configuring Zod to use the i18n map for error messages, enabling localized validation errors */
z.setErrorMap(zodI18nMap)

export default i18next
