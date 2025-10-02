# Add DocSpace users to Trello

This script automates the process of retrieving DocSpace users and adding them to a Trello board. It ensures that all DocSpace team members are onboarded into Trello for project management.

## How it works

- Retrieve DocSpace users - Fetches a list of users with their emails from DocSpace.
- Check if the user exists in Trello - Trello does not allow account creation, so users must already have a Trello account.
- Add users to a Trello board - Users are assigned to the specified Trello board with the "normal" role.

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

# Step 1: Retrieve DocSpace users
def get_docspace_users():
    url = f'https://{ONLYOFFICE_API_HOST}/api/2.0/people'
    response = requests.get(url, headers=ONLYOFFICE_HEADERS)
    
    if response.status_code == 200:
        return [{'name': user['firstName'], 'email': user['email']} for user in response.json()['response']]
    print(f'Failed to retrieve DocSpace users: {response.status_code} - {response.text}')
    return []

# Step 2: Add DocSpace users to the Trello board
def add_user_to_board(board_id, email):
    url = f"{TRELLO_API_URL}/boards/{board_id}/members"
    params = {
        "key": TRELLO_API_KEY,
        "token": TRELLO_TOKEN,
        "email": email,
        "type": "normal"  # "admin", "normal", or "observer"
    }
    response = requests.put(url, params=params)

    if response.status_code == 200:
        print(f"User {email} added to Trello board successfully.")
    else:
        print(f"Failed to add user {email} to Trello board: {response.status_code} - {response.text}")


if __name__ == '__main__':
    docspace_users = get_docspace_users()
    
    for user in docspace_users:
        print(user)
        add_user_to_board(TRELLO_BOARD_ID, user['email'])
```

</details>

## Before you start

1. Replace `your-docspace.onlyoffice.com` and `your_onlyoffice_api_key` with your actual DocSpace portal host and API key. Ensure you have the necessary permissions to perform user operations.
2. Before you can make requests to the API, you need to create a DocSpace API key. Check out the [API keys article](/docspace/api-backend/get-started/authentication/api-keys/) to learn how to obtain and use API keys.
3. Create a [Trello Developer App](https://developer.atlassian.com/cloud/trello/power-ups/rest-api-client/) to obtain an API key and token. Grant `write` access to boards.
4. Replace `your_trello_api_key`, `your_trello_token`, and `your_board_id` with your actual Trello API key, token, and board ID.

## Step 1: Retrieve DocSpace users

Use a [`GET /api/2.0/people`](/docspace/api-backend/usage-api/get-all-profiles) request to retrieve DocSpace users.

```py
# Step 1: Retrieve DocSpace users
def get_docspace_users():
    url = f'https://{DOCSPACE_API_KEY}/api/2.0/people'
    response = requests.get(url, headers=DOCSPACE_HEADERS)
    
    if response.status_code == 200:
        return [{'name': user['firstName'], 'email': user['email']} for user in response.json()['response']]
    print(f'Failed to retrieve DocSpace users: {response.status_code} - {response.text}')
    return []

if __name__ == '__main__':
    docspace_users = get_docspace_users()
```

## Step 2: Add DocSpace users to the Trello board

Use a Trello API [`PUT /boards/{board_id}/members`](https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-members-put) request to add DocSpace users to the Trello board.

``` py
# Step 2: Add DocSpace users to the Trello board
def add_user_to_board(board_id, email):
    url = f"{TRELLO_API_URL}/boards/{board_id}/members"
    params = {
        "key": TRELLO_API_KEY,
        "token": TRELLO_TOKEN,
        "email": email,
        "type": "normal"  # "admin", "normal", or "observer"
    }
    response = requests.put(url, params=params)

    if response.status_code == 200:
        print(f"User {email} added to Trello board successfully.")
    else:
        print(f"Failed to add user {email} to Trello board: {response.status_code} - {response.text}")


if __name__ == '__main__':
    docspace_users = get_docspace_users()
    
    for user in docspace_users:
        print(user)
        add_user_to_board(TRELLO_BOARD_ID, user['email'])
```
