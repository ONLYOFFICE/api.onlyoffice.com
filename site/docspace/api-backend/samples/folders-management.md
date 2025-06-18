import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Folders Management
This example demonstrates how to:
- Create a Folder: Add a new folder inside another folder or room.
- Retrieve Folder Information: Get details of a specific folder.
- Rename a Folder: Change the name of an existing folder.
- Delete a Folder: Remove a folder from the system.

<Tabs>
  <TabItem value="py" label="Python">
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

    # Step 1: Create a Folder
    def create_folder(parent_folder_id, folder_name):
        url = f'{BASE_URL}/api/2.0/files/folder/{parent_folder_id}'
        data = {
            'title': folder_name
        }

        requests.post(url, headers=HEADERS, json=data)

    # Step 2: Retrieve Folder Details
    def get_folder_details(folder_id):
        url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}'
        requests.get(url, headers=headers)

    # Step 3: Rename a Folder
    def rename_folder(folder_id, new_name):
        url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}/rename'
        data = {
            'title': new_name
        }

        requests.put(url, headers=headers, json=data)

    # Step 4: Delete a Folder
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
  </TabItem>
</Tabs>

## Before you start
1.	Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2.	Before you can make requests to the API, you need to authenticate. Check out the [`authentication example`](/docspace/api-backend/samples/authentication.md) to learn how to obtain and use access tokens.

## Step 1: Create a Folder
Use [`POST /api/2.0/files/folder/{folderId}`](/docspace/api-backend/usage-api/create-folder.api.mdx) request to create a new folder.

<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    def create_folder(parent_folder_id, folder_name):
        url = f'{BASE_URL}/api/2.0/files/folder/{parent_folder_id}'
        data = {
            'title': folder_name
        }

        requests.post(url, headers=headers, json=data)
    ```
  </TabItem>
</Tabs>

## Step 2: Retrieve Folder Details
Use [`GET /api/2.0/files/folder/{folderId}`](/docspace/api-backend/usage-api/get-folder-info.api.mdx) request to get folder information.

<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    def get_folder_details(folder_id):
        url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}'
        requests.get(url, headers=headers)
    ```
  </TabItem>
</Tabs>

## Step 3: Rename a Folder
Use [`PUT /api/2.0/files/folder/{folderId}`](/docspace/api-backend/usage-api/rename-folder.api.mdx) request to rename a folder.

<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    def rename_folder(folder_id, new_name):
        url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}/rename'
        data = {
            'title': new_name
        }
        requests.put(url, headers=headers, json=data)
    ```
  </TabItem>
</Tabs>

## Step 4: Delete a Folder
Use  [`DELETE /api/2.0/files/folder/{folderId}`](/docspace/api-backend/usage-api/delete-folder.api.mdx) request to remove a folder.

<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    def delete_folder(folder_id):
        url = f'{BASE_URL}/api/2.0/files/folder/{folder_id}'
    requests.delete(url, headers=headers)
    ```
  </TabItem>
</Tabs>