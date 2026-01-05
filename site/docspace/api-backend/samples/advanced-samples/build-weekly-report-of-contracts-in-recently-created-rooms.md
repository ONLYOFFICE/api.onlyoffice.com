import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Build a weekly report of contracts in recently created rooms

This example demonstrates how to generate a weekly contracts report for rooms created recently in ONLYOFFICE DocSpace. The script loads rooms, filters them by creation date, scans files inside each room, detects a contract file by keywords, and marks it as SIGNED or NOT SIGNED based on the file name (placeholder logic).


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

  // How many days back to scan rooms
  const DAYS = 7;

  // Keywords to detect a contract file
  const CONTRACT_KEYWORDS = ['contract', 'agreement'];

  // Keywords to detect a signed contract (by file name)
  const SIGNED_KEYWORDS = ['signed', 'signed_'];

  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  async function requestJson(path: string, method: string = 'GET', body: any = null) {
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

      return res.json();
    } catch (err: any) {
      console.log(`Request error: ${err?.message || err}`);
      return null;
    }
  }

  function toUtcIso(d: Date) {
    return d.toISOString();
  }

  function parseRoomCreated(room: any) {
    const created = room?.created;

    let raw: string | null = null;

    if (created && typeof created === 'object') {
      raw = created.on || created.date || created.utc || created.time || null;
    } else if (typeof created === 'string') {
      raw = created;
    }

    if (!raw) return null;

    const normalized = raw.includes('Z') ? raw.replace('Z', '+00:00') : raw;
    const dt = new Date(normalized);

    if (Number.isNaN(dt.getTime())) return null;
    return dt;
  }

  // Step 1: Load rooms created during the selected period
  async function getRooms() {
    const data = await requestJson('/api/2.0/files/rooms?count=100&startIndex=0', 'GET');
    if (!data || typeof data !== 'object') return [];

    const resp = data.response != null ? data.response : data;
    if (!resp || typeof resp !== 'object') return [];

    const rooms = (resp as any).folders;
    return Array.isArray(rooms) ? rooms : [];
  }

  // Step 2: Scan files inside each room and find a contract
  async function getRoomFiles(roomId: number) {
    const data = await requestJson(`/api/2.0/files/${roomId}`, 'GET');
    if (!data || typeof data !== 'object') return [];

    const resp = data.response != null ? data.response : data;
    if (!resp || typeof resp !== 'object') return [];

    const files = (resp as any).files;
    if (!Array.isArray(files)) return [];

    return files
      .map((it: any) => {
        const idNum = Number(it?.id ?? it?.fileId);
        const title = String(it?.title || '');
        if (!Number.isFinite(idNum) || !title) return null;
        return { id: idNum, title };
      })
      .filter(Boolean);
  }

  function includesAny(text: string, keywords: string[]) {
    const t = text.toLowerCase();
    for (const kw of keywords) {
      if (t.includes(String(kw).toLowerCase())) return true;
    }
    return false;
  }

  function isSignedByTitle(title: string) {
    return includesAny(title, SIGNED_KEYWORDS);
  }

  // Step 3: Detect whether the contract is signed and print the report
  async function buildWeeklyContractsReport() {
    const now = new Date();
    const from = new Date(now.getTime() - DAYS * 24 * 60 * 60 * 1000);

    console.log(`Checking rooms from ${toUtcIso(from)} to ${toUtcIso(now)}...`);

    const rooms = await getRooms();
    if (!rooms.length) {
      console.log('No rooms returned by API.');
      return;
    }

    const results: any[] = [];

    for (const room of rooms) {
      if (!room || typeof room !== 'object') continue;

      const createdDt = parseRoomCreated(room);

      // If created date can't be parsed, skip to keep the report predictable.
      if (!createdDt) continue;
      if (createdDt < from || createdDt > now) continue;

      const roomId = Number(room.id ?? room.roomId);
      if (!Number.isFinite(roomId)) continue;

      const roomTitle = String(room.title || room.name || `Room ${roomId}`);

      const files = await getRoomFiles(roomId);
      if (!files.length) continue;

      const contract = files.find((f: any) => includesAny(f.title, CONTRACT_KEYWORDS));
      if (!contract) continue;

      results.push({
        roomId,
        roomTitle,
        created: createdDt.toISOString(),
        contractFileId: contract.id,
        contractFileTitle: contract.title,
        signed: isSignedByTitle(contract.title),
      });
    }

    console.log('--- Weekly Clients Contracts Report ---');

    if (!results.length) {
      console.log('No contract files found in rooms created during this period.');
      return;
    }

    for (const r of results) {
      const status = r.signed ? 'SIGNED' : 'NOT SIGNED';
      console.log(
        `Room: ${r.roomTitle} (ID: ${r.roomId})\n` +
        `  Created: ${r.created}\n` +
        `  Contract: ${r.contractFileTitle} (File ID: ${r.contractFileId})\n` +
        `  Status: ${status}\n`
      );
    }
  }

  (async () => {
    try {
      await buildWeeklyContractsReport();
    } catch (err: any) {
      console.error(err?.message || err);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  from datetime import datetime, timedelta, timezone
  from typing import Optional, Dict, Any, List

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  DAYS = 7

  CONTRACT_KEYWORDS = ["contract", "agreement"]
  SIGNED_KEYWORDS = ["signed", "signed_"]

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  def docspace_request(path: str, method: str = "GET", json_body: Optional[dict] = None) -> Optional[dict]:
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
      return None

  def parse_room_created(room: dict) -> Optional[datetime]:
    created = room.get("created")

    raw = None
    if isinstance(created, dict):
      raw = created.get("on") or created.get("date") or created.get("utc") or created.get("time")
    elif isinstance(created, str):
      raw = created

    if not raw or not isinstance(raw, str):
      return None

    try:
      s = raw.replace("Z", "+00:00")
      dt = datetime.fromisoformat(s)
      if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
      return dt.astimezone(timezone.utc)
    except Exception:
      return None

  def includes_any(text: str, keywords: List[str]) -> bool:
    t = text.lower()
    for kw in keywords:
      if str(kw).lower() in t:
        return True
    return False

  def is_signed_by_title(title: str) -> bool:
    return includes_any(title, SIGNED_KEYWORDS)

  # Step 1: Load rooms created during the selected period
  def get_rooms() -> List[dict]:
    data = docspace_request("/api/2.0/files/rooms?count=100&startIndex=0", "GET")
    if not isinstance(data, dict):
      return []

    resp = data.get("response", data)
    if not isinstance(resp, dict):
      return []

    rooms = resp.get("folders") or []
    return rooms if isinstance(rooms, list) else []

  # Step 2: Scan files inside each room and find a contract
  def get_room_files(room_id: int) -> List[dict]:
    data = docspace_request(f"/api/2.0/files/{room_id}", "GET")
    if not isinstance(data, dict):
      return []

    resp = data.get("response", data)
    if not isinstance(resp, dict):
      return []

    files_raw = resp.get("files") or []
    if not isinstance(files_raw, list):
      return []

    out = []
    for it in files_raw:
      raw_id = it.get("id") or it.get("fileId")
      title = str(it.get("title") or "")
      if not raw_id or not title:
        continue
      try:
        out.append({"id": int(raw_id), "title": title})
      except Exception:
        continue

    return out

  # Step 3: Detect whether the contract is signed and print the report
  def weekly_clients_contracts_report() -> None:
    now = datetime.now(timezone.utc)
    dt_from = now - timedelta(days=DAYS)

    print(f"Checking rooms from {dt_from.isoformat()} to {now.isoformat()}...")

    rooms = get_rooms()
    if not rooms:
      print("No rooms returned by API.")
      return

    results: List[Dict[str, Any]] = []

    for room in rooms:
      created_dt = parse_room_created(room)

      # If created date can't be parsed, skip to keep the report predictable.
      if created_dt is None:
        continue

      if not (dt_from <= created_dt <= now):
        continue

      room_id_raw = room.get("id") or room.get("roomId")
      try:
        room_id = int(room_id_raw)
      except Exception:
        continue

      room_title = str(room.get("title") or room.get("name") or f"Room {room_id}")

      files = get_room_files(room_id)
      if not files:
        continue

      contract = None
      for f in files:
        if includes_any(f["title"], CONTRACT_KEYWORDS):
          contract = f
          break

      if not contract:
        continue

      results.append({
        "room_id": room_id,
        "room_title": room_title,
        "created": created_dt.isoformat(),
        "contract_file_id": contract["id"],
        "contract_file_title": contract["title"],
        "signed": is_signed_by_title(contract["title"]),
      })

    print("--- Weekly Clients Contracts Report ---")

    if not results:
      print("No contract files found in rooms created during this period.")
      return

    for r in results:
      status = "SIGNED" if r["signed"] else "NOT SIGNED"
      print(
        f"Room: {r['room_title']} (ID: {r['room_id']})\n"
        f"  Created: {r['created']}\n"
        f"  Contract: {r['contract_file_title']} (File ID: {r['contract_file_id']})\n"
        f"  Status: {status}\n"
      )

  if __name__ == "__main__":
    weekly_clients_contracts_report()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Load rooms created during the selected period

First, the script sends a GET request to [/api/2.0/files/rooms](/docspace/api-backend/usage-api/get-room-info) and reads the room list from `response.folders`.
Then it parses the creation timestamp for each room (for example, `created.on` or a similar field returned by the API) and keeps only rooms created within the last `DAYS` days. Rooms with an unrecognized creation date are skipped to keep the report predictable.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getRooms() {
    const data = await requestJson('/api/2.0/files/rooms?count=100&startIndex=0', 'GET');
    if (!data || typeof data !== 'object') return [];

    const resp = data.response != null ? data.response : data;
    if (!resp || typeof resp !== 'object') return [];

    const rooms = (resp as any).folders;
    return Array.isArray(rooms) ? rooms : [];
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_rooms() -> List[dict]:
    data = docspace_request("/api/2.0/files/rooms?count=100&startIndex=0", "GET")
    if not isinstance(data, dict):
      return []

    resp = data.get("response", data)
    if not isinstance(resp, dict):
      return []

    rooms = resp.get("folders") or []
    return rooms if isinstance(rooms, list) else []
  ```

  </TabItem>
</Tabs>

## Step 2: Scan files inside each room and find a contract

For every room in the filtered list, the script sends a GET request to [/api/2.0/files/:folderId](/docspace/api-backend/usage-api/get-folder-by-folder-id) (where `folderId` is the room root ID in this example) and reads the file list from response.files.
A file is treated as a contract if its title contains any value from `CONTRACT_KEYWORDS` (for example: `contract`, `agreement`). The keyword matching is case-insensitive.


A POST request is sent to to create a folder inside the Snapshot room.

The folder title is generated like this:
- `RoomTitle_YYYY-MM-DD_HH-MM-SS`

This makes it easy to find a specific snapshot later.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getRoomFiles(roomId: number) {
    const data = await requestJson(`/api/2.0/files/${roomId}`, 'GET');
    if (!data || typeof data !== 'object') return [];

    const resp = data.response != null ? data.response : data;
    if (!resp || typeof resp !== 'object') return [];

    const files = (resp as any).files;
    if (!Array.isArray(files)) return [];

    return files
      .map((it: any) => {
        const idNum = Number(it?.id ?? it?.fileId);
        const title = String(it?.title || '');
        if (!Number.isFinite(idNum) || !title) return null;
        return { id: idNum, title };
      })
      .filter(Boolean);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_room_files(room_id: int) -> List[dict]:
    data = docspace_request(f"/api/2.0/files/{room_id}", "GET")
    if not isinstance(data, dict):
      return []

    resp = data.get("response", data)
    if not isinstance(resp, dict):
      return []

    files_raw = resp.get("files") or []
    if not isinstance(files_raw, list):
      return []

    out = []
    for it in files_raw:
      raw_id = it.get("id") or it.get("fileId")
      title = str(it.get("title") or "")
      if not raw_id or not title:
        continue
      try:
        out.append({"id": int(raw_id), "title": title})
      except Exception:
        continue

    return out
  ```

  </TabItem>
</Tabs>

## Step 3: Detect whether the contract is signed and print the report

When a contract file is found, the script checks its title for SIGNED_KEYWORDS and marks the contract as:
- `SIGNED` — if the file name contains any signed keyword (for example: signed, signed_);
- `NOT SIGNED` — if no signed keyword is found.
This is a placeholder rule based purely on file naming. In a real workflow, you can replace it with stronger logic (for example, checking a status field, metadata, approval workflow, or a dedicated “Signed” folder).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function buildWeeklyContractsReport() {
    const now = new Date();
    const from = new Date(now.getTime() - DAYS * 24 * 60 * 60 * 1000);

    console.log(`Checking rooms from ${toUtcIso(from)} to ${toUtcIso(now)}...`);

    const rooms = await getRooms();
    if (!rooms.length) {
      console.log('No rooms returned by API.');
      return;
    }

    const results: any[] = [];

    for (const room of rooms) {
      if (!room || typeof room !== 'object') continue;

      const createdDt = parseRoomCreated(room);

      // If created date can't be parsed, skip to keep the report predictable.
      if (!createdDt) continue;
      if (createdDt < from || createdDt > now) continue;

      const roomId = Number(room.id ?? room.roomId);
      if (!Number.isFinite(roomId)) continue;

      const roomTitle = String(room.title || room.name || `Room ${roomId}`);

      const files = await getRoomFiles(roomId);
      if (!files.length) continue;

      const contract = files.find((f: any) => includesAny(f.title, CONTRACT_KEYWORDS));
      if (!contract) continue;

      results.push({
        roomId,
        roomTitle,
        created: createdDt.toISOString(),
        contractFileId: contract.id,
        contractFileTitle: contract.title,
        signed: isSignedByTitle(contract.title),
      });
    }

    console.log('--- Weekly Clients Contracts Report ---');

    if (!results.length) {
      console.log('No contract files found in rooms created during this period.');
      return;
    }

    for (const r of results) {
      const status = r.signed ? 'SIGNED' : 'NOT SIGNED';
      console.log(
        `Room: ${r.roomTitle} (ID: ${r.roomId})\n` +
        `  Created: ${r.created}\n` +
        `  Contract: ${r.contractFileTitle} (File ID: ${r.contractFileId})\n` +
        `  Status: ${status}\n`
      );
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def weekly_clients_contracts_report() -> None:
    now = datetime.now(timezone.utc)
    dt_from = now - timedelta(days=DAYS)

    print(f"Checking rooms from {dt_from.isoformat()} to {now.isoformat()}...")

    rooms = get_rooms()
    if not rooms:
      print("No rooms returned by API.")
      return

    results: List[Dict[str, Any]] = []

    for room in rooms:
      created_dt = parse_room_created(room)

      # If created date can't be parsed, skip to keep the report predictable.
      if created_dt is None:
        continue

      if not (dt_from <= created_dt <= now):
        continue

      room_id_raw = room.get("id") or room.get("roomId")
      try:
        room_id = int(room_id_raw)
      except Exception:
        continue

      room_title = str(room.get("title") or room.get("name") or f"Room {room_id}")

      files = get_room_files(room_id)
      if not files:
        continue

      contract = None
      for f in files:
        if includes_any(f["title"], CONTRACT_KEYWORDS):
          contract = f
          break

      if not contract:
        continue

      results.append({
        "room_id": room_id,
        "room_title": room_title,
        "created": created_dt.isoformat(),
        "contract_file_id": contract["id"],
        "contract_file_title": contract["title"],
        "signed": is_signed_by_title(contract["title"]),
      })

    print("--- Weekly Clients Contracts Report ---")

    if not results:
      print("No contract files found in rooms created during this period.")
      return

    for r in results:
      status = "SIGNED" if r["signed"] else "NOT SIGNED"
      print(
        f"Room: {r['room_title']} (ID: {r['room_id']})\n"
        f"  Created: {r['created']}\n"
        f"  Contract: {r['contract_file_title']} (File ID: {r['contract_file_id']})\n"
        f"  Status: {status}\n"
      )
  ```

  </TabItem>
</Tabs>