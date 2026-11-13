import { MENU_PATHS } from "@/lib/menu-routes";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { menuCategories } from "@/content/menu";
import { dishSectionPhotos } from "@/content/photography";
import { createTranslator, localizedPath, type LocaleProps } from "@/lib/i18n";

export default function FeaturedDishes({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  const dishes = menuCategories
    .flatMap((category) =>
      category.items.map((item) => ({ ...item, categoryId: category.id })),
    )
    .filter((item) => ["09", "45", "53", "58"].includes(item.id || ""));
  return (
    <section className="py-8 md:py-10">
      <div className="section-container">
        <SectionHeader
          subtitle={t("Chef's Favorites")}
          title={t("Taste Our Best Dishes")}
        />
        <div className="dishes-grid">
          {dishes.map((dish) => {
            const photo = dishSectionPhotos[dish.id || ""];
            return (
              <article key={dish.id} className="dish-card">
                <Link
                  href={`${localizedPath(MENU_PATHS.food, locale)}#${dish.categoryId}`}
                >
                  {photo && (
                    <div className="dish-card-image">
                      <Image
                        src={photo.src}
                        alt={dish.name}
                        fill
                        sizes="(max-width: 639px) 110px, (max-width: 1023px) 50vw, 25vw"
                        unoptimized
                      />
                    </div>
                  )}
                  <div className="dish-card-content">
                    <h3>{dish.name}</h3>
                    <p className="line-clamp-2">
                      {locale === "nl" ? dish.descriptionNl : dish.description}
                    </p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
