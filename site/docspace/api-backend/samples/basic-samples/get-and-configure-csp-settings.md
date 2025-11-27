import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get and configure CSP settings

This example demonstrates how to retrieve and update Content Security Policy (CSP) settings in ONLYOFFICE DocSpace. CSP controls which external domains are allowed to load scripts, iframes, fonts, or other resources for your portal.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Set API base URL
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`, // use this if API_KEY is a JWT
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Step 1: Get current CSP settings
  async function getCspSettings() {
    const url = `${BASE_URL}/api/2.0/security/csp`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Get CSP settings failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const settings = json.response ?? json;
    console.log('Current CSP settings:', settings);
    return settings;
  }

  // Step 2: Update CSP domains
  async function updateCspSettings(domains: string[]) {
    const url = `${BASE_URL}/api/2.0/security/csp`;

    const body = {
      domains,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Update CSP settings failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const settings = json.response ?? json;
    console.log('Updated CSP settings:', settings);
    return settings;
  }

  // Example usage
  (async () => {
    // Step 1: Read current settings
    await getCspSettings();

    // Step 2: Apply new domain list
    const newDomains = ['example.com', 'cdn.example.org'];
    await updateCspSettings(newDomains);
  })().catch((e) => {
    console.error(e);
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
  }

  # Step 1: Get current CSP settings
  def get_csp_settings():
    url = f"{BASE_URL}/api/2.0/security/csp"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("Current CSP settings:")
      print(settings)
      return settings

    print("Failed to get CSP settings:", response.status_code, response.text)
    return None

  # Step 2: Update CSP domains
  def update_csp_settings(domains):
    url = f"{BASE_URL}/api/2.0/security/csp"
    payload = {"domains": domains}

    response = requests.post(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("Updated CSP settings:")
      print(settings)
      return settings

    print("Failed to update CSP settings:", response.status_code, response.text)
    return None

  if __name__ == "__main__":
    # Step 1
    get_csp_settings()

    # Step 2
    new_domains = ["example.com", "cdn.example.org"]
    update_csp_settings(new_domains)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get current CSP settings

A GET request is sent to [/api/2.0/security/csp](/docspace/api-backend/usage-api/get-csp-settings) to retrieve the current CSP configuration for the portal.

The response contains:

- `domains`: the list of allowed domains in the CSP.
- `header`: the generated CSP header value.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getCspSettings() {
    const url = `${BASE_URL}/api/2.0/security/csp`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Get CSP settings failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const settings = json.response ?? json;
    console.log('Current CSP settings:', settings);
    return settings;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_csp_settings():
    url = f"{BASE_URL}/api/2.0/security/csp"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("Current CSP settings:")
      print(settings)
      return settings

    print("Failed to get CSP settings:", response.status_code, response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Configure CSP domains

A POST request is sent to [/api/2.0/security/csp](/docspace/api-backend/usage-api/configure-csp) with a new list of allowed domains. The backend updates CSP settings and returns the resulting configuration.

Request body:

- `domains`: array of allowed domains.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function updateCspSettings(domains: string[]) {
    const url = `${BASE_URL}/api/2.0/security/csp`;

    const body = {
      domains,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(
        `Update CSP settings failed. Status code: ${res.status}, Message: ${text}`,
      );
      return null;
    }

    const json = await res.json();
    const settings = json.response ?? json;
    console.log('Updated CSP settings:', settings);
    return settings;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def update_csp_settings(domains):
    url = f"{BASE_URL}/api/2.0/security/csp"
    payload = {"domains": domains}

    response = requests.post(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("Updated CSP settings:")
      print(settings)
      return settings

    print("Failed to update CSP settings:", response.status_code, response.text)
    return None
  ```

  </TabItem>
</Tabs>