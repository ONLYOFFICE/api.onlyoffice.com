import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Enable or disable a webhook

This example shows how to enable or disable an existing webhook configuration in ONLYOFFICE DocSpace using the API.
Use it when you need to temporarily pause an integration, stop a failing webhook, or re-enable a webhook without changing its other settings.

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

  // Optional helper: get all webhooks to find the ID to toggle
  async function getWebhooks() {
    const url = `${BASE_URL}/api/2.0/settings/webhook`;

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

  // Step 1: Enable or disable a webhook by ID
  async function setWebhookEnabled(id: number, enabled: boolean) {
    const url = `${BASE_URL}/api/2.0/settings/webhook/enable`;

    const payload = { id, enabled };

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
    // Get webhooks and select an ID to toggle
    const webhooks = await getWebhooks();
    if (!webhooks || webhooks.length === 0) {
      return;
    }

    const webhookId = webhooks[0].id; // Replace with a specific ID in production

    // Disable the webhook
    await setWebhookEnabled(webhookId, false);

    // Enable it again if needed
    // await setWebhookEnabled(webhookId, true);
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

  # Optional helper: get all webhooks to find the ID to toggle
  def get_webhooks():
    url = f"{BASE_URL}/api/2.0/settings/webhook"
    response = requests.get(url, headers=HEADERS)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)

  # Step 1: Enable or disable a webhook by ID
  def set_webhook_enabled(webhook_id: int, enabled: bool):
    url = f"{BASE_URL}/api/2.0/settings/webhook/enable"
    payload = {"id": webhook_id, "enabled": enabled}

    response = requests.put(url, headers=HEADERS, json=payload)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)

  if __name__ == "__main__":
    # Get webhooks and select an ID to toggle
    webhooks = get_webhooks()
    if not webhooks:
      raise SystemExit(0)

    webhook_id = webhooks[0].get("id")  # Replace with a specific ID in production

    # Disable the webhook
    set_webhook_enabled(webhook_id, enabled=False)

    # Enable it again if needed
    # set_webhook_enabled(webhook_id, enabled=True)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A PUT request is sent to [/api/2.0/settings/webhook/enable](/docspace/api-backend/usage-api/enable-webhook) with the following JSON body:

- `id`: the webhook configuration ID
- `enabled`: true to enable the webhook, or false to disable it

This endpoint updates only the enabled flag and keeps all other configuration fields (URL, triggers, secret key, SSL settings, and so on) unchanged.