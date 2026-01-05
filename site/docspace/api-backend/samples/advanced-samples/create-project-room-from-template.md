import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a project room from a template

This example demonstrates how to create a DocSpace room for a new project from an existing room template.
The external project system (PM/ERP/CRM) sends project data (for example, `projectId`, `projectType`, `projectName`). The integration then:

- fetches available room templates,
- selects a template based on `projectType`,
- starts room creation from the selected template,
- waits until the room is created,
- returns the created `roomId` (and optionally room info) back to the external system.

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

  // Helper: DocSpace request wrapper
  async function docspaceRequest(path: string, method: string = "GET", body: any = null) {
    const url = `${API_HOST}${path}`;

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
  }

  // Step 1: Load available templates and choose one for the project
  async function selectTemplateForProject(projectType: string) {
    const data = await docspaceRequest("/api/2.0/files/rooms?searchArea=Templates", "GET");
    const resp = data?.response ?? null;

    const templates = Array.isArray(resp?.folders) ? resp.folders : [];
    if (!templates.length) {
      console.log("No templates found in Templates.");
      return null;
    }

    // Example mapping: projectType -> template title contains keyword
    const normalized = String(projectType || "").toLowerCase();
    const match = templates.find((t: any) => String(t?.title || "").toLowerCase().includes(normalized));

    // Fallback: first template
    const chosen = match || templates[0];

    const templateId = Number(chosen?.id);
    if (!Number.isFinite(templateId)) return null;

    console.log(`Template selected: "${chosen.title}" (id=${templateId})`);
    return { templateId, templateTitle: String(chosen.title || "") };
  }

  // Step 2: Start creating a room from the selected template
  async function startRoomFromTemplate(templateId: number, roomTitle: string) {
    // The docs describe POST /api/2.0/files/rooms/fromtemplate
    // The exact body fields can vary by build; keep it minimal and aligned to “template + title”.
    const payload = {
      templateId,
      title: roomTitle,
    };

    const data = await docspaceRequest("/api/2.0/files/rooms/fromtemplate", "POST", payload);
    if (!data) return null;

    // Different builds may return different “task/operation” identifiers.
    // We keep it tolerant and store the full response for Step 3.
    console.log("Room creation started.");
    return data;
  }

  // Step 3: Wait until the room is created (poll creation status)
  async function waitForRoomCreation() {
    // Docs: GET /api/2.0/files/rooms/fromtemplate/status
    // We poll until API reports a completed task and provides a roomId (or similar).
    for (let i = 0; i < 30; i++) {
      const data = await docspaceRequest("/api/2.0/files/rooms/fromtemplate/status", "GET");
      const resp = data?.response ?? null;

      // Common patterns: response can be an object or a list of tasks.
      const tasks = Array.isArray(resp) ? resp : Array.isArray(resp?.tasks) ? resp.tasks : [];

      const completed = tasks.find((t: any) => Boolean(t?.isCompleted || t?.completed || t?.status === "Completed"));
      if (completed) {
        const roomId = Number(completed?.roomId ?? completed?.id ?? null);
        if (Number.isFinite(roomId)) {
          console.log(`Room creation completed: roomId=${roomId}`);
          return roomId;
        }
      }

      console.log("Room is still being created...");
      await sleep(2000);
    }

    console.log("Timed out waiting for room creation status.");
    return null;
  }

  // Step 4: Load room info (optional, but useful to return metadata to external system)
  async function getRoomInfo(roomId: number) {
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}`, "GET");
    const room = data?.response ?? null;
    return room && typeof room === "object" ? room : null;
  }

  // Step 5: Return results to the external project system (placeholder)
  async function updateExternalProject(projectId: string, roomId: number, roomInfo: any) {
    // Replace this with your PM system API call.
    console.log("[EXTERNAL SYSTEM UPDATE]");
    console.log(`projectId: ${projectId}`);
    console.log(`roomId: ${roomId}`);
    console.log("roomInfo:", roomInfo);
  }

  // Run flow (example input from PM webhook)
  (async () => {
    const project = {
      projectId: "PRJ-10021",
      projectType: "marketing",
      projectName: "Q1 Campaign",
    };

    // Step 1
    const template = await selectTemplateForProject(project.projectType);
    if (!template) return;

    // Step 2
    const roomTitle = `${project.projectName} (${project.projectId})`;
    const started = await startRoomFromTemplate(template.templateId, roomTitle);
    if (!started) return;

    // Step 3
    const roomId = await waitForRoomCreation();
    if (!roomId) return;

    // Step 4
    const roomInfo = await getRoomInfo(roomId);

    // Step 5
    await updateExternalProject(project.projectId, roomId, roomInfo);
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import time
  import requests
  from typing import Optional, Dict, Any, Tuple, List

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
  }

  # Helper: DocSpace request wrapper
  def docspace_request(method: str, path: str, json_body: Optional[Dict[str, Any]] = None) -> Optional[Dict[str, Any]]:
    url = f"{API_HOST}{path}"

    try:
      r = requests.request(method.upper(), url, headers=HEADERS, json=json_body)
    except Exception as e:
      print(f"DocSpace request error: {e}")
      return None

    if r.status_code != 200:
      print(f"DocSpace request failed: {method} {url}")
      print(f"Status: {r.status_code}, Message: {r.text}")
      return None

    try:
      return r.json()
    except Exception:
      print(f"Invalid JSON response: {method} {url}")
      return None

  # Step 1: Load available templates and choose one for the project
  def select_template_for_project(project_type: str) -> Optional[Tuple[int, str]]:
    data = docspace_request("GET", "/api/2.0/files/rooms?searchArea=Templates")
    resp = (data or {}).get("response") or {}

    templates = resp.get("folders") if isinstance(resp, dict) else []
    templates = templates if isinstance(templates, list) else []

    if not templates:
      print("No templates found in Templates.")
      return None

    normalized = str(project_type or "").lower()
    match = None
    for t in templates:
      title = str((t or {}).get("title") or "").lower()
      if normalized and normalized in title:
        match = t
        break

    chosen = match or templates[0]
    template_id = chosen.get("id")
    try:
      template_id_int = int(template_id)
    except Exception:
      return None

    template_title = str(chosen.get("title") or "")
    print(f'Template selected: "{template_title}" (id={template_id_int})')
    return template_id_int, template_title

  # Step 2: Start creating a room from the selected template
  def start_room_from_template(template_id: int, room_title: str) -> Optional[Dict[str, Any]]:
    payload = {
      "templateId": template_id,
      "title": room_title,
    }

    data = docspace_request("POST", "/api/2.0/files/rooms/fromtemplate", json_body=payload)
    if not data:
      return None

    print("Room creation started.")
    return data

  # Step 3: Wait until the room is created (poll creation status)
  def wait_for_room_creation(max_attempts: int = 30, interval_sec: int = 2) -> Optional[int]:
    for _ in range(max_attempts):
      data = docspace_request("GET", "/api/2.0/files/rooms/fromtemplate/status")
      resp = (data or {}).get("response")

      tasks: List[Dict[str, Any]] = []
      if isinstance(resp, list):
        tasks = [t for t in resp if isinstance(t, dict)]
      elif isinstance(resp, dict) and isinstance(resp.get("tasks"), list):
        tasks = [t for t in resp["tasks"] if isinstance(t, dict)]

      completed = None
      for t in tasks:
        if t.get("isCompleted") or t.get("completed") or t.get("status") == "Completed":
          completed = t
          break

      if completed:
        room_id = completed.get("roomId") or completed.get("id")
        try:
          room_id_int = int(room_id)
          print(f"Room creation completed: roomId={room_id_int}")
          return room_id_int
        except Exception:
          pass

      print("Room is still being created...")
      time.sleep(interval_sec)

    print("Timed out waiting for room creation status.")
    return None

  # Step 4: Load room info (optional, but useful to return metadata to external system)
  def get_room_info(room_id: int) -> Optional[Dict[str, Any]]:
    data = docspace_request("GET", f"/api/2.0/files/rooms/{room_id}")
    resp = (data or {}).get("response")
    return resp if isinstance(resp, dict) else None

  # Step 5: Return results to the external project system (placeholder)
  def update_external_project(project_id: str, room_id: int, room_info: Optional[Dict[str, Any]]) -> None:
    print("[EXTERNAL SYSTEM UPDATE]")
    print(f"projectId: {project_id}")
    print(f"roomId: {room_id}")
    print("roomInfo:", room_info)

  if __name__ == "__main__":
    project = {
      "projectId": "PRJ-10021",
      "projectType": "marketing",
      "projectName": "Q1 Campaign",
    }

    # Step 1
    template = select_template_for_project(project["projectType"])
    if not template:
      raise SystemExit(0)
    template_id, _template_title = template

    # Step 2
    room_title = f'{project["projectName"]} ({project["projectId"]})'
    started = start_room_from_template(template_id, room_title)
    if not started:
      raise SystemExit(0)

    # Step 3
    room_id = wait_for_room_creation()
    if not room_id:
      raise SystemExit(0)

    # Step 4
    room_info = get_room_info(room_id)

    # Step 5
    update_external_project(project["projectId"], room_id, room_info)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get templates and choose one for the project

The integration loads templates from DocSpace and picks a suitable template for the project type.

It requests the templates list using GET [/api/2.0/files/rooms?searchArea=Templates](/docspace/api-backend/usage-api/get-folder-info) and selects a template (for example, by matching `projectType` against template `title`).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function selectTemplateForProject(projectType: string) {
    const data = await docspaceRequest("/api/2.0/files/rooms?searchArea=Templates", "GET");
    const templates = Array.isArray(data?.response?.folders) ? data.response.folders : [];

    const normalized = String(projectType || "").toLowerCase();
    const match = templates.find((t: any) => String(t?.title || "").toLowerCase().includes(normalized));
    const chosen = match || templates[0];

    const templateId = Number(chosen?.id);
    if (!Number.isFinite(templateId)) return null;

    return { templateId, templateTitle: String(chosen.title || "") };
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def select_template_for_project(project_type: str):
    data = docspace_request("GET", "/api/2.0/files/rooms?searchArea=Templates")
    resp = (data or {}).get("response") or {}
    templates = resp.get("folders") if isinstance(resp, dict) else []
    templates = templates if isinstance(templates, list) else []

    normalized = str(project_type or "").lower()
    chosen = next((t for t in templates if normalized in str(t.get("title") or "").lower()), templates[0])

    return int(chosen["id"]), str(chosen.get("title") or "")
  ```

  </TabItem>
</Tabs>

## Step 2: Scan folders recursively

Once the template is selected, the integration starts room creation using POST [/api/2.0/files/rooms/fromtemplate](/docspace/api-backend/usage-api/get-folder-info)

In this example the minimal payload is `{ "templateId": <templateId>, "title": "<projectRoomTitle>" }`

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function startRoomFromTemplate(templateId: number, roomTitle: string) {
    const payload = { templateId, title: roomTitle };
    return await docspaceRequest("/api/2.0/files/rooms/fromtemplate", "POST", payload);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def start_room_from_template(template_id: int, room_title: str):
    payload = {"templateId": template_id, "title": room_title}
    return docspace_request("POST", "/api/2.0/files/rooms/fromtemplate", json_body=payload)
  ```

  </TabItem>
</Tabs>

## Step 3: Wait until the room is created

Room creation from a template may take time (copying structure, files, permissions).
The integration periodically checks the creation progress using GET [/api/2.0/files/rooms/fromtemplate/status](/docspace/api-backend/usage-api/get-folder-info).
When a completed task appears and a roomId becomes available, the integration continues.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function waitForRoomCreation() {
    for (let i = 0; i < 30; i++) {
      const data = await docspaceRequest("/api/2.0/files/rooms/fromtemplate/status", "GET");
      const resp = data?.response ?? null;

      const tasks = Array.isArray(resp) ? resp : Array.isArray(resp?.tasks) ? resp.tasks : [];
      const completed = tasks.find((t: any) => Boolean(t?.isCompleted || t?.completed || t?.status === "Completed"));

      if (completed) {
        const roomId = Number(completed?.roomId ?? completed?.id ?? null);
        if (Number.isFinite(roomId)) return roomId;
      }

      await sleep(2000);
    }
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def wait_for_room_creation(max_attempts: int = 30, interval_sec: int = 2):
    for _ in range(max_attempts):
      data = docspace_request("GET", "/api/2.0/files/rooms/fromtemplate/status")
      resp = (data or {}).get("response")

      tasks = resp if isinstance(resp, list) else (resp.get("tasks") if isinstance(resp, dict) else [])
      tasks = tasks if isinstance(tasks, list) else []

      for t in tasks:
        if t.get("isCompleted") or t.get("completed") or t.get("status") == "Completed":
          room_id = t.get("roomId") or t.get("id")
          return int(room_id)

      time.sleep(interval_sec)

    return None
  ```

  </TabItem>
</Tabs>

## Step 4: Load room info (optional)

After the room is created, you may want to load its metadata (title, flags, ids) before sending it back to the external system.

The integration requests room information using
GET [/api/2.0/files/rooms/{roomId}](/docspace/api-backend/usage-api/move-batch-items) (room info endpoint is available in the Rooms section of the API docs).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getRoomInfo(roomId: number) {
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}`, "GET");
    return data?.response ?? null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_room_info(room_id: int):
    data = docspace_request("GET", f"/api/2.0/files/rooms/{room_id}")
    return (data or {}).get("response")
  ```

  </TabItem>
</Tabs>

## Step 5: Save the room back to the external project system

Finally, the integration returns the created room identifier to the external project system (PM/ERP/CRM) so the project card can store:

- `roomId`
- optional room metadata (title, etc.)

In production this step is usually implemented as an API call to the external system (custom field update). In this example it is shown as a placeholder method.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function updateExternalProject(projectId: string, roomId: number, roomInfo: any) {
    console.log("[EXTERNAL SYSTEM UPDATE]");
    console.log({ projectId, roomId, roomInfo });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def update_external_project(project_id: str, room_id: int, room_info):
    print("[EXTERNAL SYSTEM UPDATE]")
    print({"projectId": project_id, "roomId": room_id, "roomInfo": room_info})
  ```

  </TabItem>
</Tabs>