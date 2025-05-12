# Manage the Trash Section
This example demonstrates how to retrieve and empty the contents of the Trash section in ONLYOFFICE DocSpace using the API.

## Before you start
1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](../../../get-started/authentication/personal-access-tokens) example to learn how to obtain and use access tokens.


<details>
  <summary>Full Example</summary>

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

# Step 1: Get contents of the Trash section
def get_trash_section():
    url = f'https://{API_HOST}/api/2.0/files/@trash'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
        return response.json()
    return None

# Step 2: Empty the Trash section
def empty_trash():
    url = f'https://{API_HOST}/api/2.0/files/fileops/emptytrash'
    response = requests.put(url, headers=HEADERS)

    if response.status_code == 200:
        return True
    return False

if __name__ == "__main__":
    get_trash_section()
    empty_trash()
```

</details>

## Step 1: Retrieve Trash Contents
- A GET request is sent to [/api/2.0/files/@trash](../../../usage-api/get-trash-folder) to get files and folders marked for deletion.
- This operation is useful for checking which items are pending permanent removal.

``` py
def get_trash_section():
    url = f'https://{API_HOST}/api/2.0/files/@trash'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
        return response.json()
    return None
```

## Step 2: Empty the Trash
- A PUT request is sent to [/api/2.0/files/fileops/emptytrash](../../../usage-api/empty-trash).
- This operation permanently deletes all files and folders from the Trash.

``` py
def empty_trash():
    url = f'https://{API_HOST}/api/2.0/files/fileops/emptytrash'
    response = requests.put(url, headers=HEADERS)

    if response.status_code == 200:
        return True
    return False
```