import Image from "next/image";
import Link from "next/link";
import { restaurant } from "@/content/restaurant";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { createTranslator, localizedPath, type LocaleProps } from "@/lib/i18n";
import SectionHeader from "@/components/shared/SectionHeader";

export default function OurRestaurant({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  return <section className="restaurant-intro"><div className="section-container restaurant-grid">
    <div className="restaurant-image"><Image src="/images/interior/dining-room-1.webp" alt={t("The Himalayan Kitchen interior")} fill sizes="(max-width: 767px) 100vw, 50vw" /><div className="restaurant-detail"><Image src="/images/interior/dining-room-2.webp" alt={t("Restaurant ambiance")} fill sizes="(max-width: 767px) 35vw, 220px" /></div><a className="restaurant-rating" href={EXTERNAL_LINKS.googleReviews} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">★</span><strong>{restaurant.rating} / 5</strong><span>{t("Google rating")}</span></a><div className="restaurant-since">{t("Since")}<strong>{restaurant.foundedYear}</strong></div></div>
    <div className="restaurant-copy"><SectionHeader subtitle={t("Our Restaurant")} title={t("A Taste of Nepal in the Heart of Amsterdam")} centered={false} /><p>{t(restaurant.description)}</p><div className="restaurant-values"><div><h3>{t("Himalayan Specialities")}</h3><p>{t("Handmade momo, daal bhaat and distinctive Nepalese dishes.")}</p></div><div><h3>{t("Freshly Prepared Flavours")}</h3><p>{t("Aromatic spices, carefully balanced curries and tandoori favourites.")}</p></div></div><div className="button-row"><Link href={localizedPath("/about", locale)} className="button">{t("About Us")} <span aria-hidden="true">↗</span></Link><a href={EXTERNAL_LINKS.googleReviews} target="_blank" rel="noopener noreferrer" className="text-sm text-primary">{restaurant.rating} / 5 · {t("Star Rating")}</a></div></div>
  </div></section>;
}
