# Manage rooms

This example demonstrates how to:

- [Add a new room](#step-1-create-a-room) in DocSpace.
- [Get details](#step-2-retrieve-room-details) of a specific room.
- [Change the name](#step-3-rename-a-room) of an existing room.
- [Move a room to archive](#step-4-archive-a-room).
- [Remove a room](#step-5-delete-a-room) from the system.

```py title="Python"
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
    url = f'{BASE_URL}/api/2.0/files/room'
    data = {
        'title': room_name,
        'description': description
    }
    requests.post(url, headers=HEADERS, json=data)

# Step 2: Retrieve room details
def get_room_details(room_id):
    url = f'{BASE_URL}/api/2.0/files/room/{room_id}'
    response = requests.get(url, headers=headers)
    room_info = response.json()
    return room_info

# Step 3: Rename a room
def rename_room(room_id, new_name):
    url = f'{BASE_URL}/api/2.0/files/room/{room_id}/rename'
    data = {
        'title': new_name
    }
    requests.put(url, headers=headers, json=data)

# Step 4: Archive a room
def archive_room(room_id):
    url = f'{BASE_URL}/api/2.0/files/room/{room_id}/archive'
    requests.put(url, headers=headers)

# Step 5: Delete a room
def delete_room(room_id):
    url = f'{BASE_URL}/api/2.0/files/room/{room_id}'
    requests.delete(url, headers=headers)

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
```

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [authentication example](/docspace/api-backend/samples/authentication.md) to learn how to obtain and use access tokens.

## Step 1: Create a room

Use the [`POST /api/2.0/files/rooms`](/docspace/api-backend/usage-api/create-room.api.mdx) request to create a new room.

``` py
def create_room(room_name, description):
    url = f'{BASE_URL}/api/2.0/files/room'
    data = {
        'title': room_name,
        'description': description
    }
    requests.post(url, headers=headers, json=data)
```

## Step 2: Retrieve room details

Use the [`GET /api/2.0/files/rooms/{id}`](/docspace/api-backend/usage-api/get-room-info.api.mdx) request to get room information.

``` py
def get_room_details(room_id):
    url = f'{BASE_URL}/api/2.0/files/room/{room_id}'
    response = requests.get(url, headers=headers)
    room_info = response.json()
    return room_info
```

## Step 3: Rename a room

Use the [`PUT /api/2.0/files/rooms/{id}`](/docspace/api-backend/usage-api/update-room.api.mdx) request to rename a room.

``` py
def rename_room(room_id, new_name):
    url = f'{BASE_URL}/api/2.0/files/room/{room_id}/rename'
    data = {
        'title': new_name
    }
    requests.put(url, headers=headers, json=data)
```

## Step 4: Archive a room

Use the [`PUT /api/2.0/files/rooms/{id}/archive`](/docspace/api-backend/usage-api/archive-room.api.mdx) request to archive a room.

``` py
def archive_room(room_id):
    url = f'{BASE_URL}/api/2.0/files/room/{room_id}/archive'
    requests.put(url, headers=headers)
```

## Step 5: Delete a room

Use the [`DELETE /api/2.0/files/rooms/{id}`](/docspace/api-backend/usage-api/delete-room.api.mdx) request to remove a room.

``` py
def delete_room(room_id):
    url = f'{BASE_URL}/api/2.0/files/room/{room_id}'
    requests.delete(url, headers=headers)
```
