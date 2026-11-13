import { createTranslator, type LocalizedPageProps } from "@/lib/i18n";
import { getPageLocale } from "@/lib/locale-server";
import { getPageMetadata } from "@/lib/seo";
import SubPageBanner from "@/components/shared/SubPageBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import StatsCounter from "@/components/home/StatsCounter";
import HimalayaStory from "@/components/home/HimalayaStory";
import { aboutContent } from "@/content/about";
import Image from "next/image";


export async function generateMetadata({ params }: LocalizedPageProps) { return getPageMetadata("about", await getPageLocale(params)); }

export default async function AboutPage({ params }: LocalizedPageProps) {
  const locale = await getPageLocale(params);
  const t = createTranslator(locale);
  return (
    <>
      <SubPageBanner title="About Us" breadcrumb="About" path="/about" locale={locale} />

      {/* Our Story Section */}
      <section className="py-8 md:py-10">
        <div className="section-container">
          <SectionHeader subtitle={t("Our Story")} title={t("From the Himalayas to Amsterdam")} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 mt-6 md:mt-8">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden min-h-[300px] md:min-h-[420px]">
                <Image
                  src="/images/interior/dining-room-1.webp"
                  alt={t("Himalayan Kitchen dining room")}
                  fill
                  sizes="(max-width: 1023px) 50vw, 25vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-lg overflow-hidden mt-8 min-h-[300px] md:min-h-[420px]">
                <Image
                  src="/images/interior/dining-room-2.webp"
                  alt={t("Restaurant ambiance")}
                  fill
                  sizes="(max-width: 1023px) 50vw, 25vw"
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
                  {t(paragraph)}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 md:py-10 bg-dark-cyan">
        <div className="section-container">
          <SectionHeader subtitle={t("What We Stand For")} title={t("Our Values")} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 md:mt-8">
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
                  {t(value.title)}
                </h3>
                <p className="font-manrope text-[14px] md:text-[15px] leading-[26px] text-white/60">
                  {t(value.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HimalayaStory locale={locale} />

      {/* Photo Strip */}
      <section className="py-8 md:py-10">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/interior/dining-room-3.webp", alt: "Cozy interior" },
              { src: "/images/hero/group_reservation.jpg", alt: "Guests sharing dinner at The Himalayan Kitchen" },
              { src: "/images/interior/wine-rack.webp", alt: "Wine selection" },
              { src: "/images/interior/exterior.webp", alt: "Restaurant exterior" },
            ].map((img, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden aspect-square">
                <Image
                  src={img.src}
                  alt={t(img.alt)}
                  fill
                  sizes="(max-width: 767px) 50vw, 25vw"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter locale={locale} />
    </>
  );
}
