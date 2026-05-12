import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { restaurant } from "@/content/restaurant";
import { footerQuickLinks, footerMenuLinks } from "@/content/navigation";
import { EXTERNAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-cyan-green">
      {/* Main Footer */}
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.png"
                alt="The Himalayan Kitchen"
                width={180}
                height={60}
                className="h-[50px] w-auto"
              />
            </Link>
            <p className="font-manrope text-[15px] leading-[28px] text-white/70 mb-6">
              {restaurant.shortDescription}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${restaurant.phone}`}
                className="flex items-center gap-3 font-jost text-[15px] text-white/70 hover:text-primary transition-colors"
              >
                <FiPhone className="text-primary flex-shrink-0" />
                {restaurant.phone}
              </a>
              <a
                href={`mailto:${restaurant.email}`}
                className="flex items-center gap-3 font-jost text-[15px] text-white/70 hover:text-primary transition-colors"
              >
                <FiMail className="text-primary flex-shrink-0" />
                {restaurant.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-jakarta font-semibold text-[20px] text-white mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-jost text-[15px] text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={EXTERNAL_LINKS.findATable}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jost text-[15px] text-white/70 hover:text-primary transition-colors"
                >
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Our Menu */}
          <div>
            <h4 className="font-jakarta font-semibold text-[20px] text-white mb-6">
              Our Menu
            </h4>
            <ul className="flex flex-col gap-3">
              {footerMenuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-jost text-[15px] text-white/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-jakarta font-semibold text-[20px] text-white mb-6">
              Opening Hours
            </h4>
            <ul className="flex flex-col gap-3">
              {restaurant.openingHours.map((slot) => (
                <li
                  key={slot.day}
                  className="flex justify-between font-jost text-[15px]"
                >
                  <span className={slot.isClosed ? "text-white/40" : "text-white/70"}>
                    {slot.day}
                  </span>
                  <span
                    className={
                      slot.isClosed ? "text-primary/60" : "text-primary"
                    }
                  >
                    {slot.hours}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-start gap-3">
              <FiMapPin className="text-primary flex-shrink-0 mt-1" />
              <p className="font-jost text-[14px] text-white/70">
                {restaurant.address.street}
                <br />
                {restaurant.address.postalCode} {restaurant.address.city}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-jost text-[14px] text-white/50">
            &copy; {currentYear} {restaurant.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={EXTERNAL_LINKS.findATable}
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost text-[14px] text-white/50 hover:text-primary transition-colors"
            >
              Powered by FindATable
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
