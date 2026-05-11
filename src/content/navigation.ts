import type { NavLink } from "@/types";

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Our Chef", href: "/chef" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Reservation", href: "/reservation" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Reservation", href: "/reservation" },
  { label: "FAQ", href: "/faq" },
];

export const footerMenuLinks: NavLink[] = [
  { label: "Chef's Specials", href: "/menu#chefs-specials" },
  { label: "Nepali Favorites", href: "/menu#nepali-favorites" },
  { label: "Tandoori & Grill", href: "/menu#tandoori-grill" },
  { label: "Vegetarian", href: "/menu#vegetarian" },
  { label: "Drinks & Bar", href: "/menu#drinks" },
];
