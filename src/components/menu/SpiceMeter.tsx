import { GiChiliPepper } from "react-icons/gi";

interface SpiceMeterProps {
  level: 1 | 2 | 3 | 4 | 5;
  showLabel?: boolean;
}

const spiceLabels: Record<number, string> = {
  1: "Mild",
  2: "Medium",
  3: "Spicy",
  4: "Hot",
  5: "Extra Hot",
};

export default function SpiceMeter({ level, showLabel = false }: SpiceMeterProps) {
  return (
    <div className="spice-meter flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <GiChiliPepper
          key={i}
          size={14}
          className={`chili ${i <= level ? "active text-primary" : "inactive text-white/20"}`}
        />
      ))}
      {showLabel && (
        <span className="ml-2 font-manrope text-[12px] text-white/50">
          {spiceLabels[level]}
        </span>
      )}
    </div>
  );
}
