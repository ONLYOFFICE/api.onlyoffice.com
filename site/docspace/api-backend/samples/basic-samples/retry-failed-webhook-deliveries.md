import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retry failed webhook deliveries (single and batch)

This example shows how to retry failed webhook deliveries in ONLYOFFICE DocSpace using the API.

You can:

- Retry a single failed delivery by its log ID.
- Retry multiple failed deliveries in one batch request.

This is useful when an external system was temporarily unavailable and you want to re-send only the failed events without changing webhook configuration.

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

  // Step 1: Get failed webhook logs for a specific configuration
  async function getFailedWebhookLogs(configId: number, count: number = 10) {
    // Build query parameters to filter logs
    const params = new URLSearchParams({
      configId: String(configId), // webhook configuration ID
      groupStatus: 'Failed',      // status used for failed deliveries
      count: String(count),       // number of records to return
      startIndex: '0',            // offset for pagination
    });

    const url = `${BASE_URL}/api/2.0/settings/webhooks/log?${params.toString()}`;

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
    const logs = body.response || body;

    return logs as any[];
  }

  // Step 2: Retry a single webhook delivery by log ID
  async function retryWebhookDelivery(logId: number) {
    const url = `${BASE_URL}/api/2.0/settings/webhook/${logId}/retry`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
    });

    // Handle errors from the API
    if (!response.ok) {
      console.log(`Retry failed: ${response.status}`);
      return null;
    }

    // Parse response body and normalize format
    const body = await response.json();
    const updatedLog = body.response || body;

    return updatedLog;
  }

  // Step 3: Retry multiple webhook deliveries by log IDs
  async function retryWebhookDeliveries(ids: number[]) {
    const url = `${BASE_URL}/api/2.0/settings/webhook/retry`;

    const payload = { ids };

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        ...HEADERS,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Handle errors from the API
    if (!response.ok) {
      console.log(`Batch retry failed: ${response.status}`);
      return null;
    }

    // Parse response body and normalize format
    const body = await response.json();
    const logs = body.response || body;

    return logs;
  }

  // Example usage
  (async () => {
    // Replace with a real webhook configuration ID from your portal
    const configId = 1234;

    // Step 1: find failed deliveries for this configuration
    const failedLogs = await getFailedWebhookLogs(configId, 10);
    if (!failedLogs || failedLogs.length === 0) {
      console.log('No failed webhook deliveries found for this configuration.');
      return;
    }

    // Step 2: retry a single delivery (first failed log)
    const firstLogId = failedLogs[0].id;
    await retryWebhookDelivery(firstLogId);

    // Step 3: retry multiple deliveries in batch (all failed logs)
    const ids = failedLogs.map((log: any) => log.id);
    await retryWebhookDeliveries(ids);

    // Use the returned log objects in your application logic if needed
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

  # Step 1: Get failed webhook logs for a specific configuration
  def get_failed_webhook_logs(config_id: int, count: int = 10):
    # Build query parameters to filter logs
    params = {
      "configId": str(config_id),   # webhook configuration ID
      "groupStatus": "Failed",      # status used for failed deliveries
      "count": str(count),          # number of records to return
      "startIndex": "0",            # offset for pagination
    }

    url = f"{BASE_URL}/api/2.0/settings/webhooks/log"
    response = requests.get(url, headers=HEADERS, params=params)

    # Handle errors from the API
    if not response.ok:
      print(f"Request failed: {response.status_code}")
      return None

    # Parse response body and normalize format
    raw = response.json()
    logs = raw.get("response", raw)

    return logs

  # Step 2: Retry a single webhook delivery by log ID
  def retry_webhook_delivery(log_id: int):
    url = f"{BASE_URL}/api/2.0/settings/webhook/{log_id}/retry"
    response = requests.put(url, headers=HEADERS)

    # Handle errors from the API
    if not response.ok:
      print(f"Retry failed: {response.status_code}")
      return None

    # Parse response body and normalize format
    raw = response.json()
    updated_log = raw.get("response", raw)

    return updated_log

  # Step 3: Retry multiple webhook deliveries by log IDs
  def retry_webhook_deliveries(ids: list[int]):
    url = f"{BASE_URL}/api/2.0/settings/webhook/retry"

    payload = {"ids": ids}

    response = requests.put(url, headers=HEADERS, json=payload)

    # Handle errors from the API
    if not response.ok:
      print(f"Batch retry failed: {response.status_code}")
      return None

    # Parse response body and normalize format
    raw = response.json()
    logs = raw.get("response", raw)

    return logs


  if __name__ == "__main__":
    # Replace with a real webhook configuration ID from your portal
    config_id = 1234

    # Step 1: find failed deliveries
    failed_logs = get_failed_webhook_logs(config_id, count=10)
    if not failed_logs:
      print("No failed webhook deliveries found for this configuration.")
    else:
      # Step 2: retry a single delivery (first failed log)
      first_log_id = failed_logs[0].get("id")
      retry_webhook_delivery(first_log_id)

      # Step 3: retry multiple deliveries in batch (all failed logs)
      ids = [log.get("id") for log in failed_logs]
      retry_webhook_deliveries(ids)
      # Use the returned log objects in your application logic if needed
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Find failed webhook deliveries

A GET request is sent to [/api/2.0/settings/webhooks/log](/docspace/api-backend/usage-api/get-webhooks-logs) to retrieve webhook delivery logs.

Useful query parameters:

- `configId`: webhook configuration ID to filter logs for a specific webhook.
- `groupStatus`: delivery status group (for example, value used for failed deliveries).
- `count`, `startIndex`: pagination parameters.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getFailedWebhookLogs(configId: number, count: number = 10) {
    // Build query parameters to filter logs
    const params = new URLSearchParams({
      configId: String(configId), // webhook configuration ID
      groupStatus: 'Failed',      // status used for failed deliveries
      count: String(count),       // number of records to return
      startIndex: '0',            // offset for pagination
    });

    const url = `${BASE_URL}/api/2.0/settings/webhooks/log?${params.toString()}`;

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
    const logs = body.response || body;

    return logs as any[];
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_failed_webhook_logs(config_id: int, count: int = 10):
    # Build query parameters to filter logs
    params = {
      "configId": str(config_id),   # webhook configuration ID
      "groupStatus": "Failed",      # status used for failed deliveries
      "count": str(count),          # number of records to return
      "startIndex": "0",            # offset for pagination
    }

    url = f"{BASE_URL}/api/2.0/settings/webhooks/log"
    response = requests.get(url, headers=HEADERS, params=params)

    # Handle errors from the API
    if not response.ok:
      print(f"Request failed: {response.status_code}")
      return None

    # Parse response body and normalize format
    raw = response.json()
    logs = raw.get("response", raw)

    return logs
  ```

  </TabItem>
</Tabs>

## Step 2: Retry a single webhook delivery

A PUT request is sent to [/api/2.0/settings/webhook/{id}/retry](/docspace/api-backend/usage-api/retry-webhook), where `{id}` is the webhook log ID returned in Step 1.

The API retries the delivery attempt for this specific log entry.
The response returns an updated log object with the new status and delivery timestamp.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function retryWebhookDelivery(logId: number) {
    const url = `${BASE_URL}/api/2.0/settings/webhook/${logId}/retry`;

    const response = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
    });

    // Handle errors from the API
    if (!response.ok) {
      console.log(`Retry failed: ${response.status}`);
      return null;
    }

    // Parse response body and normalize format
    const body = await response.json();
    const updatedLog = body.response || body;

    return updatedLog;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def retry_webhook_delivery(log_id: int):
    url = f"{BASE_URL}/api/2.0/settings/webhook/{log_id}/retry"
    response = requests.put(url, headers=HEADERS)

    # Handle errors from the API
    if not response.ok:
      print(f"Retry failed: {response.status_code}")
      return None

    # Parse response body and normalize format
    raw = response.json()
    updated_log = raw.get("response", raw)

    return updated_log
  ```

  </TabItem>
</Tabs>

## Step 3: Retry multiple webhook deliveries in batch

A PUT request is sent to [/api/2.0/settings/webhook/retry](/docspace/api-backend/usage-api/retry-webhooks) with a JSON body containing an array of log IDs.

The API retries all specified failed deliveries in a single batch operation.
The response returns a list of updated log objects.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function retryWebhookDeliveries(ids: number[]) {
    const url = `${BASE_URL}/api/2.0/settings/webhook/retry`;

    const payload = { ids };

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        ...HEADERS,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Handle errors from the API
    if (!response.ok) {
      console.log(`Batch retry failed: ${response.status}`);
      return null;
    }

    // Parse response body and normalize format
    const body = await response.json();
    const logs = body.response || body;

    return logs;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def retry_webhook_deliveries(ids: list[int]):
    url = f"{BASE_URL}/api/2.0/settings/webhook/retry"

    payload = {"ids": ids}

    response = requests.put(url, headers=HEADERS, json=payload)

    # Handle errors from the API
    if not response.ok:
      print(f"Batch retry failed: {response.status_code}")
      return None

    # Parse response body and normalize format
    raw = response.json()
    logs = raw.get("response", raw)

    return logs
  ```

  </TabItem>
</Tabs>