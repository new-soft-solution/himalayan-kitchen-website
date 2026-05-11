"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/content/stats";

export default function StatsCounter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  function animateCounters() {
    const counters = document.querySelectorAll(".counter-value");
    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute("data-target") || "0");
      const isDecimal = target % 1 !== 0;
      const duration = 2000;
      const startTime = performance.now();

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;

        counter.textContent = isDecimal
          ? current.toFixed(1)
          : Math.floor(current).toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    });
  }

  return (
    <section
      ref={sectionRef}
      className="py-[60px] md:py-[80px] bg-cyan relative overflow-hidden"
    >
      {/* Decorative mandala pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-white/10 rounded-full" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="counter-value font-jakarta font-bold text-[36px] md:text-[48px] lg:text-[60px] text-white"
                  data-target={stat.value}
                >
                  0
                </span>
                {stat.suffix && (
                  <span className="font-jakarta font-bold text-[24px] md:text-[36px] text-primary">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <p className="font-manrope font-medium text-[13px] md:text-[15px] lg:text-[16px] text-primary mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
