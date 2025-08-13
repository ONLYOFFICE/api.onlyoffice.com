# Create and open a new file

This example demonstrates how to create a new file inside a specific folder in ONLYOFFICE DocSpace using the API. After creation, the file is automatically opened in the default web browser using the returned editor link.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

``` py
import requests
import webbrowser

# Set API base URL
API_HOST = 'yourportal.onlyoffice.com'
API_KEY = 'your_api_key'

# Headers with API key for authentication
HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

# Step 1: Create a new file in a folder and open it
def create_file(folder_id, file_title):
    url = f'https://{API_HOST}/api/2.0/files/{folder_id}/file'
    data = {
        'title': file_title,
        'type': 'text'
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
        file_info = response.json().get('response', {})
        edit_url = file_info.get('webUrl')
        if edit_url:
            webbrowser.open(edit_url)  # Open document in default browser
        return file_info
    return None

if __name__ == "__main__":
    folder_id = '123456'  # Replace with your actual folder ID
    file_title = 'NewDocument.docx'

    create_file(folder_id, file_title)
```

</details>

## How it works

A POST request is sent to [/api/2.0/files/:folderId/file](/docspace/api-backend/usage-api/create-file) to create a new file inside the specified folder.

Payload parameters include:

- `title`: Desired name of the file.
- `type`: File type.

The API returns a `webUrl`, which opens the document editor in a browser.
