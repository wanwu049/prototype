import { chromium } from "playwright";
import path from "node:path";

const fileUrl = `file://${path.resolve("prototype/index.html")}`;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 420, height: 900 },
  deviceScaleFactor: 2,
});

await page.goto(fileUrl, { waitUntil: "load" });
await page.waitForTimeout(300);
await page.screenshot({ path: "prototype/home.png", fullPage: true });
await browser.close();

