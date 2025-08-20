# Get the restoring progress

This example demonstrates how to retrieve the progress of an ongoing portal restoration process in ONLYOFFICE DocSpace using the API.

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

  function getRestoreProgress(dump) {
    // Optional query parameter: whether the restore includes a DB dump
    const params = new URLSearchParams({ Dump: String(dump).toLowerCase() });
    const url = `${API_HOST}/api/2.0/backup/getrestoreprogress?${params.toString()}`;

    // Send GET request to check restore progress
    return fetch(url, { method: 'GET', headers: HEADERS })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          throw new Error(`Failed to retrieve restore progress: ${res.status} - ${t}`);
        });
      })
      .then((data) => {
        const progressInfo = data?.response || {};
        console.log(`Progress: ${progressInfo.progress}%`);
        console.log(`Completed: ${progressInfo.isCompleted}`);
        console.log(`Task type: ${progressInfo.backupProgressEnum}`);
        console.log(`Error: ${progressInfo.error}`);
        console.log(`Download link: ${progressInfo.link}`);
        console.log(`Tenant ID: ${progressInfo.tenantId}`);
        return progressInfo;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  // Run example: Check restore progress without dump parameter
  getRestoreProgress(false);
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

  def get_restore_progress(dump=False):
    # Optional query parameter: whether the restore includes a DB dump
    params = {"Dump": str(dump).lower()}

    # Send GET request to check restore progress
    response = requests.get(
      f'{API_HOST}/api/2.0/backup/getrestoreprogress',
      headers=HEADERS,
      params=params
    )

    if response.status_code == 200:
      progress_info = response.json().get('response', {})
      print(f"Progress: {progress_info.get('progress')}%")
      print(f"Completed: {progress_info.get('isCompleted')}")
      print(f"Task type: {progress_info.get('backupProgressEnum')}")
      print(f"Error: {progress_info.get('error')}")
      print(f"Download link: {progress_info.get('link')}")
      print(f"Tenant ID: {progress_info.get('tenantId')}")
      return progress_info
    else:
      raise Exception(f"Failed to retrieve restore progress: {response.status_code} - {response.text}")

  if __name__ == '__main__':
    # Example: Check restore progress without dump parameter
    get_restore_progress(dump=False)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/backup/getrestoreprogress](/docspace/api-backend/usage-api/get-restore-progress) with an optional query parameter:

- `Dump` — boolean; set to true if the restore operation includes a database dump, otherwise false.

The API returns details about the current restoration process:

- `isCompleted` — whether the restore operation has finished.
- `progress` — integer (0–100) indicating progress percentage.
- `error` — error message if the process failed, otherwise null.
- `link` — download link for the restored data (if applicable).
- `tenantId` — identifier of the tenant being restored.
- `backupProgressEnum` — current operation type (Backup, Restore, or Transfer).
- `taskId` — unique ID of the running task.

On success (200), the returned object can be used to monitor restoration until completion.