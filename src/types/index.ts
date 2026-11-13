// ============================================
// Type definitions for Himalayan Kitchen website
// ============================================

export interface Address {
  street: string;
  postalCode: string;
  city: string;
  area: string;
  country: string;
}

export interface OpeningHours {
  day: string;
  hours: string;
  isClosed?: boolean;
}

export interface Restaurant {
  name: string;
  tagline: string;
  description: string;
  shortDescription: string;
  address: Address;
  phone: string;
  email: string;
  website: string;
  openingHours: OpeningHours[];
  seatingCapacity: number;
  foundedYear: number;
  owner: string;
  priceRange: string;
  rating: number;
  ratingCount: number;
  cuisineTypes: string[];
  amenities: string[];
}

export interface ExternalLinks {
  findATable: string;
  orderPickup: string;
  whatsapp: string;
  googleMaps: string;
  googleReviews: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  basePath?: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export interface HeroSlide {
  kind: "video" | "image";
  subtitle: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  featuredDish?: string;
  promotion?: string;
  locationHighlight?: string;
}

export interface MenuItemVariant {
  label: string;
  labelNl?: string;
  price: number;
}

export interface MenuItem {
  id?: string;
  name: string;
  nameNl?: string;
  description: string;
  descriptionNl?: string;
  price: number;
  variants?: MenuItemVariant[];
  spiceLevel?: 1 | 2 | 3 | 4 | 5;
  allergens?: string[];
  isVegan?: boolean;
  isVegetarian?: boolean;
  isPopular?: boolean;
  image?: string;
}

export interface MenuCategory {
  id?: string;
  name: string;
  nameNl?: string;
  description?: string;
  descriptionNl?: string;
  note?: string;
  noteNl?: string;
  items: MenuItem[];
}

export interface DrinkItem {
  id?: string;
  name: string;
  nameNl?: string;
  description?: string;
  descriptionNl?: string;
  price: number;
  variants?: MenuItemVariant[];
  serving?: string;
  image?: string;
  origin?: string;
}

export interface DrinkCategory {
  id?: string;
  name: string;
  nameNl?: string;
  items: DrinkItem[];
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date?: string;
  source?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChefProfile {
  name: string;
  title: string;
  description: string;
  longDescription: string;
  experience: string;
  philosophy: string;
  image?: string;
}
