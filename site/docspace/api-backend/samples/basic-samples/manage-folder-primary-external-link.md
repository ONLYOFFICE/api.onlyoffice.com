import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage folder primary external link

This example demonstrates how to create, get, and update a folder’s primary external link in ONLYOFFICE DocSpace using the API.

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

  // Step 1: Create primary external link for a folder
  async function createFolderPrimaryExternalLink(folderId) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/link`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Primary external link created.');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    if (res.status === 404) {
      console.log('Folder not found (404).');
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Step 2: Get primary external link info for a folder
  async function getFolderPrimaryExternalLink(folderId) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/link`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Primary external link info:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    if (res.status === 404) {
      console.log('Folder not found (404).');
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Step 3: Update primary external link settings for a folder
  async function setFolderPrimaryExternalLink(folderId, payload) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/link`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Primary external link has been updated.');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    if (res.status === 404) {
      console.log('Folder not found (404).');
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    const folderId = 20202; // Replace with your actual folder ID

    // Step 1: Create primary external link
    await createFolderPrimaryExternalLink(folderId);

    // Step 2: Read current primary external link info
    await getFolderPrimaryExternalLink(folderId);

    // Step 3: Update primary external link settings
    const linkPayload = {
      // Possible fields depend on your portal configuration.
      // For example:
      // isActive: true,
      // password: null,
      // expiration: null,
    };

    await setFolderPrimaryExternalLink(folderId, linkPayload);
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
  
  # Step 1: Create primary external link for a folder
  def create_folder_primary_external_link(folder_id: int):
    url = f"{BASE_URL}/api/2.0/files/folder/{folder_id}/link"
    response = requests.post(url, headers=HEADERS)
  
    if response.status_code == 200:
      # API returns folder security information (includes link data)
      data = response.json()
      info = data.get("response", data)
      print("Primary external link created.")
      print(json.dumps(info, indent=2))
      return info
    elif response.status_code == 404:
      print("Folder not found (404).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  
  # Step 2: Get primary external link info for a folder
  def get_folder_primary_external_link(folder_id: int):
    url = f"{BASE_URL}/api/2.0/files/folder/{folder_id}/link"
    response = requests.get(url, headers=HEADERS)
  
    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Primary external link info:")
      print(json.dumps(info, indent=2))
      return info
    elif response.status_code == 404:
      print("Folder not found (404).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  
  # Step 3: Update primary external link settings for a folder
  def set_folder_primary_external_link(folder_id: int, payload: dict):
    url = f"{BASE_URL}/api/2.0/files/folder/{folder_id}/link"
    response = requests.put(url, headers=HEADERS, json=payload)
  
    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Primary external link has been updated.")
      print(json.dumps(info, indent=2))
      return info
    elif response.status_code == 404:
      print("Folder not found (404).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  
  def main():
    folder_id = 20202  # Replace with your actual folder ID
  
    # Step 1: Create primary external link
    create_folder_primary_external_link(folder_id)
  
    # Step 2: Read current primary external link info
    get_folder_primary_external_link(folder_id)
  
    # Step 3: Update primary external link settings
    # Example structure (adjust keys/values to your policy):
    link_payload = {
      # Possible fields depend on your portal configuration.
      # For example:
      # "isActive": True,
      # "password": None,
      # "expiration": None
    }
    set_folder_primary_external_link(folder_id, link_payload)
  
  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create primary external link

A POST request is sent to [/api/2.0/files/folder/:folderId/link](/docspace/api-backend/usage-api/create-folder-primary-external-link) to generate a primary external link for the specified folder.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function createFolderPrimaryExternalLink(folderId) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/link`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Primary external link created.');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    if (res.status === 404) {
      console.log('Folder not found (404).');
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
  def create_folder_primary_external_link(folder_id: int):
    url = f"{BASE_URL}/api/2.0/files/folder/{folder_id}/link"
    response = requests.post(url, headers=HEADERS)
  
    if response.status_code == 200:
      # API returns folder security information (includes link data)
      data = response.json()
      info = data.get("response", data)
      print("Primary external link created.")
      print(json.dumps(info, indent=2))
      return info
    elif response.status_code == 404:
      print("Folder not found (404).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Get primary external link info

A GET request is sent to [/api/2.0/files/folder/:folderId/link](/docspace/api-backend/usage-api/get-folder-primary-external-link) to retrieve information about the folder’s existing external link.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getFolderPrimaryExternalLink(folderId) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/link`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Primary external link info:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    if (res.status === 404) {
      console.log('Folder not found (404).');
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
  def get_folder_primary_external_link(folder_id: int):
    url = f"{BASE_URL}/api/2.0/files/folder/{folder_id}/link"
    response = requests.get(url, headers=HEADERS)
  
    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Primary external link info:")
      print(json.dumps(info, indent=2))
      return info
    elif response.status_code == 404:
      print("Folder not found (404).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>

## Step 3: Update primary external link settings

A PUT request is sent to [/api/2.0/files/folder/:folderId/link](/docspace/api-backend/usage-api/set-folder-primary-external-link) to update the external link configuration.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function setFolderPrimaryExternalLink(folderId, payload) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/link`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Primary external link has been updated.');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    if (res.status === 404) {
      console.log('Folder not found (404).');
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
  def set_folder_primary_external_link(folder_id: int, payload: dict):
    url = f"{BASE_URL}/api/2.0/files/folder/{folder_id}/link"
    response = requests.put(url, headers=HEADERS, json=payload)
  
    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Primary external link has been updated.")
      print(json.dumps(info, indent=2))
      return info
    elif response.status_code == 404:
      print("Folder not found (404).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>