import type { MenuCategory } from "@/types";
import SpiceMeter from "./SpiceMeter";

interface MenuCategorySectionProps {
  category: MenuCategory;
  id?: string;
}

export default function MenuCategorySection({ category, id }: MenuCategorySectionProps) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="mb-8">
        <h3 className="font-jakarta font-semibold text-[24px] md:text-[30px] text-white mb-2">
          {category.name}
        </h3>
        {category.description && (
          <p className="font-manrope text-[14px] md:text-[15px] text-white/50">
            {category.description}
          </p>
        )}
        <div className="w-[60px] h-[2px] bg-primary mt-4" />

        {/* Category note (e.g., "All curry dishes come with boiled Basmati rice...") */}
        {category.note && (
          <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
            <p className="font-manrope text-[13px] md:text-[14px] text-white/70 leading-[22px]">
              {category.note}
            </p>
            {category.noteNl && (
              <p className="font-manrope text-[12px] md:text-[13px] text-white/40 leading-[20px] mt-2 italic">
                {category.noteNl}
              </p>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {category.items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between gap-4 pb-6 border-b border-dashed border-white/10"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h4 className="font-jakarta font-semibold text-[16px] md:text-[18px] text-white">
                  {item.name}
                </h4>
                {item.isPopular && (
                  <span className="px-2 py-0.5 bg-primary/10 text-primary font-jost text-[11px] font-medium rounded uppercase tracking-wider">
                    Popular
                  </span>
                )}
                {item.isVegetarian && !item.isVegan && (
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-400 font-jost text-[11px] font-medium rounded uppercase tracking-wider">
                    Veg
                  </span>
                )}
                {item.isVegan && (
                  <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-jost text-[11px] font-medium rounded uppercase tracking-wider">
                    Vegan
                  </span>
                )}
              </div>

              {/* English description */}
              <p className="font-manrope text-[13px] md:text-[14px] text-white/50 leading-[22px] mb-1">
                {item.description}
              </p>

              {/* Dutch description */}
              {item.descriptionNl && (
                <p className="font-manrope text-[12px] md:text-[13px] text-white/30 leading-[20px] mb-2 italic">
                  {item.descriptionNl}
                </p>
              )}

              {/* Variant pricing */}
              {item.variants && item.variants.length > 0 && (
                <div className="flex flex-wrap gap-x-4 gap-y-1 mb-2">
                  {item.variants.map((variant, vIdx) => (
                    <span
                      key={vIdx}
                      className="font-manrope text-[12px] md:text-[13px] text-white/60"
                    >
                      <span className="text-white/40">{variant.label}:</span>{" "}
                      <span className="text-primary font-semibold">
                        &euro;{variant.price.toFixed(2)}
                      </span>
                    </span>
                  ))}
                </div>
              )}

              <SpiceMeter level={item.spiceLevel} showLabel />
            </div>

            {/* Price - show base price when no variants, or "from" price when variants exist */}
            <div className="flex-shrink-0 text-right">
              {item.variants && item.variants.length > 0 ? (
                <div>
                  <span className="font-manrope text-[11px] text-white/40 block">from</span>
                  <span className="font-jakarta font-bold text-[18px] text-primary">
                    &euro;{item.price.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="font-jakarta font-bold text-[18px] text-primary">
                  &euro;{item.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
