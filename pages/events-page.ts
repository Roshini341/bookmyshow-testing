import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class EventsPage extends BasePage {
  async applyEventFilters() {
    await this.navigate('https://in.bookmyshow.com/explore/home/coimbatore');
     await this.click(locators.events.eventsLink);
     await this.click(locators.events.languagesFilter);
     await this.click(locators.events.englishLanguage);
     await this.click(locators.events.categoriesFilter);
     await this.click(locators.events.moreFilters);
     await this.click(locators.events.priceFilter);
    
  }
}
