# List all API Keys

This example demonstrates how to retrieve all API keys associated with the current user in ONLYOFFICE DocSpace. The response includes metadata such as name, permissions, status, and expiration date.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

``` py
import requests

# Set your DocSpace portal URL and access token
API_HOST = 'https://yourportal.onlyoffice.com'
API_KEY = 'your_api_key'

# Headers with authorization token
HEADERS = {
    'Authorization': API_KEY
}

# Step 1: Get all API keys for the current user
def list_api_keys():
    url = f'{API_HOST}/api/2.0/keys'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
        keys = response.json().get('response', [])
        print(f'Found {len(keys)} API key(s):')
        for key in keys:
            print(f'\n• Name: {key.get('name')}')
            print(f'  Postfix: {key.get('keyPostfix')}')
            print(f'  Active: {key.get('isActive')}')
            print(f'  Permissions: {key.get('permissions')}')
            print(f'  Created on: {key.get('createOn')}')
            print(f'  Last used: {key.get('lastUsed')}')
            print(f'  Expires at: {key.get('expiresAt')}')
    else:
        raise Exception(f'Failed to retrieve API keys: {response.text}')

# Run the method
if __name__ == '__main__':
    list_api_keys()
```

</details>

## How it works

A GET request is sent to [/api/2.0/keys](/docspace/api-backend/usage-api/get-api-keys) to fetch all API keys created by the current user.

The response includes:

- `name`: Display name of the key
- `keyPostfix`: The postfix of the actual key string
- `isActive`: Indicates if the key is currently active
- `permissions`: List of allowed scopes
- `createOn`: Key creation date
- `lastUsed`: Timestamp of last usage
- `expiresAt`: Expiration timestamp