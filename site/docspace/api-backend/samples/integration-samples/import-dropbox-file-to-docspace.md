# Import Dropbox file to DocSpace

This integration allows you to automatically import files from Dropbox into a specific room in ONLYOFFICE DocSpace. It’s ideal for collecting external resources, migrating document libraries, or building automated submission workflows.

## How it works

- Download file from Dropbox - Use the Dropbox SDK to fetch the file content and name.
- Upload to DocSpace room - Send the binary file to the specified room using the file upload API.
- Run the import - Execute the process with a specific Dropbox file path.

<details>
  <summary>Full example</summary>

```py
import requests, dropbox, io

# DocSpace configuration
ONLYOFFICE_API_HOST = "your-docspace.onlyoffice.com"
ONLYOFFICE_API_KEY = "your_onlyoffice_api_key"
ONLYOFFICE_ROOM_ID = "your_room_id"

# Dropbox configuration
DROPBOX_ACCESS_TOKEN = "your_dropbox_access_token"
DROPBOX_FILE_PATH = "/SampleForm.pdf"

# Headers for ONLYOFFICE authentication
ONLYOFFICE_HEADERS = {
    'Accept': 'application/json',
    'Authorization': f'Bearer {ONLYOFFICE_API_KEY}',
    'Content-Type': 'application/json'
}

dbx = dropbox.Dropbox(DROPBOX_ACCESS_TOKEN)

# Step 1: Download file from Dropbox
def download_from_dropbox(file_path):
    try:
        metadata, response = dbx.files_download(file_path)
        filename = metadata.name
        file_content = response.content
        print(f"File '{filename}' downloaded from Dropbox.")
        return file_content, filename
    except dropbox.exceptions.ApiError as e:
        print(f"Dropbox API error: {e}")
    except Exception as e:
        print(f"Unexpected error during Dropbox download: {e}")
    return None, None

# Step 2: Upload file to DocSpace room
def upload_to_docspace(file_content, filename, room_id):
    url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/{room_id}/upload"
    files = {"file": (filename, io.BytesIO(file_content))}
    response = requests.post(url, headers=ONLYOFFICE_HEADERS, files=files)

    if response.status_code == 200:
        print(f"File '{filename}' uploaded to DocSpace.")
    else:
        print(f"Failed to upload to DocSpace: {response.status_code} - {response.text}")

# Step 3: Transfer file from Dropbox to DocSpace
def transfer_dropbox_to_docspace(file_path, room_id):
    file_content, filename = download_from_dropbox(file_path)
    if file_content:
        upload_to_docspace(file_content, filename, room_id)
    else:
        print("Transfer failed. No file content retrieved.")

if __name__ == '__main__':
    transfer_dropbox_to_docspace(DROPBOX_FILE_PATH, ONLYOFFICE_ROOM_ID)
```

</details>

## Before you start

1. Replace `your-docspace.onlyoffice.com`, `your_onlyoffice_api_key`, and `your_room_id` with your actual DocSpace portal host, API key, and room ID. Ensure you have the necessary permissions to perform user operations.
2. Before you can make requests to the API, you need to create a DocSpace API key. Check out the [API keys article](/docspace/api-backend/get-started/authentication/api-keys/) to learn how to obtain and use API keys.
3. Create a [Dropbox App](https://www.dropbox.com/developers) with `files.content.write` and `sharing.write` permissions.
4. Replace `your_dropbox_access_token` with your actual Dropbox token.
5. Install the [Dropbox Python SDK](https://www.dropbox.com/developers/documentation/python#install):

    ```bash
    pip install dropbox
    ```

## Step 1: Download a file from Dropbox

Use the Dropbox SDK [`files_download`](https://dropbox-sdk-python.readthedocs.io/en/latest/api/dropbox.html#dropbox.dropbox_client.Dropbox.files_download) method to download the file’s binary content and original name.

```py
# Step 1: Download file from Dropbox
def download_from_dropbox(file_path):
    try:
        metadata, response = dbx.files_download(file_path)
        filename = metadata.name
        file_content = response.content
        print(f"File '{filename}' downloaded from Dropbox.")
        return file_content, filename
    except dropbox.exceptions.ApiError as e:
        print(f"Dropbox API error: {e}")
    except Exception as e:
        print(f"Unexpected error during Dropbox download: {e}")
    return None, None
```

## Step 2: Upload the file to DocSpace

Use [`POST /api/2.0/files/{room_id}/upload`](/docspace/api-backend/usage-api/upload-file) to upload the binary content to a DocSpace room.

``` py
# Step 2: Upload file to DocSpace room
def upload_to_docspace(file_content, filename, room_id):
    url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/{room_id}/upload"
    files = {"file": (filename, io.BytesIO(file_content))}
    response = requests.post(url, headers=ONLYOFFICE_HEADERS, files=files)

    if response.status_code == 200:
        print(f"File '{filename}' uploaded to DocSpace.")
    else:
        print(f"Failed to upload to DocSpace: {response.status_code} - {response.text}")
```

## Step 3: Run the import

Trigger the full import flow from Dropbox to DocSpace.

```py
# Step 3: Transfer file from Dropbox to DocSpace
def transfer_dropbox_to_docspace(file_path, room_id):
    file_content, filename = download_from_dropbox(file_path)
    if file_content:
        upload_to_docspace(file_content, filename, room_id)
    else:
        print("Transfer failed. No file content retrieved.")

if __name__ == '__main__':
    transfer_dropbox_to_docspace(DROPBOX_FILE_PATH, ONLYOFFICE_ROOM_ID)
```
