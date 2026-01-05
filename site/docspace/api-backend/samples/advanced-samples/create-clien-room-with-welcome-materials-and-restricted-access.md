import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a client room with welcome materials and restricted access

This example demonstrates how to onboard a client in ONLYOFFICE DocSpace. The script creates a collaboration room, creates a standard folder structure, copies welcome files from templates, configures room access for the account manager and the client, generates a room link, and logs the room information to an external CRM (placeholder).

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
  const API_KEY = 'YOUR_API_KEY';

  // IDs from your DocSpace
  const ACCOUNT_MANAGER_ID = 'account_manager_user_id_here';
  const CLIENT_USER_ID = 'client_user_id_here';

  // Template files stored somewhere in DocSpace
  const TEMPLATE_WELCOME_FILE_ID = 'template_welcome_file_id_here';
  const TEMPLATE_GUIDE_FILE_ID = 'template_guide_file_id_here';

  // Headers with API key for authentication
  const HEADERS: Record<string, string> = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Example client data (simulating external JSON)
  const clientData = {
    id: 'C-10045',
    name: 'Acme Corporation',
    email: 'contact@acme.example.com',
  };

  // Simple request helper (beginner-friendly)
  async function requestJson(method: string, path: string, body: any = null) {
    const url = `${API_HOST}${path}`;

    try {
      const res = await fetch(url, {
        method,
        headers: HEADERS,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        const text = await res.text();
        console.log(`Request failed. Status: ${res.status}, Message: ${text}`);
        return null;
      }

      return res.json();
    } catch (err: any) {
      console.log(`Request error: ${err?.message || err}`);
      return null;
    }
  }

  function getNode(data: any) {
    if (!data || typeof data !== 'object') return null;
    if (data.response && typeof data.response === 'object') return data.response;
    return data;
  }

  function getId(data: any) {
    const node = getNode(data);
    if (!node || typeof node !== 'object') return null;
    return node.id != null ? Number(node.id) : null;
  }

  // Step 1: Create a new room for the client
  async function createClientRoom(client: { name: string }) {
    // POST /api/2.0/files/rooms
    // Creates a collaboration room for the client and returns the room data (including room ID).
    const body = {
      title: `Client - ${client.name}`,
      roomType: 2, // 2 = collaboration room
    };

    return requestJson('POST', '/api/2.0/files/rooms', body);
  }

  // Step 2: Create folders inside the client room
  async function createFolder(parentFolderId: number, title: string) {
    // POST /api/2.0/files/folder/:parentFolderId
    // Use the room root folder ID as the parentFolderId (in some responses it may match the room ID).
    const body = { title };
    return requestJson('POST', `/api/2.0/files/folder/${parentFolderId}`, body);
  }

  // Step 3: Copy welcome materials into a target folder
  async function copyTemplateFile(fileId: string, destFolderId: number, destTitle: string) {
    // POST /api/2.0/files/file/:fileId/copyas
    // Copies a template file into the selected destination folder inside the client room.
    const body = {
      destFolderId,
      destTitle,
    };

    return requestJson('POST', `/api/2.0/files/file/${fileId}/copyas`, body);
  }

  // Step 4: Configure room access for manager and client
  async function setRoomAccess(roomId: number, managerId: string, clientId: string) {
    // PUT /api/2.0/files/rooms/:roomId/share
    // Updates the room share settings with two explicit entries:
    // - account manager: full access (example access=4)
    // - client: read-only (example access=1)
    const body = {
      entries: [
        { id: managerId, isGroup: false, access: 4 },
        { id: clientId, isGroup: false, access: 1 },
      ],
    };

    return requestJson('PUT', `/api/2.0/files/rooms/${roomId}/share`, body);
  }

  // Step 5: Create a room link to send to the client
  async function createRoomLink(roomId: number) {
    // PUT /api/2.0/files/rooms/:roomId/links
    // Creates or updates the primary external room link that can be sent to the client.
    return requestJson('PUT', `/api/2.0/files/rooms/${roomId}/links`, {});
  }

  // Step 6: Log room information in CRM (placeholder)
  function logRoomToCrm(payload: any) {
    // Placeholder: replace with a real CRM API request.
    // Store: client info + room id/title + room link data.
    console.log('CRM payload:');
    console.log(payload);
  }

  async function onboardClient(client: { id: string; name: string; email: string }) {
    const roomData = await createClientRoom(client);
    if (!roomData) return;

    const roomNode = getNode(roomData);
    const roomId = getId(roomData);

    if (!roomId) {
      console.log('Cannot read room ID from API response.');
      return;
    }

    const roomTitle =
      roomNode && typeof roomNode === 'object' && roomNode.title
        ? String(roomNode.title)
        : `Room ${roomId}`;

    await createFolder(roomId, 'Invoices');
    await createFolder(roomId, 'Contracts');
    const deliverables = await createFolder(roomId, 'Deliverables');

    const deliverablesId = getId(deliverables);
    const welcomeFolderId = deliverablesId || roomId;

    await copyTemplateFile(
      TEMPLATE_WELCOME_FILE_ID,
      welcomeFolderId,
      'Welcome to your client room.pdf',
    );
    await copyTemplateFile(
      TEMPLATE_GUIDE_FILE_ID,
      welcomeFolderId,
      'How to use the client portal.pdf',
    );

    const accessUpdated = await setRoomAccess(roomId, ACCOUNT_MANAGER_ID, CLIENT_USER_ID);
    if (!accessUpdated) return;

    const roomLink = await createRoomLink(roomId);

    logRoomToCrm({
      clientId: client.id,
      clientName: client.name,
      clientEmail: client.email,
      roomId,
      roomTitle,
      roomLinkInfo: roomLink,
    });

    console.log(`Done. Room "${roomTitle}" (ID: ${roomId}) is ready.`);
  }

  (async () => {
    try {
      await onboardClient(clientData);
    } catch (err: any) {
      console.error(err?.message || err);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # IDs from your DocSpace
  ACCOUNT_MANAGER_ID = "account_manager_user_id_here"
  CLIENT_USER_ID = "client_user_id_here"

  # Template files stored somewhere in DocSpace
  TEMPLATE_WELCOME_FILE_ID = "template_welcome_file_id_here"
  TEMPLATE_GUIDE_FILE_ID = "template_guide_file_id_here"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  # Example client data (simulating external JSON)
  client_data = {
    "id": "C-10045",
    "name": "Acme Corporation",
    "email": "contact@acme.example.com",
  }

  # Simple request helper (beginner-friendly)
  def request_json(method, path, body=None):
    url = f"{API_HOST}{path}"

    try:
      res = requests.request(
        method=method,
        url=url,
        headers=HEADERS,
        json=body,
      )
    except Exception as e:
      print(f"Request error: {e}")
      return None

    if res.status_code not in (200, 201):
      print(f"Request failed. Status: {res.status_code}, Message: {res.text}")
      return None

    try:
      return res.json()
    except Exception:
      print("Response is not JSON.")
      return None

  def get_node(data):
    if not isinstance(data, dict):
      return None
    node = data.get("response", data)
    return node if isinstance(node, dict) else None

  def get_id(data):
    node = get_node(data)
    if not isinstance(node, dict):
      return None
    return node.get("id")

  # Step 1: Create a new room for the client
  def create_client_room(client):
    # POST /api/2.0/files/rooms
    # Creates a collaboration room for the client and returns its ID in the response.
    body = {
      "title": f"Client - {client['name']}",
      "roomType": 2,  # 2 = collaboration room
    }
    return request_json("POST", "/api/2.0/files/rooms", body)

  # Step 2: Create folders inside the client room
  def create_folder(parent_folder_id, title):
    # POST /api/2.0/files/folder/:parentFolderId
    # Use the room root folder ID as the parentFolderId (in some responses it may match the room ID).
    body = {"title": title}
    return request_json("POST", f"/api/2.0/files/folder/{parent_folder_id}", body)

  # Step 3: Copy welcome materials into a target folder
  def copy_template_file(file_id, dest_folder_id, dest_title):
    # POST /api/2.0/files/file/:fileId/copyas
    # Copies a template file into the selected destination folder inside the client room.
    body = {
      "destFolderId": dest_folder_id,
      "destTitle": dest_title,
    }
    return request_json("POST", f"/api/2.0/files/file/{file_id}/copyas", body)

  # Step 4: Configure room security (add manager and client)
  def set_room_access(room_id, manager_id, client_id):
    # PUT /api/2.0/files/rooms/:roomId/share
    # Adds two explicit entries:
    # - account manager (full access)
    # - client (read-only)
    # This updates the room share settings and restricts the client permissions.
    body = {
      "entries": [
        {"id": manager_id, "isGroup": False, "access": 4},  # full access (example)
        {"id": client_id, "isGroup": False, "access": 1},   # read-only (example)
      ]
    }
    return request_json("PUT", f"/api/2.0/files/rooms/{room_id}/share", body)

  # Step 5: Create a primary external link to the room
  def create_room_link(room_id):
    # PUT /api/2.0/files/rooms/:roomId/links
    # Generates/updates the main external room link that can be sent to the client.
    return request_json("PUT", f"/api/2.0/files/rooms/{room_id}/links", {})

  # Step 6: Log the room into an external CRM (placeholder)
  def log_room_to_crm(payload):
    # Placeholder: replace with a real CRM API call (HTTP request).
    # Store: client id/name + room id/title + link info.
    print("CRM payload:")
    print(payload)

  def onboard_client(client):
    room_data = create_client_room(client)
    if not room_data:
      return

    room_node = get_node(room_data)
    room_id = get_id(room_data)

    if not room_id:
      print("Cannot read room ID from API response.")
      return

    room_title = room_node.get("title") if isinstance(room_node, dict) else None
    room_title = str(room_title or f"Room {room_id}")

    create_folder(room_id, "Invoices")
    create_folder(room_id, "Contracts")
    deliverables = create_folder(room_id, "Deliverables")

    deliverables_id = get_id(deliverables)
    welcome_folder_id = deliverables_id or room_id

    copy_template_file(
      TEMPLATE_WELCOME_FILE_ID,
      welcome_folder_id,
      "Welcome to your client room.pdf",
    )
    copy_template_file(
      TEMPLATE_GUIDE_FILE_ID,
      welcome_folder_id,
      "How to use the client portal.pdf",
    )

    if not set_room_access(room_id, ACCOUNT_MANAGER_ID, CLIENT_USER_ID):
      return

    room_link = create_room_link(room_id)

    log_room_to_crm({
      "clientId": client["id"],
      "clientName": client["name"],
      "clientEmail": client["email"],
      "roomId": room_id,
      "roomTitle": room_title,
      "roomLinkInfo": room_link,
    })

    print(f'Done. Room "{room_title}" (ID: {room_id}) is ready.')

  if __name__ == "__main__":
    onboard_client(client_data)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create a client room

The script sends a POST request to [/api/2.0/files/rooms](/docspace/api-backend/usage-api/create-room) to create a new collaboration room for the client. This returns the room ID used in the next steps.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createClientRoom(client: { name: string }) {
    // POST /api/2.0/files/rooms
    // Creates a collaboration room for the client and returns the room data (including room ID).
    const body = {
      title: `Client - ${client.name}`,
      roomType: 2, // 2 = collaboration room
    };

    return requestJson('POST', '/api/2.0/files/rooms', body);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_client_room(client):
    # POST /api/2.0/files/rooms
    # Creates a collaboration room for the client and returns its ID in the response.
    body = {
      "title": f"Client - {client['name']}",
      "roomType": 2,  # 2 = collaboration room
    }
    return request_json("POST", "/api/2.0/files/rooms", body)
  ```

  </TabItem>
</Tabs>

## Step 2: Create the standard folder structure

Then the script sends POST requests to [/api/2.0/files/folder/:parentFolderId](/docspace/api-backend/usage-api/create-folder) to create folders (for example, Invoices, Contracts, Deliverables) inside the room.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createFolder(parentFolderId: number, title: string) {
    // POST /api/2.0/files/folder/:parentFolderId
    // Use the room root folder ID as the parentFolderId (in some responses it may match the room ID).
    const body = { title };
    return requestJson('POST', `/api/2.0/files/folder/${parentFolderId}`, body);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_folder(parent_folder_id, title):
    # POST /api/2.0/files/folder/:parentFolderId
    # Use the room root folder ID as the parentFolderId (in some responses it may match the room ID).
    body = {"title": title}
    return request_json("POST", f"/api/2.0/files/folder/{parent_folder_id}", body)
  ```

  </TabItem>
</Tabs>

## Step 3: Copy welcome materials into the room

Then the script sends POST requests to [/api/2.0/files/file/:fileId/copyas](/docspace/api-backend/usage-api/copy-file-as) to copy template files into the selected destination folder.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function copyTemplateFile(fileId: string, destFolderId: number, destTitle: string) {
    // POST /api/2.0/files/file/:fileId/copyas
    // Copies a template file into the selected destination folder inside the client room.
    const body = {
      destFolderId,
      destTitle,
    };

    return requestJson('POST', `/api/2.0/files/file/${fileId}/copyas`, body);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def copy_template_file(file_id, dest_folder_id, dest_title):
    # POST /api/2.0/files/file/:fileId/copyas
    # Copies a template file into the selected destination folder inside the client room.
    body = {
      "destFolderId": dest_folder_id,
      "destTitle": dest_title,
    }
    return request_json("POST", f"/api/2.0/files/file/{file_id}/copyas", body)
  ```

  </TabItem>
</Tabs>

## Step 4: Configure room access for manager and client

Then it sends a PUT request to [/api/2.0/files/rooms/:roomId/share](/docspace/api-backend/usage-api/set-room-security) with two entries:
- the account manager (full access)
- the client (read-only)
This updates the room share settings and ensures the client can only view content.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function setRoomAccess(roomId: number, managerId: string, clientId: string) {
    // PUT /api/2.0/files/rooms/:roomId/share
    // Updates the room share settings with two explicit entries:
    // - account manager: full access (example access=4)
    // - client: read-only (example access=1)
    const body = {
      entries: [
        { id: managerId, isGroup: false, access: 4 },
        { id: clientId, isGroup: false, access: 1 },
      ],
    };

    return requestJson('PUT', `/api/2.0/files/rooms/${roomId}/share`, body);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def set_room_access(room_id, manager_id, client_id):
    # PUT /api/2.0/files/rooms/:roomId/share
    # Adds two explicit entries:
    # - account manager (full access)
    # - client (read-only)
    # This updates the room share settings and restricts the client permissions.
    body = {
      "entries": [
        {"id": manager_id, "isGroup": False, "access": 4},  # full access (example)
        {"id": client_id, "isGroup": False, "access": 1},   # read-only (example)
      ]
    }
    return request_json("PUT", f"/api/2.0/files/rooms/{room_id}/share", body)
  ```

  </TabItem>
</Tabs>

## Step 5: Create a room link for the client

Then the script sends a PUT request to [/api/2.0/files/rooms/:roomId/links](/docspace/api-backend/usage-api/set-room-link) to generate a link that can be sent to the client.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createRoomLink(roomId: number) {
    // PUT /api/2.0/files/rooms/:roomId/links
    // Creates or updates the primary external room link that can be sent to the client.
    return requestJson('PUT', `/api/2.0/files/rooms/${roomId}/links`, {});
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_room_link(room_id):
    # PUT /api/2.0/files/rooms/:roomId/links
    # Generates/updates the main external room link that can be sent to the client.
    return request_json("PUT", f"/api/2.0/files/rooms/{room_id}/links", {})
  ```

  </TabItem>
</Tabs>

## Step 6: Log room data in an external CRM

Finally, the script prepares a CRM payload (placeholder). Replace it with a real CRM request to store:
- client ID/name
- room ID/title
- room link info

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function logRoomToCrm(payload: any) {
    // Placeholder: replace with a real CRM API request.
    // Store: client info + room id/title + room link data.
    console.log('CRM payload:');
    console.log(payload);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def log_room_to_crm(payload):
    # Placeholder: replace with a real CRM API call (HTTP request).
    # Store: client id/name + room id/title + link info.
    print("CRM payload:")
    print(payload)
  ```

  </TabItem>
</Tabs>