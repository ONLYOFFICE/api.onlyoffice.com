import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View all webhooks and their status

This example shows how to retrieve all tenant webhooks in ONLYOFFICE DocSpace and inspect their key properties such as URL, status, SSL flag and triggers.
It also demonstrates how to fetch the list of supported webhook triggers.

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

  // Step 1: Get all tenant webhooks
  async function getWebhooks() {
    const url = `${BASE_URL}/api/2.0/settings/webhook`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    // Handle errors from the API
    if (!response.ok) {
      console.log(`Request failed: ${response.status}`);
      return null;
    }

    // Parse response body and normalize format
    const body = await response.json();
    const webhooks = body.response || body;

    return webhooks;
  }

  // Step 2: Get the list of supported webhook triggers
  async function getWebhookTriggers() {
    const url = `${BASE_URL}/api/2.0/settings/webhook/triggers`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    // Handle errors from the API
    if (!response.ok) {
      console.log(`Request failed: ${response.status}`);
      return null;
    }

    // Parse response body and normalize format
    const body = await response.json();
    const triggers = body.response || body;

    return triggers;
  }

  // Example usage
  (async () => {
    const webhooks = await getWebhooks();
    const triggers = await getWebhookTriggers();

    // Use webhooks and triggers in your application logic
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

  # Step 1: Get all tenant webhooks
  def get_webhooks():
    url = f"{BASE_URL}/api/2.0/settings/webhook"
    response = requests.get(url, headers=HEADERS)

    # Handle errors from the API
    if not response.ok:
      print(f"Request failed: {response.status_code}")
      return None

    # Parse response body and normalize format
    raw = response.json()
    webhooks = raw.get("response", raw)

    return webhooks

  # Step 2: Get the list of supported webhook triggers
  def get_webhook_triggers():
    url = f"{BASE_URL}/api/2.0/settings/webhook/triggers"
    response = requests.get(url, headers=HEADERS)

    # Handle errors from the API
    if not response.ok:
      print(f"Request failed: {response.status_code}")
      return None

    # Parse response body and normalize format
    raw = response.json()
    triggers = raw.get("response", raw)

    return triggers

  if __name__ == "__main__":
    webhooks = get_webhooks()
    triggers = get_webhook_triggers()
    # Use webhooks and triggers in your application logic
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get all webhooks

A GET request is sent to [/api/2.0/settings/webhook](/docspace/api-backend/usage-api/get-tenant-webhooks) to retrieve the list of tenant webhooks.

For each webhook you can inspect:
- `id`: webhook identifier.
- `name`: human-readable name.
- `uri`: destination URL.
- `enabled`: whether the webhook configuration is active.
- `ssl`: whether SSL certificate verification is enabled.
- `triggers`: events that will fire this webhook.
- `lastFailureOn`/`lastSuccessOn`: timestamps of last failure and success.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getWebhooks() {
    const url = `${BASE_URL}/api/2.0/settings/webhook`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    // Handle errors from the API
    if (!response.ok) {
      console.log(`Request failed: ${response.status}`);
      return null;
    }

    // Parse response body and normalize format
    const body = await response.json();
    const webhooks = body.response || body;

    return webhooks;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_webhooks():
    url = f"{BASE_URL}/api/2.0/settings/webhook"
    response = requests.get(url, headers=HEADERS)

    # Handle errors from the API
    if not response.ok:
      print(f"Request failed: {response.status_code}")
      return None

    # Parse response body and normalize format
    raw = response.json()
    webhooks = raw.get("response", raw)

    return webhooks
  ```

  </TabItem>
</Tabs>

## Step 2: Get available webhook triggers

A GET request is sent to [/api/2.0/settings/webhook/triggers](/docspace/api-backend/usage-api/get-webhook-triggers) to retrieve the list of supported trigger values (for example, `user.created`, `file.uploaded`, `room.deleted`).
You can use this list when building UI controls for webhook configuration or when interpreting the triggers field returned in Step 1.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getWebhookTriggers() {
    const url = `${BASE_URL}/api/2.0/settings/webhook/triggers`;

    const response = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    // Handle errors from the API
    if (!response.ok) {
      console.log(`Request failed: ${response.status}`);
      return null;
    }

    // Parse response body and normalize format
    const body = await response.json();
    const triggers = body.response || body;

    return triggers;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_webhook_triggers():
    url = f"{BASE_URL}/api/2.0/settings/webhook/triggers"
    response = requests.get(url, headers=HEADERS)

    # Handle errors from the API
    if not response.ok:
      print(f"Request failed: {response.status_code}")
      return None

    # Parse response body and normalize format
    raw = response.json()
    triggers = raw.get("response", raw)

    return triggers
  ```

  </TabItem>
</Tabs>