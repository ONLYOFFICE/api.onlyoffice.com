# Get Current Token Permissions

This example demonstrates how to retrieve the list of permissions (scopes) associated with the currently authenticated token in ONLYOFFICE DocSpace. It helps verify which actions the token can perform (e.g., file access, room management, user operations).

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

# Step 1: Retrieve the current token's permissions
def get_token_permissions():
    url = f'{API_HOST}/api/2.0/keys/permissions'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
        permissions = response.json().get('response', [])
        print('Current Token Permissions:')
        for perm in permissions:
            print(f'• {perm}')
    else:
        raise Exception(f'Failed to get key permissions: {response.text}')

# Run the method
if __name__ == '__main__':
    get_token_permissions()
```

</details>

## How it works
A GET request is sent to [/api/2.0/keys/permissions](/docspace/api-backend/usage-api/get-all-permissions) to fetch the list of scopes granted to the current token.

No request body or parameters are required. The response includes permissions such as:

- `files:read`
- `files:write`
- `rooms:read`
- `accounts:read`