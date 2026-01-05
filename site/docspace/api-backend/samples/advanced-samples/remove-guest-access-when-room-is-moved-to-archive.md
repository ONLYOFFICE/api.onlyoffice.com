import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove guest access when a room is moved to Archive

This example shows how to automatically revoke guest (external) access when a room is moved under an Archive root in DocSpace.
When a move event is received, the script verifies that the destination parent is the configured archive root, loads the room sharing entries, removes guest participants, and updates the room share settings. Optionally, it generates a cleanup report and notifies the room owner.

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

  // Archive root folder/room ID
  const ARCHIVE_ROOT_ID = 123456;

  // Folder where cleanup reports are stored
  const GUEST_CLEANUP_FOLDER_ID = 888888;

  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  async function docspaceRequest(path: string, method: string = 'GET', body: any = null) {
    const url = `${API_HOST}${path}`;

    try {
      const res = await fetch(url, {
        method,
        headers: HEADERS,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        const t = await res.text();
        console.log(`Request failed. Status: ${res.status}, Message: ${t}`);
        return null;
      }

      return res.json();
    } catch (err: any) {
      console.log(`Request error: ${err?.message || err}`);
      return null;
    }
  }

  // Step 1: Get room info
  async function getRoom(roomId: number) {
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}`, 'GET');
    if (!data || typeof data !== 'object') return null;

    const node = (data as any).response != null ? (data as any).response : data;
    return node && typeof node === 'object' ? node : null;
  }

  // Step 2: Get room share settings
  async function getRoomShare(roomId: number) {
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}/share`, 'GET');
    if (!data) return null;

    return (data as any).response != null ? (data as any).response : data;
  }

  // Helper: extract entries list from share response
  function extractParticipants(shareData: any) {
    if (Array.isArray(shareData)) return shareData;

    if (shareData && typeof shareData === 'object') {
      const keys = ['entries', 'items', 'participants', 'share'];
      for (const k of keys) {
        if (Array.isArray(shareData[k])) return shareData[k];
      }
    }

    return [];
  }

  // Step 3: Save room share settings (without guests)
  async function putRoomShare(roomId: number, participants: any[]) {
    const payload = { entries: participants };
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}/share`, 'PUT', payload);
    return Boolean(data);
  }

  // Helper: detect guest entry
  function isGuest(entry: any) {
    const role = String(entry.access || entry.role || '').toLowerCase();
    const subjectType = String(entry.subjectType || '').toLowerCase();
    const visitorFlag = Boolean(entry.isVisitor || entry.visitor);

    if (visitorFlag) return true;

    if (role.includes('guest') || role.includes('visitor') || role.includes('external')) return true;

    if (subjectType === 'guest' || subjectType === 'visitor' || subjectType === 'external') return true;

    return false;
  }

  // Step 4: Create a text cleanup report (simple placeholder)
  async function createCleanupReport(roomTitle: string, guests: any[]) {
    if (!guests.length) return;

    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const safeTitle = roomTitle.replace(/[\/\\]/g, '_');
    const fileName = `${safeTitle}-guest-cleanup-${ts}.txt`;

    const lines: string[] = [];
    lines.push(`Guest cleanup report for room "${roomTitle}"`);
    lines.push('');
    lines.push('Removed guests:');

    for (const g of guests) {
      const email = g.email || g.userName || g.displayName || String(g.id || 'unknown');
      lines.push(`- ${email}`);
    }

    const content = lines.join('\n');

    // Placeholder request (replace with your real upload/create-text endpoint)
    const payload = { title: fileName, content };
    await docspaceRequest(`/api/2.0/files/folder/${GUEST_CLEANUP_FOLDER_ID}`, 'POST', payload);

    console.log(`Cleanup report created: ${fileName}`);
  }

  // Step 5: Notify room owner (placeholder)
  function notifyOwner(ownerEmail: string, roomTitle: string) {
    console.log(`[NOTIFY] ${ownerEmail}: Guest access cleaned up for room "${roomTitle}".`);
  }

  // Main: cleanup guests from a single room
  async function cleanupRoomGuests(roomId: number) {
    const room = await getRoom(roomId);
    if (!room) {
      console.log(`Room not found. roomId=${roomId}`);
      return;
    }

    const title = String(room.title || `Room ${roomId}`);
    const ownerEmail = String(room.ownerEmail || room.owner || 'owner@example.com');

    const shareData = await getRoomShare(roomId);
    if (!shareData) {
      console.log(`Cannot load share data. roomId=${roomId}`);
      return;
    }

    const participants = extractParticipants(shareData);
    if (!participants.length) {
      console.log(`Room "${title}" has no participants in share.`);
      return;
    }

    const guests = participants.filter(isGuest);
    if (!guests.length) {
      console.log(`Room "${title}" has no guest users.`);
      return;
    }

    const remaining = participants.filter((p: any) => !isGuest(p));

    const ok = await putRoomShare(roomId, remaining);
    if (!ok) {
      console.log(`Failed to update share. roomId=${roomId}`);
      return;
    }

    await createCleanupReport(title, guests);
    notifyOwner(ownerEmail, title);

    console.log(`Guest access cleaned: room="${title}", removed=${guests.length}`);
  }

  // Webhook handler: room moved into archive root
  async function handleRoomMovedEvent(eventPayload: any) {
    const data = eventPayload && eventPayload.data ? eventPayload.data : {};

    const roomId = Number(data.roomId);
    const newParentId = Number(data.newParentId);

    if (!Number.isFinite(roomId) || !Number.isFinite(newParentId)) {
      console.log('Invalid roomId or newParentId in payload.');
      return;
    }

    if (newParentId !== ARCHIVE_ROOT_ID) {
      console.log(`Room moved, but not into archive root. roomId=${roomId}`);
      return;
    }

    await cleanupRoomGuests(roomId);
  }

  // Example usage
  handleRoomMovedEvent({
    event: 'room_moved',
    data: { roomId: 2025512, newParentId: ARCHIVE_ROOT_ID },
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  from datetime import datetime, timezone

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  ARCHIVE_ROOT_ID = 123456
  GUEST_CLEANUP_FOLDER_ID = 888888

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  def docspace_request(method, path, json_body=None):
    url = f"{API_HOST}{path}"

    try:
      response = requests.request(method.upper(), url, headers=HEADERS, json=json_body)
    except Exception as e:
      print(f"Request error: {e}")
      return None

    if response.status_code != 200:
      print(f"Request failed. Status: {response.status_code}, Message: {response.text}")
      return None

    try:
      return response.json()
    except Exception:
      print("Response is not JSON.")
      return None

  # Step 1: Get room info
  def get_room(room_id):
    data = docspace_request("GET", f"/api/2.0/files/rooms/{room_id}")
    if not isinstance(data, dict):
      return None

    node = data.get("response", data)
    return node if isinstance(node, dict) else None

  # Step 2: Get room share settings
  def get_room_share(room_id):
    data = docspace_request("GET", f"/api/2.0/files/rooms/{room_id}/share")
    if data is None:
      return None

    return data.get("response", data)

  # Helper: extract entries list from share response
  def extract_participants(share_data):
    if isinstance(share_data, list):
      return share_data

    if isinstance(share_data, dict):
      for key in ("entries", "items", "participants", "share"):
        value = share_data.get(key)
        if isinstance(value, list):
          return value

    return []

  # Step 3: Save room share settings (without guests)
  def put_room_share(room_id, participants):
    payload = {"entries": participants}
    data = docspace_request("PUT", f"/api/2.0/files/rooms/{room_id}/share", json_body=payload)
    return data is not None

  # Helper: detect guest entry
  def is_guest(entry):
    role = str(entry.get("access") or entry.get("role") or "").lower()
    subject_type = str(entry.get("subjectType") or "").lower()
    visitor_flag = bool(entry.get("isVisitor") or entry.get("visitor"))

    if visitor_flag:
      return True

    if "guest" in role or "visitor" in role or "external" in role:
      return True

    if subject_type in ("guest", "visitor", "external"):
      return True

    return False

  # Step 4: Create a text cleanup report (simple placeholder)
  def create_cleanup_report(room_title, guests):
    if not guests:
      return

    timestamp = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S")
    safe_title = room_title.replace("/", "_").replace("\\", "_")
    filename = f"{safe_title}-guest-cleanup-{timestamp}.txt"

    lines = [
      f'Guest cleanup report for room "{room_title}"',
      "",
      "Removed guests:",
    ]

    for p in guests:
      email = p.get("email") or p.get("userName") or p.get("displayName") or str(p.get("id") or "unknown")
      lines.append(f"- {email}")

    content = "\n".join(lines)

    # Placeholder request (replace with your real upload/create-text endpoint)
    payload = {"title": filename, "content": content}
    docspace_request("POST", f"/api/2.0/files/folder/{GUEST_CLEANUP_FOLDER_ID}", json_body=payload)

    print(f"Cleanup report created: {filename}")

  # Step 5: Notify room owner (placeholder)
  def notify_owner(owner_email, room_title):
    print(f'[NOTIFY] {owner_email}: Guest access cleaned up for room "{room_title}".')

  # Main: cleanup guests from a single room
  def cleanup_room_guests(room_id):
    room = get_room(room_id)
    if not room:
      print(f"Room not found. roomId={room_id}")
      return

    title = str(room.get("title") or f"Room {room_id}")
    owner_email = str(room.get("ownerEmail") or room.get("owner") or "owner@example.com")

    share_data = get_room_share(room_id)
    if share_data is None:
      print(f"Cannot load share data. roomId={room_id}")
      return

    participants = extract_participants(share_data)
    if not participants:
      print(f'Room "{title}" has no participants in share.')
      return

    guests = [p for p in participants if is_guest(p)]
    if not guests:
      print(f'Room "{title}" has no guest users.')
      return

    remaining = [p for p in participants if not is_guest(p)]

    ok = put_room_share(room_id, remaining)
    if not ok:
      print(f"Failed to update share. roomId={room_id}")
      return

    create_cleanup_report(title, guests)
    notify_owner(owner_email, title)

    print(f'Guest access cleaned: room="{title}", removed={len(guests)}')

  # Webhook handler: room moved into archive root
  def handle_room_moved_event(event_payload):
    data = event_payload.get("data") or {}
    room_id_raw = data.get("roomId")
    new_parent_raw = data.get("newParentId")

    try:
      room_id = int(room_id_raw)
      new_parent_id = int(new_parent_raw)
    except Exception:
      print("Invalid roomId or newParentId in payload.")
      return

    if new_parent_id != ARCHIVE_ROOT_ID:
      print(f"Room moved, but not into archive root. roomId={room_id}")
      return

    cleanup_room_guests(room_id)

  if __name__ == "__main__":
    handle_room_moved_event({
      "event": "room_moved",
      "data": {"roomId": 2025512, "newParentId": ARCHIVE_ROOT_ID},
    })
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Handle the room moved event and validate the destination

Your integration receives a room move event (for example, room_moved) that contains:
- `roomId`: moved room ID
- `newParentId`: destination parent ID

The script checks whether `newParentId` equals `ARCHIVE_ROOT_ID`. If the room was moved somewhere else, it is ignored.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getRoom(roomId: number) {
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}`, 'GET');
    if (!data || typeof data !== 'object') return null;

    const node = (data as any).response != null ? (data as any).response : data;
    return node && typeof node === 'object' ? node : null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_room(room_id):
    data = docspace_request("GET", f"/api/2.0/files/rooms/{room_id}")
    if not isinstance(data, dict):
      return None

    node = data.get("response", data)
    return node if isinstance(node, dict) else None
  ```

  </TabItem>
</Tabs>

## Step 2: Load room details (title/owner) for reporting

A GET request is sent to [/api/2.0/files/rooms/:roomId/share](/docspace/api-backend/usage-api/get-room-security-info) to retrieve the room sharing entries.
The response can contain the list of entries in different fields (for example, `entries`), so the script extracts participants from the most common structures.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getRoomShare(roomId: number) {
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}/share`, 'GET');
    if (!data) return null;

    return (data as any).response != null ? (data as any).response : data;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_room_share(room_id):
    data = docspace_request("GET", f"/api/2.0/files/rooms/{room_id}/share")
    if data is None:
      return None

    return data.get("response", data)

  ```

  </TabItem>
</Tabs>

## Step 3: Load room sharing entries

The script filters guest entries using `is_guest()`.

Then it sends a PUT request to [/api/2.0/files/rooms/:roomId/share](/docspace/api-backend/usage-api/set-room-security) with only the remaining participants. This updates the room share settings and removes guest access.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function putRoomShare(roomId: number, participants: any[]) {
    const payload = { entries: participants };
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}/share`, 'PUT', payload);
    return Boolean(data);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def put_room_share(room_id, participants):
    payload = {"entries": participants}
    data = docspace_request("PUT", f"/api/2.0/files/rooms/{room_id}/share", json_body=payload)
    return data is not None
  ```

  </TabItem>
</Tabs>

## Step 4: Remove guest/external entries and save share settings

After guests are removed, the script builds a simple text report with:
- room title
- list of removed guests
- timestamp
In this example, report creation is a placeholder request. Replace it with your actual file upload or “create text file” logic.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createCleanupReport(roomTitle: string, guests: any[]) {
    if (!guests.length) return;

    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const safeTitle = roomTitle.replace(/[\/\\]/g, '_');
    const fileName = `${safeTitle}-guest-cleanup-${ts}.txt`;

    const lines: string[] = [];
    lines.push(`Guest cleanup report for room "${roomTitle}"`);
    lines.push('');
    lines.push('Removed guests:');

    for (const g of guests) {
      const email = g.email || g.userName || g.displayName || String(g.id || 'unknown');
      lines.push(`- ${email}`);
    }

    const content = lines.join('\n');

    // Placeholder request (replace with your real upload/create-text endpoint)
    const payload = { title: fileName, content };
    await docspaceRequest(`/api/2.0/files/folder/${GUEST_CLEANUP_FOLDER_ID}`, 'POST', payload);

    console.log(`Cleanup report created: ${fileName}`);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_cleanup_report(room_title, guests):
    if not guests:
      return

    timestamp = datetime.now(timezone.utc).strftime("%Y%m%d-%H%M%S")
    safe_title = room_title.replace("/", "_").replace("\\", "_")
    filename = f"{safe_title}-guest-cleanup-{timestamp}.txt"

    lines = [
      f'Guest cleanup report for room "{room_title}"',
      "",
      "Removed guests:",
    ]

    for p in guests:
      email = p.get("email") or p.get("userName") or p.get("displayName") or str(p.get("id") or "unknown")
      lines.append(f"- {email}")

    content = "\n".join(lines)

    # Placeholder request (replace with your real upload/create-text endpoint)
    payload = {"title": filename, "content": content}
    docspace_request("POST", f"/api/2.0/files/folder/{GUEST_CLEANUP_FOLDER_ID}", json_body=payload)

    print(f"Cleanup report created: {filename}")
  ```

  </TabItem>
</Tabs>

## Step 5: Write a cleanup report and notify the owner

The example uses a placeholder notification (console output). Replace it with your email/webhook/incident integration as needed.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function notifyOwner(ownerEmail: string, roomTitle: string) {
    console.log(`[NOTIFY] ${ownerEmail}: Guest access cleaned up for room "${roomTitle}".`);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def notify_owner(owner_email, room_title):
    print(f'[NOTIFY] {owner_email}: Guest access cleaned up for room "{room_title}".')
  ```

  </TabItem>
</Tabs>