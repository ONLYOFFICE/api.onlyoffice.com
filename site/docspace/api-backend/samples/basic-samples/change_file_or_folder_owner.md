import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change File or Folder Ownership

This example demonstrates how to transfer ownership of files and/or folders in ONLYOFFICE DocSpace to another user using the API. This is useful for reassigning responsibility when a project changes owners or a team member leaves.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set your DocSpace portal URL, access token, and IDs
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  const HEADERS = {
    Authorization: API_KEY,
    'Content-Type': 'application/json',
  };

  // Step 1: Define file and/or folder IDs to transfer
  const fileIds = [12345]; // Replace with your file IDs
  const folderIds = [67890]; // Replace with folder IDs if needed
  const newOwnerId = 'user_uuid_here'; // New owner's UUID

  const payload = {
    fileIds: fileIds,
    folderIds: folderIds,
    userId: newOwnerId,
  };

  // Step 2: Send the ownership change request
  function changeOwnership(payload) {
    const url = `${BASE_URL}/api/2.0/files/owner`;

    return fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          throw new Error(`Failed to update ownership: ${t}`);
        });
      })
      .then((data) => {
        const result = data?.response ?? [];
        console.log('Ownership successfully updated for the following items:');
        result.forEach((entry) => {
          const title = entry?.title ?? 'Unnamed';
          const shared = entry?.access?.shared ?? false;
          console.log(`- ${title} (Shared: ${shared})`);
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  // Run the method
  changeOwnership(payload);
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set your DocSpace portal URL, access token, and IDs
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  HEADERS = {
    'Authorization': API_KEY,
    'Content-Type': 'application/json'
  }

  # Step 1: Define file and/or folder IDs to transfer
  file_ids = [12345]  # Replace with your file IDs
  folder_ids = [67890]  # Replace with folder IDs if needed
  new_owner_id = 'user_uuid_here'  # New owner's UUID

  payload = {
    "fileIds": file_ids,
    "folderIds": folder_ids,
    "userId": new_owner_id
  }

  # Step 2: Send the ownership change request
  def change_ownership(payload):
    url = f'{API_HOST}/api/2.0/files/owner'
    response = requests.post(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      result = response.json().get('response', [])
      print("Ownership successfully updated for the following items:")
      for entry in result:
        title = entry.get('title', 'Unnamed')
        shared = entry.get('access', {}).get('shared', False)
        print(f"- {title} (Shared: {shared})")
    else:
      raise Exception(f"Failed to update ownership: {response.text}")

  # Run the method
  if __name__ == '__main__':
    change_ownership(payload)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Define items for ownership transfer

Prepare a payload specifying:

- `fileIds`: List of file IDs to transfer ownership.
- `folderIds`: List of folder IDs to transfer ownership (optional).
- `userId`: UUID of the new owner.

``` py
payload = {
    "fileIds": [12345],
    "folderIds": [67890],
    "userId": "user_uuid_here"
}
```

## Step 2: Send a POST request to change ownership

A POST request is sent to [/api/2.0/files/owner](/docspace/api-backend/usage-api/change-file-owner) with the payload.
The API responds with a list of updated items and whether they are still shared.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function changeOwnership(payload) {
    const url = `${BASE_URL}/api/2.0/files/owner`;

    return fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          throw new Error(`Failed to update ownership: ${t}`);
        });
      })
      .then((data) => {
        const result = data?.response ?? [];
        console.log('Ownership successfully updated for the following items:');
        result.forEach((entry) => {
          const title = entry?.title ?? 'Unnamed';
          const shared = entry?.access?.shared ?? false;
          console.log(`- ${title} (Shared: ${shared})`);
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def change_ownership(payload):
    url = f'{API_HOST}/api/2.0/files/owner'
    response = requests.post(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      result = response.json().get('response', [])
      print("Ownership successfully updated for the following items:")
      for entry in result:
        title = entry.get('title', 'Unnamed')
        shared = entry.get('access', {}).get('shared', False)
        print(f"- {title} (Shared: {shared})")
    else:
      raise Exception(f"Failed to update ownership: {response.text}")
  ```

  </TabItem>
</Tabs>

