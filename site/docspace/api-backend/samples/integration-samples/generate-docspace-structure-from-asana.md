# Generate DocSpace structure from Asana projects

This integration creates collaboration rooms in ONLYOFFICE DocSpace based on Asana projects and generates folders for each task inside the corresponding room. This setup is ideal for aligning your document structure with your project management workflow.

## How it works

- Get projects from Asana - Retrieve all projects in your Asana workspace.
- Create rooms in DocSpace - Create a room per project in DocSpace.
- Get tasks per project - Fetch all tasks from each Asana project.
- Create folders per task - Create a folder inside the room for each task.

<details>
  <summary>Full example</summary>

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

</details>

## Before you start

1. Replace `your-docspace.onlyoffice.com` and `your_onlyoffice_api_key` with your actual DocSpace portal host and API key. Ensure you have the necessary permissions to perform user operations.
2. Before you can make requests to the API, you need to create a DocSpace API key. Check out the [API keys article](/docspace/api-backend/get-started/authentication/api-keys/) to learn how to obtain and use API keys.
3. Create a [Personal access token](https://developers.asana.com/docs/personal-access-token) in your Asana developer settings. This token will be used to authenticate API requests. Make sure the token has access to the necessary projects and tasks in your Asana workspace.
4. Replace `your_asana_token` with your actual Asana token.

## Step 1: Get all projects from Asana

Use an Asana API [`GET /api/1.0/projects`](https://developers.asana.com/reference/getprojects) request to retrieve all available projects in the user's workspace.

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

## Step 2: Get all tasks from a project

Use an Asana Tasks API [`GET /api/1.0/projects/{project_id}/tasks`](https://developers.asana.com/reference/gettasksforproject) request to fetch tasks related to each project.

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

## Step 3: Create a room in DocSpace for the project

Use [`POST /api/2.0/files/rooms`](/docspace/api-backend/usage-api/create-room) to create a collaboration room named after the project.

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

## Step 4: Create a folder for each task in the room

Use [`POST /api/2.0/files/folder/{parent_id}`](/docspace/api-backend/usage-api/create-folder) to create folders for each task under the room.

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
