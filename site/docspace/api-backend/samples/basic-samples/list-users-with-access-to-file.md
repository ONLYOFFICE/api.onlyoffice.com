import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List users with access to a folder

This example retrieves users who have access to a specific folder in ONLYOFFICE DocSpace, including their permission levels. It is useful for quick access audits when you need to check who can access an important or sensitive folder.

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
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  };

  // Get users with file sharing settings
  async function getFileUsers(fileId) {
    const url = `${BASE_URL}/api/2.0/people/file/${fileId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      return json.response || json;
    }

    const text = await res.text();
    console.log('Failed to get users for file:', fileId, res.status, text);
    return null;
  }

  function printUsers(users) {
    if (!users || users.length === 0) {
      console.log('No users found.');
      return;
    }

    for (const user of users) {
      console.log('User ID   :', user.id);
      console.log('Name      :', user.displayName);
      console.log('Permission:', user.access);
      console.log();
    }
  }

  // Example usage
  (async () => {
    const fileId = '112233'; // Replace with a real file ID

    const users = await getFileUsers(fileId);
    console.log(`Users with access to file ${fileId}:`);
    printUsers(users);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
  }

  # Get users with file sharing settings
  def get_file_users(file_id):
    url = f"{BASE_URL}/api/2.0/people/file/{file_id}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      return data.get("response", data)

    print("Failed to get users for file:", file_id, response.status_code, response.text)
    return None

  def print_users(users):
    if not users:
      print("No users found.")
      return

    for user in users:
      print("User ID   :", user.get("id"))
      print("Name      :", user.get("displayName"))
      print("Permission:", user.get("access"))
      print()

  if __name__ == "__main__":
    file_id = "112233"  # Replace with a real file ID

    users = get_file_users(file_id)
    print(f"Users with access to file {file_id}:")
    print_users(users)
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/people/folder/{id}](/docspace/api-backend/usage-api/get-users-with-files-shared) to return the users with the sharing settings for the specified file.

Path parameter:

- `id`: the file ID.
