import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get total backups count

This example demonstrates how to retrieve the total number of backups created in ONLYOFFICE DocSpace using the API.
The endpoint returns the count of existing backup files generated either manually or automatically by the backup service.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
  };

  // Step 1: Get the number of backups
  async function getBackupsCount() {
    const url = `${BASE_URL}/api/2.0/backup/getbackupscount`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const count =
        typeof data === 'object' && data !== null ? (data.response ?? data) : data;
      console.log('Backups count:', count);
      return count;
    }

    // All non-200: print status and raw body from API
    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    await getBackupsCount();
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
  }

  # Step 1: Get the number of backups
  def get_backups_count():
    url = f"{BASE_URL}/api/2.0/backup/getbackupscount"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      count = data.get("response", data) if isinstance(data, dict) else data
      print("Backups count:", count)
      return count

    # All non-200: print status and raw body from API
    print(f"Request failed: {response.status_code}")
    print(response.text)
    return None

  if __name__ == "__main__":
    get_backups_count()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/backup/getbackupscount](/docspace/api-backend/usage-api/get-backups-count) to retrieve the total number of backups currently available in the system.