import { createTranslator, type LocalizedPageProps } from "@/lib/i18n";
import { getPageLocale } from "@/lib/locale-server";
import { getPageMetadata } from "@/lib/seo";
import SubPageBanner from "@/components/shared/SubPageBanner";
import GoogleMap from "@/components/shared/GoogleMap";
import FindATableCTA from "@/components/layout/FindATableCTA";
import { restaurant } from "@/content/restaurant";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";


export async function generateMetadata({ params }: LocalizedPageProps) { return getPageMetadata("contact", await getPageLocale(params)); }

export default async function ContactPage({ params }: LocalizedPageProps) {
  const locale = await getPageLocale(params);
  const t = createTranslator(locale);
  return (
    <>
      <SubPageBanner title="Contact Us" breadcrumb="Contact" path="/contact" locale={locale} />

      <section className="py-8 md:py-10">
        <div className="section-container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2 className="font-satisfy text-[18px] md:text-[24px] text-primary mb-4">
                {t("Get In Touch")}
              </h2>
              <h3 className="font-jakarta font-semibold text-[28px] md:text-[36px] text-white mb-6">
                {t("We’d Love to Hear From You")}
              </h3>
              <p className="font-manrope text-[15px] text-white/60 leading-[28px] mb-8">
                {t("Whether you have a question about our menu, want to make a reservation, or are planning a special event — we’re here to help.")}
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-lg bg-dark-cyan-green border border-white/5">
                  <div className="w-[50px] h-[50px] rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-semibold text-[16px] text-white mb-1">{t("Phone")}</h4>
                    <a
                      href={`tel:${restaurant.phone.replace(/\s/g, "")}`}
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
                    <h4 className="font-jakarta font-semibold text-[16px] text-white mb-1">{t("Email")}</h4>
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
                    <h4 className="font-jakarta font-semibold text-[16px] text-white mb-1">{t("Address")}</h4>
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


              </div>

              <div className="mt-7"><h2 className="text-primary mb-2">{t("In the heart of Oud-West")}</h2><p className="text-sm text-white/75">{t("Enjoy an inviting Nepalese or Indian dinner near FilmHallen. Let our team know your film time when ordering.")}</p><a href={EXTERNAL_LINKS.googleMapsLink} target="_blank" rel="noopener noreferrer" className="button button-outline mt-4">{t("Directions")}</a></div>

              <p className="reservation-note mt-6">{t("For table reservations, use the Find A Table widget on this page.")}</p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <FindATableCTA />
                <a
                  href={EXTERNAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#147940] rounded-md font-jost font-semibold text-[16px] text-white hover:bg-[#176e3f] transition-colors"
                >
                  <FaWhatsapp size={18} />{t("WhatsApp Us")}</a>
              </div>
            </div>

            {/* Google Map */}
            <div className="contact-map">
              <GoogleMap locale={locale} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
