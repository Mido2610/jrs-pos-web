import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enCommon from './i18n/en/common.json';
import jaCommon from './i18n/ja/common.json';
import viCommon from './i18n/vi/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enCommon },
      vi: { translation: viCommon },
      ja: { translation: jaCommon },
    },
    lng: 'ja',
    fallbackLng: 'en',
    debug: import.meta.env.DEV,
    interpolation: { escapeValue: false },
  });

export default i18n;
