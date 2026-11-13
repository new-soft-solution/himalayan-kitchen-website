import MenuNavigation from "@/components/menu/MenuNavigation";
import MenuOrderCTA from "@/components/menu/MenuOrderCTA";
import { MENU_PATHS } from "@/lib/menu-routes";
import SubPageBanner from "@/components/shared/SubPageBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import StructuredData from "@/components/shared/StructuredData";
import MenuBrowser from "@/components/menu/MenuBrowser";
import AllergenSymbol from "@/components/menu/AllergenSymbol";
import { allergenLabels } from "@/content/allergens";
import { menuCategories } from "@/content/menu";
import { createTranslator, type LocalizedPageProps } from "@/lib/i18n";
import { getPageLocale } from "@/lib/locale-server";
import { getPageMetadata } from "@/lib/seo";
import { getMenuSchema } from "@/lib/schema";

export async function generateMetadata({ params }: LocalizedPageProps) {
  return getPageMetadata("foodMenu", await getPageLocale(params));
}

export default async function FoodMenuPage({ params }: LocalizedPageProps) {
  const locale = await getPageLocale(params);
  const t = createTranslator(locale);
  return (
    <div className="menu-page">
      <SubPageBanner
        title="Food Menu"
        path={MENU_PATHS.food}
        parents={[{ label: "Menu", href: MENU_PATHS.overview }]}
        locale={locale}
      />
      <MenuNavigation active="food" locale={locale} />
      <StructuredData data={getMenuSchema(locale)} />
      <section id="food-menu" className="menu-food-section">
        <div className="section-container">
          <SectionHeader
            subtitle={t("Taste the Himalayas")}
            title={t("Food Menu")}
            centered={false}
          />
          <div className="menu-information compact-menu-info">
            <p>
              {t(
                "Please inform our team about any allergies or intolerances before ordering. Spice levels can be adjusted for many dishes. All prices are in euro.",
              )}
            </p>
            <details className="freshness-note">
              <summary>{t("Kind Information")}</summary>
              <p>
                {t(
                  "All our meals are made from scratch to ensure freshness, which may take a little longer than a typical kitchen. If you are in a hurry to catch a movie, please let us know in advance when placing your order.",
                )}
              </p>
            </details>
          </div>
          <MenuBrowser categories={menuCategories} />
          <div className="menu-information">
            <h3>{t("Allergen information")}</h3>
            <p>
              {t(
                "Allergens shown follow the printed menu. They may vary with your chosen variant. Please ask our team for full information before ordering.",
              )}
            </p>
            <div className="allergen-key">
              {Object.entries(allergenLabels).map(([allergen, label]) => (
                <span key={allergen}>
                  <AllergenSymbol allergen={allergen} locale={locale} />
                  <span>{t(label)}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <SectionHeader
              subtitle={t("A Culinary Journey")}
              title={t("Good to Know about Nepalese Food")}
              centered={false}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
              {[
                [
                  "Rich Diversity",
                  "Reflects Nepal's cultural and geographic diversity, offering a unique blend of flavors.",
                ],
                [
                  "Local Ingredients",
                  "Utilizes fresh, local ingredients, promoting sustainability and authenticity.",
                ],
                [
                  "Complex Spices",
                  "Employs a distinctive mix of spices, providing depth and complexity to dishes.",
                ],
                [
                  "Variety",
                  "Offers a wide range of dishes catering to different tastes, including vegetarian and meat options.",
                ],
                [
                  "Traditional Techniques",
                  "Incorporates age-old cooking techniques, preserving culinary heritage.",
                ],
                [
                  "Cultural Experience",
                  "Eating Nepalese food is a cultural journey, reflecting the nation's history and traditions.",
                ],
              ].map(([title, text]) => (
                <div key={title} className="border-t border-white/15 pt-4">
                  <h3 className="text-primary text-sm mb-2">{t(title)}</h3>
                  <p className="text-white/75 text-xs leading-6">{t(text)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <MenuOrderCTA locale={locale} />
    </div>
  );
}
