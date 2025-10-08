import { test } from '../fixtures/page-fixtures';
import { readCSV } from '../utils/readCSV';

const tickets = readCSV('./data/support-tickets.csv');

for (const { email, mobile, subject, query, description } of tickets) {
  test(`Submit support ticket for ${email}`, async ({ pages }) => {
    await pages.support.submitSupportTicket(email, mobile, subject, query, description);
  });
}
