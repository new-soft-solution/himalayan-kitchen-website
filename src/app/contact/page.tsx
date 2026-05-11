import { Metadata } from "next";
import SubPageBanner from "@/components/shared/SubPageBanner";
import GoogleMap from "@/components/shared/GoogleMap";
import FindATableCTA from "@/components/layout/FindATableCTA";
import { restaurant } from "@/content/restaurant";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact | The Himalayan Kitchen",
  description:
    "Contact The Himalayan Kitchen in Amsterdam. Visit us at Ten Katestraat 45H, call +31 20 262 3880, or book a table via FindATable.",
};

export default function ContactPage() {
  return (
    <>
      <SubPageBanner title="Contact Us" breadcrumb="Contact" />

      <section className="py-[60px] md:py-[100px]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-satisfy text-[18px] md:text-[24px] text-primary mb-4">
                Get In Touch
              </h2>
              <h3 className="font-jakarta font-semibold text-[28px] md:text-[36px] text-white mb-6">
                We&apos;d Love to Hear From You
              </h3>
              <p className="font-manrope text-[15px] text-white/60 leading-[28px] mb-8">
                Whether you have a question about our menu, want to make a reservation,
                or are planning a special event — we&apos;re here to help.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-lg bg-dark-cyan-green border border-white/5">
                  <div className="w-[50px] h-[50px] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-semibold text-[16px] text-white mb-1">Phone</h4>
                    <a
                      href={`tel:${restaurant.phone}`}
                      className="font-manrope text-[15px] text-white/60 hover:text-primary transition-colors"
                    >
                      {restaurant.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-lg bg-dark-cyan-green border border-white/5">
                  <div className="w-[50px] h-[50px] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-semibold text-[16px] text-white mb-1">Email</h4>
                    <a
                      href={`mailto:${restaurant.email}`}
                      className="font-manrope text-[15px] text-white/60 hover:text-primary transition-colors"
                    >
                      {restaurant.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-lg bg-dark-cyan-green border border-white/5">
                  <div className="w-[50px] h-[50px] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-semibold text-[16px] text-white mb-1">Address</h4>
                    <a
                      href={EXTERNAL_LINKS.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-manrope text-[15px] text-white/60 hover:text-primary transition-colors"
                    >
                      {restaurant.address.street}, {restaurant.address.postalCode} {restaurant.address.city}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-lg bg-dark-cyan-green border border-white/5">
                  <div className="w-[50px] h-[50px] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FiClock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-semibold text-[16px] text-white mb-1">Opening Hours</h4>
                    <div className="space-y-1">
                      {restaurant.openingHours.map((hours) => (
                        <div key={hours.day} className="flex gap-4 font-manrope text-[14px]">
                          <span className="text-white/60 w-[100px]">{hours.day}</span>
                          <span className={hours.isClosed ? "text-primary" : "text-white/80"}>
                            {hours.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <FindATableCTA />
                <a
                  href={EXTERNAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#25D366] rounded-md font-jost font-semibold text-[16px] text-white hover:bg-[#20bd5a] transition-colors"
                >
                  <FaWhatsapp size={18} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden min-h-[400px] lg:min-h-0">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
