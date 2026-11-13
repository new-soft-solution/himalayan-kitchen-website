"use client";

import { usePathname } from "next/navigation";
import { localizedPath, locales } from "@/lib/i18n";
import { useLocale, useTranslation } from "./LocaleProvider";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslation();
  const pathname = usePathname();

  return (
    <nav className="language-switcher" aria-label={t("Website language")}>
      {locales.map((language) => (
        <a
          key={language}
          href={localizedPath(pathname, language)}
          lang={language}
          hrefLang={language}
          aria-label={language === "en" ? "Switch to English" : "Overschakelen naar Nederlands"}
          aria-current={language === locale ? "true" : undefined}
          onClick={(event) => {
            document.cookie = `hk-language=${language}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
            event.currentTarget.href = localizedPath(location.pathname, language) + location.search + location.hash;
          }}
        >
          {language.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
