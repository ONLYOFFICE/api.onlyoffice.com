import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage the Trash section

This example demonstrates how to retrieve, restore, and empty the contents of the Trash section in ONLYOFFICE DocSpace using the API.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/manage-trash-sections.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/manage-trash-sections.py)

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

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Get contents of the Trash section
  async function getTrashSection() {
    const url = `${API_HOST}/api/2.0/files/@trash`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get Trash: ${res.status} - ${t}`);
      return null;
    }
    return res.json();
  }

  // Step 2: Empty the Trash section
  async function emptyTrash() {
    const url = `${API_HOST}/api/2.0/files/fileops/emptytrash`;
    const res = await fetch(url, { method: 'PUT', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to empty Trash: ${res.status} - ${t}`);
      return false;
    }

    console.log('Trash emptied successfully.');
    return true;
  }

  // Step 3: Restore a file from Trash to a specific folder
  async function restoreFile(fileId, destFolderId) {
    const url = `${API_HOST}/api/2.0/files/fileops/move`;
    const body = JSON.stringify({
      fileIds: [fileId],
      destFolderId: destFolderId,
      deleteAfter: true,
      content: true,
    });

    const res = await fetch(url, { method: 'PUT', headers: HEADERS, body });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to restore file ${fileId}: ${res.status} - ${t}`);
      return false;
    }

    console.log(`File ${fileId} restored to folder ${destFolderId}.`);
    return true;
  }

  // Run
  (async () => {
    await getTrashSection();

    const file_id = '123456';   // Replace with a real file ID from Trash
    const folder_id = '654321'; // Replace with destination folder ID
    await restoreFile(file_id, folder_id);

    await emptyTrash();
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  import json

  # Set API base URL
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  # Headers with API key for authentication
  HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
  }

  # Step 1: Get contents of the Trash section
  def get_trash_section():
    url = f'{API_HOST}/api/2.0/files/@trash'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()
    else:
      print(f'Failed to get Trash: {response.status_code} - {response.text}')
      return None

# Step 2: Empty the Trash section
  def empty_trash():
    url = f'{API_HOST}/api/2.0/files/fileops/emptytrash'
    response = requests.put(url, headers=HEADERS)

    if response.status_code == 200:
      return True
    else:
      print(f'Failed to empty Trash: {response.status_code} - {response.text}')
      return False

# Step 3: Restore a file from Trash to a specific folder
  def restore_file(file_id, dest_folder_id):
    url = f'{API_HOST}/api/2.0/files/fileops/move'
    data = {
      'fileIds': [file_id],
      'destFolderId': dest_folder_id,
      'deleteAfter': True,
      'content': True
    }

    response = requests.put(url, headers=HEADERS, data=json.dumps(data))

    if response.status_code == 200:
      print(f'File {file_id} restored to folder {dest_folder_id}.')
      return True
    else:
      print(f'Failed to restore file {file_id}: {response.status_code} - {response.text}')
      return False

  if __name__ == "__main__":
    get_trash_section()

    file_id = '123456'       # Replace with a real file ID from Trash
    folder_id = '654321'     # Replace with destination folder ID
    restore_file(file_id, folder_id)

    empty_trash()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve Trash contents

A GET request is sent to [/api/2.0/files/@trash](/docspace/api-backend/usage-api/get-trash-folder) to get files and folders marked for deletion.

This operation is useful for checking which items are pending permanent removal.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getTrashSection() {
    const url = `${API_HOST}/api/2.0/files/@trash`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get Trash: ${res.status} - ${t}`);
      return null;
    }
    return res.json();
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_trash_section():
    url = f'{API_HOST}/api/2.0/files/@trash'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()
    else:
      print(f'Failed to get Trash: {response.status_code} - {response.text}')
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Empty the Trash

A PUT request is sent to [/api/2.0/files/fileops/emptytrash](/docspace/api-backend/usage-api/empty-trash).

This operation permanently deletes all files and folders from the Trash.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function emptyTrash() {
    const url = `${API_HOST}/api/2.0/files/fileops/emptytrash`;
    const res = await fetch(url, { method: 'PUT', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to empty Trash: ${res.status} - ${t}`);
      return false;
    }

    console.log('Trash emptied successfully.');
    return true;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def empty_trash():
    url = f'{API_HOST}/api/2.0/files/fileops/emptytrash'
    response = requests.put(url, headers=HEADERS)

    if response.status_code == 200:
      return True
    else:
      print(f'Failed to empty Trash: {response.status_code} - {response.text}')
      return False
  ```

  </TabItem>
</Tabs>

## Step 3: Restore files from Trash

A PUT request is sent to [/api/2.0/files/fileops/move](/docspace/api-backend/usage-api/move-batch-items) with:

- `fileIds`: A list of file IDs to restore.
- `destFolderId`: Target folder to move the file into.
- `deleteAfter`: True — remove the item from Trash.
- `content`: True — preserve file contents.

This operation is useful for selectively restoring documents from Trash back to a specific folder.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function restoreFile(fileId, destFolderId) {
    const url = `${API_HOST}/api/2.0/files/fileops/move`;
    const body = JSON.stringify({
      fileIds: [fileId],
      destFolderId: destFolderId,
      deleteAfter: true,
      content: true,
    });

    const res = await fetch(url, { method: 'PUT', headers: HEADERS, body });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to restore file ${fileId}: ${res.status} - ${t}`);
      return false;
    }

    console.log(`File ${fileId} restored to folder ${destFolderId}.`);
    return true;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def restore_file(file_id, dest_folder_id):
    url = f'{API_HOST}/api/2.0/files/fileops/move'
    data = {
      'fileIds': [file_id],
      'destFolderId': dest_folder_id,
      'deleteAfter': True,
      'content': True
    }

    response = requests.put(url, headers=HEADERS, data=json.dumps(data))

    if response.status_code == 200:
      print(f'File {file_id} restored to folder {dest_folder_id}.')
      return True
    else:
      print(f'Failed to restore file {file_id}: {response.status_code} - {response.text}')
      return False
  ```

  </TabItem>
</Tabs>
