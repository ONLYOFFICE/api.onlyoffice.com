import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# SSO setup wizard with presets

This example shows how to build an SSO setup wizard in ONLYOFFICE DocSpace using presets from the API.
The wizard loads constants for allowed SSO options, loads default SSO settings, lets the admin adjust values (IdP URL, certificates, mappings), and then saves the configuration.

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

  // Step 1: Get SSO constants (formats, bindings, algorithms, etc.)
  async function getSsoConstants() {
    const url = `${BASE_URL}/api/2.0/settings/ssov2/constants`;

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

  // Step 2: Get default SSO settings template
  async function getDefaultSsoSettings() {
    const url = `${BASE_URL}/api/2.0/settings/ssov2/default`;

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

  // Step 3: Save SSO settings (serialized as JSON string)
  async function saveSsoSettings(serializeSettings: string) {
    const url = `${BASE_URL}/api/2.0/settings/ssov2`;

    const payload = {
      serializeSettings,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    return body.response || body;
  }

  // Example usage (wizard flow)
  (async () => {
    // Step 1: load constants for dropdowns and allowed values in the UI
    const constants = await getSsoConstants();
    if (!constants) {
      return;
    }

    // Step 2: load default SSO template
    const defaults = await getDefaultSsoSettings();
    if (!defaults) {
      return;
    }

    // Build SSO configuration object based on defaults and admin input.
    // In a real wizard, values below would come from form fields and
    // selected options that match available constants.
    const config = {
      ...defaults,
      enableSso: true,
      spLoginLabel: 'Sign in with Company SSO',
      hideAuthPage: true,
      disableEmailVerification: true,
      fieldMapping: {
        email: 'email',
        firstName: 'given_name',
        lastName: 'family_name',
      },
      idpSettings: {
        // Replace with actual IdP metadata, login/logout URLs, etc.
      },
    };

    // Step 3: serialize configuration and save SSO settings
    const serialized = JSON.stringify(config);
    await saveSsoSettings(serialized);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
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

  # Step 1: Get SSO constants (formats, bindings, algorithms, etc.)
  def get_sso_constants():
    url = f"{BASE_URL}/api/2.0/settings/ssov2/constants"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)

  # Step 2: Get default SSO settings template
  def get_default_sso_settings():
    url = f"{BASE_URL}/api/2.0/settings/ssov2/default"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)

  # Step 3: Save SSO settings (serialized as JSON string)
  def save_sso_settings(serialize_settings: str):
    url = f"{BASE_URL}/api/2.0/settings/ssov2"
    payload = {"serializeSettings": serialize_settings}

    response = requests.post(url, headers=HEADERS, json=payload)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)

  if __name__ == "__main__":
    # Step 1: load constants for UI controls
    constants = get_sso_constants()
    if not constants:
      raise SystemExit(1)

    # Step 2: load default SSO template
    defaults = get_default_sso_settings()
    if not defaults:
      raise SystemExit(1)

    # Build SSO configuration object based on defaults and admin input
    config = {
      **defaults,
      "enableSso": True,
      "spLoginLabel": "Sign in with Company SSO",
      "hideAuthPage": True,
      "disableEmailVerification": True,
      "fieldMapping": {
        "email": "email",
        "firstName": "given_name",
        "lastName": "family_name",
      },
      "idpSettings": {
        # Insert IdP metadata, endpoints, etc.
      },
    }

    # Step 3: serialize configuration and save SSO settings
    serialized = json.dumps(config)
    save_sso_settings(serialized)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Load SSO constants

A GET request is sent to [/api/2.0/settings/ssov2/constants](/docspace/api-backend/usage-api/get-sso-settings-v-2-constants) to retrieve SSO-related constants (NameID formats, bindings, signing algorithms, certificate actions, and so on).
Use these values to build dropdowns and radio buttons instead of hardcoded strings.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getSsoConstants() {
    const url = `${BASE_URL}/api/2.0/settings/ssov2/constants`;

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
  def get_sso_constants():
    url = f"{BASE_URL}/api/2.0/settings/ssov2/constants"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)
  ```

  </TabItem>
</Tabs>

## Step 2: Load default SSO settings

A GET request is sent to [/api/2.0/settings/ssov2/default](/docspace/api-backend/usage-api/get-default-sso-settings-v-2) to load a default SSO configuration template.
You can prefill the wizard with these values and let the administrator change only what is necessary (IdP URLs, certificates, field mappings).

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getDefaultSsoSettings() {
    const url = `${BASE_URL}/api/2.0/settings/ssov2/default`;

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
  def get_default_sso_settings():
    url = f"{BASE_URL}/api/2.0/settings/ssov2/default"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)
  ```

  </TabItem>
</Tabs>

## Step 3: Save SSO configuration

A POST request is sent to [/api/2.0/settings/ssov2](/docspace/api-backend/usage-api/save-sso-settings-v-2) with a single field:

- `serializeSettings`: JSON-serialized SSO configuration object built in the wizard.

The API stores the provided SSO settings for the current portal and applies the SSO login configuration.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function saveSsoSettings(serializeSettings: string) {
    const url = `${BASE_URL}/api/2.0/settings/ssov2`;

    const payload = {
      serializeSettings,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
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
  def save_sso_settings(serialize_settings: str):
    url = f"{BASE_URL}/api/2.0/settings/ssov2"
    payload = {"serializeSettings": serialize_settings}

    response = requests.post(url, headers=HEADERS, json=payload)

    if not response.ok:
      return None

    raw = response.json()
    return raw.get("response", raw)
  ```

  </TabItem>
</Tabs>