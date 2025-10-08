// pages/search-page.ts
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class SearchPage extends BasePage {
  async searchMovie(city: string, movieName: string): Promise<void> {
    await this.navigate('https://in.bookmyshow.com/');
    await this.click(locators.search.citySelector);
     await this.click(locators.search.moviesLink);
     await this.click(locators.search.searchBoxTrigger);
     await this.page.getByRole('textbox', { name: 'Search for Movies, Events,' }).fill(movieName);
    await this.page.getByRole('textbox', { name: 'Search for Movies, Events,' }).press('Enter');
     await this.page.waitForTimeout(2000);
     await this.screenshot(`screenshots/${city}-${movieName}.png`);

    
  }
}
