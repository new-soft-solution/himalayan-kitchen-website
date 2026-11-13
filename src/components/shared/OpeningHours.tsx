"use client";

import { useSyncExternalStore } from "react";
import { restaurant } from "@/content/restaurant";
import { createTranslator, type LocaleProps } from "@/lib/i18n";
import { getRestaurantLocalDate } from "@/lib/opening-hours";

function subscribeToDateChange(onChange: () => void) {
  const timer = window.setInterval(onChange, 60_000);
  window.addEventListener("focus", onChange);
  document.addEventListener("visibilitychange", onChange);
  return () => {
    window.clearInterval(timer);
    window.removeEventListener("focus", onChange);
    document.removeEventListener("visibilitychange", onChange);
  };
}

const getToday = () => getRestaurantLocalDate();
const getServerToday = () => null;

export default function OpeningHours({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  // Static HTML and hydration start consistently; the browser keeps the date fresh.
  const today = useSyncExternalStore(subscribeToDateChange, getToday, getServerToday);
  const calendarDate = today ? new Date(`${today}T12:00:00Z`) : null;
  const weekday = calendarDate ? new Intl.DateTimeFormat("en", { weekday: "long", timeZone: "UTC" }).format(calendarDate) : null;
  const displayDate = calendarDate ? new Intl.DateTimeFormat(locale === "nl" ? "nl-NL" : "en-GB", { day: "numeric", month: "short", timeZone: "UTC" }).format(calendarDate) : null;

  return <dl className="opening-hours">{restaurant.openingHours.map((slot) => {
    const isToday = slot.day === weekday;
    return <div key={slot.day} className={isToday ? "is-today" : undefined} aria-current={isToday ? "date" : undefined}>
      <dt>{t(slot.day)}{isToday && <time className="opening-hours-date" dateTime={today!}>{t("Today")} · {displayDate}</time>}</dt>
      <dd className={slot.isClosed ? "closed" : ""}>{slot.isClosed ? t("Closed") : slot.hours.replace(" - ", "–")}</dd>
    </div>;
  })}</dl>;
}
