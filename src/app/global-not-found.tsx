import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = { title: "404 | The Himalayan Kitchen", robots: { index: false, follow: true } };

export default function GlobalNotFound() {
  return <html lang="en"><body><main className="section-container error-page"><p className="eyebrow">The Himalayan Kitchen · 404</p><h1>Page not found / <span lang="nl">Pagina niet gevonden</span></h1><p>The page you are looking for is unavailable.</p><p lang="nl">De pagina die je zoekt is niet beschikbaar.</p><div className="button-row"><Link className="button" href="/">English home</Link><Link className="button button-outline" href="/nl" lang="nl">Nederlandse homepage</Link></div></main></body></html>;
}
