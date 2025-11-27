import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage room security settings

This example demonstrates how to configure and retrieve room security (sharing) settings in ONLYOFFICE DocSpace using the API.

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

  // Step 1: Set room security (sharing)
  async function setRoomSecurity(roomId, securityPayload) {
    const url = `${BASE_URL}/api/2.0/files/rooms/${roomId}/share`;

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(securityPayload),
    });

    if (res.status === 200) {
      const data = await res.json();
      const result = data.response || data;
      console.log('Room security has been updated.');
      console.log(JSON.stringify(result, null, 2));
      return result;
    }

    const text = await res.text();
    console.log(`Failed to update room security: ${res.status}`);
    console.log(text);
    return null;
  }

  // Step 2: Get current room security info
  async function getRoomSecurityInfo(roomId) {
    const url = `${BASE_URL}/api/2.0/files/rooms/${roomId}/share`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Current room security info:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    const text = await res.text();
    console.log(`Failed to get room security: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    const roomId = 123456; // Replace with your actual room ID

    // Example payload structure (adjust according to your portal policy)
    const securityPayload = {
      // inherited: false,
      // shares: [
      //   { subjectId: 'user-guid-or-id', subjectType: 'user', access: 'read' },
      //   { subjectId: 'group-guid-or-id', subjectType: 'group', access: 'edit' },
      // ],
      // link: { isEnabled: false, access: 'view' },
    };

    // Step 1: Update room security
    await setRoomSecurity(roomId, securityPayload);

    // Step 2: Retrieve current room security info
    await getRoomSecurityInfo(roomId);
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
    "Accept": "application/json",
    "Content-Type": "application/json"
  }

  # Step 1: Set room security (sharing)
  def set_room_security(room_id: int, security_payload: dict):
    url = f"{BASE_URL}/api/2.0/files/rooms/{room_id}/share"
    response = requests.put(url, headers=HEADERS, json=security_payload)

    if response.status_code == 200:
      data = response.json()
      result = data.get("response", data)
      print("Room security has been updated.")
      print(json.dumps(result, indent=2))
      return result
    else:
      print(f"Failed to update room security: {response.status_code}")
      print(response.text)
      return None


  # Step 2: Get current room security info
  def get_room_security_info(room_id: int):
    url = f"{BASE_URL}/api/2.0/files/rooms/{room_id}/share"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Current room security info:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Failed to get room security: {response.status_code}")
      print(response.text)
      return None


  def main():
    room_id = 123456  # Replace with your actual room ID

    # Example payload structure (adjust according to your portal policy)
    security_payload = {
      # "inherited": False,
      # "shares": [
      #   {"subjectId": "user-guid-or-id", "subjectType": "user", "access": "read"},
      #   {"subjectId": "group-guid-or-id", "subjectType": "group", "access": "edit"}
      # ],
      # "link": {"isEnabled": False, "access": "view"}
    }

    # Step 1: Update room security
    set_room_security(room_id, security_payload)

    # Step 2: Retrieve current room security info
    get_room_security_info(room_id)


  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Set room security (sharing)

A PUT request is sent to [/api/2.0/files/rooms/:roomId/share](/docspace/api-backend/usage-api/set-room-security).
The request defines sharing and access permissions for users or groups.

Example payload fields:

- `inherited`: Whether the room inherits permissions.
- `shares`: List of users or groups with access levels (`read`, `edit`, etc.).
- `link`: Settings for public or external sharing.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function setRoomSecurity(roomId, securityPayload) {
    const url = `${BASE_URL}/api/2.0/files/rooms/${roomId}/share`;

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(securityPayload),
    });

    if (res.status === 200) {
      const data = await res.json();
      const result = data.response || data;
      console.log('Room security has been updated.');
      console.log(JSON.stringify(result, null, 2));
      return result;
    }

    const text = await res.text();
    console.log(`Failed to update room security: ${res.status}`);
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def set_room_security(room_id: int, security_payload: dict):
    url = f"{BASE_URL}/api/2.0/files/rooms/{room_id}/share"
    response = requests.put(url, headers=HEADERS, json=security_payload)

    if response.status_code == 200:
      data = response.json()
      result = data.get("response", data)
      print("Room security has been updated.")
      print(json.dumps(result, indent=2))
      return result
    else:
      print(f"Failed to update room security: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Get room security info

A GET request is sent to [/api/2.0/files/rooms/:roomId/share](/docspace/api-backend/usage-api/get-room-security-info).
This returns the current security configuration, including users, groups, and access levels.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getRoomSecurityInfo(roomId) {
    const url = `${BASE_URL}/api/2.0/files/rooms/${roomId}/share`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Current room security info:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    const text = await res.text();
    console.log(`Failed to get room security: ${res.status}`);
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_room_security_info(room_id: int):
    url = f"{BASE_URL}/api/2.0/files/rooms/{room_id}/share"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Current room security info:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Failed to get room security: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>