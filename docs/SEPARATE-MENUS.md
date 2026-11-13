# Separate food and drinks pages

The header now has five entries: Home, About, Menu, Explore and Contact. Menu contains Food Menu and Drinks Menu; Explore retains Our Chef, Gallery and FAQ.

| Page | English URL | Dutch URL |
| --- | --- | --- |
| Menu overview | `/menu` | `/nl/menu` |
| Food Menu | `/menu/food` | `/nl/menu/food` |
| Drinks Menu | `/menu/drinks` | `/nl/menu/drinks` |

The overview offers two image cards. Each dedicated page has a link to the other menu, the existing category filters, and the same menu-row design. All 75 dishes, 74 drink listings, variant prices, allergens, descriptions, photographs and ordering/reservation functionality are retained. No PDF links are displayed.

The food page retains the allergen legend, freshness information and Nepalese cuisine information. The drinks page retains the full bar selection and serving choices. The ordering section is shared rather than duplicated in source.

## Navigation and existing links

- Homepage food links and footer food-category links go directly to the food page.
- The footer drinks link goes directly to the drinks page.
- Existing `/menu#…` bookmarks are forwarded to the appropriate page after JavaScript loads, retaining the selected category and language. Old category names are translated to their current names where needed.
- Without JavaScript, `/menu` still provides ordinary links to both complete server-rendered menus.
- Gallery and Our Chef remain excluded from the footer.

## SEO and code structure

- Each new page has its own bilingual title, description, canonical URL and reciprocal language alternatives.
- The sitemap includes all 18 localized page URLs. Existing pages and English alias redirects remain available.
- Menu structured data refers to the matching dedicated page, and restaurant structured data links to both menus.
- Both menu subpages have Home → Menu → current page breadcrumbs in HTML and structured data.
- `src/lib/menu-routes.ts` centralizes menu URLs and legacy category aliases. Shared navigation, category renderers and ordering components preserve the existing layout without maintaining separate copies of the menu data.

## Verification

The content tests cover all menu items and prices, both new menu URLs, sitemap/canonical consistency, breadcrumb hierarchy and legacy bookmarks. Browser QA covers both dropdowns, separate page contents, category filters, language switching, reloads, old links, responsive layouts and access without JavaScript.

Verified results:

- All 18 content/routing/SEO tests pass, and targeted ESLint checks pass.
- Production build and TypeScript checks pass; all 25 static pages/assets generate.
- All 18 localized page URLs pass browser checks. Fourteen accessibility scans report no violations.
- Desktop/mobile dropdowns, menu filters, language/hash persistence, cross-menu links and old bookmarks pass.
- The customer preview on port 6500 returns HTTP 200 for the overview, food page and drinks page with exactly the expected content and no PDF links.
