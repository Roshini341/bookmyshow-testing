import { test, expect } from '@playwright/test';
import { SignInPage } from '../pages/SignInPage';

test('Sign-in with invalid mobile number and capture screenshot', async ({ page }) => {
  const signInPage = new SignInPage(page);

  await test.step('Navigate to BookMyShow homepage', async () => {
    await signInPage.gotoHomePage();
  });

  await test.step('Open sign-in modal', async () => {
    await signInPage.openSignInModal();
  });

  await test.step('Enter invalid mobile number', async () => {
    await signInPage.enterMobileNumber('1234567890');
  });

  await test.step('Check for error and capture screenshot if needed', async () => {
    const isErrorVisible = await signInPage.isInvalidMobileErrorVisible();
    if (isErrorVisible) {
      await signInPage.captureScreenshot('invalid-mobile-number.png');
      console.log('❌ Invalid mobile number detected. Screenshot saved.');
    } else {
      console.log('✅ No error message detected.');
    }
    expect(isErrorVisible).toBe(true);
  });
});
