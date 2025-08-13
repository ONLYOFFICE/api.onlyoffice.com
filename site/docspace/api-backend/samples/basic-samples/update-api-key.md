# Update an API Key

This example demonstrates how to update an existing API key in DocSpace using the API. You can change the name, permissions, or status of the key by providing its unique ID (UUID).

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
    'Authorization': API_KEY,
    'Content-Type': 'application/json'
}

# Step 1: Update an API key
def update_api_key(key_id, new_name, new_permissions, is_active=True):
    url = f'{API_HOST}/api/2.0/keys/{key_id}'
    payload = {
        'name': new_name,
        'permissions': new_permissions,
        'isActive': is_active
    }

    response = requests.put(url, headers=HEADERS, json=payload)

    if response.status_code == 200 and response.json().get('response') is True:
        print('API key updated successfully.')
    else:
        raise Exception(f'Failed to update API key: {response.text}')

# Example usage
if __name__ == '__main__':
    update_api_key(
        key_id='your_key_uuid',
        new_name='Updated Integration Bot Key',
        new_permissions=[
            'files:read',
            'files:write',
            'rooms:read',
            'rooms:write',
            'accounts:read'
        ],
        is_active=True
    )
```

</details>

## How it works

A PUT request is sent to [/api/2.0/keys/:keyId](/docspace/api-backend/usage-api/update-api-key) with the following parameters:

- `name`: Updated name for the key.
- `permissions`: Updated list of permission scopes.
- `isActive`: Boolean flag to activate or deactivate the key.

The request must include the UUID of the API key in the path (`:keyId`).