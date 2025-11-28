import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Save file as PDF

This example demonstrates how to convert a document to PDF and save it to a specified folder using the ONLYOFFICE DocSpace API.

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

  // Convert a file to PDF and save it in the specified folder
  async function saveFileAsPdf(fileId, folderId, title) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/saveaspdf`;
    const payload = {
      folderId,
      title,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const json = await res.json();
      const result = json.response || json;
      console.log('File successfully saved as PDF:');
      console.log(JSON.stringify(result, null, 2));
      return result;
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
    const fileId = 2151627;          // Source file ID
    const folderId = 86190;          // Destination folder ID
    const title = 'Volunteer_Form_v1'; // Output file name (without .pdf)
    await saveFileAsPdf(fileId, folderId, title);
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
    "Content-Type": "application/json"
  }

  # Convert a file to PDF and save it in the specified folder
  def save_file_as_pdf(file_id: int, folder_id: int, title: str):
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/saveaspdf"
    payload = {
      "folderId": folder_id,
      "title": title
    }

    response = requests.post(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      result = response.json().get("response", {})
      print("File successfully saved as PDF:")
      print(json.dumps(result, indent=2, ensure_ascii=False))
      return result
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
    return None


  if __name__ == "__main__":
    file_id = 2151627           # Source file ID
    folder_id = 86190           # Destination folder ID
    title = "Volunteer_Form_v1" # Output file name (without .pdf)
    save_file_as_pdf(file_id, folder_id, title)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A POST request is sent to [/api/2.0/files/file/:fileId/saveaspdf](/docspace/api-backend/usage-api/save-file-as-pdf) to convert a file into PDF format and save it in the specified folder.

Payload parameters:

- `folderId`: ID of the target folder where the new file will be saved.
- `title`: Name for the output PDF file (extension is automatically added).