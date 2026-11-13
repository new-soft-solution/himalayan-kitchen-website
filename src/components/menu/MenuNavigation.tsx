import Link from "next/link";
import { menuPageLinks } from "@/content/navigation";
import { MENU_PATHS } from "@/lib/menu-routes";
import { createTranslator, localizedPath, type LocaleProps } from "@/lib/i18n";

interface MenuNavigationProps extends LocaleProps {
  active: "food" | "drinks";
}

export default function MenuNavigation({
  active,
  locale = "en",
}: MenuNavigationProps) {
  const t = createTranslator(locale);
  return (
    <nav className="section-container py-6" aria-label={t("Choose a menu")}>
      <div className="button-row">
        {menuPageLinks.map((link) => (
          <Link
            key={link.href}
            href={localizedPath(link.href, locale)}
            className={`button button-sm${link.href === MENU_PATHS[active] ? "" : " button-outline"}`}
            aria-current={link.href === MENU_PATHS[active] ? "page" : undefined}
          >
            {t(link.label)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
