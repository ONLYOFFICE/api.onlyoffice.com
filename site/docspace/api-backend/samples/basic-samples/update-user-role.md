# Update user role

This example demonstrates how to automate user onboarding in ONLYOFFICE DocSpace using the API. It covers creating a user, retrieving their profile, and updating their role.

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
    'Accept': 'application/json',
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}
 
# Step 1: Create a new user
def create_user(first_name, last_name, email):
    url = f'https://{API_HOST}/api/2.0/people'
    data = {
        'firstName': first_name,
        'lastName': last_name,
        'email': email
    }
    response = requests.post(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        user_id = response.json()['response']['id']
        print(f'User created successfully: {user_id}')
        return user_id
    else:
        print(f'Failed to create user: {response.status_code} - {response.text}')
        return None
 
# Step 2: Retrieve a user by ID
def get_user(user_id):
    url = f'https://{API_HOST}/api/2.0/people/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        user_data = response.json()
        print(f'User retrieved: {user_data}')
        return user_data
    else:
        print(f'Failed to retrieve user: {response.status_code} - {response.text}')
        return None
  
# Step 3: Update user role
def update_user_role(user_id, role):
    url = f'https://{API_HOST}/api/2.0/people/{user_id}'
    data = {'role': role}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        print(f'User {user_id} role updated to {role}')
    else:
        print('Failed to update user role:', response.status_code, response.text)

if __name__ == "__main__":
    # Step 1: Create a new user
    user_id = create_user("John", "Doe", "john.doe@example.com")
 
    if user_id:
        # Step 2: Retrieve user information
        get_user(user_id)

        # Step 3: Update user role
        update_user_role(user_id, "Manager")
```

</details>

## Step 1: Create a user

A POST request is sent to [/api/2.0/people](/docspace/api-backend/usage-api/add-member) with:

- `firstName`: The user's first name.
- `lastName`: The user's last name.
- `email`: The user's email address.

The API returns a user ID, which is required for further operations.

``` py
def create_user(first_name, last_name, email):
    url = f'https://{API_HOST}/api/2.0/people'
    data = {
        'firstName': first_name,
        'lastName': last_name,
        'email': email
    }
    response = requests.post(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        user_id = response.json()['response']['id']
        print(f'User created successfully: {user_id}')
        return user_id
    else:
        print(f'Failed to create user: {response.status_code} - {response.text}')
        return None

if __name__ == "__main__":
    # Step 1: Create a new user
    user_id = create_user("John", "Doe", "john.doe@example.com")
```

## Step 2: Retrieve a user by ID

A GET request is sent to [/api/2.0/people/:userId](/docspace/api-backend/usage-api/get-profile-by-user-id) to fetch user details.

The response includes the user's profile information such as `name`, `email`, and `assigned roles`.

This step ensures that the user exists before making any updates or deletions.

``` py
def get_user(user_id):
    url = f'https://{API_HOST}/api/2.0/people/{user_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        user_data = response.json()
        print(f'User retrieved: {user_data}')
        return user_data
    else:
        print(f'Failed to retrieve user: {response.status_code} - {response.text}')
        return None

if __name__ == "__main__":
    user_id = create_user("John", "Doe", "john.doe@example.com")
 
    if user_id:
        # Step 2: Retrieve user information
        get_user(user_id)
```

## Step 3: Update user role

A PUT request is sent to [/api/2.0/people/:userid](/docspace/api-backend/usage-api/update-member).

The request updates the user's profile, applying the new role or permissions.

``` py
def update_user_role(user_id, role):
    url = f'https://{API_HOST}/api/2.0/people/{user_id}'
    data = {'role': role}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        print(f'User {user_id} role updated to {role}')
    else:
        print('Failed to update user role:', response.status_code, response.text)

if __name__ == "__main__":
    user_id = create_user("John", "Doe", "john.doe@example.com")
    if user_id:
        get_user(user_id)

        # Step 3: Update user role
        update_user_role(user_id, "Manager")
```
