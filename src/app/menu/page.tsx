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

          {/* Kind Information Banner */}
          <div className="mt-10 md:mt-12 max-w-[800px] mx-auto p-6 rounded-xl bg-primary/5 border border-primary/15 text-center">
            <h4 className="font-jakarta font-semibold text-[16px] md:text-[18px] text-primary mb-3">
              Kind Information
            </h4>
            <p className="font-manrope text-[13px] md:text-[14px] text-white/70 leading-[22px]">
              All our meals are made from scratch to ensure freshness, which may take a little longer than a typical kitchen. If you are in a hurry to catch a movie, please let us know in advance when placing your order.
            </p>
          </div>

          {/* Allergen Info */}
          <div className="mt-4 max-w-[800px] mx-auto p-4 rounded-lg bg-white/5 border border-white/10 text-center">
            <p className="font-manrope text-[12px] md:text-[13px] text-white/50 leading-[20px]">
              <span className="text-white/70 font-medium">Food/Drink Allergies or Intolerance?</span>{" "}
              Before you order food and drinks, please speak to our staff if you have a food allergy or intolerance.
            </p>
            <div className="flex items-center justify-center gap-4 mt-3 font-manrope text-[11px] md:text-[12px] text-white/40">
              <span>🥛 Milk</span>
              <span>🥜 Nuts</span>
              <span>🌾 Gluten</span>
              <span>🥚 Eggs</span>
              <span>🦐 Shellfish</span>
            </div>
          </div>

          <div className="mt-10 md:mt-16 space-y-12 md:space-y-16">
            {menuCategories.map((category, index) => (
              <MenuCategorySection
                key={index}
                category={category}
                id={category.name.toLowerCase().replace(/[&\s]+/g, "-").replace(/-+/g, "-").replace(/'s/g, "s")}
              />
            ))}
          </div>

          {/* Information box */}
          <div className="mt-16 p-6 rounded-lg bg-white/5 border border-white/10 text-center">
            <p className="font-manrope text-[13px] md:text-[14px] text-white/60 leading-[22px] italic">
              We prepare all our food separately (each portion) and freshly, so please indicate the spicy level of your dish as mentioned in our menu.
            </p>
          </div>

          {/* Good to Know about Nepalese Food */}
          <div className="mt-12 md:mt-16 max-w-[900px] mx-auto">
            <h3 className="font-jakarta font-semibold text-[22px] md:text-[28px] text-white mb-6 text-center">
              Good to Know about Nepalese Food
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Rich Diversity",
                  text: "Reflects Nepal's cultural and geographic diversity, offering a unique blend of flavors.",
                },
                {
                  title: "Local Ingredients",
                  text: "Utilizes fresh, local ingredients, promoting sustainability and authenticity.",
                },
                {
                  title: "Complex Spices",
                  text: "Employs a distinctive mix of spices, providing depth and complexity to dishes.",
                },
                {
                  title: "Variety",
                  text: "Offers a wide range of dishes catering to different tastes, including vegetarian and meat options.",
                },
                {
                  title: "Traditional Techniques",
                  text: "Incorporates age-old cooking techniques, preserving culinary heritage.",
                },
                {
                  title: "Health Benefits",
                  text: "Many dishes are nutritionally balanced and incorporate medicinal herbs and spices.",
                },
                {
                  title: "Cultural Experience",
                  text: "Eating Nepalese food is a cultural journey, reflecting the nation's history and traditions.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-dark-cyan-green/50 border border-white/5"
                >
                  <h4 className="font-jakarta font-semibold text-[14px] md:text-[15px] text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="font-manrope text-[12px] md:text-[13px] text-white/50 leading-[20px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-manrope text-[13px] text-white/40 text-center mt-6 italic">
              With 12 years of experience in this restaurant, every dish on our menu has been thoughtfully curated. However, if there is something you&apos;d like that we may have overlooked, please don&apos;t hesitate to let us know.
            </p>
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
            Order Online Now
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
