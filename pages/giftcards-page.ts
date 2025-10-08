import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class GiftCardsPage extends BasePage {
  async countGiftCards(): Promise<number> {
    await this.navigate('https://in.bookmyshow.com/explore/home/coimbatore');
    await this.click(locators.giftcards.giftCardsLink);
    await this.waitFor(locators.giftcards.giftCardContainer);
    return await this.page.locator(locators.giftcards.giftCardList).count();
  }
}
