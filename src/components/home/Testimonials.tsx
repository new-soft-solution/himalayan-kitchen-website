"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { testimonials } from "@/content/testimonials";
import { EXTERNAL_LINKS } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";

import { useLocale, useTranslation } from "@/components/layout/LocaleProvider";

export default function Testimonials() {
  const t = useTranslation();
  const locale = useLocale();
  return (
    <section className="testimonials py-8 md:py-10 overflow-hidden">
      <div className="section-container">
        <SectionHeader
          subtitle={t("Customer Reviews")}
          title={t("What Our Guests Say")}
        />

        <div className="mt-6 md:mt-8">
          <Swiper
            modules={[A11y, Pagination]}
            pagination={{ clickable: true }}
            a11y={{ paginationBulletMessage: locale === "nl" ? "Ga naar recensie {{index}}" : "Go to review {{index}}" }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="pb-14!"
          >
            {testimonials.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-dark-cyan-green rounded-lg p-6 md:p-8 h-full">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        size={16}
                        className={i < review.rating ? "text-amber" : "text-white/70"}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-manrope text-[14px] md:text-[15px] leading-[26px] text-white/80 mb-6">
                    &ldquo;{t(review.text)}&rdquo;
                  </p>

                  {locale === "nl" && <p className="text-xs text-white/70 mb-4">{t("Translated from English")}</p>}
                  {/* Reviewer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* Avatar placeholder */}
                      <div className="w-[45px] h-[45px] rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-jakarta font-bold text-[16px] text-primary">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-jakarta font-semibold text-[15px] text-white">
                          {review.name}
                        </h4>
                        {review.date && (
                          <p className="font-manrope text-[12px] text-white/70">
                            {review.date}
                          </p>
                        )}
                      </div>
                    </div>
                    {review.source === "Google" && (
                      <FcGoogle size={24} />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Link to Google Reviews */}
        <div className="text-center mt-4">
          <a
            href={EXTERNAL_LINKS.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-jost text-[15px] text-white/60 hover:text-primary transition-colors"
          >
            <FcGoogle size={18} />
            {t("See all reviews on Google")}
          </a>
        </div>
      </div>
    </section>
  );
}
