import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Choose where backups are stored

This example shows how to list available backup storages in ONLYOFFICE DocSpace using the API.
You can use this list to build a “Backup storage selection” screen where an administrator chooses whether backups and dumps are stored on local disk, S3, a network share, or another configured storage.

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

  // Step 1: Get available backup storages
  async function getBackupStorages(includeDump: boolean = false) {
    let url = `${BASE_URL}/api/2.0/settings/storage/backup`;

    // Optional filter to list storages that support dumps
    if (includeDump) {
      url += '?Dump=true';
    }

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
    // Load all backup storages (local, cloud, network storages, etc.)
    const backupStorages = await getBackupStorages(false);

    // Or load only storages that support dumps
    const dumpStorages = await getBackupStorages(true);

    // Use backupStorages / dumpStorages in your backup configuration UI
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

  # Step 1: Get available backup storages
  def get_backup_storages(include_dump: bool = False):
    params: dict[str, str] = {}

    # Optional filter to list storages that support dumps
    if include_dump:
      params["Dump"] = "true"

    url = f"{BASE_URL}/api/2.0/settings/storage/backup"
    response = requests.get(url, headers=HEADERS, params=params)

    # Return None if the API call fails
    if not response.ok:
      return None

    # Parse and normalize response data
    raw = response.json()
    return raw.get("response", raw)

  if __name__ == "__main__":
    # Load all backup storages (local, cloud, network storages, etc.)
    backup_storages = get_backup_storages(include_dump=False)

    # Or load only storages that support dumps
    dump_storages = get_backup_storages(include_dump=True)

    # Use backup_storages / dump_storages to build a "Backup storage" selection UI
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/settings/storage/backup](/docspace/api-backend/usage-api/create-webhook) to retrieve a list of backup storages.
You can optionally include the `Dump=true` query parameter to list only storages that support portal dumps.

Each storage entry typically includes:

- `id`: storage identifier
- `title`: storage title (for example, local disk, S3 bucket, network share)
- `properties`: additional configuration details
- `current`: indicates if this storage is currently used for backups
- `isSet`: indicates if this storage can be selected

Use this list to build a “Backup storage selection” screen where the administrator chooses which storage will be used in backup policies (configured by backup-related APIs in a separate scenario).