import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Check if a file is marked as favorite

This example demonstrates how to determine whether a file is marked as favorite for the current user in ONLYOFFICE DocSpace

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const API_HOST = 'yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
  };

  // Check if file is in favorites
  async function isFileFavorite(fileId) {
    const url = `https://${API_HOST}/api/2.0/files/favorites/${fileId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      return typeof data === 'boolean' ? data : Boolean(data.response ?? false);
    }

    if (res.status === 403) {
      console.log('Not enough permissions (403).');
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`, text);
    return null;
  }

  // Example usage
  (async () => {
    const fileId = 1568550;
    const favorite = await isFileFavorite(fileId);
    console.log('Favorite:', favorite);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
 
  # Set API base URL
  API_HOST = "yourportal.onlyoffice.com"
  API_KEY = "your_api_key"
 
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}", 
    "Accept": "application/json"
  }

  def is_file_favorite(file_id: int):
    url = f"https://{API_HOST}/api/2.0/files/favorites/{file_id}"
    r = requests.get(url, headers=HEADERS)
    if r.status_code == 200:
      data = r.json()
      return data if isinstance(data, bool) else bool(data.get("response", False))
    if r.status_code == 403:
      print("Not enough permissions (403).")
      return None
    print(f"Request failed: {r.status_code}", r.text)
    return None

  if __name__ == "__main__":
    file_id = 1568550
    print("Favorite:", is_file_favorite(file_id))
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/files/favorites/:fileId](/docspace/api-backend/usage-api/toggle-file-favorite) to check whether the specified file is marked as favorite for the current user.