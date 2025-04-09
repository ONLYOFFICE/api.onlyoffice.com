---
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Files CRUD
This example demonstrates how to:
- Create a new empty file: Create a blank document in a specific folder.
- Upload a new file: Add a file to a specific folder in DocSpace.
- Update an existing file: Replace or edit an existing file.
- Delete a file: Remove a file from the system.

<Tabs>
  <TabItem value="py" label="Python">
``` py
import requests

BASE_URL = 'https://yourportal.onlyoffice.com'
API_KEY = 'YOUR_API_KEY'

headers = {
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
}

def create_file(folder_id, file_name):
    url = f'{BASE_URL}/api/2.0/files/{folder_id}/file'
    data = {
        'title': file_name
    }
    requests.post(url, headers=headers, json=data)

def upload_file(folder_id, file_path):
    url = f'{BASE_URL}/api/2.0/files/{folder_id}/upload'
    headers = {
        'Authorization': f'Bearer {API_KEY}'
    }

    with open(file_path, 'rb') as file:
        files = {
            'file': (file_path, file, 'application/octet-stream')
        }
        response = requests.post(url, headers=headers, files=files)
        print(response.status_code, response.text)
        return response

def update_file(file_id, new_file_path):
    url = f'{BASE_URL}/api/2.0/files/file/{file_id}'
    files = {'file': open(new_file_path, 'rb')}
    requests.put(url, headers=headers, files=files)

def delete_file(file_id):
    url = f'{BASE_URL}.api/2.0/files/file/{file_id}'
    data = {
        'immediately': True
    }
    requests.delete(url, headers=headers, json=data)

def main():
    folder_id = 776261 # Replace with actual folder ID
    file_name = 'NewDocument1.docx' # Replace with actual file name
    file_path = 'path/to/upload_file.txt' # Replace with actual file path
    updated_file_path = 'path/to/updated_file.txt' # Replace with actual updated file path
    file_id = 1187261 # Replace with actual file ID

    #Step 1
    create_file(folder_id, file_name)

    #Step 2
    upload_file(folder_id, file_path)

    #Step 3
    update_file(file_id, updated_file_path)

    #Step 4
    delete_file(file_id)
    ```
  </TabItem>
</Tabs>

## Before you start

1.	Replace 'https://yourportal.onlyoffice.com' and 'YOUR_API_KEY' with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2.	Before you can make requests to the API, you need to authenticate. Check out the authentication example to learn how to obtain and use access tokens.

## Step 1: Create an Empty File
Use Create a file method to create an empty file in a specific folder.
<Tabs>
  <TabItem value="py" label="Python">
``` py
def create_file(folder_id, file_name):
    url = f'{BASE_URL}/api/2.0/files/{folder_id}/file'
    data = {
        'title': file_name
    }
    requests.post(url, headers=headers, json=data)
```
  </TabItem>
</Tabs>

## Step 2: Upload a File
Use Upload a file method to upload a file to a folder.
<Tabs>
  <TabItem value="py" label="Python">
``` py
def upload_file(folder_id, file_path):
    url = f'{BASE_URL}/api/2.0/files/{folder_id}/upload'
    headers = {
        'Authorization': f'Bearer {API_KEY}'
    }

    with open(file_path, "rb") as file:
        files = {
            'file': (file_path, file, 'application/octet-stream')
        }
        response = requests.post(url, headers=headers, files=files)

        print(response.status_code, response.text)
        return response
    ```
  </TabItem>
</Tabs>

## Step 3: Update an Existing File
Use Update a file method to update an existing file.
<Tabs>
  <TabItem value="py" label="Python">
``` py
def update_file(file_id, new_file_path):
    url = f'{BASE_URL}/api/2.0/files/file/{file_id}'
    files = {'file': open(new_file_path, 'rb')}
    requests.put(url, headers=headers, files=files)
```
  </TabItem>
</Tabs>

## Step 4: Delete a File
Use Delete a file method to remove a file.
<Tabs>
  <TabItem value="py" label="Python">
``` py
def delete_file(file_id):
    url = f'{BASE_URL}.api/2.0/files/file/{file_id}'
    data = {
        'immediately': True
    }
    requests.delete(url, headers=headers, json=data)
    ```
  </TabItem>
</Tabs>
