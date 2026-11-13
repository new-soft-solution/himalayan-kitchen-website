import HeroBanner from "@/components/home/HeroBanner";
import LocalDining from "@/components/home/LocalDining";
import OurRestaurant from "@/components/home/OurRestaurant";
import HimalayaStory from "@/components/home/HimalayaStory";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import StatsCounter from "@/components/home/StatsCounter";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import BookingCTA from "@/components/home/BookingCTA";
import Testimonials from "@/components/home/Testimonials";
import PhotoMarquee from "@/components/home/PhotoMarquee";
import { getPageMetadata } from "@/lib/seo";
import { getPageLocale } from "@/lib/locale-server";
import type { LocalizedPageProps } from "@/lib/i18n";

export async function generateMetadata({ params }: LocalizedPageProps) { return getPageMetadata("home", await getPageLocale(params)); }

export default async function Home({ params }: LocalizedPageProps) {
  const locale = await getPageLocale(params);
  return <><HeroBanner /><OurRestaurant locale={locale} /><HimalayaStory locale={locale} /><FeaturedMenu locale={locale} /><StatsCounter locale={locale} /><FeaturedDishes locale={locale} /><BookingCTA locale={locale} /><Testimonials /><LocalDining locale={locale} /><PhotoMarquee locale={locale} /></>;
}
