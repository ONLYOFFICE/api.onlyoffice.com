import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Document Server URL

This example demonstrates how to retrieve the configured Document Server URL in ONLYOFFICE DocSpace using the API.
The Document Server URL defines where documents are edited and co-authored — it must be correctly set for online document editing to function properly.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
  };

  // Get the configured Document Server URL
  async function getDocServiceUrl() {
    const url = `${API_HOST}/api/2.0/files/docservice`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const info = json.response || json;
      console.log('Current Document Server URL:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    if (res.status === 403) {
      console.log('You do not have enough permission to view this setting (403).');
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    await getDocServiceUrl();
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests

  # Set API base URL
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json"
  }

  # Get the configured Document Server URL
  def get_doc_service_url():
    url = f"{API_HOST}/api/2.0/files/docservice"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Current Document Server URL:")
      print(json.dumps(info, indent=2))
      return info
    elif response.status_code == 403:
      print("You don’t have enough permission to view this setting (403).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

  if __name__ == "__main__":
    get_doc_service_url()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/files/docservice](/docspace/api-backend/usage-api/get-doc-service-url) to retrieve the current URL of the configured ONLYOFFICE Document Server.