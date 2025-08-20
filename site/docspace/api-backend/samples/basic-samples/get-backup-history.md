# Get backup history

This example demonstrates how to retrieve the list of existing backups in ONLYOFFICE DocSpace using the API. The history contains information about backup IDs, file names, storage types, and creation/expiration dates.

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

  function getBackupHistory() {
    // Optional: set Dump=True for DB-only backups
    const params = new URLSearchParams({ Dump: 'False' });
    const url = `${API_HOST}/api/2.0/backup/getbackuphistory?${params.toString()}`;

    // Send request to retrieve backup history
    return fetch(url, {
      method: 'GET',
      headers: HEADERS,
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          console.log(`Failed to retrieve history: ${res.status} - ${t}`);
          return null;
        });
      })
      .then((data) => {
        if (!data) return;
        const backups = data.response || [];
        backups.forEach((item) => {
          console.log(`Backup ID: ${item.id}`);
          console.log(`File: ${item.fileName}`);
          console.log(`Storage: ${item.storageType}`);
          console.log(`Created: ${item.createdOn}`);
          console.log(`Expires: ${item.expiresOn}\n`);
        });
      })
      .catch((err) => {
        console.log(`Failed to retrieve history: ${err.message}`);
      });
  }

  // Run
  getBackupHistory();
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

  def get_backup_history():
    # Optional: set Dump=True for DB-only backups
    params = {'Dump': False}

    # Send request to retrieve backup history
    response = requests.get(
      f'{API_HOST}/api/2.0/backup/getbackuphistory',
      headers=HEADERS,
      params=params
    )

    # Handle and display response
    if response.status_code == 200:
      backups = response.json().get('response', [])
      for item in backups:
        print(f"Backup ID: {item.get('id')}")
        print(f"File: {item.get('fileName')}")
        print(f"Storage: {item.get('storageType')}")
        print(f"Created: {item.get('createdOn')}")
        print(f"Expires: {item.get('expiresOn')}\n")
    else:
      print(f"Failed to retrieve history: {response.status_code} - {response.text}")

  if __name__ == "__main__":
    get_backup_history()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/backup/getbackuphistory](/docspace/api-backend/usage-api/get-backup-history) with an optional query parameter:

- `Dump` — boolean flag to return only backups with (true) or without (false) database dump.

The API response contains a list of backups, each including:

- `id` — unique backup identifier (used for restore operations).
- `fileName` — the name of the backup file.
- `storageType` — where the backup is stored (e.g., Local, CustomCloud, DataStore).
- `createdOn` — date and time when the backup was created.
- `expiresOn` — expiration date of the backup.

On success (HTTP 200), the response returns an array of backup objects.