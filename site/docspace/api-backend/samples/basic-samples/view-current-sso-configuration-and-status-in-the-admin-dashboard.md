import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View current SSO configuration and status in the admin dashboard

This example shows how to retrieve the current SSO configuration in ONLYOFFICE DocSpace using the API.
You can use it to build an “SSO status” section in the admin dashboard that shows whether SSO is enabled, when it was last changed, and how the login flow is configured.

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

  // Step 1: Get current SSO settings
  async function getSsoSettings() {
    const url = `${BASE_URL}/api/2.0/settings/ssov2`;

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

  // Example usage
  (async () => {
    // Load SSO settings to display in the admin dashboard
    const ssoSettings = await getSsoSettings();

    // Use ssoSettings in your UI (for example, to show enableSso, lastModified, spLoginLabel, etc.)
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

  # Step 1: Get current SSO settings
  def get_sso_settings():
    url = f"{BASE_URL}/api/2.0/settings/ssov2"
    response = requests.get(url, headers=HEADERS)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)

  if __name__ == "__main__":
    # Load SSO settings to display in the admin dashboard
    sso_settings = get_sso_settings()

    # Use sso_settings in your UI (for example, to show enableSso, lastModified, spLoginLabel, etc.)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/settings/ssov2](/docspace/api-backend/usage-api/get-sso-settings-v-2) to retrieve the current portal SSO settings.

You can use the response fields to display an SSO status block in the admin dashboard, including:

- `enableSso`: whether SSO is enabled.
- `lastModified`: when the SSO configuration was last updated.
- `spLoginLabel`: label for the SSO login option on the login page.
- `hideAuthPage`: whether the standard login form is hidden.
- `usersType`: user type created or matched through SSO.
- `disableEmailVerification`: whether email verification is required.

Additional objects such as `idpSettings`, `idpCertificates`, `spCertificates`, and `fieldMapping` can be used for more detailed diagnostics or advanced configuration views.