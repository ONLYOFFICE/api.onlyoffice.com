# Authenticate a user

This example demonstrates how to authenticate a user in ONLYOFFICE DocSpace using the API and check the authentication with a token received.

## Before you start

Replace `https://yourportal.onlyoffice.com` with your actual DocSpace portal URL, replace `USER_CREDENTIALS` with your credentials.

<details>
  <summary>Full example</summary>

``` py
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

</details>

## Step 1: Authenticate a user

A POST request is sent to [/api/2.0/authentication](/docspace/api-backend/usage-api/authenticate-me.api.mdx) to authenticate with `USER_CREDENTIALS`.

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

A GET request is sent to [/api/2.0/authentication](/docspace/api-backend/usage-api/get-is-authentificated.api.mdx) to check authentication success.

``` py
def check_authentication(token):
    headers = {'Authorization': token}
    response = requests.get(f'{BASE_URL}/api/2.0/authentication', headers=headers)
    if response.status_code == 200:
        print(f'User is authenticated with token {token}.')
    else:
        print('User is not authenticated or token is invalid.')
```
