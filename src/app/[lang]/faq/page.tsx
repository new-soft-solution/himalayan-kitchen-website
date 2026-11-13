import { createTranslator, type LocalizedPageProps } from "@/lib/i18n";
import { getPageLocale } from "@/lib/locale-server";
import { getPageMetadata } from "@/lib/seo";
import SubPageBanner from "@/components/shared/SubPageBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import Accordion from "@/components/shared/Accordion";
import { faqItems } from "@/content/faq";


export async function generateMetadata({ params }: LocalizedPageProps) { return getPageMetadata("faq", await getPageLocale(params)); }

export default async function FAQPage({ params }: LocalizedPageProps) {
  const locale = await getPageLocale(params);
  const t = createTranslator(locale);
  return (
    <>
      <SubPageBanner title="FAQ" breadcrumb="FAQ" path="/faq" locale={locale} />

      <section className="py-8 md:py-10">
        <div className="section-container max-w-[800px]">
          <SectionHeader
            subtitle={t("Common Questions")}
            title={t("Frequently Asked Questions")}
          />

          <div className="mt-6 md:mt-8">
            <Accordion items={faqItems.map((item) => ({ question: t(item.question), answer: t(item.answer) }))} />
          </div>
        </div>
      </section>
    </>
  );
}
