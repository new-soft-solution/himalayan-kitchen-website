"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, EffectFade, Autoplay } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import { heroContent, heroSlides } from "@/content/hero";
import { localizedPath } from "@/lib/i18n";
import { useMotionPreference } from "@/lib/use-motion-preference";
import { useLocale, useTranslation } from "@/components/layout/LocaleProvider";
import FindATableCTA from "@/components/layout/FindATableCTA";

export default function HeroBanner() {
  const locale = useLocale();
  const t = useTranslation();
  const [swiper, setSwiper] = useState<SwiperInstance>();
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const allowMotion = useMotionPreference();
  const currentSlide = heroSlides[activeSlide];
  const playing = allowMotion && !paused && currentSlide.kind === "video";

  useEffect(() => {
    const element = video.current;
    if (!element) return;
    if (playing) void element.play().catch(() => setPaused(true));
    else element.pause();
  }, [playing]);

  useEffect(() => {
    if (!swiper || swiper.destroyed) return;
    if (allowMotion && !paused) swiper.autoplay.start();
    else swiper.autoplay.stop();
    return () => { if (!swiper.destroyed) swiper.autoplay.stop(); };
  }, [swiper, allowMotion, paused]);

  return (
    <section className="hero-slider template-hero" aria-label={t("Restaurant highlights")} aria-roledescription={t("Carousel")} data-motion={allowMotion}>
      <div className="hero-background" aria-hidden="true">
        <Swiper modules={[A11y, Keyboard, EffectFade, Autoplay]} autoplay={{ delay: 7800, disableOnInteraction: false, pauseOnMouseEnter: true }} speed={1100} lazyPreloadPrevNext={1} keyboard={{ onlyInViewport: true }} effect="fade" fadeEffect={{ crossFade: true }} onSwiper={setSwiper} onSlideChange={(instance) => setActiveSlide(instance.realIndex)} a11y={{ enabled: false }} loop>
          {heroSlides.map((slide, index) => <SwiperSlide key={slide.image} data-swiper-autoplay={slide.kind === "image" ? 12000 : 7800}>
            <Image src={slide.image} alt="" fill unoptimized={slide.kind === "image"} sizes="100vw" className="hero-photo" loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : "auto"} />
            {slide.kind === "video" && allowMotion && <video ref={video} className="hero-video" autoPlay={playing} muted loop playsInline preload="none" tabIndex={-1} poster={slide.image}>
              <source src="/images/hero/optimized/restaurant-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
              <source src="/images/hero/optimized/restaurant-desktop.mp4" type="video/mp4" />
            </video>}
          </SwiperSlide>)}
        </Swiper>
      </div>
      <div className="hero-shade" />
      <div className="section-container hero-content">
        <p className="hero-subtitle">{t(heroContent.eyebrow)}</p>
        <div className="hero-copy-stack">{heroSlides.map((slide, index) => {
          const active = index === activeSlide;
          const Heading = active ? "h1" : "p";
          return <div key={slide.image} className="hero-slide-copy" data-kind={slide.kind} aria-hidden={!active} inert={!active}>
            <Heading className="hero-title">{t(slide.title)}</Heading>
            <div className="hero-slide-intro">
              {slide.featuredDish && <p className="hero-featured-dish">{t(slide.featuredDish)}</p>}
              {slide.subtitle && <p className="hero-slogan">{t(slide.subtitle)}</p>}
            </div>
            <p className="hero-description">{t(slide.description)}</p>
            <div className="hero-slide-highlights">
              {slide.promotion && <p className="hero-promotion">{t(slide.promotion)}</p>}
              {slide.locationHighlight && <p className="hero-dish-location">{t(slide.locationHighlight)}</p>}
            </div>
          </div>;
        })}</div>
        <div className="button-row"><FindATableCTA /><Link href={localizedPath("/menu", locale)} className="button button-outline">{t("View Menu")} <span aria-hidden="true">↗</span></Link></div>
        <p className="hero-location">{t("Since 2014")} <span aria-hidden="true">·</span> Ten Katestraat 45H <span aria-hidden="true">·</span> {t("Dine in & takeaway")}</p>
        <div className="hero-controls">
          <div className="hero-navigation"><button type="button" aria-label={t("Previous slide")} onClick={() => swiper?.slidePrev()} disabled={!swiper}>←</button><button type="button" aria-label={t("Next slide")} onClick={() => swiper?.slideNext()} disabled={!swiper}>→</button><span className="hero-counter" aria-hidden="true"><strong>{String(activeSlide + 1).padStart(2, "0")}</strong> / {String(heroSlides.length).padStart(2, "0")}</span></div>
          <div className="hero-pagination" role="group" aria-label={t("Choose a slide")}>
            {heroSlides.map((slide, index) => <button key={slide.image} type="button" aria-label={`${t("Show slide")}: ${t(slide.title)}`} aria-pressed={activeSlide === index} onClick={() => swiper?.slideToLoop(index)} disabled={!swiper}><span /></button>)}
          </div>
          {allowMotion && <button type="button" className="video-toggle slideshow-toggle" aria-label={t(paused ? "Play slideshow" : "Pause slideshow")} aria-pressed={paused} onClick={() => setPaused(!paused)}><span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span></button>}
        </div>
        <p className="sr-only" role="status" aria-live={allowMotion && !paused ? "off" : "polite"}>{t(currentSlide.title)} {t(currentSlide.description)}</p>
      </div>
      <svg className="hero-mountains" viewBox="0 0 1440 80" fill="none" aria-hidden="true" preserveAspectRatio="none"><path d="M0 80V60L120 45L240 55L360 35L480 50L600 25L720 40L840 20L960 38L1080 15L1200 30L1320 10L1440 25V80H0Z" fill="currentColor" /></svg>
    </section>
  );
}
