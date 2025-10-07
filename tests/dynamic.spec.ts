import { test, expect } from '@playwright/test';
import { DynamicScrollPage } from '../pages/DynamicScroll';

test('Validate dynamic scrolling across sections', async ({ page }) => {
  test.setTimeout(120000); // Extend timeout for dynamic content
  const scrollPage = new DynamicScrollPage(page);

  await test.step('Navigate to movies page', async () => {
    await scrollPage.gotoMoviesPage();
  });

  await test.step('Scroll through Movies, Events, Sports sections', async () => {
    await scrollPage.scrollSections(['Movies', 'Events', 'Sports']);
  });

  await test.step('Scroll through Stream section', async () => {
    await scrollPage.scrollStreamSection();
  });
});
