import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View and manage portal TFA policy

This example demonstrates how to view and update the portal-level two-factor authentication (TFA) policy in ONLYOFFICE DocSpace using the API.
Administrators can use this flow to review current TFA settings, see who is required to use TFA, configure trusted IPs, or enable/disable the TFA application as a login method.

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

  // Step 1: Load current TFA policy
  async function getTfaSettings() {
    const url = `${BASE_URL}/api/2.0/settings/tfaapp`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }

  // Step 2: Update TFA policy
  async function updateTfaSettings(settings) {
    const url = `${BASE_URL}/api/2.0/settings/tfaapp`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(settings),
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }

  // Example usage
  (async () => {
    // Load current portal TFA settings
    const currentSettings = await getTfaSettings();
    if (!currentSettings) return;

    // Update settings (example: enable TFA App, set trusted IPs)
    const payload = {
      ...currentSettings,
      trustedIps: ['10.0.0.1', '192.168.1.10'],
      mandatoryUsers: [],
      mandatoryGroups: [],
    };

    const result = await updateTfaSettings(payload);
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

  # Step 1: Load current TFA policy
  def get_tfa_settings():
    url = f"{BASE_URL}/api/2.0/settings/tfaapp"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)

  # Step 2: Update TFA policy
  def update_tfa_settings(settings: dict):
    url = f"{BASE_URL}/api/2.0/settings/tfaapp"
    response = requests.put(url, headers=HEADERS, json=settings)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)

  if __name__ == "__main__":
    current = get_tfa_settings()
    if current:
      payload = {
        **current,
        "trustedIps": ["10.0.0.1", "192.168.1.10"],
        "mandatoryUsers": [],
        "mandatoryGroups": [],
      }
      update_tfa_settings(payload)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: View the current TFA policy

A GET request is sent to [/api/2.0/settings/tfaapp](/docspace/api-backend/usage-api/get-tfa-settings)

The response includes the portal-level TFA configuration, such as:

- `enabled`: whether TFA is active
- `trustedIps`: IPs that bypass TFA
- `mandatoryUsers`: users required to use TFA
- `mandatoryGroups`: groups required to use TFA
- `available`: whether TFA App is supported
- `title`: display name of the configuration

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getTfaSettings() {
    const url = `${BASE_URL}/api/2.0/settings/tfaapp`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_tfa_settings():
    url = f"{BASE_URL}/api/2.0/settings/tfaapp"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)
  ```

  </TabItem>
</Tabs>

## Step 2: Update the TFA policy

A PUT request is sent to [/api/2.0/settings/tfaapp](/docspace/api-backend/usage-api/update-tfa-settings)

The request body may include:

`trustedIps` — updated list of trusted IP addresses
`mandatoryUsers` — updated list of required users
`mandatoryGroups` — updated list of required groups

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function updateTfaSettings(settings) {
    const url = `${BASE_URL}/api/2.0/settings/tfaapp`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(settings),
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def update_tfa_settings(settings: dict):
    url = f"{BASE_URL}/api/2.0/settings/tfaapp"
    response = requests.put(url, headers=HEADERS, json=settings)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)
  ```

  </TabItem>
</Tabs>