import FindATableCTA from "@/components/layout/FindATableCTA";
import { restaurant } from "@/content/restaurant";

export default function BookingCTA() {
  return (
    <section className="py-[60px] md:py-[100px] bg-cyan relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 70px)`,
        }} />
      </div>

      <div className="section-container relative z-10 text-center">
        <h2 className="font-satisfy font-normal text-[18px] md:text-[24px] text-primary mb-4">
          Reserve Your Experience
        </h2>
        <h3 className="font-jakarta font-semibold text-[28px] md:text-[40px] lg:text-[50px] leading-[1.2] text-white mb-4 md:mb-6">
          Book Your Table Today
        </h3>
        <p className="font-manrope text-[15px] md:text-[18px] text-white/70 max-w-[600px] mx-auto mb-8 md:mb-12 leading-[28px]">
          Experience authentic Himalayan flavors in our cozy {restaurant.seatingCapacity}-seat
          dining room. Reserve through FindATable for the best experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <FindATableCTA text="Reserve a Table" size="lg" />
          <a
            href={`tel:${restaurant.phone}`}
            className="btn inline-flex items-center justify-center gap-2 border-2 border-white/30 px-10 py-4 rounded-md font-jost font-semibold text-[18px] text-white hover:border-primary hover:text-primary transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Us
          </a>
        </div>

        {/* Opening Hours Quick View */}
        <div className="mt-10 md:mt-14 inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-10 px-8 py-5 rounded-lg bg-deep-teal/50 border border-white/10">
          <div className="text-center sm:text-left">
            <p className="font-jost text-[13px] text-white/50 mb-1">Tue — Fri</p>
            <p className="font-jakarta font-semibold text-[16px] text-white">16:30 — 22:00</p>
          </div>
          <div className="hidden sm:block w-[1px] h-[40px] bg-white/10" />
          <div className="text-center sm:text-left">
            <p className="font-jost text-[13px] text-white/50 mb-1">Sat — Sun</p>
            <p className="font-jakarta font-semibold text-[16px] text-white">16:00 — 22:00</p>
          </div>
          <div className="hidden sm:block w-[1px] h-[40px] bg-white/10" />
          <div className="text-center sm:text-left">
            <p className="font-jost text-[13px] text-white/50 mb-1">Monday</p>
            <p className="font-jakarta font-semibold text-[16px] text-primary">Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
