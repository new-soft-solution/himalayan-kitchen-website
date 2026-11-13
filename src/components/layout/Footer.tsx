import { MENU_PATHS } from "@/lib/menu-routes";
import Link from "next/link";
import OpeningHours from "@/components/shared/OpeningHours";
import Image from "next/image";
import { restaurant } from "@/content/restaurant";
import { footerQuickLinks } from "@/content/navigation";
import { menuCategories } from "@/content/menu";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { createTranslator, localizedPath, type LocaleProps } from "@/lib/i18n";

export default function Footer({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  const footerCategories = menuCategories.filter((category) =>
    [
      "momo-noodles",
      "curry-classics",
      "tandoori",
      "vegetarian-vegan-mains",
    ].includes(category.id || ""),
  );
  return (
    <footer className="site-footer">
      <div className="section-container footer-grid">
        <div className="footer-brand">
          <Link href={localizedPath("/", locale)}>
            <Image
              src="/images/logo.png"
              alt="The Himalayan Kitchen"
              width={180}
              height={70}
              sizes="180px"
              className="brand-logo"
            />
          </Link>
          <p>{t(restaurant.shortDescription)}</p>
          <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`}>
            {restaurant.phone}
          </a>
          <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
          <a
            href={EXTERNAL_LINKS.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {restaurant.address.street}
            <br />
            {restaurant.address.postalCode} {restaurant.address.city}
          </a>
        </div>
        <div>
          <h2>{t("Quick Links")}</h2>
          <ul>
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link href={localizedPath(link.href, locale)}>
                  {t(link.label)}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={EXTERNAL_LINKS.orderPickup}
                data-action="order"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("Order Online")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>{t("Our Menu")}</h2>
          <ul>
            {footerCategories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`${localizedPath(MENU_PATHS.food, locale)}#${category.id}`}
                >
                  {locale === "nl" ? category.nameNl : category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href={localizedPath(MENU_PATHS.drinks, locale)}>
                {t("Drinks & Bar")}
              </Link>
            </li>
            <li>
              <a
                href={EXTERNAL_LINKS.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("See all reviews on Google")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>{t("Opening Hours")}</h2>
          <OpeningHours locale={locale} />
        </div>
      </div>
      <div className="footer-bottom section-container">
        <p>
          © {new Date().getFullYear()} {restaurant.name}.{" "}
          {t("All rights reserved.")}
        </p>
        <p className="footer-credit">
          Powered by:{" "}
          <a
            href="http://newsoftsolution.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NSS
          </a>
        </p>
      </div>
    </footer>
  );
}
