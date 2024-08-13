import puppeteer from "puppeteer";

describe("widget", () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: false,
      slowMo: 100,
      devtools: true,
      env: {
        DISPLAY: ":10.0"
      }
    });

    page = await browser.newPage();
  });

  test("should show popover", async () => {

    await page.goto("http://localhost:9000");
    await page.waitForSelector(".btn");
    await page.click(".btn");
  }, 20000);

  test("should remove popover", async () => {
    await page.goto("http://localhost:9000");
    await page.waitForSelector(".btn");
    await page.click(".btn");
    await page.waitForSelector(".popover");
    await page.click(".btn");
  }, 20000);

  afterEach(async () => {
    if (browser) {
      await browser.close();
    }
  });
});