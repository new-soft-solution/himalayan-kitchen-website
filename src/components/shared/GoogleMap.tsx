import { EXTERNAL_LINKS } from "@/lib/constants";

export default function GoogleMap() {
  return (
    <iframe
      src={EXTERNAL_LINKS.googleMaps}
      width="100%"
      height="100%"
      style={{ border: 0, minHeight: "400px" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="The Himalayan Kitchen - Google Maps"
      className="w-full h-full"
    />
  );
}
