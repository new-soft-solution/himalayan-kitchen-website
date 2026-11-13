export const MENU_PATHS = {
  overview: "/menu",
  food: "/menu/food",
  drinks: "/menu/drinks",
} as const;

export const foodCategoryAliases: Record<string, string> = {
  "chefs-specials": "chefs-signature-curries",
  "chefs-specialties": "chefs-signature-curries",
  "chefs-signatures-rice": "chefs-signature-curries",
  "all-time-favorites": "curry-classics",
  "tandoori-grill": "tandoori",
  vegetarian: "vegetarian-vegan-mains",
  "vegetarian-mains": "vegetarian-vegan-mains",
  "himalayan-specialties": "nepalese-specialities",
  "appetisers-veg": "starters",
  "appetisers-non-veg": "starters",
  soups: "soups-salads",
  "naan-bread": "tandoori-breads",
  "sides-desserts": "sides-accompaniments",
};

export const drinkCategoryAliases: Record<string, string> = {
  "drinks-sweet-white": "house-wines",
  "drinks-sparkling": "house-wines",
};

/** Old fragments are restricted to menu slugs and always resolve to a local page. */
export function getLegacyMenuPath(hash: string): string | null {
  const category = hash.replace(/^#/, "");
  if (!/^[a-z][a-z0-9-]*$/.test(category)) return null;
  if (category === "drinks" || category === "drinks-menu")
    return MENU_PATHS.drinks;
  if (category.startsWith("drinks-")) {
    const canonical = Object.hasOwn(drinkCategoryAliases, category)
      ? `drinks-${drinkCategoryAliases[category]}`
      : category;
    return `${MENU_PATHS.drinks}#${canonical}`;
  }
  if (category === "food-menu" || category === "all") return MENU_PATHS.food;
  const canonical = Object.hasOwn(foodCategoryAliases, category)
    ? foodCategoryAliases[category]
    : category;
  return `${MENU_PATHS.food}#${canonical}`;
}
