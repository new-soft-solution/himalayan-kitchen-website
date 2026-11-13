import { restaurant } from "@/content/restaurant";
import type { Locale } from "./i18n";

const restaurantDateFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Europe/Amsterdam", year: "numeric", month: "2-digit", day: "2-digit",
});

/** The restaurant's calendar date, independent of the visitor's time zone. */
export function getRestaurantLocalDate(now = new Date()) {
  const parts = restaurantDateFormatter.formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes) => parts.find((value) => value.type === type)!.value;
  return `${part("year")}-${part("month")}-${part("day")}`;
}

const shortDays: Record<Locale, Record<string, string>> = {
  en: { Monday: "Mon", Tuesday: "Tue", Wednesday: "Wed", Thursday: "Thu", Friday: "Fri", Saturday: "Sat", Sunday: "Sun" },
  nl: { Monday: "Ma", Tuesday: "Di", Wednesday: "Wo", Thursday: "Do", Friday: "Vr", Saturday: "Za", Sunday: "Zo" },
};

/** Derive compact displays from the same schedule used by the footer and JSON-LD. */
export function getOpeningHoursGroups(locale: Locale) {
  const groups = new Map<string, string[]>();
  for (const slot of restaurant.openingHours.filter((slot) => !slot.isClosed)) {
    groups.set(slot.hours, [...(groups.get(slot.hours) || []), shortDays[locale][slot.day]]);
  }
  return [...groups].map(([hours, days]) => ({ days: days.join(", "), hours: hours.replace(" - ", "–") }));
}
