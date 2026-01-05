import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Offboard an employee and archive their workspace

This example shows a practical offboarding flow in ONLYOFFICE DocSpace:

- disable the employee account,
- reassign their content to an archive owner,
- move the employee workspace folder to an archive location,
- apply archive access rules (archive owner + optional HR),
- generate a short offboarding report (audit + optional export placeholder).

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

  const EMPLOYEE_USER_ID = "EMPLOYEE-USER-ID";
  const EMPLOYEE_WORKSPACE_FOLDER_ID = 123456; // e.g., /Employees/John Doe
  const ARCHIVE_FOLDER_ID = 654321; // e.g., /Archive/Employees
  const ARCHIVE_OWNER_ID = "ARCHIVE-OWNER-USER-ID";
  const HR_GROUP_ID = ""; // optional

  const HEADERS: Record<string, string> = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async function requestJson(path: string, method: string = "GET", body: any = null) {
    const url = `${API_HOST}${path}`;

    const res = await fetch(url, {
      method,
      headers: HEADERS,
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(`[ERROR] ${method} ${url} -> ${res.status} ${text}`);
      return null;
    }

    try {
      return await res.json();
    } catch {
      console.log(`[ERROR] Non-JSON response: ${method} ${url}`);
      return null;
    }
  }

  function getResponseNode(data: any) {
    if (data && typeof data === "object" && "response" in data) return (data as any).response;
    return data;
  }

  // Step 1: Disable the user
  async function disableUser(userId: string) {
    const payload = { disabled: true };
    const data = await requestJson(`/api/2.0/people/${userId}/status`, "PUT", payload);
    return Boolean(data);
  }

  // Step 2: Reassign the user content to the archive owner
  async function checkReassignmentNeeded(userId: string, targetType: string = "User") {
    const params = new URLSearchParams({ UserId: userId, Type: targetType });
    const data = await requestJson(`/api/2.0/people/reassign/necessary?${params}`, "GET");
    const necessary = Boolean(data?.response ?? false);
    return necessary;
  }

  async function startReassignment(fromUserId: string, toUserId: string, deleteProfile: boolean = false) {
    const payload = { fromUserId, toUserId, deleteProfile };
    const data = await requestJson(`/api/2.0/people/reassign/start`, "POST", payload);
    return Boolean(data);
  }

  async function waitReassignmentComplete(userId: string) {
    while (true) {
      const data = await requestJson(`/api/2.0/people/reassign/progress/${userId}`, "GET");
      const info = data?.response || {};
      const pct = Number(info?.percentage ?? 0);
      const done = Boolean(info?.isCompleted);

      console.log(`[INFO] Reassign progress: ${pct}%`);
      if (done) return true;

      await sleep(2000);
    }
  }

  // Step 3: Move the employee workspace folder into the archive folder
  async function moveFolder(folderId: number, destFolderId: number) {
    const payload = {
      folderIds: [folderId],
      destFolderId,
      deleteAfter: true,
      content: true,
    };

    // This is the same "fileops" family used in working move examples.
    const candidates = [
      "/api/2.0/files/fileops/move",
      "/api/2.0/files/folderops/move",
    ];

    for (const p of candidates) {
      const data = await requestJson(p, "PUT", payload);
      if (data) return true;
    }

    return false;
  }

  // Step 4: Apply archive access rules to the archived folder
  async function applyArchiveAccess(folderId: number, archiveOwnerId: string, hrGroupId: string) {
    const entries: any[] = [
      { id: String(archiveOwnerId), isGroup: false, access: 4 }, // full access for archive owner
    ];

    if (hrGroupId) {
      entries.push({ id: String(hrGroupId), isGroup: true, access: 1 }); // read-only for HR
    }

    const payload = { entries };

    // Different builds may expose folder access via different endpoints.
    const candidates = [
      `/api/2.0/files/folder/${folderId}/share`,
      `/api/2.0/files/folder/${folderId}/access`,
    ];

    for (const p of candidates) {
      const data = await requestJson(p, "PUT", payload);
      if (data) return true;
    }

    return false;
  }

  // Step 5: Produce an offboarding report (audit + optional export placeholder)
  async function getAuditEvents(dtFromIso: string, dtToIso: string) {
    const params = new URLSearchParams({ from: dtFromIso, to: dtToIso });
    const data = await requestJson(`/api/2.0/security/audit/events/filter?${params}`, "GET");
    const events = getResponseNode(data);
    return Array.isArray(events) ? events : [];
  }

  function printOffboardingReport(args: {
    userId: string;
    archivedFolderId: number;
    auditEventsCount: number;
  }) {
    const folderLink = `${API_HOST}/products/files/#folder=${args.archivedFolderId}`;

    console.log("--- OFFBOARDING REPORT ---");
    console.log(`User: ${args.userId}`);
    console.log(`Archived folder: ${args.archivedFolderId}`);
    console.log(`Folder link: ${folderLink}`);
    console.log(`Audit events (time range): ${args.auditEventsCount}`);
    console.log("Export: not included in this example (depends on your internal archiving workflow).");
    console.log("--- END OF REPORT ---");
  }

  // Run flow
  (async () => {
    console.log(`[INFO] Offboarding started. userId=${EMPLOYEE_USER_ID}`);

    // Step 1
    const disabled = await disableUser(EMPLOYEE_USER_ID);
    console.log(disabled ? "[INFO] User disabled." : "[WARN] Failed to disable user.");

    // Step 2
    const needed = await checkReassignmentNeeded(EMPLOYEE_USER_ID);
    if (needed) {
      const started = await startReassignment(EMPLOYEE_USER_ID, ARCHIVE_OWNER_ID, false);
      if (!started) {
        console.log("[ERROR] Failed to start reassignment.");
        return;
      }
      await waitReassignmentComplete(EMPLOYEE_USER_ID);
      console.log("[INFO] Reassignment completed.");
    } else {
      console.log("[INFO] Reassignment not required.");
    }

    // Step 3
    const moved = await moveFolder(EMPLOYEE_WORKSPACE_FOLDER_ID, ARCHIVE_FOLDER_ID);
    if (!moved) {
      console.log("[ERROR] Failed to move employee workspace folder to archive.");
      return;
    }
    console.log("[INFO] Employee workspace moved to archive.");

    // Step 4
    const accessOk = await applyArchiveAccess(EMPLOYEE_WORKSPACE_FOLDER_ID, ARCHIVE_OWNER_ID, HR_GROUP_ID);
    console.log(accessOk ? "[INFO] Archive access rules applied." : "[WARN] Failed to apply archive access rules.");

    // Step 5
    const to = new Date();
    const from = new Date(to.getTime() - 7 * 24 * 60 * 60 * 1000);
    const iso = (d: Date) => d.toISOString().slice(0, 19); // YYYY-MM-DDTHH:MM:SS

    const events = await getAuditEvents(iso(from), iso(to));
    printOffboardingReport({
      userId: EMPLOYEE_USER_ID,
      archivedFolderId: EMPLOYEE_WORKSPACE_FOLDER_ID,
      auditEventsCount: events.length,
    });

    console.log("[INFO] Offboarding completed.");
  })().catch((e) => console.log("[ERROR]", e?.message || e));
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import time
  import requests
  from datetime import datetime, timedelta, timezone
  from typing import Any, Dict, List, Optional

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  EMPLOYEE_USER_ID = "EMPLOYEE-USER-ID"
  EMPLOYEE_WORKSPACE_FOLDER_ID = 123456
  ARCHIVE_FOLDER_ID = 654321
  ARCHIVE_OWNER_ID = "ARCHIVE-OWNER-USER-ID"
  HR_GROUP_ID = ""  # optional

  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
  }

  def request_json(path: str, method: str = "GET", json_body: Optional[Dict[str, Any]] = None) -> Optional[Dict[str, Any]]:
    url = f"{API_HOST}{path}"

    try:
      r = requests.request(method.upper(), url, headers=HEADERS, json=json_body)
    except Exception as e:
      print(f"[ERROR] Request failed: {method} {url} -> {e}")
      return None

    if r.status_code < 200 or r.status_code >= 300:
      print(f"[ERROR] {method} {url} -> {r.status_code} {r.text}")
      return None

    try:
      return r.json()
    except Exception:
      print(f"[ERROR] Non-JSON response: {method} {url}")
      return None

  def get_response_node(data: Any) -> Any:
    if isinstance(data, dict) and "response" in data:
      return data.get("response")
    return data

  # Step 1: Disable the user
  def disable_user(user_id: str) -> bool:
    payload = {"disabled": True}
    data = request_json(f"/api/2.0/people/{user_id}/status", "PUT", json_body=payload)
    return data is not None

  # Step 2: Reassign the user content to the archive owner
  def check_reassignment_needed(user_id: str, target_type: str = "User") -> bool:
    params = {"UserId": user_id, "Type": target_type}
    url = f"{API_HOST}/api/2.0/people/reassign/necessary"
    r = requests.get(url, headers=HEADERS, params=params)
    if r.status_code != 200:
      print(f"[ERROR] GET {url} -> {r.status_code} {r.text}")
      return False
    try:
      data = r.json()
    except Exception:
      return False
    return bool(data.get("response", False))

  def start_reassignment(from_user_id: str, to_user_id: str, delete_profile: bool = False) -> bool:
    payload = {"fromUserId": from_user_id, "toUserId": to_user_id, "deleteProfile": delete_profile}
    data = request_json("/api/2.0/people/reassign/start", "POST", json_body=payload)
    return data is not None

  def wait_reassignment_complete(user_id: str) -> bool:
    while True:
      data = request_json(f"/api/2.0/people/reassign/progress/{user_id}", "GET")
      info = get_response_node(data) or {}
      pct = info.get("percentage", 0)
      done = bool(info.get("isCompleted", False))

      print(f"[INFO] Reassign progress: {pct}%")
      if done:
        return True

      time.sleep(2)

  # Step 3: Move the employee workspace folder into the archive folder
  def move_folder(folder_id: int, dest_folder_id: int) -> bool:
    payload = {
      "folderIds": [folder_id],
      "destFolderId": dest_folder_id,
      "deleteAfter": True,
      "content": True,
    }

    candidates = [
      "/api/2.0/files/fileops/move",
      "/api/2.0/files/folderops/move",
    ]

    for p in candidates:
      data = request_json(p, "PUT", json_body=payload)
      if data is not None:
        return True

    return False

  # Step 4: Apply archive access rules to the archived folder
  def apply_archive_access(folder_id: int, archive_owner_id: str, hr_group_id: str) -> bool:
    entries: List[Dict[str, Any]] = [
      {"id": str(archive_owner_id), "isGroup": False, "access": 4},
    ]
    if hr_group_id:
      entries.append({"id": str(hr_group_id), "isGroup": True, "access": 1})

    payload = {"entries": entries}

    candidates = [
      f"/api/2.0/files/folder/{folder_id}/share",
      f"/api/2.0/files/folder/{folder_id}/access",
    ]

    for p in candidates:
      data = request_json(p, "PUT", json_body=payload)
      if data is not None:
        return True

    return False

  # Step 5: Produce an offboarding report (audit + optional export placeholder)
  def format_audit_dt(dt: datetime) -> str:
    if dt.tzinfo is None:
      dt = dt.replace(tzinfo=timezone.utc)
    dt = dt.astimezone(timezone.utc)
    return dt.strftime("%Y-%m-%dT%H:%M:%S")

  def get_audit_events(dt_from: datetime, dt_to: datetime) -> List[Dict[str, Any]]:
    params = {"from": format_audit_dt(dt_from), "to": format_audit_dt(dt_to)}
    url = f"{API_HOST}/api/2.0/security/audit/events/filter"
    r = requests.get(url, headers=HEADERS, params=params)
    if r.status_code != 200:
      print(f"[WARN] Audit request failed: {r.status_code} {r.text}")
      return []
    try:
      data = r.json()
    except Exception:
      return []
    events = data.get("response", [])
    return events if isinstance(events, list) else []

  def print_offboarding_report(user_id: str, archived_folder_id: int, audit_events_count: int) -> None:
    folder_link = f"{API_HOST}/products/files/#folder={archived_folder_id}"

    print("--- OFFBOARDING REPORT ---")
    print(f"User: {user_id}")
    print(f"Archived folder: {archived_folder_id}")
    print(f"Folder link: {folder_link}")
    print(f"Audit events (time range): {audit_events_count}")
    print("Export: not included in this example (depends on your internal archiving workflow).")
    print("--- END OF REPORT ---")

  def offboard_employee() -> None:
    print(f"[INFO] Offboarding started. userId={EMPLOYEE_USER_ID}")

    # Step 1
    if disable_user(EMPLOYEE_USER_ID):
      print("[INFO] User disabled.")
    else:
      print("[WARN] Failed to disable user.")

    # Step 2
    if check_reassignment_needed(EMPLOYEE_USER_ID):
      if not start_reassignment(EMPLOYEE_USER_ID, ARCHIVE_OWNER_ID, delete_profile=False):
        print("[ERROR] Failed to start reassignment.")
        return
      wait_reassignment_complete(EMPLOYEE_USER_ID)
      print("[INFO] Reassignment completed.")
    else:
      print("[INFO] Reassignment not required.")

    # Step 3
    if not move_folder(EMPLOYEE_WORKSPACE_FOLDER_ID, ARCHIVE_FOLDER_ID):
      print("[ERROR] Failed to move employee workspace folder to archive.")
      return
    print("[INFO] Employee workspace moved to archive.")

    # Step 4
    if apply_archive_access(EMPLOYEE_WORKSPACE_FOLDER_ID, ARCHIVE_OWNER_ID, HR_GROUP_ID):
      print("[INFO] Archive access rules applied.")
    else:
      print("[WARN] Failed to apply archive access rules.")

    # Step 5
    now = datetime.now(timezone.utc)
    week_ago = now - timedelta(days=7)
    events = get_audit_events(week_ago, now)
    print_offboarding_report(EMPLOYEE_USER_ID, EMPLOYEE_WORKSPACE_FOLDER_ID, len(events))

    print("[INFO] Offboarding completed.")

  if __name__ == "__main__":
    offboard_employee()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Disable the employee account

The script disables the employee account to prevent further access to DocSpace.


This is done using PUT [/api/2.0/people/{userId}](/docspace/api-backend/usage-api/update-member) with body `{ "disabled": true }`.

After this step, the user can no longer sign in, but their files remain available.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function disableUser(userId: string) {
    const payload = { disabled: true };
    const data = await requestJson(`/api/2.0/people/${userId}`, "PUT", payload);
    return Boolean(data);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def disable_user(user_id: str) -> bool:
    payload = {"disabled": True}
    data = request_json(f"/api/2.0/people/{user_id}", "PUT", json_body=payload)
    return data is not None
  ```

  </TabItem>
</Tabs>

## Step 2: Reassign the employee's content

Before archiving the workspace, the script transfers ownership of the employee's files to an archive owner account.

The reassignment is started using POST [/api/2.0/people/reassign/start](/docspace/api-backend/usage-api/start-reassign).

The script waits until the reassignment is completed before continuing.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function checkReassignmentNeeded(userId: string, targetType: string = "User") {
    const params = new URLSearchParams({ UserId: userId, Type: targetType });
    const data = await requestJson(`/api/2.0/people/reassign/necessary?${params}`, "GET");
    const necessary = Boolean(data?.response ?? false);
    return necessary;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def check_reassignment_needed(user_id: str, target_type: str = "User") -> bool:
    params = {"UserId": user_id, "Type": target_type}
    url = f"{API_HOST}/api/2.0/people/reassign/necessary"
    r = requests.get(url, headers=HEADERS, params=params)
    if r.status_code != 200:
      print(f"[ERROR] GET {url} -> {r.status_code} {r.text}")
      return False
    try:
      data = r.json()
    except Exception:
      return False
    return bool(data.get("response", False))
  ```

  </TabItem>
</Tabs>

## Step 3: Move the employee workspace to the archive

The employee's personal workspace folder is moved to a dedicated archive location.

This is done using PUT [/api/2.0/files/fileops/move](/docspace/api-backend/usage-api/move-batch-items) with the destination folder set to the archive folder ID.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function moveFolder(folderId: number, destFolderId: number) {
    const payload = {
      folderIds: [folderId],
      destFolderId,
      deleteAfter: true,
      content: true,
    };

    // This is the same "fileops" family used in working move examples.
    const candidates = [
      "/api/2.0/files/fileops/move",
      "/api/2.0/files/folderops/move",
    ];

    for (const p of candidates) {
      const data = await requestJson(p, "PUT", payload);
      if (data) return true;
    }

    return false;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def move_folder(folder_id: int, dest_folder_id: int) -> bool:
    payload = {
      "folderIds": [folder_id],
      "destFolderId": dest_folder_id,
      "deleteAfter": True,
      "content": True,
    }

    candidates = [
      "/api/2.0/files/fileops/move",
      "/api/2.0/files/folderops/move",
    ]

    for p in candidates:
      data = request_json(p, "PUT", json_body=payload)
      if data is not None:
        return True

    return False
  ```

  </TabItem>
</Tabs>

## Step 4: Apply archive access rules

After the workspace is archived, the script updates access rules so that:

- the archive owner has full access,
- other users lose access.

This is applied using PUT [/api/2.0/files/rooms/{roomId}/share](/docspace/api-backend/usage-api/set-room-security) (or the corresponding folder access method, depending on the workspace type).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function applyArchiveAccess(folderId: number, archiveOwnerId: string, hrGroupId: string) {
    const entries: any[] = [
      { id: String(archiveOwnerId), isGroup: false, access: 4 }, // full access for archive owner
    ];

    if (hrGroupId) {
      entries.push({ id: String(hrGroupId), isGroup: true, access: 1 }); // read-only for HR
    }

    const payload = { entries };

    // Different builds may expose folder access via different endpoints.
    const candidates = [
      `/api/2.0/files/folder/${folderId}/share`,
      `/api/2.0/files/folder/${folderId}/access`,
    ];

    for (const p of candidates) {
      const data = await requestJson(p, "PUT", payload);
      if (data) return true;
    }

    return false;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def apply_archive_access(folder_id: int, archive_owner_id: str, hr_group_id: str) -> bool:
    entries: List[Dict[str, Any]] = [
      {"id": str(archive_owner_id), "isGroup": False, "access": 4},
    ]
    if hr_group_id:
      entries.append({"id": str(hr_group_id), "isGroup": True, "access": 1})

    payload = {"entries": entries}

    candidates = [
      f"/api/2.0/files/folder/{folder_id}/share",
      f"/api/2.0/files/folder/{folder_id}/access",
    ]

    for p in candidates:
      data = request_json(p, "PUT", json_body=payload)
      if data is not None:
        return True

    return False
  ```

  </TabItem>
</Tabs>

## Step 5: Generate an offboarding summary

Finally, the script retrieves recent audit data related to the employee using [/api/2.0/security/audit/events/filter](/docspace/api-backend/usage-api/get-audit-events-by-filter).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getAuditEvents(dtFromIso: string, dtToIso: string) {
    const params = new URLSearchParams({ from: dtFromIso, to: dtToIso });
    const data = await requestJson(`/api/2.0/security/audit/events/filter?${params}`, "GET");
    const events = getResponseNode(data);
    return Array.isArray(events) ? events : [];
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def format_audit_dt(dt: datetime) -> str:
    if dt.tzinfo is None:
      dt = dt.replace(tzinfo=timezone.utc)
    dt = dt.astimezone(timezone.utc)
    return dt.strftime("%Y-%m-%dT%H:%M:%S")
  ```

  </TabItem>
</Tabs>