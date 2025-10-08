import { Page, Locator, expect } from '@playwright/test';
 
export class BasePage {
  protected page: Page;
 
  constructor(page: Page) {
    this.page = page;
  }
 
  // Navigate to a URL
  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }
 
  // Click on a locator
  async click(selector: string): Promise<void> {
    await this.page.locator(selector).click();
  }
 
  // Fill input field
  async fill(selector: string, value: string): Promise<void> {
    await this.page.locator(selector).fill(value);
  }
 
  // Wait for element to be visible
  async waitFor(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
  }
 
  // Get inner text of a locator
  async getText(selector: string): Promise<string> {
    return await this.page.locator(selector).innerText();
  }
 
  // Get all inner texts from a list of elements
  async getAllTexts(selector: string): Promise<string[]> {
    return await this.page.locator(selector).allInnerTexts();
  }
 
  // Assert visibility
  async expectVisible(selector: string): Promise<void> {
    await expect(this.page.locator(selector)).toBeVisible();
  }
 
  // Take screenshot
  async screenshot(path: string): Promise<void> {
    await this.page.screenshot({ path, fullPage: true });
  }
 
  // Get locator object
  getLocator(selector: string): Locator {
    return this.page.locator(selector);
  }
}
 