# Create a text file

This example demonstrates how to create a `.txt` file in a specified folder in ONLYOFFICE DocSpace using the API. You can set a custom title and content for the file when uploading it to a folder.

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

# Step 1: Create a text file in a folder
def create_text_file(folder_id, title, content):
    url = f'https://{API_HOST}/api/2.0/files/{folder_id}/text'
    data = {
        'title': title,
        'content': content
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
        file_info = response.json()
        print(f'File created successfully: {file_info}')
        return file_info
    else:
        print(f'Failed to create file: {response.status_code} - {response.text}')
        return None

if __name__ == "__main__":
    folder_id = '123456'  # Replace with your target folder ID
    title = 'ExampleFile.txt'  # Desired file name
    content = 'This is the content of the example text file.'  # File content

    print('\nCreating a text file with specified content:')
    create_text_file(folder_id, title, content)
```

</details>

## How it works

A POST request is sent to [/api/2.0/files/:folderId/text](/docspace/api-backend/usage-api/create-text-file) to create a `.txt` file in the specified folder.

Payload parameters include:

- `folderId`: The target folder where the file will be created.
- `title`: Desired file name.
- `content`: The actual content to be written inside the file.
  
On success, the API returns file metadata including ID, title, and creation details.
