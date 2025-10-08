// import { BasePage } from './BasePage';
// import locators from '../locators/locators.json';

// export class ScrollPage extends BasePage {
//   async validateDynamicScroll(): Promise<void> {
//     await this.page.goto('https://in.bookmyshow.com/explore/movies-coimbatore', {
//       waitUntil: 'domcontentloaded',
//       timeout: 120000
//     });

//     const sections = [
//       locators.scroll.movies,
//       locators.scroll.events
//     ];

//     for (const section of sections) {
//       try {
//         await this.page.locator(section).click();
//         await this.page.waitForTimeout(2000);

//         for (let i = 0; i < 2; i++) {
//           await this.page.mouse.wheel(0, 1000);
//           await this.page.waitForTimeout(1000);
//         }
//       } catch (error) {
//         console.warn(`Skipping section due to error:`, error);
//       }
//     }

//     try {
//       await this.page.locator(locators.scroll.stream).click();
//       await this.page.waitForTimeout(2000);

//       for (let i = 0; i < 5; i++) {
//         await this.page.mouse.wheel(0, 1000);
//         await this.page.waitForTimeout(1000);
//       }
//     } catch (error) {
//       console.warn('Skipping "Stream" due to error:', error);
//     }
//   }
// }
