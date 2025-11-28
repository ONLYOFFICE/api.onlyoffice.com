import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage room links

This example demonstrates how to set and retrieve room invitation or external links in ONLYOFFICE DocSpace using the API. These links provide access to rooms based on specified permissions.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Set a room access link
  async function setRoomLink(roomId, accessLevel = 2, expirationDate = null, internal = true, primary = false) {
    const url = `${API_HOST}/api/2.0/files/rooms/${roomId}/links`;
    const body = JSON.stringify({
      access: accessLevel,
      expirationDate,
      internal,
      primary,
    });

    const res = await fetch(url, { method: 'PUT', headers: HEADERS, body });
    if (!res.ok) {
      const text = await res.text();
      console.log(`Room link set failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }
    return res.json();
  }

  // Step 2: Retrieve all links for a room
  async function getRoomLinks(roomId) {
    const url = `${API_HOST}/api/2.0/files/rooms/${roomId}/links`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const text = await res.text();
      console.log(`Room link set failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }
    return res.json();
  }

  // Run example
  (async () => {
    try {
      const roomId = '123456'; // Replace with your actual room ID

      const setResp = await setRoomLink(roomId, 2, null, true, false);
      console.log('Link set:', setResp);

      const links = await getRoomLinks(roomId);
      console.log('Links:', links);
    } catch (err) {
      console.error(err.message);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  # Headers with API key for authentication
  HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
  }

  # Step 1: Set a room access link
  def set_room_link(room_id, access_level=2, expiration_date=None, internal=True, primary=False):
    url = f'{API_HOST}/api/2.0/files/rooms/{room_id}/links'
    data = {
      'access': access_level,
      'expirationDate': expiration_date,
      'internal': internal,
      'primary': primary
    }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
      return response.json()
    else:
      print(f"Room link set failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Step 2: Retrieve all links for a room
  def get_room_links(room_id):
    url = f'{API_HOST}/api/2.0/files/rooms/{room_id}/links'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()
    else:
      print(f"Room links retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  if __name__ == "__main__":
    room_id = '123456'  # Replace with your actual room ID

    set_room_link(room_id, access_level=2, internal=True, primary=False)
    get_room_links(room_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Set a room link

A PUT request is sent to [/api/2.0/files/rooms/:roomId/links](/docspace/api-backend/usage-api/set-room-link) with:

- `access`: Access level (e.g., 2 for editing).
- `expirationDate`: Optional expiration date (ISO 8601 format).
- `internal`: Indicates if the link is internal.
- `primary`: Marks the link as primary if `true`.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function setRoomLink(roomId, accessLevel = 2, expirationDate = null, internal = true, primary = false) {
    const url = `${API_HOST}/api/2.0/files/rooms/${roomId}/links`;
    const body = JSON.stringify({
      access: accessLevel,
      expirationDate,
      internal,
      primary,
    });

    const res = await fetch(url, { method: 'PUT', headers: HEADERS, body });
    if (!res.ok) {
      const text = await res.text();
      console.log(`Room link set failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }
    return res.json();
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
    def set_room_link(room_id, access_level=2, expiration_date=None, internal=True, primary=False):
    url = f'{API_HOST}/api/2.0/files/rooms/{room_id}/links'
    data = {
      'access': access_level,
      'expirationDate': expiration_date,
      'internal': internal,
      'primary': primary
    }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
      return response.json()
    else:
      print(f"Room link set failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Get all room links

A GET request is sent to the same endpoint to retrieve all configured room links.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getRoomLinks(roomId) {
    const url = `${API_HOST}/api/2.0/files/rooms/${roomId}/links`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const text = await res.text();
      console.log(`Room link set failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }
    return res.json();
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_room_links(room_id):
    url = f'{API_HOST}/api/2.0/files/rooms/{room_id}/links'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()
    else:
      print(f"Room links retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>
