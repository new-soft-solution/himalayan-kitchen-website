import SectionHeader from "@/components/shared/SectionHeader";
import FindATableCTA from "@/components/layout/FindATableCTA";
import { createTranslator, type LocaleProps } from "@/lib/i18n";

export default function MenuOrderCTA({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  return (
    <section className="py-12 bg-dark-cyan">
      <div className="section-container text-center">
        <SectionHeader
          subtitle={t("Ready to Order?")}
          title={t("Order Online Now")}
        />
        <p className="text-white/75 max-w-xl mx-auto my-6 text-sm">
          {t(
            "Order online or call us directly. For table reservations, use the Find A Table widget on this page. Takeaway and delivery are also available.",
          )}
        </p>
        <FindATableCTA size="lg" />
      </div>
    </section>
  );
}
