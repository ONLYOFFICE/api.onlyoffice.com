import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Unlink or change TFA method for a user

This example demonstrates how to remove or change the two-factor authentication method for a specific user in ONLYOFFICE DocSpace using the API.
You can use this to:

- unlink an authenticator app and disable TFA for the user (`type: "None"`),
- switch the user to another method, such as SMS-based TFA (`type: "Sms"`) or app-based TFA (`type: "App"`).

The API returns a login URL that can be used to continue the updated authentication flow.

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

  // Step 1: Change TFA method for a user (unlink or switch)
  async function changeTfaMethod(options: {
    type: 'None' | 'Sms' | 'App';
    id: string;
  }) {
    const url = `${BASE_URL}/api/2.0/settings/tfaappnewapp`;

    const payload: Record<string, unknown> = {
      type: options.type, // "None", "Sms", or "App"
      id: options.id,     // user ID
    };

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return null;
    }

    const body = await response.json();
    const loginUrl = body.response || body;
    return loginUrl as string;
  }

  // Example usage
  (async () => {
    const userId = 'aae1e103-bca5-9fa1-ba8c-42058b4abf28'; // replace with a real user ID

    // Unlink authenticator app and disable TFA for this user
    const loginUrlAfterUnlink = await changeTfaMethod({
      type: 'None',
      id: userId,
    });

    // Switch this user to SMS-based TFA
    const loginUrlAfterSms = await changeTfaMethod({
      type: 'Sms',
      id: userId,
    });

    // Use loginUrlAfterUnlink / loginUrlAfterSms in your UI if needed
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  from typing import Optional

  # Configure API endpoint and access token
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Common headers with authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json",
  }

  # Step 1: Change TFA method for a user (unlink or switch)
  def change_tfa_method(method_type: str, user_id: str):

    url = f"{BASE_URL}/api/2.0/settings/tfaappnewapp"

    payload: dict[str, object] = {
      "type": method_type,
      "id": user_id,
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    if not response.ok:
      return None

    raw = response.json()
    login_url = raw.get("response", raw)
    return login_url if isinstance(login_url, str) else None


  if __name__ == "__main__":
    user_id = "aae1e103-bca5-9fa1-ba8c-42058b4abf28"  # replace with a real user ID

    # Unlink authenticator app and disable TFA
    login_url_after_unlink = change_tfa_method("None", user_id)

    # Switch this user to SMS-based TFA
    login_url_after_sms = change_tfa_method("Sms", user_id)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A PUT request is sent to [/api/2.0/settings/tfaappnewapp](/docspace/api-backend/usage-api/unlink-tfa-app) with a JSON body that includes:

- `type`: new TFA method for the user:
  - `"None"`: disable TFA and unlink the authenticator app.
  - `"Sms"`: use SMS-based two-factor codes.
  - `"App"`: use an authenticator application.
- `id`: ID of the user whose TFA method you want to change.

The API returns a login URL in the `response` field.
You can use this URL to redirect the user to a login page that reflects the updated TFA method (for example, no TFA after unlink, or SMS prompts if switched to SMS).