import { MENU_PATHS } from "@/lib/menu-routes";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { createTranslator, localizedPath, type LocaleProps } from "@/lib/i18n";
import { restaurant } from "@/content/restaurant";

export default function LocalDining({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  return (
    <section className="local-dining">
      <div className="section-container local-dining-grid">
        <div className="local-dining-photo">
          <Image
            src="/images/interior/exterior.webp"
            alt={t("Restaurant exterior")}
            fill
            sizes="(max-width: 767px) 100vw, 45vw"
          />
        </div>
        <div className="local-dining-copy">
          <SectionHeader
            subtitle={t("Around the corner from Foodhallen")}
            title={t("A quieter table in Oud-West")}
            centered={false}
          />
          <p>
            {t(
              "Just around the corner from lively Foodhallen, The Himalayan Kitchen offers a relaxed alternative: authentic Nepalese and Indian cuisine, excellent quality and reasonable prices.",
            )}
          </p>
          <address className="not-italic text-sm text-white/75 mt-4">
            {restaurant.address.street}, {restaurant.address.postalCode}{" "}
            {restaurant.address.city}
            <br />
            {t(
              "Nepalese and Indian dining in the Kinkerbuurt, Amsterdam Oud-West.",
            )}
          </address>
          <div className="cinema-note">
            <h3>{t("An evening at Filmhallen?")}</h3>
            <p>
              {t(
                "Enjoy an inviting Nepalese or Indian dinner near FilmHallen. Let our team know your film time when ordering.",
              )}
            </p>
          </div>
          <nav
            className="local-menu-links"
            aria-label={t("Explore our cuisine")}
          >
            <Link
              href={`${localizedPath(MENU_PATHS.food, locale)}#momo-noodles`}
            >
              {t("Nepalese momo")}
            </Link>
            <Link
              href={`${localizedPath(MENU_PATHS.food, locale)}#nepalese-specialities`}
            >
              {t("Himalayan specialities")}
            </Link>
            <Link
              href={`${localizedPath(MENU_PATHS.food, locale)}#curry-classics`}
            >
              {t("Indian curries")}
            </Link>
            <Link
              href={`${localizedPath(MENU_PATHS.food, locale)}#vegetarian-vegan-mains`}
            >
              {t("Vegetarian dishes")}
            </Link>
          </nav>
          <Link
            href={localizedPath("/contact", locale)}
            className="button button-outline"
          >
            {t("Directions & opening hours")} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
