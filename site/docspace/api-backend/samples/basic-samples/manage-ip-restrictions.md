import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage IP restrictions

This example demonstrates how to retrieve and update IP restriction settings in ONLYOFFICE DocSpace using API requests. IP restrictions enhance security by controlling which IP addresses are allowed access, ensuring that only authorized users can log in from designated networks.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/manage-ip-restrictions.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/manage-ip-restrictions.py)

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
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Update IP restrictions settings
  async function saveRestrictions(ipRestrictions, enable = true) {
    const url = `${API_HOST}/api/2.0/settings/iprestrictions`;
    const body = JSON.stringify({ enable, ipRestrictions });

    const res = await fetch(url, { method: 'PUT', headers: HEADERS, body });
    if (!res.ok) {
      const text = await res.text();
      console.log(`IP restrictions update failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }
    const settings = await res.json();
    console.log('IP restrictions updated successfully.');
    return settings;
  }

  // Step 2: Retrieve current IP restrictions settings
  async function getRestrictions() {
    const url = `${API_HOST}/api/2.0/settings/iprestrictions`;

    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const text = await res.text();
      console.log(`IP restrictions retrieval failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }
    const settings = await res.json();
    console.log('IP restrictions settings retrieved:', settings);
    return settings;
  }

  // Run
  (async () => {
    await saveRestrictions([
      { ip: '192.168.1.1', forAdmin: true },
    ]);

    await getRestrictions();
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'
 
  # Headers with API key for authentication
  HEADERS = {
    'Accept': 'application/json',
    'Authorization': f'Bearer {API_KEY}',
    'Content-Type': 'application/json'
  }

  # Step 1: Update IP restrictions settings
  def save_restrictions(ip_restrictions, enable=True):
    url = f'{API_HOST}/api/2.0/settings/iprestrictions'
    data = {
      'enable': enable,
      'ipRestrictions': ip_restrictions
    }
    
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      settings = response.json()
      print('IP restrictions updated successfully.')
      return settings
    else:
      print(f"IP restrictions update failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Step 2: Retrieve current IP restrictions settings
  def get_restrictions():
    url = f'{API_HOST}/api/2.0/settings/iprestrictions'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      settings = response.json()
      print(f'IP restrictions settings retrieved: {settings}')
      return settings
    else:
      print(f"IP restrictions retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None
 
  if __name__ == "__main__":
    # Step 1: Update IP restrictions settings
    save_restrictions([
      { "ip": "192.168.1.1", "forAdmin": True }
    ])
 
    # Step 2: Retrieve current IP restrictions settings
    get_restrictions()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Update IP restrictions

A PUT request is sent to [/api/2.0/settings/iprestrictions](/docspace/api-backend/usage-api/save-ip-restrictions) with:

- `enable`: Whether to enable or disable restrictions.
- `ipRestrictions`: A list of allowed IP addresses.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function saveRestrictions(ipRestrictions, enable = true) {
    const url = `${API_HOST}/api/2.0/settings/iprestrictions`;
    const body = JSON.stringify({ enable, ipRestrictions });

    const res = await fetch(url, { method: 'PUT', headers: HEADERS, body });
    if (!res.ok) {
      const text = await res.text();
      console.log(`IP restrictions update failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }
    const settings = await res.json();
    console.log('IP restrictions updated successfully.');
    return settings;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def save_restrictions(ip_restrictions, enable=True):
    url = f'{API_HOST}/api/2.0/settings/iprestrictions'
    data = {
      'enable': enable,
      'ipRestrictions': ip_restrictions
    }
    
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      settings = response.json()
      print('IP restrictions updated successfully.')
      return settings
    else:
      print(f"IP restrictions update failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Retrieve IP restrictions

A GET request is sent to [/api/2.0/settings/iprestrictions](/docspace/api-backend/usage-api/get-ip-restrictions).

Fetches the current security policy to verify allowed addresses.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getRestrictions() {
    const url = `${API_HOST}/api/2.0/settings/iprestrictions`;

    const res = await fetch(url, { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const text = await res.text();
      console.log(`IP restrictions retrieval failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }
    const settings = await res.json();
    console.log('IP restrictions settings retrieved:', settings);
    return settings;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_restrictions():
    url = f'{API_HOST}/api/2.0/settings/iprestrictions'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      settings = response.json()
      print(f'IP restrictions settings retrieved: {settings}')
      return settings
    else:
      print(f"IP restrictions retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>
