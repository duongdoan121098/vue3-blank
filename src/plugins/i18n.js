import en from '../locales/en.json'
import vi from '../locales/vi.json'

import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
    strategy: 'no_prefix',
    locales: [
        {
            code: 'en',
            iso: 'en',
            name: 'English',
        },
        {
            code: 'vi',
            iso: 'vi',
            name: 'Vietnamese',
        },
    ],
    defaultLocale: 'vi',
    fallbackLocale: 'vi',
    messages: { en, vi },
    silentTranslationWarn: false,
})
