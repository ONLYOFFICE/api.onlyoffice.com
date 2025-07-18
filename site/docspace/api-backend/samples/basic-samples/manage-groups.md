# Manage groups

This example demonstrates how to manage groups in ONLYOFFICE DocSpace using the API. It covers creating, retrieving, updating, and deleting groups through API requests. The script follows a logical sequence to demonstrate how to interact with the group management system in a real-world scenario.

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

# Step 1: Create a new group
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
 
# Step 2: Retrieve group by ID
def get_group_by_id(group_id):
    url = f'https://{API_HOST}/api/2.0/group/{group_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        group = response.json()
        print(group)
        return group
    else:
        print('Failed to get group:', response.status_code, response.text)
 
# Step 3: Update an existing group
def update_group(group_id, new_group_name):
    url = f'https://{API_HOST}/api/2.0/group/{group_id}'
    data = {
        'groupName': new_group_name
    }
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        group_id = response.json()['response']['id']
        print('Group updated successfully:', group_id)
        return group_id
    else:
        print('Failed to update group:', response.status_code, response.text)
 
# Step 4: Delete a group
def delete_group(group_id):
    url = f'https://{API_HOST}/api/2.0/group/{group_id}'
    response = requests.delete(url, headers=HEADERS)
    print(response.status_code)
 
if __name__ == "__main__":
    group_name = "New Group" # Replace with actual group name
    manager_id = "10001"  # Replace with actual manager ID
    member_ids = ["10001", "10002"]  # Replace with actual member IDs
    # Step 1: Create a new group
    group_id = create_group(group_name, manager_id, member_ids)
 
    # Step 2: Retrieve group details by ID
    get_group_by_id(group_id)
 
    # Step 3: Update the newly created group
    update_group(group_id, "Updated Group Name")
    
    # Step 4: Delete the newly created group
    delete_group(group_id)
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
    group_name = "New Group" # Replace with actual group name
    manager_id = "10001"  # Replace with actual manager ID
    member_ids = ["10001", "10002"]  # Replace with actual member IDs

    # Step 1: Create a new group
    group_id = create_group(group_name, manager_id, member_ids)
```

## Step 2: Retrieve a group by ID

A GET request is sent to [/api/2.0/group/:id](/docspace/api-backend/usage-api/get-group) to fetch group details.

The response includes the group's information.

This step ensures that the group exists before making any updates or deletions.

``` py
def get_group_by_id(group_id):
    url = f'https://{API_HOST}/api/2.0/group/{group_id}'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        group = response.json()
        print(group)
        return group
    else:
        print('Failed to get group:', response.status_code, response.text)


if __name__ == "__main__":
    group_name = "New Group" # Replace with actual group name
    manager_id = "10001"  # Replace with actual manager ID
    member_ids = ["10001", "10002"]  # Replace with actual member IDs

    group_id = create_group(group_name, manager_id, member_ids)
 
    # Step 2: Retrieve group details by ID
    get_group_by_id(group_id)
```

## Step 3: Update a group

A PUT request is sent to [/api/2.0/group/:id](/docspace/api-backend/usage-api/update-group).

The request updates the group details and returns a confirmation if successful.

This step simulates renaming or modifying the existing group's properties.

``` py
def update_group(group_id, new_group_name):
    url = f'https://{API_HOST}/api/2.0/group/{group_id}'
    data = {
        'groupName': new_group_name
    }
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
        group_id = response.json()['response']['id']
        print('Group updated successfully:', group_id)
        return group_id
    else:
        print('Failed to update group:', response.status_code, response.text)

if __name__ == "__main__":
    group_name = "New Group" # Replace with actual group name
    manager_id = "10001"  # Replace with actual manager ID
    member_ids = ["10001", "10002"]  # Replace with actual member IDs

    group_id = create_group(group_name, manager_id, member_ids)
    get_group_by_id(group_id)
 
    # Step 3: Update the newly created group
    update_group(group_id, "Updated Group Name")
```

## Step 4: Delete a group

A DELETE request is sent to [/api/2.0/group/:id](/docspace/api-backend/usage-api/delete-group).

The response confirms the deletion, ensuring that the group no longer appears in the list of groups.

This step is crucial for cleaning up unused or test data.

``` py
def delete_group(group_id):
    url = f'https://{API_HOST}/api/2.0/group/{group_id}'
    response = requests.delete(url, headers=HEADERS)
    print(response.status_code)
 
if __name__ == "__main__":
    group_name = "New Group" # Replace with actual group name
    manager_id = "10001"  # Replace with actual manager ID
    member_ids = ["10001", "10002"]  # Replace with actual member IDs

    group_id = create_group(group_name, manager_id, member_ids)
    get_group_by_id(group_id)
    update_group(group_id, "Updated Group Name")
    
    # Step 4: Delete the newly created group
    delete_group(group_id)
```
