import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update a webhook configuration

This example shows how to update an existing webhook in ONLYOFFICE DocSpace using the API.
You can change the destination URL, event triggers, SSL verification flag, display name, secret key, and other options for a webhook that has already been created.

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

  // Helper: get all webhooks
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

  // Step 1: Update an existing webhook configuration
  async function updateWebhook(
    id: number,
    updates: {
      name?: string;
      uri?: string;
      secretKey?: string;
      enabled?: boolean;
      ssl?: boolean;
      triggers?: string;
      targetId?: string;
    },
  ) {
    const configs = await getWebhooks();
    if (!configs) {
      return null;
    }

    // Find the current configuration by ID
    const current = configs.find((item: any) => item.id === id);
    if (!current) {
      return null;
    }

    const url = `${BASE_URL}/api/2.0/settings/webhook`;

    // Start with the current configuration and override only changed fields
    const payload: Record<string, unknown> = {
      id: current.id,
      name: updates.name ?? current.name,
      uri: updates.uri ?? current.uri,
      secretKey: updates.secretKey ?? current.secretKey,
      enabled: updates.enabled ?? current.enabled,
      ssl: updates.ssl ?? current.ssl,
      triggers: updates.triggers ?? current.triggers,
      targetId: updates.targetId ?? current.targetId,
    };

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
    const webhookId = 9846; // Replace with an existing webhook ID

    await updateWebhook(webhookId, {
      name: 'My integration webhook v2',
      uri: 'https://example.com/new-endpoint',
      triggers: 'FileUploaded',
      ssl: false, // Disable SSL verification (not recommended for production)
      // secretKey: 'my-secret',
      // targetId: 'my-system-id',
    });
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

  # Helper: get all webhooks
  def get_webhooks():
    url = f"{BASE_URL}/api/2.0/settings/webhook"
    response = requests.get(url, headers=HEADERS)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)

  # Step 1: Update an existing webhook configuration
  def update_webhook(webhook_id: int, updates: dict):
    configs = get_webhooks()
    if not configs:
      return None

    # Find the current configuration by ID
    current = next((c for c in configs if c.get("id") == webhook_id), None)
    if not current:
      return None

    url = f"{BASE_URL}/api/2.0/settings/webhook"

    # Start with the current configuration and override only changed fields
    payload = {
      "id": current.get("id"),
      "name": updates.get("name", current.get("name")),
      "uri": updates.get("uri", current.get("uri")),
      "secretKey": updates.get("secretKey", current.get("secretKey")),
      "enabled": updates.get("enabled", current.get("enabled")),
      "ssl": updates.get("ssl", current.get("ssl")),
      "triggers": updates.get("triggers", current.get("triggers")),
      "targetId": updates.get("targetId", current.get("targetId")),
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)

  if __name__ == "__main__":
    webhook_id = 9846  # Replace with an existing webhook ID

    update_webhook(
      webhook_id,
      updates={
        "name": "My integration webhook v2",
        "uri": "https://example.com/new-endpoint",
        "triggers": "FileUploaded",
        "ssl": False,  # Disable SSL verification (not recommended for production)
        # "secretKey": "my-secret",
        # "targetId": "my-system-id",
      },
    )
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A PUT request is sent to [/api/2.0/settings/webhook](/docspace/api-backend/usage-api/update-webhook) to update an existing webhook configuration.

The request body includes:

- `id`: identifier of the webhook configuration to update (required)
- `name`: updated display name for the webhook
- `uri`: new destination URL for webhook delivery
- `secretKey`: secret used to sign webhook payloads
- `enabled`: whether this configuration is active
- `ssl`: whether SSL certificate verification is required
- `triggers`: event type or set of events (for example, FileUploaded, RoomCreated, or All)
- `targetId`: optional identifier to distinguish different target systems