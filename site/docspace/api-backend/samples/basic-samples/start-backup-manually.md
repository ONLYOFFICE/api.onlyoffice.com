import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Start a backup manually

This example demonstrates how to start a backup in ONLYOFFICE DocSpace on demand via the API. You can specify the target storage type and whether to include a full portal dump in the backup.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/start-backup-manually.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/start-backup-manually.py)

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

  async function startBackup() {
    // Backup payload: Local storage, full portal dump
    const payload = {
      storageType: 'Local', // Or "CustomCloud", "DataStore"
      dump: true,
    };

    // Send request to start backup
    const res = await fetch(`${API_HOST}/api/2.0/backup/startbackup`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    // Handle API response
    if (!res.ok) {
      const text = await res.text();
      console.log(`Backup start failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }

    const data = await res.json();
    const result = data?.response || {};
    console.log(`Backup task started. Progress: ${result.progress}%`);
    return result;
  }

  // Run
  (async () => {
    await startBackup();
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

  def start_backup():
    # Backup payload: Local storage, full portal dump
    payload = {
      "storageType": "Local",  # Or "CustomCloud", "DataStore"
      "dump": True
    }

    # Send request to start backup
    response = requests.post(
      f'{API_HOST}/api/2.0/backup/startbackup',
      headers=HEADERS,
      json=payload
    )

    # Handle API response
    if response.status_code == 200:
      result = response.json().get('response', {})
      print(f"Backup task started. Progress: {result.get('progress')}%")
    else:
      print(f"Backup start failed. Status code: {response.status_code}, Message: {response.text}")

  if __name__ == "__main__":
    start_backup()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A POST request is sent to [/api/2.0/backup/startbackup](/docspace/api-backend/usage-api/start-backup) with a JSON payload:

`storageType` — backup storage target, e.g. "Local", "CustomCloud", "DataStore".
`dump` — boolean flag to include a full portal dump.

On success (200), the backup process is initiated and the API returns an object containing backup task details, including the initial progress value.

