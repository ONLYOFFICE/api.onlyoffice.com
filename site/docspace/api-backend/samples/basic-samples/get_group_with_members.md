# Get a group with members

This example demonstrates how to retrieve a group by ID in ONLYOFFICE DocSpace and include its members in the response.

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
GROUP_ID = '08e455dc-98c4-4390-b36f-54757080149c'  # Replace with your actual group ID

# Headers with API key
headers = {
    'Authorization': API_KEY
}

# Step 1: Get group by ID with members included
def get_group_with_members(group_id):
    url = f'{API_HOST}/api/2.0/group/{group_id}'
    params = {'includeMembers': True}

    response = requests.get(url, headers=headers, params=params)

    if response.status_code == 200:
        group = response.json().get('response', {})
        print(f'Group: {group.get('name')}')
        print('Members:')
        for m in group.get('members', []):
            print(f'- {m.get('id')} — {m.get('displayName')}')
    else:
        raise Exception(f'Failed to get group: {response.status_code} {response.text}')

# Run the method
if __name__ == '__main__':
    print('Getting group with members...')
    get_group_with_members(GROUP_ID)
```

</details>

## How it works

A GET request is sent to [/api/2.0/group/:id](/docspace/api-backend/usage-api/get-group) with the following query parameter:

- `includeMembers: true` — include the list of group members in the response.

If successful, the API returns group details such as:

- `name` — group display name
- `members` — array of member objects, each containing:
    - `id` — unique member identifier (UUID)
    - `displayName` — full name of the member