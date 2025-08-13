# Manage folders

This example demonstrates how to manage folders in ONLYOFFICE DocSpace using the API. It covers creating, retrieving, renaming, and deleting folders through API requests.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

``` py
import requests

# Set API base URL
BASE_URL = 'https://yourportal.onlyoffice.com'
API_KEY = 'YOUR_API_KEY'

# Headers with API key for authentication
HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Step 1: Create a folder
def create_folder(parent_folder_id, folder_name):
    url = f'{BASE_URL}/api/2.0/files/folder/{parent_folder_id}'
    data = {
        'title': folder_name
    }

    requests.post(url, headers=HEADERS, json=data)

# Step 2: Retrieve folder details
def get_folder_details(folder_id):
    url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}'
    requests.get(url, headers=headers)

# Step 3: Rename a folder
def rename_folder(folder_id, new_name):
    url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}/rename'
    data = {
        'title': new_name
    }

    requests.put(url, headers=headers, json=data)

# Step 4: Delete a folder
def delete_folder(folder_id):
    url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}'
    requests.delete(url, headers=headers)

def main():
    parent_folder_id = 1234 # Replace with actual parent folder or room ID
    folder_id = 1234 # Replace with actual folder ID
    folder_name = "New Folder" # Replace with actual folder name
    new_folder_name = "Updated Folder Name" # Replace with actual new folder name

    #Step 1
    create_folder(parent_folder_id, folder_name)

    #Step 2
    get_folder_details(folder_id)

    #Step 3
    rename_folder(folder_id, new_folder_name)

    #Step 4
    delete_folder(folder_id)
```

</details>

## Step 1: Create a folder

A POST request is sent to [/api/2.0/files/folder/:folderId](/docspace/api-backend/usage-api/create-folder.api.mdx) to create a new folder.

You must pass:

- `title`: Desired name of the folder.

``` py
def create_folder(parent_folder_id, folder_name):
    url = f'{BASE_URL}/api/2.0/files/folder/{parent_folder_id}'
    data = {
        'title': folder_name
    }

    requests.post(url, headers=headers, json=data)
```

## Step 2: Retrieve folder details

A GET request is sent to [/api/2.0/files/folder/:folderId](/docspace/api-backend/usage-api/get-folder-info.api.mdx) to get folder information.

``` py
def get_folder_details(folder_id):
    url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}'
    requests.get(url, headers=headers)
```

## Step 3: Rename a folder

A PUT request is sent to [/api/2.0/files/folder/:folderId](/docspace/api-backend/usage-api/rename-folder.api.mdx) to rename a folder.

You must pass:

- `title`: New folder name.

``` py
def rename_folder(folder_id, new_name):
    url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}/rename'
    data = {
        'title': new_name
    }
    requests.put(url, headers=headers, json=data)
```

## Step 4: Delete a folder

A DELETE request is sent to [/api/2.0/files/folder/:folderId](/docspace/api-backend/usage-api/delete-folder.api.mdx) to remove a folder.

``` py
def delete_folder(folder_id):
    url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}'
requests.delete(url, headers=headers)
```
