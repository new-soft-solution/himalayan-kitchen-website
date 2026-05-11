"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { heroSlides } from "@/content/hero";
import { EXTERNAL_LINKS } from "@/lib/constants";

export default function HeroBanner() {
  return (
    <section className="hero-slider relative">
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        effect="fade"
        loop
        className="w-full h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-deep-teal/90 via-deep-teal/70 to-transparent" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="section-container">
                  <div className="max-w-[650px]">
                    <h3 className="banner-subtitle font-satisfy font-normal text-[16px] md:text-[20px] lg:text-[24px] text-primary mb-3">
                      {slide.subtitle}
                    </h3>
                    <h1 className="banner-title font-jakarta font-bold text-[28px] md:text-[42px] lg:text-[55px] xl:text-[65px] leading-[1.15] text-white mb-4 md:mb-6">
                      {slide.title}
                    </h1>
                    <p className="banner-desc font-manrope text-[14px] md:text-[16px] lg:text-[18px] leading-[28px] text-white/80 mb-6 md:mb-8 max-w-[500px]">
                      {slide.description}
                    </p>
                    <div className="banner-btn flex flex-wrap gap-4">
                      {slide.buttonLink.startsWith("http") ? (
                        <a
                          href={slide.buttonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn inline-flex items-center justify-center gap-2 bg-primary px-7 md:px-[46px] rounded-md font-jost font-semibold text-[14px] md:text-[18px] leading-[50px] md:leading-[58px] text-white hover:bg-primary-dark transition-colors"
                        >
                          <span className="btn__inner">{slide.buttonText}</span>
                        </a>
                      ) : (
                        <Link
                          href={slide.buttonLink}
                          className="btn inline-flex items-center justify-center gap-2 bg-primary px-7 md:px-[46px] rounded-md font-jost font-semibold text-[14px] md:text-[18px] leading-[50px] md:leading-[58px] text-white hover:bg-primary-dark transition-colors"
                        >
                          <span className="btn__inner">{slide.buttonText}</span>
                        </Link>
                      )}
                      <Link
                        href="/menu"
                        className="btn inline-flex items-center justify-center gap-2 border-2 border-white/30 px-7 md:px-[46px] rounded-md font-jost font-semibold text-[14px] md:text-[18px] leading-[46px] md:leading-[54px] text-white hover:border-primary hover:text-primary transition-colors"
                      >
                        <span className="btn__inner">View Menu</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative mountain silhouette at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80V60L120 45L240 55L360 35L480 50L600 25L720 40L840 20L960 38L1080 15L1200 30L1320 10L1440 25V80H0Z"
            fill="#102B2A"
          />
        </svg>
      </div>
    </section>
  );
}
