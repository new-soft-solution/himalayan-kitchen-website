import { EXTERNAL_LINKS } from "@/lib/constants";

import { createTranslator, type LocaleProps } from "@/lib/i18n";

export default function GoogleMap({ locale = "en" }: LocaleProps) {
  const t = createTranslator(locale);
  return (
    <iframe
      src={EXTERNAL_LINKS.googleMaps}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title={t("The Himalayan Kitchen - Google Maps")}
      className="w-full h-full"
    />
  );
}
