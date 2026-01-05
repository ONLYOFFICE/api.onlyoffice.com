import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Archive all client files when a CRM deal is closed

This example shows how to automatically archive all documents for a client when their CRM deal is marked as **Closed**.

When your CRM sets the deal status to **Closed**, it calls your backend (webhook handler) with:

- `CLIENT_ROOM_ID` — the client room ID in DocSpace (it is also a folder ID in the Files API),
- `ARCHIVE_ROOT_FOLDER_ID` — the ID of the `/Archive` folder (parent for `/Archive/<ClientName>`),
- `CLIENT_NAME` — client name to use as the archive folder title,
- optional `GUEST_USER_ID` — a DocSpace guest user ID to delete (to revoke access).

The script then:

- collects all files inside the client room (including subfolders),
- creates (or reuses) `/Archive/<ClientName>` under `/Archive`,
- moves all collected files into `/Archive/<ClientName>`,
- optionally deletes the guest user.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Config
  const API_HOST = "https://yourportal.onlyoffice.com";
  const API_KEY = "YOUR_API_KEY";

  const HEADERS: Record<string, string> = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  // Basic DocSpace request helper
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
        console.log(`DocSpace request failed: ${method} ${url}`);
        console.log(`Status: ${res.status}, Message: ${text}`);
        return null;
      }

      return res.json();
    } catch (err: any) {
      console.log(`DocSpace request error: ${err?.message || err}`);
      return null;
    }
  }

  // Step 1: Collect all file IDs in a room (recursive)
  async function listFolderContents(folderId: number) {
    const data = await docspaceRequest(`/api/2.0/files/${folderId}`, "GET");
    const resp = data && typeof data === "object" ? (data.response ?? null) : null;

    if (!resp) return { files: [], folders: [] };

    // Common response format: { files: [...], folders: [...] }
    if (resp && typeof resp === "object" && !Array.isArray(resp)) {
      const files = Array.isArray((resp as any).files) ? (resp as any).files : [];
      const folders = Array.isArray((resp as any).folders) ? (resp as any).folders : [];
      return { files, folders };
    }

    // Fallback: sometimes it can be a flat array of items
    if (Array.isArray(resp)) {
      const files = resp.filter((it: any) => it && typeof it === "object" && !(it.isFolder || it.folder));
      const folders = resp.filter((it: any) => it && typeof it === "object" && (it.isFolder || it.folder));
      return { files, folders };
    }

    return { files: [], folders: [] };
  }

  async function collectAllFileIds(startFolderId: number) {
    const result: number[] = [];

    async function walk(folderId: number) {
      const { files, folders } = await listFolderContents(folderId);

      for (const f of files) {
        const id = Number((f as any).id);
        if (Number.isFinite(id)) result.push(id);
      }

      for (const sub of folders) {
        const id = Number((sub as any).id);
        if (!Number.isFinite(id)) continue;
        await walk(id);
      }
    }

    await walk(startFolderId);
    return result;
  }

  // Step 2: Ensure /Archive/ClientName exists (reuse if already created)
  async function findChildFolderByTitle(parentFolderId: number, title: string) {
    const { folders } = await listFolderContents(parentFolderId);
    const target = String(title || "").trim();

    for (const f of folders) {
      const t = String((f as any).title || "");
      if (t === target) {
        const id = Number((f as any).id);
        return Number.isFinite(id) ? id : null;
      }
    }

    return null;
  }

  async function createFolder(parentFolderId: number, title: string) {
    const payload = { title };
    const data = await docspaceRequest(`/api/2.0/files/folder/${parentFolderId}`, "POST", payload);
    const node = data && typeof data === "object" ? (data.response ?? data) : null;
    const idRaw = node?.id ?? node?.folderId ?? null;
    const id = Number(idRaw);
    return Number.isFinite(id) ? id : null;
  }

  async function ensureArchiveFolder(archiveRootFolderId: number, clientName: string) {
    const existing = await findChildFolderByTitle(archiveRootFolderId, clientName);
    if (existing != null) return existing;

    const created = await createFolder(archiveRootFolderId, clientName);
    return created;
  }

  // Step 3: Move files in chunks into /Archive/ClientName
  async function moveFilesChunk(fileIds: number[], destFolderId: number) {
    const payload = {
      fileIds,
      destFolderId,
      deleteAfter: true,
      content: true,
      toFillOut: false,
    };

    const data = await docspaceRequest("/api/2.0/files/fileops/move", "PUT", payload);
    return Boolean(data);
  }

  function chunkArray<T>(arr: T[], chunkSize: number) {
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) out.push(arr.slice(i, i + chunkSize));
    return out;
  }

  async function moveAllFilesToArchive(fileIds: number[], archiveFolderId: number) {
    // Keep chunks small to avoid request size limits.
    const chunks = chunkArray(fileIds, 100);

    for (const c of chunks) {
      const ok = await moveFilesChunk(c, archiveFolderId);
      if (!ok) {
        console.log(`Failed to move a chunk of ${c.length} file(s).`);
        return false;
      }
      // Optional: small delay to be gentle on rate limits
      await sleep(200);
    }

    return true;
  }

  // Step 4 (optional): Delete guest user to revoke access
  async function deleteGuestUser(guestUserId: number) {
    const payload = {
      userIds: [guestUserId],
      resendAll: false,
    };

    // Some setups accept DELETE with JSON body.
    const data = await docspaceRequest("/api/2.0/people/guests", "DELETE", payload);
    return Boolean(data);
  }

  // Orchestrator called from CRM webhook handler
  export async function archiveClientRoomOnDealClosed(args: {
    clientRoomId: number;
    archiveRootFolderId: number;
    clientName: string;
    guestUserId?: number | null;
  }) {
    const { clientRoomId, archiveRootFolderId, clientName, guestUserId } = args;

    console.log(`Deal closed. Archiving room ${clientRoomId} for client "${clientName}".`);

    // Step 1
    const fileIds = await collectAllFileIds(clientRoomId);
    console.log(`Found ${fileIds.length} file(s) in client room (including subfolders).`);

    if (!fileIds.length) {
      console.log("Nothing to move. Skipping archive move.");
    }

    // Step 2
    const archiveFolderId = await ensureArchiveFolder(archiveRootFolderId, clientName);
    if (archiveFolderId == null) {
      console.log("Failed to create or find the archive folder. Aborting.");
      return;
    }
    console.log(`Archive folder ready: /Archive/${clientName} (id=${archiveFolderId}).`);

    // Step 3
    if (fileIds.length) {
      const moved = await moveAllFilesToArchive(fileIds, archiveFolderId);
      if (!moved) {
        console.log("Move failed. Aborting before optional guest deletion.");
        return;
      }
      console.log("All client files were moved to the archive folder.");
    }

    // Step 4 (optional)
    if (guestUserId != null) {
      const ok = await deleteGuestUser(Number(guestUserId));
      if (ok) {
        console.log(`Guest user deleted: userId=${guestUserId}`);
      } else {
        console.log(`Failed to delete guest user: userId=${guestUserId}`);
      }
    }
  }

  // Example local run (replace values with your CRM payload)
  (async () => {
    await archiveClientRoomOnDealClosed({
      clientRoomId: 123456,
      archiveRootFolderId: 654321,
      clientName: "Contoso Ltd",
      guestUserId: 777777, // optional
    });
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  from typing import Any, Dict, List, Optional, Tuple
  import time
  import requests

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  # Basic DocSpace request helper
  def docspace_request(method: str, path: str, *, json_body: Optional[Dict[str, Any]] = None) -> Optional[Dict[str, Any]]:
    url = f"{API_HOST}{path}"

    try:
      resp = requests.request(method.upper(), url, headers=HEADERS, json=json_body)
    except Exception as e:
      print(f"DocSpace request error: {e}")
      return None

    if resp.status_code < 200 or resp.status_code >= 300:
      print(f"DocSpace request failed: {method} {url}")
      print(f"Status: {resp.status_code}, Message: {resp.text}")
      return None

    try:
      return resp.json()
    except Exception:
      print(f"Invalid JSON response from: {url}")
      return None

  # Step 1: Collect all file IDs in a room (recursive)
  def list_folder_contents(folder_id: int) -> Tuple[List[Dict[str, Any]], List[Dict[str, Any]]]:
    data = docspace_request("GET", f"/api/2.0/files/{folder_id}")
    if not isinstance(data, dict):
      return [], []

    resp = data.get("response")
    if resp is None:
      return [], []

    # Common response format: { "files": [...], "folders": [...] }
    if isinstance(resp, dict):
      files = resp.get("files", []) or []
      folders = resp.get("folders", []) or []
      return list(files), list(folders)

    # Fallback: sometimes it can be a flat array
    if isinstance(resp, list):
      files: List[Dict[str, Any]] = []
      folders: List[Dict[str, Any]] = []
      for it in resp:
        if not isinstance(it, dict):
          continue
        is_folder = it.get("isFolder") is True or it.get("folder") is True
        if is_folder:
          folders.append(it)
        else:
          files.append(it)
      return files, folders

    return [], []

  def collect_all_file_ids(start_folder_id: int) -> List[int]:
    result: List[int] = []

    def walk(folder_id: int) -> None:
      files, folders = list_folder_contents(folder_id)

      for f in files:
        raw = f.get("id")
        try:
          result.append(int(raw))
        except Exception:
          continue

      for sub in folders:
        raw = sub.get("id")
        try:
          sub_id = int(raw)
        except Exception:
          continue
        walk(sub_id)

    walk(start_folder_id)
    return result

  # Step 2: Ensure /Archive/ClientName exists (reuse if already created)
  def find_child_folder_by_title(parent_folder_id: int, title: str) -> Optional[int]:
    _files, folders = list_folder_contents(parent_folder_id)
    target = str(title or "").strip()

    for f in folders:
      t = str(f.get("title") or "")
      if t == target:
        try:
          return int(f.get("id"))
        except Exception:
          return None

    return None

  def create_folder(parent_folder_id: int, title: str) -> Optional[int]:
    data = docspace_request("POST", f"/api/2.0/files/folder/{parent_folder_id}", json_body={"title": title})
    if not isinstance(data, dict):
      return None

    node = data.get("response") or data
    raw = None
    if isinstance(node, dict):
      raw = node.get("id") or node.get("folderId")

    try:
      return int(raw) if raw is not None else None
    except Exception:
      return None

  def ensure_archive_folder(archive_root_folder_id: int, client_name: str) -> Optional[int]:
    existing = find_child_folder_by_title(archive_root_folder_id, client_name)
    if existing is not None:
      return existing
    return create_folder(archive_root_folder_id, client_name)

  # Step 3: Move files in chunks into /Archive/ClientName
  def move_files_chunk(file_ids: List[int], dest_folder_id: int) -> bool:
    payload = {
      "fileIds": file_ids,
      "destFolderId": dest_folder_id,
      "deleteAfter": True,
      "content": True,
      "toFillOut": False,
    }
    data = docspace_request("PUT", "/api/2.0/files/fileops/move", json_body=payload)
    return data is not None

  def chunk_list(items: List[int], chunk_size: int) -> List[List[int]]:
    out: List[List[int]] = []
    for i in range(0, len(items), chunk_size):
      out.append(items[i : i + chunk_size])
    return out

  def move_all_files_to_archive(file_ids: List[int], archive_folder_id: int) -> bool:
    chunks = chunk_list(file_ids, 100)

    for c in chunks:
      ok = move_files_chunk(c, archive_folder_id)
      if not ok:
        print(f"Failed to move a chunk of {len(c)} file(s).")
        return False
      time.sleep(0.2)

    return True

  # Step 4 (optional): Delete guest user to revoke access
  def delete_guest_user(guest_user_id: int) -> bool:
    payload = {"userIds": [guest_user_id], "resendAll": False}
    data = docspace_request("DELETE", "/api/2.0/people/guests", json_body=payload)
    return data is not None

  # Orchestrator called from CRM webhook handler
  def archive_client_room_on_deal_closed(
    *,
    client_room_id: int,
    archive_root_folder_id: int,
    client_name: str,
    guest_user_id: Optional[int] = None
  ) -> None:
    print(f'Deal closed. Archiving room {client_room_id} for client "{client_name}".')

    # Step 1
    file_ids = collect_all_file_ids(client_room_id)
    print(f"Found {len(file_ids)} file(s) in client room (including subfolders).")

    # Step 2
    archive_folder_id = ensure_archive_folder(archive_root_folder_id, client_name)
    if archive_folder_id is None:
      print("Failed to create or find the archive folder. Aborting.")
      return
    print(f'Archive folder ready: /Archive/{client_name} (id={archive_folder_id}).')

    # Step 3
    if file_ids:
      moved = move_all_files_to_archive(file_ids, archive_folder_id)
      if not moved:
        print("Move failed. Aborting before optional guest deletion.")
        return
      print("All client files were moved to the archive folder.")
    else:
      print("Nothing to move. Skipping archive move.")

    # Step 4 (optional)
    if guest_user_id is not None:
      ok = delete_guest_user(guest_user_id)
      if ok:
        print(f"Guest user deleted: userId={guest_user_id}")
      else:
        print(f"Failed to delete guest user: userId={guest_user_id}")

  if __name__ == "__main__":
    archive_client_room_on_deal_closed(
      client_room_id=123456,
      archive_root_folder_id=654321,
      client_name="Contoso Ltd",
      guest_user_id=777777,  # optional
    )
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Collect all client files from the room

Your CRM provides CLIENT_ROOM_ID. The script treats it as a folder ID and recursively walks through the room:

- It reads the room contents using GET [/api/2.0/files/{folderId}](/docspace/api-backend/usage-api/get-folder-by-folder-id).
- It repeats the same request for every subfolder.
- It builds a flat list of **file IDs** found across the entire room tree.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function listFolderContents(folderId: number) {
    const data = await docspaceRequest(`/api/2.0/files/${folderId}`, "GET");
    const resp = data && typeof data === "object" ? (data.response ?? null) : null;

    if (!resp) return { files: [], folders: [] };

    // Common response format: { files: [...], folders: [...] }
    if (resp && typeof resp === "object" && !Array.isArray(resp)) {
      const files = Array.isArray((resp as any).files) ? (resp as any).files : [];
      const folders = Array.isArray((resp as any).folders) ? (resp as any).folders : [];
      return { files, folders };
    }

    // Fallback: sometimes it can be a flat array of items
    if (Array.isArray(resp)) {
      const files = resp.filter((it: any) => it && typeof it === "object" && !(it.isFolder || it.folder));
      const folders = resp.filter((it: any) => it && typeof it === "object" && (it.isFolder || it.folder));
      return { files, folders };
    }

    return { files: [], folders: [] };
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def list_folder_contents(folder_id: int) -> Tuple[List[Dict[str, Any]], List[Dict[str, Any]]]:
    data = docspace_request("GET", f"/api/2.0/files/{folder_id}")
    if not isinstance(data, dict):
      return [], []

    resp = data.get("response")
    if resp is None:
      return [], []

    # Common response format: { "files": [...], "folders": [...] }
    if isinstance(resp, dict):
      files = resp.get("files", []) or []
      folders = resp.get("folders", []) or []
      return list(files), list(folders)

    # Fallback: sometimes it can be a flat array
    if isinstance(resp, list):
      files: List[Dict[str, Any]] = []
      folders: List[Dict[str, Any]] = []
      for it in resp:
        if not isinstance(it, dict):
          continue
        is_folder = it.get("isFolder") is True or it.get("folder") is True
        if is_folder:
          folders.append(it)
        else:
          files.append(it)
      return files, folders

    return [], []
  ```

  </TabItem>
</Tabs>

## Step 2: Ensure `/Archive/<ClientName>` exists

Under your archive root folder (for example, `/Archive` with ID `ARCHIVE_ROOT_FOLDER_ID`), the script:

- reads existing child folders using GET [/api/2.0/files/{archiveRootId}](/docspace/api-backend/usage-api/get-folder-by-folder-id),
- looks for a folder with `title == CLIENT_NAME`,
- if it does not exist, creates it using POST [/api/2.0/files/folder/{archiveRootId}](/docspace/api-backend/usage-api/create-folder) with body `{ "title": "<ClientName>" }`,
- returns the folder ID of `/Archive/<ClientName>`.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function findChildFolderByTitle(parentFolderId: number, title: string) {
    const { folders } = await listFolderContents(parentFolderId);
    const target = String(title || "").trim();

    for (const f of folders) {
      const t = String((f as any).title || "");
      if (t === target) {
        const id = Number((f as any).id);
        return Number.isFinite(id) ? id : null;
      }
    }

    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def find_child_folder_by_title(parent_folder_id: int, title: str) -> Optional[int]:
    _files, folders = list_folder_contents(parent_folder_id)
    target = str(title or "").strip()

    for f in folders:
      t = str(f.get("title") or "")
      if t == target:
        try:
          return int(f.get("id"))
        except Exception:
          return None

    return None
  ```

  </TabItem>
</Tabs>

## Step 3: With the collected file IDs and the archive folder ID, the script moves the files:

It sends one or more PUT [/api/2.0/files/fileops/move](/docspace/api-backend/usage-api/move-batch-items) requests (in chunks).

Each request uses body:
- `fileIds`: a chunk of file IDs,
- `destFolderId`: the ID of `/Archive/<ClientName>`,
- `deleteAfter`: true to remove files from the original room,
- `content: true`, `toFillOut: false`.

As a result, all documents from the client room are relocated into the archive folder.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function moveFilesChunk(fileIds: number[], destFolderId: number) {
    const payload = {
      fileIds,
      destFolderId,
      deleteAfter: true,
      content: true,
      toFillOut: false,
    };

    const data = await docspaceRequest("/api/2.0/files/fileops/move", "PUT", payload);
    return Boolean(data);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def move_files_chunk(file_ids: List[int], dest_folder_id: int) -> bool:
    payload = {
      "fileIds": file_ids,
      "destFolderId": dest_folder_id,
      "deleteAfter": True,
      "content": True,
      "toFillOut": False,
    }
    data = docspace_request("PUT", "/api/2.0/files/fileops/move", json_body=payload)
    return data is not None
  ```

  </TabItem>
</Tabs>

## Step 4: Disable client access (optional)

If the client is a guest user and you want to revoke access after deal closure, the script:

- receives `GUEST_USER_ID`,
- deletes the guest user using DELETE [/api/2.0/people/guests](/docspace/api-backend/usage-api/delete-guests) with body `{ "userIds": [<guestUserId>], "resendAll": false }`.

After that, the guest can no longer access the portal or shared rooms.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function deleteGuestUser(guestUserId: number) {
    const payload = {
      userIds: [guestUserId],
      resendAll: false,
    };

    // Some setups accept DELETE with JSON body.
    const data = await docspaceRequest("/api/2.0/people/guests", "DELETE", payload);
    return Boolean(data);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def delete_guest_user(guest_user_id: int) -> bool:
    payload = {"userIds": [guest_user_id], "resendAll": False}
    data = docspace_request("DELETE", "/api/2.0/people/guests", json_body=payload)
    return data is not None
  ```

  </TabItem>
</Tabs>