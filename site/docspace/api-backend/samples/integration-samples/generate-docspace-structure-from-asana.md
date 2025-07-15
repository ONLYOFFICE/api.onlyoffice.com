import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Generate DocSpace Structure from Asana Projects
This integration creates collaboration rooms in ONLYOFFICE DocSpace based on Asana projects and generates folders for each task inside the corresponding room. This setup is ideal for aligning your document structure with your project management workflow.

## How it works
- Get projects from Asana - Retrieve all projects in your Asana workspace.
- Create rooms in DocSpace - Create a room per project in DocSpace.
- Get tasks per project - Fetch all tasks from each Asana project.
- Create folders per task - Create a folder inside the room for each task.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    import requests

    # ONLYOFFICE DocSpace configuration
    ONLYOFFICE_API_HOST = "your-docspace.onlyoffice.com"
    ONLYOFFICE_API_KEY = "your_onlyoffice_api_key"

    # Asana configuration
    ASANA_ACCESS_TOKEN = "your_asana_token"

    ONLYOFFICE_HEADERS = {
        "Authorization": f"Bearer {ONLYOFFICE_API_KEY}",
        "Content-Type": "application/json",
        "Accept": "application/json"
    }

    # Step 1: Get all Asana projects
    def get_asana_projects():
        url = "https://app.asana.com/api/1.0/projects"
        headers = {"Authorization": f"Bearer {ASANA_ACCESS_TOKEN}"}
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json().get("data", [])
        else:
            print(f"Asana project fetch error: {response.status_code}")
            return []

    # Step 2: Get all tasks for a given project
    def get_asana_project_tasks(project_id):
        url = f"https://app.asana.com/api/1.0/projects/{project_id}/tasks"
        headers = {"Authorization": f"Bearer {ASANA_ACCESS_TOKEN}"}
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json().get("data", [])
        else:
            print(f"Asana task fetch error: {response.status_code}")
            return []

    # Step 3: Create a DocSpace room using the project name
    def create_docspace_room(room_title):
        url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/rooms"
        payload = {
            "title": room_title,
            "roomType": 2,  # Collaboration room
            "private": True
        }
        response = requests.post(url, headers=ONLYOFFICE_HEADERS, json=payload)
        if response.status_code == 200:
            room_id = response.json().get("response", {}).get("id")
            print(f"Room created: {room_title}")
            return room_id
        else:
            print(f"DocSpace room creation error: {response.status_code}, {response.text}")
            return None

    # Step 4: Create a folder for each Asana task
    def create_docspace_folder(parent_id, folder_name):
        url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/folder/{parent_id}"
        payload = { "title": folder_name }
        response = requests.post(url, headers=ONLYOFFICE_HEADERS, json=payload)
        if response.status_code == 200:
            print(f"Folder created: {folder_name}")
        else:
            print(f"DocSpace folder creation error: {response.status_code}, {response.text}")

    # Execute the full flow
    if __name__ == "__main__":
        projects = get_asana_projects()
        for project in projects:
            room_id = create_docspace_room(project["name"])
            if room_id:
                tasks = get_asana_project_tasks(project["gid"])
                for task in tasks:
                    create_docspace_folder(room_id, task["name"])
    ```

  </TabItem>
</Tabs>

## Before you start
1. Replace `yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal host and API key. Ensure you have the necessary permissions to perform user operations.
2. Before you can make requests to the API, you need to create a DocSpace API key. Check out the [API keys article](../../../get-started/authentication/api-keys/) to learn how to obtain and use API keys.
3. Create a [Personal Access Token](https://developers.asana.com/docs/personal-access-token) in your Asana developer settings. This token will be used to authenticate API requests. Make sure the token has access to the necessary projects and tasks in your Asana workspace.

## Step 1: Get all projects from Asana
Use the Asana API to retrieve all available projects in the user's workspace.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 1: Get all Asana projects
    def get_asana_projects():
        url = "https://app.asana.com/api/1.0/projects"
        headers = {"Authorization": f"Bearer {ASANA_ACCESS_TOKEN}"}
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json().get("data", [])
        else:
            print(f"Asana project fetch error: {response.status_code}")
            return []
    ```

  </TabItem>
</Tabs>

## Step 2: Get all tasks from a project
Fetch tasks related to each project using the Asana Tasks API.

<Tabs>
  <TabItem value="py" label="Python">

    ``` py
    # Step 2: Get all tasks for a given project
    def get_asana_project_tasks(project_id):
        url = f"https://app.asana.com/api/1.0/projects/{project_id}/tasks"
        headers = {"Authorization": f"Bearer {ASANA_ACCESS_TOKEN}"}
        response = requests.get(url, headers=headers)
        if response.status_code == 200:
            return response.json().get("data", [])
        else:
            print(f"Asana task fetch error: {response.status_code}")
            return []
    ```

  </TabItem>
</Tabs>

## Step 3: Create a room in DocSpace for the project
Use [`POST /api/2.0/files/rooms`](../../../usage-api/create-room) to create a collaboration room named after the project.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 3: Create a DocSpace room using the project name
    def create_docspace_room(room_title):
        url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/rooms"
        payload = {
            "title": room_title,
            "roomType": 2,  # Collaboration room
            "private": True
        }
        response = requests.post(url, headers=ONLYOFFICE_HEADERS, json=payload)
        if response.status_code == 200:
            room_id = response.json().get("response", {}).get("id")
            print(f"Room created: {room_title}")
            return room_id
        else:
            print(f"DocSpace room creation error: {response.status_code}, {response.text}")
            return None
    ```

  </TabItem>
</Tabs>

## Step 4: Create a folder for each task in the room
Use [`POST /api/2.0/files/folder/{parent_id}`](../../../usage-api/create-folder) to create folders for each task under the room.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 4: Create a folder for each Asana task
    def create_docspace_folder(parent_id, folder_name):
        url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/folder/{parent_id}"
        payload = { "title": folder_name }
        response = requests.post(url, headers=ONLYOFFICE_HEADERS, json=payload)
        if response.status_code == 200:
            print(f"Folder created: {folder_name}")
        else:
            print(f"DocSpace folder creation error: {response.status_code}, {response.text}")
    ```

  </TabItem>
</Tabs>