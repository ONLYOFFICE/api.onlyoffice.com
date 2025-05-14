# Restore file to previous version
This example demonstrates how to retrieve the edit history of a file in ONLYOFFICE DocSpace and restore it to a specific previous version using the API.

## Before you start
1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](../../../get-started/authentication/personal-access-tokens) example to learn how to obtain and use access tokens.


<details>
  <summary>Full Example</summary>

``` py
import requests

# Set API base URL
API_HOST = "yourportal.onlyoffice.com"
API_KEY = "your_api_key"

# Headers with API key for authentication
HEADERS = {
    "Authorization": f"Bearer {API_KEY}"
}

# Step 1: Get file version history
def get_file_versions(file_id):
    url = f"https://{API_HOST}/api/2.0/files/file/{file_id}/edit/history"
    response = requests.get(url, headers=HEADERS)
    
    if response.status_code == 200:
        data = response.json()
        versions = data.get("response", [])
        print("Available versions:")
        for v in versions:
            print(f"- Version {v['version']} created at {v['created']}")
        return versions
    else:
        print("Failed to retrieve versions:", response.text)
        return []

# Step 2: Restore file to specific version
def restore_file_version(file_id, version_number):
    url = f"https://{API_HOST}/api/2.0/files/file/{file_id}/restoreversion"
    params = { "version": version_number }
    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
        print(f"File restored to version {version_number}")
    else:
        print(f"Failed to restore to version {version_number}: {response.status_code}")
        print("Response:", response.text)

# Run the flow
if __name__ == "__main__":
    file_id = 1569862  # Replace with your file ID
    versions = get_file_versions(file_id)

    if versions and len(versions) > 1:
        target_version = versions[0]["version"]
        restore_file_version(file_id, target_version)
    else:
        print("No previous versions available for restore.")
```

</details>

## Step 1: Get File Version History
- A GET request is sent to [/api/2.0/files/file/:fileId/edit/history](../../../usage-api/get-file-history).
- Returns a list of all saved versions with `version` and `created` timestamps.

``` py
def get_file_versions(file_id):
    url = f"https://{API_HOST}/api/2.0/files/file/{file_id}/edit/history"
    response = requests.get(url, headers=HEADERS)
    
    if response.status_code == 200:
        data = response.json()
        versions = data.get("response", [])
        print("Available versions:")
        for v in versions:
            print(f"- Version {v['version']} created at {v['created']}")
        return versions
    else:
        print("Failed to retrieve versions:", response.text)
        return []
```

## Step 2: Restore to Specific Version
- A GET request is sent to [/api/2.0/files/file/:fileId/restoreversion](../../../usage-api/restore-version).
- Requires query parameter `version={version_number}`.

``` py
def restore_file_version(file_id, version_number):
    url = f"https://{API_HOST}/api/2.0/files/file/{file_id}/restoreversion"
    params = { "version": version_number }
    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
        print(f"File restored to version {version_number}")
    else:
        print(f"Failed to restore to version {version_number}: {response.status_code}")
        print("Response:", response.text)
```