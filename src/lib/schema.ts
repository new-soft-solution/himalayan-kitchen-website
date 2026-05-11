import { restaurant } from "@/content/restaurant";
import { EXTERNAL_LINKS, SITE_CONFIG } from "@/lib/constants";

export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: restaurant.name,
    description: restaurant.description,
    url: SITE_CONFIG.url,
    telephone: restaurant.phone,
    email: restaurant.email,
    priceRange: restaurant.priceRange,
    servesCuisine: restaurant.cuisineTypes,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.city,
      postalCode: restaurant.address.postalCode,
      addressCountry: "NL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.3636,
      longitude: 4.8624,
    },
    image: `${SITE_CONFIG.url}/images/food/food-spread.jpg`,
    openingHoursSpecification: restaurant.openingHours
      .filter((h) => !h.isClosed)
      .map((h) => {
        const dayMap: Record<string, string> = {
          Monday: "Mo",
          Tuesday: "Tu",
          Wednesday: "We",
          Thursday: "Th",
          Friday: "Fr",
          Saturday: "Sa",
          Sunday: "Su",
        };
        const [open, close] = h.hours.split(" - ");
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: dayMap[h.day],
          opens: open?.trim(),
          closes: close?.trim(),
        };
      }),
    acceptsReservations: "True",
    menu: `${SITE_CONFIG.url}/menu`,
    hasMenu: {
      "@type": "Menu",
      url: `${SITE_CONFIG.url}/menu`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: restaurant.rating,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [
      EXTERNAL_LINKS.findATable,
      EXTERNAL_LINKS.googleReviews,
    ],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: restaurant.name,
    description: restaurant.shortDescription,
    url: SITE_CONFIG.url,
    telephone: restaurant.phone,
    email: restaurant.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: restaurant.address.street,
      addressLocality: restaurant.address.city,
      postalCode: restaurant.address.postalCode,
      addressCountry: "NL",
    },
    image: `${SITE_CONFIG.url}/images/food/food-spread.jpg`,
    priceRange: restaurant.priceRange,
    foundingDate: `${restaurant.foundedYear}`,
    founder: {
      "@type": "Person",
      name: restaurant.owner,
    },
  };
}
