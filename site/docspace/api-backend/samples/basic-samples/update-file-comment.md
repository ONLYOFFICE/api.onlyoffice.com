import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update file comment

This example demonstrates how to update a file comment (description) in ONLYOFFICE DocSpace using the API.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Get current file version (required for comment update)
  async function getFileVersion(fileId) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to get file version (${res.status}): ${text}`);
    }

    const json = await res.json();
    const data = json.response || json;
    return Number(data.version);
  }

  // Update file comment
  async function updateFileComment(fileId, comment) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/comment`;

    let version = await getFileVersion(fileId);
    let payload = {
      version,   // Required field
      comment,   // New file comment
    };

    let res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    // If version conflict — refresh version and retry once
    if (res.status === 409) {
      version = await getFileVersion(fileId);
      payload.version = version;

      res = await fetch(url, {
        method: 'PUT',
        headers: HEADERS,
        body: JSON.stringify(payload),
      });
    }

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to update file comment (${res.status}): ${text}`);
    }

    const json = await res.json();
    const result = json.response || json;
    console.log('Updated file comment:');
    console.log(JSON.stringify(result, null, 2));
    return result;
  }

  // Example usage
  (async () => {
    const fileId = 2151627;
    const comment = 'Reviewed by QA on 2025-10-29. Ready for publishing.';
    await updateFileComment(fileId, comment);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests

  # Set API base URL
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json",
  }

  # Get current file version (required for comment update)
  def get_file_version(file_id: int) -> int:
    url = f"{API_HOST}/api/2.0/files/file/{file_id}"
    response = requests.get(url, headers=HEADERS)
    response.raise_for_status()
    data = response.json().get("response", response.json())
    return int(data["version"])

  # Update file comment
  def update_file_comment(file_id: int, comment: str):
    version = get_file_version(file_id)
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/comment"
    payload = {
      "version": version,     # Required field
      "comment": comment      # New file comment
    }

    response = requests.put(url, headers=HEADERS, json=payload)
    if response.status_code == 409:
      # If version conflict — refresh version and retry once
      version = get_file_version(file_id)
      payload["version"] = version
      response = requests.put(url, headers=HEADERS, json=payload)

    response.raise_for_status()
    result = response.json().get("response", response.json())
    print("Updated file comment:")
    print(json.dumps(result, indent=2, ensure_ascii=False))
    return result

  if __name__ == "__main__":
    file_id = 2151627
    comment = "Reviewed by QA on 2025-10-29. Ready for publishing."
    update_file_comment(file_id, comment)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A PUT request is sent to [/api/2.0/files/file/:fileId/comment](/docspace/api-backend/usage-api/update-file-comment) to update the description or comment associated with the file.