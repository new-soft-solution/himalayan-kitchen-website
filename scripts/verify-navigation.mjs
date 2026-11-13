import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const requireTools = createRequire(
  process.env.BROWSER_TOOLS_DIR
    ? path.resolve(process.env.BROWSER_TOOLS_DIR, "package.json")
    : import.meta.url,
);
const { chromium } = requireTools("playwright");
const { default: AxeBuilder } = requireTools("@axe-core/playwright");
const base = process.env.SITE_URL || "http://127.0.0.1:6500";
const output = process.env.QA_OUTPUT || "/tmp/himalayan-navigation-qa";
await mkdir(output, { recursive: true });

const browser = await chromium.launch({
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const report = { routes: [], checks: [], accessibility: [], errors: [] };
const routes = ["/", "/about", "/menu", "/menu/food", "/menu/drinks", "/chef", "/gallery", "/contact", "/faq"];
const labels = {
  en: { explore: "Explore", chef: "Our Chef", gallery: "Gallery", faq: "FAQ" },
  nl: { explore: "Ontdek", chef: "Onze chef", gallery: "Galerij", faq: "Veelgestelde vragen" },
};
const routeFor = (route, locale) => locale === "nl" ? `/nl${route === "/" ? "" : route}` : route;

async function contextFor(options = {}) {
  const context = await browser.newContext({ reducedMotion: "reduce", ...options });
  await context.route("**/*", (route) => {
    const url = new URL(route.request().url());
    const local = url.origin === new URL(base).origin || ["data:", "blob:"].includes(url.protocol);
    return local && route.request().resourceType() !== "media" ? route.continue() : route.abort();
  });
  return context;
}

function collectErrors(page, label) {
  page.setDefaultNavigationTimeout(180000);
  page.on("pageerror", (error) => report.errors.push(`${label}: ${error.message}`));
  page.on("console", (message) => {
    if (/\[i18n\]|hydration failed/i.test(message.text())) report.errors.push(`${label}: ${message.text()}`);
  });
}

async function checkShell(page, locale, interactive = true) {
  assert.equal(await page.locator("html").getAttribute("lang"), locale);
  assert.equal(await page.locator("h1").count(), 1);
  assert.equal(await page.locator('footer a[href$="/chef"], footer a[href$="/gallery"]').count(), 0);
  assert.equal(await page.locator('a[href$=".pdf"], a[download]').count(), 0);
  if (interactive) assert.equal(await page.locator("script[data-access-key]").count(), 1);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
}

async function checkAccessibility(page, label, includeMenu = false) {
  const audit = new AxeBuilder({ page })
    .include(".site-header")
    .include(".site-footer")
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]);
  if (includeMenu) audit.include(".menu-page");
  const result = await audit.analyze();
  const violations = result.violations.map(({ id, impact, nodes }) => ({
    id, impact, targets: nodes.map((node) => node.target),
  }));
  report.accessibility.push({ label, violations });
  assert.deepEqual(violations, [], label);
}

try {
  // Check the actual rendered metadata, page availability and menus in both languages.
  for (const locale of ["en", "nl"]) {
    const context = await contextFor({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    collectErrors(page, locale);
    for (const route of routes) {
      const pathname = routeFor(route, locale);
      const response = await page.goto(base + pathname, { waitUntil: "networkidle" });
      assert.equal(response.status(), 200, pathname);
      await checkShell(page, locale);
      assert.equal(new URL(await page.locator('link[rel="canonical"]').getAttribute("href")).href, new URL(`https://himalayankitchen.nl${pathname}`).href);
      for (const language of ["en", "nl"]) {
        assert.equal(new URL(await page.locator(`link[rel="alternate"][hreflang="${language}"]`).getAttribute("href")).href, new URL(`https://himalayankitchen.nl${routeFor(route, language)}`).href);
      }
      const schemas = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(JSON.parse);
      const restaurant = schemas.find((schema) => schema["@graph"])["@graph"][0];
      assert.deepEqual(restaurant.servesCuisine, ["Nepalese", "Indian"]);
      assert.equal(restaurant.address.streetAddress, "Ten Katestraat 45H");
      assert.equal(restaurant.address.postalCode, "1053 BX");
      assert.match(restaurant.hasMap, /google\.com\/maps/);
      assert.equal(restaurant.openingHoursSpecification.length, 6);
      assert.equal(restaurant.aggregateRating, undefined);
      if (route === "/") {
        assert.match(await page.locator(".local-dining address").innerText(), /Kinkerbuurt, Amsterdam Oud-West/);
        assert.match(await page.locator('meta[name="description"]').getAttribute("content"), /Kinkerbuurt/);
      }
      if (route === "/menu") {
        assert.equal(await page.locator("[data-menu-choice]").count(), 2);
        assert.equal(await page.locator("[data-dish-id], [data-drink-id]").count(), 0);
        await checkAccessibility(page, `${locale} menu overview`, true);
        await page.screenshot({ path: path.join(output, `${locale}-menus-overview.png`) });
      }
      if (route === "/menu/food" || route === "/menu/drinks") {
        const isFood = route === "/menu/food";
        for (const [attribute, count] of [["data-dish-id", isFood ? 75 : 0], ["data-drink-id", isFood ? 0 : 74]]) {
          const ids = await page.locator(`[${attribute}]`).evaluateAll((items, attribute) => items.map((item) => item.getAttribute(attribute)), attribute);
          assert.equal(ids.length, count);
          assert.equal(new Set(ids).size, count);
        }
        const menu = schemas.find((schema) => schema["@type"] === "Menu");
        assert.equal(menu.url, `https://himalayankitchen.nl${pathname}`);
        const breadcrumbs = schemas.find((schema) => schema["@type"] === "BreadcrumbList");
        assert.equal(breadcrumbs.itemListElement.length, 3);
        await page.screenshot({ path: path.join(output, `${locale}-${isFood ? "food" : "drinks"}-page.png`) });
        await checkAccessibility(page, `${locale} ${route}`, true);
      }
      report.routes.push({ pathname, status: response.status(), title: await page.title() });
    }

    await page.goto(base + routeFor("/", locale), { waitUntil: "networkidle" });
    const nav = page.locator(".desktop-nav");
    const group = nav.locator('details[data-navigation-group="Explore"]');
    const summary = group.locator("summary");
    assert.equal(await nav.locator(":scope > a, :scope > details > summary").count(), 5);
    assert.equal(await summary.innerText(), labels[locale].explore);
    assert.equal(await group.locator("a").count(), 3);
    assert.equal(await group.evaluate((element) => element.open), false);

    await summary.focus();
    await page.keyboard.press("Enter");
    assert.equal(await group.evaluate((element) => element.open), true);
    await page.keyboard.press("Tab");
    assert.equal(await group.locator("a").first().evaluate((element) => element === document.activeElement), true);
    await page.keyboard.press("Escape");
    assert.equal(await group.evaluate((element) => element.open), false);
    assert.equal(await summary.evaluate((element) => element === document.activeElement), true);
    await page.keyboard.press("Space");
    assert.equal(await group.evaluate((element) => element.open), true);
    await page.mouse.click(20, 200);
    assert.equal(await group.evaluate((element) => element.open), false);

    const menuGroup = nav.locator('details[data-navigation-group="Menu"]');
    for (const kind of ["food", "drinks"]) {
      await menuGroup.locator("summary").click();
      assert.equal(await menuGroup.locator("a:visible").count(), 2);
      assert.equal(await group.evaluate((element) => element.open), false);
      if (kind === "food") {
        await checkAccessibility(page, `${locale} desktop expanded Menu`);
        await page.screenshot({ path: path.join(output, `${locale}-desktop-menu.png`) });
      }
      await menuGroup.locator(`a[href="${routeFor(`/menu/${kind}`, locale)}"]`).click();
      await page.waitForURL(base + routeFor(`/menu/${kind}`, locale));
      assert.equal(await menuGroup.evaluate((element) => element.open), false);
      assert.equal(await menuGroup.getAttribute("data-current"), "true");
    }

    // Each nested page stays reachable through real navigation links.
    for (const [label, route] of [["chef", "/chef"], ["gallery", "/gallery"], ["faq", "/faq"]]) {
      await summary.click();
      await group.getByRole("link", { name: labels[locale][label], exact: true }).click();
      await page.waitForURL(base + routeFor(route, locale));
      assert.equal(await group.evaluate((element) => element.open), false);
      assert.equal(await group.getAttribute("data-current"), "true");
      await summary.click();
      assert.equal(await group.locator('a[aria-current="page"]').getAttribute("href"), routeFor(route, locale));
      await page.keyboard.press("Escape");
    }
    await summary.click();
    await checkAccessibility(page, `${locale} desktop expanded navigation`);
    await page.screenshot({ path: path.join(output, `${locale}-desktop-navigation.png`) });
    await page.locator(`.language-switcher a[lang="${locale === "en" ? "nl" : "en"}"]`).click();
    await page.waitForURL(base + routeFor("/faq", locale === "en" ? "nl" : "en"));
    report.checks.push(`${locale}: 9 pages, metadata, local schema, footer exclusions, 5 header entries, keyboard, outside click, 3 nested routes, language switch`);
    await context.close();
  }

  // Category filtering, language persistence and old bookmarks across split pages.
  {
    const context = await contextFor({ viewport: { width: 1440, height: 1000 } });
    const page = await context.newPage();
    collectErrors(page, "menu separation");
    await page.goto(base + "/menu/food", { waitUntil: "networkidle" });
    await page.locator(".menu-browser .category-buttons button").nth(4).click();
    await page.waitForFunction(() => document.querySelectorAll("[data-dish-id]").length === 9);
    await page.locator('.language-switcher a[lang="nl"]').click();
    await page.waitForURL(base + "/nl/menu/food#momo-noodles");
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForFunction(() => document.querySelectorAll("[data-dish-id]").length === 9);
    await page.getByRole("navigation", { name: "Kies een menukaart" }).getByRole("link", { name: "Drankenkaart", exact: true }).click();
    await page.waitForURL(base + "/nl/menu/drinks");
    await page.locator(".drinks-browser .category-buttons button").nth(2).click();
    await page.waitForFunction(() => document.querySelectorAll("[data-drink-id]").length === 4);
    await page.locator('.language-switcher a[lang="en"]').click();
    await page.waitForURL(base + "/menu/drinks#drinks-himalayan-mocktails");
    await page.reload({ waitUntil: "networkidle" });
    await page.waitForFunction(() => document.querySelectorAll("[data-drink-id]").length === 4);
    await page.goto(base + "/menu#drinks-himalayan-mocktails");
    await page.waitForURL(base + "/menu/drinks#drinks-himalayan-mocktails");
    await page.waitForFunction(() => document.querySelectorAll("[data-drink-id]").length === 4);
    await page.goto(base + "/nl/menu#vegetarian-mains");
    await page.waitForURL(base + "/nl/menu/food#vegetarian-vegan-mains");
    await page.waitForFunction(() => document.querySelectorAll("[data-dish-id]").length === 12);
    report.checks.push("separate food/drinks filters; language and hash persistence; reload; cross-menu links; old food/drinks bookmarks");
    await context.close();
  }

  // Mobile grouping, touch controls, Escape focus and navigation closure.
  for (const locale of ["en", "nl"]) {
    const context = await contextFor({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const page = await context.newPage();
    collectErrors(page, `${locale} mobile`);
    await page.goto(base + routeFor("/", locale), { waitUntil: "networkidle" });
    const toggle = page.locator(".mobile-toggle");
    const nav = page.locator("#mobile-navigation");
    const group = nav.locator('details[data-navigation-group="Explore"]');
    const summary = group.locator("summary");
    await toggle.click();
    assert.equal(await toggle.getAttribute("aria-expanded"), "true");
    await summary.click();
    assert.equal(await group.locator("a:visible").count(), 3);
    await checkShell(page, locale);
    await checkAccessibility(page, `${locale} mobile expanded navigation`);
    await page.screenshot({ path: path.join(output, `${locale}-mobile-navigation.png`) });
    await page.keyboard.press("Escape");
    assert.equal(await group.evaluate((element) => element.open), false);
    assert.equal(await nav.isVisible(), true);
    await page.keyboard.press("Escape");
    assert.equal(await nav.isVisible(), false);
    assert.equal(await toggle.evaluate((element) => element === document.activeElement), true);

    for (const [label, route] of [["chef", "/chef"], ["gallery", "/gallery"], ["faq", "/faq"]]) {
      await toggle.click();
      await summary.click();
      await group.getByRole("link", { name: labels[locale][label], exact: true }).click();
      await page.waitForURL(base + routeFor(route, locale));
      await page.waitForFunction(() => document.querySelector("#mobile-navigation").hidden);
      assert.equal(await toggle.getAttribute("aria-expanded"), "false");
    }
    const menuGroup = nav.locator('details[data-navigation-group="Menu"]');
    for (const kind of ["food", "drinks"]) {
      await toggle.click();
      await menuGroup.locator("summary").click();
      assert.equal(await menuGroup.locator("a:visible").count(), 2);
      if (kind === "food") {
        await checkAccessibility(page, `${locale} mobile expanded Menu`);
        await page.screenshot({ path: path.join(output, `${locale}-mobile-menu.png`) });
      }
      await menuGroup.locator(`a[href="${routeFor(`/menu/${kind}`, locale)}"]`).click();
      await page.waitForURL(base + routeFor(`/menu/${kind}`, locale));
      await page.waitForFunction(() => document.querySelector("#mobile-navigation").hidden);
    }
    report.checks.push(`${locale}: mobile touch, both Menu pages, Explore pages, Escape focus, menu closes after each nested route`);
    await context.close();
  }

  // Tablet/small-phone widths and a genuinely usable navigation without JavaScript.
  const context = await contextFor({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const width of [320, 768, 1024, 1200]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const route of ["/menu", "/menu/food", "/menu/drinks"]) {
      await page.goto(base + "/nl" + route);
      await checkShell(page, "nl", false);
      assert.equal(await page.locator("[data-dish-id]").count(), route === "/menu/food" ? 75 : 0);
      assert.equal(await page.locator("[data-drink-id]").count(), route === "/menu/drinks" ? 74 : 0);
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base + "/");
  await page.locator('.desktop-nav details[data-navigation-group="Explore"] summary').click();
  await page.locator('.desktop-nav a[href="/gallery"]').click();
  assert.equal(new URL(page.url()).pathname, "/gallery");
  const sitemap = await context.request.get(base + "/sitemap.xml");
  assert.equal(sitemap.status(), 200);
  assert.equal(((await sitemap.text()).match(/<loc>/g) || []).length, 18);
  assert.equal((await context.request.get(base + "/robots.txt")).status(), 200);
  report.checks.push("320/768/1024/1200px layouts; crawlable complete menu; native no-JavaScript dropdown navigation; all 18 sitemap URLs and robots");
  await context.close();
  assert.deepEqual(report.errors, []);
} finally {
  await writeFile(path.join(output, "report.json"), JSON.stringify(report, null, 2));
  await browser.close();
}

console.log(JSON.stringify({ pages: report.routes.length, checks: report.checks, accessibilityScans: report.accessibility.length, errors: report.errors, output }, null, 2));
