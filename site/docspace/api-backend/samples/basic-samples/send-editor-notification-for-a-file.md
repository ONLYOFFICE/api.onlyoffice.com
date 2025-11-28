import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Send editor notification for a file

This example demonstrates how to send an editor notification in ONLYOFFICE DocSpace.
You can use this endpoint to notify collaborators or mentioned users about important updates or comments in a shared document.

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

  // Send an editor notification to users mentioned in the file
  async function sendEditorNotify(fileId, message) {
    const url = `${BASE_URL}/api/2.0/files/file/${fileId}/sendeditornotify`;
    const payload = { message };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const json = await res.json();
      const info = json.response || json;
      console.log('Notification sent successfully:');
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
    const fileId = 123456; // Replace with your file ID
    const message = 'The document has been updated. Please review the latest changes.';
    await sendEditorNotify(fileId, message);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests
  
  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"
  
  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
  
  # Send an editor notification to users mentioned in the file
  def send_editor_notify(file_id: int, message: str):
    url = f"{BASE_URL}/api/2.0/files/file/{file_id}/sendeditornotify"
    payload = {
      "message": message  # notification text
    }
    response = requests.post(url, headers=HEADERS, json=payload)
  
    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Notification sent successfully:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None
  
  if __name__ == "__main__":
    file_id = 123456  # Replace with your file ID
    message = "The document has been updated. Please review the latest changes."
    send_editor_notify(file_id, message)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A POST request is sent to [/api/2.0/files/file/:fileId/sendeditornotify](/docspace/api-backend/usage-api/send-editor-notify).

Payload parameters include:

- `message`: the notification text sent to users mentioned in the file.