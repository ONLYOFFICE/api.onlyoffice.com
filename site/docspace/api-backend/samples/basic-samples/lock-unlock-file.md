# Lock and unlock a file

This example demonstrates how to lock or unlock the specified file in ONLYOFFICE DocSpace and get a list of users and their access levels for the file.

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

# Step 1: Lock a file by ID
def lock_file(file_id):
    url = f'https://{API_HOST}/api/2.0/files/file/{file_id}/lock'
    data = { 'lockFile': True }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
        return response.json()
    return None

# Step 2: Unlock a file by ID
def unlock_file(file_id):
    url = f'https://{API_HOST}/api/2.0/files/file/{file_id}/lock'
    data = { 'lockFile': False }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
        return response.json()
    return None

# Step 3: View users with access to the file
def get_protected_file_users(file_id):
    url = f'https://{API_HOST}/api/2.0/files/file/{file_id}/protectusers'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        return response.json()
    return None

if __name__ == "__main__":
    file_id = '123456'  # Replace with a valid file ID

    lock_file(file_id)
    unlock_file(file_id)
    get_protected_file_users(file_id)
```

</details>

## Step 1: Lock a file

A PUT request is sent to [/api/2.0/files/file/:fileId/lock](/docspace/api-backend/usage-api/lock-file) with the payload:

- `lockFile`: True — Lock a file.
  
This prevents other users from editing the file until it is unlocked.

``` py
def lock_file(file_id):
    url = f'https://{API_HOST}/api/2.0/files/file/{file_id}/lock'
    data = { 'lockFile': True }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
        return response.json()
    return None
```

## Step 2: Unlock a file

A PUT request is sent to the same endpoint with the payload:

- `lockFile`: False — Unlock a file.

This re-enables editing for the file.

``` py
def unlock_file(file_id):
    url = f'https://{API_HOST}/api/2.0/files/file/{file_id}/lock'
    data = { 'lockFile': False }

    response = requests.put(url, headers=HEADERS, json=data)

    if response.status_code == 200:
        return response.json()
    return None
```

## Step 3: View file access list

A GET request is sent to [/api/2.0/files/file/:fileId/protectusers](/docspace/api-backend/usage-api/get-protected-file-users).

It returns a list of users and their access levels for the file.

``` py
def get_protected_file_users(file_id):
    url = f'https://{API_HOST}/api/2.0/files/file/{file_id}/protectusers'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        return response.json()
    return None
```
