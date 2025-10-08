import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class SignInPage extends BasePage {
  async tryInvalidLogin(mobile: string): Promise<void> {
    await this.navigate('https://in.bookmyshow.com/explore/home/coimbatore');
    await this.click(locators.signin.signInButton);
    await this.click(locators.signin.mobileFieldTrigger);
    await this.fill(locators.signin.mobileInput, mobile);
    await this.screenshot(`screenshots/invalid-${mobile}.png`);
  }
}
