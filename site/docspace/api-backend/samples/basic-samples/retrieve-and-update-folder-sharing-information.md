import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieve and update folder sharing information

This example demonstrates how to retrieve and update folder sharing (security) settings in ONLYOFFICE DocSpace using the `getFolderSecurityInfo` and `setFolderSecurityInfo` methods.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Get folder sharing info
  async function getFolderSharingInfo(folderId) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/share`;

    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log('Folder sharing info:');
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    console.log(`Request failed: ${res.status}`);
    console.log(await res.text());
    return null;
  }

  // Update folder sharing info
  async function setFolderSharingInfo(folderId, share) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/share`;
    const body = {
      share,                 // list of users or groups with access
      notify: true,          // send notification emails
      sharingMessage: 'You have access to this folder.',
    };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log('Folder sharing updated:');
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    console.log(`Request failed: ${res.status}`);
    console.log(await res.text());
    return null;
  }

  // Example usage
  (async () => {
    const folderId = 12345; // Replace with your folder ID

    // 1. Get current sharing settings
    await getFolderSharingInfo(folderId);

    // 2. Grant Editing access to a user by email
    const share = [
      {
        email: 'john.smith@example.com',
        access: 'Editing', // Editing | Review | Comment | Read | None
      },
    ];
    await setFolderSharingInfo(folderId, share);

    // 3. Check updated sharing settings
    await getFolderSharingInfo(folderId);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests

  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json",
  }

  # Get folder sharing info
  def get_folder_sharing_info(folder_id):
    url = f"{BASE_URL}/api/2.0/files/folder/{folder_id}/share"
    response = requests.get(url, headers=HEADERS)

    if response.ok:
      raw = response.json()
      data = raw.get("response", raw)
      print("Folder sharing info:")
      print(json.dumps(data, indent=2))
      return data

    print(f"Request failed: {response.status_code}")
    print(response.text)
    return None


  # Update folder sharing info
  def set_folder_sharing_info(folder_id, share):
    url = f"{BASE_URL}/api/2.0/files/folder/{folder_id}/share"
    payload = {
      "share": share,                 # list of users or groups with access
      "notify": True,                 # send notification emails
      "sharingMessage": "You have access to this folder.",
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    if response.ok:
      raw = response.json()
      data = raw.get("response", raw)
      print("Folder sharing updated:")
      print(json.dumps(data, indent=2))
      return data

    print(f"Request failed: {response.status_code}")
    print(response.text)
    return None


  if __name__ == "__main__":
    folder_id = 12345  # Replace with your folder ID

    # 1. Get current sharing settings
    get_folder_sharing_info(folder_id)

    # 2. Grant Editing access to a user by email
    share = [
      {
        "email": "john.smith@example.com",
              "access": "Editing",  # Editing | Review | Comment | Read | None
      }
    ]
    set_folder_sharing_info(folder_id, share)

    # 3. Check updated sharing settings
    get_folder_sharing_info(folder_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get folder sharing info

A GET request is sent to [/api/2.0/files/folder/:id/share](/docspace/api-backend/usage-api/get-folder-security-info).

This request retrieves the current folder sharing settings, including:

- Which users and groups have access.
- Existing shared links and their configuration.
- Whether the current user can edit or revoke sharing settings (`canEditAccess`, `canRevoke`, etc.).

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getFolderSharingInfo(folderId) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/share`;

    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log('Folder sharing info:');
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    console.log(`Request failed: ${res.status}`);
    console.log(await res.text());
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_folder_sharing_info(folder_id):
    url = f"{BASE_URL}/api/2.0/files/folder/{folder_id}/share"
    response = requests.get(url, headers=HEADERS)

    if response.ok:
      raw = response.json()
      data = raw.get("response", raw)
      print("Folder sharing info:")
      print(json.dumps(data, indent=2))
      return data

    print(f"Request failed: {response.status_code}")
    print(response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Update folder sharing info

A PUT request is sent to [/api/2.0/files/folder/:folderId/share](/docspace/api-backend/usage-api/set-folder-security-info).

Payload parameters include:

- `share` – A collection of sharing parameters (users and groups with their access levels). Can be null if you want to clear custom sharing entries.
- `notify` – Whether to send notifications to users about the folder being shared.
- `sharingMessage` – An optional message to include in the notification.

Possible access levels typically include:

- Editing
- Review
- Comment
- Read
- None

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function setFolderSharingInfo(folderId, share) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/share`;
    const body = {
      share,                 // list of users or groups with access
      notify: true,          // send notification emails
      sharingMessage: 'You have access to this folder.',
    };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log('Folder sharing updated:');
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    console.log(`Request failed: ${res.status}`);
    console.log(await res.text());
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def set_folder_sharing_info(folder_id, share):
    url = f"{BASE_URL}/api/2.0/files/folder/{folder_id}/share"
    payload = {
      "share": share,                 # list of users or groups with access
      "notify": True,                 # send notification emails
      "sharingMessage": "You have access to this folder.",
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    if response.ok:
      raw = response.json()
      data = raw.get("response", raw)
      print("Folder sharing updated:")
      print(json.dumps(data, indent=2))
      return data

    print(f"Request failed: {response.status_code}")
    print(response.text)
    return None
  ```

  </TabItem>
</Tabs>