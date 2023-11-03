import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

import { watcherOptions } from './watcher';
import { en, cz } from './locales';

import { DefaultLocale, Locales } from './types';

const resources: Record<Locales, { translation: DefaultLocale }> = {
  [Locales.en]: {
    translation: en,
  },
  [Locales.cz]: {
    translation: cz,
  },
};

export const availableLocales = {
  en: 'en',
  cz: 'cz',
};

export default i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: Locales.en,
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: watcherOptions,
  });
