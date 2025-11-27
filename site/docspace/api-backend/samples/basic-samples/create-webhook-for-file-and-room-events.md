import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a webhook for file and room events

This example shows how to create a new webhook in ONLYOFFICE DocSpace that sends events (such as file uploads or room changes) to an external endpoint.
You can use it to connect DocSpace to your own backend, CRM, or notification service and react to events like `FileUploaded`, `RoomCreated`, or `All`.

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

  // Step 1: Create a webhook with the specified trigger
  async function createWebhook(options: {
    name: string;
    uri: string;
    trigger: string;
    secretKey?: string;
    targetId?: string;
    enabled?: boolean;
    ssl?: boolean;
  }) {
    const url = `${BASE_URL}/api/2.0/settings/webhook`;

    // Build request payload from required and optional fields
    const payload: Record<string, unknown> = {
      name: options.name,
      uri: options.uri,
      enabled: options.enabled ?? true,
      ssl: options.ssl ?? true,
      triggers: options.trigger, // e.g. "FileUploaded", "RoomCreated", or "All"
    };

    if (options.secretKey) {
      payload.secretKey = options.secretKey;
    }

    if (options.targetId) {
      payload.targetId = options.targetId;
    }

    const response = await fetch(url, {
      method: 'POST',
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
    // Create a webhook that listens only for file uploads
    await createWebhook({
      name: 'My file upload webhook',
      uri: 'https://example.com/webhook-endpoint',
      trigger: 'FileUploaded',
      secretKey: 'my-secret',
      targetId: 'files-system',
    });

    // Create a webhook that listens to all supported events
    await createWebhook({
      name: 'All events webhook',
      uri: 'https://example.com/webhook-all',
      trigger: 'All',
      secretKey: 'another-secret',
      targetId: 'all-events',
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

  # Step 1: Create a webhook with the specified trigger
  def create_webhook(
    name: str,
    uri: str,
    trigger: str,
    secret_key: str | None = None,
    target_id: str | None = None,
    enabled: bool = True,
    ssl: bool = True,
  ):
    url = f"{BASE_URL}/api/2.0/settings/webhook"

    # Build request payload from required and optional fields
    data: dict[str, object] = {
      "name": name,
      "uri": uri,
      "enabled": enabled,
      "ssl": ssl,
      "triggers": trigger,  # e.g. "FileUploaded", "RoomCreated", or "All"
    }

    if secret_key is not None:
      data["secretKey"] = secret_key

    if target_id is not None:
      data["targetId"] = target_id

    response = requests.post(url, headers=HEADERS, json=data)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)


  if __name__ == "__main__":
    # Create a webhook that listens only for file uploads
    create_webhook(
      name="My file upload webhook",
      uri="https://example.com/webhook-endpoint",
      trigger="FileUploaded",
      secret_key="my-secret",
      target_id="files-system",
    )

    # Create a webhook that listens to all supported events
    create_webhook(
      name="All events webhook",
      uri="https://example.com/webhook-all",
      trigger="All",
      secret_key="another-secret",
      target_id="all-events",
    )
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A POST request is sent to [/api/2.0/settings/webhook](/docspace/api-backend/usage-api/create-webhook) to create a new tenant webhook.

The request body includes:

- `name`: webhook display name
- `uri`: destination URL where webhook payloads will be sent
- `secretKey` (optional): secret used to sign the payload (for example, with HMAC on the receiver side)
- `enabled`: whether this configuration is active
- `ssl`: whether SSL certificate verification is required
- `triggers`: event type, for example:
  - `"FileUploaded"`: fired when a file is uploaded
  - `"RoomCreated"`: fired when a room is created
  - `"All"`: fired for all supported events
- `targetId` (optional): custom identifier that helps distinguish different destinations or external systems