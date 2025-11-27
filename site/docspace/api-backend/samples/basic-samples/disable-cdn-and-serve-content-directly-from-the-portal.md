import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Disable CDN and serve content directly from the portal

This example shows how to disable CDN storage in ONLYOFFICE DocSpace using the API.
Use it when your CDN provider becomes unstable, too expensive, or you want to temporarily serve files directly from the main storage without changing the primary storage configuration.

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
  };

  // Step 1: Disable CDN storage and reset CDN settings
  async function disableCdnStorage() {
    const url = `${BASE_URL}/api/2.0/settings/storage/cdn`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    // Return false if the API call fails
    if (!response.ok) {
      return false;
    }

    // Optional: parse response body if needed
    return true;
  }

  // Example usage
  (async () => {
    const success = await disableCdnStorage();
    if (!success) {
      // Handle error in your application logic if needed
      return;
    }

    // CDN has been disabled and files are now served directly from the main storage
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
  }

  # Step 1: Disable CDN storage and reset CDN settings
  def disable_cdn_storage() -> bool:
    url = f"{BASE_URL}/api/2.0/settings/storage/cdn"
    response = requests.delete(url, headers=HEADERS)

    # Return False if the API call fails
    if not response.ok:
      return False

    # Optional: parse response body if needed
    return True

  if __name__ == "__main__":
    success = disable_cdn_storage()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A DELETE request is sent to [/api/2.0/settings/storage/cdn](/docspace/api-backend/usage-api/reset-cdn-to-default).
This endpoint resets CDN-related settings to their defaults and effectively disables CDN usage for static content.
After this operation, files are served directly from the portal’s primary storage without changing its configuration.