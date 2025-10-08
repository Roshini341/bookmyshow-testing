import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class SupportPage extends BasePage {
  async submitSupportTicket(
    email: string,
    mobile: string,
    subject: string,
    query: string,
    description: string
  ): Promise<void> {
    await this.navigate('https://in.bookmyshow.com/explore/home/coimbatore');
    await this.click(locators.support.customerCareLink);
    await this.click(locators.support.newTicketLink);

    await this.fill(locators.support.emailInput, email);
    await this.fill(locators.support.mobileInput, mobile);
    await this.fill(locators.support.subjectInput, subject);
    await this.page.locator(locators.support.queryDropdown).selectOption(query);
    await this.fill(locators.support.descriptionEditor, description);

    await this.click(locators.support.submitButton);
    await this.screenshot(`screenshots/support-${email}.png`);
  }
}
