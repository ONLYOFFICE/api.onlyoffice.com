import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get folder favorites list

This example demonstrates how to retrieve the list of files and folders marked as favorites in a specified folder (or overall) in ONLYOFFICE DocSpace using the API.

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

  // Step 1: Get list of favorite files and folders
  async function getFavorites() {
    const url = `${BASE_URL}/api/2.0/files/@favorites`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const favorites = json.response || json;
      console.log('Favorites list:');
      console.log(JSON.stringify(favorites, null, 2));
      return favorites;
    }

    if (res.status === 403) {
      console.log("You do not have enough permission to perform this operation (403).");
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    await getFavorites();
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json"
  }

  # Step 1: Get list of favorite files and folders
  def get_favorites():
    url = f"{BASE_URL}/api/2.0/files/@favorites"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      favorites = data.get("response", data)
      print("Favorites list:")
      print(json.dumps(favorites, indent=2))
      return favorites
    elif response.status_code == 403:
      print("You don't have enough permission to perform this operation (403).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

  if __name__ == "__main__":
    get_favorites()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/files/@favorites](/docspace/api-backend/usage-api/get-favorites-folder) to retrieve all files and folders marked as favorites for the current user.
