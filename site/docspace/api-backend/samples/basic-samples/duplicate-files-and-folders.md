# Duplicate files and folders

This example demonstrates how to duplicate one or more files and folders in ONLYOFFICE DocSpace using the API. The duplicated items will appear in the same location with a modified title.

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
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# File and folder IDs to duplicate
FILE_IDS = [111111, 222222]
FOLDER_IDS = [333333, 444444]

# Step 1: Duplicate specified files and folders
def duplicate_files_and_folders(file_ids, folder_ids):
    url = f'https://{API_HOST}/api/2.0/files/fileops/duplicate'
    data = {
        'fileIds': file_ids,
        'folderIds': folder_ids
    }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
        return response.json()
    return None

if __name__ == "__main__":
    duplicate_files_and_folders(FILE_IDS, FOLDER_IDS)
```

</details>

## How it works

A PUT request is sent to [/api/2.0/files/fileops/duplicate](/docspace/api-backend/usage-api/duplicate-batch-items).

You must pass:

- `fileIds`: A list of file IDs to be duplicated.
- `folderIds`: A list of folder IDs to be duplicated.

The response contains the status and metadata of the duplication operations.
