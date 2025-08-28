import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage files

This example demonstrates how to manage files in ONLYOFFICE DocSpace using the API. It covers creating, uploading, updating, and deleting files through API requests.

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

  // Step 1: Create an empty file
  function createFile(folderId, fileName) {
    const url = `${BASE_URL}/api/2.0/files/${folderId}/file`;
    const data = { title: fileName };

    return fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(data),
    });
  }

  // Step 2: Upload a file
  function uploadFile(folderId, filePath) {
    const url = `${BASE_URL}/api/2.0/files/${folderId}/upload`;

    const fs = require('node:fs');
    const path = require('node:path');

    const form = new FormData();
    const buffer = fs.readFileSync(filePath);
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    form.append('file', blob, path.basename(filePath));

    return fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${API_KEY}` },
      body: form,
    }).then((res) =>
      res.text().then((text) => {
        console.log(res.status, text);
        return { status: res.status, text };
      })
    );
  }

  // Step 3: Update an existing file
  function updateFile(fileId, newFilePath) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}`;

    const fs = require('node:fs');
    const path = require('node:path');

    const form = new FormData();
    const buffer = fs.readFileSync(newFilePath);
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    form.append('file', blob, path.basename(newFilePath));

    return fetch(url, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${API_KEY}` },
      body: form,
    });
  }

  // Step 4: Delete a file
  function deleteFile(fileId) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}`;
    const data = { immediately: true };

    return fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
      body: JSON.stringify(data),
    });
  }

  function main() {
    const folder_id = 776261; // Replace with actual folder ID
    const file_name = 'NewDocument1.docx'; // Replace with actual file name
    const file_path = 'path/to/upload_file.txt'; // Replace with actual file path
    const updated_file_path = 'path/to/updated_file.txt'; // Replace with actual updated file path
    const file_id = 1187261; // Replace with actual file ID

    // Step 1
    createFile(folder_id, file_name)
    // Step 2
    uploadFile(folder_id, file_path)
    // Step 3
    updateFile(file_id, updated_file_path)
    // Step 4
    deleteFile(file_id)
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

  # Step 1: Create an empty file
  def create_file(folder_id, file_name):
    url = f'{BASE_URL}/api/2.0/files/{folder_id}/file'
    data = {
      'title': file_name
    }
    requests.post(url, headers=HEADERS, json=data)

  # Step 2: Upload a file
  def upload_file(folder_id, file_path):
    url = f'{BASE_URL}/api/2.0/files/{folder_id}/upload'
    headers = {
      'Authorization': f'Bearer {API_KEY}'
    }

    with open(file_path, 'rb') as file:
      files = {
        'file': (file_path, file, 'application/octet-stream')
      }
      response = requests.post(url, headers=headers, files=files)
      print(response.status_code, response.text)
      return response

  # Step 3: Update an existing file
  def update_file(file_id, new_file_path):
    url = f'{BASE_URL}/api/2.0/files/file/{file_id}'
    files = {'file': open(new_file_path, 'rb')}
    requests.put(url, headers=headers, files=files)

  # Step 4: Delete a file
  def delete_file(file_id):
    url = f'{BASE_URL}.api/2.0/files/file/{file_id}'
    data = {
      'immediately': True
    }
    requests.delete(url, headers=headers, json=data)

  def main():
    folder_id = 776261 # Replace with actual folder ID
    file_name = 'NewDocument1.docx' # Replace with actual file name
    file_path = 'path/to/upload_file.txt' # Replace with actual file path
    updated_file_path = 'path/to/updated_file.txt' # Replace with actual updated file path
    file_id = 1187261 # Replace with actual file ID

    #Step 1
    create_file(folder_id, file_name)

    #Step 2
    upload_file(folder_id, file_path)

    #Step 3
    update_file(file_id, updated_file_path)

    #Step 4
    delete_file(file_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create an empty file

A POST request is sent to [/api/2.0/files/:folderId/file](/docspace/api-backend/usage-api/create-file.api.mdx) to create an empty file in a specific folder.

You must pass:

- `title`: Desired name of the file.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function createFile(folderId, fileName) {
    const url = `${BASE_URL}/api/2.0/files/${folderId}/file`;
    const data = { title: fileName };

    return fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(data),
    });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_file(folder_id, file_name):
    url = f'{BASE_URL}/api/2.0/files/{folder_id}/file'
    data = {
        'title': file_name
    }
    requests.post(url, headers=headers, json=data)
  ```

  </TabItem>
</Tabs>

## Step 2: Upload a file

A POST request is sent to [/api/2.0/files/:folderId/upload](/docspace/api-backend/usage-api/upload-file.api.mdx) to upload a file to a folder.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function uploadFile(folderId, filePath) {
    const url = `${BASE_URL}/api/2.0/files/${folderId}/upload`;

    const fs = require('node:fs');
    const path = require('node:path');

    const form = new FormData();
    const buffer = fs.readFileSync(filePath);
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    form.append('file', blob, path.basename(filePath));

    return fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${API_KEY}` },
      body: form,
    }).then((res) =>
      res.text().then((text) => {
        console.log(res.status, text);
        return { status: res.status, text };
      })
    );
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def upload_file(folder_id, file_path):
    url = f'{BASE_URL}/api/2.0/files/{folder_id}/upload'
    headers = {
        'Authorization': f'Bearer {API_KEY}'
    }

    with open(file_path, "rb") as file:
        files = {
            'file': (file_path, file, 'application/octet-stream')
        }
        response = requests.post(url, headers=headers, files=files)

        print(response.status_code, response.text)
        return response
  ```

  </TabItem>
</Tabs>

## Step 3: Update an existing file

A PUT request is sent to [/api/2.0/files/file/:fileId](/docspace/api-backend/usage-api/update-file.api.mdx) to update an existing file.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function updateFile(fileId, newFilePath) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}`;

    const fs = require('node:fs');
    const path = require('node:path');

    const form = new FormData();
    const buffer = fs.readFileSync(newFilePath);
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    form.append('file', blob, path.basename(newFilePath));

    return fetch(url, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${API_KEY}` },
      body: form,
    });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def update_file(file_id, new_file_path):
    url = f'{BASE_URL}/api/2.0/files/file/{file_id}'
    files = {'file': open(new_file_path, 'rb')}
    requests.put(url, headers=headers, files=files)
  ```

  </TabItem>
</Tabs>

## Step 4: Delete a file

A DELETE request is sent to [/api/2.0/files/file/:fileId](/docspace/api-backend/usage-api/delete-file.api.mdx) to remove a file.

You must pass:

- `immediately`: True — delete a file immediately (do not move it to the "Trash" folder).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function deleteFile(fileId) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}`;
    const data = { immediately: true };

    return fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
      body: JSON.stringify(data),
    });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_file(file_id):
    url = f'{BASE_URL}.api/2.0/files/file/{file_id}'
    data = {
        'immediately': True
    }
    requests.delete(url, headers=headers, json=data)
  ```

  </TabItem>
</Tabs>
