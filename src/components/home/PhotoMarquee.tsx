"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { marqueePhotos } from "@/content/photography";
import { createTranslator, type LocaleProps } from "@/lib/i18n";
import { useMotionPreference } from "@/lib/use-motion-preference";

export default function PhotoMarquee({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  const viewport = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const allowMotion = useMotionPreference();
  const moving = allowMotion && !paused && !hovered && !focused && !touched;

  useEffect(() => {
    const element = viewport.current;
    if (!moving || !element) return;
    let frame = 0;
    let previous = 0;
    let position = element.scrollLeft;
    let direction = 1;

    function advance(time: number) {
      if (!element) return;
      const elapsed = previous ? Math.min(time - previous, 64) : 0;
      previous = time;
      const limit = Math.max(0, element.scrollWidth - element.clientWidth);
      position += elapsed * 0.035 * direction;
      // Reverse at each end so every photograph is rendered only once.
      if (position >= limit) { position = limit; direction = -1; }
      if (position <= 0) { position = 0; direction = 1; }
      element.scrollLeft = position;
      frame = requestAnimationFrame(advance);
    }

    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame);
      previous = 0;
      position = element.scrollLeft;
      if (entry.isIntersecting) frame = requestAnimationFrame(advance);
    });
    observer.observe(element);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [moving]);

  return (
    <section id="food-marquee" className="py-6 md:py-8 overflow-hidden">
      <div ref={viewport} className="photo-marquee" tabIndex={0} role="region" aria-label={t("Our Food Gallery")} data-motion={allowMotion} onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }} onPointerLeave={(event) => { if (event.pointerType === "mouse") setHovered(false); }} onTouchStart={() => setTouched(true)} onTouchEnd={() => setTouched(false)} onTouchCancel={() => setTouched(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
        <div className="marquee-track">
          <div className="marquee-group">
            {marqueePhotos.map((photo) => <div key={photo.src} className="marquee-image"><Image src={photo.src} alt={t(photo.alt)} fill unoptimized sizes="(max-width: 767px) 250px, 320px" className="object-contain" /></div>)}
          </div>
        </div>
      </div>
      {allowMotion && <div className="section-container marquee-controls"><button type="button" className="button button-outline button-sm" aria-pressed={paused} onClick={() => setPaused(!paused)}>{t(paused ? "Resume gallery" : "Pause gallery")}</button></div>}
    </section>
  );
}
