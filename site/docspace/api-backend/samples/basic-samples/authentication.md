import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authenticate a user

This example demonstrates how to authenticate a user in ONLYOFFICE DocSpace using the API and check the authentication with a token received.

## Before you start

Replace `https://yourportal.onlyoffice.com` with your actual DocSpace portal URL, replace `USER_CREDENTIALS` with your credentials.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const BASE_URL = 'https://yourportal.onlyoffice.com';

  // User credentials for authentication
  const USER_CREDENTIALS = {
    userName: 'your-user-name',
    password: 'your-password',
  };

  // Step 1: Authenticate with your login and password
  function authenticate() {
    return fetch(`${BASE_URL}/api/2.0/authentication`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(USER_CREDENTIALS),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        return null;
      })
      .then((data) => {
        if (!data) return null;
        const authToken = data?.response?.token;
        return authToken || null;
      })
      .catch(() => null);
  }

  // Step 2: Check authentication with a token you received
  function checkAuthentication(token) {
    return fetch(`${BASE_URL}/api/2.0/authentication`, {
      method: 'GET',
      headers: { Authorization: token },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(`User is authenticated with token ${token}.`);
        } else {
          console.log('User is not authenticated or token is invalid.');
        }
      })
      .catch(() => {
        console.log('User is not authenticated or token is invalid.');
      });
  }

  // Run
  authenticate().then((token) => {
    if (token) {
      checkAuthentication(token);
    }
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  BASE_URL = 'https://yourportal.onlyoffice.com'

  # User credentials for authentication
  USER_CREDENTIALS = {
    'userName': 'your-user-name',
    'password': 'your-password',
  }

  # Step 1: Authenticate with your login and password
  def authenticate():
    response = requests.post(f'{BASE_URL}/api/2.0/authentication', json=USER_CREDENTIALS)
    if response.status_code == 200:
      auth_token = response.json().get('response', {}).get('token')
    if auth_token:
      return auth_token
    return None

  # Step 2: Check authentication with a token you received
  def check_authentication(token):
    headers = {'Authorization': token}
    response = requests.get(f'{BASE_URL}/api/2.0/authentication', headers=headers)
    if response.status_code == 200:
      print(f'User is authenticated with token {token}.')
    else:
      print('User is not authenticated or token is invalid.')

    if __name__ == '__main__':
      # Step 1
      token = authenticate()

    if token:
      # Step 2
      check_authentication(token)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Authenticate a user

A POST request is sent to [/api/2.0/authentication](/docspace/api-backend/usage-api/authenticate-me.api.mdx) to authenticate with `USER_CREDENTIALS`.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function authenticate() {
    return fetch(`${BASE_URL}/api/2.0/authentication`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(USER_CREDENTIALS),
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        return null;
      })
      .then((data) => {
        if (!data) return null;
        const authToken = data?.response?.token;
        return authToken || null;
      })
      .catch(() => null);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def authenticate():
    response = requests.post(f'{BASE_URL}/api/2.0/authentication', json=USER_CREDENTIALS)
    if response.status_code == 200:
      auth_token = response.json().get('response', {}).get('token')
      if auth_token:
        return auth_token
    return None
  ```

  </TabItem>
</Tabs>


## Step 2: Check authentication

A GET request is sent to [/api/2.0/authentication](/docspace/api-backend/usage-api/get-is-authentificated.api.mdx) to check authentication success.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function checkAuthentication(token) {
    return fetch(`${BASE_URL}/api/2.0/authentication`, {
      method: 'GET',
      headers: { Authorization: token },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log(`User is authenticated with token ${token}.`);
        } else {
          console.log('User is not authenticated or token is invalid.');
        }
      })
      .catch(() => {
        console.log('User is not authenticated or token is invalid.');
      });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def check_authentication(token):
    headers = {'Authorization': token}
    response = requests.get(f'{BASE_URL}/api/2.0/authentication', headers=headers)
    if response.status_code == 200:
      print(f'User is authenticated with token {token}.')
    else:
      print('User is not authenticated or token is invalid.')
  ```

  </TabItem>
</Tabs>


