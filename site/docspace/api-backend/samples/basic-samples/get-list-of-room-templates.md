import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get a list of room templates

This example demonstrates how to retrieve the list of room templates available in ONLYOFFICE DocSpace using the API.
Templates are returned as folders from the Templates area, so the integration can display them in an external UI or select one for later room creation.

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
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  // Step 1: Get room templates list
  function getRoomTemplates() {
    const url = `${API_HOST}/api/2.0/files/rooms?searchArea=Templates`;

    return fetch(url, {
      method: 'GET',
      headers: HEADERS,
    })
      .then(async (res) => {
        if (res.status === 200) return res.json();
        const text = await res.text();
        console.log(`Templates request failed. Status code: ${res.status}, Message: ${text}`);
        return null;
      })
      .catch((err) => {
        console.log(`Templates request error: ${err.message}`);
        return null;
      });
  }

  // Run
  getRoomTemplates().then((data) => {
    const templates = Array.isArray(data?.response?.folders) ? data.response.folders : [];
    console.log('Templates:', templates);
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'YOUR_API_KEY'

  # Headers with API key for authentication
  HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Accept': 'application/json',
  }

  # Step 1: Get room templates list
  def get_room_templates():
    url = f'{API_HOST}/api/2.0/files/rooms?searchArea=Templates'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()
    else:
      print(f"Templates request failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  if __name__ == "__main__":
    data = get_room_templates()
    templates = (data or {}).get('response', {}).get('folders', [])

    if isinstance(templates, list):
      print('Templates:', templates)
    else:
      print('Templates: []')
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/files/rooms?searchArea=Templates](/docspace/api-backend/usage-api/get-rooms-folder) to load templates from the Templates area.

The response includes:

- `response.folders`: the list of template rooms (each template is returned as a folder-like object).
- Each template typically contains fields like:
  - `id`: template identifier (used later to create rooms from template),
  - `title`: template name,
  - optional metadata (creation date, owner, flags), depending on the portal build.
