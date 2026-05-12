import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { menuCategories } from "@/content/menu";
import SpiceMeter from "@/components/menu/SpiceMeter";

export default function FeaturedMenu() {
  // Get popular items across all categories
  const popularItems = menuCategories
    .flatMap((cat) => cat.items.filter((item) => item.isPopular))
    .slice(0, 5);

  return (
    <section className="py-[60px] md:py-[100px] overflow-hidden">
      <div className="section-container">
        <SectionHeader
          subtitle="Our Menu"
          title="Explore Our Signature Dishes"
        />

        <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {popularItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-dark-cyan-green/50 hover:bg-dark-cyan-green transition-colors group"
            >
              {item.image && (
                <div className="flex-shrink-0 w-[80px] h-[80px] rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-jakarta font-semibold text-[16px] lg:text-[18px] text-white">
                    {item.name}
                  </h4>
                  <span className="font-jost font-bold text-[16px] lg:text-[18px] text-primary whitespace-nowrap">
                    {item.variants ? "from " : ""}&euro;{item.price.toFixed(2)}
                  </span>
                </div>
                <div className="relative my-2 dashed-border h-[1px]" />
                <p className="font-manrope text-[13px] lg:text-[14px] text-white/60 leading-[22px]">
                  {item.description}
                </p>
                <div className="mt-2">
                  <SpiceMeter level={item.spiceLevel} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="btn inline-flex items-center justify-center gap-2 bg-primary px-8 rounded-md font-jost font-semibold text-[16px] leading-[54px] text-white hover:bg-primary-dark transition-colors"
          >
            <span className="btn__inner">View Full Menu</span>
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.23096 5.78125L1.66846 10.4062C1.51221 10.5625 1.26221 10.5625 1.13721 10.4062L0.512207 9.78125C0.355957 9.625 0.355957 9.40625 0.512207 9.25L4.19971 5.5L0.512207 1.78125C0.355957 1.625 0.355957 1.375 0.512207 1.25L1.13721 0.625C1.26221 0.46875 1.51221 0.46875 1.66846 0.625L6.23096 5.25C6.38721 5.40625 6.38721 5.625 6.23096 5.78125Z" fill="white" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
