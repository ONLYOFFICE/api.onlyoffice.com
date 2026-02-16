import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set developer tools access

This example demonstrates how to configure Developer Tools access settings in ONLYOFFICE DocSpace. You can allow full access or limit it for regular users.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/set-developer-tools-access.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/set-developer-tools-access.py)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set your DocSpace portal URL and token
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const AUTH_TOKEN = 'your_access_token';

  const HEADERS = { Authorization: AUTH_TOKEN };

  // Step 1: Set Developer Tools access
  async function setDevtoolsAccess(limited = true) {
    const url = `${API_HOST}/api/2.0/settings/devtoolsaccess`;
    const payload = { limitedAccessForUsers: limited };

    const res = await fetch(url, {
      method: 'POST',
      headers: { ...HEADERS, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Failed to update access settings. Status code: ${res.status}, Message: ${text}`);
      return null;
    }

    const data = (await res.json())?.response ?? {};
    console.log('Developer Tools access settings updated:');
    console.log(`• Limited for users: ${data.limitedAccessForUsers}`);
    console.log(`• Last Modified: ${data.lastModified}`);
    return data;
  }

  // Example usage
  (async () => {
    try {
      console.log('Setting Developer Tools access...');
      await setDevtoolsAccess(false); // True = limit for users, False = allow full access
    } catch (err) {
      console.error(err.message);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set your DocSpace portal URL and token
  API_HOST = 'https://yourportal.onlyoffice.com'
  AUTH_TOKEN = 'your_access_token'

  HEADERS = {'Authorization': AUTH_TOKEN}

  # Step 1: Set Developer Tools access
  def set_devtools_access(limited=True):
    url = f'{API_HOST}/api/2.0/settings/devtoolsaccess'
    payload = { 'limitedAccessForUsers': limited }

    response = requests.post(url, headers=HEADERS, json=payload)

    if response.status_code == 200:
      data = response.json().get('response', {})
      print('Developer Tools access settings updated:')
      print(f'• Limited for users: {data.get('limitedAccessForUsers')}')
      print(f'• Last Modified: {data.get('lastModified')}')
      return data
    else:
      print(f"Failed to update access settings. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Example usage
  if __name__ == '__main__':
    print('Setting Developer Tools access...')
    set_devtools_access(limited=False)  # True = limit for users, False = allow full access
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A POST request is sent to [/api/2.0/settings/devtoolsaccess](/docspace/api-backend/usage-api/set-tenant-dev-tools-access-settings) with:

limitedAccessForUsers:

- `true` — restrict Developer Tools for regular users
- `false` — allow all users full access