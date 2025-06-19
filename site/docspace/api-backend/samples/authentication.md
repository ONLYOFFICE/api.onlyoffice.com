# Authenticate a user

This example demonstrates how to authenticate a user in ONLYOFFICE DocSpace using the API.

The script performs the following operations in sequence:

- [Authenticate a user](#step-1-authenticate-a-user) using `userName` and `password` to generate an access token.
- [Check authentication](#step-2-check-authentication) with a token received.

```py title="Python"
import requests

# Set API base URL
BASE_URL = 'https://yourportal.onlyoffice.com'

# User credentials for authentication
USER_CREDENTIALS = {
    'userName': 'your-user-name',
    'password': 'your-password',
}

# Step 1: Authenticate with your login and password
def authenticate():
    response = requests.post(f'{BASE_URL}/api/2.0/authentication', json=USER_CREDENTIALS)
    if response.status_code == 200:
        auth_token = response.json().get('response', {}).get('token')
        if auth_token:
            return auth_token
    return None

# Step 2: Check authentication with a token you received
def check_authentication(token):
    headers = {'Authorization': token}
    response = requests.get(f'{BASE_URL}/api/2.0/authentication', headers=headers)
    if response.status_code == 200:
        print(f'User is authenticated with token {token}.')
    else:
        print('User is not authenticated or token is invalid.')

if __name__ == '__main__':
    # Step 1
    token = authenticate()

    if token:
        # Step 2
        check_authentication(token)
```

## Before you start

Replace `https://yourportal.onlyoffice.com` with your actual DocSpace portal URL, replace `USER_CREDENTIALS` with your credentials.

## Step 1: Authenticate a user

Use the [`POST /api/2.0/authentication`](/docspace/api-backend/usage-api/authenticate-me.api.mdx) request to authenticate with `USER_CREDENTIALS`.

``` py
def authenticate():
    response = requests.post(f'{BASE_URL}/api/2.0/authentication', json=USER_CREDENTIALS)
    if response.status_code == 200:
        auth_token = response.json().get('response', {}).get('token')
        if auth_token:
            return auth_token
    return None
```

## Step 2: Check authentication

Use the [`GET /api/2.0/authentication`](/docspace/api-backend/usage-api/get-is-authentificated.api.mdx) request to check authentication success.

``` py
def check_authentication(token):
    headers = {'Authorization': token}
    response = requests.get(f'{BASE_URL}/api/2.0/authentication', headers=headers)
    if response.status_code == 200:
        print(f'User is authenticated with token {token}.')
    else:
        print('User is not authenticated or token is invalid.')
```
