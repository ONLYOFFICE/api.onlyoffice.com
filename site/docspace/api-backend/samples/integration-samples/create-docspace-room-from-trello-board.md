# Create DocSpace room from Trello board

This integration retrieves the name of a Trello board and creates a new room in ONLYOFFICE DocSpace with the same title. It's helpful for mirroring Trello project structures into your document collaboration environment.

## How it works

- Fetch Trello board name - Get the board title using Trello's API.
- Create DocSpace room - Create a private collaboration room with the board name as the title.

<details>
  <summary>Full example</summary>

```py
import requests

# ONLYOFFICE DocSpace configuration
ONLYOFFICE_API_HOST = "your-docspace.onlyoffice.com"
ONLYOFFICE_API_KEY = "your_onlyoffice_api_key"

# Trello configuration
TRELLO_API_KEY = "your_trello_api_key"
TRELLO_TOKEN = "your_trello_token"
TRELLO_BOARD_ID = "your_board_id"

ONLYOFFICE_HEADERS = {
    "Authorization": f"Bearer {ONLYOFFICE_API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json"
}

# Step 1: Get Trello board name
def get_trello_board_name(board_id):
    url = f"https://api.trello.com/1/boards/{board_id}"
    params = {"key": TRELLO_API_KEY, "token": TRELLO_TOKEN}
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()["name"]
    else:
        print(f"Trello board fetch error: {response.status_code}")
        return None

# Step 2: Create a DocSpace room with board name
def create_docspace_room(room_title):
    url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/rooms"
    payload = {
        "title": room_title,
        "roomType": 2,  # Collaboration room
        "private": True
    }
    response = requests.post(url, headers=ONLYOFFICE_HEADERS, json=payload)
    if response.status_code == 200:
        print(f"Room created: {room_title}")
        return response.json()
    else:
        print(f"DocSpace room creation error: {response.status_code}, {response.text}")
        return None

# Run integration
if __name__ == "__main__":
    board_name = get_trello_board_name(TRELLO_BOARD_ID)
    if board_name:
        create_docspace_room(board_name)
```

</details>

## Before you start

1. Replace `your-docspace.onlyoffice.com` and `your_onlyoffice_api_key` with your actual DocSpace portal host and API key. Ensure you have the necessary permissions to perform user operations.
2. Before you can make requests to the API, you need to create a DocSpace API key. Check out the [API keys article](/docspace/api-backend/get-started/authentication/api-keys/) to learn how to obtain and use API keys.
3. Create a [Trello Developer App](https://developer.atlassian.com/cloud/trello/power-ups/rest-api-client/) to obtain an API key and token. Grant read access to cards and attachments by authorizing with `read` scope.
4. Replace `your_trello_api_key`, `your_trello_token`, and `your_board_id` with your actual Trello API key, token, and board ID.

## Step 1: Retrieve a Trello board name

Use a Trello API [`GET /boards/{board_id}`](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-get) request to get the board's title by its ID. This name will be used as the room title in DocSpace.

```py
# Step 1: Get Trello board name
def get_trello_board_name(board_id):
    url = f"https://api.trello.com/1/boards/{board_id}"
    params = {"key": TRELLO_API_KEY, "token": TRELLO_TOKEN}
    response = requests.get(url, params=params)
    if response.status_code == 200:
        return response.json()["name"]
    else:
        print(f"Trello board fetch error: {response.status_code}")
        return None
```

## Step 2: Create a DocSpace room

Use [`POST /api/2.0/files/rooms`](/docspace/api-backend/usage-api/create-room) to create a private collaboration room in DocSpace.
Retrieve metadata about the file attachments (name, ID, download URL) for further processing.

``` py
# Step 2: Create a DocSpace room with board name
def create_docspace_room(room_title):
    url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/rooms"
    payload = {
        "title": room_title,
        "roomType": 2,  # Collaboration room
        "private": True
    }
    response = requests.post(url, headers=ONLYOFFICE_HEADERS, json=payload)
    if response.status_code == 200:
        print(f"Room created: {room_title}")
        return response.json()
    else:
        print(f"DocSpace room creation error: {response.status_code}, {response.text}")
        return None

# Run integration
if __name__ == "__main__":
    board_name = get_trello_board_name(TRELLO_BOARD_ID)
    if board_name:
        create_docspace_room(board_name)
```
