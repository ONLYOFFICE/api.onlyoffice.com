import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Delete a webhook

This example shows how to delete an existing webhook configuration in ONLYOFFICE DocSpace using the API.
Use it when an integration is no longer required, the target URL is deprecated, or you want to remove unused webhooks from the portal.

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

  // Optional helper: get all webhooks to find the ID to delete
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

  // Step 1: Delete a webhook by ID
  async function deleteWebhook(id: number) {
    const url = `${BASE_URL}/api/2.0/settings/webhook/${id}`;

    const response = await fetch(url, {
      method: 'DELETE',
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
    // Get webhooks and select an ID to delete
    const webhooks = await getWebhooks();
    if (!webhooks || webhooks.length === 0) {
      return;
    }

    const webhookId = webhooks[0].id; // Replace with a specific ID in production

    // Delete the selected webhook
    await deleteWebhook(webhookId);

    // Optionally, call getWebhooks() again to verify the webhook was removed
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

  # Optional helper: get all webhooks to find the ID to delete
  def get_webhooks():
    url = f"{BASE_URL}/api/2.0/settings/webhook"
    response = requests.get(url, headers=HEADERS)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)

  # Step 1: Delete a webhook by ID
  def delete_webhook(webhook_id: int):
    url = f"{BASE_URL}/api/2.0/settings/webhook/{webhook_id}"
    response = requests.delete(url, headers=HEADERS)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)

  if __name__ == "__main__":
    # Get webhooks and select an ID to delete
    webhooks = get_webhooks()
    if not webhooks:
      raise SystemExit(0)

    webhook_id = webhooks[0].get("id")  # Replace with a specific ID in production

    # Delete the selected webhook
    delete_webhook(webhook_id)

    # Optionally, call get_webhooks() again to verify the webhook was removed
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A DELETE request is sent to [/api/2.0/settings/webhook/{id}](/docspace/api-backend/usage-api/remove-webhook), where `{id}` is the webhook configuration ID.

You can obtain this ID from the list returned by [/api/2.0/settings/webhook](/docspace/api-backend/usage-api/get-tenant-webhooks) and then pass it to the delete method to remove the corresponding webhook configuration.