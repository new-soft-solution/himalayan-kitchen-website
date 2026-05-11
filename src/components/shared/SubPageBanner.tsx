import Link from "next/link";

interface SubPageBannerProps {
  title: string;
  breadcrumb?: string;
}

export default function SubPageBanner({ title, breadcrumb }: SubPageBannerProps) {
  return (
    <section className="relative bg-dark-cyan-green py-[60px] md:py-[80px] lg:py-[100px] overflow-hidden">
      {/* Decorative mountain silhouette */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none opacity-5">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 120V80L180 50L360 70L540 20L720 55L900 10L1080 45L1260 5L1440 30V120H0Z" fill="white" />
        </svg>
      </div>

      {/* Mandala accent */}
      <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-[250px] h-[250px] rounded-full border border-primary/5 pointer-events-none" />

      <div className="section-container relative z-10 text-center">
        <h1 className="font-jakarta font-bold text-[32px] md:text-[42px] lg:text-[55px] text-white mb-4">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-2 font-jost text-[15px]">
          <Link href="/" className="text-white/60 hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-primary">/</span>
          <span className="text-primary">{breadcrumb || title}</span>
        </div>
      </div>
    </section>
  );
}
