import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a room snapshot before a mass edit

This example demonstrates how to automatically create a "snapshot" of a room before a mass edit operation. The script checks whether the room has a special tag (for example, `prepare-mass-edit`). If the tag is present, it creates a timestamped folder in a dedicated Snapshot room and copies all top-level files from the source room into that folder.
This approach helps you keep a quick backup of important room files before you run bulk renaming, indexing, permissions updates, or other large changes.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Basic configuration
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Room where snapshots are stored (destination)
  const SNAPSHOT_ROOM_ID = 123456;

  // Tag that enables snapshot creation on a source room
  const TAG_MARKER = 'prepare-mass-edit';

  // Request headers
  const HEADERS: Record<string, string> = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Simple request helper
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
        console.log(`Request failed: ${method} ${url}`);
        console.log(`Status: ${res.status}, Message: ${text}`);
        return null;
      }

      return await res.json();
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

  function normalizeTags(room: any) {
    const raw = room?.tags ?? room?.tagList ?? [];
    if (!Array.isArray(raw)) return [];
    return raw.map((t: any) => String(t));
  }

  // Step 1: Load room details and check whether TAG_MARKER is present
  async function getRoomInfo(roomId: number) {
    const data = await requestJson('GET', `/api/2.0/files/rooms/${roomId}`);
    const node = getNode(data);
    return node && typeof node === 'object' ? node : null;
  }

  // Step 2: Create a timestamped snapshot folder in the Snapshot room
  async function createSnapshotFolder(sourceRoomTitle: string) {
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const snapshotTitle = `${sourceRoomTitle}_${ts}`;

    const data = await requestJson(
      'POST',
      `/api/2.0/files/folder/${SNAPSHOT_ROOM_ID}`,
      { title: snapshotTitle }
    );

    const node = getNode(data);
    if (!node || typeof node !== 'object') return null;

    const folderId = node.id != null ? Number(node.id) : null;
    if (!Number.isFinite(folderId)) return null;

    return { folderId, snapshotTitle };
  }

  // Step 3: List top-level files in the source room (subfolders are skipped)
  async function listTopLevelRoomFiles(roomId: number) {
    const data = await requestJson('GET', `/api/2.0/files/rooms/${roomId}`);
    const node = getNode(data);

    const items =
      Array.isArray(node) ? node :
      node && typeof node === 'object' && Array.isArray(node.files) ? node.files :
      [];

    const files: { id: number; title: string }[] = [];

    for (const it of items) {
      if (!it || typeof it !== 'object') continue;

      const isFolder =
        it.isFolder === true ||
        it.folder === true ||
        String(it.type || '').toLowerCase() === 'folder';

      if (isFolder) continue;

      const id = Number(it.id);
      if (!Number.isFinite(id)) continue;

      files.push({
        id,
        title: String(it.title || ''),
      });
    }

    return files;
  }

  // Step 4: Copy a file into the snapshot folder
  async function copyFileToSnapshot(fileId: number, destFolderId: number, destTitle: string) {
    const payload = {
      destTitle,
      destFolderId,
    };

    const data = await requestJson('POST', `/api/2.0/files/file/${fileId}/copyas`, payload);
    return Boolean(data);
  }

  // Main flow: create snapshot only if the room is tagged
  async function createRoomSnapshotIfTagged(roomId: number) {
    const roomInfo = await getRoomInfo(roomId);
    if (!roomInfo) {
      console.log(`Room not found. roomId=${roomId}`);
      return;
    }

    const roomTitle = String(roomInfo.title || `Room ${roomId}`);
    const tags = normalizeTags(roomInfo);

    if (!tags.includes(TAG_MARKER)) {
      console.log(`Skipping: room "${roomTitle}" does not have tag "${TAG_MARKER}".`);
      return;
    }

    const snapshotFolder = await createSnapshotFolder(roomTitle);
    if (!snapshotFolder) {
      console.log('Snapshot folder could not be created.');
      return;
    }

    const files = await listTopLevelRoomFiles(roomId);
    if (!files.length) {
      console.log(`No top-level files found in room "${roomTitle}".`);
      return;
    }

    let copied = 0;

    for (const f of files) {
      const title = f.title || `file_${f.id}`;
      const ok = await copyFileToSnapshot(f.id, snapshotFolder.folderId, title);
      if (ok) copied += 1;
    }

    console.log(
      `Snapshot created for "${roomTitle}". ` +
      `Copied: ${copied}. Snapshot folder ID: ${snapshotFolder.folderId}.`
    );
  }

  // Step 5: Example event handler (placeholder)
  function handleRoomUpdatedEvent(eventPayload: any) {
    const data = eventPayload && eventPayload.data ? eventPayload.data : {};
    const roomId = Number(data.roomId);

    if (!Number.isFinite(roomId)) {
      console.log('Invalid roomId in event payload.');
      return;
    }

    createRoomSnapshotIfTagged(roomId);
  }

  // Example usage
  handleRoomUpdatedEvent({
    event: 'room_updated',
    data: { roomId: 2025512 },
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  from datetime import datetime, timezone

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  SNAPSHOT_ROOM_ID = 123456
  TAG_MARKER = "prepare-mass-edit"

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  def request_json(method, path, json_body=None):
    url = f"{API_HOST}{path}"

    try:
      r = requests.request(method.upper(), url, headers=HEADERS, json=json_body)
    except Exception as e:
      print(f"Request error: {e}")
      return None

    if r.status_code != 200:
      print(f"Request failed: {method} {url}")
      print(f"Status: {r.status_code}, Message: {r.text}")
      return None

    try:
      return r.json()
    except Exception:
      print("Response is not JSON.")
      return None

  def get_node(data):
    if not isinstance(data, dict):
      return None
    return data.get("response", data)

  def normalize_tags(room):
    raw = room.get("tags") or room.get("tagList") or []
    if not isinstance(raw, list):
      return []
    return [str(t) for t in raw]

  # Step 1: Load room details and check whether TAG_MARKER is present
  def get_room_info(room_id):
    data = request_json("GET", f"/api/2.0/files/rooms/{room_id}")
    node = get_node(data) if isinstance(data, dict) else None
    return node if isinstance(node, dict) else None

  # Step 2: Create a timestamped snapshot folder in the Snapshot room
  def create_snapshot_folder(source_room_title):
    ts = datetime.now(timezone.utc).strftime("%Y-%m-%d_%H-%M-%S")
    snapshot_title = f"{source_room_title}_{ts}"

    data = request_json(
      "POST",
      f"/api/2.0/files/folder/{SNAPSHOT_ROOM_ID}",
      json_body={"title": snapshot_title},
    )
    node = get_node(data) if isinstance(data, dict) else None
    if not isinstance(node, dict):
      return None

    folder_id = node.get("id")
    if folder_id is None:
      return None

    return {"folderId": int(folder_id), "snapshotTitle": snapshot_title}

  # Step 3: List top-level files in the source room (subfolders are skipped)
  def list_top_level_room_files(room_id):
    data = request_json("GET", f"/api/2.0/files/rooms/{room_id}")
    node = get_node(data) if isinstance(data, dict) else None

    items = []
    if isinstance(node, list):
      items = node
    elif isinstance(node, dict):
      files = node.get("files") or []
      items = files if isinstance(files, list) else []

    files_out = []

    for it in items:
      if not isinstance(it, dict):
        continue

      is_folder = (
        it.get("isFolder") is True
        or it.get("folder") is True
        or str(it.get("type") or "").lower() == "folder"
      )
      if is_folder:
        continue

      file_id = it.get("id")
      if file_id is None:
        continue

      files_out.append({
        "id": int(file_id),
        "title": str(it.get("title") or ""),
      })

    return files_out

  # Step 4: Copy a file into the snapshot folder
  def copy_file_to_snapshot(file_id, dest_folder_id, dest_title):
    payload = {
      "destTitle": dest_title,
      "destFolderId": dest_folder_id,
    }

    data = request_json(
      "POST",
      f"/api/2.0/files/file/{file_id}/copyas",
      json_body=payload,
    )
    return data is not None

  def create_room_snapshot_if_tagged(room_id):
    room_info = get_room_info(room_id)
    if not room_info:
      print(f"Room not found. roomId={room_id}")
      return

    room_title = str(room_info.get("title") or f"Room {room_id}")
    tags = normalize_tags(room_info)

    if TAG_MARKER not in tags:
      print(f'Skipping: room "{room_title}" does not have tag "{TAG_MARKER}".')
      return

    snapshot_folder = create_snapshot_folder(room_title)
    if not snapshot_folder:
      print("Snapshot folder could not be created.")
      return

    files = list_top_level_room_files(room_id)
    if not files:
      print(f'No top-level files found in room "{room_title}".')
      return

    copied = 0

    for f in files:
      file_id = f["id"]
      title = f["title"] or f"file_{file_id}"

      if copy_file_to_snapshot(file_id, snapshot_folder["folderId"], title):
        copied += 1

    print(
      f'Snapshot created for "{room_title}". '
      f'Copied: {copied}. Snapshot folder ID: {snapshot_folder["folderId"]}.'
    )

  # Step 5: Example event handler (placeholder)
  def handle_room_updated_event(event_payload):
    data = event_payload.get("data") or {}
    room_id = data.get("roomId")

    try:
      room_id = int(room_id)
    except Exception:
      print("Invalid roomId in event payload.")
      return

    create_room_snapshot_if_tagged(room_id)

  if __name__ == "__main__":
    handle_room_updated_event({
      "event": "room_updated",
      "data": {"roomId": 2025512},
    })
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Check whether the room is marked for snapshot

A GET request is sent to [/api/2.0/files/rooms/:roomId](/docspace/api-backend/usage-api/get-room-info) to load room details.
The script reads the tag list (for example, `tags` or `tagList`) and checks whether it contains `TAG_MARKER`. If the tag is missing, the room is skipped.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getRoomInfo(roomId: number) {
    const data = await requestJson('GET', `/api/2.0/files/rooms/${roomId}`);
    const node = getNode(data);
    return node && typeof node === 'object' ? node : null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_room_info(room_id):
    data = request_json("GET", f"/api/2.0/files/rooms/{room_id}")
    node = get_node(data) if isinstance(data, dict) else None
    return node if isinstance(node, dict) else None
  ```

  </TabItem>
</Tabs>

## Step 2: Create a snapshot folder

A POST request is sent to [/api/2.0/files/folder/:snapshotRoomId](/docspace/api-backend/usage-api/create-folder) to create a folder inside the Snapshot room.

The folder title is generated like this:
- `RoomTitle_YYYY-MM-DD_HH-MM-SS`

This makes it easy to find a specific snapshot later.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createSnapshotFolder(sourceRoomTitle: string) {
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const snapshotTitle = `${sourceRoomTitle}_${ts}`;

    const data = await requestJson(
      'POST',
      `/api/2.0/files/folder/${SNAPSHOT_ROOM_ID}`,
      { title: snapshotTitle }
    );

    const node = getNode(data);
    if (!node || typeof node !== 'object') return null;

    const folderId = node.id != null ? Number(node.id) : null;
    if (!Number.isFinite(folderId)) return null;

    return { folderId, snapshotTitle };
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_snapshot_folder(source_room_title):
    ts = datetime.now(timezone.utc).strftime("%Y-%m-%d_%H-%M-%S")
    snapshot_title = f"{source_room_title}_{ts}"

    data = request_json(
      "POST",
      f"/api/2.0/files/folder/{SNAPSHOT_ROOM_ID}",
      json_body={"title": snapshot_title},
    )
    node = get_node(data) if isinstance(data, dict) else None
    if not isinstance(node, dict):
      return None

    folder_id = node.get("id")
    if folder_id is None:
      return None

    return {"folderId": int(folder_id), "snapshotTitle": snapshot_title}
  ```

  </TabItem>
</Tabs>

## Step 3: List top-level files in the source room

Then the script sends a GET request to [/api/2.0/files/rooms/:id](/docspace/api-backend/usage-api/get-room-info) to load the room contents.
It collects only top-level files:

`file ID` — used to copy the file via API
`title` — used as the destination file name

Subfolders are skipped in this example.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function listTopLevelRoomFiles(roomId: number) {
    const data = await requestJson('GET', `/api/2.0/files/rooms/${roomId}`);
    const node = getNode(data);

    const items =
      Array.isArray(node) ? node :
      node && typeof node === 'object' && Array.isArray(node.files) ? node.files :
      [];

    const files: { id: number; title: string }[] = [];

    for (const it of items) {
      if (!it || typeof it !== 'object') continue;

      const isFolder =
        it.isFolder === true ||
        it.folder === true ||
        String(it.type || '').toLowerCase() === 'folder';

      if (isFolder) continue;

      const id = Number(it.id);
      if (!Number.isFinite(id)) continue;

      files.push({
        id,
        title: String(it.title || ''),
      });
    }

    return files;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def list_top_level_room_files(room_id):
    data = request_json("GET", f"/api/2.0/files/rooms/{room_id}")
    node = get_node(data) if isinstance(data, dict) else None

    items = []
    if isinstance(node, list):
      items = node
    elif isinstance(node, dict):
      files = node.get("files") or []
      items = files if isinstance(files, list) else []

    files_out = []

    for it in items:
      if not isinstance(it, dict):
        continue

      is_folder = (
        it.get("isFolder") is True
        or it.get("folder") is True
        or str(it.get("type") or "").lower() == "folder"
      )
      if is_folder:
        continue

      file_id = it.get("id")
      if file_id is None:
        continue

      files_out.append({
        "id": int(file_id),
        "title": str(it.get("title") or ""),
      })

    return files_out
  ```

  </TabItem>
</Tabs>

## Step 4: Copy files to the snapshot folder

Then it sends a POST request to [/api/2.0/files/file/:fileId/copyas](/docspace/api-backend/usage-api/copy-file-as) for each file.
Each copied file is placed into the snapshot folder created in Step 2.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function copyFileToSnapshot(fileId: number, destFolderId: number, destTitle: string) {
    const payload = {
      destTitle,
      destFolderId,
    };

    const data = await requestJson('POST', `/api/2.0/files/file/${fileId}/copyas`, payload);
    return Boolean(data);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def copy_file_to_snapshot(file_id, dest_folder_id, dest_title):
    payload = {
      "destTitle": dest_title,
      "destFolderId": dest_folder_id,
    }

    data = request_json(
      "POST",
      f"/api/2.0/files/file/{file_id}/copyas",
      json_body=payload,
    )
    return data is not None
  ```

  </TabItem>
</Tabs>