import type { HeroSlide } from "@/types";

export const heroContent = {
  eyebrow: "The Himalayan Kitchen · Amsterdam Oud-West",
};

const locationHighlight = "Just around the corner from Foodhallen & FilmHallen in Amsterdam Oud-West.";

export const heroSlides: HeroSlide[] = [
  {
    kind: "video",
    title: "A warm Himalayan welcome in Amsterdam.",
    featuredDish: "Nepalese & Indian cuisine",
    subtitle: "From the Himalayas, served with warmth.",
    description: "Experience the warmth of Nepal and India in the heart of Amsterdam. Thoughtful cooking, timeless traditions and welcoming hospitality make every evening feel like home.",
    promotion: "Warm hospitality. An evening remembered.",
    locationHighlight,
    image: "/images/hero/optimized/restaurant-poster.jpg",
    imageAlt: "Guests sharing dinner at The Himalayan Kitchen",
  },
  {
    kind: "image",
    title: "Discover the heart of Himalayan dining.",
    featuredDish: "Himalayan Daal Bhaat Set",
    subtitle: "An authentic taste of Nepalese tradition.",
    description: "Discover a complete Nepalese dining experience with rice, dal, curry, achar and traditional accompaniments. Generous, authentic and deeply comforting, prepared with care for your table.",
    promotion: "Generous flavours. A comforting tradition.",
    locationHighlight,
    image: "/images/hero/daal_bhaat_hero.png",
    imageAlt: "Himalayan Daal Bhaat Set",
  },
  {
    kind: "image",
    title: "Meet the momo, made for sharing.",
    featuredDish: "Vegan Chilli Momo",
    subtitle: "Handmade with care. Made for sharing.",
    description: "Handmade vegetable dumplings tossed with peppers, onion and our signature house sauce. Bold, vibrant and full of flavour, made to be shared and savoured together.",
    promotion: "Bold flavours. A Himalayan favourite.",
    locationHighlight,
    image: "/images/hero/vegen_chilly_momo.png",
    imageAlt: "Vegan chilli momo",
  },
  {
    kind: "image",
    title: "Experience the warmth of the tandoor.",
    featuredDish: "Chicken Tikka Tandoori",
    subtitle: "Where traditional cooking meets the flame.",
    description: "Tender chicken marinated in aromatic spices and yoghurt, then roasted in a traditional tandoor oven. Smoky, succulent and full of flavour, finished with fresh herbs.",
    promotion: "Smoky warmth. A tandoor classic.",
    locationHighlight,
    image: "/images/hero/chicken_tikka_tandoori.png",
    imageAlt: "Chicken Tikka Tandoori",
  },
  {
    kind: "image",
    title: "Indulge in a little Himalayan comfort.",
    featuredDish: "Butter Chicken",
    subtitle: "A timeless classic, made with care.",
    description: "Tender chicken simmered in a velvety tomato and butter sauce, enriched with cream and aromatic spices. Rich, comforting and carefully balanced for a memorable meal.",
    promotion: "Creamy comfort. A timeless favourite.",
    locationHighlight,
    image: "/images/hero/butter_chicken.png",
    imageAlt: "Butter Chicken",
  },
];
