# Get folder and room contents

This example demonstrates how to retrieve the contents of a folder or room in ONLYOFFICE DocSpace. The same API endpoint returns both files and subfolders.

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
headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Accept': 'application/json'
}

# Step 1: Retrieve folder or room contents
def get_folder_contents(folder_id):
    url = f'https://{API_HOST}/api/2.0/files/:folderId'
    response = requests.get(url, headers=headers)

    print("Status Code:", response.status_code)
    print("Raw Response:", response.text)

    try:
        data = response.json()
        if isinstance(data, dict) and "response" in data:
            contents = data["response"]
            files = contents.get("files", [])
            folders = contents.get("folders", [])

            print(f'\nContents of Folder ID {folder_id}:')

            print('\nFiles:')
            for file in files:
                print(f"- {file.get('title', 'No Title')} ({file.get('fileExst', 'Unknown Extension')}) — {file.get('contentLength', 'Unknown Size')}")

            print('\nFolders:')
            for folder in folders:
                print(f"- {folder.get('title', 'No Title')}")

            return contents
        else:
            print("Unexpected response format:", data)
    except Exception as e:
        print(f"Error parsing JSON: {e}")
        print("Raw response:", response.text)

    return None

if __name__ == '__main__':
    folder_id = 1074098  # Replace with actual folder or room ID
    get_folder_contents(folder_id)
```

</details>

## How it works

A GET request is sent to [/api/2.0/files/:folderId](/docspace/api-backend/usage-api/get-folder-by-folder-id).

This method returns:

- `files`: An array of files in the folder or room.
- `folders`: An array of subfolders.

It supports both standard folders and room root folders by their ID.
