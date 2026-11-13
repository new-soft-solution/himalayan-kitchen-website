import { dutch } from "@/content/translations";
import { MENU_PATHS } from "./menu-routes";

export const locales = ["en", "nl"] as const;
export type Locale = (typeof locales)[number];
export type LocaleProps = { locale?: Locale };
export type LocalizedPageProps = { params: Promise<{ lang: string }> };
export const pagePaths = [
  "",
  "/about",
  MENU_PATHS.overview,
  MENU_PATHS.food,
  MENU_PATHS.drinks,
  "/chef",
  "/gallery",
  "/contact",
  "/faq",
] as const;

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function unlocalizedPath(path: string) {
  return path.replace(/^\/(en|nl)(?=\/|$|\?|#)/, "") || "/";
}

export function localizedPath(path: string, locale: Locale) {
  const plain = unlocalizedPath(path);
  return locale === "nl" ? `/nl${plain === "/" ? "" : plain}` : plain;
}

const reported = new Set<string>();

/** Fall back to English and report missing Dutch copy for correction. */
export function createTranslator(locale: Locale) {
  return (english: string): string => {
    if (locale === "en" || !english) return english;
    const translated = dutch[english];
    if (translated) return translated;
    if (process.env.NODE_ENV !== "production" && !reported.has(english)) {
      reported.add(english);
      console.warn(`[i18n] Missing Dutch translation: ${english}`);
    }
    return english;
  };
}

/** Display two decimals without a currency symbol, as requested by the owner. */
export function formatPrice(price: number) {
  return price.toFixed(2);
}
