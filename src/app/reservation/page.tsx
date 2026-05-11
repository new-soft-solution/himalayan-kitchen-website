import { Metadata } from "next";
import Script from "next/script";
import SubPageBanner from "@/components/shared/SubPageBanner";
import { restaurant } from "@/content/restaurant";

export const metadata: Metadata = {
  title: "Reserve a Table | The Himalayan Kitchen",
  description:
    "Book a table at The Himalayan Kitchen in Amsterdam. Reserve online for an authentic Nepalese and Indian dining experience.",
};

export default function ReservationPage() {
  return (
    <>
      <SubPageBanner title="Reserve a Table" breadcrumb="Reservation" />

      <section className="py-[60px] md:py-[100px]">
        <div className="section-container max-w-[800px]">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-satisfy text-[18px] md:text-[24px] text-primary mb-4">
              Book Your Experience
            </h2>
            <h3 className="font-jakarta font-semibold text-[28px] md:text-[40px] text-white mb-4">
              Reserve Your Table
            </h3>
            <p className="font-manrope text-[15px] md:text-[16px] text-white/60 leading-[28px] max-w-[550px] mx-auto">
              Select your preferred date, time, and party size below. We look forward
              to welcoming you to our {restaurant.seatingCapacity}-seat dining room.
            </p>
          </div>

          {/* FindATable Widget Container */}
          <div className="bg-dark-cyan-green rounded-lg p-6 md:p-10 border border-white/5">
            <div id="findatable-widget" />
          </div>

          {/* Alternative contact */}
          <div className="text-center mt-10">
            <p className="font-manrope text-[14px] text-white/50 mb-2">
              Prefer to book by phone?
            </p>
            <a
              href={`tel:${restaurant.phone}`}
              className="font-jakarta font-semibold text-[18px] text-primary hover:text-white transition-colors"
            >
              {restaurant.phone}
            </a>
          </div>
        </div>
      </section>

      <Script
        src="https://findatable.nl/js/find-a-table.js"
        data-access-key="findatable_3a78a1a1c6fe1ff516547669961775c84dd1f062"
        strategy="lazyOnload"
      />
    </>
  );
}
