# The Himalayan Kitchen — implementation notes

Updated 27 October 2026 in the existing Next.js 16.2.6 / React 19 project. No deployment or hosting migration was performed. Existing working-tree edits and source media were retained.

## Template and media

The Restfast template remains the foundation: orange `#FB9015` / hover `#E07D0D`, teal `#102B2A`, mountain motifs, a full-width media hero, real restaurant photography, a compact four-part story grid and shaped food cards. Following the latest brief, Cormorant Garamond serif headings and complementary Manrope body text give the site a more refined identity. Jost and Plus Jakarta Sans remain for selected controls and small labels. Compact eyebrow labels, balanced serif sizes and consistent hierarchy preserve readability. Hero/header heights, section padding, menu-row spacing, card gaps and footer spacing were reduced (the homepage is about 9% shorter on mobile and 16–17% shorter on desktop in matching QA views); mobile dish cards use compact photo-and-text rows.

The supplied `restaurant_busy.mp4` was selected after reviewing both videos and the new photographs. The alternative `happy_customer.mp4` has pronounced camera rotation, so it remains in the source assets without being used as the background. Original media files were not overwritten.

The selected video has silent H.264 versions under `public/images/hero/optimized/`: 1280×720 desktop (729,839 bytes) and 768×432 mobile (277,468 bytes), compared with the original roughly 6.3 MB HEVC file. Both use 24 fps and fast-start metadata. A 1440 px poster is shown before playback, when JavaScript is unavailable, or when reduced motion/data saving is requested. Playback is muted and inline, has a pause/resume control and stops when another carousel slide is selected. The carousel now rotates through four slides, holding each for 6.5 seconds before a gentle fade, while remaining operable with buttons, keyboard and swipe. Its pause/play control also holds the background video. Reduced-motion and data-saving preferences keep it still. The added fourth slide uses the supplied group dining photograph. Real restaurant/food photography is used throughout; missing or moved image references were repaired and bottles are contained rather than cropped.

The homepage image row now scrolls continuously as a marquee while on screen. It pauses on hover, touch, keyboard focus, or its pause button, and retains native horizontal scrolling. The duplicate photo group makes the loop continuous and is hidden from assistive technology. Reduced-motion/data-saving mode uses a single, still photo group. The homepage no longer includes text explaining the reservation widget. The drinks PDF download button was removed; all drinks remain available in the interactive HTML menu.

The original fonts are self-hosted with their open-source licenses. Four active Latin WOFF2 files total approximately 145 KB. Existing unused font files were retained.

## Ordering and reservations

Every Order Online action points to:

`https://findatable.nl/restaurant/the-himalayan-kitchen/order/pickup`

Separate reservation buttons/redirects were removed at the owner's request. The global layout loads the official `https://findatable.nl/js/find-a-table.js` once, with the supplied access key, `defer`, and Next.js `afterInteractive`. Its native launcher and responsive booking panel handle reservations. No replacement reservation form, iframe implementation or custom launcher was introduced.

The provider enables this key for `himalayankitchen.nl` and returns HTTP 403 for localhost. The owner explicitly chose to retain that production restriction. The application does not override the domain check. Local preview therefore shows the website without an active reservation launcher. A browser test served the local build under the configured production origin to exercise the actual provider script and iframe: mobile and desktop opening, restaurant calendar display, responsive sizing and closing passed. No reservation or order was submitted.

## Contact, menus and restaurant facts

- Contact information and Google Maps use equal-width desktop grid tracks with aligned tops and equal stretched heights. On smaller screens they stack at full width, with a usable map height. Telephone, email, directions, WhatsApp and the actual map remain available.
- Food and drinks now use the same `CategoryNavigation` component and URL-backed `useCategoryFilter` hook. Active buttons, single-category filtering, all-items controls, horizontal mobile scrolling, live result counts, reloads and language switching work for both. Drinks retain their existing `#drinks-…` deep links. All food/drinks remain in server-rendered HTML before filtering.
- Preserved all 73 food dishes, 11 food categories, 14 food variant sets, allergen information, 65 drinks, 13 drinks categories and 98 drink price choices from the supplied PDFs. The tea is named **Arossence Pot Tea** in both languages and in the retained PDF source copy. Its 7.00 price, descriptions and other details are unchanged, including the previously approved Dutch tea description. The PDF label uses the original embedded font; all other text tokens were verified unchanged.
- Displayed prices keep their original numeric values and two decimal places, without a euro symbol. Structured offers retain `EUR`, which identifies the currency for search engines. The retained drinks PDF source copy also contains no euro symbols.
- The owner-confirmed Google rating is 4.6. Restaurant badges, the rating link and statistics share this value. The stored review count was not changed, and no aggregate-rating markup or invented review count was added.
- The footer credit reads **Powered by New Soft Solution**. The company name links to `http://newsoftsolution.com/` in a new tab with `noopener noreferrer`; the supplied address resolves to the company website.

The restaurant now has a **Cozy 32-seat dining room**, reflected in the restaurant description, About page, homepage and FAQs. Food item names are identical in English and Dutch across the full menu, featured cards, image labels and structured data; descriptions remain translated. All prices, variants, allergens and drinks data are retained. Each hero slide now has distinct visible copy, naturally sized as a layered text group to keep the controls steady without adding gaps between the heading and introduction, covering the restaurant welcome, curry traditions, handmade momo, and dining before or after a film. The heritage section keeps all four story points in a compact grid, approximately 300–330 px tall at a 1440 px desktop width, with two columns on tablet/mobile. New Foodhallen/Filmhallen copy highlights a calmer setting, authentic Nepalese and Indian cuisine, excellent quality at reasonable prices, and prompt pre-film meals with showtime information.

The latest hours remain the single shared schedule: Monday closed; Tuesday–Friday 16:30–22:00; Saturday–Sunday 16:00–22:00. The complete visible schedule appears in the header’s Opening Hours disclosure (also available in the mobile navigation) and footer, both generated by the same component. Detailed contact and homepage booking schedules were removed, and the FAQ now directs visitors to the current schedule rather than repeating the times. Restaurant structured data retains the complete machine-readable hours.

## Languages and SEO

Seven English pages retain their original public URLs; seven Dutch counterparts live under `/nl`. EN/NL switching preserves the current page, query and category fragment. The existing preference cookie, legacy food-category links, chef/story content, testimonials, WhatsApp, map and contact features remain available.

Language-specific metadata, reciprocal hreflang/canonical links, Open Graph/Twitter metadata, the 14-URL sitemap, robots, breadcrumbs, Restaurant/Organization/WebSite graphs and separate food/drinks Menu graphs remain intact. Menu structured data always represents the full authoritative menu, including during client filtering. See [SEO-AUDIT.md](SEO-AUDIT.md) for the Holi research, primary sources and Google Business Profile/Search Console follow-up. No search ranking or field Core Web Vitals result is claimed.

## Verification

The checks used for this update are `npm test`, `npm run lint`, `npm run typecheck`, `npm run build`, `git diff --check`, and `scripts/verify-site.mjs`.

Browser verification covers 28 EN/NL page/device views, 30 full-page/filtered-menu accessibility scans plus 4 expanded-header-hours scans, every food and drinks filter, language/hash persistence, reloads, keyboard navigation, no-JavaScript menu content, SEO endpoints, prices, the renamed tea, hours placement, ordering destinations and the linked footer credit. Additional checks cover 12 responsive views from 360–1440 px, the hero slide layouts, two video playback/pause cases, contact column measurements, the seven-day header hours disclosure, the live Google Map and the official widget at two sizes. No captured application runtime/hydration errors or automated accessibility violations were found in the completed checks.

The latest motion update additionally passed six English/Dutch homepage and drinks-menu cases at 390, 768 and 1440 px, plus two normal-motion cases verifying autoplay, fourth-slide loading, wraparound, pause/resume, marquee looping, hover/focus pause and native keyboard scrolling. Fourteen targeted accessibility scans found no violations, and no captured runtime errors were found. The PDF download action and widget explanation are absent from the requested locations.

The latest menu/copy/layout checks also passed 12 responsive English/Dutch views at 360, 390, 768, 860, 1024 and 1440 px, checking all 48 hero states, steady action-button positions, compact story dimensions, unchanged descriptions/prices/options/allergens, identical food names in both languages and menu structured data, and 32-seat wording. The full 28-page regression, food/drink filters and navigation checks passed with no detected accessibility or runtime issues.

Allergen labels beside dishes now render as 34 px pictogram badges with 23 px glyphs. All seven allergen symbols use the existing hover orange (`#E07D0D`) in their normal and hover states. English/Dutch accessible names and native hover labels are retained, and the allergen key uses the same symbols with visible names. The original allergen assignments and existing explanatory notes are unchanged.

The allergen update passed six English/Dutch browser cases at 390, 768 and 1440 px, checking all seven symbols, icon-only dish labels, hover color, accessible names, category filtering and horizontal overflow. Six targeted accessibility scans found no violations, and no runtime or hydration errors were captured. See `/tmp/himalayan-qa/allergens-report.json` and the accompanying dish/key screenshots.

QA artifacts and screenshots are in `/tmp/himalayan-qa/`, including `report.json`, `template-report.json`, `widget-report.json`, `motion-report.json` and `story-report.json`. The general site harness intentionally isolates third-party requests; the map and provider widget were verified separately. The widget's third-party UI is controlled by Find A Table. Automated accessibility checks do not replace a manual assistive-technology review.

To reproduce the site checks, install Playwright, Chromium and `@axe-core/playwright` in a separate tools directory, start the built site with `npm start`, and run `scripts/verify-site.mjs` with `BROWSER_TOOLS_DIR` pointing at that tools directory. No QA packages or video-conversion tools were added to the project's runtime dependencies.
