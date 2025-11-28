import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# List all API Keys

This example demonstrates how to retrieve all API keys associated with the current user in ONLYOFFICE DocSpace. The response includes metadata such as name, permissions, status, and expiration date.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set your DocSpace portal URL and access token
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with authorization token
  const HEADERS = {
    Authorization: API_KEY,
  };

  // Step 1: Get all API keys for the current user
  function listApiKeys() {
    const url = `${API_HOST}/api/2.0/keys`;

    return fetch(url, { method: 'GET', headers: HEADERS })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          console.log(`API keys retrieval failed. Status code: ${res.status}, Message: ${t}`);
          return null;
        });
      })
      .then((data) => {
        const keys = data?.response || [];
        console.log(`Found ${keys.length} API key(s):`);
        keys.forEach((key) => {
          console.log(`\n• Name: ${key.name}`);
          console.log(`  Postfix: ${key.keyPostfix}`);
          console.log(`  Active: ${key.isActive}`);
          console.log(`  Permissions: ${key.permissions}`);
          console.log(`  Created on: ${key.createOn}`);
          console.log(`  Last used: ${key.lastUsed}`);
          console.log(`  Expires at: ${key.expiresAt}`);
        });
        return keys;
      })
      .catch((err) => {
        console.log(`API keys retrieval error: ${err.message}`);
        return null;
      });
  }

  // Run the method
  listApiKeys();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set your DocSpace portal URL and access token
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  # Headers with authorization token
  HEADERS = {
    'Authorization': API_KEY
  }

  # Step 1: Get all API keys for the current user
  def list_api_keys():
    url = f'{API_HOST}/api/2.0/keys'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      keys = response.json().get('response', [])
      print(f'Found {len(keys)} API key(s):')
      for key in keys:
        print(f'\n• Name: {key.get('name')}')
        print(f'  Postfix: {key.get('keyPostfix')}')
        print(f'  Active: {key.get('isActive')}')
        print(f'  Permissions: {key.get('permissions')}')
        print(f'  Created on: {key.get('createOn')}')
        print(f'  Last used: {key.get('lastUsed')}')
        print(f'  Expires at: {key.get('expiresAt')}')
    else:
      print(f"API keys retrieval failed. Status code: {response.status_code}, Message: {response.text}")

  # Run the method
  if __name__ == '__main__':
    list_api_keys()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/keys](/docspace/api-backend/usage-api/get-api-keys) to fetch all API keys created by the current user.

The response includes:

- `name`: Display name of the key
- `keyPostfix`: The postfix of the actual key string
- `isActive`: Indicates if the key is currently active
- `permissions`: List of allowed scopes
- `createOn`: Key creation date
- `lastUsed`: Timestamp of last usage
- `expiresAt`: Expiration timestamp