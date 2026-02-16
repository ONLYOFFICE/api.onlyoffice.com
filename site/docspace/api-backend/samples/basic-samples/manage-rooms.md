import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage rooms

This example demonstrates how to manage rooms in ONLYOFFICE DocSpace using the API. It covers creating, retrieving, renaming, archiving, and deleting rooms through API requests.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/manage-rooms.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/manage-rooms.py)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Create a room
  async function createRoom(roomName, description) {
    const url = `${BASE_URL}/api/2.0/files/rooms`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ title: roomName, description, roomType: 2 }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Create room failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
    const json = await res.json();
    return json.response;
  }

  // Step 2: Retrieve room details
  async function getRoomDetails(roomId) {
    const url = `${BASE_URL}/api/2.0/files/rooms/${roomId}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Get room failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
    const roomInfo = await res.json();
    return roomInfo.response;
  }

  // Step 3: Rename a room
  async function renameRoom(roomId, newName) {
    const url = `${BASE_URL}/api/2.0/files/rooms/${roomId}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ title: newName }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Rename room failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
  }

  // Step 4: Archive a room
  async function archiveRoom(roomId) {
    const url = `${BASE_URL}/api/2.0/files/rooms/${roomId}/archive`;
    const res = await fetch(url, { method: 'PUT', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Archive room failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
  }

  // Step 5: Delete a room
  async function deleteRoom(roomId) {
    const url = `${BASE_URL}/api/2.0/files/rooms/${roomId}`;
    const res = await fetch(url, { method: 'DELETE', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Delete room failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
  }

  // Run
  (async () => {
    const room_name = 'New Room';                // Replace with actual room name
    const description = 'This is a test room.';  // Replace with actual room description
    const new_room_name = 'Updated Room Name';   // Replace with actual new room name
    const room_id = 1234                         // Replace with actual room ID

    try {
      // Step 1
      await createRoom(room_name, description);

      // Step 2
      await getRoomDetails(room_id);

      // Step 3
      await renameRoom(room_id, new_room_name);

      // Step 4
      await archiveRoom(room_id);

      // Step 5
      await deleteRoom(room_id);
    } catch (e) {
      console.error(e.message);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  BASE_URL = 'https://yourportal.onlyoffice.com'
  API_KEY = 'YOUR_API_KEY'

  # Headers with API key for authentication
  HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
  }

  # Step 1: Create a room
  def create_room(room_name, description):
    url = f'{BASE_URL}/api/2.0/files/rooms'
    data = {
      'title': room_name,
      'description': description
    }
    response = requests.post(url, headers=HEADERS, json=data)
    if response.status_code == 200:
      room_id = response.json()['response']['id']
      print(f'Room created successfully: {room_id}')
      return room_id
    else:
      print(f'Failed to create room: {response.status_code} - {response.text}')
      return None

  # Step 2: Retrieve room details
  def get_room_details(room_id):
    url = f'{BASE_URL}/api/2.0/files/rooms/{room_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      room_info = response.json()
      print(f'Room details: {room_info}')
      return room_info
    else:
      print(f'Failed to get room details: {response.status_code} - {response.text}')
      return None

  # Step 3: Rename a room
  def rename_room(room_id, new_name):
    url = f'{BASE_URL}/api/2.0/files/rooms/{room_id}'
    data = {
      'title': new_name
    }
    response = requests.put(url, headers=HEADERS, json=data)
    if response.status_code == 200:
      print(f'Room {room_id} renamed successfully.')
    else:
      print(f'Failed to rename room: {response.status_code} - {response.text}')

  # Step 4: Archive a room
  def archive_room(room_id):
    url = f'{BASE_URL}/api/2.0/files/rooms/{room_id}/archive'
    response = requests.put(url, headers=HEADERS)
    if response.status_code == 200:
      print(f'Room {room_id} archived successfully.')
    else:
      print(f'Failed to archive room: {response.status_code} - {response.text}')

  # Step 5: Delete a room
  def delete_room(room_id):
    url = f'{BASE_URL}/api/2.0/files/rooms/{room_id}'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
      print(f'Room {room_id} deleted successfully.')
    else:
      print(f'Failed to delete room: {response.status_code} - {response.text}')

  def main():
    room_name = 'New Room' # Replace with actual room name
    description = 'This is a test room.' # Replace with actual room description
    new_room_name = 'Updated Room Name' # Replace with actual new room name
    room_id = 1234 # Replace with actual room ID

    #Step 1
    create_room(room_name, description)

    #Step 2
    get_room_details(room_id)

    #Step 3
    rename_room(room_id, new_room_name)

    #Step 4
    archive_room(room_id)

    #Step 5
    delete_room(room_id)

  if __name__ == '__main__':
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create a room

A POST request is sent to [/api/2.0/files/rooms](/docspace/api-backend/usage-api/create-room.api.mdx) to create a new room.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createRoom(roomName, description) {
    const url = `${BASE_URL}/api/2.0/files/rooms`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify({ title: roomName, description }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Create room failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_room(room_name, description):
    url = f'{BASE_URL}/api/2.0/files/rooms'
    data = {
      'title': room_name,
      'description': description
    }
    response = requests.post(url, headers=HEADERS, json=data)
    if response.status_code == 200:
      room_id = response.json()['response']['id']
      print(f'Room created successfully: {room_id}')
      return room_id
    else:
      print(f'Failed to create room: {response.status_code} - {response.text}')
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Retrieve room details

A GET request is sent to [/api/2.0/files/rooms/:id](/docspace/api-backend/usage-api/get-room-info.api.mdx) to get room information.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getRoomDetails(roomId) {
    const url = `${BASE_URL}/api/2.0/files/rooms/${roomId}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Get room failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
    const roomInfo = await res.json();
    return roomInfo;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_room_details(room_id):
    url = f'{BASE_URL}/api/2.0/files/rooms/{room_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      room_info = response.json()
      print(f'Room details: {room_info}')
      return room_info
    else:
      print(f'Failed to get room details: {response.status_code} - {response.text}')
      return None
  ```

  </TabItem>
</Tabs>

## Step 3: Rename a room

A PUT request is sent to [/api/2.0/files/rooms/:id](/docspace/api-backend/usage-api/update-room.api.mdx) to rename a room.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function renameRoom(roomId, newName) {
    const url = `${BASE_URL}/api/2.0/files/rooms/${roomId}`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ title: newName }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Rename room failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def rename_room(room_id, new_name):
    url = f'{BASE_URL}/api/2.0/files/rooms/{room_id}'
    data = {
      'title': new_name
    }
    response = requests.put(url, headers=HEADERS, json=data)
    if response.status_code == 200:
      print(f'Room {room_id} renamed successfully.')
    else:
      print(f'Failed to rename room: {response.status_code} - {response.text}')
  ```

  </TabItem>
</Tabs>

## Step 4: Archive a room

A PUT request is sent to [/api/2.0/files/rooms/:id/archive](/docspace/api-backend/usage-api/archive-room.api.mdx) to archive a room.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function archiveRoom(roomId) {
    const url = `${BASE_URL}/api/2.0/files/rooms/${roomId}/archive`;
    const res = await fetch(url, { method: 'PUT', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Archive room failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def archive_room(room_id):
    url = f'{BASE_URL}/api/2.0/files/rooms/{room_id}/archive'
    response = requests.put(url, headers=HEADERS)
    if response.status_code == 200:
      print(f'Room {room_id} archived successfully.')
    else:
      print(f'Failed to archive room: {response.status_code} - {response.text}')
  ```

  </TabItem>
</Tabs>

## Step 5: Delete a room

A DELETE request is sent to [/api/2.0/files/rooms/:id](/docspace/api-backend/usage-api/delete-room.api.mdx) to remove a room.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function deleteRoom(roomId) {
    const url = `${BASE_URL}/api/2.0/files/rooms/${roomId}`;
    const res = await fetch(url, { method: 'DELETE', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Delete room failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_room(room_id):
    url = f'{BASE_URL}/api/2.0/files/rooms/{room_id}'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
      print(f'Room {room_id} deleted successfully.')
    else:
      print(f'Failed to delete room: {response.status_code} - {response.text}')
  ```

  </TabItem>
</Tabs>
