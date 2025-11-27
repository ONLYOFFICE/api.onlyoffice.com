import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Authorize OAuth: build URL and exchange code

This example demonstrates how to build the OAuth2 authorization URL and then exchange the authorization code for tokens in ONLYOFFICE DocSpace.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const CLIENT_ID = 'YOUR_CLIENT_ID';
  const REDIRECT_URI = 'https://yourapp.example.com/callback';

  // Step 1: Build the authorization URL
  function buildAuthorizeUrl() {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      scope: 'openid files:read',
      state: 'secure-state',
    });

    return `${BASE_URL}/oauth2/authorize?${params.toString()}`;
  }

  // Step 2: Exchange authorization code for tokens
  async function exchangeToken(authCode) {
    const url = `${BASE_URL}/oauth2/token`;
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: authCode,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
    });

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Token exchange failed: ${res.status}`);
      console.log(text);
      return null;
    }

    const tokens = await res.json();
    console.log('Tokens received:');
    console.log(JSON.stringify(tokens, null, 2));
    return tokens;
  }

  // Usage example
  const authUrl = buildAuthorizeUrl();
  console.log('Open this URL in browser:', authUrl);

  // After the user signs in and grants consent, your app receives:
  // https://yourapp.example.com/callback?code=XYZ&state=secure-state

  // Then you can exchange the code for tokens, for example:
  // (async () => {
  //   await exchangeToken('XYZ');
  // })();

  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  import urllib.parse
  import json

  BASE_URL = "https://yourportal.onlyoffice.com"
  CLIENT_ID = "YOUR_CLIENT_ID"
  REDIRECT_URI = "https://yourapp.example.com/callback"

  # Step 1: Build the authorization URL
  def build_authorize_url():
    params = {
      "response_type": "code",
      "client_id": CLIENT_ID,
      "redirect_uri": REDIRECT_URI,
      "scope": "openid files:read",
      "state": "secure-state"
    }
    return f"{BASE_URL}/oauth2/authorize?{urllib.parse.urlencode(params)}"

  # Step 2: Exchange authorization code for tokens
  def exchange_token(auth_code):
    url = f"{BASE_URL}/oauth2/token"
    data = {
      "grant_type": "authorization_code",
      "code": auth_code,
      "redirect_uri": REDIRECT_URI,
      "client_id": CLIENT_ID
    }
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    r = requests.post(url, data=data, headers=headers)

    if r.status_code == 200:
      tokens = r.json()
      print("Tokens received:")
      print(json.dumps(tokens, indent=2))
      return tokens
    else:
      print(f"Token exchange failed: {r.status_code}")
      print(r.text)
      return None

  if __name__ == "__main__":
    auth_url = build_authorize_url()
    print("Open this URL in browser:", auth_url)

    # After the user signs in and grants consent, your app receives:
    # https://yourapp.example.com/callback?code=XYZ&state=secure-state
    # tokens = exchange_token("XYZ")
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Build the authorization URL

A GET request is constructed to [/oauth2/authorize](/docspace/api-backend/usage-api/authorize-o-auth) with standard OAuth2 parameters.

Parameters include:

- `response_type=code`: indicates the authorization code flow
- `client_id`: your registered client ID
- `redirect_uri`: where the user will be redirected after authorization
- `scope`: requested access scopes (e.g., `openid files:read`)
- `state`: optional CSRF protection token

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  function buildAuthorizeUrl() {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      scope: 'openid files:read',
      state: 'secure-state',
    });

    return `${BASE_URL}/oauth2/authorize?${params.toString()}`;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def build_authorize_url():
    params = {
      "response_type": "code",
      "client_id": CLIENT_ID,
      "redirect_uri": REDIRECT_URI,
      "scope": "openid files:read",
      "state": "secure-state"
    }
    return f"{BASE_URL}/oauth2/authorize?{urllib.parse.urlencode(params)}"
  ```

  </TabItem>
</Tabs>

## Step 2: Exchange authorization code for tokens

A POST request is sent to [/oauth2/token](/docspace/api-backend/usage-api/exchange-token) to exchange the received authorization code for tokens.

Payload parameters include:

- `code`: the code received from the redirect
- `redirect_uri`: must match the one registered in the client settings
- `client_id`: your client identifier

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function exchangeToken(authCode) {
    const url = `${BASE_URL}/oauth2/token`;
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code: authCode,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
    });

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Token exchange failed: ${res.status}`);
      console.log(text);
      return null;
    }

    const tokens = await res.json();
    console.log('Tokens received:');
    console.log(JSON.stringify(tokens, null, 2));
    return tokens;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def exchange_token(auth_code):
    url = f"{BASE_URL}/oauth2/token"
    data = {
      "grant_type": "authorization_code",
      "code": auth_code,
      "redirect_uri": REDIRECT_URI,
      "client_id": CLIENT_ID
    }
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    r = requests.post(url, data=data, headers=headers)

    if r.status_code == 200:
      tokens = r.json()
      print("Tokens received:")
      print(json.dumps(tokens, indent=2))
      return tokens
    else:
      print(f"Token exchange failed: {r.status_code}")
      print(r.text)
      return None
  ```

  </TabItem>
</Tabs>