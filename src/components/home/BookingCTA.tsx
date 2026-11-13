import FindATableCTA from "@/components/layout/FindATableCTA";
import SectionHeader from "@/components/shared/SectionHeader";
import { restaurant } from "@/content/restaurant";
import { createTranslator, type LocaleProps } from "@/lib/i18n";

export default function BookingCTA({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  return <section className="booking-section"><div className="section-container booking-grid"><div><SectionHeader subtitle={t("Order Your Favorites")} title={t("Order Online Today")} centered={false} /><p>{t("Cozy 32-seat dining room. Enjoy Nepalese and Indian cooking in the heart of Oud-West.")}</p></div><div className="booking-actions"><a className="button button-outline" href={`tel:${restaurant.phone.replace(/\s/g, "")}`}>{t("Call Us")}</a><FindATableCTA /></div></div></section>;
}
