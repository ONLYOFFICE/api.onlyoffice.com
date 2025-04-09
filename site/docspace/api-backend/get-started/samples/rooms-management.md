---
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rooms Management
This example demonstrates how to:
- Create a Room: Add a new room in DocSpace.
- Retrieve Room Information: Get details of a specific room.
- Rename a Room: Change the name of an existing room.
- Archive a Room: Move a room to archive.
- Delete a Room: Remove a room from the system.

<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    import requests

    BASE_URL = 'https://yourportal.onlyoffice.com'
    API_KEY = 'YOUR_API_KEY'
    HEADERS = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json'
    }

    def create_room(room_name, description):
        url = f'{BASE_URL}/api/2.0/files/room'
        data = {
            'title': room_name,
            'description': description
        }
        requests.post(url, headers=HEADERS, json=data)

    def get_room_details(room_id):
        url = f'{BASE_URL}/api/2.0/files/room/{room_id}'
        response = requests.get(url, headers=headers)
        room_info = response.json()
        return room_info

    def rename_room(room_id, new_name):
        url = f'{BASE_URL}/api/2.0/files/room/{room_id}/rename'
        data = {
            'title': new_name
        }
        requests.put(url, headers=headers, json=data)

    def archive_room(room_id):
        url = f'{BASE_URL}/api/2.0/files/room/{room_id}/archive'
        requests.put(url, headers=headers)

    def delete_room(room_id):
        url = f'{BASE_URL}/api/2.0/files/room/{room_id}'
        requests.delete(url, headers=headers)

    def main():
        room_name = 'New Room' # Replace with actual room name
        description = 'This is a test room.' # Replace with actual room description
        new_room_name = 'Updated Room Name' # Replace with actual new room name
        room_id = 1234  # Replace with actual room ID

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
    ```
  </TabItem>
</Tabs>

## Before you start

1.	Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2.	Before you can make requests to the API, you need to authenticate. Check out the [`authentication example`](../../../../docspace/api-backend/get-started/samples/authentication.md) to learn how to obtain and use access tokens.

## Step 1: Create a Room
Use [`POST /api/2.0/files/rooms`](../../../../docspace/api-backend/usage-api/create-room.api.mdx) request to create a new room.
<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    def create_room(room_name, description):
        url = f'{BASE_URL}/api/2.0/files/room'
        data = {
            'title': room_name,
            'description': description
        }
        requests.post(url, headers=headers, json=data)
        ```
  </TabItem>
</Tabs>


## Step 2: Retrieve Room Details
Use [`GET /api/2.0/files/rooms/{id}`](../../../../docspace/api-backend/usage-api/get-room-info.api.mdx) request to get room information.
<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    def get_room_details(room_id):
        url = f'{BASE_URL}/api/2.0/files/room/{room_id}'
        response = requests.get(url, headers=headers)
        room_info = response.json()
        return room_info
        ```
  </TabItem>
</Tabs>

## Step 3: Rename a Room
Use [`PUT /api/2.0/files/rooms/{id}`](../../../../docspace/api-backend/usage-api/update-room.api.mdx) request to rename a room.
<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    def rename_room(room_id, new_name):
        url = f'{BASE_URL}/api/2.0/files/room/{room_id}/rename'
        data = {
            'title': new_name
        }
        requests.put(url, headers=headers, json=data)
    ```
  </TabItem>
</Tabs>

## Step 4: Archive a Room
Use [`PUT /api/2.0/files/rooms/{id}/archive`](../../../../docspace/api-backend/usage-api/archive-room.api.mdx) request to archive a room.
<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    def archive_room(room_id):
        url = f'{BASE_URL}/api/2.0/files/room/{room_id}/archive'
        requests.put(url, headers=headers)
    ```
  </TabItem>
</Tabs>

## Step 5: Delete a Room
Use [`DELETE /api/2.0/files/rooms/{id}`](../../../../docspace/api-backend/usage-api/delete-room.api.mdx) request to remove a room.
<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    def delete_room(room_id):
        url = f'{BASE_URL}/api/2.0/files/room/{room_id}'
        requests.delete(url, headers=headers)
    ```
  </TabItem>
</Tabs>