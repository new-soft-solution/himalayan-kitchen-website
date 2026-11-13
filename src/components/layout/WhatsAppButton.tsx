"use client";

import { FaWhatsapp } from "react-icons/fa";
import { EXTERNAL_LINKS } from "@/lib/constants";

import { useTranslation } from "./LocaleProvider";

export default function WhatsAppButton() {
  const t = useTranslation();
  return (
    <a
      href={EXTERNAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label={t("Chat with us on WhatsApp")}
      title={t("Chat with us on WhatsApp")}
    >
      <FaWhatsapp size={28} color="#fff" />
    </a>
  );
}
