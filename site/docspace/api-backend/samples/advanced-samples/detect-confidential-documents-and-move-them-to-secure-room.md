import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Detect "confidential" documents and move them to a secure room

This example shows how to automatically detect sensitive documents in ONLYOFFICE DocSpace by searching for the keyword `confidential` and moving such files into a secure folder (for example, inside a secure room).

The script:

- lists all items inside a starting room/folder (including subfolders)
- keeps files only
- checks file titles against `KEYWORDS`
- moves matched files into a predefined secure folder
- can be run on demand or scheduled (cron/task scheduler)

There are no webhooks in this case – it is a batch scan that you can start whenever needed.

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

  // Scan configuration
  const START_FOLDER_ID = 123456;  // roomId or folderId to scan (replace)
  const SECURE_FOLDER_ID = 654321; // secure destination folderId (replace)

  const KEYWORDS = ["confidential", "secret", "internal only", "sensitive"];

  const HEADERS: Record<string, string> = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  // Request helper
  async function requestJson(path: string, method: string = "GET", body: any = null) {
    const url = `${API_HOST}${path}`;

    try {
      const res = await fetch(url, {
        method,
        headers: HEADERS,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.log(`[ERROR] Request failed: ${method} ${url}`);
        console.log(`[ERROR] Status: ${res.status}, Message: ${text}`);
        return null;
      }

      return await res.json();
    } catch (err: any) {
      console.log(`[ERROR] Request error: ${err?.message || err}`);
      return null;
    }
  }

  function getResponseNode(data: any) {
    if (data && typeof data === "object" && "response" in data) return (data as any).response;
    return data;
  }

  function titleMatchesKeywords(title: string) {
    const t = String(title || "").toLowerCase();
    return KEYWORDS.some((kw) => t.includes(String(kw).toLowerCase()));
  }

  // Step 1: List folder contents (files + folders)
  async function listFolderContents(folderId: number) {
    const data = await requestJson(`/api/2.0/files/${folderId}`, "GET");
    const node = getResponseNode(data);

    if (!node || typeof node !== "object") {
      return { files: [], folders: [] };
    }

    const files = Array.isArray((node as any).files) ? (node as any).files : [];
    const folders = Array.isArray((node as any).folders) ? (node as any).folders : [];

    return { files, folders };
  }

  // Step 2: Recursively collect matching files by title
  async function collectSensitiveFiles(startFolderId: number) {
    const result: Array<{ id: number; title: string }> = [];

    async function walk(folderId: number) {
      console.log(`[INFO] Scanning folder/room ${folderId}...`);
      const { files, folders } = await listFolderContents(folderId);

      for (const f of files) {
        const fileId = Number((f as any).id);
        const title = String((f as any).title || "");
        if (!Number.isFinite(fileId) || !title) continue;

        if (titleMatchesKeywords(title)) {
          console.log(`  [MATCH] fileId=${fileId}, title="${title}"`);
          result.push({ id: fileId, title });
        }
      }

      for (const sub of folders) {
        const subId = Number((sub as any).id);
        if (!Number.isFinite(subId)) continue;
        await walk(subId);
      }
    }

    await walk(startFolderId);
    return result;
  }

  // Step 3: Move files to secure folder
  async function moveFilesToSecureFolder(fileIds: number[]) {
    if (!fileIds.length) return true;

    const payload = {
      fileIds,
      destFolderId: SECURE_FOLDER_ID,
      deleteAfter: true,
      content: true,
      toFillOut: false,
    };

    const data = await requestJson("/api/2.0/files/fileops/move", "PUT", payload);
    return Boolean(data);
  }

  // Run flow
  (async () => {
    console.log("[INFO] Scanning DocSpace for sensitive documents by TITLE...");
    console.log(`[INFO] Start folder/room: ${START_FOLDER_ID}`);
    console.log(`[INFO] Keywords: ${JSON.stringify(KEYWORDS)}`);
    console.log(`[INFO] Secure folder: ${SECURE_FOLDER_ID}\n`);

    const matches = await collectSensitiveFiles(START_FOLDER_ID);

    if (!matches.length) {
      console.log("\n[INFO] No matching files were found.");
      return;
    }

    console.log(`\n[INFO] Found ${matches.length} file(s). Moving...`);

    // Optional: move in chunks if you expect large batches
    const ids = matches.map((x) => x.id);
    const ok = await moveFilesToSecureFolder(ids);

    if (ok) console.log(`[INFO] Done. Moved ${ids.length} file(s) to secure folder ${SECURE_FOLDER_ID}.`);
    else console.log("[ERROR] Move failed.");

    console.log("\n[INFO] Sensitive document scan completed.");
  })().catch((e) => {
    console.log("[ERROR] Scan failed:", e?.message || e);
    process.exitCode = 1;
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  from typing import Any, Dict, List, Optional, Tuple

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  START_FOLDER_ID = 123456   # roomId or folderId to scan (replace)
  SECURE_FOLDER_ID = 654321  # secure destination folderId (replace)

  KEYWORDS: List[str] = ["confidential", "secret", "internal only", "sensitive"]

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  def request_json(path: str, method: str = "GET", json_body: Optional[Dict[str, Any]] = None) -> Optional[Dict[str, Any]]:
    url = f"{API_HOST}{path}"

    try:
      r = requests.request(method.upper(), url, headers=HEADERS, json=json_body)
    except Exception as e:
      print(f"[ERROR] Request error: {e}")
      return None

    if r.status_code != 200:
      print(f"[ERROR] Request failed: {method} {url}")
      print(f"[ERROR] Status: {r.status_code}, Message: {r.text}")
      return None

    try:
      return r.json()
    except ValueError:
      print(f"[ERROR] Failed to parse JSON from {url}")
      return None

  def get_response_node(data: Any) -> Any:
    if isinstance(data, dict) and "response" in data:
      return data.get("response")
    return data

  def title_matches_keywords(title: str) -> bool:
    t = str(title or "").lower()
    return any(str(kw).lower() in t for kw in KEYWORDS)

  # Step 1: List folder contents (files + folders)
  def list_folder_contents(folder_id: int) -> Tuple[List[Dict[str, Any]], List[Dict[str, Any]]]:
    data = request_json(f"/api/2.0/files/{folder_id}", "GET")
    node = get_response_node(data)

    if not isinstance(node, dict):
      return [], []

    files = node.get("files") or []
    folders = node.get("folders") or []

    return (files if isinstance(files, list) else [], folders if isinstance(folders, list) else [])

  # Step 2: Recursively collect matching files by title
  def collect_sensitive_files(start_folder_id: int) -> List[Dict[str, Any]]:
    result: List[Dict[str, Any]] = []

    def walk(folder_id: int) -> None:
      print(f"[INFO] Scanning folder/room {folder_id}...")
      files, folders = list_folder_contents(folder_id)

      for f in files:
        if not isinstance(f, dict):
          continue
        try:
          file_id = int(f.get("id"))
        except Exception:
          continue

        title = str(f.get("title") or "")
        if title and title_matches_keywords(title):
          print(f'  [MATCH] fileId={file_id}, title="{title}"')
          result.append({"id": file_id, "title": title})

      for sub in folders:
        if not isinstance(sub, dict):
          continue
        try:
          sub_id = int(sub.get("id"))
        except Exception:
          continue
        walk(sub_id)

    walk(start_folder_id)
    return result

  # Step 3: Move files to secure folder
  def move_files_to_secure_folder(file_ids: List[int]) -> bool:
    if not file_ids:
      return True

    payload = {
      "fileIds": file_ids,
      "destFolderId": SECURE_FOLDER_ID,
      "deleteAfter": True,
      "content": True,
      "toFillOut": False,
    }

    data = request_json("/api/2.0/files/fileops/move", "PUT", json_body=payload)
    return data is not None

  if __name__ == "__main__":
    print("[INFO] Scanning DocSpace for sensitive documents by TITLE...")
    print(f"[INFO] Start folder/room: {START_FOLDER_ID}")
    print(f"[INFO] Keywords: {KEYWORDS}")
    print(f"[INFO] Secure folder: {SECURE_FOLDER_ID}\n")

    matches = collect_sensitive_files(START_FOLDER_ID)

    if not matches:
      print("\n[INFO] No matching files were found.")
    else:
      ids = [int(x["id"]) for x in matches if "id" in x]
      print(f"\n[INFO] Found {len(ids)} file(s). Moving...")
      ok = move_files_to_secure_folder(ids)

      if ok:
        print(f"[INFO] Done. Moved {len(ids)} file(s) to secure folder {SECURE_FOLDER_ID}.")
      else:
        print("[ERROR] Move failed.")

    print("\n[INFO] Sensitive document scan completed.")
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: List files in the target room (including subfolders)

The script starts from `START_FOLDER_ID` (a room id or folder id) and reads its contents using GET [/api/2.0/files/:folderId](/docspace/api-backend/usage-api/get-folder-by-folder-id).

DocSpace returns two lists:

`files` — files inside this folder
`folders` — subfolders inside this folder

The script repeats the same request for every subfolder to scan the whole tree.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function listFolderContents(folderId: number) {
    const data = await requestJson(`/api/2.0/files/${folderId}`, "GET");
    const node = getResponseNode(data);

    if (!node || typeof node !== "object") {
      return { files: [], folders: [] };
    }

    const files = Array.isArray(node.files) ? node.files : [];
    const folders = Array.isArray(node.folders) ? node.folders : [];

    return { files, folders };
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def list_folder_contents(folder_id: int):
    data = request_json(f"/api/2.0/files/{folder_id}", "GET")
    node = get_response_node(data)

    if not isinstance(node, dict):
      return [], []

    files = node.get("files") or []
    folders = node.get("folders") or []

    return (files if isinstance(files, list) else [], folders if isinstance(folders, list) else [])
  ```

  </TabItem>
</Tabs>

## Step 2: Detect sensitive files by title

For every file found during the scan, the script checks the `title` field against KEYWORDS (case-insensitive).
Only files are evaluated — folders are scanned only to reach deeper levels.

If a file title contains any keyword (for example, `confidential`), the file is added to the move list.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function collectSensitiveFiles(startFolderId: number) {
    const result: Array<{ id: number; title: string }> = [];

    async function walk(folderId: number) {
      const { files, folders } = await listFolderContents(folderId);

      for (const f of files) {
        const fileId = Number(f.id);
        const title = String(f.title || "");
        if (!Number.isFinite(fileId) || !title) continue;

        if (titleMatchesKeywords(title)) result.push({ id: fileId, title });
      }

      for (const sub of folders) {
        const subId = Number(sub.id);
        if (!Number.isFinite(subId)) continue;
        await walk(subId);
      }
    }

    await walk(startFolderId);
    return result;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def collect_sensitive_files(start_folder_id: int) -> List[Dict[str, Any]]:
    result: List[Dict[str, Any]] = []

    def walk(folder_id: int) -> None:
      files, folders = list_folder_contents(folder_id)

      for f in files:
        try:
          file_id = int(f.get("id"))
        except Exception:
          continue

        title = str(f.get("title") or "")
        if title and title_matches_keywords(title):
          result.append({"id": file_id, "title": title})

      for sub in folders:
        try:
          sub_id = int(sub.get("id"))
        except Exception:
          continue
        walk(sub_id)

    walk(start_folder_id)
    return result
  ```

  </TabItem>
</Tabs>

## Step 3: Move matched files to a secure folder

If at least one file matches, the script moves them into SECURE_FOLDER_ID using PUT [/api/2.0/files/fileops/move](/docspace/api-backend/usage-api/move-batch-items) with body:

`{ "fileIds": [...], "destFolderId": SECURE_FOLDER_ID, "deleteAfter": true }`

This relocates sensitive files into a controlled secure location for review.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function moveFilesToSecureFolder(fileIds: number[]) {
    const payload = {
      fileIds,
      destFolderId: SECURE_FOLDER_ID,
      deleteAfter: true,
      content: true,
      toFillOut: false,
    };

    const data = await requestJson("/api/2.0/files/fileops/move", "PUT", payload);
    return Boolean(data);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def move_files_to_secure_folder(file_ids: List[int]) -> bool:
    payload = {
      "fileIds": file_ids,
      "destFolderId": SECURE_FOLDER_ID,
      "deleteAfter": True,
      "content": True,
      "toFillOut": False,
    }

    data = request_json("/api/2.0/files/fileops/move", "PUT", json_body=payload)
    return data is not None
  ```

  </TabItem>
</Tabs> 