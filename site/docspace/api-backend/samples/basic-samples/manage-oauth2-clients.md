import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage OAuth2 Clients

This example demonstrates how to manage OAuth2 clients in ONLYOFFICE DocSpace using the API.
It covers creating a new client, updating an existing client, and deleting a client.

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
    'Content-Type': 'application/json',
  };

  // Step 1: Create a new OAuth2 client
  async function createClient(clientName, redirectUris, grantTypes) {
    const url = `${BASE_URL}/api/2.0/clients`;
    const payload = {
      name: clientName,
      redirectUris,
      grantTypes,
      // add other optional fields according to your portal schema
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 201) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Client created:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    const text = await res.text();
    console.log(`Failed to create client: ${res.status}`);
    console.log(text);
    return null;
  }

  // Step 2: Update an existing OAuth2 client
  async function updateClient(clientId, payload) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}`;

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Client updated:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    const text = await res.text();
    console.log(`Failed to update client ${clientId}: ${res.status}`);
    console.log(text);
    return null;
  }

  // Step 3: Delete an OAuth2 client
  async function deleteClient(clientId) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (res.status === 200) {
      console.log(`Client ${clientId} deleted successfully.`);
      return true;
    }

    const text = await res.text();
    console.log(`Failed to delete client ${clientId}: ${res.status}`);
    console.log(text);
    return false;
  }

  // Example usage
  (async () => {
    // Example variables – replace with actual data
    const clientName = 'My New App';
    const redirectUris = ['https://myapp.example.com/callback'];
    const grantTypes = ['authorization_code', 'refresh_token'];

    // Step 1: Create a new client
    const clientInfo = await createClient(clientName, redirectUris, grantTypes);
    if (!clientInfo) return;

    const clientId = clientInfo.id; // Adjust field name according to response

    // Step 2: Update the client (for example change redirect URIs)
    const updatePayload = {
      redirectUris: ['https://myapp.example.com/callback2'],
      // other optional changes
    };
    await updateClient(clientId, updatePayload);

    // Step 3: Delete the client when no longer needed
    await deleteClient(clientId);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests
  
  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY   = "YOUR_API_KEY"
  
  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
  
  # Step 1: Create a new OAuth2 client
  def create_client(client_name: str, redirect_uris: list[str], grant_types: list[str]):
    url = f"{BASE_URL}/api/2.0/clients"
    payload = {
      "name": client_name,
      "redirectUris": redirect_uris,
      "grantTypes": grant_types
      # add other optional fields according to your portal schema
    }
    response = requests.post(url, headers=HEADERS, json=payload)
  
    if response.status_code == 200 or response.status_code == 201:
      data   = response.json()
      info   = data.get("response", data)
      print("Client created:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Failed to create client: {response.status_code}")
      print(response.text)
      return None
  
  # Step 2: Update an existing OAuth2 client
  def update_client(client_id: str, payload: dict):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}"
    response = requests.put(url, headers=HEADERS, json=payload)
  
    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Client updated:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Failed to update client {client_id}: {response.status_code}")
      print(response.text)
      return None
  
  # Step 3: Delete an OAuth2 client
  def delete_client(client_id: str):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}"
    response = requests.delete(url, headers=HEADERS)
  
    if response.status_code == 200:
      print(f"Client {client_id} deleted successfully.")
      return True
    else:
      print(f"Failed to delete client {client_id}: {response.status_code}")
      print(response.text)
      return False
  
  def main():
    # Example variables – replace with actual data
    client_name  = "My New App"
    redirect_uris = ["https://myapp.example.com/callback"]
    grant_types  = ["authorization_code", "refresh_token"]
  
    # Step 1: Create a new client
    client_info = create_client(client_name, redirect_uris, grant_types)
    if not client_info:
      return
  
    client_id = client_info.get("id")  # Adjust field name according to response
  
    # Step 2: Update the client (for example change redirect URIs)
    update_payload = {
      "redirectUris": ["https://myapp.example.com/callback2"]
      # other optional changes
    }
    update_client(client_id, update_payload)
  
    # Step 3: Delete the client when no longer needed
    delete_client(client_id)
  
  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create a new OAuth2 client
A POST request is sent to [/api/2.0/clients](/docspace/api-backend/usage-api/create-client) to register a new OAuth2 client in the portal.

Payload parameters include:

- `name`: Client application name.
- `redirectUris`: Authorized redirect URIs for OAuth2 flow.
- `grantTypes`: Supported grant types (`authorization_code`, `refresh_token`, etc.).

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function createClient(clientName, redirectUris, grantTypes) {
    const url = `${BASE_URL}/api/2.0/clients`;
    const payload = {
      name: clientName,
      redirectUris,
      grantTypes,
      // add other optional fields according to your portal schema
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200 || res.status === 201) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Client created:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    const text = await res.text();
    console.log(`Failed to create client: ${res.status}`);
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_client(client_name: str, redirect_uris: list[str], grant_types: list[str]):
    url = f"{BASE_URL}/api/2.0/clients"
    payload = {
      "name": client_name,
      "redirectUris": redirect_uris,
      "grantTypes": grant_types
      # add other optional fields according to your portal schema
    }
    response = requests.post(url, headers=HEADERS, json=payload)
  
    if response.status_code == 200 or response.status_code == 201:
      data   = response.json()
      info   = data.get("response", data)
      print("Client created:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Failed to create client: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Update an existing OAuth2 client

A PUT request is sent to [/api/2.0/clients/:clientId](/docspace/api-backend/usage-api/update-client) to modify the OAuth2 client configuration.
You can change properties such as redirect URIs or grant types.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function updateClient(clientId, payload) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}`;

    const res = await fetch(url, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const data = await res.json();
      const info = data.response || data;
      console.log('Client updated:');
      console.log(JSON.stringify(info, null, 2));
      return info;
    }

    const text = await res.text();
    console.log(`Failed to update client ${clientId}: ${res.status}`);
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def update_client(client_id: str, payload: dict):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}"
    response = requests.put(url, headers=HEADERS, json=payload)
  
    if response.status_code == 200:
      data = response.json()
      info = data.get("response", data)
      print("Client updated:")
      print(json.dumps(info, indent=2))
      return info
    else:
      print(f"Failed to update client {client_id}: {response.status_code}")
      print(response.text)
      return None
  ```

  </TabItem>
</Tabs>

## Step 3: Delete an OAuth2 client

A DELETE request is sent to [/api/2.0/clients/:clientId](/docspace/api-backend/usage-api/delete-client) to remove the specified OAuth2 client from the portal.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function deleteClient(clientId) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (res.status === 200) {
      console.log(`Client ${clientId} deleted successfully.`);
      return true;
    }

    const text = await res.text();
    console.log(`Failed to delete client ${clientId}: ${res.status}`);
    console.log(text);
    return false;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_client(client_id: str):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}"
    response = requests.delete(url, headers=HEADERS)
  
    if response.status_code == 200:
      print(f"Client {client_id} deleted successfully.")
      return True
    else:
      print(f"Failed to delete client {client_id}: {response.status_code}")
      print(response.text)
      return False
  ```

  </TabItem>
</Tabs>


