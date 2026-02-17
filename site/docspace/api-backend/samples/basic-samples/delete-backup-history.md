import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Delete the backup history

This example demonstrates how to delete the entire backup history in ONLYOFFICE DocSpace using the API.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/delete-backup-history.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/delete-backup-history.py)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with authentication
  const HEADERS = {
    Authorization: API_KEY,
  };

  function deleteBackupHistory(dump) {
    // Optional query parameter: dump backups or not
    const params = new URLSearchParams({ Dump: String(dump).toLowerCase() });
    const url = `${API_HOST}/api/2.0/backup/deletebackuphistory?${params.toString()}`;

    // Send DELETE request to remove backup history
    return fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Backup history deletion failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .then((data) => {
        if (!data) return null;
        const result = data?.response;
        console.log(`Backup history deleted: ${result}`);
        return result;
      })
      .catch((err) => {
        console.log(`Backup history deletion error: ${err.message}`);
      });
  }

  // Example: Delete history without dump backups
  deleteBackupHistory(false);
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

  def delete_backup_history(dump=False):
    # Optional query parameter: dump backups or not
    params = {"Dump": str(dump).lower()}

    # Send DELETE request to remove backup history
    response = requests.delete(
      f'{API_HOST}/api/2.0/backup/deletebackuphistory',
      headers=HEADERS,
      params=params
    )

    if response.status_code == 200:
      result = response.json().get('response')
      print(f"Backup history deleted: {result}")
      return result
    else:
      raise Exception(f"Failed to delete backup history: {response.status_code} - {response.text}")

  if __name__ == '__main__':
    # Example: Delete history without dump backups
    delete_backup_history(dump=False)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A DELETE request is sent to [/api/2.0/backup/deletebackuphistory](/docspace/api-backend/usage-api/delete-backup-history) with an optional query parameter:

`Dump` — boolean; set to true if the history should also include dump backups in the deletion, or false otherwise.

If successful (200), the API returns:

- `response` — boolean (true if the deletion was successful).
- `count`, `links`, `status`, `statusCode` — metadata fields.

After this operation, the backup history will be cleared, and the records will no longer be available in /api/2.0/backup/getbackuphistory.