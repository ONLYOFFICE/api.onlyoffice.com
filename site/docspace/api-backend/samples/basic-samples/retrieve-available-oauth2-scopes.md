import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieve available OAuth2 scopes

This example demonstrates how to retrieve all available OAuth2 scopes in ONLYOFFICE DocSpace. Scopes define which parts of the API an OAuth2 client can access — for example, reading files, managing users, or editing settings.

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

  // Step 1: Retrieve available OAuth2 scopes
  async function getScopes() {
    const url = `${BASE_URL}/api/2.0/scopes`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const scopes = json.response || json;
      console.log('Available OAuth2 scopes:');
      console.log(JSON.stringify(scopes, null, 2));
      return scopes;
    }

    const text = await res.text();
    console.log(`Failed to retrieve scopes: ${res.status} - ${text}`);
    return null;
  }

  // Example usage
  (async () => {
    await getScopes();
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

  # Step 1: Retrieve available OAuth2 scopes
  def get_scopes():
    url = f"{BASE_URL}/api/2.0/scopes"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      scopes = data.get("response", data)
      print("Available OAuth2 scopes:")
      print(json.dumps(scopes, indent=2))
      return scopes
    else:
      print(f"Failed to retrieve scopes: {response.status_code} - {response.text}")
      return None

  # Example usage
  if __name__ == "__main__":
    get_scopes()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/scopes](/docspace/api-backend/usage-api/get-scopes). This request returns a list of all OAuth2 scopes supported by your DocSpace instance. These scopes are used when creating OAuth2 clients to define which API endpoints they can access.