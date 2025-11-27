import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage primary external link for a file

This example demonstrates how to create and retrieve a primary external link for a file in ONLYOFFICE DocSpace using the API.

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

  // Step 1: Create primary external link for a file
  async function createFilePrimaryExternalLink(fileId) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/link`;
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

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Step 2: Get primary external link info for a file
  async function getFilePrimaryExternalLink(fileId) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/link`;
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

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    const fileId = 30303; // Replace with your actual file ID

    // Step 1: Create primary external link
    await createFilePrimaryExternalLink(fileId);

    // Step 2: Retrieve primary external link info
    await getFilePrimaryExternalLink(fileId);
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

  # Step 1: Create primary external link for a file
  def create_file_primary_external_link(file_id: int):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/link"
    response = requests.post(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Primary external link created.")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None


  # Step 2: Get primary external link info for a file
  def get_file_primary_external_link(file_id: int):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/link"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Primary external link info:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

  def main():
    file_id = 30303  # Replace with your actual file ID

    # Step 1: Create primary external link
    create_file_primary_external_link(file_id)

    # Step 2: Retrieve primary external link info
    get_file_primary_external_link(file_id)


  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create primary external link
A POST request is sent to [/api/2.0/files/file/:fileId/link](/docspace/api-backend/usage-api/create-file-primary-external-link) to generate a primary external link for the specified file.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function createFilePrimaryExternalLink(fileId) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/link`;
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

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_file_primary_external_link(file_id: int):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/link"
    response = requests.post(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Primary external link created.")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Get primary external link info

A GET request is sent to [/api/2.0/files/file/:fileId/link](/docspace/api-backend/usage-api/get-file-primary-external-link) to retrieve the existing link details for the specified file

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getFilePrimaryExternalLink(fileId) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/link`;
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

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_file_primary_external_link(file_id: int):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/link"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Primary external link info:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>