export const watcherOptions = {
  // order and from where user language should be detected
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
  // keys or params to lookup language from
  lookupQuerystring: 'locale',
  lookupCookie: 'locale',
  lookupLocalStorage: 'locale',
  lookupSessionStorage: 'locale',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  // cache user language on
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
  // optional expire and domain for set cookie
  cookieMinutes: 10,
  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
};
