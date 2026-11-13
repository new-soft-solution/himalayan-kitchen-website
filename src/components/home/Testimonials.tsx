import { EXTERNAL_LINKS } from "@/lib/constants";
import { createTranslator, type LocaleProps } from "@/lib/i18n";
import SectionHeader from "@/components/shared/SectionHeader";

export default function Testimonials({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  return (
    <section className="testimonials py-8 md:py-10">
      <div className="section-container text-center">
        <SectionHeader subtitle={t("Customer Reviews")} title={t("What Our Guests Say")} />
        <a href={EXTERNAL_LINKS.googleReviews} target="_blank" rel="noopener noreferrer" className="button button-outline mt-6">
          {t("See all reviews on Google")} <span aria-hidden="true">&#8599;</span>
        </a>
      </div>
    </section>
  );
}
