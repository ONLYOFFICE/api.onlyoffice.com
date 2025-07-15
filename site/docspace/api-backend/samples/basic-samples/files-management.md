# Manage files

This example demonstrates how to:

- [Create a blank document](#step-1-create-an-empty-file) in a specific folder.
- [Add a file](#step-2-upload-a-file) to a specific folder in DocSpace.
- [Replace or edit an existing file](#step-3-update-an-existing-file).
- [Remove a file](#step-4-delete-a-file) from the system.

```py title="Python"
import requests
# Set API base URL
BASE_URL = 'https://yourportal.onlyoffice.com'
API_KEY = 'YOUR_API_KEY'

# Headers with API key for authentication
HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Step 1: Create an empty file
def create_file(folder_id, file_name):
    url = f'{BASE_URL}/api/2.0/files/{folder_id}/file'
    data = {
        'title': file_name
    }
    requests.post(url, headers=HEADERS, json=data)

# Step 2: Upload a file
def upload_file(folder_id, file_path):
    url = f'{BASE_URL}/api/2.0/files/{folder_id}/upload'
    headers = {
        'Authorization': f'Bearer {API_KEY}'
    }

    with open(file_path, 'rb') as file:
        files = {
            'file': (file_path, file, 'application/octet-stream')
        }
        response = requests.post(url, headers=headers, files=files)
        print(response.status_code, response.text)
        return response

# Step 3: Update an existing file
def update_file(file_id, new_file_path):
    url = f'{BASE_URL}/api/2.0/files/file/{file_id}'
    files = {'file': open(new_file_path, 'rb')}
    requests.put(url, headers=headers, files=files)

# Step 4: Delete a file
def delete_file(file_id):
    url = f'{BASE_URL}.api/2.0/files/file/{file_id}'
    data = {
        'immediately': True
    }
    requests.delete(url, headers=headers, json=data)

def main():
    folder_id = 776261 # Replace with actual folder ID
    file_name = 'NewDocument1.docx' # Replace with actual file name
    file_path = 'path/to/upload_file.txt' # Replace with actual file path
    updated_file_path = 'path/to/updated_file.txt' # Replace with actual updated file path
    file_id = 1187261 # Replace with actual file ID

    #Step 1
    create_file(folder_id, file_name)

    #Step 2
    upload_file(folder_id, file_path)

    #Step 3
    update_file(file_id, updated_file_path)

    #Step 4
    delete_file(file_id)
```

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [authentication example](/docspace/api-backend/samples/authentication.md) to learn how to obtain and use access tokens.

## Step 1: Create an empty file

Use the [`POST /api/2.0/files/{folderId}/file`](/docspace/api-backend/usage-api/create-file.api.mdx) request to create an empty file in a specific folder.

```py
def create_file(folder_id, file_name):
    url = f'{BASE_URL}/api/2.0/files/{folder_id}/file'
    data = {
        'title': file_name
    }
    requests.post(url, headers=headers, json=data)
```

## Step 2: Upload a file

Use the [`POST /api/2.0/files/{folderId}/upload`](/docspace/api-backend/usage-api/upload-file.api.mdx) request to upload a file to a folder.

```py
def upload_file(folder_id, file_path):
    url = f'{BASE_URL}/api/2.0/files/{folder_id}/upload'
    headers = {
        'Authorization': f'Bearer {API_KEY}'
    }

    with open(file_path, "rb") as file:
        files = {
            'file': (file_path, file, 'application/octet-stream')
        }
        response = requests.post(url, headers=headers, files=files)

        print(response.status_code, response.text)
        return response
```

## Step 3: Update an existing file

Use the [`PUT /api/2.0/files/file/{fileId}`](/docspace/api-backend/usage-api/update-file.api.mdx) request to update an existing file.

```py
def update_file(file_id, new_file_path):
    url = f'{BASE_URL}/api/2.0/files/file/{file_id}'
    files = {'file': open(new_file_path, 'rb')}
    requests.put(url, headers=headers, files=files)
```

## Step 4: Delete a file

Use the [`DELETE /api/2.0/files/file/{fileId}`](/docspace/api-backend/usage-api/delete-file.api.mdx) request to remove a file.

```py
def delete_file(file_id):
    url = f'{BASE_URL}.api/2.0/files/file/{file_id}'
    data = {
        'immediately': True
    }
    requests.delete(url, headers=headers, json=data)
```
