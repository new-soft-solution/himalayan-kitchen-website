# SEO and local discovery review — 27 October 2026

## Scope and evidence

Reviewed public search results for Holi Indian Restaurant Amsterdam and its official homepage, HTML menu, contact, about, location index and blog. The identified business is Holi at Kastelenstraat in Amsterdam Zuid, not an Oud-West branch. The search results surfaced its official site, dedicated ordering site and restaurant-directory listings. This establishes discoverability in the research search service; it does not establish a particular Google Maps/local-pack position. A direct Google results request was unavailable, and no authenticated Search Console, Business Profile, traffic, backlink or keyword-volume data was available. No exact Google ranking or attribution of ranking gains is claimed.

## What Holi's public site does

| Observation | Relevance to The Himalayan Kitchen |
| --- | --- |
| The [homepage](https://holiamsterdam.nl/) leads with Indian cuisine, Amsterdam and a specific neighbourhood/street. It separates booking from ordering and repeats contact information. | Make Nepalese and Indian cuisine, Amsterdam Oud-West and Ten Katestraat immediately understandable; use different destinations for ordering and reservations. |
| The [menu](https://holiamsterdam.nl/menu/) is HTML with food categories, descriptions, prices and English/Dutch content. Its page title targets cuisine + menu + city. | Keep the full authoritative menu crawlable, provide distinct EN/NL pages and useful category links, and describe both food and drinks in menu metadata. |
| The [contact page](https://holiamsterdam.nl/contact/) includes the address, telephone, map and opening hours. The [about page](https://holiamsterdam.nl/about-us/) provides a restaurant/founder story. | Keep consistent local facts and retain the restaurant story, chef profile, photographs and direct contact paths. |
| The [location index](https://holiamsterdam.nl/location/) and [blog](https://holiamsterdam.nl/blog/) cover numerous places and visitor-intent topics. | The useful inference is to answer real local dining questions. Add relevant Foodhallen/De Hallen context on the existing homepage and FAQ; do not create a batch of near-identical town pages. |

These are observations of public content and inferred best practices, not proof of Holi's private SEO strategy or ranking causes. Competitor copy, menu data, ratings and location/service claims were not imported.

## Changes in this pass

- The first hero slide has a visible Nepalese/Indian + Amsterdam H1 and restaurant introduction, followed by distinct copy for each subsequent slide. Menu and pickup actions stay in place; reservations use the official Find A Table widget. The four-slide carousel advances automatically with manual and pause controls.
- Added useful local dining copy around the actual address, the quieter alternative to Foodhallen, and pre-/post-film dining near Filmhallen, with links into existing momo, Nepalese, curry and vegetarian menu sections. Added the corresponding bilingual FAQ.
- Centralized the owner's latest hours: Monday closed, Tuesday–Friday 16:30–22:00, Saturday–Sunday 16:00–22:00. The latest owner instruction keeps the complete visible schedule only in the header and footer, with a brief FAQ reference; Restaurant JSON-LD still uses the same complete hours.
- Routed ordering actions to the explicit FindATable pickup URL. The latest owner instruction uses the native Find A Table reservation widget and removes separate booking redirects. Added the same pickup target as an OrderAction in restaurant structured data; this does not imply a Google ordering integration.
- Updated menu titles/descriptions to cover food, drinks and pickup. Updated social/restaurant imagery to a supplied food spread. Repaired missing image references, corrected mismatched dish photography, and supplied translated descriptive alternatives.
- Retained the established technical foundation: 14 language-specific canonical pages, reciprocal EN/NL/x-default alternates, one H1 per page, sitemap and robots, breadcrumbs, Restaurant/Organization/WebSite graphs, and separate food/drinks structured menus matching all 73 dishes and 65 drinks. No unverified aggregate-rating data was added.
- Kept responsive optimized images, local fonts, server-rendered menu content and reduced-motion controls. The photo strip retains its server-rendered images and adds a small client controller for continuous scrolling, with a still row for reduced motion or no JavaScript. The latest pass retains the template colours and uses refined serif headings, tighter spacing and optimized, silent restaurant video with reduced-motion/data-saving fallbacks. Prices display without currency symbols while structured offers retain EUR. The owner-confirmed displayed Google rating is 4.6; the existing review count is unchanged.

## Search intent mapped to existing pages

| Intent | Primary page(s) | Useful content |
| --- | --- | --- |
| Nepalese restaurant Amsterdam; Nepalees restaurant Amsterdam | `/`, `/nl` | Cuisine, city, neighbourhood, story, real food photos and booking |
| Himalayan cuisine Amsterdam; momo Amsterdam | `/menu`, `/nl/menu` | Named momo dishes, Nepalese specialities, descriptions, exact prices and allergen notes |
| Indian food Amsterdam Oud-West; Indiaas eten Amsterdam West | Home and menu | Curry classics, tandoori, vegetarian dishes; location stated naturally |
| Restaurant near Foodhallen / De Hallen | Home, contact and FAQ | Actual address, nearby landmarks, directions and consistent hours |
| Himalayan Kitchen menu / drinks / takeaway | Menu and sitewide actions | Readable food/drinks menus, category filters, price options and direct pickup link |
| Restaurant opening hours / reservations | Contact, FAQ and shared navigation | Full weekly schedule, telephone and direct booking |

## After deployment: owner-controlled follow-up

1. In the verified Google Business Profile, align the business name, address, phone, primary restaurant category and actual services with the website. Update regular and holiday hours and the menu, reservation and pickup links. The codebase cannot change the Business Profile.
2. Keep the same details on FindATable and other genuine listings. Add current restaurant/food photos and respond to real reviews; do not buy or fabricate reviews.
3. Submit the deployed sitemap in Search Console, inspect EN/NL canonical pages, and validate live structured data. Restaurant markup helps Google understand the business; rich-result appearance is not guaranteed.
4. Track Search Console impressions, clicks and queries by page and locale before comparing a later equivalent period. Monitor real-user Core Web Vitals after sufficient production traffic. A local build or automated accessibility scan does not measure search rankings or field performance.

Google explains that local results depend on relevance, distance and prominence; website changes cannot guarantee a ranking. [Google Business Profile local ranking guidance](https://support.google.com/business/answer/7091?hl=en).

Implementation follows [Google's SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [local-business structured data guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business), and [localized-version guidance](https://developers.google.com/search/docs/specialty/international/localized-versions). The choice to add useful neighbourhood information rather than repeated location landing pages follows [Google's doorway-page guidance](https://developers.google.com/search/blog/2015/03/an-update-on-doorway-pages).
