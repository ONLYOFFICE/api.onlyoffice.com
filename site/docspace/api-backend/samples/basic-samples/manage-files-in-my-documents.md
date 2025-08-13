# Manage files in "My Documents"

This example demonstrates how to interact with a user's personal space ("My Documents") in ONLYOFFICE DocSpace using the API. It includes retrieving contents, uploading a file, creating a new document, and deleting a file.

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
    'Authorization': f'Bearer {API_KEY}'
}

# Step 1: Get "My Documents" contents
def get_my_documents():
    url = f'https://{API_HOST}/api/2.0/files/@my'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
        return response.json()
    return None

# Step 2: Upload a file to "My Documents"
def upload_file_to_my(file_path):
    url = f'https://{API_HOST}/api/2.0/files/@my/upload'
    with open(file_path, 'rb') as file:
        files = {'file': (file_path, file)}
        response = requests.post(url, headers=HEADERS, files=files)

    if response.status_code == 200:
        return response.json()
    return None

# Step 3: Create an empty file in "My Documents"
def create_file_in_my(file_title):
    url = f'https://{API_HOST}/api/2.0/files/@my/file'
    data = {'title': file_title}
    response = requests.post(url, headers=HEADERS, json=data)

    if response.status_code == 200:
        return response.json()
    return None

# Step 4: Delete a file from "My Documents"
def delete_file(file_id, immediately=True, delete_after=False):
    url = f'https://{API_HOST}/api/2.0/files/file/{file_id}'
    data = {
        'immediately': immediately,
        'deleteAfter': delete_after
    }

    requests.delete(url, headers=HEADERS, json=data)

if __name__ == "__main__":
    get_my_documents()

    file_path = 'example.pdf'  # Replace with actual path to the file
    upload_file_to_my(file_path)

    file_title = 'NewDocument.docx'
    create_file_in_my(file_title)

    file_id = '123456'  # Replace with an actual file ID
    delete_file(file_id)
```

</details>

## Step 1: Retrieve contents of "My Documents"

A GET request is sent to [/api/2.0/files/@my](/docspace/api-backend/usage-api/get-my-folder).

It returns a list of files and folders in the user's personal space.

``` py
def get_my_documents():
    url = f'https://{API_HOST}/api/2.0/files/@my'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
        return response.json()
    return None
```

## Step 2: Upload a file to "My Documents"

A POST request is sent to [/api/2.0/files/@my/upload](/docspace/api-backend/usage-api/upload-file-to-my) with the following parameter:

- `file`: The file represented as binary data.

``` py
def upload_file_to_my(file_path):
    url = f'https://{API_HOST}/api/2.0/files/@my/upload'
    with open(file_path, 'rb') as file:
        files = {'file': (file_path, file)}
        response = requests.post(url, headers=HEADERS, files=files)

    if response.status_code == 200:
        return response.json()
    return None
```

## Step 3: Create an empty file in "My Documents"

A POST request is sent to [/api/2.0/files/@my/file](/docspace/api-backend/usage-api/create-file-in-my-documents) with the following parameter:

- `title`: The file title.

``` py
def create_file_in_my(file_title):
    url = f'https://{API_HOST}/api/2.0/files/@my/file'
    data = {'title': file_title}
    response = requests.post(url, headers=HEADERS, json=data)

    if response.status_code == 200:
        return response.json()
    return None
```

## Step 4: Delete a file from "My Documents"

A DELETE request is sent to [/api/2.0/files/file/:fileId](/docspace/api-backend/usage-api/delete-file).

The following parameters can be optionally defined:

- `immediately`: Whether to delete without moving to trash.
- `deleteAfter`: Whether to delete after a delay.

``` py
def delete_file(file_id, immediately=True, delete_after=False):
    url = f'https://{API_HOST}/api/2.0/files/file/{file_id}'
    data = {
        'immediately': immediately,
        'deleteAfter': delete_after
    }

    requests.delete(url, headers=HEADERS, json=data)
```
