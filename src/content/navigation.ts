import type { NavLink } from "@/types";

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", href: "/menu" },
  { label: "Our Chef", href: "/chef" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export const footerMenuLinks: NavLink[] = [
  { label: "Chef's Specials", href: "/menu#chefs-specials" },
  { label: "All-Time Favorites", href: "/menu#all-time-favorites" },
  { label: "Tandoori & Grill", href: "/menu#tandoori-grill" },
  { label: "Vegetarian", href: "/menu#vegetarian" },
  { label: "Drinks & Bar", href: "/menu#drinks" },
];
