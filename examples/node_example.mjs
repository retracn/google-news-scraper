// npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: 'YOUR_APIFY_TOKEN' });
const run = await client.actor('automationnation/google-news-scraper').call({
  "queries": [
    "apple earnings"
  ],
  "time": "week",
  "maxResultsPerQuery": 30
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item.title, item.source, item.publishedAt, item.url);
