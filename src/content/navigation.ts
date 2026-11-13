import type { NavItem, NavLink } from "@/types";
import { MENU_PATHS } from "@/lib/menu-routes";

export const menuPageLinks: NavLink[] = [
  { label: "Food Menu", href: MENU_PATHS.food },
  { label: "Drinks Menu", href: MENU_PATHS.drinks },
];

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menu", basePath: MENU_PATHS.overview, children: menuPageLinks },
  {
    label: "Explore",
    children: [
      { label: "Our Chef", href: "/chef" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

// A flat view of the same links for translation and page-coverage checks.
export const mainNavLinks: NavLink[] = mainNavigation.flatMap((item) =>
  "children" in item ? item.children : [item],
);

// Footer links are intentional; header groups are not copied into the footer.
export const footerQuickLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Menu", href: MENU_PATHS.overview },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];
