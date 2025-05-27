import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Export DocSpace File to Dropbox
This integration allows you to automatically export files from DocSpace to Dropbox using a presigned download URL. It’s ideal for building document archiving workflows, offloading files to external storage, or syncing selected documents outside of the DocSpace environment.

## How it works
- Retrieve file metadata – Get file title and MIME type using the DocSpace API.
- Generate presigned URL – Request a secure download link from DocSpace.
- Download file content – Retrieve the file using the presigned URL.
- Upload to Dropbox – Store the downloaded file into a specified Dropbox folder.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    import requests, dropbox

    # DocSpace configuration
    ONLYOFFICE_API_HOST = "your-docspace.onlyoffice.com"
    ONLYOFFICE_API_KEY = "your_onlyoffice_api_key"

    # Dropbox configuration
    DROPBOX_ACCESS_TOKEN = "your_dropbox_access_token"
    DROPBOX_FOLDER_PATH = "/DocSpace Delete Files"

    # Headers for ONLYOFFICE authentication
    ONLYOFFICE_HEADERS = {
        'Accept': 'application/json',
        'Authorization': f'Bearer {ONLYOFFICE_API_KEY}',
        'Content-Type': 'application/json'
    }

    # Extensions map
    EXTENSIONS = {
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
        "application/pdf": "pdf",
        "text/plain": "txt",
        "image/png": "png",
        "image/jpeg": "jpg",
    }

    dbx = dropbox.Dropbox(DROPBOX_ACCESS_TOKEN)

    # Step 1: Get file info
    def get_file_info(file_id):
        url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/file/{file_id}"
        response = requests.get(url, headers=ONLYOFFICE_HEADERS)
        if response.status_code == 200:
            data = response.json().get("response", {})
            filename = data.get("title") or data.get("name") or "downloaded_file"
            mime = data.get("contentType", "application/octet-stream")
            ext = EXTENSIONS.get(mime, "")
            if ext and not filename.endswith(f".{ext}"):
                filename += f".{ext}"
            return filename, mime
        return "downloaded_file", "application/octet-stream"

    # Step 2: Get presigned URL
    def get_presigned_url(file_id):
        url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/file/{file_id}/presigneduri"
        r = requests.get(url, headers=ONLYOFFICE_HEADERS)
        if r.status_code == 200:
            return r.json().get("response")
        return None

    # Step 3: Download file
    def download_from_docspace(file_id):
        filename, mime = get_file_info(file_id)
        url = get_presigned_url(file_id)
        if not url:
            return None, None, None
        r = requests.get(url, headers=ONLYOFFICE_HEADERS)
        if r.status_code == 200:
            return r.content, filename, mime
        return None, None, None

    # Step 4: Upload to Dropbox
    def upload_to_dropbox_sdk(content, filename, folder_path):
        path = f"{folder_path}/{filename}"
        dbx.files_upload(content, path, mode=dropbox.files.WriteMode("add"), autorename=True)
        print(f"Uploaded: {path}")

    # Step 5: Export
    def transfer_docspace_to_dropbox(file_id, folder_path):
        content, name, _ = download_from_docspace(file_id)
        if content:
            upload_to_dropbox_sdk(content, name, folder_path)

    if __name__ == '__main__':
        transfer_docspace_to_dropbox("1667736", DROPBOX_FOLDER_PATH)
    ```

  </TabItem>
</Tabs>

## Before you start
1. Replace `yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal host and API key. Ensure you have the necessary permissions to perform user operations.
2. Before you can make requests to the API, you need to create a DocSpace API key. Check out the [API keys article](../../../get-started/authentication/api-keys/) to learn how to obtain and use API keys.
3. Create a [Dropbox App](https://www.dropbox.com/developers) with `files.content.write` and `sharing.write` permissions.

Finally install the [Dropbox Python SDK](https://www.dropbox.com/developers/documentation/python#install):
```bash
pip install dropbox
```

## Step 1: Retrieve file metadata from DocSpace
Get the file name and MIME type using [`GET /api/2.0/files/file/{file_id}`](../../../usage-api/get-file-info).

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 1: Get file info
    def get_file_info(file_id):
        url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/file/{file_id}"
        response = requests.get(url, headers=ONLYOFFICE_HEADERS)
        if response.status_code == 200:
            data = response.json().get("response", {})
            filename = data.get("title") or data.get("name") or "downloaded_file"
            mime = data.get("contentType", "application/octet-stream")
            ext = EXTENSIONS.get(mime, "")
            if ext and not filename.endswith(f".{ext}"):
                filename += f".{ext}"
            return filename, mime
        return "downloaded_file", "application/octet-stream"
    ```

  </TabItem>
</Tabs>

## Step 2: Generate a presigned download URL
Use [`GET /api/2.0/files/file/{file_id}/presigneduri`](../../../usage-api/get-presigned-file-uri) to obtain a secure link.

<Tabs>
  <TabItem value="py" label="Python">

    ``` py
    # Step 2: Get presigned URL
    def get_presigned_url(file_id):
        url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/file/{file_id}/presigneduri"
        r = requests.get(url, headers=ONLYOFFICE_HEADERS)
        if r.status_code == 200:
            return r.json().get("response")
        return None
    ```

  </TabItem>
</Tabs>

## Step 3: Download the file from DocSpace
Use the presigned link to securely download the file.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 3: Download file
    def download_from_docspace(file_id):
        filename, mime = get_file_info(file_id)
        url = get_presigned_url(file_id)
        if not url:
            return None, None, None
        r = requests.get(url, headers=ONLYOFFICE_HEADERS)
        if r.status_code == 200:
            return r.content, filename, mime
        return None, None, None
    ```

  </TabItem>
</Tabs>

## Step 4: Upload the file to Dropbox
Use Dropbox SDK to upload the file to a folder.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 4: Upload to Dropbox
    def upload_to_dropbox_sdk(content, filename, folder_path):
        path = f"{folder_path}/{filename}"
        dbx.files_upload(content, path, mode=dropbox.files.WriteMode("add"), autorename=True)
        print(f"Uploaded: {path}")
    ```
    
  </TabItem>
</Tabs>

## Step 5: Export аile to Dropbox
Run the combined steps with a target file ID.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 5: Export
    def transfer_docspace_to_dropbox(file_id, folder_path):
        content, name, _ = download_from_docspace(file_id)
        if content:
            upload_to_dropbox_sdk(content, name, folder_path)

    if __name__ == '__main__':
        transfer_docspace_to_dropbox("1667736", DROPBOX_FOLDER_PATH)
    ```
    
  </TabItem>
</Tabs>