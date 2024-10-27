import { chromium, Browser, BrowserContext, Page } from "playwright";
import { test as baseTest } from "@playwright/test";

type BrowserSetup = {
  browser: Browser;
  context: BrowserContext;
  page: Page;
};

type TestFixtures = {
  browserSetup: BrowserSetup;
  page: Page;
};

export const test = baseTest.extend<TestFixtures>({
  browserSetup: async ({}, use) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    try {
      await use({ browser, context, page });
    } finally {
      await context.close();
      await browser.close();
    }
  },
  page: async ({ browserSetup }, use) => {
    await use(browserSetup.page);
  },
});
