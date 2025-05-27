import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# DocSpace Groups to the Dropbox
This integration automates the process of creating shared Dropbox folders for ONLYOFFICE groups and inviting group members to collaborate. 
The script ensures all ONLYOFFICE teams have centralized file storage in Dropbox.

## How it works
- Retrieve ONLYOFFICE Groups - Fetch a list of groups from ONLYOFFICE.
- Create Dropbox Folders - Generate a shared Dropbox folder for each group.
- Get Group Members - Fetch all users assigned to each ONLYOFFICE group.
- Share the Dropbox Folder - Invite ONLYOFFICE group members to their corresponding Dropbox folder.

<Tabs>
  <TabItem value="py" label="Python">
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
    
    # Step 1: Retrieve ONLYOFFICE groups
    def get_onlyoffice_groups():
        url = f'https://{ONLYOFFICE_API_HOST}/api/2.0/group'
        response = requests.get(url, headers=ONLYOFFICE_HEADERS)
        
        if response.status_code == 200:
            return [{'id': group['id'], 'name': group['name']} for group in response.json()['response']]
        print(f'Failed to retrieve ONLYOFFICE groups: {response.status_code} - {response.text}')
        return []
    
    # Step 2: Create a Dropbox folder for each ONLYOFFICE group
    def create_dropbox_group_folder(group_name):
        folder_path = f'/ONLYOFFICE_Groups/{group_name.replace(" ", "_")}'
        try:
            dbx.files_create_folder_v2(folder_path)
            print(f'Folder created: {folder_path}')
            return folder_path
        except dropbox.exceptions.ApiError as e:
            print(f'Failed to create folder for {group_name}: {e}')
            return None
    
    # Step 3: Retrieve ONLYOFFICE group members
    def get_group_members(group_id):
        url = f'https://{ONLYOFFICE_API_HOST}/api/2.0/group/{group_id}'
        response = requests.get(url, headers=ONLYOFFICE_HEADERS)
        if response.status_code == 200:
            group = response.json()
            try:
                return group['response']['members']
            except:
                return
        else:
            print('Failed to get group:', response.status_code, response.text)
        return
    
    # Step 4: Share the Dropbox group folder with its members
    def share_dropbox_group_folder(folder_path, group_members):
        for member in group_members:
            try:
                shared_link_metadata = dbx.sharing_create_shared_link_with_settings(folder_path)
                print(f'Folder shared with {member["email"]}: {shared_link_metadata.url}')
            except dropbox.exceptions.ApiError as e:
                print(f'Failed to share folder with {member["email"]}: {e}')
    
    if __name__ == '__main__':
        onlyoffice_groups = get_onlyoffice_groups()
        for group in onlyoffice_groups:
            folder = create_dropbox_group_folder(group['name'])
            if folder:
                members = get_group_members(group['id'])
                if members:
                    share_dropbox_group_folder(folder, members)
    ```
  </TabItem>
</Tabs>

## Before you start
1. Replace `yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal host and API key. Ensure you have the necessary permissions to perform user operations.
2. Create a [`Dropbox App`](https://www.dropbox.com/developers) with `files.content.write` and `sharing.write` permissions.
3. Before you can make requests to the API, you need to authenticate. Check out the [`authentication example`](../../../../docspace/api-backend/get-started/samples/authentication.md) to learn how to obtain and use access tokens.

## Step 1: Retrieve ONLYOFFICE Groups
Use a [`GET /api/2.0/group`](../../../../docspace/api-backend/usage-api/get-groups) request to retrieve the group ID and the group name for each team.

<Tabs>
  <TabItem value="py" label="Python">
    ```py
    # Step 1: Retrieve ONLYOFFICE groups
    def get_onlyoffice_groups():
        url = f'https://{ONLYOFFICE_API_HOST}/api/2.0/group'
        response = requests.get(url, headers=ONLYOFFICE_HEADERS)
        
        if response.status_code == 200:
            return [{'id': group['id'], 'name': group['name']} for group in response.json()['response']]
        print(f'Failed to retrieve ONLYOFFICE groups: {response.status_code} - {response.text}')
        return []

    if __name__ == '__main__':
        onlyoffice_groups = get_onlyoffice_groups()
    ```
  </TabItem>
</Tabs>

## Step 2: Create a Shared Dropbox Folder
Use dropbox client to generate a Dropbox folder for each DocSpace group.

<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    # Step 2: Create a Dropbox folder for each ONLYOFFICE group
    def create_dropbox_group_folder(group_name):
        folder_path = f'/ONLYOFFICE_Groups/{group_name.replace(" ", "_")}'
        try:
            dbx.files_create_folder_v2(folder_path)
            print(f'Folder created: {folder_path}')
            return folder_path
        except dropbox.exceptions.ApiError as e:
            print(f'Failed to create folder for {group_name}: {e}')
            return None

    if __name__ == '__main__':
        onlyoffice_groups = get_onlyoffice_groups()
        for group in onlyoffice_groups:
            folder = create_dropbox_group_folder(group['name'])
    ```
  </TabItem>
</Tabs>

## Step 3: Retrieve ONLYOFFICE Group Members
Use a [`GET /api/2.0/group/{group_id}`](../../../../docspace/api-backend/usage-api/get-group) get a group by ID and extract user's names and emails.

<Tabs>
  <TabItem value="py" label="Python">
    ```py
    # Step 3: Retrieve ONLYOFFICE group members
    def get_group_members(group_id):
        url = f'https://{ONLYOFFICE_API_HOST}/api/2.0/group/{group_id}'
        response = requests.get(url, headers=ONLYOFFICE_HEADERS)
        if response.status_code == 200:
            group = response.json()
            try:
                return group['response']['members']
            except:
                return
        else:
            print('Failed to get group:', response.status_code, response.text)
        return

    if __name__ == '__main__':
        onlyoffice_groups = get_onlyoffice_groups()
        for group in onlyoffice_groups:
            folder = create_dropbox_group_folder(group['name'])
            if folder:
                members = get_group_members(group['id'])
    ```
  </TabItem>
</Tabs>

## Step 4: Share the Dropbox folders with the group members
Use dropbox client to share Dropbox folders with DocSpace group members.

<Tabs>
  <TabItem value="py" label="Python">
    ``` py
    # Step 4: Share the Dropbox group folder with its members
    def share_dropbox_group_folder(folder_path, group_members):
        for member in group_members:
            try:
                shared_link_metadata = dbx.sharing_create_shared_link_with_settings(folder_path)
                print(f'Folder shared with {member["email"]}: {shared_link_metadata.url}')
            except dropbox.exceptions.ApiError as e:
                print(f'Failed to share folder with {member["email"]}: {e}')
    
    if __name__ == '__main__':
        onlyoffice_groups = get_onlyoffice_groups()
        for group in onlyoffice_groups:
            folder = create_dropbox_group_folder(group['name'])
            if folder:
                members = get_group_members(group['id'])
                if members:
                    share_dropbox_group_folder(folder, members)
    ```
  </TabItem>
</Tabs>