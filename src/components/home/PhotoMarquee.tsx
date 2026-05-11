"use client";

import Image from "next/image";

const marqueeImages = [
  { src: "/images/interior/dining-room-1.webp", alt: "Himalayan Kitchen dining room" },
  { src: "/images/food/food-spread.jpg", alt: "Nepalese and Indian food spread" },
  { src: "/images/interior/dining-room-2.webp", alt: "Restaurant ambiance" },
  { src: "/images/food/momo.jpg", alt: "Traditional Nepali Momo" },
  { src: "/images/interior/dining-room-3.webp", alt: "Cozy interior" },
  { src: "/images/food/tandoori.jpg", alt: "Tandoori dish" },
  { src: "/images/interior/exterior.webp", alt: "Restaurant exterior" },
  { src: "/images/interior/wine-rack.webp", alt: "Wine selection" },
];

export default function PhotoMarquee() {
  // Duplicate for seamless loop
  const allImages = [...marqueeImages, ...marqueeImages];

  return (
    <section className="py-[40px] md:py-[60px] overflow-hidden">
      <div className="marquee-slider flex gap-4">
        {allImages.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[250px] md:w-[320px] h-[180px] md:h-[220px] rounded-lg overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={320}
              height={220}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
