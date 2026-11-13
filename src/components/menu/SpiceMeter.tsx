import { GiChiliPepper } from "react-icons/gi";
import { createTranslator, type Locale } from "@/lib/i18n";

interface SpiceMeterProps {
  level: 1 | 2 | 3 | 4 | 5;
  showLabel?: boolean;
  locale?: Locale;
}

const spiceLabels: Record<number, string> = {
  1: "Mild",
  2: "Medium",
  3: "Spicy",
  4: "Hot",
  5: "Extra Hot",
};

export default function SpiceMeter({ level, showLabel = false, locale = "en" }: SpiceMeterProps) {
  const t = createTranslator(locale);
  return (
    <div className="spice-meter flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <GiChiliPepper
          key={i}
          size={14}
          className={`chili ${i <= level ? "active text-primary" : "inactive text-white/70"}`}
        />
      ))}
      {showLabel && (
        <span className="ml-2 font-manrope text-[12px] text-white/70">
          {t(spiceLabels[level])}
        </span>
      )}
    </div>
  );
}
