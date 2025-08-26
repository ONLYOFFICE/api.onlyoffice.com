import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get Current Token Permissions

This example demonstrates how to retrieve the list of permissions (scopes) associated with the currently authenticated token in ONLYOFFICE DocSpace. It helps verify which actions the token can perform (e.g., file access, room management, user operations).

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

  // Step 1: Retrieve the current token's permissions
  function getTokenPermissions() {
    const url = `${API_HOST}/api/2.0/keys/permissions`;

    return fetch(url, { method: 'GET', headers: HEADERS })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          throw new Error(`Failed to get key permissions: ${t}`);
        });
      })
      .then((data) => {
        const permissions = data?.response || [];
        console.log('Current Token Permissions:');
        permissions.forEach((perm) => console.log(`• ${perm}`));
        return permissions;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  // Run the method
  getTokenPermissions();
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

  # Step 1: Retrieve the current token's permissions
  def get_token_permissions():
    url = f'{API_HOST}/api/2.0/keys/permissions'
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      permissions = response.json().get('response', [])
      print('Current Token Permissions:')
      for perm in permissions:
        print(f'• {perm}')
    else:
      raise Exception(f'Failed to get key permissions: {response.text}')

  # Run the method
  if __name__ == '__main__':
    get_token_permissions()
  ```

  </TabItem>
</Tabs>
</details>

## How it works
A GET request is sent to [/api/2.0/keys/permissions](/docspace/api-backend/usage-api/get-all-permissions) to fetch the list of scopes granted to the current token.

No request body or parameters are required. The response includes permissions such as:

- `files:read`
- `files:write`
- `rooms:read`
- `accounts:read`