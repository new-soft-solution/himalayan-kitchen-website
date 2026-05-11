import { Metadata } from "next";
import SubPageBanner from "@/components/shared/SubPageBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import SectionGap from "@/components/shared/SectionGap";
import StatsCounter from "@/components/home/StatsCounter";
import HimalayaStory from "@/components/home/HimalayaStory";
import { aboutContent } from "@/content/about";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | The Himalayan Kitchen",
  description:
    "Learn about The Himalayan Kitchen — an authentic Nepalese and Indian restaurant in Amsterdam's Kinkerbuurt neighborhood, serving the community since 2014.",
};

export default function AboutPage() {
  return (
    <>
      <SubPageBanner title="About Us" breadcrumb="About" />

      {/* Our Story Section */}
      <section className="py-[60px] md:py-[100px]">
        <div className="section-container">
          <SectionHeader subtitle="Our Story" title="From the Himalayas to Amsterdam" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-10 md:mt-16">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/images/interior/dining-room-1.webp"
                  alt="Himalayan Kitchen dining room"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden mt-8">
                <Image
                  src="/images/interior/dining-room-2.webp"
                  alt="Restaurant ambiance"
                  width={400}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              {aboutContent.story.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="font-manrope text-[15px] md:text-[16px] leading-[28px] text-white/70 mb-5 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-[60px] md:py-[80px] bg-dark-cyan">
        <div className="section-container">
          <SectionHeader subtitle="What We Stand For" title="Our Values" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-14">
            {aboutContent.values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 md:p-8 rounded-lg bg-dark-cyan-green border border-white/5"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <span className="font-jakarta font-bold text-[24px] text-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-jakarta font-semibold text-[20px] text-white mb-3">
                  {value.title}
                </h3>
                <p className="font-manrope text-[14px] md:text-[15px] leading-[26px] text-white/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HimalayaStory />

      {/* Photo Strip */}
      <section className="py-[60px] md:py-[80px]">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/interior/dining-room-3.webp", alt: "Cozy interior" },
              { src: "/images/food/food-spread.jpg", alt: "Food spread" },
              { src: "/images/interior/wine-rack.webp", alt: "Wine selection" },
              { src: "/images/interior/exterior.webp", alt: "Restaurant exterior" },
            ].map((img, index) => (
              <div key={index} className="rounded-lg overflow-hidden aspect-square">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />
    </>
  );
}
