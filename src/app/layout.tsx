import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Jost,
  Satisfy,
  Manrope,
  Poppins,
} from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { getRestaurantSchema, getLocalBusinessSchema } from "@/lib/schema";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-var",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const jost = Jost({
  variable: "--font-jost-var",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const satisfy = Satisfy({
  variable: "--font-satisfy-var",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope-var",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins-var",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "The Himalayan Kitchen | Authentic Nepalese & Indian Restaurant Amsterdam",
    template: "%s | The Himalayan Kitchen",
  },
  description:
    "Authentic Nepalese and Indian restaurant in Amsterdam's Kinkerbuurt neighborhood. Serving flavorful dishes made with pure ingredients since 2014. Reserve your table today.",
  keywords: [
    "Nepalese restaurant Amsterdam",
    "Indian restaurant Amsterdam",
    "Himalayan Kitchen",
    "Nepal food Amsterdam",
    "best curry Amsterdam",
    "momo Amsterdam",
    "tandoori Amsterdam",
    "Kinkerbuurt restaurant",
    "Ten Katestraat restaurant",
  ],
  authors: [{ name: "The Himalayan Kitchen" }],
  creator: "The Himalayan Kitchen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://himalayankitchen.nl",
    siteName: "The Himalayan Kitchen",
    title: "The Himalayan Kitchen | Authentic Nepalese & Indian Restaurant Amsterdam",
    description:
      "Authentic Nepalese and Indian restaurant in Amsterdam's Kinkerbuurt neighborhood. Since 2014.",
    images: [
      {
        url: "/images/food/food-spread.jpg",
        width: 1200,
        height: 630,
        alt: "The Himalayan Kitchen - Authentic Nepalese & Indian Cuisine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Himalayan Kitchen",
    description: "Authentic Nepalese & Indian Cuisine in Amsterdam",
  },
  metadataBase: new URL("https://himalayankitchen.nl"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jost.variable} ${satisfy.variable} ${manrope.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-deep-teal text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getRestaurantSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Script
          src="https://findatable.nl/js/find-a-table.js"
          data-access-key="findatable_3a78a1a1c6fe1ff516547669961775c84dd1f062"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
