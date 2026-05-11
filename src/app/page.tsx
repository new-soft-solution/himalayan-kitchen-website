import HeroBanner from "@/components/home/HeroBanner";
import OurRestaurant from "@/components/home/OurRestaurant";
import HimalayaStory from "@/components/home/HimalayaStory";
import FeaturedMenu from "@/components/home/FeaturedMenu";
import StatsCounter from "@/components/home/StatsCounter";
import FeaturedDishes from "@/components/home/FeaturedDishes";
import BookingCTA from "@/components/home/BookingCTA";
import Testimonials from "@/components/home/Testimonials";
import PhotoMarquee from "@/components/home/PhotoMarquee";
import SectionGap from "@/components/shared/SectionGap";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <SectionGap />
      <OurRestaurant />
      <HimalayaStory />
      <SectionGap />
      <FeaturedMenu />
      <StatsCounter />
      <SectionGap />
      <FeaturedDishes />
      <BookingCTA />
      <Testimonials />
      <PhotoMarquee />
    </>
  );
}
