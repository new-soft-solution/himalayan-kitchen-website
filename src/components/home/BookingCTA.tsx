import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { createTranslator, localizedPath, type LocaleProps } from "@/lib/i18n";

export default function BookingCTA({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  return (
    <section className="booking-section">
      <div className="section-container booking-grid">
        <div>
          <SectionHeader subtitle={t("Reservations & Takeaway")} title={t("Enjoy the Himalayas, Your Way")} centered={false} />
          <p>{t("Join us for dinner in our cozy 32-seat dining room, or enjoy your favourite dishes at home. Reserve a table for a relaxed evening in Amsterdam Oud-West, or order online for takeaway.")}</p>
        </div>
        <div className="booking-actions">
          <a className="button" href={EXTERNAL_LINKS.findATable} target="_blank" rel="noopener noreferrer" data-action="reserve">{t("Reserve a Table")} <span aria-hidden="true">↗</span></a>
          <a className="button button-outline" href={EXTERNAL_LINKS.orderPickup} target="_blank" rel="noopener noreferrer" data-action="order">{t("Order Takeaway")} <span aria-hidden="true">↗</span></a>
          <Link className="button button-outline" href={localizedPath("/menu", locale)}>{t("View Menu")} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
