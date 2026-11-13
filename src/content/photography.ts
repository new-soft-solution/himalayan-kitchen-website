// One canonical file for each distinct food photograph.
export const foodPhotos = {
  butterChicken: { src: "/images/food/butter_chicken.png", alt: "Butter chicken in a creamy tomato sauce" },
  bhindiBhaji: { src: "/images/food/bhindi_bhaji.png", alt: "Bhindi Bhaji with okra, spices and lime" },
  chanaMasala: { src: "/images/food/chana_masala.png", alt: "Chana Masala with chickpeas and tomato" },
  daalBhaat: { src: "/images/food/daal_bhat_thali.png", alt: "Daal Bhaat thali with rice and side dishes" },
  gorkhaChickenCurry: { src: "/images/food/05_Gorkha_Chicken_Curry.jpg", alt: "Gorkha Chicken Curry with fresh ginger and herbs" },
  onionBhaji: { src: "/images/food/06_Onion_Bhaji.jpg", alt: "Crisp onion bhaji with chutney" },
  paneerChilli: { src: "/images/food/07_Paneer_Chilli.jpg", alt: "Paneer Chilli with peppers and onion" },
  saagPaneer: { src: "/images/food/08_Saag_Paneer.jpg", alt: "Saag Paneer with spinach and Indian cheese" },
  vegetableSamosa: { src: "/images/food/vegetable_samosa.png", alt: "Vegetable Samosa with salad and chutneys" },
  alooTamaTofu: { src: "/images/food/aloo_taama_tofu.png", alt: "Aloo, Tama & Tofu curry with fresh ginger" },
  chickenDaalBhaat: { src: "/images/food/daal_bhat_chicken.png", alt: "Chicken Daal Bhaat thali with rice, lentils and side dishes" },
  currySpread: { src: "/images/food/multiple_dish.jpeg", alt: "A selection of Himalayan curries" },
  vegetablePakora: { src: "/images/food/pakora.jpg", alt: "Mixed Vegetable Pakora with fresh salad" },
  sheekhKabab: { src: "/images/food/sheekh_kabab.png", alt: "Himalayan Sheekh Kabab with salad" },
  tandooriPlatter: { src: "/images/food/tandoori.png", alt: "Tandoori platter with grilled peppers and onion" },
  friedRice: { src: "/images/food/veg_fried_rice.png", alt: "Himalayan Fried Rice with vegetables" },
  veganChilliMomo: { src: "/images/food/vegan_chilly_momo.png", alt: "Vegan Chilli Momo with peppers and chilli sauce" },
};

// Restaurant photography stays in the gallery; food is shown in the marquee.
export const galleryPhotos = [
  { src: "/images/interior/dining-room-1.webp", alt: "Himalayan Kitchen dining room", span: "col-span-2 row-span-2" },
  { src: "/images/interior/dining-room-2.webp", alt: "Restaurant ambiance", span: "" },
  { src: "/images/interior/wine-rack.webp", alt: "Wine selection", span: "" },
  { src: "/images/interior/dining-room-3.webp", alt: "Cozy interior", span: "" },
  { src: "/images/interior/exterior.webp", alt: "Restaurant exterior", span: "" },
  { src: "/images/hero/group_reservation.jpg", alt: "Guests sharing dinner at The Himalayan Kitchen", span: "col-span-2" },
];

// Printed menu IDs keep each photograph paired with the correct dish.
export const dishSectionPhotos: Record<string, { src: string; alt: string }> = {
  "16": foodPhotos.daalBhaat,
  "23": foodPhotos.veganChilliMomo,
  "34": foodPhotos.gorkhaChickenCurry,
  "35": foodPhotos.butterChicken,
  "09": foodPhotos.sheekhKabab,
  "45": foodPhotos.tandooriPlatter,
  "53": foodPhotos.saagPaneer,
  "58": foodPhotos.chanaMasala,
};

// Do not repeat the dish-section photos in the images-only marquee.
const dishSectionSources = new Set(Object.values(dishSectionPhotos).map((photo) => photo.src));
export const marqueePhotos = Object.values(foodPhotos).filter((photo) => !dishSectionSources.has(photo.src));

export const barPhotos = [
  { src: "/images/drinks/khukuri-rum.jpg", alt: "Khukuri Rum from Nepal" },
  { src: "/images/drinks/bacardi.jpg", alt: "Bacardi Carta Blanca" },
  { src: "/images/drinks/joseph-guy.jpg", alt: "Joseph Guy Cognac" },
];
