import type { Restaurant } from "@/types";

export const restaurant: Restaurant = {
  name: "The Himalayan Kitchen",
  tagline: "Authentic Nepalese & Indian Cuisine in Amsterdam",
  description:
    "Discover Nepalese and Indian flavours at The Himalayan Kitchen, a welcoming 32-seat restaurant in Amsterdam Oud-West. Our menu brings together handmade momo, classic daal bhaat, aromatic curries, tandoor-grilled dishes and vegetarian favourites. Just steps from De Hallen, we offer a relaxed setting for a memorable dinner before or after exploring the neighbourhood.",
  shortDescription:
    "The Himalayan Kitchen brings Nepalese and Indian cuisine to Amsterdam Oud-West, with handmade momo, fragrant curries, tandoori specialities and warm hospitality.",
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
  seatingCapacity: 32,
  foundedYear: 2014,
  priceRange: "€€",
  rating: 4.6,
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
