import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configure CDN storage for faster static delivery

This example shows how to configure CDN storage in ONLYOFFICE DocSpace so that static content is served through a CDN provider.
The script demonstrates how to read the current CDN configuration and update it with new provider settings.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Configure API endpoint and access token
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Common headers with authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Step 1: Get current CDN storage configuration
  async function getCdnStorage() {
    const url = `${BASE_URL}/api/2.0/settings/storage/cdn`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    // Return null if the API call fails
    if (!response.ok) {
      return null;
    }

    // Parse and normalize response data
    const body = await response.json();
    return body.response || body;
  }

  // Step 2: Update CDN storage configuration
  async function updateCdnStorage(moduleName: string, props: { key: string; value: string }[]) {
    const url = `${BASE_URL}/api/2.0/settings/storage/cdn`;

    const payload = {
      module: moduleName, // CDN module name (for example, "CloudFront", "CustomCdn", etc.)
      props,              // list of key-value properties for this CDN module
    };

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    // Return null if the API call fails
    if (!response.ok) {
      return null;
    }

    // Parse and normalize response data
    const body = await response.json();
    return body.response || body;
  }

  // Example usage
  (async () => {
    // Step 1: load current CDN configuration (for UI prefill or logging)
    const currentCdn = await getCdnStorage();

    // Example CDN configuration (replace placeholders with real values)
    const moduleName = 'CustomCdn';
    const props = [
      { key: 'CdnEndpoint', value: 'https://cdn.example.com' },
      { key: 'AuthToken', value: 'your-cdn-token' },
      { key: 'UseHttps', value: 'true' },
      // Add other keys required by your CDN storage module
    ];

    // Step 2: apply new CDN configuration
    const updatedCdn = await updateCdnStorage(moduleName, props);
    // Use updatedCdn in your application logic if needed
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Configure API endpoint and access token
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Common headers with authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json",
  }

  # Step 1: Get current CDN storage configuration
  def get_cdn_storage():
    url = f"{BASE_URL}/api/2.0/settings/storage/cdn"
    response = requests.get(url, headers=HEADERS)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)

  # Step 2: Update CDN storage configuration
  def update_cdn_storage(module_name: str, props: list[dict[str, str]]):
    url = f"{BASE_URL}/api/2.0/settings/storage/cdn"

    payload = {
      "module": module_name,  # CDN module name (for example, "CloudFront", "CustomCdn", etc.)
      "props": props,         # list of key-value properties for this CDN module
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)

  if __name__ == "__main__":
    # Step 1: load current CDN configuration (for UI prefill or logging)
    current_cdn = get_cdn_storage()

    # Example CDN configuration (replace placeholders with real values)
    module_name = "CustomCdn"
    props: list[dict[str, str]] = [
      {"key": "CdnEndpoint", "value": "https://cdn.example.com"},
      {"key": "AuthToken", "value": "your-cdn-token"},
      {"key": "UseHttps", "value": "true"},
      # Add other keys required by your CDN storage module
    ]

    # Step 2: apply new CDN configuration
    updated_cdn = update_cdn_storage(module_name, props)
    # Use updated_cdn in your application logic if needed
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get current CDN storage configuration

A GET request is sent to [/api/2.0/settings/storage/cdn](/docspace/api-backend/usage-api/get-all-cdn-storages) to retrieve the current CDN storage configuration.
You can use this response to prefill a “CDN settings” form in the admin UI, showing the current module and its properties.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getCdnStorage() {
    const url = `${BASE_URL}/api/2.0/settings/storage/cdn`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    // Return null if the API call fails
    if (!response.ok) {
      return null;
    }

    // Parse and normalize response data
    const body = await response.json();
    return body.response || body;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_cdn_storage():
    url = f"{BASE_URL}/api/2.0/settings/storage/cdn"
    response = requests.get(url, headers=HEADERS)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)
  ```

  </TabItem>
</Tabs>

## Step 2: Update CDN storage configuration

A PUT request is sent to [/api/2.0/settings/storage/cdn](/docspace/api-backend/usage-api/update-cdn-storage) with the following JSON body:

- `module`: name of the CDN storage module to configure (for example, a specific CDN provider).
- `props`: list of configuration key-value pairs required by this module (such as CDN endpoint URL, token, HTTPS flag, and other provider-specific options).

This endpoint applies the new CDN configuration, so subsequent static content requests are served via the configured CDN.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function updateCdnStorage(moduleName: string, props: { key: string; value: string }[]) {
    const url = `${BASE_URL}/api/2.0/settings/storage/cdn`;

    const payload = {
      module: moduleName, // CDN module name (for example, "CloudFront", "CustomCdn", etc.)
      props,              // list of key-value properties for this CDN module
    };

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    // Return null if the API call fails
    if (!response.ok) {
      return null;
    }

    // Parse and normalize response data
    const body = await response.json();
    return body.response || body;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def update_cdn_storage(module_name: str, props: list[dict[str, str]]):
    url = f"{BASE_URL}/api/2.0/settings/storage/cdn"

    payload = {
      "module": module_name,  # CDN module name (for example, "CloudFront", "CustomCdn", etc.)
      "props": props,         # list of key-value properties for this CDN module
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)
  ```

  </TabItem>
</Tabs>