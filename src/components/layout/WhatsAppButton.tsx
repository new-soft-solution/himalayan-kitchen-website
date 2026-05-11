"use client";

import { FaWhatsapp } from "react-icons/fa";
import { EXTERNAL_LINKS } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={EXTERNAL_LINKS.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={28} color="#fff" />
    </a>
  );
}
