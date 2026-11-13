"use client";

import { useId } from "react";
import type { FAQItem } from "@/types";

export default function Accordion({ items }: { items: FAQItem[] }) {
  const id = useId();
  return <div className="faq-list">{items.map((item, index) => <details key={item.question} className="border-b border-white/15 py-5" name={`faq-${id}`}><summary className="cursor-pointer text-[15px] font-semibold min-h-7">{item.question}</summary><p className="text-sm text-white/75 leading-7 mt-4 max-w-3xl" id={`${id}-${index}`}>{item.answer}</p></details>)}</div>;
}
