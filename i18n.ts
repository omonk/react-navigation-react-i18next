import i18n from 'i18next';
import Backend from 'i18next-chained-backend';
// import XHR from 'i18next-http-backend';
import XHR from 'i18next-fetch-backend';
import {initReactI18next} from 'react-i18next';
import LocaStorageBackend from '@conpago/i18next-async-storage-backend';

/**
 * i18next is super cool, you should read their docs:
 *
 * https://www.i18next.com/
 *
 * This file deals with the configuration of i18next, there are some great docs:
 * https://www.i18next.com/overview/configuration-options
 */
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      backends: [LocaStorageBackend, XHR],
      backendOptions: [
        // cache
        {
          version: 1,
          expirationTime: 24 * 60 * 60 * 1000, // 1 day
        },
        {
          loadPath:
            'https://i18next.github.io/i18next/public/sample_locales/dev/ns.common.json',
        },
      ],
    },
    ns: ['common'],
    defaultNS: 'common',
    fallbackLng: {
      'es-us': ['en-us', 'en'],
      default: ['en'],
    },
    compatibilityJSON: 'v3',
    lowerCaseLng: true,

    interpolation: {
      escapeValue: false,
    },
    debug: true,
    react: {useSuspense: false},
  });

export default i18n;
