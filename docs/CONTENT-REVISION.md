# Restaurant content revision — 13 November 2026

Implemented the supplied `Himalayan_Kitchen_Website_Replacement_Copy_and_Change_Map.docx` in the existing Next.js project. English replacement text comes from the document; corresponding Dutch copy is included. No system settings, framework versions, service integrations or hosting configuration were changed.

| Document section | Implementation |
| --- | --- |
| 1–3: About, values and journey | Three replacement paragraphs, three existing value cards and four restaurant-focused journey steps shared by Home and About. Removed founder identity and biography from content and translation bundles. |
| 4–5: Home introduction | Replacement restaurant paragraph and two feature captions; existing photographs and layout retained. |
| 6: Hero | Four overlays in the supplied order: restaurant, momo, daal bhaat and FilmHallen. Existing carousel controls, video and image assets retained; no text embedded in images. |
| 7: Dishes | Updated the six applicable dish descriptions in the shared menu. The general momo introduction appears above Home's signature dishes; individual vegan/chicken descriptions and chilli momo sauce details stay specific to those dishes. Names, prices, variants and allergens remain sourced from the approved 2026 menu. |
| 8: Booking and takeaway | Replacement heading and paragraph, with separate reservation, pickup-order and localized menu links. Existing ordering controls and reservation widget retained elsewhere. |
| 9: Footer | Shared short restaurant description updated in both languages on every page. |
| 10: Verification | Static founding year, menu-derived dish count, supplied seating capacity and existing owner-confirmed rating replace unsupported guest counts. Removed unverified quotation cards and linked directly to Google reviews. No award superlative remains. |

SEO work adds restaurant-focused About metadata, crawl directives allowing large image previews, linked WebPage/AboutPage/ContactPage structured data, the restaurant founding year and logo. Existing per-page EN/NL canonical URLs, reciprocal language alternates, social previews, breadcrumbs, sitemap, robots and full food/drinks structured menus are retained. A search URL was removed from `sameAs`; the identified FindATable business page remains.

Implementation references: [Next.js metadata](https://nextjs.org/docs/app/getting-started/metadata-and-og-images), [Next.js JSON-LD](https://nextjs.org/docs/app/guides/json-ld) and [Google local-business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business). The installed Next.js 16.2.6 guides under `node_modules/next/dist/docs/` were also read.

The document's operational checks remain for the restaurant before publication: confirm the 32-seat operating capacity, actual opening hours and kitchen agreement with ingredient descriptions. The existing schedule is Monday closed, Tuesday–Friday 16:30–22:00 and Saturday–Sunday 16:00–22:00. No unsupported new capacity, opening schedule, award, review count or certification was introduced. The retained 4.6 rating comes from the existing restaurant record; no aggregate-rating schema was added.

The reviewed changes are intended for the repository's `main` branch. Confirm the connected hosting deployment after pushing to GitHub. After publication, submit `https://himalayankitchen.nl/sitemap.xml` in the verified Search Console property and keep Google Business Profile details and hours aligned with the restaurant. Search rankings were not measured.

Validation completed: all 19 content tests passed and the production build passed. HTTP checks passed for all 18 EN/NL pages, including one H1 per page, language attributes, canonical URLs, crawl directives, valid JSON-LD, absence of the removed founder identity, complete 75-dish/74-drink menus and separate booking/order destinations. Sitemap and robots endpoints passed. Browser interaction and layout checks also passed as detailed below.

Follow-up changes: desktop navigation now supports hover as well as clicks, with no gap between each summary and its dropdown. Focus handling waits for the browser to settle when `relatedTarget` is unavailable, and link activation uses Next.js `onNavigate`. Desktop and mobile dropdown groups are independent. Headless Edge checks passed for all three Explore links in both languages, using desktop hover/click and mobile touch; Enter and Escape also passed. Footer links use mint hover colours; the credit reads `Powered by: NSS`, without an underline and in a dark tone close to the background. The chef profile and metadata were rewritten in English and Dutch using the user's supplied Dubai and Hyatt Regency Amsterdam experience. No awards, hotel employment dates or medical benefits were added.

Chef layout refinement: reduced the portrait from a 440px maximum to 340px on desktop and 300px on phones, with a natural 4:5 frame and vertical alignment against the copy. Added a third EN/NL paragraph about momo, achar, curry sauces, tandoor cooking, seasoning, texture and presentation. Removed the nonfunctional portrait ring and shared page-banner circle. Browser checks at 1440px, 768px, 390px and 320px confirmed portrait sizing and no horizontal overflow in both languages.

Run locally from this directory in PowerShell:

```powershell
npm.cmd ci
npm.cmd test
npm.cmd run build
npm.cmd run start -- --hostname 127.0.0.1
```

Open `http://127.0.0.1:6500` (English) or `http://127.0.0.1:6500/nl` (Dutch). For live editing, use `npm.cmd run dev` instead of `start`. Using `npm.cmd` avoids changing PowerShell's execution policy.
