import { Page } from '@playwright/test';

export class SignInPage {
  constructor(private page: Page) {}

  async gotoHomePage(): Promise<void> {
    await this.page.goto('https://in.bookmyshow.com/explore/home/coimbatore', {
      waitUntil: 'domcontentloaded',
      timeout: 90000
    });
    await this.page.waitForTimeout(2000);
  }

  async openSignInModal(): Promise<void> {
    await this.page.getByText('Sign in').click();
    await this.page.waitForTimeout(1000);
    await this.page.getByRole('textbox', { name: 'Continue with mobile number' }).click();
  }

  async enterMobileNumber(mobile: string): Promise<void> {
    await this.page.locator('#userMobileNumber').fill(mobile);
    await this.page.waitForTimeout(1000);
  }

  async isInvalidMobileErrorVisible(): Promise<boolean> {
    return await this.page.locator('text=Invalid mobile number').isVisible();
  }

  async captureScreenshot(filename: string): Promise<void> {
    await this.page.screenshot({ path: filename, fullPage: true });
  }
}
