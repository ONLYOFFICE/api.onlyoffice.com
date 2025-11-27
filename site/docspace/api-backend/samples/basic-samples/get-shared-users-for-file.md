import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get shared users for a file

This example demonstrates how to retrieve a list of users who have access to a specific file in ONLYOFFICE DocSpace using the API.

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
  };

  // Get users who have access to the file (with their permissions)
  async function getSharedUsers(fileId) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/sharedusers`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const payload = await res.json();
      const users = payload.response || payload;
      console.log('Users with access to the file:');
      console.log(JSON.stringify(users, null, 2));
      return users;
    }

    // For all non-200 responses just print status and raw body
    const body = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(body);
    return null;
  }

  // Example usage
  (async () => {
    const fileId = 2384103; // Replace with your actual file ID
    await getSharedUsers(fileId);
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
  }

  # Get users who have access to the file (with their permissions)
  def get_shared_users(file_id: int):
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/sharedusers"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      users = payload.get("response", payload)
      print("Users with access to the file:")
      print(json.dumps(users, indent=2))
      return users

    # For all non-200 responses just print status and raw body
    print(f"Request failed: {response.status_code}")
    print(response.text)
    return None

  if __name__ == "__main__":
    file_id = 2384103  # Replace with your actual file ID
    get_shared_users(file_id)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/files/file/{fileId}/sharedusers](/docspace/api-backend/usage-api/get-shared-users) to retrieve all users who have access to the specified file, including their permission levels.
