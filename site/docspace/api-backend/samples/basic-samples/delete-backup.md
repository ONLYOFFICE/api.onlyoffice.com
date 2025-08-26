import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Delete a backup

This example demonstrates how to delete a specific backup in ONLYOFFICE DocSpace using the API by providing its unique backup ID.

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

  function deleteBackup(backupId) {
    const url = `${API_HOST}/api/2.0/backup/deletebackup/${backupId}`;

    return fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          throw new Error(`Failed to delete backup: ${res.status} - ${t}`);
        });
      })
      .then((data) => {
        const result = data?.response;
        console.log(`Backup deleted: ${result}`);
        return result;
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  // Run example
  deleteBackup('your-backup-id');
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

  def delete_backup(backup_id: str):
    # Send DELETE request to remove the specified backup
    response = requests.delete(
      f'{API_HOST}/api/2.0/backup/deletebackup/{backup_id}',
      headers=HEADERS
    )

    if response.status_code == 200:
      result = response.json().get('response')
      print(f"Backup deleted: {result}")
      return result
    else:
      raise Exception(f"Failed to delete backup: {response.status_code} - {response.text}")

  if __name__ == '__main__':
    # Example: Replace with actual backup ID from backup history
    delete_backup('your-backup-id')
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A DELETE request is sent to [/api/2.0/backup/deletebackup/{id}](/docspace/api-backend/usage-api/delete-backup) where:

- `id` — UUID of the backup to delete (retrievable from /api/2.0/backup/getbackuphistory).

If successful (200), the API returns:

- `response` — boolean (true if the deletion was successful).
- `count`, `links`, `status`, `statusCode` — metadata fields.

After deletion, the specified backup file is removed from the configured storage and will no longer be available for restoration.