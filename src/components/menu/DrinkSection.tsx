import type { DrinkCategory } from "@/types";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";

interface DrinkSectionProps {
  categories: DrinkCategory[];
}

export default function DrinkSection({ categories }: DrinkSectionProps) {
  return (
    <section id="drinks" className="py-[60px] md:py-[100px] bg-dark-cyan-green scroll-mt-24">
      <div className="section-container">
        <SectionHeader
          subtitle="From the Bar"
          title="Drinks & Beverages"
        />

        <div className="mt-10 md:mt-16 space-y-10 md:space-y-14">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="font-jakarta font-semibold text-[20px] md:text-[24px] text-white mb-6">
                {category.name}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((drink, drinkIndex) => (
                  <div
                    key={drinkIndex}
                    className="bg-cyan rounded-lg p-5 flex gap-4 border border-white/5"
                  >
                    {drink.image && (
                      <div className="flex-shrink-0 w-[70px] h-[70px] rounded-lg overflow-hidden">
                        <Image
                          src={drink.image}
                          alt={drink.name}
                          width={70}
                          height={70}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-jakarta font-semibold text-[15px] text-white">
                          {drink.name}
                        </h4>
                        <span className="font-jakarta font-bold text-[15px] text-primary flex-shrink-0">
                          &euro;{drink.price.toFixed(2)}
                        </span>
                      </div>
                      {drink.description && (
                        <p className="font-manrope text-[13px] text-white/50 leading-[20px]">
                          {drink.description}
                        </p>
                      )}
                      {drink.origin && (
                        <span className="inline-block mt-2 font-jost text-[11px] text-primary/60 uppercase tracking-wider">
                          {drink.origin}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
