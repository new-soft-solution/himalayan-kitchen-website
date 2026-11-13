"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone, FiMapPin } from "react-icons/fi";
import { restaurant } from "@/content/restaurant";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { localizedPath } from "@/lib/i18n";
import OpeningHours from "@/components/shared/OpeningHours";
import FindATableCTA from "./FindATableCTA";
import HeaderNavigation from "./HeaderNavigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLocale, useTranslation } from "./LocaleProvider";

export default function Header() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const isOpen = openPath === pathname;
  const locale = useLocale();
  const t = useTranslation();

  function closeMobileMenu() {
    setOpenPath(null);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== "Escape") return;

    const details =
      (event.target as HTMLElement).closest<HTMLDetailsElement>(
        "details[open]",
      ) ||
      event.currentTarget.querySelector<HTMLDetailsElement>("details[open]");

    if (details) {
      details.open = false;
      details.querySelector("summary")?.focus();
      event.stopPropagation();
    } else if (isOpen) {
      closeMobileMenu();
      toggleRef.current?.focus();
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <div className="top-bar">
        <div className="section-container top-bar-inner">
          <a
            href={EXTERNAL_LINKS.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMapPin aria-hidden="true" /> {restaurant.address.street} ·
            Amsterdam Oud-West
          </a>
          <details className="header-hours desktop-hours">
            <summary>
              {t("Opening Hours")} <span aria-hidden="true">⌄</span>
            </summary>
            <OpeningHours locale={locale} />
          </details>
          <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`}>
            <FiPhone aria-hidden="true" /> {restaurant.phone}
          </a>
        </div>
      </div>
      <div className="section-container header-inner">
        <Link
          href={localizedPath("/", locale)}
          className="brand-link"
          aria-label="The Himalayan Kitchen"
        >
          <Image
            src="/images/logo.png"
            alt="The Himalayan Kitchen"
            width={180}
            height={70}
            sizes="180px"
            className="brand-logo"
          />
        </Link>
        <nav className="desktop-nav" aria-label={t("Main navigation")}>
          <HeaderNavigation layout="desktop" />
        </nav>
        <div className="header-actions">
          <LanguageSwitcher />
          <div className="header-order">
            <FindATableCTA size="sm" />
          </div>
          <button
            ref={toggleRef}
            type="button"
            className="mobile-toggle"
            aria-label={t(isOpen ? "Close menu" : "Open menu")}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setOpenPath(isOpen ? null : pathname)}
          >
            {isOpen ? <FiX size={25} /> : <FiMenu size={25} />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav section-container"
        hidden={!isOpen}
        aria-label={t("Main navigation")}
      >
        <HeaderNavigation layout="mobile" onNavigate={closeMobileMenu} />
        <details className="header-hours mobile-hours">
          <summary>
            {t("Opening Hours")} <span aria-hidden="true">⌄</span>
          </summary>
          <OpeningHours locale={locale} />
        </details>
        <FindATableCTA />
      </nav>
    </header>
  );
}
