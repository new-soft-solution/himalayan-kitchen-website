import type { Restaurant } from "@/types";

export const restaurant: Restaurant = {
  name: "The Himalayan Kitchen",
  tagline: "Authentic Nepalese & Indian Cuisine in Amsterdam",
  description:
    "The Himalayan Kitchen is an authentic Nepalese and Indian restaurant in the heart of Amsterdam's Kinkerbuurt neighborhood. Since 2014, we have been serving flavorful dishes made with pure ingredients, bringing the rich culinary traditions of Nepal and India to the vibrant streets of Amsterdam. Our recipes are rooted in generations of Himalayan cooking heritage, prepared with fresh spices and the finest ingredients.",
  shortDescription:
    "An authentic Nepalese and Indian restaurant that serves up flavorful dishes made with pure ingredients.",
  address: {
    street: "Ten Katestraat 45H",
    postalCode: "1053 BX",
    city: "Amsterdam",
    area: "Kinkerbuurt, West",
    country: "Netherlands",
  },
  phone: "+31 20 262 3880",
  email: "info@himalayankitchen.nl",
  website: "https://himalayankitchen.nl",
  openingHours: [
    { day: "Monday", hours: "Closed", isClosed: true },
    { day: "Tuesday", hours: "16:30 - 22:00" },
    { day: "Wednesday", hours: "16:30 - 22:00" },
    { day: "Thursday", hours: "16:30 - 22:00" },
    { day: "Friday", hours: "16:30 - 22:00" },
    { day: "Saturday", hours: "16:00 - 22:00" },
    { day: "Sunday", hours: "16:00 - 22:00" },
  ],
  seatingCapacity: 31,
  foundedYear: 2014,
  owner: "Surya Raj Giri",
  priceRange: "€€",
  rating: 4.5,
  ratingCount: 1,
  cuisineTypes: ["Nepalese", "Indian"],
  amenities: [
    "Dine-In",
    "Takeaway",
    "Delivery",
    "Alcohol",
    "Family-Friendly",
    "Vegan Options",
    "Free Wi-Fi",
    "Cocktail Bar",
  ],
};
