import type { DrinkCategory } from "@/types";

export const drinkCategories: DrinkCategory[] = [
  {
    name: "Nepali & Indian Spirits",
    items: [
      {
        name: "Khukuri Rum",
        description:
          "Nepal's iconic XXX Rum — smooth, rich, and deeply connected to Himalayan heritage. A must-try for adventurous spirits.",
        price: 6.5,
        image: "/images/drinks/khukuri-rum.jpg",
        origin: "Nepal",
      },
    ],
  },
  {
    name: "Beers",
    items: [
      {
        name: "Nepali Beer",
        description: "Refreshing lager from the Himalayas",
        price: 5.5,
        origin: "Nepal",
      },
      {
        name: "Kingfisher",
        description: "India's most popular premium lager",
        price: 5.5,
        origin: "India",
      },
      {
        name: "Heineken",
        description: "A classic Dutch pilsner — local meets global",
        price: 3.5,
        origin: "Netherlands",
      },
    ],
  },
  {
    name: "Wines & Spirits",
    items: [
      {
        name: "House Red Wine",
        description: "A smooth, full-bodied red to complement your curry",
        price: 5.5,
      },
      {
        name: "House White Wine",
        description: "Crisp and refreshing, pairs beautifully with tandoori dishes",
        price: 5.5,
      },
      {
        name: "Joseph Guy V.S.O.P. Cognac",
        description: "Fine French cognac — the perfect digestif after your meal",
        price: 7.5,
        image: "/images/drinks/joseph-guy.jpg",
        origin: "France",
      },
      {
        name: "Bacardi Carta Blanca",
        description: "Premium white rum for classic cocktails",
        price: 6.0,
        image: "/images/drinks/bacardi.jpg",
        origin: "Cuba",
      },
    ],
  },
  {
    name: "Non-Alcoholic",
    items: [
      {
        name: "Masala Chai",
        description:
          "Traditional spiced tea brewed with cardamom, cinnamon, ginger, and cloves",
        price: 3.5,
        origin: "Nepal/India",
      },
      {
        name: "Mango Lassi",
        description: "A creamy, sweet yogurt drink blended with ripe mango pulp",
        price: 4.5,
        origin: "India",
      },
      {
        name: "Fresh Lime Soda",
        description: "Freshly squeezed lime with soda water — sweet or salted",
        price: 3.5,
      },
    ],
  },
];
