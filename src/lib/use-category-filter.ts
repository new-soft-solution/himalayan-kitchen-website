"use client";

import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  return () => { window.removeEventListener("hashchange", callback); window.removeEventListener("popstate", callback); };
};
const getHash = () => window.location.hash.slice(1);
const getServerHash = () => "";

/** Food and drinks share URL-backed selection and render all categories on the server. */
export function useCategoryFilter(ids: string[], prefix = "", aliases: Record<string, string> = {}, allHash = "") {
  const hash = useSyncExternalStore(subscribe, getHash, getServerHash);
  const candidate = aliases[hash] || (hash.startsWith(prefix) ? hash.slice(prefix.length) : "");
  const selected = ids.includes(candidate) ? candidate : "all";
  function selectCategory(id: string) {
    const url = new URL(window.location.href);
    url.hash = id === "all" ? allHash : prefix + id;
    window.history.pushState(null, "", url);
    window.dispatchEvent(new Event("hashchange"));
  }
  return { selected, selectCategory };
}
