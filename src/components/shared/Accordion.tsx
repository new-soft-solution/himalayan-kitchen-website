"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import type { FAQItem } from "@/types";

interface AccordionProps {
  items: FAQItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-lg bg-dark-cyan-green border border-white/5 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
          >
            <h3 className="font-jakarta font-semibold text-[15px] md:text-[17px] text-white">
              {item.question}
            </h3>
            <FiChevronDown
              size={20}
              className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <p className="px-5 md:px-6 pb-5 md:pb-6 font-manrope text-[14px] md:text-[15px] leading-[26px] text-white/60">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
