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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {category.items.map((item, index) => (
          <div
            key={index}
            className="flex justify-between gap-4 pb-6 border-b border-dashed border-white/10"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-jakarta font-semibold text-[16px] md:text-[18px] text-white">
                  {item.name}
                </h4>
                {item.isPopular && (
                  <span className="px-2 py-0.5 bg-primary/10 text-primary font-jost text-[11px] font-medium rounded uppercase tracking-wider">
                    Popular
                  </span>
                )}
                {item.isVegetarian && (
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-400 font-jost text-[11px] font-medium rounded uppercase tracking-wider">
                    Veg
                  </span>
                )}
              </div>
              <p className="font-manrope text-[13px] md:text-[14px] text-white/50 leading-[22px] mb-2">
                {item.description}
              </p>
              <SpiceMeter level={item.spiceLevel} showLabel />
            </div>
            <div className="flex-shrink-0">
              <span className="font-jakarta font-bold text-[18px] text-primary">
                &euro;{item.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
