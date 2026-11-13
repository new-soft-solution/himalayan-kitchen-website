"use client";

import { EXTERNAL_LINKS } from "@/lib/constants";
import { useTranslation } from "./LocaleProvider";

interface FindATableCTAProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
}

// Reservations are handled exclusively by Find A Table's native widget.
export default function FindATableCTA({ className = "", size = "md", variant = "solid" }: FindATableCTAProps) {
  const t = useTranslation();
  return <a href={EXTERNAL_LINKS.orderPickup} data-action="order" target="_blank" rel="noopener noreferrer" className={`button button-${size} ${variant === "outline" ? "button-outline" : ""} ${className}`}>{t("Order Online")}<span aria-hidden="true">↗</span></a>;
}
