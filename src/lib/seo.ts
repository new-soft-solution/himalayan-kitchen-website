import type { Metadata } from "next";
import { localizedPath, type Locale } from "./i18n";
import { SITE_CONFIG } from "./constants";
import { foodPhotos } from "@/content/photography";
import { restaurant } from "@/content/restaurant";
import { MENU_PATHS } from "./menu-routes";

const { address, phone } = restaurant;

const pages = {
  home: {
    path: "/",
    en: [
      "The Himalayan Kitchen | Nepalese & Indian Restaurant Amsterdam",
      `Discover Nepalese momo and Indian curries in Amsterdam Oud-West's Kinkerbuurt. Visit The Himalayan Kitchen at ${address.street}, near Foodhallen and Filmhallen.`,
    ],
    nl: [
      "The Himalayan Kitchen | Nepalees & Indiaas restaurant Amsterdam",
      `Ontdek Nepalese momo en Indiase curry's bij The Himalayan Kitchen in de Kinkerbuurt, Amsterdam Oud-West. ${address.street}, vlak bij Foodhallen en Filmhallen.`,
    ],
  },
  about: {
    path: "/about",
    en: [
      "Our Story | The Himalayan Kitchen Amsterdam",
      "Meet the people and traditions behind The Himalayan Kitchen. Nepalese and Indian hospitality in Amsterdam's Kinkerbuurt since 2014.",
    ],
    nl: [
      "Ons verhaal | The Himalayan Kitchen Amsterdam",
      "Ontdek de mensen en tradities achter The Himalayan Kitchen. Nepalese en Indiase gastvrijheid in de Amsterdamse Kinkerbuurt sinds 2014.",
    ],
  },
  menu: {
    path: MENU_PATHS.overview,
    en: [
      "Food & Drinks Menus | Himalayan Kitchen Amsterdam",
      "Choose our food menu or drinks menu in Amsterdam Oud-West. Discover Nepalese and Indian dishes, Himalayan cocktails, wines and alcohol-free drinks.",
    ],
    nl: [
      "Eet- en drankenkaart | Himalayan Kitchen Amsterdam",
      "Kies onze gerechtenkaart of drankenkaart in Amsterdam Oud-West. Ontdek Nepalese en Indiase gerechten, Himalayaanse cocktails, wijn en alcoholvrije drankjes.",
    ],
  },
  foodMenu: {
    path: MENU_PATHS.food,
    en: [
      "Nepalese & Indian Food Menu | Himalayan Kitchen Amsterdam",
      "Explore Nepalese and Indian dishes in Amsterdam Oud-West: momo, curries, tandoori and vegetarian favourites, with prices, choices and allergen information.",
    ],
    nl: [
      "Nepalese & Indiase gerechten | Himalayan Kitchen Amsterdam",
      "Ontdek Nepalese en Indiase gerechten in Amsterdam Oud-West: momo, curry's, tandoori en vegetarische favorieten, met prijzen, keuzes en allergenen.",
    ],
  },
  drinksMenu: {
    path: MENU_PATHS.drinks,
    en: [
      "Drinks Menu & Himalayan Cocktails | Himalayan Kitchen Amsterdam",
      "Discover Himalayan cocktails, mocktails, lassi, beers, wines and Nepalese teas at The Himalayan Kitchen in Amsterdam Oud-West. View all drinks and serving prices.",
    ],
    nl: [
      "Drankenkaart & Himalayaanse cocktails | Himalayan Kitchen Amsterdam",
      "Ontdek Himalayaanse cocktails, mocktails, lassi, bier, wijn en Nepalese thee bij The Himalayan Kitchen in Amsterdam Oud-West. Bekijk alle drankjes en prijzen.",
    ],
  },
  chef: {
    path: "/chef",
    en: [
      "Meet Chef Ram Lama | The Himalayan Kitchen Amsterdam",
      "Meet Ram Lama, the head chef of The Himalayan Kitchen, and discover his passion for fresh ingredients and traditional Nepalese and Indian cooking.",
    ],
    nl: [
      "Chef Ram Lama | The Himalayan Kitchen Amsterdam",
      "Maak kennis met Ram Lama, chef-kok van The Himalayan Kitchen. Ontdek zijn passie voor verse ingrediënten en de traditionele Nepalese en Indiase keuken.",
    ],
  },
  gallery: {
    path: "/gallery",
    en: [
      "Restaurant & Food Gallery | The Himalayan Kitchen Amsterdam",
      "Take a look inside The Himalayan Kitchen in Amsterdam Oud-West. Browse our Nepalese and Indian dishes, intimate dining room and bar.",
    ],
    nl: [
      "Restaurant & gerechten in beeld | The Himalayan Kitchen Amsterdam",
      "Neem een kijkje bij The Himalayan Kitchen in Amsterdam Oud-West. Bekijk onze Nepalese en Indiase gerechten, intieme eetzaal en bar.",
    ],
  },
  contact: {
    path: "/contact",
    en: [
      "Contact & Directions | Himalayan Kitchen Amsterdam Oud-West",
      `Find our Nepalese and Indian restaurant near Foodhallen and Filmhallen. ${address.street}, ${address.postalCode} ${address.city}. Directions, reservations and opening hours; call ${phone}.`,
    ],
    nl: [
      "Contact & route | Himalayan Kitchen Amsterdam Oud-West",
      `Vind ons Nepalese en Indiase restaurant bij Foodhallen en Filmhallen. ${address.street}, ${address.postalCode} ${address.city}. Route, reserveren en openingstijden; bel ${phone}.`,
    ],
  },
  faq: {
    path: "/faq",
    en: [
      "Frequently Asked Questions | The Himalayan Kitchen Amsterdam",
      "Answers about reservations, opening hours, vegetarian and vegan options, spice levels, takeaway, delivery and group dining at The Himalayan Kitchen.",
    ],
    nl: [
      "Veelgestelde vragen | The Himalayan Kitchen Amsterdam",
      "Antwoorden over reserveren, openingstijden, vegetarisch en vegan eten, pittigheid, afhalen, bezorgen en groepsdiners bij The Himalayan Kitchen.",
    ],
  },
} as const;

export function getPageMetadata(
  page: keyof typeof pages,
  locale: Locale,
): Metadata {
  const content = pages[page];
  const [title, description] = content[locale];
  const url = SITE_CONFIG.url + localizedPath(content.path, locale);
  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        en: SITE_CONFIG.url + localizedPath(content.path, "en"),
        nl: SITE_CONFIG.url + localizedPath(content.path, "nl"),
        "x-default": SITE_CONFIG.url + localizedPath(content.path, "en"),
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      locale: locale === "nl" ? "nl_NL" : "en_GB",
      alternateLocale: locale === "nl" ? "en_GB" : "nl_NL",
      siteName: SITE_CONFIG.siteName,
      images: [
        {
          url: foodPhotos.currySpread.src,
          alt:
            locale === "nl"
              ? "Nepalese en Indiase gerechten bij The Himalayan Kitchen Amsterdam"
              : "Nepalese and Indian dishes at The Himalayan Kitchen Amsterdam",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [foodPhotos.currySpread.src],
    },
  };
}
