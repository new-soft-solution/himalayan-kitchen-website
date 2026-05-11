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
  whatsapp: string;
  googleMaps: string;
  googleReviews: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroSlide {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  spiceLevel: 1 | 2 | 3 | 4 | 5;
  isVegan?: boolean;
  isVegetarian?: boolean;
  isPopular?: boolean;
  image?: string;
}

export interface MenuCategory {
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface DrinkItem {
  name: string;
  description?: string;
  price: number;
  image?: string;
  origin?: string;
}

export interface DrinkCategory {
  name: string;
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
