import { test as baseTest, expect, Page } from '@playwright/test';
import { EventsPage } from '../pages/events-page';
import { MoviesPage } from '../pages/movies-page';
import { SearchPage } from '../pages/search-page';
import { GiftCardsPage } from '../pages/giftcards-page';
import { SignInPage } from '../pages/signin-page';
import { ScrollPage } from '../pages/scroll-page';
import { NavigationPage } from '../pages/navigation-page';
import { SupportPage } from '../pages/support-page';

export class PageFixture {
  readonly events: EventsPage;
  readonly movies: MoviesPage;
   readonly search: SearchPage;
   readonly giftcards: GiftCardsPage;
   readonly signin: SignInPage;
  readonly scroll: ScrollPage;
  readonly navigation: NavigationPage;
  readonly support: SupportPage;

  constructor(page: Page) {
    this.events = new EventsPage(page);
    this.movies = new MoviesPage(page);
    this.search = new SearchPage(page);
    this.giftcards = new GiftCardsPage(page);
    this.signin = new SignInPage(page);
    this.scroll = new ScrollPage(page);
    this.navigation = new NavigationPage(page);
    this.support = new SupportPage(page);
  }
}

type Fixtures = {
  pages: PageFixture;
};

export const test = baseTest.extend<Fixtures>({
  pages: async ({ page }, use) => {
    await use(new PageFixture(page));
  },
});

export { expect };
