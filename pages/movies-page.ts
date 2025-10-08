import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class MoviesPage extends BasePage {
  async extractLanguages(): Promise<string> {
    await this.navigate('https://in.bookmyshow.com/explore/home/coimbatore');
    await this.click(locators.movies.moviesLink);
    await this.waitFor(locators.movies.languageContainer);
    return await this.getText(locators.movies.languageContainer);
  }
}
