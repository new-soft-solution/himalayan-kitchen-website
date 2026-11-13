"use client";

import { useCategoryFilter } from "@/lib/use-category-filter";
import CategoryNavigation from "./CategoryNavigation";
import type { MenuCategory } from "@/types";
import { foodCategoryAliases } from "@/lib/menu-routes";
import MenuCategorySection from "./MenuCategorySection";
import { useLocale, useTranslation } from "@/components/layout/LocaleProvider";

export default function MenuBrowser({
  categories,
}: {
  categories: MenuCategory[];
}) {
  const locale = useLocale();
  const t = useTranslation();
  const { selected, selectCategory } = useCategoryFilter(
    categories.map((category) => category.id || ""),
    "",
    foodCategoryAliases,
  );
  const visibleCategories =
    selected === "all"
      ? categories
      : categories.filter((category) => category.id === selected);
  const count = visibleCategories.reduce(
    (total, category) => total + category.items.length,
    0,
  );

  if (!categories.length)
    return (
      <div className="menu-information">
        <h3>{t("Menu unavailable")}</h3>
        <p>{t("Please contact us for the current menu.")}</p>
      </div>
    );
  return (
    <div className="menu-browser">
      <CategoryNavigation
        id="food-menu"
        label={t("Menu Categories")}
        allLabel={t("All Items")}
        total={categories.reduce(
          (sum, category) => sum + category.items.length,
          0,
        )}
        selected={selected}
        onSelect={selectCategory}
        categories={categories.map((category) => ({
          id: category.id || "",
          label:
            locale === "nl" ? category.nameNl || category.name : category.name,
        }))}
      />
      <p role="status" className="menu-result-count">
        {count} {t("dishes")}
      </p>
      <div id="food-menu-results" className="menu-results">
        {visibleCategories.map((category) => (
          <MenuCategorySection
            key={category.id}
            category={category}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
