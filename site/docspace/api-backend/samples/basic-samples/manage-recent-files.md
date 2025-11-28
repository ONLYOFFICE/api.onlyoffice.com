import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage Recent files

This example demonstrates how to add a file to the “Recent” list and remove specific items from it using ONLYOFFICE DocSpace API.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Step 1: Add a file to the Recent list
  async function addFileToRecent(fileId) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/recent`;

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const fileInfo = json.response || json;
      console.log(`File ${fileId} added to the Recent list.`);
      return fileInfo;
    }

    const text = await res.text();
    console.log(`Failed to add file ${fileId} to Recent: ${res.status}`);
    console.log(text);
    return null;
  }

  // Step 2: Delete specific items from the Recent list
  async function deleteRecent(fileIds = null, folderIds = null) {
    const url = `${BASE_URL}/api/2.0/files/recent`;
    const payload = {
      fileIds: fileIds || [],
      folderIds: folderIds || [],
    };

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 204) {
      console.log('Selected items were removed from the Recent list.');
      return true;
    }

    const text = await res.text();
    console.log(`Failed to clear Recent list: ${res.status}`);
    console.log(text);
    return false;
  }

  // Example usage
  (async () => {
    const fileId = 1568550; // Replace with your actual file ID

    await addFileToRecent(fileId);           // Step 1
    await deleteRecent([fileId], null);      // Step 2
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json"
  }

  # Step 1: Add a file to the Recent list
  def add_file_to_recent(file_id: int):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/recent"
    response = requests.post(url, headers=HEADERS)

    if response.status_code == 200:
      file_info = response.json().get("response", {})
      print(f"File {file_id} added to the Recent list.")
      return file_info
    else:
      print(f"Failed to add file {file_id} to Recent: {response.status_code}")
      print(response.text)
      return None

  # Step 2: Delete specific items from the Recent list
  def delete_recent(file_ids=None, folder_ids=None):
    url = f"{BASE_URL}/api/2.0/files/recent"
    payload = {
      "fileIds": file_ids or [],
      "folderIds": folder_ids or []
    }

    response = requests.delete(url, headers=HEADERS, json=payload)

    if response.status_code in (200, 204):
      print("Selected items were removed from the Recent list.")
        return True
    else:
      print(f"Failed to clear Recent list: {response.status_code}")
      print(response.text)
    return False


  def main():
    file_id = 1568550  # Replace with your actual file ID

    add_file_to_recent(file_id)        # Step 1
    delete_recent(file_ids=[file_id])  # Step 2


  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Add a file to the Recent list
A POST request is sent to [/api/2.0/files/file/:fileId/recent](/docspace/api-backend/usage-api/add-file-to-recent).

- The request adds the specified file to the user's “Recent” list.
- Requires only the `fileId` parameter.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function addFileToRecent(fileId) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/recent`;

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const fileInfo = json.response || json;
      console.log(`File ${fileId} added to the Recent list.`);
      return fileInfo;
    }

    const text = await res.text();
    console.log(`Failed to add file ${fileId} to Recent: ${res.status}`);
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def add_file_to_recent(file_id: int):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/recent"
    response = requests.post(url, headers=HEADERS)

    if response.status_code == 200:
      file_info = response.json().get("response", {})
      print(f"File {file_id} added to the Recent list.")
      return file_info
    else:
      print(f"Failed to add file {file_id} to Recent: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Delete items from the Recent list

A DELETE request is sent to [/api/2.0/files/recent](/docspace/api-backend/usage-api/delete-recent).

Payload parameters include:

- `fileIds`: List of file IDs to remove.
- `folderIds`: List of folder IDs to remove.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function deleteRecent(fileIds = null, folderIds = null) {
    const url = `${BASE_URL}/api/2.0/files/recent`;
    const payload = {
      fileIds: fileIds || [],
      folderIds: folderIds || [],
    };

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 204) {
      console.log('Selected items were removed from the Recent list.');
      return true;
    }

    const text = await res.text();
    console.log(`Failed to clear Recent list: ${res.status}`);
    console.log(text);
    return false;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_recent(file_ids=None, folder_ids=None):
    url = f"{BASE_URL}/api/2.0/files/recent"
    payload = {
      "fileIds": file_ids or [],
      "folderIds": folder_ids or []
    }

    response = requests.delete(url, headers=HEADERS, json=payload)

    if response.status_code in (200, 204):
      print("Selected items were removed from the Recent list.")
        return True
    else:
      print(f"Failed to clear Recent list: {response.status_code}")
      print(response.text)
    return False
  ```

  </TabItem>
</Tabs>