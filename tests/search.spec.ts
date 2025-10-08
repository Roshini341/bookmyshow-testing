import { test } from '../fixtures/page-fixtures';
import { readCSV } from '../utils/readCSV';

const testData = readCSV('./data/search-movies.csv');

for (const { city, movie } of testData) {
  test(`Search for "${movie}" in "${city}"`, async ({ pages }) => {
    await pages.search.searchMovie(city, movie);
  });
}
