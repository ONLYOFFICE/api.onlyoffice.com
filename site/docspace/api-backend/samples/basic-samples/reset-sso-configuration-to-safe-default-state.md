import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Reset SSO configuration to a safe default state

This example demonstrates how to reset SSO settings in ONLYOFFICE DocSpace to their default, safe state using the API.
This operation is helpful when SSO was configured incorrectly and users can no longer log in. Typical cases include invalid IdP metadata, wrong certificate settings, or incorrect redirect URLs.

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

  // Step 1: Reset SSO settings to a safe default state
  async function resetSsoSettings() {
    const url = `${BASE_URL}/api/2.0/settings/ssov2`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }

  // Example usage
  (async () => {
    const defaultSettings = await resetSsoSettings();
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
  }

  # Step 1: Reset SSO settings to a safe default state
  def reset_sso_settings():
    url = f"{BASE_URL}/api/2.0/settings/ssov2"
    response = requests.delete(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)

  if __name__ == "__main__":
    default_settings = reset_sso_settings()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A DELETE request is sent to [/api/2.0/settings/ssov2](/docspace/api-backend/usage-api/reset-sso-settings-v-2).
The API returns the default SSO configuration, restoring standard email-password login and disabling the custom SSO setup.
This is useful when a misconfigured SSO provider prevents users from authenticating.