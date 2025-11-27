import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View webhook delivery logs and filter failures

This example shows how to retrieve webhook delivery logs in ONLYOFFICE DocSpace and how to filter failed deliveries using the API.
It is useful for administrators and support teams who need to debug integrations, check recent webhook activity, and investigate failed calls.

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

  // Helper: fetch webhook logs with optional query parameters
  async function getWebhookLogs(params: Record<string, string | number> = {}) {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      searchParams.set(key, String(value));
    });

    const query = searchParams.toString();
    const url = `${BASE_URL}/api/2.0/settings/webhooks/log${query ? `?${query}` : ''}`;

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
    // Scenario 1: get the last 50 webhook logs
    const recentLogs = await getWebhookLogs({
      count: 50,
      startIndex: 0,
    });

    // Scenario 2: get failed logs for a specific webhook configuration
    const configId = 1234; // replace with a real configuration ID
    const failedLogs = await getWebhookLogs({
      configId,
      groupStatus: 'Failed', // status used for failed deliveries
      count: 50,
      startIndex: 0,
    });

    // Use recentLogs and failedLogs in your application logic as needed
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

  # Helper: fetch webhook logs with optional query parameters
  def get_webhook_logs(params: dict | None = None):
    if params is None:
      params = {}

    url = f"{BASE_URL}/api/2.0/settings/webhooks/log"
    response = requests.get(url, headers=HEADERS, params=params)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)

  if __name__ == "__main__":
    # Scenario 1: get the last 50 webhook logs
    recent_logs = get_webhook_logs({
      "count": 50,
      "startIndex": 0,
    })

    # Scenario 2: get failed logs for a specific webhook configuration
    config_id = 1234  # replace with a real configuration ID
    failed_logs = get_webhook_logs({
      "configId": config_id,
      "groupStatus": "Failed",  # status used for failed deliveries
      "count": 50,
      "startIndex": 0,
    })

    # Use recent_logs and failed_logs in your application logic as needed
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/settings/webhooks/log](/docspace/api-backend/usage-api/get-webhooks-logs). You can control which logs are returned using query parameters such as:

- `count`: maximum number of log records to return
- `startIndex`: zero-based index for pagination
- `configId`: webhook configuration ID to filter logs for a specific webhook
- `groupStatus`: status group (for example, a value used to represent failed deliveries)
- `deliveryFrom`/`deliveryTo`: optional time range for delivery timestamps