import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

// Use project-installed QA tools, or an external tools directory to keep runtime dependencies unchanged.
const requireTools = createRequire(process.env.BROWSER_TOOLS_DIR ? path.resolve(process.env.BROWSER_TOOLS_DIR, 'package.json') : import.meta.url);
const { chromium } = requireTools('playwright');
const { default: AxeBuilder } = requireTools('@axe-core/playwright');
const base = process.env.SITE_URL || 'http://127.0.0.1:6500';
const output = process.env.QA_OUTPUT || '/tmp/himalayan-qa';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const report = { pages: [], accessibility: [], checks: [], errors: [], externalRequestsBlocked: true };
const routes = ['', '/about', '/menu', '/menu/food', '/menu/drinks', '/chef', '/gallery', '/contact', '/faq'];
const categoryCounts = [10, 5, 3, 9, 6, 7, 3, 5, 12, 6, 3, 6];

try {
  for (const [device, viewport] of Object.entries({ desktop: { width: 1440, height: 1000 }, mobile: { width: 390, height: 844 } })) {
    const context = await browser.newContext({ viewport, reducedMotion: 'reduce' });
    // Keep checks deterministic: no bookings, messages, map calls, or third-party network effects.
    await context.route('**/*', (route) => {
      const url = new URL(route.request().url());
      return url.origin === new URL(base).origin || ['data:', 'blob:'].includes(url.protocol) ? route.continue() : route.abort();
    });
    const page = await context.newPage();
    page.on('pageerror', (error) => report.errors.push(`${device}: ${error.message}`));
    page.on('console', (message) => { if (/\[i18n\]|hydrat/i.test(message.text())) report.errors.push(`${device}: ${message.text()}`); });
    page.on('response', (response) => { if (response.url().startsWith(base) && response.status() >= 400) report.errors.push(`${device}: ${response.status()} ${response.url()}`); });

    for (const locale of ['en', 'nl']) {
      for (const route of routes) {
        const pathname = (locale === 'nl' ? '/nl' : '') + route || '/';
        const response = await page.goto(base + pathname, { waitUntil: 'networkidle' });
        assert.equal(response.status(), 200, pathname);
        assert.equal(await page.locator('html').getAttribute('lang'), locale);
        assert.equal(await page.locator('h1').count(), 1, `one H1 on ${pathname}`);
        assert.equal(new URL(await page.locator('link[rel="canonical"]').getAttribute('href')).href, new URL('https://himalayankitchen.nl' + pathname).href);
        assert.ok(await page.title());
        for (const href of await page.locator('[data-action="order"]').evaluateAll((links) => links.map((link) => link.href))) assert.equal(href, 'https://findatable.nl/restaurant/the-himalayan-kitchen/order/pickup');
        assert.equal(await page.locator('[data-action="reservation"]').count(), 0);
        const restaurantSchema = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(JSON.parse).find((schema) => schema['@graph'])['@graph'][0];
        assert.deepEqual(restaurantSchema.openingHoursSpecification.map((slot) => [slot.dayOfWeek.split('/').pop(), slot.opens, slot.closes]), [['Tuesday','16:30','22:00'],['Wednesday','16:30','22:00'],['Thursday','16:30','22:00'],['Friday','16:30','22:00'],['Saturday','16:00','22:00'],['Sunday','16:00','22:00']]);
        assert.equal(await page.locator('meta[name="description"]').count(), 1);
        for (const alt of ['en', 'nl']) assert.equal(await page.locator(`link[rel="alternate"][hreflang="${alt}"]`).count(), 1);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth), false, `no horizontal overflow: ${device} ${pathname}`);
        const broken = await page.locator('img').evaluateAll((images) => images.filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.src));
        assert.deepEqual(broken, [], `images on ${pathname}`);
        const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
        schemas.forEach((json) => assert.ok(JSON.parse(json)['@context']));
        if (route === '/menu') assert.equal(await page.locator('[data-menu-choice]').count(), 2);
        if (route === '/menu/food' || route === '/menu/drinks') {
          const isFood = route === '/menu/food';
          assert.equal(await page.locator('[data-dish-id]').count(), isFood ? 75 : 0);
          assert.equal(await page.locator('[data-drink-id]').count(), isFood ? 0 : 74);
          if (!isFood) assert.equal(await page.locator('[data-drink-id="drink-19"] h4').textContent(), 'Arossence Pot Tea');
          const schema = schemas.map(JSON.parse).find((item) => item['@type'] === 'Menu');
          assert.equal(schema.hasMenuSection.flatMap((section) => section.hasMenuItem).length, isFood ? 75 : 74);
        }
        if (route === '/contact') {
          assert.ok(await page.locator('a[href="tel:+31202623880"]').count());
          assert.ok(await page.locator('a[href="mailto:info@himalayankitchen.nl"]').count());
          assert.match(await page.locator('iframe').getAttribute('src'), /www\.google\.com\/maps/);
        }
        assert.equal(await page.locator('a[href="https://findatable.nl/restaurant/the-himalayan-kitchen"]').count(), 0);
        assert.ok((await page.locator('.footer-credit').textContent()).includes('Powered by New Soft Solution'));
        assert.equal(await page.locator('.footer-credit a').getAttribute('href'), 'http://newsoftsolution.com/');
        assert.equal(await page.locator('.footer-credit a').getAttribute('target'), '_blank');
        assert.equal(await page.locator('main .opening-hours, main .booking-hours').count(), 0);
        assert.ok(!(await page.locator('body').innerText()).includes('€'));
        assert.equal(await page.locator('script[data-access-key]').count(), 1);
        const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
        report.accessibility.push({ device, pathname, violations: axe.violations.map(({ id, impact, nodes }) => ({ id, impact, elements: nodes.map((node) => node.target.join(' ')) })) });
        report.pages.push({ device, pathname, status: response.status(), title: await page.title(), dishes: route === '/menu/food' ? 75 : undefined });
        if (!route) await page.screenshot({ path: path.join(output, `${locale}-home-${device}.png`), fullPage: true });
        if (!route) await page.screenshot({ path: path.join(output, `${locale}-home-${device}-top.png`), fullPage: false });
        if (route === '/menu') await page.screenshot({ path: path.join(output, `${locale}-menu-${device}.png`), fullPage: false });
      }
    }

    await page.goto(base + '/menu/food', { waitUntil: 'networkidle' });
    const buttons = page.locator('.menu-browser .category-buttons button');
    assert.equal(await buttons.count(), 13);
    for (let index = 1; index <= 12; index++) {
      await buttons.nth(index).click();
      assert.equal(await buttons.nth(index).getAttribute('aria-pressed'), 'true');
      await page.waitForFunction((count) => document.querySelectorAll('[data-dish-id]').length === count, categoryCounts[index - 1]);
    }
    await buttons.nth(4).click();
    assert.match(page.url(), /#momo-noodles$/);
    await page.locator('.language-switcher a[lang="nl"]').click();
    await page.waitForURL('**/nl/menu/food#momo-noodles');
    await page.waitForFunction(() => document.querySelectorAll('[data-dish-id]').length === 9);
    assert.equal(await page.locator('html').getAttribute('lang'), 'nl');
    assert.equal(await page.locator('.menu-browser .category-buttons button[aria-pressed="true"]').textContent(), 'Momo & noedelspecialiteiten');
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForFunction(() => document.querySelectorAll('[data-dish-id]').length === 9);
    const cookie = (await context.cookies()).find((cookie) => cookie.name === 'hk-language');
    assert.equal(cookie.value, 'nl');
    await page.goto(base + '/');
    await page.waitForURL('**/nl');
    await page.locator('.language-switcher a[lang="en"]').click();
    await page.waitForURL(base + '/');
    assert.equal((await context.cookies()).find((cookie) => cookie.name === 'hk-language').value, 'en');
    if (device === 'desktop') {
      await page.locator('.desktop-nav details[data-navigation-group="Menu"] summary').click();
      await page.locator('.desktop-nav').getByRole('link', { name: 'Food Menu', exact: true }).click();
      await page.waitForURL('**/menu/food');
      await page.waitForFunction(() => document.querySelectorAll('[data-dish-id]').length === 75);
      assert.equal(await page.locator('.desktop-nav a[aria-current="page"]').textContent(), 'Food Menu');
    }
    if (device === 'mobile') {
      const toggle = page.locator('.mobile-toggle');
      await toggle.click();
      assert.equal(await toggle.getAttribute('aria-expanded'), 'true');
      await page.locator('#mobile-navigation a').first().focus();
      await page.keyboard.press('Escape');
      assert.equal(await toggle.getAttribute('aria-expanded'), 'false');
      assert.equal(await toggle.evaluate((button) => button === document.activeElement), true);
      await toggle.click();
      await page.locator('#mobile-navigation').getByRole('link', { name: 'Contact', exact: true }).click();
      await page.waitForURL('**/contact');
      assert.equal(await page.locator('#mobile-navigation').isVisible(), false);
    }
    // Drinks use the same selection controls and URL/language behavior as food.
    await page.goto(base + '/menu/drinks', { waitUntil: 'networkidle' });
    const drinkButtons = page.locator('.drinks-browser .category-buttons button');
    assert.equal(await drinkButtons.count(), 15);
    const drinkCounts = [7,4,8,1,4,1,10,3,6,6,7,5,6,6];
    for (let index = 1; index <= 14; index++) {
      await drinkButtons.nth(index).click();
      await page.waitForFunction((count) => document.querySelectorAll('[data-drink-id]').length === count, drinkCounts[index - 1]);
      assert.equal(await drinkButtons.nth(index).getAttribute('aria-pressed'), 'true');
      assert.equal(await page.locator('.drinks-browser .menu-category').count(), 1);
    }
    await drinkButtons.nth(2).click();
    await page.locator('.language-switcher a[lang="nl"]').click();
    await page.waitForURL('**/nl/menu/drinks#drinks-himalayan-mocktails');
    await page.waitForFunction(() => document.querySelectorAll('[data-drink-id]').length === 4);
    await page.reload({ waitUntil: 'networkidle' });
    assert.equal(await page.locator('[data-drink-id]').count(), 4);
    await page.locator('.drinks-browser .category-buttons button').first().click();
    await page.waitForFunction(() => document.querySelectorAll('[data-drink-id]').length === 74);
    const drinksAxe = await new AxeBuilder({ page }).include('#drinks').withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa']).analyze();
    report.accessibility.push({ device, pathname: '/nl/menu/drinks', violations: drinksAxe.violations.map(({id,impact,nodes})=>({id,impact,elements:nodes.map(node=>node.target.join(' '))})) });
    report.checks.push(`${device}: all 14 drinks filters; active states; all drinks; language/hash persistence; reload`);
    report.checks.push(`${device}: all 12 category filters; language/category persistence; reload; language cookie; English return; ${device === 'mobile' ? 'mobile navigation' : 'desktop navigation'}`);
    await context.close();
  }

  // Tablet layout, no-JavaScript menu crawlability, SEO endpoints, and error status.
  const context = await browser.newContext({ viewport: { width: 768, height: 1024 }, javaScriptEnabled: false });
  const page = await context.newPage();
  for (const pathname of ['/', '/menu', '/menu/food', '/menu/drinks', '/nl', '/nl/menu', '/nl/menu/food', '/nl/menu/drinks']) {
    await page.goto(base + pathname);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    if (pathname.includes('/menu')) { assert.equal(await page.locator('[data-dish-id]').count(), pathname.endsWith('/food') ? 75 : 0); assert.equal(await page.locator('[data-drink-id]').count(), pathname.endsWith('/drinks') ? 74 : 0); }
  }
  const sitemap = await context.request.get(base + '/sitemap.xml');
  assert.equal(sitemap.status(), 200);
  assert.equal(((await sitemap.text()).match(/<loc>/g) || []).length, 18);
  const robots = await context.request.get(base + '/robots.txt');
  assert.equal(robots.status(), 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/himalayankitchen.nl\/sitemap.xml/);
  assert.equal((await context.request.get(base + '/does-not-exist')).status(), 404);
  assert.equal((await context.request.get(base + '/en/menu', { maxRedirects: 0 })).status(), 308);
  report.checks.push('tablet layouts; server-rendered 75-item menus without JavaScript; sitemap; robots; 404; English alias redirect');
  await context.close();
  assert.deepEqual(report.errors, []);
  const violations = report.accessibility.filter((item) => item.violations.length);
  assert.deepEqual(violations, [], 'WCAG accessibility violations');
} finally {
  await writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  await browser.close();
}
console.log(JSON.stringify({ pages: report.pages.length, accessibilityScans: report.accessibility.length, violations: 0, checks: report.checks, output }, null, 2));
