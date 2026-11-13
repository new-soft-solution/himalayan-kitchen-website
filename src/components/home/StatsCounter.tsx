import { stats } from "@/content/stats";
import { createTranslator, type LocaleProps } from "@/lib/i18n";

export default function StatsCounter({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  return <section className="stats-strip"><div className="section-container stats-grid">{stats.map((stat) => <div key={stat.label}><strong>{stat.value}{stat.suffix}</strong><p>{t(stat.label)}</p></div>)}</div></section>;
}
