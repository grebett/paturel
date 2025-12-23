import createMiddleware from 'next-intl/middleware';

// On définit la config directement ici pour éviter les soucis d'import
const routing = {
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed'
} as const;

export default createMiddleware(routing);

export const config = {
  // Matcher pour ignorer les fichiers statiques, api, etc.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};