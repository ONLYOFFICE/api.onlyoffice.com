import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage automatic file cleanup settings

This example demonstrates how to retrieve and update automatic file cleanup settings in ONLYOFFICE DocSpace.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Step 1: Get automatic cleanup settings
  async function getAutomaticallyCleanUp() {
    const url = `${BASE_URL}/api/2.0/files/settings/autocleanup`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const settings = data.response || data;
      console.log('Current auto-cleanup settings:');
      console.log(JSON.stringify(settings, null, 2));
      return settings;
    }

    if (res.status === 401) {
      console.log('Unauthorized (401). Check your access token.');
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Step 2: Change automatic cleanup settings
  async function changeAutomaticallyCleanUp(enabled, days) {
    const url = `${BASE_URL}/api/2.0/files/settings/autocleanup`;
    const payload = { enabled, days };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const data = await res.json();
      const updated = data.response || data;
      console.log('Auto-cleanup settings updated:');
      console.log(JSON.stringify(updated, null, 2));
      return updated;
    }

    if (res.status === 401) {
      console.log('Unauthorized (401). Check your access token.');
      return null;
    }

    if (res.status === 403) {
      console.log('Forbidden (403). Insufficient permissions to change settings.');
      return null;
    }

    const text = await res.text();
    console.log(`Update failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    // Step 1 — Retrieve current cleanup settings
    await getAutomaticallyCleanUp();

    // Step 2 — Enable automatic cleanup (example: every 30 days)
    await changeAutomaticallyCleanUp(true, 30);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json"
  }

  # Step 1: Get automatic cleanup settings
  def get_automatically_clean_up():
    url = f"{BASE_URL}/api/2.0/files/settings/autocleanup"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("Current auto-cleanup settings:")
      print(json.dumps(settings, indent=2))
      return settings
    elif response.status_code == 401:
      print("Unauthorized (401). Check your access token.")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None


  # Step 2: Change automatic cleanup settings
  def change_automatically_clean_up(enabled: bool, days: int):
    url = f"{BASE_URL}/api/2.0/files/settings/autocleanup"
    payload = {
      "enabled": enabled,
      "days": days
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      data = response.json()
      updated = data.get("response", data)
      print("Auto-cleanup settings updated:")
      print(json.dumps(updated, indent=2))
      return updated
    elif response.status_code == 401:
      print("Unauthorized (401). Check your access token.")
      return None
    elif response.status_code == 403:
      print("Forbidden (403). Insufficient permissions to change settings.")
      return None
    else:
      print(f"Update failed: {response.status_code}")
      print(response.text)
      return None


  # Example usage
  if __name__ == "__main__":
    # Step 1 — Retrieve current cleanup settings
    get_automatically_clean_up()

    # Step 2 — Enable automatic cleanup (example: every 30 days)
    change_automatically_clean_up(enabled=True, days=30)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get automatic cleanup settings

A GET request is sent to [/api/2.0/files/settings/autocleanup](/docspace/api-backend/usage-api/get-automatically-clean-up).

This request retrieves the current automatic file cleanup configuration.
The response includes whether cleanup is enabled and the number of days before files are deleted.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getAutomaticallyCleanUp() {
    const url = `${BASE_URL}/api/2.0/files/settings/autocleanup`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const settings = data.response || data;
      console.log('Current auto-cleanup settings:');
      console.log(JSON.stringify(settings, null, 2));
      return settings;
    }

    if (res.status === 401) {
      console.log('Unauthorized (401). Check your access token.');
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_automatically_clean_up():
    url = f"{BASE_URL}/api/2.0/files/settings/autocleanup"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      settings = data.get("response", data)
      print("Current auto-cleanup settings:")
      print(json.dumps(settings, indent=2))
      return settings
    elif response.status_code == 401:
      print("Unauthorized (401). Check your access token.")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Change automatic cleanup settings

A PUT request is sent to [/api/2.0/files/settings/autocleanup](/docspace/api-backend/usage-api/change-automatically-clean-up).

Payload parameters include:

- `enabled`: Enables or disables automatic cleanup.
- `days`: The number of days after which files are automatically deleted.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function changeAutomaticallyCleanUp(enabled, days) {
    const url = `${BASE_URL}/api/2.0/files/settings/autocleanup`;
    const payload = { enabled, days };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const data = await res.json();
      const updated = data.response || data;
      console.log('Auto-cleanup settings updated:');
      console.log(JSON.stringify(updated, null, 2));
      return updated;
    }

    if (res.status === 401) {
      console.log('Unauthorized (401). Check your access token.');
      return null;
    }

    if (res.status === 403) {
      console.log('Forbidden (403). Insufficient permissions to change settings.');
      return null;
    }

    const text = await res.text();
    console.log(`Update failed: ${res.status}`);
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def change_automatically_clean_up(enabled: bool, days: int):
    url = f"{BASE_URL}/api/2.0/files/settings/autocleanup"
    payload = {
      "enabled": enabled,
      "days": days
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      data = response.json()
      updated = data.get("response", data)
      print("Auto-cleanup settings updated:")
      print(json.dumps(updated, indent=2))
      return updated
    elif response.status_code == 401:
      print("Unauthorized (401). Check your access token.")
      return None
    elif response.status_code == 403:
      print("Forbidden (403). Insufficient permissions to change settings.")
      return None
    else:
      print(f"Update failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>
