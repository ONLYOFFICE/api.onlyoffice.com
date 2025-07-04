# Manage users

This example demonstrates how to manage user accounts in ONLYOFFICE DocSpace using the API. It covers creating, retrieving, terminating, and deleting users, following a structured administrative workflow.

The script performs the following operations in sequence:

- [Add a new user](#step-1-add-a-user) with a first name, last name, and email.
- [Fetch user details](#step-2-retrieve-a-user-by-id) using their unique ID.
- [Mark a user as terminated](#step-3-terminate-a-user) without deleting them.
- [Permanently remove the user](#step-4-delete-a-user-profile) from the system.

```py title="Python"
import requests

# Set API base URL
BASE_URL = 'https://yourportal.onlyoffice.com'
API_KEY = 'your_api_key'

# Headers with API key for authentication
HEADERS = {
    'Accept': 'application/json',
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Step 1: Create a new user
def create_user(first_name, last_name, email):
    url = f'{BASE_URL}/api/2.0/people'
    data = {
        'firstName': first_name,
        'lastName': last_name,
        'email': email
    }
    response = requests.post(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        return response.json()['response']['id']
    else:
        return None

# Step 2: Retrieve a user by ID
def get_user(user_id):
    url = f'{BASE_URL}/api/2.0/people/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        return response.json()
    else:
        return None

# Step 3: Terminate a user
def terminate_user(user_id):
    url = f'{BASE_URL}/api/2.0/people/status/Terminated'
    data = {'userIds': [user_id], 'resendAll': False}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        print(f'User {user_id} terminated successfully')
    else:
        print('Failed to terminate user:', response.status_code, response.text)

# Step 4: Delete user profile
def delete_user(user_id):
    url = f'{BASE_URL}/api/2.0/people/{user_id}'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
        print(f'User {user_id} deleted successfully')
    else:
        print('Failed to delete user:', response.status_code, response.text)

if __name__ == "__main__":
    # Step 1: Create a new user
    user_id = create_user('John', 'Doe', 'john.doe@example.com')

    if user_id:
        # Step 2: Retrieve user information
        print(get_user(user_id))
        
        # Step 3: Terminate the user
        terminate_user(user_id)

        # Step 4: Delete user profile
        delete_user(user_id)
```

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary permissions to perform user operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [authentication example](/docspace/api-backend/samples/authentication.md) to learn how to obtain and use access tokens.

## Step 1: Add a user

Use the [`POST /api/2.0/people`](/docspace/api-backend/usage-api/add-member.api.mdx) request to add a user.

``` py
def create_user(first_name, last_name, email):
    url = f'{BASE_URL}/api/2.0/people'
    data = {
        'firstName': first_name,
        'lastName': last_name,
        'email': email
    }
    response = requests.post(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        return response.json()['response']['id']
    else:
        return None
```

## Step 2: Retrieve a user by ID

Use the [`GET /api/2.0/people/{userid}`](/docspace/api-backend/usage-api/get-by-id.api.mdx) request to fetch user data.

``` py
def get_user(user_id):
    url = f'{BASE_URL}/api/2.0/people/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        return response.json()
    else:
        return None
```

## Step 3: Terminate a user

Use the [`PUT /api/2.0/people/status/Terminated`](/docspace/api-backend/usage-api/update-user-status.api.mdx) request to mark the user as terminated, meaning they cannot log in but are still present in the system.

``` py
def terminate_user(user_id):
    url = f'{BASE_URL}/api/2.0/people/status/Terminated'
    data = {'userIds': [user_id], 'resendAll': False}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        print(f'User {user_id} terminated successfully')
    else:
        print('Failed to terminate user:', response.status_code, response.text)
```

## Step 4: Delete a user profile

Use the [`DELETE /api/2.0/people/{userid}`](/docspace/api-backend/usage-api/delete-member.api.mdx) request to remove a user permanently.

``` py
def delete_user(user_id):
    url = f'{BASE_URL}/api/2.0/people/{user_id}'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
        print(f'User {user_id} deleted successfully')
    else:
        print('Failed to delete user:', response.status_code, response.text)
```
