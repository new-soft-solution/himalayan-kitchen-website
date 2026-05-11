"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { testimonials } from "@/content/testimonials";
import { EXTERNAL_LINKS } from "@/lib/constants";
import SectionHeader from "@/components/shared/SectionHeader";

export default function Testimonials() {
  return (
    <section className="testimonials py-[60px] md:py-[100px] overflow-hidden">
      <div className="section-container">
        <SectionHeader
          subtitle="Customer Reviews"
          title="What Our Guests Say"
        />

        <div className="mt-10 md:mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="pb-14"
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
                        className={i < review.rating ? "text-amber" : "text-white/20"}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-manrope text-[14px] md:text-[15px] leading-[26px] text-white/80 mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>

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
                          <p className="font-manrope text-[12px] text-white/40">
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
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
