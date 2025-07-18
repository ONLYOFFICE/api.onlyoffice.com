# Manage room links

This example demonstrates how to set and retrieve room invitation or external links in ONLYOFFICE DocSpace using the API. These links provide access to rooms based on specified permissions.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

``` py
import requests

# Set API base URL
API_HOST = 'yourportal.onlyoffice.com'
API_KEY = 'your_api_key'

# Headers with API key for authentication
HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Step 1: Set a room access link
def set_room_link(room_id, access_level=2, expiration_date=None, internal=True, primary=False):
    url = f'https://{API_HOST}/api/2.0/files/rooms/{room_id}/links'
    data = {
        'access': access_level,
        'expirationDate': expiration_date,
        'internal': internal,
        'primary': primary
    }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
        return response.json()
    return None

# Step 2: Retrieve all links for a room
def get_room_links(room_id):
    url = f'https://{API_HOST}/api/2.0/files/rooms/{room_id}/links'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
        return response.json()
    return None

if __name__ == "__main__":
    room_id = '123456'  # Replace with your actual room ID

    set_room_link(room_id, access_level=2, internal=True, primary=False)
    get_room_links(room_id)
```

</details>

## Step 1: Set a room link

A PUT request is sent to [/api/2.0/files/rooms/:roomId/links](/docspace/api-backend/usage-api/set-room-link) with:

- `access`: Access level (e.g., 2 for editing).
- `expirationDate`: Optional expiration date (ISO 8601 format).
- `internal`: Indicates if the link is internal.
- `primary`: Marks the link as primary if `true`.

``` py
def set_room_link(room_id, access_level=2, expiration_date=None, internal=True, primary=False):
    url = f'https://{API_HOST}/api/2.0/files/rooms/{room_id}/links'
    data = {
        'access': access_level,
        'expirationDate': expiration_date,
        'internal': internal,
        'primary': primary
    }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
        return response.json()
    return None
```

## Step 2: Get all room links

A GET request is sent to the same endpoint to retrieve all configured room links.

``` py
def get_room_links(room_id):
    url = f'https://{API_HOST}/api/2.0/files/rooms/{room_id}/links'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
        return response.json()
    return None
```
