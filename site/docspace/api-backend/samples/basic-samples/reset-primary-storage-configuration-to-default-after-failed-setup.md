import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Reset primary storage configuration to default after a failed setup

This example shows how to reset the primary storage configuration in ONLYOFFICE DocSpace to its default settings using the API.
Use it when an external storage (for example, S3 or FTP) was misconfigured and the portal starts failing to serve files. Resetting the settings restores a safe baseline configuration without manually editing all parameters.

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

  // Step 1: Reset primary storage configuration to default
  async function resetStorageSettings() {
    const url = `${BASE_URL}/api/2.0/settings/storage`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    // Return false if the API call fails
    if (!response.ok) {
      return false;
    }

    // Optional: parse result if the API returns a body
    return true;
  }

  // Example usage
  (async () => {
    const ok = await resetStorageSettings();
    if (!ok) {
      // Handle error in your application logic if needed
      return;
    }

    // Storage settings have been reset to default
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

  # Step 1: Reset primary storage configuration to default
  def reset_storage_settings() -> bool:
    url = f"{BASE_URL}/api/2.0/settings/storage"
    response = requests.delete(url, headers=HEADERS)

    # Return False if the API call fails
    if not response.ok:
      return False

    # Optional: parse response body if needed
    return True

  if __name__ == "__main__":
    success = reset_storage_settings()
    if not success:
      # Handle error in your application logic if needed
      pass
    else:
      # Storage settings have been reset to default
      pass
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A DELETE request is sent to [/api/2.0/settings/storage](/docspace/api-backend/usage-api/reset-storage-to-default).
This endpoint clears the custom storage configuration and restores the default storage settings used by the portal.
You can call it from an administrative “Reset storage settings” button to quickly recover from an invalid external storage setup.