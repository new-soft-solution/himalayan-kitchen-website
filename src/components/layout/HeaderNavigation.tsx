"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { mainNavigation } from "@/content/navigation";
import { localizedPath, unlocalizedPath } from "@/lib/i18n";
import type { NavGroup } from "@/types";
import { useLocale, useTranslation } from "./LocaleProvider";
import styles from "./HeaderNavigation.module.css";

interface NavigationProps {
  layout: "desktop" | "mobile";
  onNavigate?: () => void;
}

function NavigationGroup({
  group,
  layout,
  onNavigate,
}: NavigationProps & { group: NavGroup }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const pathname = unlocalizedPath(usePathname());
  const locale = useLocale();
  const t = useTranslation();
  const isCurrent =
    group.basePath === pathname ||
    group.children.some((link) => link.href === pathname);

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      const details = detailsRef.current;
      if (details && !details.contains(event.target as Node))
        details.open = false;
    }

    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  function handleNavigate() {
    if (detailsRef.current) detailsRef.current.open = false;
    onNavigate?.();
  }

  return (
    <details
      ref={detailsRef}
      className={styles.group}
      data-layout={layout}
      data-navigation-group={group.label}
      data-current={isCurrent || undefined}
      name="header-navigation-group"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          event.currentTarget.open = false;
      }}
    >
      <summary>
        {t(group.label)}
        <FiChevronDown aria-hidden="true" size={15} />
      </summary>
      <div className={styles.panel}>
        {group.children.map((link) => (
          <Link
            key={link.href}
            href={localizedPath(link.href, locale)}
            aria-current={pathname === link.href ? "page" : undefined}
            onClick={handleNavigate}
          >
            {t(link.label)}
          </Link>
        ))}
      </div>
    </details>
  );
}

export default function HeaderNavigation({
  layout,
  onNavigate,
}: NavigationProps) {
  const pathname = unlocalizedPath(usePathname());
  const locale = useLocale();
  const t = useTranslation();

  return mainNavigation.map((item) =>
    "children" in item ? (
      <NavigationGroup
        key={item.label}
        group={item}
        layout={layout}
        onNavigate={onNavigate}
      />
    ) : (
      <Link
        key={item.href}
        href={localizedPath(item.href, locale)}
        aria-current={pathname === item.href ? "page" : undefined}
        onClick={onNavigate}
      >
        {t(item.label)}
      </Link>
    ),
  );
}
