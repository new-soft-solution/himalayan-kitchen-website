import { LuBean, LuFish, LuMilk, LuNut, LuSprout, LuWheat } from "react-icons/lu";
import { PiShrimp } from "react-icons/pi";
import type { IconBaseProps, IconType } from "react-icons";
import { allergenLabels } from "@/content/allergens";
import { createTranslator, type LocaleProps } from "@/lib/i18n";

function SesameSymbol({ size = 23, ...props }: IconBaseProps) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 7c-3 2.8-4 6-2 7.5s4.8-.7 4.6-3.2C8.5 9.8 7.3 8.2 6 7Z" />
    <path d="M14 2.5c-3 2.8-4 6-2 7.5s4.8-.7 4.6-3.2C16.5 5.3 15.3 3.7 14 2.5Z" />
    <path d="M18 12c-3 2.8-4 6-2 7.5s4.8-.7 4.6-3.2C20.5 14.8 19.3 13.2 18 12Z" />
  </svg>;
}

const symbols: Record<string, IconType> = {
  gluten: LuWheat,
  crustaceans: PiShrimp,
  soybeans: LuBean,
  sesame: SesameSymbol,
  milk: LuMilk,
  nuts: LuNut,
  fish: LuFish,
  mustard: LuSprout,
};

interface AllergenSymbolProps extends LocaleProps { allergen: string }

export default function AllergenSymbol({ allergen, locale = "en" }: AllergenSymbolProps) {
  const label = createTranslator(locale)(allergenLabels[allergen] || allergen);
  const Symbol = symbols[allergen];
  // Keep the label visible if a future source menu introduces an unmapped allergen.
  if (!Symbol) return <span>{label}</span>;
  return <span className="allergen-symbol" data-allergen={allergen} role="img" aria-label={label} title={label}>
    <Symbol size={23} aria-hidden="true" focusable="false" />
  </span>;
}
