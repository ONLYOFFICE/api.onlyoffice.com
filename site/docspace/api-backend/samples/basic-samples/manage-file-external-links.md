import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage file external links

This example demonstrates how to get all external links of a file and update the file’s external link settings in ONLYOFFICE DocSpace using the API.

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

  // Step 1: Get all external links for a file
  async function getFileLinks(fileId) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/links`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const links = data.response || data;
      console.log('External links for file:');
      console.log(JSON.stringify(links, null, 2));
      return links;
    }

    if (res.status === 404) {
      console.log('File not found (404).');
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Step 2: Update external link settings for a file
  async function setFileExternalLink(fileId, payload) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/links`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 204) {
      if (res.status === 200) {
        const data = await res.json();
        const info = data.response || data;
        console.log('File external link updated successfully.');
        console.log(JSON.stringify(info, null, 2));
        return info;
      }
      console.log('File external link updated successfully (204 No Content).');
      return true;
    }

    if (res.status === 404) {
      console.log('File not found (404).');
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    const fileId = 30303; // Replace with your actual file ID

    // Step 1: Retrieve existing external links
    await getFileLinks(fileId);

    // Step 2: Update external link configuration
    const linkPayload = {
      // Examples (adjust to your portal policy):
      // denyDownload: true,
      // password: null,
      // expiration: null,
      // access: 'view',
    };

    await setFileExternalLink(fileId, linkPayload);
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

  # Step 1: Get all external links for a file
  def get_file_links(file_id: int):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/links"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      links = data.get("response", data)
      print("External links for file:")
      print(json.dumps(links, indent=2))
      return links
    elif response.status_code == 404:
      print("File not found (404).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

  # Step 2: Update external link settings for a file
  def set_file_external_link(file_id: int, payload: dict):
    # Use /links (plural) for updates
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/links"
    response = requests.put(url, headers=HEADERS, json=payload)

    if response.status_code in (200, 204):
      if response.status_code == 200:
        data = response.json()
        info = data.get("response", data)
        print("File external link updated successfully.")
        print(json.dumps(info, indent=2))
        return info
      print("File external link updated successfully (204 No Content).")
      return True
    elif response.status_code == 404:
      print("File not found (404).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

  def main():
    file_id = 30303  # Replace with your actual file ID

    # Step 1: Retrieve existing external links
    get_file_links(file_id)

    # Step 2: Update external link configuration
    # Provide at least one field according to your portal's policy
    link_payload = {
      # Examples (adjust to your portal policy):
      # "denyDownload": True,
      # "password": None,
      # "expiration": None,
      # "access": "view"
    }
    set_file_external_link(file_id, link_payload)

  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get all external links for a file

A GET request is sent to [/api/2.0/files/file/:fileId/links](/docspace/api-backend/usage-api/get-file-links) to retrieve all external links associated with the specified file.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getFileLinks(fileId) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/links`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const links = data.response || data;
      console.log('External links for file:');
      console.log(JSON.stringify(links, null, 2));
      return links;
    }

    if (res.status === 404) {
      console.log('File not found (404).');
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
  def get_file_links(file_id: int):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/links"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      links = data.get("response", data)
      print("External links for file:")
      print(json.dumps(links, indent=2))
      return links
    elif response.status_code == 404:
      print("File not found (404).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Update external link settings for a file

A PUT request is sent to [/api/2.0/files/file/:fileId/links](/docspace/api-backend/usage-api/set-file-external-link) to modify the file's external link configuration. The request body should include the fields you are allowed to change (e.g., `denyDownload`, `password`, `expiration`, `access`).

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function setFileExternalLink(fileId, payload) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/links`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 204) {
      if (res.status === 200) {
        const data = await res.json();
        const info = data.response || data;
        console.log('File external link updated successfully.');
        console.log(JSON.stringify(info, null, 2));
        return info;
      }
      console.log('File external link updated successfully (204 No Content).');
      return true;
    }

    if (res.status === 404) {
      console.log('File not found (404).');
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
  def set_file_external_link(file_id: int, payload: dict):
    # Use /links (plural) for updates
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/links"
    response = requests.put(url, headers=HEADERS, json=payload)

    if response.status_code in (200, 204):
      if response.status_code == 200:
        data = response.json()
        info = data.get("response", data)
        print("File external link updated successfully.")
        print(json.dumps(info, indent=2))
        return info
      print("File external link updated successfully (204 No Content).")
      return True
    elif response.status_code == 404:
      print("File not found (404).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>