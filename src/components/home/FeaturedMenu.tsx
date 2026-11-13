import { MENU_PATHS } from "@/lib/menu-routes";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { menuCategories } from "@/content/menu";
import { dishSectionPhotos } from "@/content/photography";
import {
  createTranslator,
  formatPrice,
  localizedPath,
  type LocaleProps,
} from "@/lib/i18n";

export default function FeaturedMenu({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  const highlights = menuCategories
    .flatMap((category) => category.items)
    .filter((item) => ["16", "23", "34", "35"].includes(item.id || ""));
  return (
    <section className="menu-preview">
      <div className="section-container">
        <SectionHeader
          subtitle={t("Our Menu")}
          title={t("Explore Our Signature Dishes")}
        />
        <p className="text-center text-white/70 max-w-2xl mx-auto mt-4">
          {t("Handmade Nepalese dumplings with a choice of fillings, served with sesame-tomato achar.")}
        </p>
        <div className="featured-menu-list">
          {highlights.map((item) => {
            const photo = dishSectionPhotos[item.id || ""];
            return (
              <article className="featured-menu-item" key={item.id}>
                {photo && (
                  <Image
                    src={photo.src}
                    alt={item.name}
                    width={84}
                    height={84}
                    sizes="84px"
                    unoptimized
                  />
                )}
                <div>
                  <div className="featured-menu-title">
                    <h3>{item.name}</h3>
                    <span>
                      {item.variants ? t("from") + " " : ""}
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <p>
                    {locale === "nl" ? item.descriptionNl : item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="featured-menu-link">
          <Link
            href={localizedPath(MENU_PATHS.food, locale)}
            className="button"
          >
            {t("View Full Menu")} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
