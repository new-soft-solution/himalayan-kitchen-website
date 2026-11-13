import type { DrinkCategory } from "@/types";
import DrinksBrowser from "./DrinksBrowser";
import SectionHeader from "@/components/shared/SectionHeader";
import StructuredData from "@/components/shared/StructuredData";
import { createTranslator, type LocaleProps } from "@/lib/i18n";
import { getDrinksMenuSchema } from "@/lib/schema";

interface DrinkSectionProps extends LocaleProps {
  categories: DrinkCategory[];
}

export default function DrinkSection({ categories, locale = "en" }: DrinkSectionProps) {
  const t = createTranslator(locale);
  return (
    <section id="drinks" className="py-8 md:py-10 bg-dark-cyan-green scroll-mt-28">
      <StructuredData data={getDrinksMenuSchema(locale, categories)} />
      <div className="section-container">
        <SectionHeader subtitle={t("From the Bar")} title={t("Drinks & Beverages")} />
        <DrinksBrowser categories={categories} />
      </div>
    </section>
  );
}
