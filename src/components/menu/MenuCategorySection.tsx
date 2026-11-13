import type { MenuCategory } from "@/types";
import { createTranslator, formatPrice, type LocaleProps } from "@/lib/i18n";
import AllergenSymbol from "./AllergenSymbol";

interface MenuCategorySectionProps extends LocaleProps { category: MenuCategory; id?: string }

export default function MenuCategorySection({ category, id, locale = "en" }: MenuCategorySectionProps) {
  const t = createTranslator(locale);
  return (
    <section id={id || category.id} className="menu-category" aria-labelledby={`heading-${category.id}`}>
      <div className="menu-category-heading"><h3 id={`heading-${category.id}`}>{locale === "nl" ? category.nameNl || category.name : category.name}</h3><span>{String(category.items.length).padStart(2, "0")}</span></div>
      {category.note && <p className="menu-note">{locale === "nl" ? category.noteNl || category.note : category.note}</p>}
      <div className="menu-items">
        {category.items.map((item) => (
          <article key={item.id || item.name} className="menu-item" data-dish-id={item.id}>
            <div className="menu-item-title"><span className="dish-number">{item.id}</span><h4>{item.name}</h4><div className="dish-price">{item.variants?.length ? <small>{t("from")} </small> : null}{formatPrice(item.price)}</div></div>
            <p>{locale === "nl" ? item.descriptionNl || item.description : item.description}</p>
            {item.variants?.length ? <dl className="dish-variants">{item.variants.map((variant) => <div key={variant.label}><dt>{locale === "nl" ? variant.labelNl || variant.label : variant.label}</dt><dd>{formatPrice(variant.price)}</dd></div>)}</dl> : null}
            <div className="dish-details">
              {item.isVegan && <span className="diet-label">{t("Vegan")}</span>}
              {item.isVegetarian && !item.isVegan && <span className="diet-label">{t("Vegetarian")}</span>}
              {!!item.allergens?.length && <span className="allergen-list" role="group" aria-label={t("Allergens")}>{item.allergens.map((allergen) => <AllergenSymbol key={allergen} allergen={allergen} locale={locale} />)}</span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
