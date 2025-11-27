import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage document templates

This example demonstrates how to add files to the templates list and remove them in ONLYOFFICE DocSpace using API requests.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const API_HOST = 'yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Add files to the templates list
  async function addTemplates(fileIds) {
    const url = `https://${API_HOST}/api/2.0/files/templates`;
    const payload = { fileIds };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const data = await res.json();
      const ok = data.response ?? true;
      console.log('Templates added successfully.');
      return ok;
    }

    const text = await res.text();
    console.log(`Failed to add templates: ${res.status} - ${text}`);
    return null;
  }

  // Step 2: Remove files from the templates list
  async function deleteTemplates(fileIds) {
    const url = `https://${API_HOST}/api/2.0/files/templates`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
      body: JSON.stringify(fileIds),
    });

    if (res.status === 200) {
      const data = await res.json();
      const ok = data.response ?? true;
      console.log('Templates removed successfully.');
      return ok;
    }

    const text = await res.text();
    console.log(`Failed to remove templates: ${res.status} - ${text}`);
    return null;
  }

  // Example usage
  (async () => {
    const fileIds = [2151627, 2151597]; // Replace with actual file IDs

    // Step 1
    await addTemplates(fileIds);

    // Step 2
    await deleteTemplates(fileIds);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests

  # Set API base URL
  API_HOST = 'yourportal.onlyoffice.com'
  API_KEY  = 'your_api_key'

  # Headers with API key for authentication
  HEADERS = {
    'Accept': 'application/json',
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
  }

  # Step 1: Add files to the templates list
  def add_templates(file_ids: list[int]):
    url = f'https://{API_HOST}/api/2.0/files/templates'
    payload = {'fileIds': file_ids}
    response = requests.post(url, json=payload, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      ok = data.get('response', True)
      print('Templates added successfully.')
      return ok
    else:
      print(f'Failed to add templates: {response.status_code} - {response.text}')
      return None

  # Step 2: Remove files from the templates list
  def delete_templates(file_ids: list[int]):
    url = f'https://{API_HOST}/api/2.0/files/templates'
    response = requests.delete(url, json=file_ids, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      ok = data.get('response', True)
      print('Templates removed successfully.')
      return ok
    else:
      print(f'Failed to remove templates: {response.status_code} - {response.text}')
      return None

  if __name__ == "__main__":
    file_ids = [2151627, 2151597]  # Replace with actual file IDs
    # Step 1
    add_templates(file_ids)
    # Step 2
    delete_templates(file_ids)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Add files to templates

A POST request is sent to [/api/2.0/files/templates](/docspace/api-backend/usage-api/add-templates) with:

- `fileIds`: An array of file IDs to add to the templates list.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function addTemplates(fileIds) {
    const url = `https://${API_HOST}/api/2.0/files/templates`;
    const payload = { fileIds };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const data = await res.json();
      const ok = data.response ?? true;
      console.log('Templates added successfully.');
      return ok;
    }

    const text = await res.text();
    console.log(`Failed to add templates: ${res.status} - ${text}`);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def add_templates(file_ids: list[int]):
    url = f'https://{API_HOST}/api/2.0/files/templates'
    payload = {'fileIds': file_ids}
    response = requests.post(url, json=payload, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      ok = data.get('response', True)
      print('Templates added successfully.')
      return ok
    else:
      print(f'Failed to add templates: {response.status_code} - {response.text}')
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Remove files from templates
A DELETE request is sent to [/api/2.0/files/templates](/docspace/api-backend/usage-api/delete-templates).

Body contains an array of file IDs to remove.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function deleteTemplates(fileIds) {
    const url = `https://${API_HOST}/api/2.0/files/templates`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
      body: JSON.stringify(fileIds),
    });

    if (res.status === 200) {
      const data = await res.json();
      const ok = data.response ?? true;
      console.log('Templates removed successfully.');
      return ok;
    }

    const text = await res.text();
    console.log(`Failed to remove templates: ${res.status} - ${text}`);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_templates(file_ids: list[int]):
    url = f'https://{API_HOST}/api/2.0/files/templates'
    response = requests.delete(url, json=file_ids, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      ok = data.get('response', True)
      print('Templates removed successfully.')
      return ok
    else:
      print(f'Failed to remove templates: {response.status_code} - {response.text}')
      return None
  ```

  </TabItem>
</Tabs>
