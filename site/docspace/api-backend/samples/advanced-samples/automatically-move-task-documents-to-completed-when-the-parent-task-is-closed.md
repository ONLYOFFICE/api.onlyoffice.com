import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Automatically move task documents to "Completed" when the parent task is closed

This example shows how to automatically move all documents related to a task into a common Completed folder when the task is closed.
In a typical setup:
- each task in an external system (task tracker, CRM, etc.) has its own DocSpace folder for documents,
- when the task status becomes closed, you move all files from that task folder into a global Completed folder.

The external system is abstract in this sample: the script receives a list of tasks containing:
- `id` — task identifier,
- `status` — task status (open, `in_progress`, `closed`),
- `docsFolderId` — DocSpace folder ID where task documents are stored.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Automatically move task documents to "Completed" when a task is closed.

  const API_HOST = "https://yourportal.onlyoffice.com";
  const API_KEY = "YOUR_API_KEY";

  // Global folder where all completed task documents will be moved
  const COMPLETED_FOLDER_ID = 999999; // replace

  const HEADERS: Record<string, string> = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  type Task = {
    id: string;
    status: "open" | "in_progress" | "closed";
    docsFolderId: number | null;
  };

  async function docspaceRequest(path: string, method: string, jsonBody?: any) {
    const url = `${API_HOST}${path}`;

    let res: Response;
    try {
      res = await fetch(url, {
        method,
        headers: HEADERS,
        body: jsonBody ? JSON.stringify(jsonBody) : undefined,
      });
    } catch (e: any) {
      console.log(`[ERROR] DocSpace request error: ${e?.message || e}`);
      return null;
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.log(`[ERROR] DocSpace request failed: ${method} ${url}`);
      console.log(`[ERROR] Status: ${res.status}, Message: ${text}`);
      return null;
    }

    try {
      return await res.json();
    } catch {
      return null;
    }
  }

  // Step 1: Load tasks from external system (placeholder)
  async function fetchTasksFromExternalSystem(): Promise<Task[]> {
    return [
      { id: "TASK-101", status: "open", docsFolderId: 111111 },
      { id: "TASK-102", status: "closed", docsFolderId: 222222 },
      { id: "TASK-103", status: "closed", docsFolderId: 333333 },
    ];
  }

  function extractFilesFromFolderResponse(data: any): any[] {
    // Expected common shape:
    // { response: { files: [...], folders: [...] } }
    const node = data && typeof data === "object" ? (data.response ?? null) : null;
    if (!node || typeof node !== "object") return [];

    const files = Array.isArray(node.files) ? node.files : [];
    return files.filter((x) => x && typeof x === "object");
  }

  // Step 2: Read task folder contents (files only)
  async function listFilesInFolder(folderId: number): Promise<any[]> {
    const data = await docspaceRequest(`/api/2.0/files/${folderId}`, "GET");
    if (!data) return [];
    return extractFilesFromFolderResponse(data);
  }

  function isValidFileItem(item: any): boolean {
    // We read from response.files, but still keep basic validation
    return Boolean(item?.id && item?.title);
  }

  // Step 3: Move all files into the Completed folder
  async function moveFilesToCompleted(fileIds: number[]): Promise<boolean> {
    if (!fileIds.length) return true;

    const payload = {
      fileIds,
      destFolderId: COMPLETED_FOLDER_ID,
      deleteAfter: true, // move (not copy)
      content: true,
      toFillOut: false,
    };

    const data = await docspaceRequest("/api/2.0/files/fileops/move", "PUT", payload);
    return data !== null;
  }

  async function processClosedTask(task: Task) {
    if (!task.docsFolderId) {
      console.log(`[INFO] Task ${task.id} has no docsFolderId. Skipping.`);
      return;
    }

    console.log(`[INFO] Task ${task.id} is closed. Scanning folder ${task.docsFolderId}...`);

    const files = await listFilesInFolder(task.docsFolderId);
    const fileIds = files
      .filter(isValidFileItem)
      .map((f) => Number(f.id))
      .filter((n) => Number.isFinite(n));

    if (!fileIds.length) {
      console.log(`[INFO] No files found in folder ${task.docsFolderId}.`);
      return;
    }

    console.log(`[INFO] Moving ${fileIds.length} file(s) to Completed folder ${COMPLETED_FOLDER_ID}...`);
    const ok = await moveFilesToCompleted(fileIds);

    if (ok) console.log(`[OK] Task ${task.id}: files moved successfully.`);
    else console.log(`[ERROR] Task ${task.id}: move failed.`);
  }

  // Main
  async function run() {
    console.log("[INFO] Loading tasks...");
    const tasks = await fetchTasksFromExternalSystem();

    const closedTasks = tasks.filter((t) => t.status === "closed" && t.docsFolderId);
    if (!closedTasks.length) {
      console.log("[INFO] No closed tasks found.");
      return;
    }

    console.log(`[INFO] Found ${closedTasks.length} closed task(s). Processing...`);

    for (const t of closedTasks) {
      await processClosedTask(t);
    }

    console.log("[INFO] Completed task document processing finished.");
  }

  run().catch((e: any) => {
    console.log("[ERROR] Script failed:", e?.message || e);
    process.exitCode = 1;
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  # Automatically move task documents to "Completed" when a task is closed.

  from typing import List, Dict, Any, Optional
  import requests

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  COMPLETED_FOLDER_ID = 999999  # replace

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
      print(f"[ERROR] DocSpace request error: {e}")
      return None

    if r.status_code != 200:
      print(f"[ERROR] DocSpace request failed: {method} {url}")
      print(f"[ERROR] Status: {r.status_code}, Message: {r.text}")
      return None

    try:
      return r.json()
    except ValueError:
      return None

  # Step 1: Load tasks from external system (placeholder)
  def fetch_tasks_from_external_system() -> List[Dict[str, Any]]:
    return [
      {"id": "TASK-101", "status": "open", "docsFolderId": 111111},
      {"id": "TASK-102", "status": "closed", "docsFolderId": 222222},
      {"id": "TASK-103", "status": "closed", "docsFolderId": 333333},
    ]

  def extract_files_from_folder_response(data: Any) -> List[Dict[str, Any]]:
    # Expected common shape:
    # { "response": { "files": [...], "folders": [...] } }
    if not isinstance(data, dict):
      return []
    node = data.get("response")
    if not isinstance(node, dict):
      return []

    files = node.get("files") or []
    if not isinstance(files, list):
      return []
    return [x for x in files if isinstance(x, dict)]

  # Step 2: Read task folder contents (files only)
  def list_files_in_folder(folder_id: int) -> List[Dict[str, Any]]:
    data = docspace_request(f"/api/2.0/files/{folder_id}", "GET")
    if data is None:
      return []
    return extract_files_from_folder_response(data)

  def is_valid_file_item(item: Dict[str, Any]) -> bool:
    return bool(item.get("id") and item.get("title"))

  # Step 3: Move all files into the Completed folder
  def move_files_to_completed(file_ids: List[int]) -> bool:
    if not file_ids:
      return True

    payload = {
      "fileIds": file_ids,
      "destFolderId": COMPLETED_FOLDER_ID,
      "deleteAfter": True,  # move (not copy)
      "content": True,
      "toFillOut": False,
    }

    data = docspace_request("/api/2.0/files/fileops/move", "PUT", json_body=payload)
    return data is not None

  def process_closed_task(task: Dict[str, Any]) -> None:
    docs_folder_id = task.get("docsFolderId")
    if not docs_folder_id:
      print(f"[INFO] Task {task.get('id')} has no docsFolderId. Skipping.")
      return

    print(f"[INFO] Task {task.get('id')} is closed. Scanning folder {docs_folder_id}...")

    files = list_files_in_folder(int(docs_folder_id))
    file_ids: List[int] = []

    for f in files:
      if not is_valid_file_item(f):
        continue
      try:
        file_ids.append(int(f["id"]))
      except Exception:
        continue

    if not file_ids:
      print(f"[INFO] No files found in folder {docs_folder_id}.")
      return

    print(f"[INFO] Moving {len(file_ids)} file(s) to Completed folder {COMPLETED_FOLDER_ID}...")
    ok = move_files_to_completed(file_ids)

    if ok:
      print(f"[OK] Task {task.get('id')}: files moved successfully.")
    else:
      print(f"[ERROR] Task {task.get('id')}: move failed.")

  def run():
    print("[INFO] Loading tasks...")
    tasks = fetch_tasks_from_external_system()

    closed_tasks = [t for t in tasks if str(t.get("status")).lower() == "closed" and t.get("docsFolderId")]
    if not closed_tasks:
      print("[INFO] No closed tasks found.")
      return

    print(f"[INFO] Found {len(closed_tasks)} closed task(s). Processing...")

    for t in closed_tasks:
      process_closed_task(t)

    print("[INFO] Completed task document processing finished.")

  if __name__ == "__main__":
    run()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Identify closed tasks with linked DocSpace folders

Your external system provides a task list where each task includes `docsFolderId` — the DocSpace folder that stores its documents.

The script keeps only tasks where:
- status is closed
- `docsFolderId` is not empty


<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function fetchTasksFromExternalSystem(): Promise<Task[]> {
    return [
      { id: "TASK-101", status: "open", docsFolderId: 111111 },
      { id: "TASK-102", status: "closed", docsFolderId: 222222 },
      { id: "TASK-103", status: "closed", docsFolderId: 333333 },
    ];
  }

  function extractFilesFromFolderResponse(data: any): any[] {
    // Expected common shape:
    // { response: { files: [...], folders: [...] } }
    const node = data && typeof data === "object" ? (data.response ?? null) : null;
    if (!node || typeof node !== "object") return [];

    const files = Array.isArray(node.files) ? node.files : [];
    return files.filter((x) => x && typeof x === "object");
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def fetch_tasks_from_external_system() -> List[Dict[str, Any]]:
    return [
      {"id": "TASK-101", "status": "open", "docsFolderId": 111111},
      {"id": "TASK-102", "status": "closed", "docsFolderId": 222222},
      {"id": "TASK-103", "status": "closed", "docsFolderId": 333333},
    ]

  def extract_files_from_folder_response(data: Any) -> List[Dict[str, Any]]:
    # Expected common shape:
    # { "response": { "files": [...], "folders": [...] } }
    if not isinstance(data, dict):
      return []
    node = data.get("response")
    if not isinstance(node, dict):
      return []

    files = node.get("files") or []
    if not isinstance(files, list):
      return []
    return [x for x in files if isinstance(x, dict)]
  ```

  </TabItem>
</Tabs>

## Step 2: Read file items from the task document folder

For each closed task, the script loads the folder contents using GET [/api/2.0/files/{docsFolderId}](/docspace/api-backend/usage-api/create-room)
From the response, it uses response.files and ignores folders (because only documents need to be moved).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function listFilesInFolder(folderId: number): Promise<any[]> {
    const data = await docspaceRequest(`/api/2.0/files/${folderId}`, "GET");
    if (!data) return [];
    return extractFilesFromFolderResponse(data);
  }

  function isValidFileItem(item: any): boolean {
    // We read from response.files, but still keep basic validation
    return Boolean(item?.id && item?.title);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def list_files_in_folder(folder_id: int) -> List[Dict[str, Any]]:
    data = docspace_request(f"/api/2.0/files/{folder_id}", "GET")
    if data is None:
      return []
    return extract_files_from_folder_response(data)
  ```

  </TabItem>
</Tabs>

## Step 3: Move all task documents to the global Completed folder

If the task folder contains files, the script moves them into the common Completed location using PUT [/api/2.0/files/fileops/move](/docspace/api-backend/usage-api/create-room) with body.

As a result:
- the Completed folder becomes the single place where finished task documents live,
- each task document folder becomes empty (or “clean”) after the task is closed.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function moveFilesToCompleted(fileIds: number[]): Promise<boolean> {
    if (!fileIds.length) return true;

    const payload = {
      fileIds,
      destFolderId: COMPLETED_FOLDER_ID,
      deleteAfter: true, // move (not copy)
      content: true,
      toFillOut: false,
    };

    const data = await docspaceRequest("/api/2.0/files/fileops/move", "PUT", payload);
    return data !== null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def move_files_to_completed(file_ids: List[int]) -> bool:
    if not file_ids:
      return True

    payload = {
      "fileIds": file_ids,
      "destFolderId": COMPLETED_FOLDER_ID,
      "deleteAfter": True,  # move (not copy)
      "content": True,
      "toFillOut": False,
    }

    data = docspace_request("/api/2.0/files/fileops/move", "PUT", json_body=payload)
    return data is not None
  ```

  </TabItem>
</Tabs>