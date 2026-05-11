"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { aboutContent } from "@/content/about";

export default function HimalayaStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const steps = aboutContent.himalayaToAmsterdam.steps;

  return (
    <section
      ref={sectionRef}
      className="py-[60px] md:py-[100px] bg-dark-cyan-green relative overflow-hidden"
    >
      {/* Decorative mountain silhouette background */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-10">
        <svg
          viewBox="0 0 1440 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 200V120L100 90L200 110L300 60L400 80L500 30L600 70L720 10L840 50L960 20L1080 60L1200 15L1320 45L1440 5V200H0Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Mandala decorative circle */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-10 right-[-100px] w-[300px] h-[300px] rounded-full border border-primary/10 pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-10 left-[-50px] w-[200px] h-[200px] rounded-full border border-primary/10 pointer-events-none"
      />

      <motion.div style={{ opacity }} className="section-container relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-satisfy font-normal text-[18px] md:text-[24px] text-primary mb-4">
            {aboutContent.himalayaToAmsterdam.subtitle}
          </h2>
          <h3 className="font-jakarta font-semibold text-[28px] md:text-[40px] lg:text-[50px] leading-[1.2] text-white">
            {aboutContent.himalayaToAmsterdam.title}
          </h3>
        </div>

        {/* Timeline Steps */}
        <div className="relative max-w-[800px] mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-[1px] top-0 bottom-0 w-[2px] bg-primary/20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex items-start gap-6 mb-10 md:mb-14 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse md:text-right"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[12px] md:left-1/2 md:-translate-x-1/2 w-[18px] h-[18px] rounded-full bg-primary border-4 border-deep-teal z-10" />

              {/* Content */}
              <div className={`ml-[50px] md:ml-0 md:w-[calc(50%-40px)] ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8"
              }`}>
                <span className="font-jost font-bold text-[13px] text-primary/60 uppercase tracking-wider">
                  Step {index + 1}
                </span>
                <h4 className="font-jakarta font-semibold text-[18px] md:text-[22px] text-white mt-1 mb-2">
                  {step.title}
                </h4>
                <p className="font-manrope text-[14px] md:text-[15px] text-white/60 leading-[26px]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
