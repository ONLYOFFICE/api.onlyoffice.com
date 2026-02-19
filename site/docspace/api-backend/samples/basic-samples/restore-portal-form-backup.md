import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Restore portal from a backup

This example demonstrates how to restore an ONLYOFFICE DocSpace portal from a specific backup using the API. You can specify the backup ID, storage type, and optional parameters such as user notifications and dump usage.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/restore-portal-form-backup.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/restore-portal-form-backup.py)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Config
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with authentication
  const HEADERS = {
    Authorization: API_KEY,
    'Content-Type': 'application/json',
  };

  async function restorePortal() {
    // Restore payload: specify backup ID, storage type, and options
    const payload = {
      backupId: 'your-backup-id', // Obtained from GET /backup/getbackuphistory
      storageType: 'Local',       // Or "CustomCloud", "DataStore"
      notify: true,               // Send notifications to users
      dump: true,                 // Use dump if required
    };

    // Send request to start restoration
    const res = await fetch(`${API_HOST}/api/2.0/backup/startrestore`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    // Handle API response
    if (!res.ok) {
      const text = await res.text();
      console.log(`Restore start failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }

    const data = await res.json();
    const result = data?.response || {};
    console.log(`Restoration started. Progress: ${result.progress}%`);
    return result;
  }

  // Run
  (async () => {
    await restorePortal();
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  # Headers with authentication
  HEADERS = {
    'Authorization': API_KEY,
    'Content-Type': 'application/json'
  }

  def restore_portal():
    # Restore payload: specify backup ID, storage type, and options
    payload = {
      "backupId": "your-backup-id",  # Obtained from GET /backup/getbackuphistory
      "storageType": "Local",        # Or "CustomCloud", "DataStore"
      "notify": True,                # Send notifications to users
      "dump": True                   # Use dump if required
    }

    # Send request to start restoration
    response = requests.post(
      f'{API_HOST}/api/2.0/backup/startrestore',
      headers=HEADERS,
      json=payload
    )

    # Handle API response
    if response.status_code == 200:
      result = response.json().get('response', {})
      print(f"Restoration started. Progress: {result.get('progress')}%")
    else:
      print(f"Restore start failed. Status code: {response.status_code}, Message: {response.text}")

  if __name__ == "__main__":
    restore_portal()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A POST request is sent to [/api/2.0/backup/startrestore](/docspace/api-backend/usage-api/start-backup-restore) with the following parameters:

- `backupId` — ID of the backup to restore (obtained from backup history).
- `storageType` — source location of the backup (e.g., "Local", "CustomCloud", "DataStore").
- `notify` — boolean flag to send notifications to portal users.
- `dump` — boolean flag to include a full portal dump in the restore process.

On success (HTTP 200), the API initiates the restoration process and returns details including the current progress percentage.