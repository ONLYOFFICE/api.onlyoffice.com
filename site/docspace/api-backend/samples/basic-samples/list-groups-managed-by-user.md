# List groups managed by a user

This example demonstrates how to retrieve the list of groups in ONLYOFFICE DocSpace that are managed by a specific user.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

``` py
import requests

# Set your DocSpace portal URL and API key
API_HOST = 'https://yourportal.onlyoffice.com'
API_KEY = 'your_api_key'

# Headers with API key
HEADERS = {
    'Accept': 'application/json',
    'Authorization': f'Bearer {API_KEY}'
}

# Step 1: Get groups managed by a specific user
def get_managed_groups(manager_id: str):
    url = f'{API_HOST}/api/2.0/group'
    params = {
        'manager': True,      # return groups where the given user is a manager
        'userId': manager_id  # manager's UUID
    }
    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
        groups = response.json().get('response', [])
        print(f'Found {len(groups)} group(s) managed by {manager_id}:')
        for g in groups:
            print(f'- {g.get('id')} — {g.get('name')}')
        return groups
    else:
        raise Exception(f'Failed to list managed groups: {response.status_code} {response.text}')

# Run the method
if __name__ == '__main__':
    get_managed_groups('4c65a238-ca50-4374-b904-0d51d4c1822b')  # Replace with manager UUID
```

</details>

## How it works

A GET request is sent to [/api/2.0/group](/docspace/api-backend/usage-api/get-group-by-user-id) with the following query parameters:

- `manager` — set to `true` to filter groups by manager.
- `userId` — UUID of the user who manages the groups.

If successful, the API returns an array of group objects. Typical fields include:

- `id` — group UUID
- `name` — group display name
