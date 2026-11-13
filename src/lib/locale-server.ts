import { notFound } from "next/navigation";
import { isLocale, type LocalizedPageProps } from "./i18n";

export async function getPageLocale(params: LocalizedPageProps["params"]) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}
