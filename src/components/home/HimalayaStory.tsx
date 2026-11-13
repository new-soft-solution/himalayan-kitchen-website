import { aboutContent } from "@/content/about";
import { createTranslator, type LocaleProps } from "@/lib/i18n";
import SectionHeader from "@/components/shared/SectionHeader";

export default function HimalayaStory({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  return <section className="template-story heritage-section">
    <svg className="story-mountains" viewBox="0 0 1440 200" fill="none" aria-hidden="true" preserveAspectRatio="none"><path d="M0 200V120L100 90L200 110L300 60L400 80L500 30L600 70L720 10L840 50L960 20L1080 60L1200 15L1320 45L1440 5V200H0Z" fill="currentColor" /></svg>
    <div className="section-container">
      <div className="heritage-heading"><SectionHeader subtitle={t(aboutContent.himalayaToAmsterdam.subtitle)} title={t(aboutContent.himalayaToAmsterdam.title)} centered={false} /><p>{t("Since 2014")} <span aria-hidden="true">·</span> Amsterdam Oud-West</p></div>
      <ol className="heritage-grid">{aboutContent.himalayaToAmsterdam.steps.map((step, index) => <li key={step.title}>
        <span className="heritage-number">{String(index + 1).padStart(2, "0")}</span>
        <h3>{t(step.title)}</h3><p>{t(step.description)}</p>
      </li>)}</ol>
    </div>
  </section>;
}
