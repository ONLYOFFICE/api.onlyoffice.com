import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lock and unlock a file

This example demonstrates how to lock or unlock the specified file in ONLYOFFICE DocSpace and get a list of users and their access levels for the file.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/lock-unlock-file.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/lock-unlock-file.py)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const API_HOST = 'yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Lock a file by ID
  function lockFile(fileId) {
    const url = `https://${API_HOST}/api/2.0/files/file/${fileId}/lock`;
    const data = { lockFile: true };

    return fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`File lock failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`File lock error: ${err.message}`);
        return null;
      });
  }

  // Step 2: Unlock a file by ID
  function unlockFile(fileId) {
    const url = `https://${API_HOST}/api/2.0/files/file/${fileId}/lock`;
    const data = { lockFile: false };

    return fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`File unlock failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`File unlock error: ${err.message}`);
        return null;
      });
  }

  // Step 3: View users with access to the file
  function getProtectedFileUsers(fileId) {
    const url = `https://${API_HOST}/api/2.0/files/file/${fileId}/protectusers`;
    return fetch(url, {
      method: 'GET',
      headers: HEADERS,
    })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Protected file users retrieval failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`Protected file users retrieval error: ${err.message}`);
        return null;
      });
  }

  // Run
  const file_id = '123456'; // Replace with a valid file ID

  lockFile(file_id)
    .then(() => unlockFile(file_id))
    .then(() => getProtectedFileUsers(file_id));
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  # Headers with API key for authentication
  HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
  }

  # Step 1: Lock a file by ID
  def lock_file(file_id):
    url = f'{API_HOST}/api/2.0/files/file/{file_id}/lock'
    data = { 'lockFile': True }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
      return response.json()
    else:
      print(f"File lock failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Step 2: Unlock a file by ID
  def unlock_file(file_id):
    url = f'{API_HOST}/api/2.0/files/file/{file_id}/lock'
    data = { 'lockFile': False }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
      return response.json()
    else:
      print(f"File unlock failed. Status code: {response.status_code}, Message: {response.text}")
      return None

# Step 3: View users with access to the file
  def get_protected_file_users(file_id):
    url = f'{API_HOST}/api/2.0/files/file/{file_id}/protectusers'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      return response.json()
    else:
      print(f"Protected file users retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  if __name__ == "__main__":
    file_id = '123456'  # Replace with a valid file ID

    lock_file(file_id)
    unlock_file(file_id)
    get_protected_file_users(file_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Lock a file

A PUT request is sent to [/api/2.0/files/file/:fileId/lock](/docspace/api-backend/usage-api/lock-file) with the payload:

- `lockFile`: True — Lock a file.
  
This prevents other users from editing the file until it is unlocked.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function lockFile(fileId) {
    const url = `https://${API_HOST}/api/2.0/files/file/${fileId}/lock`;
    const data = { lockFile: true };

    return fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`File lock failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`File lock error: ${err.message}`);
        return null;
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def lock_file(file_id):
    url = f'{API_HOST}/api/2.0/files/file/{file_id}/lock'
    data = { 'lockFile': True }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
      return response.json()
    else:
      print(f"File lock failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Unlock a file

A PUT request is sent to the same endpoint with the payload:

- `lockFile`: False — Unlock a file.

This re-enables editing for the file.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function unlockFile(fileId) {
    const url = `https://${API_HOST}/api/2.0/files/file/${fileId}/lock`;
    const data = { lockFile: false };

    return fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`File unlock failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`File unlock error: ${err.message}`);
        return null;
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def unlock_file(file_id):
    url = f'{API_HOST}/api/2.0/files/file/{file_id}/lock'
    data = { 'lockFile': False }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
      return response.json()
    else:
      print(f"File unlock failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 3: View file access list

A GET request is sent to [/api/2.0/files/file/:fileId/protectusers](/docspace/api-backend/usage-api/get-protected-file-users).

It returns a list of users and their access levels for the file.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function getProtectedFileUsers(fileId) {
    const url = `https://${API_HOST}/api/2.0/files/file/${fileId}/protectusers`;
    return fetch(url, {
      method: 'GET',
      headers: HEADERS,
    })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Protected file users retrieval failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`Protected file users retrieval error: ${err.message}`);
        return null;
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_protected_file_users(file_id):
    url = f'{API_HOST}/api/2.0/files/file/{file_id}/protectusers'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      return response.json()
    else:
      print(f"Protected file users retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>
