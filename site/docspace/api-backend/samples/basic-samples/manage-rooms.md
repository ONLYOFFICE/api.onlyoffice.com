# Manage rooms

This example demonstrates how to manage rooms in ONLYOFFICE DocSpace using the API. It covers creating, retrieving, renaming, archiving, and deleting rooms through API requests.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

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

</details>

## Step 1: Create a room

A POST request is sent to [/api/2.0/files/rooms](/docspace/api-backend/usage-api/create-room.api.mdx) to create a new room.

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

A GET request is sent to [/api/2.0/files/rooms/:id](/docspace/api-backend/usage-api/get-room-info.api.mdx) to get room information.

``` py
def get_room_details(room_id):
    url = f'{BASE_URL}/api/2.0/files/room/{room_id}'
    response = requests.get(url, headers=headers)
    room_info = response.json()
    return room_info
```

## Step 3: Rename a room

A PUT request is sent to [/api/2.0/files/rooms/:id](/docspace/api-backend/usage-api/update-room.api.mdx) to rename a room.

``` py
def rename_room(room_id, new_name):
    url = f'{BASE_URL}/api/2.0/files/room/{room_id}/rename'
    data = {
        'title': new_name
    }
    requests.put(url, headers=headers, json=data)
```

## Step 4: Archive a room

A PUT request is sent to [/api/2.0/files/rooms/:id/archive](/docspace/api-backend/usage-api/archive-room.api.mdx) to archive a room.

``` py
def archive_room(room_id):
    url = f'{BASE_URL}/api/2.0/files/room/{room_id}/archive'
    requests.put(url, headers=headers)
```

## Step 5: Delete a room

A DELETE request is sent to [/api/2.0/files/rooms/:id](/docspace/api-backend/usage-api/delete-room.api.mdx) to remove a room.

``` py
def delete_room(room_id):
    url = f'{BASE_URL}/api/2.0/files/room/{room_id}'
    requests.delete(url, headers=headers)
```
