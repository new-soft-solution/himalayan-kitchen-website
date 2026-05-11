import { Metadata } from "next";
import SubPageBanner from "@/components/shared/SubPageBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import Accordion from "@/components/shared/Accordion";
import { faqItems } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ | The Himalayan Kitchen",
  description:
    "Find answers to common questions about The Himalayan Kitchen — reservations, opening hours, dietary options, spice levels, takeaway, and more.",
};

export default function FAQPage() {
  return (
    <>
      <SubPageBanner title="FAQ" breadcrumb="FAQ" />

      <section className="py-[60px] md:py-[100px]">
        <div className="section-container max-w-[800px]">
          <SectionHeader
            subtitle="Common Questions"
            title="Frequently Asked Questions"
          />

          <div className="mt-10 md:mt-14">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
    </>
  );
}
