import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieve and update file sharing information

This example demonstrates how to retrieve and update file sharing (security) settings in ONLYOFFICE DocSpace.

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

  // Step 1: Get file sharing info
  async function getFileSharingInfo(fileId) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/share`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const data = json.response || json;
      console.log('File sharing info retrieved successfully:');
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Step 2: Set file sharing info
  async function setFileSharingInfo(fileId, inherited, items) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/share`;
    const payload = {
      inherited,
      items,
    };

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const json = await res.json();
      const data = json.response || json;
      console.log('File sharing info updated successfully:');
      console.log(JSON.stringify(data, null, 2));
      return data;
    }
    else {
      const text = await res.text();
      console.log(`Request failed: ${res.status}`);
      console.log(text);
    }

    return null;
  }

  // Example usage
  (async () => {
    const fileId = 2384103; // Replace with your file ID

    // Step 1: Retrieve current sharing configuration
    await getFileSharingInfo(fileId);

    // Step 2: Update sharing configuration
    // Example: Disable inheritance and grant "Editing" access to a specific user
    const updatePayload = [
      { id: 'john.smith@example.com', access: 'Editing' },
    ];
    await setFileSharingInfo(fileId, false, updatePayload);

    // Step 3: Verify changes
    await getFileSharingInfo(fileId);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
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

  # Step 1: Get file sharing info
  def get_file_sharing_info(file_id: int):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/share"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json().get("response", response.json())
      print("File sharing info retrieved successfully:")
      print(json.dumps(data, indent=2))
      return data
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None


  # Step 2: Set file sharing info
  def set_file_sharing_info(file_id: int, inherited: bool, items: list[dict]):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/share"
    payload = {
      "inherited": inherited,
      "items": items
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      data = response.json().get("response", response.json())
      print("File sharing info updated successfully:")
      print(json.dumps(data, indent=2))
      return data
    else:
        print(f"Request failed: {response.status_code}")
        print(response.text)
    return None


  # Example usage
  if __name__ == "__main__":
    file_id = 2384103  # Replace with your file ID

    # Step 1: Retrieve current sharing configuration
    get_file_sharing_info(file_id)

    # Step 2: Update sharing configuration
    # Example: Disable inheritance and grant "Editing" access to a specific user
    update_payload = [
      {"id": "john.smith@example.com", "access": "Editing"}
    ]
    set_file_sharing_info(file_id, inherited=False, items=update_payload)

    # Step 3: Verify changes
    get_file_sharing_info(file_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get file sharing info

A GET request is sent to [/api/2.0/files/file/:id/share](/docspace/api-backend/usage-api/get-file-security-info).

This request retrieves the current file sharing settings, including whether permissions are inherited and which access levels are assigned to users or groups.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getFileSharingInfo(fileId) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/share`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const data = json.response || json;
      console.log('File sharing info retrieved successfully:');
      console.log(JSON.stringify(data, null, 2));
      return data;
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
  def get_file_sharing_info(file_id: int):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/share"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json().get("response", response.json())
      print("File sharing info retrieved successfully:")
      print(json.dumps(data, indent=2))
      return data
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Update file sharing info

A PUT request is sent to [/api/2.0/files/file/:fileId/share](/docspace/api-backend/usage-api/set-file-security-info).

Payload parameters include:

- `inherited`: Whether to inherit access rights from the parent folder or room.
- `items`: A list of users or groups with their assigned access levels.

Possible access levels:

- Editing
- Review
- Comment
- Read
- None

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  def set_file_sharing_info(file_id: int, inherited: bool, items: list[dict]):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/share"
    payload = {
      "inherited": inherited,
      "items": items
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      data = response.json().get("response", response.json())
      print("File sharing info updated successfully:")
      print(json.dumps(data, indent=2))
      return data
    else:
        print(f"Request failed: {response.status_code}")
        print(response.text)
    return None
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def set_file_sharing_info(file_id: int, inherited: bool, items: list[dict]):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/share"
    payload = {
      "inherited": inherited,
      "items": items
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      data = response.json().get("response", response.json())
      print("File sharing info updated successfully:")
      print(json.dumps(data, indent=2))
      return data
    else:
        print(f"Request failed: {response.status_code}")
        print(response.text)
    return None
  ```

  </TabItem>
</Tabs>