# Navigation and local SEO review — 10 November 2026

## Navigation

The header has five entries: Home, About, Menu, Explore and Contact. Menu contains Food Menu and Drinks Menu on their own subpages. Explore contains Our Chef, Gallery and FAQ. All existing page URLs and English/Dutch versions remain available. See [the menu structure](SEPARATE-MENUS.md) for the follow-up changes.

Contact stays directly accessible. The footer has a separate, explicit quick-link list (About Us, Our Menu, Contact and FAQ), so Gallery and Our Chef are not repeated in the footer or placed beneath Contact.

The submenu uses a native HTML disclosure, following the ordinary navigation approach described by [W3C's disclosure navigation guidance](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/). Its links are present in the server-rendered HTML, and the desktop disclosure works without JavaScript. Keyboard users can open it with Enter or Space, use Tab to reach links, and close it with Escape. Escape returns focus to the summary; a second Escape closes the mobile navigation. Outside clicks and focus leaving the group also close the submenu.

## Code review and cleanup

- `src/content/navigation.ts` is the single typed header configuration. A derived flat list supports translation and route-coverage checks; it is not a second independently maintained menu.
- `HeaderNavigation.tsx` renders the same structure for desktop and mobile. `Header.tsx` handles the mobile shell and Escape behaviour, with named handlers instead of nested inline event logic.
- Navigation styles live in a CSS module, avoiding additional overrides in the existing global stylesheet.
- Footer quick links are independent of header groups. Removed the unused footer menu configuration with outdated category anchors; visible menu links still come from the actual food categories.
- Corrected the homepage vegetarian link to the current category ID.
- Formatted the edited navigation, footer, metadata and structured-data modules. Restaurant address and telephone values in metadata reuse the canonical content object.
- Retained all pages, menus, photographs, language controls, opening hours, ordering links, reservation widget and existing page layouts.

## Local SEO

The implementation follows Google's [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) and [LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business):

- Bilingual homepage descriptions identify Nepalese and Indian cuisine, Kinkerbuurt, Amsterdam Oud-West, Foodhallen and Filmhallen.
- Menu and contact metadata describe the relevant page and local dining intent. Contact details come from the same restaurant data used on the page.
- A visible address and neighbourhood description on the homepage support local visitors, with a link to the existing directions/contact page.
- Restaurant structured data retains the actual address, telephone, cuisine types and weekly hours, and now includes its map URL and existing food, exterior and dining-room photographs. No ratings or coordinates were fabricated. The map property follows [Schema.org `hasMap`](https://schema.org/hasMap).
- Existing canonical URLs, reciprocal EN/NL/x-default language alternatives, breadcrumbs, robots file, all 18 sitemap URLs and complete server-rendered food/drinks schemas remain in place.
- Grouping links in navigation changes their presentation, not their page URLs. The chef, gallery and FAQ links remain ordinary crawlable anchors in the initial HTML.

These are website improvements, not a measured ranking result. Google explains that local visibility also depends on [relevance, distance and prominence](https://support.google.com/business/answer/7091?hl=en). After publication, keep the verified Business Profile consistent with the website and inspect the live pages and sitemap in Search Console.

## Verification commands

```bash
npm test
npm run build -- --webpack
```

`scripts/verify-navigation.mjs` checks all nine pages in both languages, rendered metadata, menus, footer exclusions, keyboard navigation, mobile interactions, responsive widths, accessibility and desktop navigation without JavaScript. It accepts `BROWSER_TOOLS_DIR`, `SITE_URL` and `QA_OUTPUT`, matching the existing browser QA workflow. Testing tools are kept outside the project's runtime dependencies.

## Results

- All 18 content, navigation and SEO tests pass.
- Targeted ESLint checks pass for the edited navigation, footer and SEO modules.
- Production Webpack build and TypeScript checks pass; all 25 static pages/assets generate successfully.
- Browser verification passes for all 18 localized page URLs and the Menu/Explore navigation destinations in both languages.
- Desktop keyboard, mobile touch, focus restoration, outside-click dismissal and language switching pass.
- Fourteen accessibility scans of the menu pages, expanded navigation and footer report no violations.
- Layout checks pass at 320, 768, 1024 and 1200 pixels, with additional desktop/mobile interaction checks at 1440 and 390 pixels.
- The native desktop submenu works without JavaScript, and the complete food/drinks menu remains server-rendered. All 75 food dishes and 74 drink listings are retained without duplicates or PDF links.
- English and Dutch desktop/mobile screenshots were inspected; the menu grouping fits the existing design.
