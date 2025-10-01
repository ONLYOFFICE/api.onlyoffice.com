# Add Trello users to DocSpace

This script automates the process of retrieving Trello users and adding them to the DocSpace. It ensures that all Trello team members are onboarded into DocSpace.

## How it works

- Retrieve Trello users - Fetches a list of users with their names and usernames.
- Add Trello users to the DocSpace - Trello usernames are used to create temporary emails.

<details>
  <summary>Full example</summary>

```py
import requests

# Trello API credentials
TRELLO_API_KEY = "your_trello_api_key"
TRELLO_TOKEN = "your_trello_token"
TRELLO_BOARD_ID = "your_board_id"
TRELLO_API_URL = "https://api.trello.com/1"

# DocSpace API credentials
ONLYOFFICE_API_HOST = "your-docspace.onlyoffice.com"
ONLYOFFICE_API_KEY = "your_onlyoffice_api_key"

# Headers for the DocSpace authentication
ONLYOFFICE_HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {ONLYOFFICE_API_KEY}",
    "Content-Type": "application/json"
}

# Step 1: Retrieve Trello users
def get_trello_users(board_id):
    url = f"{TRELLO_API_URL}/boards/{board_id}/members"
    params = {"key": TRELLO_API_KEY, "token": TRELLO_TOKEN}
    response = requests.get(url, params=params)

    if response.status_code == 200:
        users = response.json()
        return [{"name": user["fullName"], "username": user["username"]} for user in users]
    else:
        print(f"Failed to retrieve Trello users: {response.status_code} - {response.text}")
        return []

# Step 2: Add Trello users to the DocSpace
def add_user_to_docspace(name, username, password):
    url = f'https://{ONLYOFFICE_API_HOST}/api/2.0/people'
    data = {
        'password': password,
        'firstName': name,
        'lastName': '',
        'email': f'{username}@docspace.com'
    }
    response = requests.post(url, json=data, headers=ONLYOFFICE_HEADERS)
    if response.status_code == 200:
        user_id = response.json()['response']['id']
        print('User created successfully:', user_id)
        return user_id
    else:
        print('Failed to create user:', response.status_code, response.text)
        return None

if __name__ == '__main__':
    PASSWORD = 'DocSpace123' # Replace with a temporary password or generate unique

    trello_users = get_trello_users(TRELLO_BOARD_ID)

    for user in trello_users:
        add_user_to_docspace(user['name'], user['username'], PASSWORD)
```

</details>

## Before you start

1. Replace `your-docspace.onlyoffice.com` and `your_onlyoffice_api_key` with your actual DocSpace portal host and API key. Ensure you have the necessary permissions to perform user operations.
2. Before you can make requests to the API, you need to create a DocSpace API key. Check out the [API keys article](/docspace/api-backend/get-started/authentication/api-keys/) to learn how to obtain and use API keys.
3. Create a [Trello Developer App](https://developer.atlassian.com/cloud/trello/power-ups/rest-api-client/) to obtain an API key and token. Grant `read` access to the boards.
4. Replace `your_trello_api_key`, `your_trello_token`, and `your_board_id` with your actual Trello API key, token, and board ID.

## Step 1: Retrieve Trello users

Use a Trello API [`GET /boards/{board_id}/members`](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-members-get) request to get users from the Trello board.

```py
# Step 1: Retrieve Trello users
def get_trello_users(board_id):
    url = f"{TRELLO_API_URL}/boards/{board_id}/members"
    params = {"key": TRELLO_API_KEY, "token": TRELLO_TOKEN}
    response = requests.get(url, params=params)

    if response.status_code == 200:
        users = response.json()
        return [{"name": user["fullName"], "username": user["username"]} for user in users]
    else:
        print(f"Failed to retrieve Trello users: {response.status_code} - {response.text}")
        return []

if __name__ == '__main__':
    trello_users = get_trello_users(TRELLO_BOARD_ID)
```

## Step 2: Add Trello users to the DocSpace

Use a [`POST /api/2.0/people`](/docspace/api-backend/usage-api/add-member) request to add new DocSpace users.

``` py
# Step 2: Add Trello users to the DocSpace
def add_user_to_docspace(name, username, password):
    url = f'https://{ONLYOFFICE_API_HOST}/api/2.0/people'
    data = {
        'password': password,
        'firstName': name,
        'lastName': '',
        'email': f'{username}@docspace.com'
    }
    response = requests.post(url, json=data, headers=ONLYOFFICE_HEADERS)
    if response.status_code == 200:
        user_id = response.json()['response']['id']
        print('User created successfully:', user_id)
        return user_id
    else:
        print('Failed to create user:', response.status_code, response.text)
        return None

if __name__ == '__main__':
    PASSWORD = 'DocSpace123' # Replace with any temporary password or generate unique

    trello_users = get_trello_users(TRELLO_BOARD_ID)

    for user in trello_users:
        add_user_to_docspace(user['name'], user['username'], PASSWORD)
```
