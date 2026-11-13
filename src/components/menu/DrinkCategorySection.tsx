import type { DrinkCategory } from "@/types";
import Image from "next/image";
import { createTranslator, formatPrice, type LocaleProps } from "@/lib/i18n";

interface DrinkCategorySectionProps extends LocaleProps { category: DrinkCategory }

export default function DrinkCategorySection({ category, locale = "en" }: DrinkCategorySectionProps) {
  const t = createTranslator(locale);
  return <section id={`drinks-${category.id}`} className="menu-category" aria-labelledby={`drinks-heading-${category.id}`}>
    <div className="menu-category-heading"><h3 id={`drinks-heading-${category.id}`}>{locale === "nl" ? category.nameNl || category.name : category.name}</h3><span>{String(category.items.length).padStart(2,"0")}</span></div>
    <div className="menu-items">
                {category.items.map((drink) => {
                  const name = locale === "nl" ? drink.nameNl || t(drink.name) : drink.name;
                  const description = locale === "nl" ? drink.descriptionNl || (drink.description ? t(drink.description) : undefined) : drink.description;
                  const hasPriceRange = drink.variants?.some((variant) => variant.price !== drink.price);
                  return (
                    <article key={drink.id || drink.name} data-drink-id={drink.id} className="py-4 flex items-start gap-4 border-b border-white/15 min-w-0">
                      {drink.image && <Image src={drink.image} alt={name} width={65} height={65} sizes="65px" className="w-[65px] h-[65px] rounded object-cover shrink-0" />}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="text-sm font-semibold min-w-0">{name}</h4>
                          <div className="text-right shrink-0">
                            <span className="text-primary text-sm whitespace-nowrap">{hasPriceRange && <small className="text-white/75 mr-1">{t("from")}</small>}{formatPrice(drink.price)}</span>
                            {drink.serving && <span className="block text-white/75 text-xs">{t(drink.serving)}</span>}
                          </div>
                        </div>
                        {description && <p className="text-xs text-white/75 leading-6 mt-2">{description}</p>}
                        {drink.variants?.length ? <dl className="dish-variants">
                          {drink.variants.map((variant) => <div key={variant.label}><dt>{locale === "nl" ? variant.labelNl || t(variant.label) : variant.label}</dt><dd>{formatPrice(variant.price)}</dd></div>)}
                        </dl> : null}
                        {drink.origin && <span className="inline-block mt-2 text-[11px] text-primary">{t(drink.origin)}</span>}
                      </div>
                    </article>
                  );
                })}
    </div>
  </section>;
}
