import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List users with access to a room

This example demonstrates how to retrieve users with room sharing settings in ONLYOFFICE DocSpace using the API and then perform a simple security review by grouping users by permission level. You can use it in support or security tools to quickly see who has access to a specific room and with which permissions.

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

  // Step 1: Retrieve users with room sharing settings
  async function getRoomUsers(roomId) {
    const url = `${BASE_URL}/api/2.0/people/room/${roomId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      return json.response || json;
    }

    const text = await res.text();
    console.log('Failed to get users for room:', roomId, res.status, text);
    return [];
  }

  // Helper: group users by permission level
  function groupUsersByPermission(users) {
    const groups = {};
    for (const user of users) {
      const permission =
        user.access || user.permission || 'Unknown';

      if (!groups[permission]) {
        groups[permission] = [];
      }
      groups[permission].push(user);
    }
    return groups;
  }

  // Example usage
  (async () => {
    const roomId = '123456'; // Replace with a real room ID

    const users = await getRoomUsers(roomId);
    if (!users || users.length === 0) {
      console.log('No users found for this room.');
      return;
    }

    const groups = groupUsersByPermission(users);

    // Very simple security review output
    console.log('Security review for room:', roomId);
    for (const [permission, usersInGroup] of Object.entries(groups)) {
      console.log(`- ${permission}: ${usersInGroup.length} users`);
    }
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

  # Step 1: Retrieve users with room sharing settings
  def get_room_users(room_id):
    url = f"{BASE_URL}/api/2.0/people/room/{room_id}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      return data.get("response", data)

    print(
        "Failed to get users for room:",
        room_id,
        response.status_code,
        response.text,
    )
    return []

  # Helper: group users by permission level
  def group_users_by_permission(users):
    groups = {}
    for user in users:
      permission = user.get("access") or user.get("permission") or "Unknown"
      if permission not in groups:
        groups[permission] = []
        groups[permission].append(user)
    return groups

  if __name__ == "__main__":
    room_id = "123456"  # Replace with a real room ID

    users = get_room_users(room_id)
    if not users:
      print("No users found for this room.")
    else:
      groups = group_users_by_permission(users)

      # Very simple security review output
      print("Security review for room:", room_id)
      for permission, users_in_group in groups.items():
        print(f"- {permission}: {len(users_in_group)} users")
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/people/room/{id}](/docspace/api-backend/usage-api/get-users-with-room-shared) to return the users with sharing settings in the specified room.

Path parameters:

- `id`: the room ID.