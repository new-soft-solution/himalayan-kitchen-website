# Menu update — 10 November 2026

The existing local website now follows the two supplied 2026 menus using its established category filters and menu layout. Each food dish and drink listing appears once in the full menu; protein, flavour and serving choices stay with their parent item. The customer menu has no PDF links or download buttons.

## Sources and precedence

- **Food:** `himalayan_cuisine_menu_2026.pdf`, pages 6–11. All 75 numbered dishes, 01–75, are included. The other pages contain drinks, the cover and background information about Nepal.
- **Drinks:** `himalayan_drink_menu_2026.pdf`, pages 1–4. Pages 5–8 are blank. This newer dedicated drinks PDF takes precedence over the drinks pages in the combined cuisine PDF wherever prices or choices differ.
- Copies of the original PDFs are retained for source verification; SHA-256 checksums are recorded in `tests/menu-sources.json`. They are not linked from the customer menu.

## Food

- 75 unique numbered dishes in 12 categories, with all 14 printed protein variant sets and 96 priced choices.
- Added **04 Vegetable Spring Roll**, **39 Paneer Chilli** and **69 Nepali Green Salad**. Removed Panipuri, which does not appear in the updated food menu.
- Updated printed names, English and Dutch descriptions, prices and numbering throughout the food menu.
- Kept separate sections for chef’s signature curries, biryani and rice, sides, and desserts; consolidated vegetarian and vegan mains into one section.
- Updated the allergen symbols to match the new printed menu, including mustard for Mixed Pickle. The page retains its explanation that printed symbols may vary by variant and are not a complete ingredients audit.
- Updated homepage references and photo assignments so Chicken Tikka Tandoori (45), Saag Paneer (53) and Chana Masala (58) remain paired with the correct photographs.
- Preserved previous category links through aliases where categories were renamed or consolidated.

## Drinks

- 74 unique listings in the 14 categories from the updated drinks menu. Sweet white wine and Prosecco appear under House Wines, as printed, rather than under separate legacy categories. The PDF’s 95 printed price entries expand to 106 selectable choices when grouped flavours and brands are shown individually under their parent listing.
- Added all five lassi choices: mango and mint (4.25), salt and sweet (3.95), and plain (3.75).
- Added Oedipus Mannenliefde draught 6.0% (7.45).
- Added Argentine Malbec by Los Árboles (6.25 glass / 28.50 bottle), separately from Chilean Malbec Bio by Luis Felipe Edwards (84.95 bottle).
- Updated beer, water and Winter Glow prices. Water now uses the printed small/large labels rather than unsupported volume claims.
- Updated all four house-wine bottle prices to 28.50 while retaining glass and carafe choices.
- Listed Nepalese (8.50), Irish (8.25) and French coffee (8.00) separately, with the new Nepalese coffee description.
- Preserved every printed liqueur, soft drink, tea, spirit, wine and serving choice. The existing approved Dutch Arossence Pot Tea description is retained rather than copying the PDF’s mistranslation “wietthee”.

## Verification

- Cross-checked all dish numbers and names against the extracted food PDF text; numbers 01–75 occur exactly once.
- Matched all 96 food price entries and all 95 printed drinks price entries against the PDFs, accounting for expanded grouped choices.
- Content tests verify complete source catalogues, uniqueness, all protein variants, allergen symbols, Dutch translations, matching structured data, corrected photo assignments and exact source PDF checksums.
- `npm test`: all 14 tests pass. `npm run typecheck`: passes.
- Both `/menu` and `/nl/menu` render every expected food and drink listing exactly once, with the correct localized names and matching structured data. The customer page presents the updated menu directly without PDF links.
- Updated the existing browser QA script for the new category and item counts. Browser interaction checks require the external Playwright tools described in that script.

This update changes the local project. It does not publish a hosted version.
