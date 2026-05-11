import type { MenuCategory } from "@/types";

export const menuCategories: MenuCategory[] = [
  {
    name: "Appetizers",
    description: "Start your Himalayan journey with our traditional starters",
    items: [
      {
        name: "Vegetable Samosa",
        description:
          "Crispy pastry filled with spiced potatoes and peas, served with mint chutney",
        price: 7.75,
        spiceLevel: 2,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Chicken Pakora",
        description:
          "Tender chicken pieces marinated in spices, coated in gram flour and deep-fried",
        price: 8.5,
        spiceLevel: 2,
      },
      {
        name: "Prawn Pakora",
        description:
          "Succulent prawns in a light, crispy spiced batter",
        price: 9.95,
        spiceLevel: 2,
      },
      {
        name: "Himalayan Sheekh Kabab",
        description:
          "Minced lamb mixed with herbs and spices, grilled on skewers in the tandoor",
        price: 9.95,
        spiceLevel: 3,
        isPopular: true,
      },
      {
        name: "Momo",
        description:
          "Traditional Nepalese steamed dumplings filled with seasoned chicken, served with tomato achar",
        price: 9.95,
        spiceLevel: 2,
        isPopular: true,
        image: "/images/food/momo.jpg",
      },
    ],
  },
  {
    name: "Chef's Specials",
    description:
      "Signature dishes crafted by our chef with authentic Himalayan flavors",
    items: [
      {
        name: "Gorkha Curry - Chicken",
        description:
          "A bold and aromatic curry inspired by the legendary Gorkha warriors, simmered with traditional Nepali spices",
        price: 21.95,
        spiceLevel: 4,
        isPopular: true,
      },
      {
        name: "Gorkha Curry - Lamb",
        description:
          "Tender lamb in our signature Gorkha curry sauce with authentic Nepali spice blend",
        price: 23.95,
        spiceLevel: 4,
      },
      {
        name: "Gorkha Curry - Prawn",
        description:
          "Fresh prawns in the bold Gorkha curry, a perfect fusion of heat and flavor",
        price: 23.95,
        spiceLevel: 4,
      },
      {
        name: "Butter Chicken",
        description:
          "Tender chicken tikka in a rich, creamy tomato-based sauce with butter and aromatic spices",
        price: 23.95,
        spiceLevel: 2,
        isPopular: true,
      },
      {
        name: "Nepali Biryani - Chicken",
        description:
          "Fragrant basmati rice layered with spiced chicken, saffron, and caramelized onions",
        price: 20.95,
        spiceLevel: 3,
        isPopular: true,
      },
      {
        name: "Nepali Biryani - Lamb",
        description:
          "Aromatic basmati rice with tender lamb, infused with Nepali spices and saffron",
        price: 23.95,
        spiceLevel: 3,
      },
    ],
  },
  {
    name: "All-Time Favorites",
    description: "Classic dishes loved by our guests for over a decade",
    items: [
      {
        name: "Tikka Masala - Chicken",
        description:
          "Grilled chicken tikka in a creamy, spiced tomato and onion sauce",
        price: 20.95,
        spiceLevel: 2,
        isPopular: true,
      },
      {
        name: "Tikka Masala - Lamb",
        description:
          "Tender lamb pieces in our signature tikka masala sauce",
        price: 23.95,
        spiceLevel: 2,
      },
      {
        name: "Chicken Vindaloo",
        description:
          "A fiery Goan-inspired curry with tangy vinegar notes and bold chili heat",
        price: 20.95,
        spiceLevel: 5,
      },
      {
        name: "Lamb Vindaloo",
        description:
          "Tender lamb in a hot and tangy vindaloo sauce for the spice-lovers",
        price: 23.95,
        spiceLevel: 5,
      },
      {
        name: "Chicken Korma",
        description:
          "Mild and creamy curry with almonds, coconut cream, and delicate spices",
        price: 22.95,
        spiceLevel: 1,
      },
      {
        name: "Lamb Korma",
        description:
          "Succulent lamb in a luxurious korma sauce with cashews and cream",
        price: 24.95,
        spiceLevel: 1,
      },
    ],
  },
  {
    name: "Tandoori & Grill",
    description: "Marinated and grilled to perfection in our traditional clay oven",
    items: [
      {
        name: "Tandoori Chicken",
        description:
          "Half chicken marinated in yogurt and spices, roasted in the tandoor",
        price: 18.95,
        spiceLevel: 3,
        image: "/images/food/tandoori.jpg",
      },
      {
        name: "Chicken Tikka",
        description:
          "Boneless chicken cubes marinated in spiced yogurt, grilled in the tandoor",
        price: 17.95,
        spiceLevel: 2,
      },
      {
        name: "Lamb Tikka",
        description:
          "Tender lamb pieces with aromatic tandoori marinade, chargrilled to perfection",
        price: 19.95,
        spiceLevel: 3,
      },
      {
        name: "Mixed Grill",
        description:
          "A grand platter of tandoori chicken, lamb tikka, chicken tikka, and seekh kebab",
        price: 24.95,
        spiceLevel: 3,
        isPopular: true,
      },
    ],
  },
  {
    name: "Vegetarian",
    description: "Fresh vegetarian dishes with authentic Himalayan spices",
    items: [
      {
        name: "Paneer Tikka Masala",
        description:
          "Cottage cheese cubes in a creamy spiced tomato sauce",
        price: 18.95,
        spiceLevel: 2,
        isVegetarian: true,
      },
      {
        name: "Dal Tarka",
        description:
          "Yellow lentils tempered with cumin, garlic, and fresh coriander",
        price: 15.95,
        spiceLevel: 2,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Aloo Gobi",
        description:
          "Cauliflower and potatoes stir-fried with turmeric and cumin",
        price: 16.95,
        spiceLevel: 2,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Palak Paneer",
        description:
          "Fresh spinach purée with soft cottage cheese cubes and mild spices",
        price: 18.95,
        spiceLevel: 1,
        isVegetarian: true,
      },
    ],
  },
  {
    name: "Rice & Bread",
    description: "Traditional accompaniments to complete your meal",
    items: [
      {
        name: "Steamed Basmati Rice",
        description: "Fluffy long-grain basmati rice",
        price: 3.95,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Pilau Rice",
        description: "Basmati rice cooked with saffron and whole spices",
        price: 4.95,
        spiceLevel: 1,
        isVegetarian: true,
        isVegan: true,
      },
      {
        name: "Garlic Naan",
        description:
          "Soft leavened bread topped with garlic and butter, baked in the tandoor",
        price: 3.5,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Plain Naan",
        description: "Classic tandoor-baked leavened bread",
        price: 2.95,
        spiceLevel: 1,
        isVegetarian: true,
      },
      {
        name: "Peshwari Naan",
        description:
          "Sweet naan stuffed with coconut, almonds, and raisins",
        price: 4.5,
        spiceLevel: 1,
        isVegetarian: true,
      },
    ],
  },
];
