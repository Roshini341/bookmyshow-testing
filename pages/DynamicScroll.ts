import { Page } from '@playwright/test';
//import { BasePage } from './BasePage';

export class DynamicScrollPage {
  constructor(private page: Page) {}

  async gotoMoviesPage(): Promise<void> {
    await this.page.goto('https://in.bookmyshow.com/explore/movies-coimbatore', {
      waitUntil: 'domcontentloaded',
      timeout: 120000
    });
  }

  async scrollPage(times: number = 5, delay: number = 1000): Promise<void> {
    for (let i = 0; i < times; i++) {
      await this.page.mouse.wheel(0, 1000);
      await this.page.waitForTimeout(delay);
    }
  }

  async scrollSections(sections: string[]): Promise<void> {
    for (const section of sections) {
      try {
        const link = this.page.getByRole('link', { name: section });
        await link.first().waitFor({ state: 'attached', timeout: 10000 });
        if (await link.first().isVisible()) {
          await link.first().click();
          await this.page.waitForTimeout(2000);
          await this.scrollPage();
        } else {
          console.warn(`Skipping "${section}" — not visible`);
        }
      } catch (error) {
        console.warn(`Skipping section "${section}" due to error:`, error);
      }
    }
  }

  async scrollStreamSection(): Promise<void> {
    try {
      const streamLink = this.page.getByRole('link', { name: 'Stream' });
      await streamLink.first().waitFor({ state: 'attached', timeout: 10000 });
      if (await streamLink.first().isVisible()) {
        await streamLink.first().click();
        await this.page.waitForTimeout(2000);
        await this.scrollPage();
      } else {
        console.warn(`Skipping "Stream" — not visible`);
      }
    } catch (error) {
      console.warn('Skipping "Stream" due to error:', error);
    }
  }
}
