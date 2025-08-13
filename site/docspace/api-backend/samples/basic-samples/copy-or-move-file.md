# Copy or move a file to a folder

This example demonstrates how to copy or move a file in ONLYOFFICE DocSpace.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

``` py
import requests

# Set API base URL
API_HOST = "yourportal.onlyoffice.com"
API_KEY = "your_api_key"

# Headers with API key for authentication
HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Step 1: Copy a file to another folder
def copy_file_to_folder(file_id: int, dest_folder_id: int):
    url = f"https://{API_HOST}/api/2.0/files/fileops/copy"
    payload = {
        "fileIds": [file_id],
        "destFolderId": dest_folder_id,
        "deleteAfter": False,  # Copy, do not remove original
        "content": True,
        "toFillOut": False
    }

    response = requests.put(url, json=payload, headers=HEADERS)
    if response.status_code == 200:
        print(f"File {file_id} copied to folder {dest_folder_id}")
    else:
        print(f"Copy failed: {response.status_code}")
        print(response.text)

# Step 2: Move a file to another folder
def move_file_to_folder(file_id: int, dest_folder_id: int):
    url = f"https://{API_HOST}/api/2.0/files/fileops/move"
    payload = {
        "fileIds": [file_id],
        "destFolderId": dest_folder_id,
        "deleteAfter": True,   # Move means remove from original
        "content": True,
        "toFillOut": False
    }

    response = requests.put(url, json=payload, headers=HEADERS)
    if response.status_code == 200:
        print(f"File {file_id} moved to folder {dest_folder_id}")
    else:
        print(f"Move failed: {response.status_code}")
        print(response.text)

# Run an example
if __name__ == "__main__":
    file_id = 1568550         # ID of the file
    dest_folder_id = 1079053  # ID of the destination folder

    copy_file_to_folder(file_id, dest_folder_id)
    move_file_to_folder(file_id, dest_folder_id)
```

</details>

## Step 1: Copy a file to a folder

A PUT request is sent to [/api/2.0/files/fileops/copy](/docspace/api-backend/usage-api/copy-batch-items).

Payload parameters include:

- `fileIds`: List of file IDs to copy.
- `destFolderId`: Destination folder.
- `deleteAfter`: False — keep original file.
- `content`: True — include content.

``` py
def copy_file_to_folder(file_id: int, dest_folder_id: int):
    url = f"https://{API_HOST}/api/2.0/files/fileops/copy"
    payload = {
        "fileIds": [file_id],
        "destFolderId": dest_folder_id,
        "deleteAfter": False,  # Copy, do not remove original
        "content": True,
        "toFillOut": False
    }

    response = requests.put(url, json=payload, headers=HEADERS)
    if response.status_code == 200:
        print(f"File {file_id} copied to folder {dest_folder_id}")
    else:
        print(f"Copy failed: {response.status_code}")
        print(response.text)
```

## Step 2: Move a file to a folder

- A PUT request is sent to [/api/2.0/files/fileops/move](/docspace/api-backend/usage-api/move-batch-items).
- Same parameters, except:
  - `deleteAfter`: True — remove the file from the source folder.

``` py
def move_file_to_folder(file_id: int, dest_folder_id: int):
    url = f"https://{API_HOST}/api/2.0/files/fileops/move"
    payload = {
        "fileIds": [file_id],
        "destFolderId": dest_folder_id,
        "deleteAfter": True,   # Move means remove from original
        "content": True,
        "toFillOut": False
    }

    response = requests.put(url, json=payload, headers=HEADERS)
    if response.status_code == 200:
        print(f"File {file_id} moved to folder {dest_folder_id}")
    else:
        print(f"Move failed: {response.status_code}")
        print(response.text)
```
