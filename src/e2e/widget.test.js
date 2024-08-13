import puppeteer from 'puppeteer';

jest.setTimeout(20000);

describe('widget', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  })

  test('should show popover', async () => {
    await page.goto('http://localhost:9000');
    await page.waitForSelector('.btn');
    await page.click('.btn');
  })

  test('should remove popover', async () => {
    await page.goto('http://localhost:9000');
    await page.waitForSelector('.btn');
    await page.click('.btn');
    await page.waitForSelector('.popover');
    await page.click('.btn');
  })

  afterEach(async () => {
    await browser.close();
  });
})