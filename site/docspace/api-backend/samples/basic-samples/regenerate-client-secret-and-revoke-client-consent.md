import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Regenerate client secret and revoke client consent

This example shows how to regenerate an OAuth2 client secret and revoke all user consents for that client in ONLYOFFICE DocSpace via the API.

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
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
  };

  // Step 1: Regenerate the client secret
  async function regenerateClientSecret(clientId) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}/regenerate`;
    const res = await fetch(url, {
      method: 'PATCH',
      headers: HEADERS,
    });

    console.log(`[PATCH regenerate] Status: ${res.status}`);

    if (res.status === 200) {
      const json = await res.json();
      const data = json.response || json;
      console.log('Client secret has been regenerated:');
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log('Failed to regenerate secret:', res.status, text);
    return null;
  }

  // Step 2: Revoke all consents for the client (current user)
  async function revokeUserClient(clientId) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}/revoke`;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    console.log(`[DELETE revoke] Status: ${res.status}`);

    if (res.status === 200) {
      console.log(`Client consent revoked for client ${clientId}.`);
      return true;
    }

    const text = await res.text();
    console.log('Failed to revoke consent:', res.status, text);
    return false;
  }

  // Example usage
  (async () => {
    const clientId = 'your-client-id'; // Replace with your actual client ID

    // Step 1 — Regenerate the secret
    await regenerateClientSecret(clientId);

    // Step 2 — Revoke existing consents for the current user
    await revokeUserClient(clientId);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
  }

  # Step 1: Regenerate the client secret
  def regenerate_client_secret(client_id: str):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}/regenerate"
    r = requests.patch(url, headers=HEADERS)
    print(f"[PATCH regenerate] Status: {r.status_code}")

    if r.status_code == 200:
      data = r.json().get("response", r.json())
      print("Client secret has been regenerated:")
      print(json.dumps(data, indent=2))
      return data

    print("Failed to regenerate secret:", r.status_code, r.text)
    return None

  # Step 2: Revoke all consents for the client (current user)
  def revoke_user_client(client_id: str):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}/revoke"
    r = requests.delete(url, headers=HEADERS)
    print(f"[DELETE revoke] Status: {r.status_code}")

    if r.status_code == 200:
      print(f"Client consent revoked for client {client_id}.")
      return True

    print("Failed to revoke consent:", r.status_code, r.text)
    return False

  if __name__ == "__main__":
    client_id = "your-client-id"  # Replace with your actual client ID

    # Step 1 — Regenerate the secret
    regenerate_client_secret(client_id)

    # Step 2 — Revoke existing consents for the current user
    revoke_user_client(client_id)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Regenerate the client secret

A PATCH request is sent to [/api/2.0/clients/:clientId/regenerate](/docspace/api-backend/usage-api/regenerate-secret).

This request creates a new secret for the specified client. The previously issued secret becomes invalid immediately.
Store the returned value securely and update any integrations that use the client secret.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function regenerateClientSecret(clientId) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}/regenerate`;
    const res = await fetch(url, {
      method: 'PATCH',
      headers: HEADERS,
    });

    console.log(`[PATCH regenerate] Status: ${res.status}`);

    if (res.status === 200) {
      const json = await res.json();
      const data = json.response || json;
      console.log('Client secret has been regenerated:');
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log('Failed to regenerate secret:', res.status, text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def regenerate_client_secret(client_id: str):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}/regenerate"
    r = requests.patch(url, headers=HEADERS)
    print(f"[PATCH regenerate] Status: {r.status_code}")

    if r.status_code == 200:
      data = r.json().get("response", r.json())
      print("Client secret has been regenerated:")
      print(json.dumps(data, indent=2))
      return data

    print("Failed to regenerate secret:", r.status_code, r.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Revoke client consent

A DELETE request is sent to [/api/2.0/clients/:clientId/revoke](/docspace/api-backend/usage-api/revoke-user-client).

This request invalidates existing access/refresh tokens for the current user for this client and forces re-authorization the next time the client is used.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function revokeUserClient(clientId) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}/revoke`;
    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    console.log(`[DELETE revoke] Status: ${res.status}`);

    if (res.status === 200) {
      console.log(`Client consent revoked for client ${clientId}.`);
      return true;
    }

    const text = await res.text();
    console.log('Failed to revoke consent:', res.status, text);
    return false;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def revoke_user_client(client_id: str):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}/revoke"
    r = requests.delete(url, headers=HEADERS)
    print(f"[DELETE revoke] Status: {r.status_code}")

    if r.status_code == 200:
      print(f"Client consent revoked for client {client_id}.")
      return True

    print("Failed to revoke consent:", r.status_code, r.text)
    return False
  ```

  </TabItem>
</Tabs>