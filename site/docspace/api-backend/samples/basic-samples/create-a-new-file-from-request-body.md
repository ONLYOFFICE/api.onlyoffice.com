import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a new file from request body

This example demonstrates how to create a new file directly from a raw request body in ONLYOFFICE DocSpace. The file content is sent as bytes (not multipart form-data), which is convenient for dynamically generated files.


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
  };

  // Step 1: Create a file in "My documents" from raw request body
  async function insertFileFromBody(fileName, contentBytes, mime = 'application/octet-stream', createNewIfExist = true) {
    const url = new URL(`${BASE_URL}/api/2.0/files/@my/insert`);
    url.search = new URLSearchParams({
      title: fileName,
      createNewIfExist: createNewIfExist ? 'true' : 'false',
    }).toString();

    const headers = {
      ...HEADERS,
      'Content-Type': mime,
      'Content-Length': String(contentBytes.length),
    };

    const res = await fetch(url.toString(), {
      method: 'POST',
      headers,
      body: contentBytes, // bytes (Buffer/Uint8Array), not JSON
    });

    if (res.status === 200) {
      const json = await res.json();
      const info = json.response || json;
      console.log('File created:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    const text = await res.text();
    console.log(`Failed to create file: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    const content = Buffer.from('Hello from body!\n', 'utf-8');
    await insertFileFromBody('GeneratedDocument.txt', content, 'text/plain', true);
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
    "Accept": "application/json"
  }

  # Step 1: Create a file in "My documents" from raw request body
  def insert_file_from_body(file_name: str, content_bytes: bytes, mime: str = "application/octet-stream", create_new_if_exist: bool = True):
    url = f"{BASE_URL}/api/2.0/files/@my/insert"
    params = {
      "title": file_name,
      "createNewIfExist": "true" if create_new_if_exist else "false"
    }
    headers = {
      **HEADERS,
      "Content-Type": mime,
      "Content-Length": str(len(content_bytes))
    }

    # Important: send BYTES via 'data' (not json, not files)
    response = requests.post(url, params=params, headers=headers, data=content_bytes)

    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("File created:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Failed to create file: {response.status_code}")
      print(response.text)
      return None

  # Example usage
  if __name__ == "__main__":
    content = "Hello from body!\n".encode("utf-8")  # bytes
    insert_file_from_body("GeneratedDocument.txt", content, mime="text/plain", create_new_if_exist=True)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A POST request is sent to [/api/2.0/files/@my/insert](/docspace/api-backend/usage-api/insert-file-to-my-from-body) with the raw file bytes in the request body.

- The filename is provided via the `title` query parameter.
- The request must include correct `Content-Type` and `Content-Length` headers.
- On success, the API responds with the created file’s metadata (ID, title, folder, version, and URLs).