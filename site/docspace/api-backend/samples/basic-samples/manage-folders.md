import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage folders

This example demonstrates how to manage folders in ONLYOFFICE DocSpace using the API. It covers creating, retrieving, renaming, and deleting folders through API requests.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/manage-folders.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/manage-folders.py)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Create a folder
  function createFolder(parentFolderId, folderName) {
    const url = `${BASE_URL}/api/2.0/files/folder/${parentFolderId}`;
    const data = { title: folderName };
    return fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(data) })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Folder creation failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`Folder creation error: ${err.message}`);
        return null;
      });
  }

  // Step 2: Retrieve folder details
  function getFolderDetails(folderId) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}`;
    return fetch(url, { method: 'GET', headers: HEADERS })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Folder details retrieval failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`Folder details retrieval error: ${err.message}`);
        return null;
      });
  }

  // Step 3: Rename a folder
  function renameFolder(folderId, newName) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/rename`;
    const data = { title: newName };
    return fetch(url, { method: 'PUT', headers: HEADERS, body: JSON.stringify(data) })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Folder rename failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`Folder rename error: ${err.message}`);
        return null;
      });
  }

  // Step 4: Delete a folder
  function deleteFolder(folderId) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}`;
    return fetch(url, { method: 'DELETE', headers: HEADERS })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Folder deletion failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`Folder deletion error: ${err.message}`);
        return null;
      });
  }

  async function main() {
    const parent_folder_id = 1234;
    const folder_id = 1234;
    const folder_name = 'New Folder';
    const new_folder_name = 'Updated Folder Name';

    const created = await createFolder(parent_folder_id, folder_name);
    if (!created) return;

    const details = await getFolderDetails(folder_id);
    if (!details) return;

    const renamed = await renameFolder(folder_id, new_folder_name);
    if (!renamed) return;

    await deleteFolder(folder_id);
  }

  main();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  BASE_URL = 'https://yourportal.onlyoffice.com'
  API_KEY = 'YOUR_API_KEY'

  # Headers with API key for authentication
  HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
  }

  # Step 1: Create a folder
  def create_folder(parent_folder_id, folder_name):
    url = f'{BASE_URL}/api/2.0/files/folder/{parent_folder_id}'
    data = {
      'title': folder_name
    }

    response = requests.post(url, headers=HEADERS, json=data)
    if response.status_code == 200:
      print("Folder created successfully.")
    else:
      print(f"Folder creation failed. Status code: {response.status_code}, Message: {response.text}")


  # Step 2: Retrieve folder details
  def get_folder_details(folder_id):
    url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      print(f"Folder details: {response.json()}")
    else:
      print(f"Folder details retrieval failed. Status code: {response.status_code}, Message: {response.text}")


  # Step 3: Rename a folder
  def rename_folder(folder_id, new_name):
    url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}/rename'
    data = {
      'title': new_name
    }

    response = requests.put(url, headers=HEADERS, json=data)
    if response.status_code == 200:
      print("Folder rename succeeded.")
    else:
      print(f"Folder rename failed. Status code: {response.status_code}, Message: {response.text}")


  # Step 4: Delete a folder
  def delete_folder(folder_id):
    url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
      print("Folder deletion succeeded.")
    else:
      print(f"Folder deletion failed. Status code: {response.status_code}, Message: {response.text}")


  def main():
    parent_folder_id = 1234 # Replace with actual parent folder or room ID
    folder_id = 1234 # Replace with actual folder ID
    folder_name = "New Folder" # Replace with actual folder name
    new_folder_name = "Updated Folder Name" # Replace with actual new folder name

    #Step 1
    create_folder(parent_folder_id, folder_name)

    #Step 2
    get_folder_details(folder_id)

    #Step 3
    rename_folder(folder_id, new_folder_name)

    #Step 4
    delete_folder(folder_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create a folder

A POST request is sent to [/api/2.0/files/folder/:folderId](/docspace/api-backend/usage-api/create-folder.api.mdx) to create a new folder.

You must pass:

- `title`: Desired name of the folder.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function createFolder(parentFolderId, folderName) {
    const url = `${BASE_URL}/api/2.0/files/folder/${parentFolderId}`;
    const data = { title: folderName };
    return fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(data) })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Folder creation failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`Folder creation error: ${err.message}`);
        return null;
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_folder(parent_folder_id, folder_name):
    url = f'{BASE_URL}/api/2.0/files/folder/{parent_folder_id}'
    data = {
      'title': folder_name
    }

    response = requests.post(url, headers=HEADERS, json=data)
    if response.status_code == 200:
      print("Folder created successfully.")
    else:
      print(f"Folder creation failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>

## Step 2: Retrieve folder details

A GET request is sent to [/api/2.0/files/folder/:folderId](/docspace/api-backend/usage-api/get-folder-info.api.mdx) to get folder information.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function getFolderDetails(folderId) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}`;
    return fetch(url, { method: 'GET', headers: HEADERS })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Folder details retrieval failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`Folder details retrieval error: ${err.message}`);
        return null;
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_folder_details(folder_id):
    url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      print(f"Folder details: {response.json()}")
    else:
      print(f"Folder details retrieval failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>

## Step 3: Rename a folder

A PUT request is sent to [/api/2.0/files/folder/:folderId](/docspace/api-backend/usage-api/rename-folder.api.mdx) to rename a folder.

You must pass:

- `title`: New folder name.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function renameFolder(folderId, newName) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/rename`;
    const data = { title: newName };
    return fetch(url, { method: 'PUT', headers: HEADERS, body: JSON.stringify(data) })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Folder rename failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`Folder rename error: ${err.message}`);
        return null;
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def rename_folder(folder_id, new_name):
    url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}/rename'
    data = {
      'title': new_name
    }
    response = requests.put(url, headers=HEADERS, json=data)
    if response.status_code == 200:
      print("Folder rename succeeded.")
    else:
      print(f"Folder rename failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>

## Step 4: Delete a folder

A DELETE request is sent to [/api/2.0/files/folder/:folderId](/docspace/api-backend/usage-api/delete-folder.api.mdx) to remove a folder.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function deleteFolder(folderId) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}`;
    return fetch(url, { method: 'DELETE', headers: HEADERS })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Folder deletion failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`Folder deletion error: ${err.message}`);
        return null;
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_folder(folder_id):
    url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
      print("Folder deletion succeeded.")
    else:
      print(f"Folder deletion failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>
