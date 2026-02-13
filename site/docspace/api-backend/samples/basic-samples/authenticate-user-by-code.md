import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authenticate a user by code (2FA)

This example shows how to authenticate in ONLYOFFICE DocSpace using a one-time code from an authenticator app (TOTP) via POST `/api/2.0/authentication/:code`.

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/authenticate-user-by-code.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/authenticate-user-by-code.py)

## Before you start

Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key.


<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  //Set API base URL
  const API_HOST = 'https://yourportal.onlyoffice.com';

  //Primary credentials (internal provider)
  const CREDENTIALS = {
    userName: 'you@example.com',
    password: 'your_password',
    remember: true,
  };

  const TOTP_CODE = '123456'; // replace with actual code from authenticator app

  const HEADERS = {
    'Content-Type': 'application/json',
  };

  //Step 1: start authentication with login/password
  function primaryAuth() {
    return fetch(`${API_HOST}/api/2.0/authentication`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(CREDENTIALS),
    }).then(async (res) => {
      const data = await res.json().catch(() => ({}));
      const resp = data.response || {};
      const token = resp.token;
      if (res.status === 200 && token) {
        console.log('Authenticated (no 2FA).');
        return { token, meta: resp };
      }
      if (res.status === 200) {
        console.log('2FA required.');
        return { token: null, meta: resp }; // may include tfaKey
      }
      const text = await res.text().catch(() => '');
      throw new Error(`Primary auth failed. Status: ${res.status}. ${text}`);
    });
  }

  //Step 2: confirm login with TOTP code
  function confirmWithCode(meta) {
    const headers = { ...HEADERS };
    if (meta.tfaKey) headers['asc_auth_key'] = meta.tfaKey;

    const body = {
      userName: CREDENTIALS.userName,
      password: CREDENTIALS.password,
      code: TOTP_CODE,
      session: true,
    };

    return fetch(`${API_HOST}/api/2.0/authentication/${TOTP_CODE}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    }).then(async (res) => {
      const data = await res.json().catch(() => ({}));
      const token = (data.response || {}).token;
      if (res.status === 200 && token) {
        console.log('Authenticated with TOTP code.');
        return token;
      }
      const text = await res.text().catch(() => '');
      throw new Error(`Confirm failed. Status: ${res.status}. ${text}`);
    });
  }

  // Run
  primaryAuth()
    .then(({ token, meta }) => (token ? token : confirmWithCode(meta)))
    .then((token) => console.log('Token:', token))
    .catch((err) => console.log(`Error: ${err.message}`));
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests, sys

  # Set API base URL
  BASE_URL = 'https://yourportal.onlyoffice.com'

  # Primary credentials (internal provider)
  CREDENTIALS = {
    'userName': 'you@example.com',
    'password': 'your_password',
    'remember': True
  }

  s = requests.Session()

  # Step 1: start authentication with login/password
  def primary_auth():
    r = s.post(f'{BASE_URL}/api/2.0/authentication', json=CREDENTIALS, timeout=30)
    r.raise_for_status()
    data = (r.json() or {}).get('response', {})
    token = data.get('token')
    if token:
      print('Authenticated (no 2FA).')
      return token, data
    print('2FA required.')
    return None, data  # may include tfaKey/confirmUrl

  # Step 2: confirm login with TOTP code
  def confirm_with_code(code, meta):
    headers = {}
    tfa_key = meta.get('tfaKey') or s.cookies.get('asc_auth_key')
    if tfa_key:
      headers['asc_auth_key'] = tfa_key  # some builds require this header

      body = {
        'userName': CREDENTIALS['userName'],
        'password': CREDENTIALS['password'],
        'code': code,   # duplicate in body is allowed
        'session': True
      }
      r = s.post(f'{BASE_URL}/api/2.0/authentication/{code}',
        json=body, headers=headers, timeout=30)
      r.raise_for_status()
      return (r.json() or {}).get('response', {}).get('token')

  # Run
  if __name__ == '__main__':
    token, meta = primary_auth()
    if not token:
      code = input('Enter TOTP code: ').strip()
      token = confirm_with_code(code, meta) or sys.exit('Confirm failed')
    print('Token:', token)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Start authentication

A POST request is sent to [/api/2.0/authentication](/docspace/api-backend/usage-api/authenticate-me) with userName, password.
If the response has token, the user is authenticated without 2FA. Otherwise 2FA is required. The response may include a temporary key (`tfaKey`) or the server may set an `asc_auth_key` cookie.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function primaryAuth() {
    return fetch(`${API_HOST}/api/2.0/authentication`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(CREDENTIALS),
    }).then(async (res) => {
      const data = await res.json().catch(() => ({}));
      const resp = data.response || {};
      const token = resp.token;
      if (res.status === 200 && token) {
        console.log('Authenticated (no 2FA).');
        return { token, meta: resp };
      }
      if (res.status === 200) {
        console.log('2FA required.');
        return { token: null, meta: resp }; // may include tfaKey
      }
      const text = await res.text().catch(() => '');
      throw new Error(`Primary auth failed. Status: ${res.status}. ${text}`);
    });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def primary_auth():
    r = s.post(f'{BASE_URL}/api/2.0/authentication', json=CREDENTIALS, timeout=30)
    r.raise_for_status()
    data = (r.json() or {}).get('response', {})
    token = data.get('token')
    if token:
      print('Authenticated (no 2FA).')
      return token, data
    print('2FA required.')
    return None, data  # may include tfaKey/confirmUrl
  ```

  </TabItem>
</Tabs>

## Step 2: Confirm with a code

Send a POST to [/api/2.0/authentication/:code](/docspace/api-backend/usage-api/authenticate-me-from-body-with-code) where `:code` is the one-time code from the authenticator app.
Include credentials again in the JSON body. If `tfaKey` (or `asc_auth_key` cookie) is present, add it as the `asc_auth_key` header.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function confirmWithCode(meta) {
    const headers = { ...HEADERS };
    if (meta.tfaKey) headers['asc_auth_key'] = meta.tfaKey;

    const body = {
      userName: CREDENTIALS.userName,
      password: CREDENTIALS.password,
      code: TOTP_CODE,
      session: true,
    };

    return fetch(`${API_HOST}/api/2.0/authentication/${TOTP_CODE}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    }).then(async (res) => {
      const data = await res.json().catch(() => ({}));
      const token = (data.response || {}).token;
      if (res.status === 200 && token) {
        console.log('Authenticated with TOTP code.');
        return token;
      }
      const text = await res.text().catch(() => '');
      throw new Error(`Confirm failed. Status: ${res.status}. ${text}`);
    });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def confirm_with_code(code, meta):
    headers = {}
    tfa_key = meta.get('tfaKey') or s.cookies.get('asc_auth_key')
    if tfa_key:
      headers['asc_auth_key'] = tfa_key  # some builds require this header

      body = {
        'userName': CREDENTIALS['userName'],
        'password': CREDENTIALS['password'],
        'code': code,   # duplicate in body is allowed
        'session': True
      }
      r = s.post(f'{BASE_URL}/api/2.0/authentication/{code}',
        json=body, headers=headers, timeout=30)
      r.raise_for_status()
      return (r.json() or {}).get('response', {}).get('token')
  ```

  </TabItem>
</Tabs>