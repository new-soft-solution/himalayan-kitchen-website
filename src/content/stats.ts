import { restaurant } from "./restaurant";
import { menuCategories } from "./menu";
import type { Stat } from "@/types";

// Facts from the restaurant record and approved menu, without animated zeros.
export const stats: Stat[] = [
  { value: String(restaurant.foundedYear), label: "Welcoming Guests Since", suffix: "" },
  { value: String(menuCategories.reduce((count, category) => count + category.items.length, 0)), label: "Dishes on Our Food Menu", suffix: "" },
  { value: String(restaurant.seatingCapacity), label: "Seats in Our Dining Room", suffix: "" },
  { value: String(restaurant.rating), label: "Star Rating", suffix: "" },
];
