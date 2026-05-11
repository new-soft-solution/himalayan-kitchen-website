import { Metadata } from "next";
import Image from "next/image";
import SubPageBanner from "@/components/shared/SubPageBanner";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata: Metadata = {
  title: "Gallery | The Himalayan Kitchen",
  description:
    "Browse photos of The Himalayan Kitchen — our cozy interior, authentic dishes, and warm ambiance in Amsterdam's Kinkerbuurt neighborhood.",
};

const galleryImages = [
  { src: "/images/interior/dining-room-1.webp", alt: "Himalayan Kitchen dining room", span: "col-span-2 row-span-2" },
  { src: "/images/food/food-spread.jpg", alt: "Nepalese and Indian food spread", span: "" },
  { src: "/images/food/momo.jpg", alt: "Traditional Nepali Momo", span: "" },
  { src: "/images/interior/dining-room-2.webp", alt: "Restaurant ambiance", span: "" },
  { src: "/images/interior/wine-rack.webp", alt: "Wine selection", span: "" },
  { src: "/images/food/tandoori.jpg", alt: "Tandoori dish", span: "col-span-2" },
  { src: "/images/interior/dining-room-3.webp", alt: "Cozy interior", span: "" },
  { src: "/images/interior/exterior.webp", alt: "Restaurant exterior", span: "" },
];

export default function GalleryPage() {
  return (
    <>
      <SubPageBanner title="Gallery" breadcrumb="Gallery" />

      <section className="py-[60px] md:py-[100px]">
        <div className="section-container">
          <SectionHeader
            subtitle="A Visual Journey"
            title="Our Restaurant Gallery"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-16">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden ${img.span} min-h-[200px] md:min-h-[250px]`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          {/* Drink images */}
          <div className="mt-8">
            <h3 className="font-jakarta font-semibold text-[20px] md:text-[24px] text-white mb-6 text-center">
              From the Bar
            </h3>
            <div className="grid grid-cols-3 gap-4 max-w-[600px] mx-auto">
              {[
                { src: "/images/drinks/khukuri-rum.jpg", alt: "Khukuri Rum from Nepal" },
                { src: "/images/drinks/bacardi.jpg", alt: "Bacardi Carta Blanca" },
                { src: "/images/drinks/joseph-guy.jpg", alt: "Joseph Guy V.S.O.P. Cognac" },
              ].map((img, index) => (
                <div key={index} className="rounded-lg overflow-hidden aspect-square">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
