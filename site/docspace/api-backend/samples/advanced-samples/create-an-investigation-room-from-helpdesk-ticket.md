import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create an investigation room for each new support ticket

This example shows how to create a dedicated investigation room in ONLYOFFICE DocSpace when your helpdesk system (Zendesk / Freshdesk / Jira Service Management) reports a new ticket.

When a ticket is created, the integration:

- receives a `ticket.created` webhook from the helpdesk system,
- creates a room in DocSpace for the ticket,
- creates a standard folder structure inside the room,
- optionally grants access to a support team,
- generates a room link,
- sends the link back to the helpdesk (placeholder).

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  import express from "express";

  // DocSpace configuration
  const API_HOST = "https://yourportal.onlyoffice.com";
  const API_KEY = "YOUR_API_KEY";

  // Business configuration
  const INVESTIGATION_ROOM_TYPE = 2; // Example: collaboration room (adjust if your build uses other values)
  const DEFAULT_FOLDERS = ["Logs", "Attachments", "Findings"];

  // Optional: grant access to a team/user
  // If you do not want this step, keep SHARE_ENTRIES empty.
  const SHARE_ENTRIES: Array<{ id: string; isGroup: boolean; access: number }> = [
    // { id: "SUPPORT_TEAM_ID", isGroup: true, access: 4 },
  ];

  // DocSpace auth headers
  const HEADERS: Record<string, string> = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  // Step 0: HTTP helper
  async function docspaceRequest(path: string, method: string = "GET", body: any = null) {
    const url = `${API_HOST}${path}`;

    try {
      const res = await fetch(url, {
        method,
        headers: HEADERS,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        const text = await res.text();
        console.log(`[ERROR] DocSpace request failed: ${method} ${url}`);
        console.log(`[ERROR] Status: ${res.status}, Message: ${text}`);
        return null;
      }

      return res.json();
    } catch (err: any) {
      console.log(`[ERROR] DocSpace request error: ${err?.message || err}`);
      return null;
    }
  }

  // Step 1: Parse ticket payload
  function extractTicket(payload: any) {
    const ticketId = String(payload?.ticketId || "").trim();
    const subject = String(payload?.subject || "").trim();

    if (!ticketId || !subject) return null;

    return { ticketId, subject };
  }

  // Step 2: Create investigation room
  async function createInvestigationRoom(ticketId: string, subject: string) {
    const title = `Ticket #${ticketId} – ${subject}`;

    const body = {
      title,
      roomType: INVESTIGATION_ROOM_TYPE,
    };

    const data = await docspaceRequest("/api/2.0/files/rooms", "POST", body);
    const resp = data && typeof data === "object" ? (data.response ?? null) : null;

    const roomId = Number(resp?.id ?? data?.id ?? null);
    if (!Number.isFinite(roomId)) {
      console.log("[ERROR] Could not read roomId from response:", data);
      return null;
    }

    return { roomId, title };
  }

  // Step 3: Create default folders inside the room
  async function createFolder(parentFolderId: number, title: string) {
    const body = { title };
    const data = await docspaceRequest(`/api/2.0/files/folder/${parentFolderId}`, "POST", body);

    const resp = data && typeof data === "object" ? (data.response ?? null) : null;
    const folderId = Number(resp?.id ?? data?.id ?? null);

    if (!Number.isFinite(folderId)) {
      console.log(`[WARN] Folder '${title}' created, but folderId not detected. Response:`, data);
      return null;
    }

    return folderId;
  }

  async function createStandardStructure(roomId: number) {
    for (const folderName of DEFAULT_FOLDERS) {
      await createFolder(roomId, folderName);
    }
  }

  // Step 4: Share room with team/users (optional)
  async function shareRoom(roomId: number) {
    if (!SHARE_ENTRIES.length) return true;

    const body = { entries: SHARE_ENTRIES };
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}/share`, "PUT", body);

    return Boolean(data);
  }

  // Step 5: Generate a room link (do not build UI URL manually)
  async function generateRoomLink(roomId: number) {
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}/links`, "PUT", {});
    const resp = data && typeof data === "object" ? (data.response ?? null) : null;

    // Different builds may return different structures.
    // Try common fields: link/url/href.
    const url =
      String(resp?.link || resp?.url || resp?.href || resp?.primaryUrl || "").trim() ||
      String(data?.link || data?.url || "").trim();

    if (!url) {
      console.log("[WARN] Room link was created, but URL not found in response:", data);
      return null;
    }

    return url;
  }

  // Step 6: Update ticket in helpdesk (placeholder)
  async function updateTicketWithRoomLink(ticketId: string, roomUrl: string) {
    console.log("[HELPDESK]");
    console.log(`Attach investigation room to ticket ${ticketId}`);
    console.log(`Room: ${roomUrl}`);

    // Replace with your helpdesk API call:
    // - Zendesk: add internal note / custom field
    // - Freshdesk: update ticket custom field
    // - JSM: add comment / issue property
  }

  // Orchestration
  async function handleTicketCreated(payload: any) {
    const ticket = extractTicket(payload);
    if (!ticket) {
      console.log("[INFO] Missing ticketId or subject. Skipping.");
      return;
    }

    const room = await createInvestigationRoom(ticket.ticketId, ticket.subject);
    if (!room) return;

    await createStandardStructure(room.roomId);

    const shared = await shareRoom(room.roomId);
    if (!shared) {
      console.log("[WARN] Room created but sharing step failed.");
    }

    const roomUrl = await generateRoomLink(room.roomId);
    if (!roomUrl) {
      console.log("[WARN] Room created but link generation failed.");
      return;
    }

    await updateTicketWithRoomLink(ticket.ticketId, roomUrl);

    console.log("[INFO] Ticket room flow completed.");
  }

  // Minimal webhook receiver (helpdesk -> your backend)
  const app = express();
  app.use(express.json({ limit: "2mb" }));

  app.post("/helpdesk/ticket-created", async (req, res) => {
    try {
      await handleTicketCreated(req.body);
    } catch (e: any) {
      console.log("[ERROR]", e?.message || e);
    }
    return res.status(200).json({ status: "ok" });
  });

  app.listen(3000, () => {
    console.log("Helpdesk webhook listener: http://localhost:3000/helpdesk/ticket-created");
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  from flask import Flask, request, jsonify
  import requests
  from typing import Optional, Dict, Any, List

  # DocSpace configuration
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Business configuration
  INVESTIGATION_ROOM_TYPE = 2  # Example: collaboration room (adjust if your build uses other values)
  DEFAULT_FOLDERS: List[str] = ["Logs", "Attachments", "Findings"]

  # Optional: share room
  # If you do not want this step, keep SHARE_ENTRIES empty.
  SHARE_ENTRIES: List[Dict[str, Any]] = [
    # { "id": "SUPPORT_TEAM_ID", "isGroup": True, "access": 4 },
  ]

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  app = Flask(__name__)

  # Step 0: HTTP helper
  def docspace_request(path: str, method: str = "GET", json_body: Optional[Dict[str, Any]] = None) -> Optional[Dict[str, Any]]:
    url = f"{API_HOST}{path}"

    try:
      r = requests.request(method.upper(), url, headers=HEADERS, json=json_body)
    except Exception as e:
      print(f"[ERROR] DocSpace request error: {e}")
      return None

    if r.status_code != 200:
      print(f"[ERROR] DocSpace request failed: {method} {url}")
      print(f"[ERROR] Status: {r.status_code}, Message: {r.text}")
      return None

    try:
      return r.json()
    except Exception:
      print(f"[ERROR] Invalid JSON response from: {url}")
      return None

  # Step 1: Parse ticket payload
  def extract_ticket(payload: Dict[str, Any]) -> Optional[Dict[str, str]]:
    ticket_id = str(payload.get("ticketId") or "").strip()
    subject = str(payload.get("subject") or "").strip()

    if not ticket_id or not subject:
      return None

    return {"ticketId": ticket_id, "subject": subject}

  # Step 2: Create investigation room
  def create_investigation_room(ticket_id: str, subject: str) -> Optional[Dict[str, Any]]:
    title = f"Ticket #{ticket_id} – {subject}"

    payload = {
      "title": title,
      "roomType": INVESTIGATION_ROOM_TYPE,
    }

    data = docspace_request("/api/2.0/files/rooms", method="POST", json_body=payload)
    if not isinstance(data, dict):
      return None

    resp = data.get("response") if isinstance(data.get("response"), dict) else data
    room_id_raw = resp.get("id") if isinstance(resp, dict) else None

    try:
      room_id = int(room_id_raw)
    except Exception:
      print("[ERROR] Could not read roomId from response:", data)
      return None

    return {"roomId": room_id, "title": title}

  # Step 3: Create default folders inside the room
  def create_folder(parent_folder_id: int, title: str) -> Optional[int]:
    payload = {"title": title}
    data = docspace_request(f"/api/2.0/files/folder/{parent_folder_id}", method="POST", json_body=payload)
    if not isinstance(data, dict):
      return None

    resp = data.get("response") if isinstance(data.get("response"), dict) else data
    folder_id_raw = resp.get("id") if isinstance(resp, dict) else None

    try:
      return int(folder_id_raw)
    except Exception:
      print(f"[WARN] Folder '{title}' created, but folderId not detected. Response:", data)
      return None

  def create_standard_structure(room_id: int) -> None:
    for folder_name in DEFAULT_FOLDERS:
      create_folder(room_id, folder_name)

  # Step 4: Share room with team/users (optional)
  def share_room(room_id: int) -> bool:
    if not SHARE_ENTRIES:
      return True

    payload = {"entries": SHARE_ENTRIES}
    data = docspace_request(f"/api/2.0/files/rooms/{room_id}/share", method="PUT", json_body=payload)
    return data is not None

  # Step 5: Generate a room link (do not build UI URL manually)
  def generate_room_link(room_id: int) -> Optional[str]:
    data = docspace_request(f"/api/2.0/files/rooms/{room_id}/links", method="PUT", json_body={})
    if not isinstance(data, dict):
      return None

    resp = data.get("response") if isinstance(data.get("response"), dict) else data

    url = ""
    if isinstance(resp, dict):
      url = str(resp.get("link") or resp.get("url") or resp.get("href") or resp.get("primaryUrl") or "").strip()

    if not url:
      url = str(data.get("link") or data.get("url") or "").strip()

    if not url:
      print("[WARN] Room link was created, but URL not found in response:", data)
      return None

    return url

  # Step 6: Update ticket in helpdesk (placeholder)
  def update_ticket_with_room_link(ticket_id: str, room_url: str) -> None:
    print("[HELPDESK]")
    print(f"Attach investigation room to ticket {ticket_id}")
    print(f"Room: {room_url}")

    # Replace with your helpdesk API call:
    # - Zendesk / Freshdesk / JSM

  # Orchestration
  def handle_ticket_created(payload: Dict[str, Any]) -> None:
    ticket = extract_ticket(payload)
    if not ticket:
      print("[INFO] Missing ticketId or subject. Skipping.")
      return

    room = create_investigation_room(ticket["ticketId"], ticket["subject"])
    if not room:
      return

    room_id = room["roomId"]

    create_standard_structure(room_id)

    if not share_room(room_id):
      print("[WARN] Room created but sharing step failed.")

    room_url = generate_room_link(room_id)
    if not room_url:
      print("[WARN] Room created but link generation failed.")
      return

    update_ticket_with_room_link(ticket["ticketId"], room_url)
    print("[INFO] Ticket room flow completed.")

  # Webhook receiver (helpdesk -> your backend)
  @app.route("/helpdesk/ticket-created", methods=["POST"])
  def helpdesk_ticket_created():
    body = request.get_json(silent=True)
    if not isinstance(body, dict) or not body:
      return jsonify({"status": "ok"}), 200

    try:
      handle_ticket_created(body)
    except Exception as e:
      print("[ERROR]", e)

    return jsonify({"status": "ok"}), 200

  if __name__ == "__main__":
    print("Helpdesk webhook listener: http://localhost:3000/helpdesk/ticket-created")
    app.run(host="0.0.0.0", port=3000)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Receive the “ticket created” event

Your helpdesk system sends a webhook to your backend when a new ticket is created.
The handler extracts `ticketId` and `subject` from the incoming payload and starts the DocSpace workflow.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function extractTicket(payload: any) {
    const ticketId = String(payload?.ticketId || "").trim();
    const subject = String(payload?.subject || "").trim();

    if (!ticketId || !subject) return null;

    return { ticketId, subject };
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def extract_ticket(payload: Dict[str, Any]) -> Optional[Dict[str, str]]:
    ticket_id = str(payload.get("ticketId") or "").strip()
    subject = str(payload.get("subject") or "").strip()

    if not ticket_id or not subject:
      return None

    return {"ticketId": ticket_id, "subject": subject}
  ```

  </TabItem>
</Tabs>

## Step 2: Create a dedicated investigation room

The backend creates a new DocSpace room with a title that includes the ticket id and subject.
It uses POST [/api/2.0/files/rooms](/docspace/api-backend/usage-api/move-batch-items) with a body like `{ "title": "Ticket #123 – Login error", "roomType": 2 }`

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createInvestigationRoom(ticketId: string, subject: string) {
    const title = `Ticket #${ticketId} – ${subject}`;

    const body = {
      title,
      roomType: INVESTIGATION_ROOM_TYPE,
    };

    const data = await docspaceRequest("/api/2.0/files/rooms", "POST", body);
    const resp = data && typeof data === "object" ? (data.response ?? null) : null;

    const roomId = Number(resp?.id ?? data?.id ?? null);
    if (!Number.isFinite(roomId)) return null;

    return { roomId, title };
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_investigation_room(ticket_id: str, subject: str) -> Optional[Dict[str, Any]]:
    title = f"Ticket #{ticket_id} – {subject}"

    payload = {"title": title, "roomType": INVESTIGATION_ROOM_TYPE}
    data = docspace_request("/api/2.0/files/rooms", method="POST", json_body=payload)
    if not isinstance(data, dict):
      return None

    resp = data.get("response") if isinstance(data.get("response"), dict) else data
    room_id_raw = resp.get("id") if isinstance(resp, dict) else None

    try:
      room_id = int(room_id_raw)
    except Exception:
      return None

    return {"roomId": room_id, "title": title}
  ```

  </TabItem>
</Tabs>

## Step 3: Create the standard folder structure inside the room

To keep investigations consistent, the script creates folders inside the new room using
POST [/api/2.0/files/folder/{parentFolderId}](/docspace/api-backend/usage-api/move-batch-items) where `parentFolderId` is the room id.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createStandardStructure(roomId: number) {
    for (const folderName of DEFAULT_FOLDERS) {
      await createFolder(roomId, folderName);
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_standard_structure(room_id: int) -> None:
    for folder_name in DEFAULT_FOLDERS:
      create_folder(room_id, folder_name)
  ```

  </TabItem>
</Tabs>

## Step 4: Configure room access (optional)

If you want only a specific team to work in the room, you can share it using PUT [/api/2.0/files/rooms/{roomId}/share](/docspace/api-backend/usage-api/move-batch-items) with `{ "entries": [ ... ] }`

If you do not need this step, keep `SHARE_ENTRIES` empty.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function shareRoom(roomId: number) {
    if (!SHARE_ENTRIES.length) return true;

    const body = { entries: SHARE_ENTRIES };
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}/share`, "PUT", body);

    return Boolean(data);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def share_room(room_id: int) -> bool:
    if not SHARE_ENTRIES:
      return True

    payload = {"entries": SHARE_ENTRIES}
    data = docspace_request(f"/api/2.0/files/rooms/{room_id}/share", method="PUT", json_body=payload)
    return data is not None
  ```

  </TabItem>
</Tabs>

## Step 5: Generate an access link to the room

The script requests a DocSpace-generated room link using PUT [/api/2.0/files/rooms/{roomId}/links](/docspace/api-backend/usage-api/move-batch-items).

This avoids constructing UI links manually and ensures the returned URL is correct for your portal.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function generateRoomLink(roomId: number) {
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}/links`, "PUT", {});
    const resp = data && typeof data === "object" ? (data.response ?? null) : null;

    const url =
      String(resp?.link || resp?.url || resp?.href || resp?.primaryUrl || "").trim() ||
      String(data?.link || data?.url || "").trim();

    return url || null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def generate_room_link(room_id: int) -> Optional[str]:
    data = docspace_request(f"/api/2.0/files/rooms/{room_id}/links", method="PUT", json_body={})
    if not isinstance(data, dict):
      return None

    resp = data.get("response") if isinstance(data.get("response"), dict) else data

    url = ""
    if isinstance(resp, dict):
      url = str(resp.get("link") or resp.get("url") or resp.get("href") or resp.get("primaryUrl") or "").strip()

    if not url:
      url = str(data.get("link") or data.get("url") or "").strip()

    return url or None
  ```

  </TabItem>
</Tabs>

## Step 6 : Attach the room link back to the ticket

After the link is generated, the integration sends it back to your helpdesk system (placeholder).
In production, this step updates the ticket using your helpdesk API (custom field, internal note, etc.).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function updateTicketWithRoomLink(ticketId: string, roomUrl: string) {
    console.log("[HELPDESK]");
    console.log(`Attach investigation room to ticket ${ticketId}`);
    console.log(`Room: ${roomUrl}`);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def update_ticket_with_room_link(ticket_id: str, room_url: str) -> None:
    print("[HELPDESK]")
    print(f"Attach investigation room to ticket {ticket_id}")
    print(f"Room: {room_url}")
  ```

  </TabItem>
</Tabs>