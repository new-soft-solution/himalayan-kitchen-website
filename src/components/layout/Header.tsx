"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiPhone, FiClock, FiChevronDown } from "react-icons/fi";
import { mainNavLinks } from "@/content/navigation";
import { restaurant } from "@/content/restaurant";
import { EXTERNAL_LINKS } from "@/lib/constants";
import FindATableCTA from "@/components/layout/FindATableCTA";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Header Bar */}
      <div className="bg-dark-cyan py-2 hidden md:block">
        <div className="section-container flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${restaurant.phone}`}
              className="flex items-center gap-2 font-jost text-sm text-white/80 hover:text-primary transition-colors"
            >
              <FiPhone className="text-primary" />
              {restaurant.phone}
            </a>
            <span className="flex items-center gap-2 font-jost text-sm text-white/80">
              <FiClock className="text-primary" />
              Tue-Fri: 16:30-22:00 | Sat-Sun: 16:00-22:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-jost text-sm text-white/80">
              {restaurant.address.street}, {restaurant.address.city}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`header w-full z-[999] transition-all duration-300 ${
          isSticky
            ? "sticky"
            : "bg-deep-teal"
        }`}
      >
        <div className="section-container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="The Himalayan Kitchen"
              width={180}
              height={60}
              className="h-[50px] md:h-[60px] w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-jost font-medium text-[16px] leading-[26px] transition-colors hover:text-primary ${
                  pathname === link.href ? "text-primary" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Book Now Button */}
          <div className="hidden lg:flex items-center gap-4">
            <FindATableCTA text="Book a Table" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-deep-teal border-t border-white/10">
            <nav className="section-container py-4 flex flex-col gap-2">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-jost font-medium text-[16px] py-3 px-4 rounded transition-colors ${
                    pathname === link.href
                      ? "text-primary bg-white/5"
                      : "text-white hover:text-primary hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <FindATableCTA text="Book a Table" className="mt-2" />
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
