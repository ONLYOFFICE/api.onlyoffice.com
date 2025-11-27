import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage TFA backup codes

This example demonstrates how to retrieve and regenerate backup codes for two-factor authentication in ONLYOFFICE DocSpace.
Backup codes allow users to sign in when they cannot access their authenticator app.
Using the API, your application can display the current backup codes and request a new set when needed.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to manage web plugins.
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

  // Step 1: Get current TFA backup codes
  async function getBackupCodes() {
    const url = `${BASE_URL}/api/2.0/settings/tfaappcodes`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body; // array of backup codes
  }

  // Step 2: Generate new TFA backup codes
  async function generateNewBackupCodes() {
    const url = `${BASE_URL}/api/2.0/settings/tfaappnewcodes`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body; // array of newly generated backup codes
  }

  // Example usage
  (async () => {
    const currentCodes = await getBackupCodes();
    const newCodes = await generateNewBackupCodes();
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

  # Step 1: Get current TFA backup codes
  def get_backup_codes():
    url = f"{BASE_URL}/api/2.0/settings/tfaappcodes"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)  # array of backup codes

  # Step 2: Generate new TFA backup codes
  def generate_new_backup_codes():
    url = f"{BASE_URL}/api/2.0/settings/tfaappnewcodes"
    response = requests.put(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)  # array of new codes

  if __name__ == "__main__":
    current_codes = get_backup_codes()
    new_codes = generate_new_backup_codes()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve current backup codes

A GET request is sent to [/api/2.0/settings/tfaappcodes](/docspace/api-backend/usage-api/get-tfa-app-codes).

The response contains an array of backup codes that the user can use to sign in if they lose access to the authenticator app.
These codes should be shown only once and stored securely on the client side.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getBackupCodes() {
    const url = `${BASE_URL}/api/2.0/settings/tfaappcodes`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body; // array of backup codes
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_backup_codes():
    url = f"{BASE_URL}/api/2.0/settings/tfaappcodes"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)  # array of backup codes
  ```

  </TabItem>
</Tabs>

## Step 2: Generate a new set of backup codes

A PUT request is sent to [/api/2.0/settings/tfaappnewcodes](/docspace/api-backend/usage-api/update-tfa-app-codes).

The endpoint generates a fresh list of backup codes and returns them in the response.
Once new codes are created, the previous ones become invalid.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function generateNewBackupCodes() {
    const url = `${BASE_URL}/api/2.0/settings/tfaappnewcodes`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body; // array of newly generated backup codes
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def generate_new_backup_codes():
    url = f"{BASE_URL}/api/2.0/settings/tfaappnewcodes"
    response = requests.put(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)  # array of new codes
  ```

  </TabItem>
</Tabs>