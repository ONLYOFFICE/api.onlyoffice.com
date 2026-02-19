import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get backup progress

This example demonstrates how to check the progress of a backup process in ONLYOFFICE DocSpace using the API. The response includes information such as completion status, backup type, and download link if available.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/get-backup-progress.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/get-backup-progress.py)

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
  };

  function getBackupProgress() {
    // Optional parameter for dump-based backup
    const params = new URLSearchParams({ Dump: 'True' });
    const url = `${API_HOST}/api/2.0/backup/getbackupprogress?${params.toString()}`;

    // Send request to retrieve progress
    return fetch(url, {
      method: 'GET',
      headers: HEADERS,
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          console.log(`Backup progress retrieval failed. Status code: ${res.status}, Message: ${t}`);
          return null;
        });
      })
      .then((data) => {
        if (!data) return;
        const resp = data.response || {};
        console.log(`Progress: ${resp.progress}%`);
        console.log(`Completed: ${resp.isCompleted}`);
        console.log(`Type: ${resp.backupProgressEnum}`);
        console.log(`Download Link: ${resp.link}`);
      })
      .catch((err) => {
        console.log(`Backup progress retrieval error: ${err.message}`);
      });
  }

  // Run
  getBackupProgress();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  # Headers with authentication
  HEADERS = {
    'Authorization': API_KEY
  }

  def get_backup_progress():
    # Optional parameter for dump-based backup
    params = {'Dump': True}

    # Send request to retrieve progress
    response = requests.get(
        f'{API_HOST}/api/2.0/backup/getbackupprogress',
        headers=HEADERS,
        params=params
    )

    # Handle response
    if response.status_code == 200:
      data = response.json().get('response', {})
      print(f"Progress: {data.get('progress')}%")
      print(f"Completed: {data.get('isCompleted')}")
      print(f"Type: {data.get('backupProgressEnum')}")
      print(f"Download Link: {data.get('link')}")
    else:
      print(f"Backup progress retrieval failed. Status code: {response.status_code}, Message: {response.text}")

  if __name__ == "__main__":
    get_backup_progress()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/backup/getbackupprogress](/docspace/api-backend/usage-api/get-backup-progress) with the following optional parameter:

- `Dump` — boolean flag to check progress for a backup that includes a full portal dump.

The API response includes:

- `progress` — percentage of completion.
- `isCompleted` — boolean indicating whether the backup process has finished.
- `backupProgressEnum` — status/type of the backup.
- `link` — URL to download the backup file (if completed and available).

On success (HTTP 200), the API returns the current progress and related details of the backup task.
