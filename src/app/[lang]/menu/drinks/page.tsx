import SubPageBanner from "@/components/shared/SubPageBanner";
import DrinkSection from "@/components/menu/DrinkSection";
import MenuNavigation from "@/components/menu/MenuNavigation";
import MenuOrderCTA from "@/components/menu/MenuOrderCTA";
import { drinkCategories } from "@/content/drinks";
import { MENU_PATHS } from "@/lib/menu-routes";
import type { LocalizedPageProps } from "@/lib/i18n";
import { getPageLocale } from "@/lib/locale-server";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LocalizedPageProps) {
  return getPageMetadata("drinksMenu", await getPageLocale(params));
}

export default async function DrinksMenuPage({ params }: LocalizedPageProps) {
  const locale = await getPageLocale(params);
  return (
    <div className="menu-page">
      <SubPageBanner
        title="Drinks Menu"
        path={MENU_PATHS.drinks}
        parents={[{ label: "Menu", href: MENU_PATHS.overview }]}
        locale={locale}
      />
      <MenuNavigation active="drinks" locale={locale} />
      <DrinkSection categories={drinkCategories} locale={locale} />
      <MenuOrderCTA locale={locale} />
    </div>
  );
}
