// // // import { BasePage } from '../BasePage';
// // import {BasePage} from './BasePage';
// // import { Page } from '@playwright/test';

// // export class EventsPage extends BasePage {
// //   private locators;

// //   constructor(page: Page, locators: any) {
// //     super(page);
// //     this.locators = locators.events;
// //   }

// //   async applyEventFilters() {
// //     await this.navigate('https://in.bookmyshow.com/');
// //     await this.click(this.locators.citySelector);
// //     await this.click(this.locators.eventsLink);
// //     await this.click(this.locators.languagesFilter);
// //     await this.click(this.locators.englishLanguage);
// //     await this.click(this.locators.categoriesFilter);
// //     await this.click(this.locators.kidsCategory);
// //     await this.click(this.locators.moreFilters);
// //     await this.click(this.locators.kidsAllowed);
// //     await this.click(this.locators.priceFilter);
// //     await this.click(this.locators.priceRange);
// //     await this.click(this.locators.browseVenues);
// //   }
// // }

// // pages/events-page.ts
// import { BasePage } from './basepage';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class EventsPage extends BasePage {
  async applyEventFilters() {
    await this.navigate('https://in.bookmyshow.com/');
    await this.click(locators.events.citySelector);
     await this.click(locators.events.eventsLink);
     await this.click(locators.events.languagesFilter);
     await this.click(locators.events.englishLanguage);
     await this.click(locators.events.categoriesFilter);
     await this.click(locators.events.moreFilters);
     await this.click(locators.events.priceFilter);
    
  }
}
