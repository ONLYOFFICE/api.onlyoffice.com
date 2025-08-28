import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Restore file to previous version

This example demonstrates how to retrieve the edit history of a file in ONLYOFFICE DocSpace and restore it to a specific previous version using the API.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
  };

  // Step 1: Get file version history
  async function getFileVersions(fileId) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/edit/history`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const text = await res.text();
      console.log('Failed to retrieve versions:', text);
      return [];
    }

    const data = await res.json();
    const versions = data?.response ?? [];
    console.log('Available versions:');
    for (const v of versions) {
      console.log(`- Version ${v.version} created at ${v.created}`);
    }
    return versions;
  }

  // Step 2: Restore file to specific version
  async function restoreFileVersion(fileId, versionNumber) {
    const params = new URLSearchParams({ version: String(versionNumber) });
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/restoreversion?${params}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (res.ok) {
      console.log(`File restored to version ${versionNumber}`);
    } else {
      const text = await res.text();
      console.log(`Failed to restore to version ${versionNumber}: ${res.status}`);
      console.log('Response:', text);
    }
  }

  // Run the flow
  (async () => {
    const file_id = 1569862; // Replace with your file ID
    const versions = await getFileVersions(file_id);

    if (versions && versions.length > 1) {
      const target_version = versions[0].version;
      await restoreFileVersion(file_id, target_version);
    } else {
      console.log('No previous versions available for restore.');
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "your_api_key"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}"
  }

  # Step 1: Get file version history
  def get_file_versions(file_id):
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/edit/history"
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
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/restoreversion"
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

  </TabItem>
</Tabs>
</details>

## Step 1: Get file version history

A GET request is sent to [/api/2.0/files/file/:fileId/edit/history](/docspace/api-backend/usage-api/get-edit-history).

Returns a list of all saved versions with `version` and `created` timestamps.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getFileVersions(fileId) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/edit/history`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const text = await res.text();
      console.log('Failed to retrieve versions:', text);
      return [];
    }

    const data = await res.json();
    const versions = data?.response ?? [];
    console.log('Available versions:');
    for (const v of versions) {
      console.log(`- Version ${v.version} created at ${v.created}`);
    }
    return versions;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_file_versions(file_id):
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/edit/history"
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

  </TabItem>
</Tabs>

## Step 2: Restore to specific version

A GET request is sent to [/api/2.0/files/file/:fileId/restoreversion](/docspace/api-backend/usage-api/restore-file-version).

This method requires the following query parameter:

- `version`. The file version number to restore.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function restoreFileVersion(fileId, versionNumber) {
    const params = new URLSearchParams({ version: String(versionNumber) });
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/restoreversion?${params}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (res.ok) {
      console.log(`File restored to version ${versionNumber}`);
    } else {
      const text = await res.text();
      console.log(`Failed to restore to version ${versionNumber}: ${res.status}`);
      console.log('Response:', text);
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def restore_file_version(file_id, version_number):
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/restoreversion"
    params = { "version": version_number }
    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      print(f"File restored to version {version_number}")
    else:
      print(f"Failed to restore to version {version_number}: {response.status_code}")
      print("Response:", response.text)
  ```

  </TabItem>
</Tabs>
