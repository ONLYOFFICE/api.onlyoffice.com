import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create and open a new file

This example demonstrates how to create a new file inside a specific folder in ONLYOFFICE DocSpace using the API. After creation, the file is automatically opened in the default web browser using the returned editor link.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/create-and-open-new-file.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/create-and-open-new-file.py)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  import { exec } from "child_process";

  // Set API base URL
  const API_HOST = "https://yourportal.onlyoffice.com";
  const API_KEY = "your_api_key";

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  // Helper: open URL in default browser (no external deps)
  function openInBrowser(url) {
    const platform = process.platform;
    const cmd =
      platform === "win32"
        ? `start "" "${url}"`
        : platform === "darwin"
        ? `open "${url}"`
        : `xdg-open "${url}"`;
    exec(cmd);
  }

  // Step 1: Create a new file in a folder and open it
  function createFile(folderId, fileTitle) {
    const url = `${API_HOST}/api/2.0/files/${folderId}/file`;
    const data = { title: fileTitle, type: "text" };

    return fetch(url, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(data),
    })
    .then((res) => {
      if (res.status === 200) return res.json();
      return res.text().then((t) => {
        console.log(`File creation failed. Status code: ${res.status}, Message: ${t}`);
        return null;
      });
    })
    .then((json) => {
      if (!json) return null;
      const fileInfo = json.response || {};
      const editUrl = fileInfo.webUrl;
      if (editUrl) openInBrowser(editUrl); // Open document in default browser
      return fileInfo;
    })
    .catch((err) => {
      console.log(`File creation error: ${err.message}`);
      return null;
    });
  }

  // Run
  const folderId = "123456"; // Replace with your actual folder ID
  const fileTitle = "NewDocument.docx";

  createFile(folderId, fileTitle);
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  import webbrowser

  # Set API base URL
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  # Headers with API key for authentication
  HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
  }

  # Step 1: Create a new file in a folder and open it
  def create_file(folder_id, file_title):
    url = f'{API_HOST}/api/2.0/files/{folder_id}/file'
    data = {
      'title': file_title,
      'type': 'text'
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      file_info = response.json().get('response', {})
      edit_url = file_info.get('webUrl')
      if edit_url:
        webbrowser.open(edit_url)  # Open document in default browser
      return file_info
    else:
      print(f"File creation failed. Status code: {response.status_code}, Message: {response.text}")
    return None

  if __name__ == "__main__":
    folder_id = '123456'  # Replace with your actual folder ID
    file_title = 'NewDocument.docx'

    create_file(folder_id, file_title)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A POST request is sent to [/api/2.0/files/:folderId/file](/docspace/api-backend/usage-api/create-file) to create a new file inside the specified folder.

Payload parameters include:

- `title`: Desired name of the file.
- `type`: File type.

The API returns a `webUrl`, which opens the document editor in a browser.
