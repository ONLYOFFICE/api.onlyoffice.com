# Update group manager

This example demonstrates how to update group manager in ONLYOFFICE DocSpace.

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

# Step 1: Create a new group and add members
def create_group(group_name, manager_id, member_ids):
    url = f'https://{API_HOST}/api/2.0/group'
    data = {
        'groupName': group_name,
        'groupManager': manager_id,
        'members': member_ids
    }
    response = requests.post(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        group_id = response.json()['response']['id']
        print('Group created successfully:', group_id)
        return group_id
    else:
        print('Failed to create group:', response.status_code, response.text)
 
# Step 2: Reassign group ownership
def reassign_group_manager(group_id, new_manager_id):
    url = f'https://{API_HOST}/api/2.0/group/{group_id}'
    data = {'groupManager': new_manager_id}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        print(f'Group {group_id} manager reassigned successfully to {new_manager_id}')
    else:
        print(f'Failed to reassign group manager: {response.status_code} - {response.text}')
    
if __name__ == "__main__":
    manager_user_id = "10001"
    user_id = "10002"

    # Step 1: Create a new group
    group_id = create_group("Development Team", manager_user_id, [manager_user_id, user_id])

    if group_id:
        # Step 2: Reassign group ownership to user
        reassign_group_manager(group_id, user_id)
```

</details>

## Step 1: Create a group

A POST request is sent to [/api/2.0/group](/docspace/api-backend/usage-api/add-group) with:

- `groupName`: A new group name.
- `groupManager`: The user ID of the group manager.
- `members`: A list of user IDs to be added to the group.

The API returns a group ID, which is required for further operations.

``` py
def create_group(group_name, manager_id, member_ids):
    url = f'https://{API_HOST}/api/2.0/group'
    data = {
        'groupName': group_name,
        'groupManager': manager_id,
        'members': member_ids
    }
    response = requests.post(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        group_id = response.json()['response']['id']
        print('Group created successfully:', group_id)
        return group_id
    else:
        print('Failed to create group:', response.status_code, response.text)
 
if __name__ == "__main__":
    manager_user_id = "10001"
    user_id = "10002"

    # Step 1: Create a new group
    group_id = create_group("Development Team", manager_user_id, [manager_user_id, user_id])
```

## Step 2: Reassign group ownership

A PUT request is sent to [/api/2.0/group/:id](/docspace/api-backend/usage-api/update-group) with:

- `group_id`: The group ID.
- `groupManager`: The user ID of the new group manager.

``` py
def reassign_group_manager(group_id, new_manager_id):
    url = f'https://{API_HOST}/api/2.0/group/{group_id}'
    data = {'groupManager': new_manager_id}
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        print(f'Group {group_id} manager reassigned successfully to {new_manager_id}')
    else:
        print(f'Failed to reassign group manager: {response.status_code} - {response.text}')
    
if __name__ == "__main__":
    manager_user_id = "10001"
    user_id = "10002"

    group_id = create_group("Development Team", manager_user_id, [manager_user_id, user_id])

    if group_id:
        # Step 2: Reassign group ownership to another user
        reassign_group_manager(group_id, user_id)
```
