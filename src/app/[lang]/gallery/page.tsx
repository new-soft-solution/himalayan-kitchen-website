import { createTranslator, type LocalizedPageProps } from "@/lib/i18n";
import { getPageLocale } from "@/lib/locale-server";
import { getPageMetadata } from "@/lib/seo";
import { galleryPhotos, barPhotos } from "@/content/photography";
import Image from "next/image";
import SubPageBanner from "@/components/shared/SubPageBanner";
import SectionHeader from "@/components/shared/SectionHeader";

export async function generateMetadata({ params }: LocalizedPageProps) { return getPageMetadata("gallery", await getPageLocale(params)); }

export default async function GalleryPage({ params }: LocalizedPageProps) {
  const locale = await getPageLocale(params);
  const t = createTranslator(locale);
  return (
    <>
      <SubPageBanner title="Gallery" breadcrumb="Gallery" path="/gallery" locale={locale} />
      <section className="py-8 md:py-10">
        <div className="section-container">
          <SectionHeader subtitle={t("A Visual Journey")} title={t("Our Restaurant Gallery")} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 md:mt-8">
            {galleryPhotos.map((photo) => (
              <div key={photo.src} className={`gallery-tile ${photo.span}`}>
                <Image src={photo.src} alt={t(photo.alt)} fill sizes={photo.span.includes("col-span-2") ? "(max-width: 767px) 100vw, 50vw" : "(max-width: 767px) 50vw, 25vw"} />
              </div>
            ))}
          </div>
          <div className="mt-10">
            <h3 className="font-jakarta font-semibold text-xl md:text-2xl text-white mb-6 text-center">{t("From the Bar")}</h3>
            <div className="grid grid-cols-3 gap-4 max-w-[600px] mx-auto">
              {barPhotos.map((photo) => <div key={photo.src} className="gallery-bottle"><Image src={photo.src} alt={t(photo.alt)} fill sizes="(max-width: 767px) 30vw, 180px" /></div>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
