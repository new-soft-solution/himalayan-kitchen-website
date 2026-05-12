import { Metadata } from "next";
import Image from "next/image";
import SubPageBanner from "@/components/shared/SubPageBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { chefProfile } from "@/content/chef";

export const metadata: Metadata = {
  title: "Meet the Chef | The Himalayan Kitchen",
  description:
    "Meet Ram Lama — the head chef of The Himalayan Kitchen. A passionate chef dedicated to authentic Himalayan flavors in Amsterdam.",
};

export default function ChefPage() {
  const paragraphs = chefProfile.longDescription.split("\n\n");

  return (
    <>
      <SubPageBanner title="Meet the Chef" breadcrumb="Chef" />

      <section className="py-[60px] md:py-[100px]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Chef Image */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden bg-dark-cyan-green aspect-[3/4]">
                <Image
                  src={chefProfile.image!}
                  alt={chefProfile.name}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-[120px] h-[120px] rounded-full border-2 border-primary/20 pointer-events-none hidden md:block" />
            </div>

            {/* Chef Info */}
            <div>
              <SectionHeader
                subtitle="The Heart Behind the Kitchen"
                title={chefProfile.name}
                centered={false}
              />

              <p className="font-jost text-[16px] text-primary mb-6">
                {chefProfile.title}
              </p>

              <div className="space-y-5">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="font-manrope text-[15px] md:text-[16px] leading-[28px] text-white/70"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Experience & Philosophy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="p-8 rounded-lg bg-dark-cyan-green border border-white/5">
              <h3 className="font-jakarta font-semibold text-[20px] md:text-[24px] text-white mb-4">
                Experience
              </h3>
              <p className="font-manrope text-[15px] leading-[28px] text-white/60">
                {chefProfile.experience}
              </p>
            </div>
            <div className="p-8 rounded-lg bg-dark-cyan-green border border-white/5">
              <h3 className="font-jakarta font-semibold text-[20px] md:text-[24px] text-white mb-4">
                Philosophy
              </h3>
              <p className="font-manrope text-[15px] leading-[28px] text-white/60">
                {chefProfile.philosophy}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
