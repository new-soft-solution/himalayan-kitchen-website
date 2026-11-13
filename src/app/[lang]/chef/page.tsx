import { createTranslator, type LocalizedPageProps } from "@/lib/i18n";
import { getPageLocale } from "@/lib/locale-server";
import { getPageMetadata } from "@/lib/seo";
import Image from "next/image";
import SubPageBanner from "@/components/shared/SubPageBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { chefProfile } from "@/content/chef";


export async function generateMetadata({ params }: LocalizedPageProps) { return getPageMetadata("chef", await getPageLocale(params)); }

export default async function ChefPage({ params }: LocalizedPageProps) {
  const locale = await getPageLocale(params);
  const t = createTranslator(locale);
  const paragraphs = chefProfile.longDescription.split("\n\n");

  return (
    <>
      <SubPageBanner title="Meet the Chef" breadcrumb="Chef" path="/chef" locale={locale} />

      <section className="py-8 md:py-10">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_minmax(0,1fr)] gap-7 lg:gap-12 items-center">
            {/* Chef Image */}
            <div className="w-full max-w-[300px] sm:max-w-[340px] mx-auto lg:mx-0">
              <div className="rounded-lg overflow-hidden bg-dark-cyan-green aspect-[4/5]">
                <Image
                  src={chefProfile.image!}
                  alt={chefProfile.name}
                  width={1122}
                  height={1402}
                  sizes="(max-width: 343px) calc(100vw - 44px), (max-width: 639px) 300px, 340px"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Chef Info */}
            <div className="max-w-[70ch]">
              <SectionHeader
                subtitle={t("Culinary Craftsmanship")}
                title={chefProfile.name}
                centered={false}
              />

              <p className="font-jost text-[16px] text-primary mb-6">
                {t(chefProfile.title)}
              </p>

              <div className="space-y-5">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-manrope text-[15px] md:text-[16px] leading-[28px] text-white/70"
                  >
                    {t(paragraph)}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Experience & Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="p-8 rounded-lg bg-dark-cyan-green border border-white/5">
              <h3 className="font-jakarta font-semibold text-[20px] md:text-[24px] text-white mb-4">{t("Experience")}</h3>
              <p className="font-manrope text-[15px] leading-[28px] text-white/60">
                {t(chefProfile.experience)}
              </p>
            </div>
            <div className="p-8 rounded-lg bg-dark-cyan-green border border-white/5">
              <h3 className="font-jakarta font-semibold text-[20px] md:text-[24px] text-white mb-4">{t("Philosophy")}</h3>
              <p className="font-manrope text-[15px] leading-[28px] text-white/60">
                {t(chefProfile.philosophy)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
