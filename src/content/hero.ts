import type { HeroSlide } from "@/types";
import { EXTERNAL_LINKS } from "@/lib/constants";

export const heroSlides: HeroSlide[] = [
  {
    subtitle: "Welcome to The Himalayan Kitchen",
    title: "Authentic Flavors from the Roof of the World",
    description:
      "Experience the rich culinary traditions of Nepal and India in the heart of Amsterdam. Fresh spices, pure ingredients, unforgettable taste.",
    buttonText: "Reserve a Table",
    buttonLink: EXTERNAL_LINKS.findATable,
    image: "/images/food/food-spread.jpg",
  },
  {
    subtitle: "Since 2014 in Amsterdam",
    title: "From the Himalayas to Your Plate",
    description:
      "Over a decade of bringing authentic Nepalese and Indian cuisine to Amsterdam's Kinkerbuurt neighborhood.",
    buttonText: "Explore Our Menu",
    buttonLink: "/menu",
    image: "/images/interior/dining-room-1.webp",
  },
  {
    subtitle: "Taste the Tradition",
    title: "Handcrafted Dishes, Timeless Recipes",
    description:
      "Every dish tells a story of Himalayan heritage — from our famous Momo to signature Gorkha Curry.",
    buttonText: "Book Now",
    buttonLink: EXTERNAL_LINKS.findATable,
    image: "/images/hero/banner_1_chicken_chilly.png",
  },
];
