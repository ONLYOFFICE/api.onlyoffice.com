import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Share Dropbox folders with DocSpace group members
This integration automates the process of creating shared Dropbox folders for DocSpace group members and inviting them to collaborate.

## How it works
- Retrieve DocSpace groups - Fetch a list of groups from DocSpace.
- Create Dropbox folders - Generate a shared Dropbox folder for each group.
- Get groups members - Fetch all users assigned to each DocSpace group.
- Share Dropbox folders - Invite DocSpace group members to their corresponding Dropbox folders.

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
    
    # Step 1: Retrieve DocSpace groups
    def get_docspace_groups():
        url = f'https://{ONLYOFFICE_API_HOST}/api/2.0/group'
        response = requests.get(url, headers=ONLYOFFICE_HEADERS)
        
        if response.status_code == 200:
            return [{'id': group['id'], 'name': group['name']} for group in response.json()['response']]
        print(f'Failed to retrieve DocSpace groups: {response.status_code} - {response.text}')
        return []
    
    # Step 2: Create a Dropbox folder for each DocSpace group
    def create_dropbox_group_folder(group_name):
        folder_path = f'/DocSpace_Groups/{group_name.replace(" ", "_")}'
        try:
            dbx.files_create_folder_v2(folder_path)
            print(f'Folder created: {folder_path}')
            return folder_path
        except dropbox.exceptions.ApiError as e:
            print(f'Failed to create folder for {group_name}: {e}')
            return None
    
    # Step 3: Retrieve DocSpace group members
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
        docspace_groups = get_docspace_groups()
        for group in docspace_groups:
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
2. Before you can make requests to the API, you need to create a DocSpace API key. Check out the [API keys article](/docspace/api-backend/get-started/authentication/api-keys/) to learn how to obtain and use API keys.
3. Create a [Dropbox App](https://www.dropbox.com/developers) with `files.content.write` and `sharing.write` permissions.

Finally install the [Dropbox Python SDK](https://www.dropbox.com/developers/documentation/python#install):
```bash
pip install dropbox
```

## Step 1: Retrieve DocSpace groups
Use a [`GET /api/2.0/group`](/docspace/api-backend/usage-api/get-groups) request to retrieve the group ID and the group name for each team.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 1: Retrieve DocSpace groups
    def get_docspace_groups():
        url = f'https://{ONLYOFFICE_API_HOST}/api/2.0/group'
        response = requests.get(url, headers=ONLYOFFICE_HEADERS)
        
        if response.status_code == 200:
            return [{'id': group['id'], 'name': group['name']} for group in response.json()['response']]
        print(f'Failed to retrieve DocSpace groups: {response.status_code} - {response.text}')
        return []

    if __name__ == '__main__':
        docspace_groups = get_docspace_groups()
    ```

  </TabItem>
</Tabs>

## Step 2: Create shared Dropbox folders
Use Dropbox client to generate a Dropbox folder for each DocSpace group.

<Tabs>
  <TabItem value="py" label="Python">

    ``` py
    # Step 2: Create a Dropbox folder for each DocSpace group
    def create_dropbox_group_folder(group_name):
        folder_path = f'/DocSpace_Groups/{group_name.replace(" ", "_")}'
        try:
            dbx.files_create_folder_v2(folder_path)
            print(f'Folder created: {folder_path}')
            return folder_path
        except dropbox.exceptions.ApiError as e:
            print(f'Failed to create folder for {group_name}: {e}')
            return None

    if __name__ == '__main__':
        docspace_groups = get_docspace_groups()
        for group in docspace_groups:
            folder = create_dropbox_group_folder(group['name'])
    ```

  </TabItem>
</Tabs>

## Step 3: Retrieve DocSpace group members
Use a [`GET /api/2.0/group/{group_id}`](/docspace/api-backend/usage-api/get-group) to get a group by ID and extract user names and emails.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 3: Retrieve DocSpace group members
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
        docspace_groups = get_docspace_groups()
        for group in docspace_groups:
            folder = create_dropbox_group_folder(group['name'])
            if folder:
                members = get_group_members(group['id'])
    ```

  </TabItem>
</Tabs>

## Step 4: Share the Dropbox folders with the group members
Use Dropbox client to share Dropbox folders with DocSpace group members.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 4: Share the Dropbox group folder with its members
    def share_dropbox_group_folder(folder_path, group_members):
        for member in group_members:
            try:
                shared_link_metadata = dbx.sharing_create_shared_link_with_settings(folder_path)
                print(f'Folder shared with {member["email"]}: {shared_link_metadata.url}')
            except dropbox.exceptions.ApiError as e:
                print(f'Failed to share folder with {member["email"]}: {e}')
    
    if __name__ == '__main__':
        docspace_groups = get_docspace_groups()
        for group in docspace_groups:
            folder = create_dropbox_group_folder(group['name'])
            if folder:
                members = get_group_members(group['id'])
                if members:
                    share_dropbox_group_folder(folder, members)
    ```

  </TabItem>
</Tabs>