import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# View and configure authorization services

Authorization services in ONLYOFFICE DocSpace are **integration profiles** that store API keys and settings for external systems (for example, third-party services or connectors) which need authorization keys (tokens, client IDs, secrets, etc.).  

With these methods you can:

- Get the list of available authorization services.
- Save or update authorization keys for a specific service.


## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  // Get list of authorization services
  async function getAuthServices() {
    const url = `${BASE_URL}/api/2.0/settings/authservice`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      console.log(`Request failed: ${res.status}`);
      console.log(await res.text());
      return null;
    }

    const json = await res.json();
    const data = json.response || json;
    console.log('Authorization services:');
    console.log(JSON.stringify(data, null, 2));
    return data;
  }

  // Save authorization keys for a service
  async function saveAuthKeys() {
    const url = `${BASE_URL}/api/2.0/settings/authservice`;

    const body = {
      name: 'my-service',           // internal service name
      title: 'My Integration',      // display title
      description: 'Demo auth service.',
      instruction: 'Add your keys here.',
      canSet: true,
      props: [
        {
          name: 'api_key',
          value: 'YOUR_EXTERNAL_API_KEY',
          title: 'API key',
        },
        {
          name: 'api_secret',
          value: 'YOUR_EXTERNAL_API_SECRET',
          title: 'API secret',
        },
      ],
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.log(`Request failed: ${res.status}`);
      console.log(await res.text());
      return null;
    }

    const json = await res.json();
    const changed = json.response;
    console.log('Authorization keys saved:', changed);
    return changed;
  }

  // Example usage
  (async () => {
    // 1. View available authorization services
    await getAuthServices();

    // 2. Save or update keys for a specific service
    await saveAuthKeys();
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests

  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json",
  }

  # Get list of authorization services
  def get_auth_services():
    url = f"{BASE_URL}/api/2.0/settings/authservice"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

    raw = response.json()
    data = raw.get("response", raw)
    print("Authorization services:")
    print(json.dumps(data, indent=2))
    return data


  # Save authorization keys for a service
  def save_auth_keys():
    url = f"{BASE_URL}/api/2.0/settings/authservice"

    payload = {
      "name": "my-service",             # internal service name
      "title": "My Integration",        # display title
      "description": "Demo auth service.",
      "instruction": "Add your keys here.",
      "canSet": True,
      "props": [
        {
          "name": "api_key",
          "value": "YOUR_EXTERNAL_API_KEY",
          "title": "API key",
        },
        {
          "name": "api_secret",
          "value": "YOUR_EXTERNAL_API_SECRET",
          "title": "API secret",
        },
      ],
    }

    response = requests.post(url, headers=HEADERS, json=payload)

    if not response.ok:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

    data = response.json().get("response")
    print("Authorization keys saved:", data)
    return data


  if __name__ == "__main__":
    # 1. View available authorization services
    get_auth_services()

    # 2. Save or update keys for a specific service
    save_auth_keys()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get authorization services

A GET request is sent to [/api/2.0/settings/authservice](/docspace/api-backend/usage-api/get-auth-services).

This returns the list of authorization services available in the portal:

- `name`: internal service name.
- `title`: user-friendly title.
- `description`: short explanation of the service.
- `instruction`: instructions on how to configure the service.
- `canSet`: whether the service can be configured.
- `props`: list of keys that can be filled (for example, API key, client ID, client secret).

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getAuthServices() {
    const url = `${BASE_URL}/api/2.0/settings/authservice`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      console.log(`Request failed: ${res.status}`);
      console.log(await res.text());
      return null;
    }

    const json = await res.json();
    const data = json.response || json;
    console.log('Authorization services:');
    console.log(JSON.stringify(data, null, 2));
    return data;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_auth_services():
    url = f"{BASE_URL}/api/2.0/settings/authservice"
    response = requests.get(url, headers=HEADERS)

    if not response.ok:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

    raw = response.json()
    data = raw.get("response", raw)
    print("Authorization services:")
    print(json.dumps(data, indent=2))
    return data
  ```

  </TabItem>
</Tabs>

## Step 2: Save authorization keys for a service

A POST request is sent to [/api/2.0/settings/authservice](/docspace/api-backend/usage-api/save-auth-keys).

You send:

- Service metadata (`name`, `title`, `description`, `instruction`, `canSet`).

- `props` – a list of authorization keys:

  - `name` – key name (for example, `api_key`).
  - `value` – key value (for example, the actual API key).
  - `title` – display title for the key.

If the request is successful, the API returns `true` in `response`, which means that the authorization keys were changed.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function saveAuthKeys() {
    const url = `${BASE_URL}/api/2.0/settings/authservice`;

    const body = {
      name: 'my-service',           // internal service name
      title: 'My Integration',      // display title
      description: 'Demo auth service.',
      instruction: 'Add your keys here.',
      canSet: true,
      props: [
        {
          name: 'api_key',
          value: 'YOUR_EXTERNAL_API_KEY',
          title: 'API key',
        },
        {
          name: 'api_secret',
          value: 'YOUR_EXTERNAL_API_SECRET',
          title: 'API secret',
        },
      ],
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      console.log(`Request failed: ${res.status}`);
      console.log(await res.text());
      return null;
    }

    const json = await res.json();
    const changed = json.response;
    console.log('Authorization keys saved:', changed);
    return changed;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def save_auth_keys():
    url = f"{BASE_URL}/api/2.0/settings/authservice"

    payload = {
      "name": "my-service",             # internal service name
      "title": "My Integration",        # display title
      "description": "Demo auth service.",
      "instruction": "Add your keys here.",
      "canSet": True,
      "props": [
        {
          "name": "api_key",
          "value": "YOUR_EXTERNAL_API_KEY",
          "title": "API key",
        },
        {
          "name": "api_secret",
          "value": "YOUR_EXTERNAL_API_SECRET",
          "title": "API secret",
        },
      ],
    }

    response = requests.post(url, headers=HEADERS, json=payload)

    if not response.ok:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

    data = response.json().get("response")
    print("Authorization keys saved:", data)
    return data
  ```

  </TabItem>
</Tabs>