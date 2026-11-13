import { restaurant } from "@/content/restaurant";
import { menuCategories } from "@/content/menu";
import { drinkCategories } from "@/content/drinks";
import { foodPhotos } from "@/content/photography";
import type { DrinkCategory, NavLink } from "@/types";
import { MENU_PATHS } from "./menu-routes";
import { EXTERNAL_LINKS, SITE_CONFIG } from "./constants";
import { createTranslator, localizedPath, type Locale } from "./i18n";

export function getRestaurantSchema(locale: Locale = "en") {
  const t = createTranslator(locale);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Restaurant", "LocalBusiness", "FoodEstablishment"],
        "@id": `${SITE_CONFIG.url}/#restaurant`,
        name: restaurant.name,
        description: t(restaurant.description),
        url: SITE_CONFIG.url + localizedPath("/", locale),
        telephone: restaurant.phone,
        email: restaurant.email,
        priceRange: restaurant.priceRange,
        servesCuisine: restaurant.cuisineTypes,
        image: [
          SITE_CONFIG.url + foodPhotos.currySpread.src,
          SITE_CONFIG.url + "/images/interior/exterior.webp",
          SITE_CONFIG.url + "/images/interior/dining-room-1.webp",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: restaurant.address.street,
          addressLocality: restaurant.address.city,
          postalCode: restaurant.address.postalCode,
          addressCountry: "NL",
        },
        hasMap: EXTERNAL_LINKS.googleMapsLink,
        openingHoursSpecification: restaurant.openingHours
          .filter((h) => !h.isClosed)
          .map((h) => {
            const [opens, closes] = h.hours.split(" - ");
            return {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: `https://schema.org/${h.day}`,
              opens,
              closes,
            };
          }),
        acceptsReservations: EXTERNAL_LINKS.findATable,
        potentialAction: {
          "@type": "OrderAction",
          target: EXTERNAL_LINKS.orderPickup,
        },
        hasMenu: [
          {
            "@type": "Menu",
            "@id": `${SITE_CONFIG.url}${localizedPath(MENU_PATHS.food, locale)}#food-menu`,
            url: SITE_CONFIG.url + localizedPath(MENU_PATHS.food, locale),
          },
          {
            "@type": "Menu",
            "@id": `${SITE_CONFIG.url}${localizedPath(MENU_PATHS.drinks, locale)}#drinks`,
            url: SITE_CONFIG.url + localizedPath(MENU_PATHS.drinks, locale),
          },
        ],
        parentOrganization: { "@id": `${SITE_CONFIG.url}/#organization` },
        sameAs: [EXTERNAL_LINKS.findATable, EXTERNAL_LINKS.googleReviews],
      },
      {
        "@type": "Organization",
        "@id": `${SITE_CONFIG.url}/#organization`,
        name: restaurant.name,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/images/logo.png`,
        telephone: restaurant.phone,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.url}/#website`,
        name: restaurant.name,
        url: SITE_CONFIG.url,
        inLanguage: ["en", "nl"],
        publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
      },
    ],
  };
}

export function getMenuSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE_CONFIG.url}${localizedPath(MENU_PATHS.food, locale)}#food-menu`,
    name: locale === "nl" ? "Gerechtenkaart" : "Food Menu",
    inLanguage: locale,
    url: SITE_CONFIG.url + localizedPath(MENU_PATHS.food, locale),
    hasMenuSection: menuCategories.map((category) => ({
      "@type": "MenuSection",
      name: locale === "nl" ? category.nameNl || category.name : category.name,
      hasMenuItem: category.items.map((item) => ({
        "@type": "MenuItem",
        identifier: item.id,
        name: item.name,
        description:
          locale === "nl"
            ? item.descriptionNl || item.description
            : item.description,
        ...(item.image ? { image: SITE_CONFIG.url + item.image } : {}),
        offers: item.variants?.length
          ? item.variants.map((variant) => ({
              "@type": "Offer",
              name:
                locale === "nl"
                  ? variant.labelNl || variant.label
                  : variant.label,
              price: variant.price.toFixed(2),
              priceCurrency: "EUR",
            }))
          : {
              "@type": "Offer",
              price: item.price.toFixed(2),
              priceCurrency: "EUR",
            },
      })),
    })),
  };
}

export function getDrinksMenuSchema(
  locale: Locale,
  categories: DrinkCategory[] = drinkCategories,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${SITE_CONFIG.url}${localizedPath(MENU_PATHS.drinks, locale)}#drinks`,
    name: locale === "nl" ? "Drankenkaart" : "Drinks Menu",
    inLanguage: locale,
    url: SITE_CONFIG.url + localizedPath(MENU_PATHS.drinks, locale),
    hasMenuSection: categories.map((category) => ({
      "@type": "MenuSection",
      name: locale === "nl" ? category.nameNl || category.name : category.name,
      hasMenuItem: category.items.map((drink) => ({
        "@type": "MenuItem",
        identifier: drink.id,
        name: locale === "nl" ? drink.nameNl || drink.name : drink.name,
        ...(drink.description
          ? {
              description:
                locale === "nl"
                  ? drink.descriptionNl || drink.description
                  : drink.description,
            }
          : {}),
        offers: drink.variants?.length
          ? drink.variants.map((variant) => ({
              "@type": "Offer",
              name:
                locale === "nl"
                  ? variant.labelNl || variant.label
                  : variant.label,
              price: variant.price.toFixed(2),
              priceCurrency: "EUR",
            }))
          : {
              "@type": "Offer",
              ...(drink.serving
                ? { name: createTranslator(locale)(drink.serving) }
                : {}),
              price: drink.price.toFixed(2),
              priceCurrency: "EUR",
            },
      })),
    })),
  };
}

export function getBreadcrumbSchema(
  name: string,
  path: string,
  locale: Locale,
  parents: NavLink[] = [],
) {
  const t = createTranslator(locale);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { label: "Home", href: "/" },
      ...parents,
      { label: name, href: path },
    ].map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.href === path ? name : t(entry.label),
      item: SITE_CONFIG.url + localizedPath(entry.href, locale),
    })),
  };
}
