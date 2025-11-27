import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Secure TFA changes with confirmation email

This example demonstrates how to protect portal-wide TFA changes in ONLYOFFICE DocSpace using an email confirmation flow.
When an administrator updates the TFA policy (trusted IPs, mandatory users or groups), the changes are not applied immediately. Instead, the system issues a confirmation link that is sent by email and can also be retrieved via the API.

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

  // Step 1: Request confirmation email for updating TFA settings
  async function requestTfaUpdateConfirmation(settings: {
    id: string;
    trustedIps?: string[];
    mandatoryUsers?: string[];
    mandatoryGroups?: string[];
  }) {
    const url = `${BASE_URL}/api/2.0/settings/tfaappwithlink`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(settings),
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const link = body.response || body;
    return link as string;
  }

  // Step 2: Get confirmation email URL for the current user
  async function getTfaConfirmationUrl() {
    const url = `${BASE_URL}/api/2.0/settings/tfaapp/confirm`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const link = body.response || body;
    return link as string;
  }

  // Example usage
  (async () => {
    // Example: request TFA policy change that requires confirmation
    const settings = {
      id: 'aae1e103-bca5-9fa1-ba8c-42058b4abf28', // admin user ID
      trustedIps: ['10.0.0.1'],
      mandatoryUsers: ['75a5f745-f697-4418-b38d-0fe0d277e258'],
      mandatoryGroups: [],
    };

    const confirmationLink = await requestTfaUpdateConfirmation(settings);

    // Optionally retrieve the same confirmation URL via a separate call
    const confirmUrl = await getTfaConfirmationUrl();

    // Use confirmationLink / confirmUrl in your UI if needed
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

  # Step 1: Request confirmation email for updating TFA settings
  def request_tfa_update_confirmation(settings: dict):
    url = f"{BASE_URL}/api/2.0/settings/tfaappwithlink"
    response = requests.put(url, headers=HEADERS, json=settings)

    if not response.ok:
      return None

    raw = response.json()
    link = raw.get("response", raw)
    return link if isinstance(link, str) else None

  # Step 2: Get confirmation email URL for the current user
  def get_tfa_confirmation_url():
    url = f"{BASE_URL}/api/2.0/settings/tfaapp/confirm"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    link = raw.get("response", raw)
    return link if isinstance(link, str) else None

  if __name__ == "__main__":
    # Example: request TFA policy change that requires confirmation
    settings = {
      "id": "aae1e103-bca5-9fa1-ba8c-42058b4abf28",  # admin user ID
      "trustedIps": ["10.0.0.1"],
      "mandatoryUsers": ["75a5f745-f697-4418-b38d-0fe0d277e258"],
      "mandatoryGroups": [],
    }

    confirmation_link = request_tfa_update_confirmation(settings)
    confirm_url = get_tfa_confirmation_url()
    # Use confirmation_link / confirm_url in your UI if needed
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Request confirmation email for TFA policy changes

A PUT request is sent to [/api/2.0/settings/tfaappwithlink](/docspace/api-backend/usage-api/usage-api/update-tfa-settings-link) with the updated TFA settings:

- `id`: ID of the user whose action will be confirmed (typically the administrator changing the policy).
- `trustedIps`: list of IP addresses that bypass TFA verification.
- `mandatoryUsers`: list of user IDs for whom TFA is mandatory.
- `mandatoryGroups`: list of group IDs whose members must use TFA.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function requestTfaUpdateConfirmation(settings: {
    id: string;
    trustedIps?: string[];
    mandatoryUsers?: string[];
    mandatoryGroups?: string[];
  }) {
    const url = `${BASE_URL}/api/2.0/settings/tfaappwithlink`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(settings),
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const link = body.response || body;
    return link as string;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def request_tfa_update_confirmation(settings: dict):
    url = f"{BASE_URL}/api/2.0/settings/tfaappwithlink"
    response = requests.put(url, headers=HEADERS, json=settings)

    if not response.ok:
      return None

    raw = response.json()
    link = raw.get("response", raw)
    return link if isinstance(link, str) else None
  ```

  </TabItem>
</Tabs>

## Step 2: Retrieve the confirmation URL for the current user

A GET request is sent to [/api/2.0/settings/tfaapp/confirm](/docspace/api-backend/usage-api/get-tfa-confirm-url).
The response contains a confirmation email URL for the current user, which can be used by the UI to redirect the user or show a “Check your email to confirm security changes” action.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getTfaConfirmationUrl() {
    const url = `${BASE_URL}/api/2.0/settings/tfaapp/confirm`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const link = body.response || body;
    return link as string;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_tfa_confirmation_url():
    url = f"{BASE_URL}/api/2.0/settings/tfaapp/confirm"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      return None

    raw = response.json()
    link = raw.get("response", raw)
    return link if isinstance(link, str) else None
  ```

  </TabItem>
</Tabs>