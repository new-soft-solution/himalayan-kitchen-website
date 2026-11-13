import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LocaleProvider from "@/components/layout/LocaleProvider";
import StructuredData from "@/components/shared/StructuredData";
import { getRestaurantSchema } from "@/lib/schema";
import { createTranslator, locales, type LocalizedPageProps } from "@/lib/i18n";
import { getPageLocale } from "@/lib/locale-server";
import { SITE_CONFIG } from "@/lib/constants";

const manrope = localFont({ src: "../fonts/Manrope.woff2", variable: "--font-manrope-var", display: "swap", weight: "200 800" });
const jakarta = localFont({ src: "../fonts/PlusJakartaSans.woff2", variable: "--font-jakarta-var", display: "swap", weight: "200 800" });
const jost = localFont({ src: "../fonts/Jost.woff2", variable: "--font-jost-var", display: "swap", weight: "100 900" });
const display = localFont({ src: "../fonts/CormorantGaramond.woff2", variable: "--font-display-var", display: "swap", weight: "300 700" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "The Himalayan Kitchen Amsterdam",
  applicationName: SITE_CONFIG.siteName,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function RootLayout({ children, params }: Readonly<LocalizedPageProps & { children: React.ReactNode }>) {
  const locale = await getPageLocale(params);
  const t = createTranslator(locale);
  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${manrope.variable} ${jakarta.variable} ${jost.variable} ${display.variable}`}>
      <body>
        <LocaleProvider locale={locale}>
          <a href="#main-content" className="skip-link">{t("Skip to content")}</a>
          <StructuredData data={getRestaurantSchema(locale)} />
          <Header />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer locale={locale} />
          <WhatsAppButton />
          <Script id="findatable-reservations" defer src="https://findatable.nl/js/find-a-table.js" data-access-key="findatable_3a78a1a1c6fe1ff516547669961775c84dd1f062" strategy="afterInteractive" />
        </LocaleProvider>
      </body>
    </html>
  );
}
