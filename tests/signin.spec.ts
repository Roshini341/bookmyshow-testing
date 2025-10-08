import { test } from '../fixtures/page-fixtures';
import { readCSV } from '../utils/readCSV';

const testData = readCSV('./data/invalid-mobile.csv');

for (const { mobile } of testData) {
  test(`Try invalid login with mobile: ${mobile}`, async ({ pages }) => {
    await pages.signin.tryInvalidLogin(mobile);
  });
}
