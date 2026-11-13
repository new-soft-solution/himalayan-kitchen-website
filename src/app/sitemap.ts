import type { MetadataRoute } from "next";
import { locales, localizedPath, pagePaths } from "@/lib/i18n";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) => pagePaths.map((path) => ({
    url: SITE_CONFIG.url + localizedPath(path || "/", locale),
    alternates: { languages: { en: SITE_CONFIG.url + localizedPath(path || "/", "en"), nl: SITE_CONFIG.url + localizedPath(path || "/", "nl") } },
  })));
}
