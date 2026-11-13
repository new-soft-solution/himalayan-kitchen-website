"use client";
import Link from "next/link";

import { useLocale, useTranslation } from "@/components/layout/LocaleProvider";
import { localizedPath } from "@/lib/i18n";

export default function NotFound() {
  const t = useTranslation();
  const locale = useLocale();
  return (
    <section className="py-[100px] md:py-[150px]">
      <div className="section-container text-center">
        <h1 className="font-jakarta font-bold text-[80px] md:text-[120px] text-primary mb-4">
          404
        </h1>
        <h2 className="font-jakarta font-semibold text-[24px] md:text-[32px] text-white mb-4">
          {t("Page Not Found")}
        </h2>
        <p className="font-manrope text-[15px] text-white/60 max-w-[400px] mx-auto mb-8">
          {t("The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.")}
        </p>
        <Link
          href={localizedPath("/", locale)}
          className="inline-flex items-center justify-center gap-2 bg-primary rounded-md font-jost font-semibold text-deep-teal px-7 py-3 text-[16px] hover:bg-primary-dark transition-colors"
        >
          {t("Back to Home")}
        </Link>
      </div>
    </section>
  );
}
