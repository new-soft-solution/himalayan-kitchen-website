"use client";

import { useSyncExternalStore } from "react";

type Connection = EventTarget & { saveData?: boolean };
const getConnection = () => (navigator as Navigator & { connection?: Connection }).connection;

function subscribe(callback: () => void) {
  const preference = matchMedia("(prefers-reduced-motion: reduce)");
  const connection = getConnection();
  preference.addEventListener("change", callback);
  connection?.addEventListener("change", callback);
  return () => {
    preference.removeEventListener("change", callback);
    connection?.removeEventListener("change", callback);
  };
}

const getSnapshot = () => !matchMedia("(prefers-reduced-motion: reduce)").matches && !getConnection()?.saveData;

/** Start with a still server render and honour the visitor's motion/data preferences. */
export function useMotionPreference() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
