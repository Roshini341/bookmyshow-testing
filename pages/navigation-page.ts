import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class NavigationPage extends BasePage {
  async validateNavigation(): Promise<void> {
    await this.navigate('https://in.bookmyshow.com/');
    await this.click(locators.navigation.citySelector);

    const links = [
      locators.navigation.movies,
      locators.navigation.stream,
      locators.navigation.events,
      locators.navigation.plays,
      locators.navigation.sports,
      locators.navigation.activities,
      locators.navigation.listYourShow,
      locators.navigation.corporates,
      locators.navigation.offers,
      locators.navigation.giftCards
    ];

    for (const link of links) {
      try {
        await this.click(link);
        await this.page.waitForTimeout(1000);
      } catch (error) {
        console.warn(`Navigation failed for: ${link}`, error);
      }
    }
  }
}
