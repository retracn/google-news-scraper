# pip install apify-client
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")
run = client.actor("automationnation/google-news-scraper").call(run_input={
  "queries": [
    "apple earnings"
  ],
  "time": "week",
  "maxResultsPerQuery": 30
})
for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item.get("title"), item.get("source"), item.get("publishedAt"), item.get("url"))
