import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find abandoned rooms by inactivity period

This example demonstrates how to find rooms that have not been updated for a certain number of days in ONLYOFFICE DocSpace. The script retrieves the room list, skips archived rooms, checks the last update date, and prints a simple report of rooms that look abandoned.

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

  const INACTIVITY_DAYS = 10;

  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  async function docspaceRequest(path, method = 'GET', body = null) {
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
    } catch (err) {
      console.log(`Request error: ${err.message || err}`);
      return null;
    }
  }

  // Step 1: Load rooms list
  async function getAllRooms() {
    const data = await docspaceRequest('/api/2.0/files/rooms', 'GET');
    if (!data) return [];

    const raw = (data && data.response != null) ? data.response : data;

    if (Array.isArray(raw)) return raw;

    if (raw && typeof raw === 'object') {
      if (Array.isArray(raw.rooms)) return raw.rooms;
      if (Array.isArray(raw.folders)) return raw.folders;
      if (Array.isArray(raw.items)) return raw.items;
    }

    return [];
  }

  // Helper: check if room is archived
  function isArchivedRoom(room) {
    const status = room.roomStatus || room.status;

    if (room.isArchived === true) return true;
    if (typeof status === 'string' && status.toLowerCase() === 'archived') return true;

    return false;
  }

  // Helper: parse last updated date
  function parseRoomLastUpdated(room) {
    const candidates = [
      room.updated,
      room.modified,
      room.modifiedOn,
      room.lastModified,
      room.lastUpdate,
      room.updatedOn,
      room.created,
      room.createdOn,
      room.createOn,
    ];

    for (const v of candidates) {
      if (!v) continue;

      const s = String(v);
      const iso = s.endsWith('Z') ? s : s;
      const d = new Date(iso);

      if (!Number.isNaN(d.getTime())) return d;
    }

    return null;
  }

  // Helper: inactivity calculation
  function getInactivityInfo(room, now) {
    const lastUpdated = parseRoomLastUpdated(room);

    if (!lastUpdated) {
      return { inactive: true, daysInactive: INACTIVITY_DAYS + 1, lastUpdated: null };
    }

    const diffMs = now.getTime() - lastUpdated.getTime();
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    return { inactive: days >= INACTIVITY_DAYS, daysInactive: days, lastUpdated };
  }

  // Step 2: Find abandoned rooms
  async function findAbandonedRooms() {
    const now = new Date();
    const rooms = await getAllRooms();

    if (!rooms.length) {
      console.log('No rooms found.');
      return;
    }

    const abandoned = [];

    for (const room of rooms) {
      if (!(room.roomType || room.inRoom)) continue;
      if (isArchivedRoom(room)) continue;

      const info = getInactivityInfo(room, now);
      if (!info.inactive) continue;

      if (room.id == null) continue;

      abandoned.push({
        id: Number(room.id),
        title: String(room.title || 'Room'),
        daysInactive: info.daysInactive,
        lastUpdated: info.lastUpdated ? info.lastUpdated.toISOString() : null,
      });
    }

    console.log('--- Abandoned rooms report ---');

    if (!abandoned.length) {
      console.log(`No rooms found with inactivity >= ${INACTIVITY_DAYS} days.`);
      return;
    }

    abandoned.sort((a, b) => b.daysInactive - a.daysInactive);

    for (const r of abandoned) {
      let line = `• Room "${r.title}" (ID: ${r.id}) — inactive for ${r.daysInactive} day(s)`;
      if (r.lastUpdated) line += `, last updated: ${r.lastUpdated}`;
      console.log(line);
    }

    console.log(`Total abandoned rooms: ${abandoned.length}`);
  }

  (async () => {
    try {
      await findAbandonedRooms();
    } catch (err) {
      console.error(err.message || err);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  from datetime import datetime, timezone

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  INACTIVITY_DAYS = 10

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  def docspace_request(path, method="GET", json_body=None):
    url = f"{API_HOST}{path}"

    try:
      response = requests.request(
        method.upper(),
        url,
        headers=HEADERS,
        json=json_body
      )

      if response.status_code != 200:
        print(f"Request failed. Status: {response.status_code}, Message: {response.text}")
        return None

      return response.json()

    except Exception as e:
      print(f"Request error: {e}")
      return None

  # Step 1: Load rooms list
  def get_all_rooms():
    data = docspace_request("/api/2.0/files/rooms", method="GET")
    if not data:
      return []

    raw = data.get("response", data)

    if isinstance(raw, list):
      return raw

    if isinstance(raw, dict):
      if isinstance(raw.get("rooms"), list):
        return raw["rooms"]
      if isinstance(raw.get("folders"), list):
        return raw["folders"]
      if isinstance(raw.get("items"), list):
        return raw["items"]

    return []

  # Helper: check if room is archived
  def is_archived_room(room):
    status = room.get("roomStatus") or room.get("status")

    if room.get("isArchived") is True:
      return True

    if isinstance(status, str) and status.lower() == "archived":
      return True

    return False

  # Helper: parse last updated date
  def parse_room_last_updated(room):
    candidates = [
      room.get("updated"),
      room.get("modified"),
      room.get("modifiedOn"),
      room.get("lastModified"),
      room.get("lastUpdate"),
      room.get("updatedOn"),
      room.get("created"),
      room.get("createdOn"),
      room.get("createOn"),
    ]

    for value in candidates:
      if not isinstance(value, str):
        continue

      try:
        s = value
        if s.endswith("Z"):
          dt = datetime.fromisoformat(s.replace("Z", "+00:00"))
        else:
          dt = datetime.fromisoformat(s)

        if dt.tzinfo is None:
          dt = dt.replace(tzinfo=timezone.utc)

        return dt
      except Exception:
        continue

    return None

  # Helper: inactivity calculation
  def get_inactivity_info(room, now):
    last_updated = parse_room_last_updated(room)

    if last_updated is None:
      return {
        "inactive": True,
        "days_inactive": INACTIVITY_DAYS + 1,
        "last_updated": None,
      }

    diff = now - last_updated
    days = diff.days

    return {
      "inactive": days >= INACTIVITY_DAYS,
      "days_inactive": days,
      "last_updated": last_updated,
    }

  # Step 2: Find abandoned rooms
  def find_abandoned_rooms():
    now = datetime.now(timezone.utc)
    rooms = get_all_rooms()

    if not rooms:
      print("No rooms found.")
      return

    abandoned = []

    for room in rooms:
      if not (room.get("roomType") or room.get("inRoom")):
        continue

      if is_archived_room(room):
        continue

      info = get_inactivity_info(room, now)
      if not info["inactive"]:
        continue

      room_id = room.get("id")
      if room_id is None:
        continue

      last_updated = info["last_updated"]
      abandoned.append({
        "id": int(room_id),
        "title": str(room.get("title") or "Room"),
        "days_inactive": int(info["days_inactive"]),
        "last_updated": last_updated.isoformat() if last_updated else None,
      })

    print("--- Abandoned rooms report ---")

    if not abandoned:
      print(f"No rooms found with inactivity >= {INACTIVITY_DAYS} days.")
      return

    abandoned.sort(key=lambda r: r["days_inactive"], reverse=True)

    for r in abandoned:
      line = (
        f'• Room "{r["title"]}" (ID: {r["id"]}) — '
        f'inactive for {r["days_inactive"]} day(s)'
      )
      if r["last_updated"]:
        line += f', last updated: {r["last_updated"]}'
      print(line)

    print(f"Total abandoned rooms: {len(abandoned)}")

  if __name__ == "__main__":
    find_abandoned_rooms()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve rooms

A GET request is sent to [/api/2.0/files/rooms](/docspace/api-backend/usage-api/get-rooms-folder) to retrieve the room list.
The response can contain the list in different places (for example, directly in `response`, or inside `folders`, `items`), so the script reads the most common formats.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getAllRooms() {
    const data = await docspaceRequest('/api/2.0/files/rooms', 'GET');
    if (!data) return [];

    const raw = (data && data.response != null) ? data.response : data;

    if (Array.isArray(raw)) return raw;

    if (raw && typeof raw === 'object') {
      if (Array.isArray(raw.rooms)) return raw.rooms;
      if (Array.isArray(raw.folders)) return raw.folders;
      if (Array.isArray(raw.items)) return raw.items;
    }

    return [];
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_all_rooms():
    data = docspace_request("/api/2.0/files/rooms", method="GET")
    if not data:
      return []

    raw = data.get("response", data)

    if isinstance(raw, list):
      return raw

    if isinstance(raw, dict):
      if isinstance(raw.get("rooms"), list):
        return raw["rooms"]
      if isinstance(raw.get("folders"), list):
        return raw["folders"]
      if isinstance(raw.get("items"), list):
        return raw["items"]

    return []
  ```

  </TabItem>
</Tabs>

## Step 2: Find abandoned rooms by inactivity

The script goes through the rooms list and builds a report of rooms that look abandoned.

For each room it:

- Skips archived rooms (for example, `isArchived` or status values like "archived").
- Tries to detect the last update date (for example, `updated`, `modifiedOn`, `updatedOn`, etc.).
- Marks the room as inactive when there were no updates for `INACTIVITY_DAYS` days (or when the date is missing).
- Prints a sorted list with room title, room ID, inactive days, and last updated timestamp (if available).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function findAbandonedRooms() {
    const now = new Date();
    const rooms = await getAllRooms();

    if (!rooms.length) {
      console.log('No rooms found.');
      return;
    }

    const abandoned = [];

    for (const room of rooms) {
      if (!(room.roomType || room.inRoom)) continue;
      if (isArchivedRoom(room)) continue;

      const info = getInactivityInfo(room, now);
      if (!info.inactive) continue;

      if (room.id == null) continue;

      abandoned.push({
        id: Number(room.id),
        title: String(room.title || 'Room'),
        daysInactive: info.daysInactive,
        lastUpdated: info.lastUpdated ? info.lastUpdated.toISOString() : null,
      });
    }

    console.log('--- Abandoned rooms report ---');

    if (!abandoned.length) {
      console.log(`No rooms found with inactivity >= ${INACTIVITY_DAYS} days.`);
      return;
    }

    abandoned.sort((a, b) => b.daysInactive - a.daysInactive);

    for (const r of abandoned) {
      let line = `• Room "${r.title}" (ID: ${r.id}) — inactive for ${r.daysInactive} day(s)`;
      if (r.lastUpdated) line += `, last updated: ${r.lastUpdated}`;
      console.log(line);
    }

    console.log(`Total abandoned rooms: ${abandoned.length}`);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def find_abandoned_rooms():
    now = datetime.now(timezone.utc)
    rooms = get_all_rooms()

    if not rooms:
      print("No rooms found.")
      return

    abandoned = []

    for room in rooms:
      if not (room.get("roomType") or room.get("inRoom")):
        continue

      if is_archived_room(room):
        continue

      info = get_inactivity_info(room, now)
      if not info["inactive"]:
        continue

      room_id = room.get("id")
      if room_id is None:
        continue

      last_updated = info["last_updated"]
      abandoned.append({
        "id": int(room_id),
        "title": str(room.get("title") or "Room"),
        "days_inactive": int(info["days_inactive"]),
        "last_updated": last_updated.isoformat() if last_updated else None,
      })

    print("--- Abandoned rooms report ---")

    if not abandoned:
      print(f"No rooms found with inactivity >= {INACTIVITY_DAYS} days.")
      return

    abandoned.sort(key=lambda r: r["days_inactive"], reverse=True)

    for r in abandoned:
      line = (
        f'• Room "{r["title"]}" (ID: {r["id"]}) — '
        f'inactive for {r["days_inactive"]} day(s)'
      )
      if r["last_updated"]:
        line += f', last updated: {r["last_updated"]}'
      print(line)

    print(f"Total abandoned rooms: {len(abandoned)}")
  ```

  </TabItem>
</Tabs>