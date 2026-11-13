"use client";

import type { DrinkCategory } from "@/types";
import { drinkCategoryAliases } from "@/lib/menu-routes";
import { useCategoryFilter } from "@/lib/use-category-filter";
import { useLocale, useTranslation } from "@/components/layout/LocaleProvider";
import CategoryNavigation from "./CategoryNavigation";
import DrinkCategorySection from "./DrinkCategorySection";

export default function DrinksBrowser({
  categories,
}: {
  categories: DrinkCategory[];
}) {
  const locale = useLocale();
  const t = useTranslation();
  const { selected, selectCategory } = useCategoryFilter(
    categories.map((category) => category.id || ""),
    "drinks-",
    drinkCategoryAliases,
    "drinks",
  );
  const visible =
    selected === "all"
      ? categories
      : categories.filter((category) => category.id === selected);
  const total = categories.reduce(
    (sum, category) => sum + category.items.length,
    0,
  );
  const count = visible.reduce(
    (sum, category) => sum + category.items.length,
    0,
  );
  return (
    <div className="drinks-browser">
      <CategoryNavigation
        id="drinks-menu"
        label={t("Drink Categories")}
        allLabel={t("All Drinks")}
        total={total}
        selected={selected}
        onSelect={selectCategory}
        categories={categories.map((category) => ({
          id: category.id || "",
          label:
            locale === "nl" ? category.nameNl || category.name : category.name,
        }))}
      />
      <p role="status" className="menu-result-count">
        {count} {t("drinks")}
      </p>
      <div id="drinks-menu-results" className="menu-results">
        {visible.map((category) => (
          <DrinkCategorySection
            key={category.id}
            category={category}
            locale={locale}
          />
        ))}
      </div>
    </div>
  );
}
