"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getLegacyMenuPath } from "@/lib/menu-routes";
import { localizedPath, type LocaleProps } from "@/lib/i18n";

export default function LegacyMenuRedirect({ locale = "en" }: LocaleProps) {
  const router = useRouter();

  useEffect(() => {
    function followOldBookmark() {
      const target = getLegacyMenuPath(window.location.hash);
      if (target) router.replace(localizedPath(target, locale));
    }
    followOldBookmark();
    window.addEventListener("hashchange", followOldBookmark);
    return () => window.removeEventListener("hashchange", followOldBookmark);
  }, [locale, router]);

  return null;
}
