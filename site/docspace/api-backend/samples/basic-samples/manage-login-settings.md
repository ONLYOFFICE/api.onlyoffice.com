import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage login settings

This example demonstrates how to configure login security settings, including failed login attempt limits, account blocking duration, and login monitoring periods using API requests. Managing these settings ensures better protection against brute-force attacks and unauthorized access.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/manage-login-settings.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/manage-login-settings.py)

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

  // Step 1: Update login settings
  async function updateLoginSettings(attemptCount, blockTime, checkPeriod) {
    const url = `${API_HOST}/api/2.0/settings/security/loginsettings`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ attemptCount, blockTime, checkPeriod }),
    });

    if (res.ok) {
      console.log('Login settings updated successfully.');
    } else {
      const text = await res.text();
      console.log(`Login settings update failed. Status code: ${res.status}, Message: ${text}`);
    }
  }

  // Step 2: Retrieve current login settings
  async function getLoginSettings() {
    const url = `${API_HOST}/api/2.0/settings/security/loginsettings`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (res.ok) {
      const settings = await res.json();
      console.log('Login settings retrieved:', settings);
      return settings;
    } else {
      const text = await res.text();
      console.log(`Login settings retrieval failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }
  }

  // Step 3: Reset login settings to default
  async function resetLoginSettings() {
    const url = `${API_HOST}/api/2.0/settings/security/loginsettings`;
    const res = await fetch(url, { method: 'DELETE', headers: HEADERS });

    if (res.ok) {
      console.log('Login settings reset to default successfully.');
    } else {
      const text = await res.text();
      console.log(`Login settings reset failed. Status code: ${res.status}, Message: ${text}`);
    }
  }

  // Run
  (async () => {
    // Step 1: Update login settings
    await updateLoginSettings(10, 30, 100);

    // Step 2: Retrieve current login settings (verify update)
    await getLoginSettings();

    // Step 3: Reset to default and verify
    await resetLoginSettings();
    await getLoginSettings();
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

  # Step 1: Update login settings
  def update_login_settings(attemptCount, blockTime, checkPeriod):
    url = f'{API_HOST}/api/2.0/settings/security/loginsettings'
    data = {
      'attemptCount': attemptCount,
      'blockTime': blockTime,
      'checkPeriod': checkPeriod
    }
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      print('Login settings updated successfully.')
    else:
      print(f"Login settings update failed. Status code: {response.status_code}, Message: {response.text}")
 
  # Step 2: Retrieve current login settings
  def get_login_settings():
    url = f'{API_HOST}/api/2.0/settings/security/loginsettings'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      settings = response.json()
      print(f'Login settings retrieved: {settings}')
      return settings
    else:
      print(f"Login settings retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None
 
  # Step 3: Reset login settings to default
  def reset_login_settings():
    url = f'{API_HOST}/api/2.0/settings/security/loginsettings'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
      print('Login settings reset to default successfully.')
    else:
      print(f"Login settings reset failed. Status code: {response.status_code}, Message: {response.text}")
 
  if __name__ == "__main__":
    # Step 1: Update login settings
    update_login_settings(attemptCount=10, blockTime=30, checkPeriod=100)
    
    # Step 2: Retrieve current login settings
    get_login_settings() # Verify that the settings have been updated
 
    # Step 3: Reset login settings to default
    reset_login_settings()
    get_login_settings() # Verify that the settings have been reset
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Update login settings

A PUT request is sent to [/api/2.0/settings/security/loginsettings](/docspace/api-backend/usage-api/update-login-settings) with:

- `attemptCount`: The number of failed login attempts before an account is temporarily blocked.
- `blockTime`: The duration (in minutes) that an account remains blocked after exceeding the failed login limit.
- `checkPeriod`: The time frame (in minutes) within which failed attempts are counted before resetting.

Modifies the security settings, such as the number of failed attempts before blocking an account.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function updateLoginSettings(attemptCount, blockTime, checkPeriod) {
    const url = `${API_HOST}/api/2.0/settings/security/loginsettings`;
    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ attemptCount, blockTime, checkPeriod }),
    });

    if (res.ok) {
      console.log('Login settings updated successfully.');
    } else {
      const text = await res.text();
      console.log(`Login settings update failed. Status code: ${res.status}, Message: ${text}`);
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def update_login_settings(attemptCount, blockTime, checkPeriod):
    url = f'{API_HOST}/api/2.0/settings/security/loginsettings'
    data = {
      'attemptCount': attemptCount,
      'blockTime': blockTime,
      'checkPeriod': checkPeriod
    }
    response = requests.put(url, json=data, headers=HEADERS)
    if response.status_code == 200:
      print('Login settings updated successfully.')
    else:
      print(f"Login settings update failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>

## Step 2: Retrieve login settings

A GET request is sent to [/api/2.0/settings/security/loginsettings](/docspace/api-backend/usage-api/get-login-settings).

The API response includes:

- Current failed login attempt limits.
- Block duration settings.
- Login monitoring time frames.

This step ensures that security policies are correctly configured and applied.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getLoginSettings() {
    const url = `${API_HOST}/api/2.0/settings/security/loginsettings`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (res.ok) {
      const settings = await res.json();
      console.log('Login settings retrieved:', settings);
      return settings;
    } else {
      const text = await res.text();
      console.log(`Login settings retrieval failed. Status code: ${res.status}, Message: ${text}`);
      return null;
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_login_settings():
    url = f'{API_HOST}/api/2.0/settings/security/loginsettings'
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
      settings = response.json()
      print(f'Login settings retrieved: {settings}')
      return settings
    else:
      print(f"Login settings retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 3: Reset login security settings to default

A DELETE request is sent to [/api/2.0/settings/security/loginsettings](/docspace/api-backend/usage-api/set-default-login-settings).

The API resets the login security settings to the default configuration.

A GET request is sent to [/api/2.0/settings/security/loginsettings](/docspace/api-backend/usage-api/get-login-settings) again to verify that the settings have been reset.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function resetLoginSettings() {
    const url = `${API_HOST}/api/2.0/settings/security/loginsettings`;
    const res = await fetch(url, { method: 'DELETE', headers: HEADERS });

    if (res.ok) {
      console.log('Login settings reset to default successfully.');
    } else {
      const text = await res.text();
      console.log(`Login settings reset failed. Status code: ${res.status}, Message: ${text}`);
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def reset_login_settings():
    url = f'{API_HOST}/api/2.0/settings/security/loginsettings'
    response = requests.delete(url, headers=HEADERS)
    if response.status_code == 200:
      print('Login settings reset to default successfully.')
    else:
      print(f"Login settings reset failed. Status code: {response.status_code}, Message: {response.text}")
  ```

  </TabItem>
</Tabs>
