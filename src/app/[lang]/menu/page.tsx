import Image from "next/image";
import Link from "next/link";
import SubPageBanner from "@/components/shared/SubPageBanner";
import LegacyMenuRedirect from "@/components/menu/LegacyMenuRedirect";
import MenuOrderCTA from "@/components/menu/MenuOrderCTA";
import { foodPhotos } from "@/content/photography";
import { MENU_PATHS } from "@/lib/menu-routes";
import {
  createTranslator,
  localizedPath,
  type LocalizedPageProps,
} from "@/lib/i18n";
import { getPageLocale } from "@/lib/locale-server";
import { getPageMetadata } from "@/lib/seo";
import styles from "./MenuOverview.module.css";

const menus = [
  {
    href: MENU_PATHS.food,
    title: "Food Menu",
    image: foodPhotos.currySpread.src,
    description:
      "Nepalese momo, Indian curries, tandoori and vegetarian favourites.",
    action: "View Food Menu",
  },
  {
    href: MENU_PATHS.drinks,
    title: "Drinks Menu",
    image: "/images/interior/wine-rack.webp",
    description:
      "Himalayan cocktails, mocktails, lassi, beers, wines and warming teas.",
    action: "View Drinks Menu",
  },
];

export async function generateMetadata({ params }: LocalizedPageProps) {
  return getPageMetadata("menu", await getPageLocale(params));
}

export default async function MenuPage({ params }: LocalizedPageProps) {
  const locale = await getPageLocale(params);
  const t = createTranslator(locale);
  return (
    <div className="menu-page">
      <SubPageBanner
        title="Our Menu"
        breadcrumb="Menu"
        path={MENU_PATHS.overview}
        locale={locale}
      />
      <LegacyMenuRedirect locale={locale} />
      <nav
        className={`section-container ${styles.choices}`}
        aria-label={t("Choose a menu")}
      >
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={localizedPath(menu.href, locale)}
            className={styles.card}
            data-menu-choice={menu.href}
          >
            <div className={styles.photo}>
              <Image
                src={menu.image}
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
              />
            </div>
            <div className={styles.content}>
              <h2>{t(menu.title)}</h2>
              <p>{t(menu.description)}</p>
              <span className="button button-sm">
                {t(menu.action)} <span aria-hidden="true">↗</span>
              </span>
            </div>
          </Link>
        ))}
      </nav>
      <MenuOrderCTA locale={locale} />
    </div>
  );
}
