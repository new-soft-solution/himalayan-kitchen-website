import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nodeRequire = createRequire(import.meta.url);
const root = path.resolve(__dirname, '..');
const cache = new Map();

// Load the actual TypeScript content without adding a test-runner dependency.
function source(relative) {
  const filename = path.resolve(root, relative);
  if (cache.has(filename)) return cache.get(filename);
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText;
  const loadedModule = { exports: {} };
  cache.set(filename, loadedModule.exports);
  const load = (specifier) => specifier.startsWith('@/') ? source(`src/${specifier.slice(2)}.ts`) : specifier.startsWith('.') ? source(path.relative(root, path.resolve(path.dirname(filename), `${specifier}.ts`))) : nodeRequire(specifier);
  new Function('require', 'module', 'exports', compiled)(load, loadedModule, loadedModule.exports);
  cache.set(filename, loadedModule.exports);
  return loadedModule.exports;
}

const { menuCategories } = source('src/content/menu.ts');
const dishes = menuCategories.flatMap((category) => category.items);
const { dutch } = source('src/content/translations.ts');
const { createTranslator, localizedPath, pagePaths } = source('src/lib/i18n.ts');

test('website source and translation bundles contain no removed founder identity', () => {
  function scan(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) scan(filename);
      else if (/\.tsx?$/.test(entry.name)) {
        assert.doesNotMatch(fs.readFileSync(filename, 'utf8'), /\b(?:surya|suray|giri)\b/i, path.relative(root, filename));
      }
    }
  }
  scan(path.join(root, 'src'));
});

const fixture = fs.readFileSync(path.join(__dirname, 'menu-source.csv'), 'utf8').trim().split(/\r?\n/).slice(1).map((line) => {
  const [, id, name, price] = line.match(/^(\d{2}),(.*),(\d+\.\d{2})$/);
  return { id, name: name.replace(/^"|"$/g, ''), price: Number(price) };
});

test('the shorter navigation preserves every page and keeps chef/gallery out of footer links', () => {
  const { mainNavigation, mainNavLinks, footerQuickLinks } = source('src/content/navigation.ts');
  assert.deepEqual(mainNavigation.map((item) => item.label), ['Home', 'About', 'Menu', 'Explore', 'Contact']);
  const menus = mainNavigation.find((item) => item.label === 'Menu');
  assert.equal(menus.basePath, '/menu');
  assert.deepEqual(menus.children.map((link) => link.href), ['/menu/food', '/menu/drinks']);
  const group = mainNavigation.find((item) => item.label === 'Explore');
  assert.deepEqual(group.children.map((link) => link.href), ['/chef', '/gallery', '/faq']);
  assert.deepEqual(new Set([...mainNavLinks, ...footerQuickLinks].map((link) => link.href.split('#')[0])), new Set(['/', '/about', '/menu', '/menu/food', '/menu/drinks', '/chef', '/gallery', '/contact', '/faq']));
  assert.ok(mainNavigation.some((item) => item.href === '/contact'));
  assert.ok(footerQuickLinks.every((link) => !['/chef', '/gallery'].includes(link.href)));
  assert.ok(footerQuickLinks.some((link) => link.href === '/contact'));
  assert.ok(footerQuickLinks.some((link) => link.href === '/faq'));
});

test('dedicated menus have separate schema URLs and a real Menu parent breadcrumb', () => {
  const { getRestaurantSchema, getMenuSchema, getDrinksMenuSchema, getBreadcrumbSchema } = source('src/lib/schema.ts');
  for (const locale of ['en', 'nl']) {
    const prefix = locale === 'nl' ? '/nl' : '';
    const foodURL = `https://himalayankitchen.nl${prefix}/menu/food`;
    const drinksURL = `https://himalayankitchen.nl${prefix}/menu/drinks`;
    assert.equal(getMenuSchema(locale).url, foodURL);
    assert.equal(getDrinksMenuSchema(locale).url, drinksURL);
    assert.deepEqual(getRestaurantSchema(locale)['@graph'][0].hasMenu.map((menu) => menu.url), [foodURL, drinksURL]);
    const breadcrumb = getBreadcrumbSchema('Food Menu', '/menu/food', locale, [{ label: 'Menu', href: '/menu' }]);
    assert.deepEqual(breadcrumb.itemListElement.map((item) => item.position), [1, 2, 3]);
    assert.equal(breadcrumb.itemListElement[1].item, `https://himalayankitchen.nl${prefix}/menu`);
    assert.equal(breadcrumb.itemListElement[2].item, foodURL);
  }
});

test('old food and drinks bookmarks resolve to the new local pages safely', () => {
  const { getLegacyMenuPath } = source('src/lib/menu-routes.ts');
  for (const [hash, expected] of [
    ['#drinks', '/menu/drinks'],
    ['#drinks-himalayan-mocktails', '/menu/drinks#drinks-himalayan-mocktails'],
    ['#drinks-sparkling', '/menu/drinks#drinks-house-wines'],
    ['#momo-noodles', '/menu/food#momo-noodles'],
    ['#vegetarian-mains', '/menu/food#vegetarian-vegan-mains'],
    ['#food-menu', '/menu/food'],
    ['#constructor', '/menu/food#constructor'],
    ['', null], ['#', null], ['#javascript:alert(1)', null], ['#//example.com', null],
  ]) assert.equal(getLegacyMenuPath(hash), expected, hash);
});

test('local SEO uses both cuisines, neighbourhood details and the actual restaurant contact information', () => {
  const { getPageMetadata } = source('src/lib/seo.ts');
  const { getRestaurantSchema } = source('src/lib/schema.ts');
  const { restaurant } = source('src/content/restaurant.ts');
  const { EXTERNAL_LINKS } = source('src/lib/constants.ts');
  for (const locale of ['en', 'nl']) {
    const home = getPageMetadata('home', locale);
    assert.match(home.title.absolute, locale === 'en' ? /Nepalese & Indian Restaurant Amsterdam/ : /Nepalees & Indiaas restaurant Amsterdam/);
    assert.match(home.description, /Kinkerbuurt/);
    assert.match(home.description, /Amsterdam Oud-West/);
    const contact = getPageMetadata('contact', locale);
    assert.ok(contact.description.includes(restaurant.address.street));
    assert.ok(contact.description.includes(restaurant.address.postalCode));
    assert.ok(contact.description.includes(restaurant.phone));
    const business = getRestaurantSchema(locale)['@graph'][0];
    assert.deepEqual(business.servesCuisine, ['Nepalese', 'Indian']);
    assert.equal(business.hasMap, EXTERNAL_LINKS.googleMapsLink);
    assert.equal(business.telephone, restaurant.phone);
    assert.equal(business.address.streetAddress, restaurant.address.street);
    assert.ok(business.image.length >= 3);
    for (const url of business.image) {
      assert.ok(fs.existsSync(path.join(root, 'public', new URL(url).pathname)), url);
    }
  }
});

test('retained source menu copies match the supplied 2026 PDFs byte for byte', () => {
  const sources = JSON.parse(fs.readFileSync(path.join(__dirname, 'menu-sources.json'), 'utf8'));
  for (const menu of Object.values(sources)) {
    const pdf = fs.readFileSync(path.join(root, 'public', menu.download));
    assert.equal(pdf.subarray(0, 5).toString(), '%PDF-');
    assert.equal(createHash('sha256').update(pdf).digest('hex'), menu.sha256, menu.source);
  }
});

test('renumbered homepage photographs remain paired with the same featured dishes', () => {
  const { dishSectionPhotos, foodPhotos } = source('src/content/photography.ts');
  for (const [id, name, photo] of [
    ['45', 'Chicken Tikka Tandoori', foodPhotos.tandooriPlatter],
    ['53', 'Saag Paneer', foodPhotos.saagPaneer],
    ['58', 'Chana Masala', foodPhotos.chanaMasala],
  ]) {
    assert.equal(dishes.find((dish) => dish.id === id).name, name);
    assert.equal(dishSectionPhotos[id], photo);
  }
});

test('the opening-hours date follows Amsterdam midnight and daylight-saving changes', () => {
  const { getRestaurantLocalDate } = source('src/lib/opening-hours.ts');
  const cases = [
    ['2026-10-29T22:59:59Z', '2026-10-29'],
    ['2026-10-29T23:00:00Z', '2026-10-30'],
    ['2026-07-05T21:59:59Z', '2026-07-05'],
    ['2026-07-05T22:00:00Z', '2026-07-06'],
    ['2026-03-29T00:59:59Z', '2026-03-29'],
    ['2026-03-29T01:00:00Z', '2026-03-29'],
    ['2026-10-25T00:59:59Z', '2026-10-25'],
    ['2026-10-25T01:00:00Z', '2026-10-25'],
    ['2026-12-31T23:00:00Z', '2027-01-01'],
  ];
  for (const [instant, expected] of cases) assert.equal(getRestaurantLocalDate(new Date(instant)), expected, instant);
});

test('all 74 drinks preserve the updated 2026 PDF names, prices and grouped serving choices without duplicates', () => {
  const expected = JSON.parse(fs.readFileSync(path.join(__dirname, 'drinks-source.json'), 'utf8'));
  const { drinkCategories } = source('src/content/drinks.ts');
  const drinks = drinkCategories.flatMap((category) => category.items);
  assert.deepEqual(drinkCategories.map((category) => category.items.length), [7,4,8,1,4,1,10,3,6,6,7,5,6,6]);
  assert.equal(drinks.length, 74);
  assert.equal(new Set(drinks.map((drink) => drink.id)).size, 74);
  assert.equal(new Set(drinks.map((drink) => drink.name.toLowerCase())).size, 74);
  assert.equal(new Set(drinkCategories.map((category) => category.id)).size, 14);
  assert.equal(expected.length, drinks.length);
  for (const [index, drink] of drinks.entries()) {
    assert.equal(drink.id, expected[index].id);
    assert.equal(drink.name, expected[index].name);
    assert.equal(drink.nameNl, expected[index].nameNl);
    const prices = expected[index].sourcePrice.match(/\d+\.\d{2}/g).map(Number);
    assert.deepEqual(drink.variants?.map((variant) => variant.price) || [drink.price], prices, drink.name);
    assert.equal(drink.price, Math.min(...prices));
    assert.equal(drink.description || '', expected[index].description);
    assert.ok(drink.nameNl);
    assert.equal(drink.descriptionNl || '', expected[index].descriptionNl);
    assert.deepEqual(drink.variants?.map((variant) => variant.label), expected[index].sourceChoices);
    assert.equal(drink.serving, expected[index].serving);
    for (const variant of drink.variants || []) assert.ok(variant.labelNl);
  }
  assert.equal(drinks.reduce((count, drink) => count + (drink.variants?.length || 1), 0), 106);
});

test('wine serving labels and drink structured data preserve every PDF price', () => {
  const { drinkCategories } = source('src/content/drinks.ts');
  const { getDrinksMenuSchema } = source('src/lib/schema.ts');
  const drinks = drinkCategories.flatMap((category) => category.items);
  for (const id of ['drink-58','drink-59','drink-60','drink-63','drink-64','drink-65']) {
    assert.equal(drinks.find((drink) => drink.id === id).serving, 'Bottle');
  }
  for (const id of ['drink-50','drink-51','drink-52','drink-53']) {
    assert.deepEqual(drinks.find((drink) => drink.id === id).variants.map((variant) => variant.label), ['Glass','Carafe','Bottle']);
  }
  for (const locale of ['en','nl']) {
    const schema = getDrinksMenuSchema(locale);
    const entries = schema.hasMenuSection.flatMap((category) => category.hasMenuItem);
    assert.equal(entries.length, 74);
    assert.equal(schema.inLanguage, locale);
    assert.equal(schema.hasMenuSection.length, 14);
    for (const [index, entry] of entries.entries()) {
      assert.equal(entry.name, locale === 'nl' ? drinks[index].nameNl : drinks[index].name);
      const offers = [entry.offers].flat();
      assert.deepEqual(offers.map((offer) => Number(offer.price)), drinks[index].variants?.map((variant) => variant.price) || [drinks[index].price]);
      assert.ok(offers.every((offer) => offer.priceCurrency === 'EUR'));
    }
  }
});

test('all 75 numbered dishes match the updated 2026 PDF names and prices, without duplicates or gaps', () => {
  assert.equal(menuCategories.length, 12);
  assert.deepEqual(dishes.map(({ id, name, price }) => ({ id, name, price })), fixture);
  assert.equal(new Set(dishes.map((dish) => dish.id)).size, 75);
  assert.equal(new Set(dishes.map((dish) => dish.name.toLowerCase())).size, 75);
  assert.deepEqual(dishes.map((dish) => dish.id), Array.from({ length: 75 }, (_, index) => String(index + 1).padStart(2, '0')));
  assert.equal(new Set(menuCategories.map((category) => category.id)).size, 12);
});

test('all 14 variant sets preserve the printed protein options and exact prices', () => {
  const expected = {
    '16': [['Veg',22.95],['Chicken',25.95],['Lamb',27.95]],
    '17': [['Veg',18.95],['Chicken',19.95],['Lamb/Prawn',22.95]],
    '26': [['Veg',18.95],['Chicken',19.95],['Lamb/Prawn',21.95],['Mixed',23.95]],
    '27': [['Veg',18.95],['Chicken',19.95],['Lamb/Prawn',21.95],['Mixed',22.95]],
    '28': [['Chicken',21.95],['Lamb/Prawn',24.95]],
    '29': [['Chicken',21.95],['Lamb/Prawn',24.95]],
    '30': [['Chicken',22.95],['Lamb/Prawn',25.95]],
    '31': [['Chicken',21.95],['Lamb/Prawn',24.95]],
    '32': [['Chicken',21.95],['Lamb/Prawn',24.95]],
    '33': [['Chicken',21.95],['Lamb/Prawn',24.95]],
    '34': [['Chicken',21.95],['Lamb/Prawn',24.95]],
    '36': [['Chicken',23.95],['Lamb/Prawn',25.95]],
    '37': [['Chicken',22.95],['Lamb/Prawn',24.95]],
    '41': [['Veg/Chicken',21.95],['Lamb/Prawn',24.95],['Mixed',27.95]],
  };
  const actual = Object.fromEntries(dishes.filter((dish) => dish.variants).map((dish) => [dish.id, dish.variants.map(({ label, price }) => [label, price])]));
  assert.deepEqual(actual, expected);
  for (const dish of dishes.filter((dish) => dish.variants)) assert.equal(dish.price, Math.min(...dish.variants.map((variant) => variant.price)));
});

test('allergens transcribe printed symbols and no undocumented spice ratings are added', () => {
  const expected = {
    gluten: ['03','04','07','19','20','21','22','23','24','25','26','27','61','62','63','64','65','66','72'],
    crustaceans: ['08','26','27','28','29','30','31','32','33','34','41','48'],
    soybeans: ['14','15','17','23','24','27','38','39','59','60'], sesame: ['19','20','21','25'],
    milk: ['14','16','28','30','31','39','41','43','44','45','46','47','48','50','51','53','54','62','63','64','65','66','67','70','71','72','73','74','75'],
    nuts: ['30','36','41','49','66','70','71','75'], fish: ['40'], mustard: ['68'],
  };
  for (const [allergen, ids] of Object.entries(expected)) assert.deepEqual(dishes.filter((dish) => dish.allergens.includes(allergen)).map((dish) => dish.id), ids);
  assert.ok(dishes.every((dish) => dish.spiceLevel === undefined));
});

test('every category, dish and priced variant includes English and Dutch copy', () => {
  for (const category of menuCategories) {
    assert.ok(category.name && category.nameNl && category.items.length);
    for (const dish of category.items) {
      assert.ok(dish.name && dish.description && dish.descriptionNl, dish.id);
      assert.equal(dish.nameNl, dish.name, `Food names stay the same in both languages: ${dish.id}`);
      for (const variant of dish.variants || []) assert.ok(variant.labelNl, dish.id);
    }
  }
});

test('all referenced local photographs exist on disk', () => {
  const missing = new Set();
  function scan(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) scan(filename);
      else if (/\.tsx?$/.test(entry.name)) {
        for (const [asset] of fs.readFileSync(filename, 'utf8').matchAll(/\/images\/[a-zA-Z0-9_./-]+\.(?:webp|jpe?g|png)/g)) {
          if (!fs.existsSync(path.join(root, 'public', asset))) missing.add(asset);
        }
      }
    }
  }
  scan(path.join(root, 'src'));
  assert.deepEqual([...missing], []);
});

test('all literal UI strings and visible content have Dutch translations', () => {
  const used = new Set();
  function scan(directory) {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const filename = path.join(directory, entry.name);
      if (entry.isDirectory()) scan(filename);
      else if (/\.tsx?$/.test(entry.name)) {
        const tree = ts.createSourceFile(filename, fs.readFileSync(filename, 'utf8'), ts.ScriptTarget.Latest, true);
        function visit(node) {
          if (ts.isCallExpression(node) && node.expression.getText(tree) === 't' && node.arguments[0] && ts.isStringLiteral(node.arguments[0])) used.add(node.arguments[0].text);
          ts.forEachChild(node, visit);
        }
        visit(tree);
      }
    }
  }
  scan(path.join(root, 'src'));
  const { aboutContent } = source('src/content/about.ts');
  const { chefProfile } = source('src/content/chef.ts');
  const { restaurant } = source('src/content/restaurant.ts');
  const { heroSlides, heroContent } = source('src/content/hero.ts');
  const { faqItems } = source('src/content/faq.ts');
  const { testimonials } = source('src/content/testimonials.ts');
  const { drinkCategories } = source('src/content/drinks.ts');
  const { stats } = source('src/content/stats.ts');
  const { mainNavLinks, mainNavigation, footerQuickLinks } = source('src/content/navigation.ts');
  const { marqueePhotos } = source('src/content/photography.ts');
  marqueePhotos.forEach((photo) => used.add(photo.alt));
  heroSlides.flatMap((slide) => [slide.featuredDish, slide.promotion, slide.locationHighlight].filter(Boolean)).forEach((text) => used.add(text));
  [...mainNavigation, ...footerQuickLinks].forEach((item) => used.add(item.label));
  [restaurant.description, restaurant.shortDescription, restaurant.tagline, ...restaurant.openingHours.map((slot) => slot.day), ...aboutContent.story.paragraphs, ...aboutContent.values.flatMap((value) => [value.title, value.description]), aboutContent.himalayaToAmsterdam.subtitle, aboutContent.himalayaToAmsterdam.title, ...aboutContent.himalayaToAmsterdam.steps.flatMap((step) => [step.title, step.description]), chefProfile.title, ...chefProfile.longDescription.split('\n\n'), chefProfile.experience, chefProfile.philosophy, ...Object.values(heroContent), ...source('src/content/photography.ts').galleryPhotos.map((photo) => photo.alt), ...source('src/content/photography.ts').barPhotos.map((photo) => photo.alt), ...heroSlides.flatMap((slide) => [slide.subtitle, slide.title, slide.description].filter(Boolean)), ...faqItems.flatMap((item) => [item.question, item.answer]), ...testimonials.map((item) => item.text), ...drinkCategories.flatMap((category) => [...(category.nameNl ? [] : [category.name]), ...category.items.flatMap((item) => [...(item.nameNl ? [] : [item.name]), ...(item.descriptionNl ? [] : [item.description]), item.origin, item.serving].filter(Boolean))]), ...stats.map((item) => item.label), ...mainNavLinks.map((link) => link.label)].forEach((text) => used.add(text));
  assert.deepEqual([...used].filter((text) => !dutch[text]), []);
});

test('locale links preserve page, category and query; fallback reports missing copy', () => {
  assert.equal(localizedPath('/menu#tandoori', 'nl'), '/nl/menu#tandoori');
  assert.equal(localizedPath('/nl/menu?source=header#momo-noodles', 'en'), '/menu?source=header#momo-noodles');
  assert.equal(localizedPath('/en/chef', 'nl'), '/nl/chef');
  const warnings = [];
  const warn = console.warn;
  console.warn = (message) => warnings.push(message);
  try { assert.equal(createTranslator('nl')('untranslated-test-key'), 'untranslated-test-key'); } finally { console.warn = warn; }
  assert.equal(warnings.length, 1);
});

test('18 localized metadata records and sitemap URLs have reciprocal alternates and distinct canonicals', () => {
  const { getPageMetadata } = source('src/lib/seo.ts');
  const sitemap = source('src/app/sitemap.ts').default();
  assert.equal(sitemap.length, 18);
  assert.equal(new Set(sitemap.map((item) => item.url)).size, 18);
  const titles = new Set();
  for (const locale of ['en','nl']) {
    for (const [index, page] of ['home','about','menu','foodMenu','drinksMenu','chef','gallery','contact','faq'].entries()) {
      const meta = getPageMetadata(page, locale);
      const expected = 'https://himalayankitchen.nl' + localizedPath(pagePaths[index] || '/', locale);
      assert.equal(meta.alternates.canonical, expected);
      assert.equal(meta.alternates.languages[locale], expected);
      assert.equal(meta.openGraph.url, expected);
      assert.ok(meta.description.length > 60);
      titles.add(meta.title.absolute);
    }
  }
  assert.equal(titles.size, 18);
});

test('structured data uses the same 75 dishes and EUR prices without unverified ratings or coordinates', () => {
  const { getMenuSchema, getRestaurantSchema } = source('src/lib/schema.ts');
  for (const locale of ['en','nl']) {
    const schema = getMenuSchema(locale);
    const menuItems = schema.hasMenuSection.flatMap((section) => section.hasMenuItem);
    assert.equal(menuItems.length, 75);
    assert.equal(schema.inLanguage, locale);
    for (const [index, item] of menuItems.entries()) {
      assert.equal(item.identifier, dishes[index].id);
      assert.equal(item.name, dishes[index].name);
      assert.deepEqual([item.offers].flat().map((offer) => Number(offer.price)), dishes[index].variants?.map((variant) => variant.price) || [dishes[index].price]);
      for (const offer of [item.offers].flat()) {
        assert.equal(offer.priceCurrency, 'EUR');
        assert.match(offer.price, /^\d+\.\d{2}$/);
      }
    }
    const restaurant = getRestaurantSchema(locale)['@graph'][0];
    assert.equal(restaurant.address.streetAddress, 'Ten Katestraat 45H');
    assert.equal(restaurant.openingHoursSpecification.length, 6);
    const byDay = Object.fromEntries(restaurant.openingHoursSpecification.map((slot) => [slot.dayOfWeek.split('/').pop(), [slot.opens, slot.closes]]));
    assert.deepEqual(byDay, { Tuesday: ['16:30','22:00'], Wednesday: ['16:30','22:00'], Thursday: ['16:30','22:00'], Friday: ['16:30','22:00'], Saturday: ['16:00','22:00'], Sunday: ['16:00','22:00'] });
    assert.equal(restaurant.aggregateRating, undefined);
    assert.equal(restaurant.geo, undefined);
  }
});
