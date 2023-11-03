import { en as defaultLocale } from './locales';

export enum Locales {
  cz = 'cz',
  en = 'en',
}

export type DefaultLocale = typeof defaultLocale;
