import { ui, defaultLang, urlMappings } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPath(path: string, lang: Lang): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // If empty path (homepage), just return language prefix
  if (!cleanPath) {
    return lang === defaultLang ? '/' : `/${lang}/`;
  }

  // Check if we have a URL mapping for this path
  const pathKey = cleanPath as keyof typeof urlMappings;
  if (pathKey in urlMappings) {
    const translatedPath = urlMappings[pathKey][lang];
    return lang === defaultLang ? `/${translatedPath}` : `/${lang}/${translatedPath}`;
  }

  // Fallback: return path as-is with language prefix
  return lang === defaultLang ? `/${cleanPath}` : `/${lang}/${cleanPath}`;
}

export function getAlternateLinks(currentPath: string, currentLang: Lang) {
  const languages = Object.keys(ui) as Lang[];

  // Remove language prefix from current path
  let basePath = currentPath;
  for (const lang of languages) {
    if (currentPath.startsWith(`/${lang}/`)) {
      basePath = currentPath.slice(lang.length + 1);
      break;
    }
  }

  return languages.map(lang => ({
    lang,
    href: getLocalizedPath(basePath, lang)
  }));
}
