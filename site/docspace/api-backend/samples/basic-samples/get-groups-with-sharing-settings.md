import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get groups with sharing settings

This example demonstrates how to retrieve groups that have access permissions to rooms, folders, or files in ONLYOFFICE DocSpace.

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
  };

  // Step 1: Get groups with room sharing settings
  async function getGroupsWithRoomSharing(roomId) {
    const url = `${BASE_URL}/api/2.0/group/room/${roomId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const groups = json.response || json;
      console.log(`Groups with sharing settings for room ${roomId}:`);
      console.log(groups);
      return groups;
    }

    if (res.status === 401 || res.status === 403) {
      console.log(`Access error (${res.status}) while reading room sharing settings.`);
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Step 2: Get groups with folder sharing settings
  async function getGroupsWithFolderSharing(folderId) {
    const url = `${BASE_URL}/api/2.0/group/folder/${folderId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const groups = json.response || json;
      console.log(`Groups with sharing settings for folder ${folderId}:`);
      console.log(groups);
      return groups;
    }

    if (res.status === 401 || res.status === 403) {
      console.log(`Access error (${res.status}) while reading folder sharing settings.`);
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Step 3: Get groups with file sharing settings
  async function getGroupsWithFileSharing(fileId) {
    const url = `${BASE_URL}/api/2.0/group/file/${fileId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const groups = json.response || json;
      console.log(`Groups with sharing settings for file ${fileId}:`);
      console.log(groups);
      return groups;
    }

    if (res.status === 401 || res.status === 403) {
      console.log(`Access error (${res.status}) while reading file sharing settings.`);
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    const roomId = 10101;   // Replace with your actual room ID
    const folderId = 20202; // Replace with your actual folder ID
    const fileId = 30303;   // Replace with your actual file ID

    await getGroupsWithRoomSharing(roomId);
    await getGroupsWithFolderSharing(folderId);
    await getGroupsWithFileSharing(fileId);
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
      "Accept": "application/json"
  }

  # Step 1: Get groups with room sharing settings
  def get_groups_with_room_sharing(room_id: int):
    url = f"{BASE_URL}/api/2.0/group/room/{room_id}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      groups = data.get("response", data)
      print(f"Groups with sharing settings for room {room_id}:")
      print(groups)
      return groups
    elif response.status_code in (401, 403):
      print(f"Access error ({response.status_code}) while reading room sharing settings.")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None


  # Step 2: Get groups with folder sharing settings
  def get_groups_with_folder_sharing(folder_id: int):
    url = f"{BASE_URL}/api/2.0/group/folder/{folder_id}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      groups = data.get("response", data)
      print(f"Groups with sharing settings for folder {folder_id}:")
      print(groups)
      return groups
    elif response.status_code in (401, 403):
      print(f"Access error ({response.status_code}) while reading folder sharing settings.")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None


  # Step 3: Get groups with file sharing settings
  def get_groups_with_file_sharing(file_id: int):
    url = f"{BASE_URL}/api/2.0/group/file/{file_id}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      groups = data.get("response", data)
      print(f"Groups with sharing settings for file {file_id}:")
      print(groups)
      return groups
    elif response.status_code in (401, 403):
      print(f"Access error ({response.status_code}) while reading file sharing settings.")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None


  def main():
    room_id = 10101    # Replace with your actual room ID
    folder_id = 20202  # Replace with your actual folder ID
    file_id = 30303    # Replace with your actual file ID

    # Step 1
    get_groups_with_room_sharing(room_id)

    # Step 2
    get_groups_with_folder_sharing(folder_id)

    # Step 3
    get_groups_with_file_sharing(file_id)


  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get groups with room sharing settings
A GET request is sent to [/api/2.0/group/room/:roomId](/docspace/api-backend/usage-api/add-file-to-recent).
The API returns a list of groups that have access to the specified room.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getGroupsWithRoomSharing(roomId) {
    const url = `${BASE_URL}/api/2.0/group/room/${roomId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const groups = json.response || json;
      console.log(`Groups with sharing settings for room ${roomId}:`);
      console.log(groups);
      return groups;
    }

    if (res.status === 401 || res.status === 403) {
      console.log(`Access error (${res.status}) while reading room sharing settings.`);
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_groups_with_room_sharing(room_id: int):
    url = f"{BASE_URL}/api/2.0/group/room/{room_id}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      groups = data.get("response", data)
      print(f"Groups with sharing settings for room {room_id}:")
      print(groups)
      return groups
    elif response.status_code in (401, 403):
      print(f"Access error ({response.status_code}) while reading room sharing settings.")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Get groups with folder sharing settings

A GET request is sent to [/api/2.0/group/folder/:folderId](/docspace/api-backend/usage-api/delete-recent).
The API returns a list of groups that have access to the specified folder.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getGroupsWithFolderSharing(folderId) {
    const url = `${BASE_URL}/api/2.0/group/folder/${folderId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const groups = json.response || json;
      console.log(`Groups with sharing settings for folder ${folderId}:`);
      console.log(groups);
      return groups;
    }

    if (res.status === 401 || res.status === 403) {
      console.log(`Access error (${res.status}) while reading folder sharing settings.`);
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_groups_with_folder_sharing(folder_id: int):
    url = f"{BASE_URL}/api/2.0/group/folder/{folder_id}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      groups = data.get("response", data)
      print(f"Groups with sharing settings for folder {folder_id}:")
      print(groups)
      return groups
    elif response.status_code in (401, 403):
      print(f"Access error ({response.status_code}) while reading folder sharing settings.")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Get groups with file sharing settings

A GET request is sent to [/api/2.0/group/file/:fileId](/docspace/api-backend/usage-api/delete-recent).
The API returns a list of groups that have access to the specified file.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getGroupsWithFileSharing(fileId) {
    const url = `${BASE_URL}/api/2.0/group/file/${fileId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const groups = json.response || json;
      console.log(`Groups with sharing settings for file ${fileId}:`);
      console.log(groups);
      return groups;
    }

    if (res.status === 401 || res.status === 403) {
      console.log(`Access error (${res.status}) while reading file sharing settings.`);
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_groups_with_file_sharing(file_id: int):
    url = f"{BASE_URL}/api/2.0/group/file/{file_id}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      groups = data.get("response", data)
      print(f"Groups with sharing settings for file {file_id}:")
      print(groups)
      return groups
    elif response.status_code in (401, 403):
      print(f"Access error ({response.status_code}) while reading file sharing settings.")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>
