import { Metadata } from "next";
import SubPageBanner from "@/components/shared/SubPageBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import MenuCategorySection from "@/components/menu/MenuCategorySection";
import DrinkSection from "@/components/menu/DrinkSection";
import FindATableCTA from "@/components/layout/FindATableCTA";
import { menuCategories } from "@/content/menu";
import { drinkCategories } from "@/content/drinks";

export const metadata: Metadata = {
  title: "Menu | The Himalayan Kitchen",
  description:
    "Explore our authentic Nepalese and Indian menu — from traditional Momo and Gorkha Curry to Tandoori specialties, vegetarian dishes, and Nepali drinks.",
};

export default function MenuPage() {
  return (
    <>
      <SubPageBanner title="Our Menu" breadcrumb="Menu" />

      <section className="py-[60px] md:py-[100px]">
        <div className="section-container">
          <SectionHeader
            subtitle="Taste the Himalayas"
            title="Food Menu"
          />

          <div className="mt-10 md:mt-16 space-y-12 md:space-y-16">
            {menuCategories.map((category, index) => (
              <MenuCategorySection key={index} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Drinks Section */}
      <DrinkSection categories={drinkCategories} />

      {/* CTA */}
      <section className="py-[60px] md:py-[80px] bg-dark-cyan">
        <div className="section-container text-center">
          <h2 className="font-satisfy text-[18px] md:text-[24px] text-primary mb-4">
            Ready to Order?
          </h2>
          <h3 className="font-jakarta font-semibold text-[28px] md:text-[40px] text-white mb-6">
            Reserve Your Table Now
          </h3>
          <p className="font-manrope text-[15px] text-white/60 max-w-[500px] mx-auto mb-8">
            Book through FindATable or call us directly. Takeaway and delivery also available.
          </p>
          <FindATableCTA size="lg" />
        </div>
      </section>
    </>
  );
}
