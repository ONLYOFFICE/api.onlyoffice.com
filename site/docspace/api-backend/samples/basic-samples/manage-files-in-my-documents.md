import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage files in "My Documents"

This example demonstrates how to interact with a user's personal space ("My Documents") in ONLYOFFICE DocSpace using the API. It includes retrieving contents, uploading a file, creating a new document, and deleting a file.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
  };

  // Step 1: Get "My Documents" contents
  function getMyDocuments() {
    const url = `${API_HOST}/api/2.0/files/@my`;
    return fetch(url, { method: 'GET', headers: HEADERS })
      .then((res) => (res.status === 200 ? res.json() : null))
      .catch(() => null);
  }

  // Step 2: Upload a file to "My Documents"
  function uploadFileToMy(filePath) {
    const url = `${API_HOST}/api/2.0/files/@my/upload`;

    // Build multipart form-data with Blob (no external deps)
    const form = new FormData();
    try {
      const fs = require('node:fs');
      const path = require('node:path');
      const buffer = fs.readFileSync(filePath);
      const blob = new Blob([buffer]);
      form.append('file', blob, path.basename(filePath));
    } catch (e) {
      console.error('Failed to read file:', e.message);
      return Promise.resolve(null);
    }

    // Do NOT set Content-Type manually; fetch will set the multipart boundary
    return fetch(url, { method: 'POST', headers: { Authorization: HEADERS.Authorization }, body: form })
      .then((res) => (res.status === 200 ? res.json() : null))
      .catch(() => null);
  }

  // Step 3: Create an empty file in "My Documents"
  function createFileInMy(fileTitle) {
    const url = `${API_HOST}/api/2.0/files/@my/file`;
    const data = { title: fileTitle };

    return fetch(url, {
      method: 'POST',
      headers: { ...HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => (res.status === 200 ? res.json() : null))
      .catch(() => null);
  }

  // Step 4: Delete a file from "My Documents"
  function deleteFile(fileId, immediately = true, deleteAfter = false) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}`;
    const data = { immediately, deleteAfter };

    return fetch(url, {
      method: 'DELETE',
      headers: { ...HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => (res.status === 200 ? res.json() : null))
      .catch(() => null);
  }

  // Run (mirrors the Python example)
  getMyDocuments();

  const file_path = 'example.pdf'; // Replace with actual path to the file
  uploadFileToMy(file_path);

  const file_title = 'NewDocument.docx';
  createFileInMy(file_title);

  const file_id = '123456'; // Replace with an actual file ID
  deleteFile(file_id);
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
    'Authorization': f'Bearer {API_KEY}'
  }

# Step 1: Get "My Documents" contents
  def get_my_documents():
    url = f'{API_HOST}/api/2.0/files/@my'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()
    return None

  # Step 2: Upload a file to "My Documents"
  def upload_file_to_my(file_path):
    url = f'{API_HOST}/api/2.0/files/@my/upload'
    with open(file_path, 'rb') as file:
      files = {'file': (file_path, file)}
      response = requests.post(url, headers=HEADERS, files=files)

    if response.status_code == 200:
      return response.json()
    return None

  # Step 3: Create an empty file in "My Documents"
  def create_file_in_my(file_title):
    url = f'{API_HOST}/api/2.0/files/@my/file'
    data = {'title': file_title}
    response = requests.post(url, headers=HEADERS, json=data)

    if response.status_code == 200:
      return response.json()
    return None

  # Step 4: Delete a file from "My Documents"
  def delete_file(file_id, immediately=True, delete_after=False):
    url = f'{API_HOST}/api/2.0/files/file/{file_id}'
    data = {
      'immediately': immediately,
      'deleteAfter': delete_after
    }

    requests.delete(url, headers=HEADERS, json=data)

  if __name__ == "__main__":
    get_my_documents()

    file_path = 'example.pdf'  # Replace with actual path to the file
    upload_file_to_my(file_path)

    file_title = 'NewDocument.docx'
    create_file_in_my(file_title)

    file_id = '123456'  # Replace with an actual file ID
    delete_file(file_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve contents of "My Documents"

A GET request is sent to [/api/2.0/files/@my](/docspace/api-backend/usage-api/get-my-folder).

It returns a list of files and folders in the user's personal space.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function getMyDocuments() {
    const url = `${API_HOST}/api/2.0/files/@my`;
    return fetch(url, { method: 'GET', headers: HEADERS })
      .then((res) => (res.status === 200 ? res.json() : null))
      .catch(() => null);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_my_documents():
    url = f'{API_HOST}/api/2.0/files/@my'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Upload a file to "My Documents"

A POST request is sent to [/api/2.0/files/@my/upload](/docspace/api-backend/usage-api/upload-file-to-my) with the following parameter:

- `file`: The file represented as binary data.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function uploadFileToMy(filePath) {
    const url = `${API_HOST}/api/2.0/files/@my/upload`;

    // Build multipart form-data with Blob (no external deps)
    const form = new FormData();
    try {
      const fs = require('node:fs');
      const path = require('node:path');
      const buffer = fs.readFileSync(filePath);
      const blob = new Blob([buffer]);
      form.append('file', blob, path.basename(filePath));
    } catch (e) {
      console.error('Failed to read file:', e.message);
      return Promise.resolve(null);
    }

    // Do NOT set Content-Type manually; fetch will set the multipart boundary
    return fetch(url, { method: 'POST', headers: { Authorization: HEADERS.Authorization }, body: form })
      .then((res) => (res.status === 200 ? res.json() : null))
      .catch(() => null);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def upload_file_to_my(file_path):
    url = f'{API_HOST}/api/2.0/files/@my/upload'
    with open(file_path, 'rb') as file:
      files = {'file': (file_path, file)}
      response = requests.post(url, headers=HEADERS, files=files)

    if response.status_code == 200:
      return response.json()
    return None
  ```

  </TabItem>
</Tabs>

## Step 3: Create an empty file in "My Documents"

A POST request is sent to [/api/2.0/files/@my/file](/docspace/api-backend/usage-api/create-file-in-my-documents) with the following parameter:

- `title`: The file title.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function createFileInMy(fileTitle) {
    const url = `${API_HOST}/api/2.0/files/@my/file`;
    const data = { title: fileTitle };

    return fetch(url, {
      method: 'POST',
      headers: { ...HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => (res.status === 200 ? res.json() : null))
      .catch(() => null);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_file_in_my(file_title):
    url = f'{API_HOST}/api/2.0/files/@my/file'
    data = {'title': file_title}
    response = requests.post(url, headers=HEADERS, json=data)

    if response.status_code == 200:
      return response.json()
    return None
  ```

  </TabItem>
</Tabs>

## Step 4: Delete a file from "My Documents"

A DELETE request is sent to [/api/2.0/files/file/:fileId](/docspace/api-backend/usage-api/delete-file).

The following parameters can be optionally defined:

- `immediately`: Whether to delete without moving to trash.
- `deleteAfter`: Whether to delete after a delay.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function deleteFile(fileId, immediately = true, deleteAfter = false) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}`;
    const data = { immediately, deleteAfter };

    return fetch(url, {
      method: 'DELETE',
      headers: { ...HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => (res.status === 200 ? res.json() : null))
      .catch(() => null);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_file(file_id, immediately=True, delete_after=False):
    url = f'{API_HOST}/api/2.0/files/file/{file_id}'
    data = {
      'immediately': immediately,
      'deleteAfter': delete_after
    }

    requests.delete(url, headers=HEADERS, json=data)
  ```

  </TabItem>
</Tabs>
