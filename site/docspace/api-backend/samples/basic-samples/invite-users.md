# Invite users

This example automates the process of creating new users and sending them invitations in ONLYOFFICE DocSpace. It ensures that only newly created users receive invitations, avoiding unnecessary duplicate invites.

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

# Step 1: Create users with emails and return user data
def create_users(users):
    created_users = []
    for user in users:
        url = f'https://{API_HOST}/api/2.0/people'
        data = {
            'firstName': user['first_name'],
            'lastName': user['last_name'],
            'email': user['email']
        }
        response = requests.post(url, json=data, headers=HEADERS)
        if response.status_code == 200:
            user_data = response.json()['response']
            print(f'User created successfully: {user_data}')
            created_users.append(user_data)
        else:
            print(f'Failed to create user {user["email"]}: {response.status_code} - {response.text}')
    return created_users
 
# Step 2: Send invitations to newly created users
def send_invitations(users):
    url = f'https://{API_HOST}/api/2.0/people/invite'
    data = {
        "invitations": [{"email": user["email"], "type": "All"} for user in users]
    }
    response = requests.post(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        print(f'Invitations sent successfully to users.')
    else:
        print(f'Failed to send invitations: {response.status_code} - {response.text}')
 
if __name__ == "__main__":
    # List of users to create
    users = [
        # Enter your email for testing
        {"first_name": "Alice", "last_name": "Smith", "email": "alice.smith@example.com"},
        {"first_name": "Bob", "last_name": "Johnson", "email": "bob.johnson@example.com"}
    ]
    
    # Step 1: Create new users and get their data
    created_users = create_users(users)
    
    # Step 2: Send invitations to newly created users
    if created_users:
        send_invitations(created_users)
```

</details>

## Step 1: Create users

For each user, a POST request is sent to [/api/2.0/people](/docspace/api-backend/usage-api/add-member) with:

- `firstName`: User's first name.
- `lastName`: User's last name.
- `email`: User's email address.

The API returns users, which are required for further operations.

``` py
def create_users(users):
    created_users = []
    for user in users:
        url = f'https://{API_HOST}/api/2.0/people'
        data = {
            'firstName': user['first_name'],
            'lastName': user['last_name'],
            'email': user['email']
        }
        response = requests.post(url, json=data, headers=HEADERS)
        if response.status_code == 200:
            user_data = response.json()['response']
            print(f'User created successfully: {user_data}')
            created_users.append(user_data)
        else:
            print(f'Failed to create user {user["email"]}: {response.status_code} - {response.text}')
    return created_users
```

## Step 2: Send invitation emails

A POST request is sent to [/api/2.0/people/invite](/docspace/api-backend/usage-api/invite-users)

The API triggers an invitation email for each newly created user. This ensures that only new users receive an invitation, avoiding duplicate emails to existing users.

``` py
def send_invitations(users):
    url = f'https://{API_HOST}/api/2.0/people/invite'
    data = {
        "invitations": [{"email": user["email"], "type": "All"} for user in users]
    }
    response = requests.post(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        print(f'Invitations sent successfully to users.')
    else:
        print(f'Failed to send invitations: {response.status_code} - {response.text}')
```
