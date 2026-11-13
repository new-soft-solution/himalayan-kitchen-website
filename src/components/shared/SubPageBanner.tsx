import Link from "next/link";
import { createTranslator, localizedPath, type LocaleProps } from "@/lib/i18n";
import { getBreadcrumbSchema } from "@/lib/schema";
import StructuredData from "./StructuredData";
import type { NavLink } from "@/types";

interface SubPageBannerProps extends LocaleProps {
  title: string;
  breadcrumb?: string;
  path?: string;
  parents?: NavLink[];
}

export default function SubPageBanner({
  title,
  breadcrumb,
  path,
  parents = [],
  locale = "en",
}: SubPageBannerProps) {
  const t = createTranslator(locale);
  return (
    <section className="subpage-banner">
      <svg
        className="subpage-mountains"
        viewBox="0 0 1440 120"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120V80L180 50L360 70L540 20L720 55L900 10L1080 45L1260 5L1440 30V120H0Z"
          fill="currentColor"
        />
      </svg>
      <div className="subpage-mandala" aria-hidden="true" />
      <div className="section-container">
        <p className="eyebrow">The Himalayan Kitchen · Amsterdam</p>
        <h1>{t(title)}</h1>
        <nav aria-label={locale === "nl" ? "Broodkruimelpad" : "Breadcrumb"}>
          <Link href={localizedPath("/", locale)}>{t("Home")}</Link>
          {parents.map((parent) => (
            <span key={parent.href} className="contents">
              <span aria-hidden="true">/</span>
              <Link href={localizedPath(parent.href, locale)}>
                {t(parent.label)}
              </Link>
            </span>
          ))}
          <span aria-hidden="true">/</span>
          <span aria-current="page">{t(breadcrumb || title)}</span>
        </nav>
      </div>
      {path && (
        <StructuredData
          data={getBreadcrumbSchema(
            t(breadcrumb || title),
            path,
            locale,
            parents,
          )}
        />
      )}
    </section>
  );
}
