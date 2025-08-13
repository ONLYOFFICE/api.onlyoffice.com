# Create an API Key

This example demonstrates how to programmatically generate an API key in ONLYOFFICE DocSpace with specific permissions and an expiration period. This is useful when integrating external systems or bots with restricted access scopes.

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

# Step 1: Create an API key
def create_api_key(name, permissions, expires_in_days):
    url = f'{API_HOST}/api/2.0/keys'
    payload = {
        'name': name,
        'permissions': permissions,
        'expiresInDays': expires_in_days
    }

    response = requests.post(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
        data = response.json().get('response', {})
        print('API Key created successfully:')
        print(f'• Name: {data.get('name')}')
        print(f'• Key: {data.get('key')}')
        print(f'• Postfix: {data.get('keyPostfix')}')
        print(f'• Permissions: {data.get('permissions')}')
        print(f'• Expires: {data.get('expiresAt')}')
    else:
        print(f'Failed to create API key: {response.status_code}')
        print('Response:', response.text)

# Run the method
if __name__ == '__main__':
    create_api_key(
        name='Integration Bot',
        permissions=['files:read', 'files:write', 'rooms:read', 'rooms:write'],
        expires_in_days=30
    )
```

</details>

## How it works
A POST request is sent to [/api/2.0/keys](/docspace/api-backend/usage-api/create-api-key) with the following payload:

- `name`: Descriptive name for the key (e.g., "Integration Bot").
- `permissions`: List of allowed scopes (e.g., files:read, rooms:write).
- `expiresInDays`: Number of days until the key expires.

If successful, the API returns metadata about the created key, including:

- `name` — Key display name.
- `key` — Generated API key.
- `keyPostfix` — Postfix for partial identification.
- `permissions` — Assigned scopes.
- `expiresAt` — Expiration date.