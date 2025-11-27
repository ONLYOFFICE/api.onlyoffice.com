import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Retrieve OAuth2 client information

This example shows how to retrieve information about OAuth2 clients in ONLYOFFICE DocSpace.

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

  // Step 1: List all OAuth2 clients
  async function getClients() {
    const url = `${BASE_URL}/api/2.0/clients`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    console.log(`[GET clients] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }

  // Step 2: Get a single client by ID
  async function getClient(clientId) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    console.log(`[GET client ${clientId}] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }

  // Step 3: Get private client info (detailed configuration)
  async function getClientInfo(clientId) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}/info`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    console.log(`[GET client info ${clientId}] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }

  // Step 4: Get public client info (safe for end users)
  async function getPublicClientInfo(clientId) {
    const url = `${BASE_URL}/api/2.0/clients/public/${clientId}/info`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    console.log(`[GET public client info ${clientId}] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }

  // Step 5: Get bulk info for multiple clients by IDs
  async function getClientsInfo(clientIds) {
    const url = new URL(`${BASE_URL}/api/2.0/clients/info`);
    const params = new URLSearchParams();
    for (const cid of clientIds) {
      params.append('ids', cid); // ?ids=<id>&ids=<id2>...
    }
    url.search = params.toString();

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: HEADERS,
    });

    console.log(`[GET clients info] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    const clients = await getClients();

    if (Array.isArray(clients) && clients.length > 0) {
      const cid = clients[0].id;
      if (cid) {
        await getClient(cid);
        await getClientInfo(cid);
        await getPublicClientInfo(cid);
        await getClientsInfo([cid]);
      }
    }
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

  # Step 1: List all OAuth2 clients
  def get_clients():
    url = f"{BASE_URL}/api/2.0/clients"
    r = requests.get(url, headers=HEADERS)
    print(f"[GET clients] Status: {r.status_code}")
    if r.ok:
      data = r.json().get("response", r.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(r.text)
    return None

  # Step 2: Get a single client by ID
  def get_client(client_id):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}"
    r = requests.get(url, headers=HEADERS)
    print(f"[GET client {client_id}] Status: {r.status_code}")
    if r.ok:
      data = r.json().get("response", r.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(r.text)
    return None

  # Step 3: Get private client info (detailed configuration)
  def get_client_info(client_id):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}/info"
    r = requests.get(url, headers=HEADERS)
    print(f"[GET client info {client_id}] Status: {r.status_code}")
    if r.ok:
      data = r.json().get("response", r.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(r.text)
    return None

  # Step 4: Get public client info (safe for end users)
  def get_public_client_info(client_id):
    url = f"{BASE_URL}/api/2.0/clients/public/{client_id}/info"
    r = requests.get(url, headers=HEADERS)
    print(f"[GET public client info {client_id}] Status: {r.status_code}")
    if r.ok:
      data = r.json().get("response", r.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(r.text)
    return None

  # Step 5: Get bulk info for multiple clients by IDs
  def get_clients_info(client_ids):
    url = f"{BASE_URL}/api/2.0/clients/info"
    params = [("ids", cid) for cid in client_ids]  # repeated ?ids=<id>&ids=<id2>...
    r = requests.get(url, headers=HEADERS, params=params)
    print(f"[GET clients info] Status: {r.status_code}")
    if r.ok:
      data = r.json().get("response", r.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(r.text)
    return None

  # Example usage
  if __name__ == "__main__":
    clients = get_clients()
    if isinstance(clients, list) and clients:
      cid = clients[0].get("id")
      if cid:
        get_client(cid)
        get_client_info(cid)
        get_public_client_info(cid)
        get_clients_info([cid])
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve all OAuth2 clients

A GET request is sent to [/api/2.0/clients](/docspace/api-backend/usage-api/get-clients).
This returns a list of all registered OAuth2 applications in the portal.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getClients() {
    const url = `${BASE_URL}/api/2.0/clients`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    console.log(`[GET clients] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_clients():
    url = f"{BASE_URL}/api/2.0/clients"
    r = requests.get(url, headers=HEADERS)
    print(f"[GET clients] Status: {r.status_code}")
    if r.ok:
      data = r.json().get("response", r.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(r.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Retrieve a specific client by ID

A GET request is sent to [/api/2.0/clients/{id}](/docspace/api-backend/usage-api/get-client).
This retrieves the basic information of a specific client, including its name, redirect URIs, and owner.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getClient(clientId) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    console.log(`[GET client ${clientId}] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_client(client_id):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}"
    r = requests.get(url, headers=HEADERS)
    print(f"[GET client {client_id}] Status: {r.status_code}")
    if r.ok:
      data = r.json().get("response", r.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(r.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 3: Retrieve private client details

A GET request is sent to [/api/2.0/clients/{id}/info](/docspace/api-backend/usage-api/get-client-info).
This returns extended details about the client, including confidential configuration parameters (visible only to administrators).

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getClientInfo(clientId) {
    const url = `${BASE_URL}/api/2.0/clients/${clientId}/info`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    console.log(`[GET client info ${clientId}] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_client_info(client_id):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}/info"
    r = requests.get(url, headers=HEADERS)
    print(f"[GET client info {client_id}] Status: {r.status_code}")
    if r.ok:
      data = r.json().get("response", r.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(r.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 4: Retrieve public client information

A GET request is sent to [/api/2.0/clients/public/{id}/info](/docspace/api-backend/usage-api/get-public-client-info).
This endpoint returns non-sensitive information about a client, such as its name and description, which can be safely displayed to end users.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getPublicClientInfo(clientId) {
    const url = `${BASE_URL}/api/2.0/clients/public/${clientId}/info`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    console.log(`[GET public client info ${clientId}] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_client(client_id):
    url = f"{BASE_URL}/api/2.0/clients/{client_id}"
    r = requests.get(url, headers=HEADERS)
    print(f"[GET client {client_id}] Status: {r.status_code}")
    if r.ok:
      data = r.json().get("response", r.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(r.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 5: Retrieve bulk client information

A GET request is sent to [/api/2.0/clients/info](/docspace/api-backend/usage-api/get-clients-info).

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getClientsInfo(clientIds) {
    const url = new URL(`${BASE_URL}/api/2.0/clients/info`);
    const params = new URLSearchParams();
    for (const cid of clientIds) {
      params.append('ids', cid); // ?ids=<id>&ids=<id2>...
    }
    url.search = params.toString();

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: HEADERS,
    });

    console.log(`[GET clients info] Status: ${res.status}`);

    if (res.ok) {
      const json = await res.json();
      const data = json.response || json;
      console.log(JSON.stringify(data, null, 2));
      return data;
    }

    const text = await res.text();
    console.log(text);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_clients_info(client_ids):
    url = f"{BASE_URL}/api/2.0/clients/info"
    params = [("ids", cid) for cid in client_ids]  # repeated ?ids=<id>&ids=<id2>...
    r = requests.get(url, headers=HEADERS, params=params)
    print(f"[GET clients info] Status: {r.status_code}")
    if r.ok:
      data = r.json().get("response", r.json())
      print(json.dumps(data, indent=2, ensure_ascii=False))
      return data
    print(r.text)
    return None
  ```

  </TabItem>
</Tabs>