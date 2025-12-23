import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {notFound} from 'next/navigation';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default getRequestConfig(async ({requestLocale}) => {
  // On récupère la locale demandée (c'est une Promise maintenant)
  let locale = await requestLocale;

  // Si la locale est indéfinie ou non supportée, on prend celle par défaut
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  try {
    const filePath = path.join(process.cwd(), 'messages', `${locale}.yaml`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    return {
      locale, // <--- C'EST CETTE LIGNE QUI MANQUAIT
      messages: yaml.load(fileContents) as any
    };
  } catch (error) {
    console.error(`Erreur chargement langue ${locale}:`, error);
    notFound();
  }
});