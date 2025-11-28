# Share Dropbox folders with DocSpace users

This integration automates the process of sharing Dropbox folders with DocSpace users.

## How it works

- Retrieve DocSpace users - Fetches a list of users with names and emails from the DocSpace.
- Create Dropbox folders - Each DocSpace user gets a dedicated folder in the Dropbox.
- Share Dropbox folders - Generates a Dropbox shared link for each DocSpace user.

<details>
  <summary>Full example</summary>

```py
import dropbox, requests

# Dropbox API credentials
DROPBOX_ACCESS_TOKEN = 'your_dropbox_access_token'
dbx = dropbox.Dropbox(DROPBOX_ACCESS_TOKEN)

# ONLYOFFICE API credentials
ONLYOFFICE_API_HOST = 'yourportal.onlyoffice.com'
ONLYOFFICE_API_KEY = 'your_onlyoffice_api_key'

# Headers for ONLYOFFICE authentication
ONLYOFFICE_HEADERS = {
    'Accept': 'application/json',
    'Authorization': f'Bearer {ONLYOFFICE_API_KEY}',
    'Content-Type': 'application/json'
}

# Step 1: Retrieve DocSpace users
def get_docspace_users():
    url = f'https://{ONLYOFFICE_API_HOST}/api/2.0/people'
    response = requests.get(url, headers=ONLYOFFICE_HEADERS)
    
    if response.status_code == 200:
        return [{'name': user['firstName'], 'email': user['email']} for user in response.json()['response']]
    print(f'Failed to retrieve DocSpace users: {response.status_code} - {response.text}')
    return []

# Step 2: Create a Dropbox folder for each DocSpace user
def create_dropbox_folder(user_name, user_email):
    folder_path = f'/DocSpace_users/{user_name.replace(" ", "_")}'
    try:
        dbx.files_create_folder_v2(folder_path)
        print(f'Folder created: {folder_path}')
        return folder_path
    except dropbox.exceptions.ApiError as e:
        print(f'Failed to create folder for {user_name}: {e}')
        return None

# Step 3: Share the Dropbox folder with the user
def share_dropbox_folder(folder_path, user_email):
    try:
        shared_link_metadata = dbx.sharing_create_shared_link_with_settings(folder_path)
        print(f'Folder shared with {user_email}: {shared_link_metadata.url}')
    except dropbox.exceptions.ApiError as e:
        print(f'Failed to share folder with {user_email}: {e}')

if __name__ == '__main__':
    docspace_users = get_docspace_users()

    for user in docspace_users:
        folder = create_dropbox_folder(user['name'], user['email'])
        if folder:
            share_dropbox_folder(folder, user['email'])
```

</details>

## Before you start

1. Replace `your-docspace.onlyoffice.com` and `your_onlyoffice_api_key` with your actual DocSpace portal host and API key. Ensure you have the necessary permissions to perform user operations.
2. Before you can make requests to the API, you need to create a DocSpace API key. Check out the [API keys article](/docspace/api-backend/get-started/authentication/api-keys/) to learn how to obtain and use API keys.
3. Create a [Dropbox App](https://www.dropbox.com/developers) with `files.content.write` and `sharing.write` permissions.
4. Replace `your_dropbox_access_token` with your actual Dropbox token.
5. Install the [Dropbox Python SDK](https://www.dropbox.com/developers/documentation/python#install):

    ```bash
    pip install dropbox
    ```

## Step 1: Retrieve DocSpace users

Use a [`GET /api/2.0/people`](/docspace/api-backend/usage-api/get-all-profiles) request to retrieve each user's first name and email.

```py
# Step 1: Retrieve DocSpace users
def get_docspace_users():
    url = f'https://{ONLYOFFICE_API_HOST}/api/2.0/people'
    response = requests.get(url, headers=ONLYOFFICE_HEADERS)
    
    if response.status_code == 200:
        return [{'name': user['firstName'], 'email': user['email']} for user in response.json()['response']]
    print(f'Failed to retrieve DocSpace users: {response.status_code} - {response.text}')
    return []

if __name__ == '__main__':
    docspace_users = get_docspace_users()
```

## Step 2: Create shared Dropbox folders

Use the Dropbox SDK [`files_create_folder_v2`](https://dropbox-sdk-python.readthedocs.io/en/latest/api/dropbox.html#dropbox.dropbox_client.Dropbox.files_create_folder_v2) method to generate a Dropbox folder for each DocSpace user.

``` py
# Step 2: Create a Dropbox folder for each DocSpace user
def create_dropbox_folder(user_name, user_email):
    folder_path = f'/DocSpace_users/{user_name.replace(" ", "_")}'
    try:
        dbx.files_create_folder_v2(folder_path)
        print(f'Folder created: {folder_path}')
        return folder_path
    except dropbox.exceptions.ApiError as e:
        print(f'Failed to create folder for {user_name}: {e}')
        return None

if __name__ == '__main__':
    docspace_users = get_docspace_users()

    for user in docspace_users:
        folder = create_dropbox_folder(user['name'], user['email'])
```

## Step 3: Share the Dropbox folder with the user

Use the Dropbox SDK [`sharing_create_shared_link_with_settings`](https://dropbox-sdk-python.readthedocs.io/en/latest/api/dropbox.html#dropbox.dropbox_client.Dropbox.sharing_create_shared_link_with_settings) method to share Dropbox folders with DocSpace users.

```py
# Step 3: Share the Dropbox folder with the user
def share_dropbox_folder(folder_path, user_email):
    try:
        shared_link_metadata = dbx.sharing_create_shared_link_with_settings(folder_path)
        print(f'Folder shared with {user_email}: {shared_link_metadata.url}')
    except dropbox.exceptions.ApiError as e:
        print(f'Failed to share folder with {user_email}: {e}')

if __name__ == '__main__':
    docspace_users = get_docspace_users()

    for user in docspace_users:
        folder = create_dropbox_folder(user['name'], user['email'])
        if folder:
            share_dropbox_folder(folder, user['email'])
```
