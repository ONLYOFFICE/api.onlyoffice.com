import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Detect suspicious bulk file changes and temporarily restrict user accounts

This example shows how to detect potentially suspicious user behavior in ONLYOFFICE DocSpace by analyzing audit logs and automatically applying temporary restrictions.
The workflow monitors recent file-related activity, identifies users who modify an unusually large number of files in a short time window, sends a security alert, and updates the account status of the affected users.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  import express from "express";

  // =========================
  // Config
  // =========================

  const API_HOST = "https://yourportal.onlyoffice.com";
  const API_KEY = "YOUR_API_KEY";

  // Detection rules
  const WINDOW_MINUTES = 10;
  const FILE_CHANGE_THRESHOLD = 20;

  // Where to notify (placeholder)
  const SECURITY_CONTACT = "security-team@yourcompany.com";

  const HEADERS: Record<string, string> = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  // =========================
  // Helpers
  // =========================

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

  function toIso(dt: Date) {
    return dt.toISOString();
  }

  // =========================
  // Step 1: Load audit events
  // =========================

  async function getRecentAuditEvents(dtFrom: Date, dtTo: Date) {
    const params = new URLSearchParams({
      from: toIso(dtFrom),
      to: toIso(dtTo),
    });

    const data = await requestJson(`/api/2.0/security/audit/events/filter?${params.toString()}`, "GET");
    const resp = data && typeof data === "object" ? (data.response ?? null) : null;

    return Array.isArray(resp) ? resp : [];
  }

  // =========================
  // Step 2: Detect anomalies
  // =========================

  function isFileChangeEvent(evt: any) {
    const entityType = String(evt?.entityType ?? evt?.targetType ?? evt?.entity ?? "").toLowerCase();
    const action = String(evt?.action ?? "").toLowerCase();

    const isFileEntity = entityType.includes("file") || entityType.includes("document");

    const isChangeAction =
      action.includes("edit") ||
      action.includes("update") ||
      action.includes("save") ||
      action.includes("modify") ||
      action.includes("upload") ||
      action.includes("create") ||
      action.includes("version");

    return isFileEntity && isChangeAction;
  }

  function buildUserFileChangeMap(events: any[]) {
    const result = new Map<string, Set<string>>();

    for (const evt of events) {
      if (!isFileChangeEvent(evt)) continue;

      const userId = String(evt?.userId ?? evt?.account ?? "").trim();
      const fileId = String(evt?.entityId ?? evt?.fileId ?? evt?.targetId ?? "").trim();

      if (!userId || !fileId) continue;

      if (!result.has(userId)) result.set(userId, new Set());
      result.get(userId)!.add(fileId);
    }

    return result;
  }

  function detectAnomalies(userMap: Map<string, Set<string>>) {
    const anomalies: { user_id: string; file_count: number }[] = [];

    for (const [userId, fileSet] of userMap.entries()) {
      const count = fileSet.size;
      if (count > FILE_CHANGE_THRESHOLD) {
        anomalies.push({ user_id: userId, file_count: count });
      }
    }

    return anomalies;
  }

  // =========================
  // Step 3: Alert + disable users (Update a user)
  // =========================

  function sendSecurityAlert(anomalies: { user_id: string; file_count: number }[]) {
    console.log("--- SECURITY ALERT ---");
    console.log(`Recipient: ${SECURITY_CONTACT}`);
    console.log(`Window: last ${WINDOW_MINUTES} minutes`);
    console.log(`Threshold: > ${FILE_CHANGE_THRESHOLD} unique files`);
    console.log("Suspicious users:");

    for (const a of anomalies) {
      console.log(`- userId=${a.user_id}, changed_files=${a.file_count}`);
    }
  }

  async function disableUser(userId: string) {
    // Update a user
    // PUT /api/2.0/people/:userid
    // Body includes "disable": true
    const payload = {
      disable: true,
      comment: `Auto-disabled: changed > ${FILE_CHANGE_THRESHOLD} files in ${WINDOW_MINUTES} minutes`,
    };

    const data = await requestJson(`/api/2.0/people/${encodeURIComponent(userId)}`, "PUT", payload);
    return Boolean(data);
  }

  async function disableSuspiciousUsers(anomalies: { user_id: string; file_count: number }[]) {
    if (!anomalies.length) return;

    sendSecurityAlert(anomalies);

    for (const a of anomalies) {
      const ok = await disableUser(a.user_id);
      if (ok) console.log(`[OK] User disabled: ${a.user_id}`);
      else console.log(`[ERROR] Failed to disable user: ${a.user_id}`);
    }
  }

  // =========================
  // Main runner
  // =========================

  async function runDetection() {
    const now = new Date();
    const dtFrom = new Date(now.getTime() - WINDOW_MINUTES * 60 * 1000);

    console.log(`[INFO] Checking anomalous activity between ${toIso(dtFrom)} and ${toIso(now)}...`);

    const events = await getRecentAuditEvents(dtFrom, now);
    if (!events.length) {
      console.log("[INFO] No audit events in this window.");
      return;
    }

    const userMap = buildUserFileChangeMap(events);
    const anomalies = detectAnomalies(userMap);

    if (!anomalies.length) {
      console.log(`[INFO] No users exceeded the threshold of ${FILE_CHANGE_THRESHOLD} files.`);
      return;
    }

    console.log(`[INFO] Detected ${anomalies.length} user(s) with anomalous activity.`);
    await disableSuspiciousUsers(anomalies);

    console.log("[INFO] Anomalous activity handling completed.");
  }

  // =========================
  // Optional: expose as an HTTP endpoint (run on demand)
  // =========================

  const app = express();
  app.use(express.json({ limit: "1mb" }));

  app.get("/security/scan", async (_req, res) => {
    try {
      await runDetection();
      return res.status(200).json({ status: "ok" });
    } catch (e: any) {
      console.log("[ERROR] Scan failed:", e?.message || e);
      return res.status(500).json({ status: "error" });
    }
  });

  app.listen(3000, () => {
    console.log("Security scan endpoint: http://localhost:3000/security/scan");
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  from datetime import datetime, timedelta, timezone
  from typing import Any, Dict, List, Optional, Set
  from urllib.parse import urlencode

  import requests
  from flask import Flask, jsonify

  # =========================
  # Config
  # =========================

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  WINDOW_MINUTES = 10
  FILE_CHANGE_THRESHOLD = 20

  SECURITY_CONTACT = "security-team@yourcompany.com"

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  # =========================
  # Helpers
  # =========================

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
      print(f"[ERROR] Failed to parse JSON from {url}")
      return None

  # =========================
  # Step 1: Load audit events
  # =========================

  def get_recent_audit_events(dt_from: datetime, dt_to: datetime) -> List[dict]:
    params = {"from": dt_from.isoformat(), "to": dt_to.isoformat()}
    query = urlencode(params)

    data = docspace_request(f"/api/2.0/security/audit/events/filter?{query}", "GET")
    if not isinstance(data, dict):
      return []

    events = data.get("response", [])
    return events if isinstance(events, list) else []

  # =========================
  # Step 2: Detect anomalies
  # =========================

  def is_file_change_event(evt: Dict[str, Any]) -> bool:
    entity_type = str(evt.get("entityType") or evt.get("targetType") or evt.get("entity") or "").lower()
    action = str(evt.get("action") or "").lower()

    is_file_entity = ("file" in entity_type) or ("document" in entity_type)

    is_change_action = any(
      k in action
      for k in ["edit", "update", "save", "modify", "upload", "create", "version"]
    )

    return is_file_entity and is_change_action

  def build_user_file_change_map(events: List[dict]) -> Dict[str, Set[str]]:
    result: Dict[str, Set[str]] = {}

    for evt in events:
      if not is_file_change_event(evt):
        continue

      user_id = str(evt.get("userId") or evt.get("account") or "").strip()
      file_id = str(evt.get("entityId") or evt.get("fileId") or evt.get("targetId") or "").strip()

      if not user_id or not file_id:
        continue

      if user_id not in result:
        result[user_id] = set()

      result[user_id].add(file_id)

    return result

  def detect_anomalies(user_map: Dict[str, Set[str]]) -> List[Dict[str, Any]]:
    anomalies: List[Dict[str, Any]] = []

    for user_id, file_set in user_map.items():
      count = len(file_set)
      if count > FILE_CHANGE_THRESHOLD:
        anomalies.append({"user_id": user_id, "file_count": count})

    return anomalies

  # =========================
  # Step 3: Alert + disable users (Update a user)
  # =========================

  def send_security_alert(anomalies: List[Dict[str, Any]]) -> None:
    print("--- SECURITY ALERT ---")
    print(f"Recipient: {SECURITY_CONTACT}")
    print(f"Window: last {WINDOW_MINUTES} minutes")
    print(f"Threshold: > {FILE_CHANGE_THRESHOLD} unique files")
    print("Suspicious users:")

    for a in anomalies:
      print(f'- userId={a["user_id"]}, changed_files={a["file_count"]}')

  def disable_user(user_id: str) -> bool:
    # Update a user
    # PUT /api/2.0/people/:userid
    payload = {
      "disable": True,
      "comment": f"Auto-disabled: changed > {FILE_CHANGE_THRESHOLD} files in {WINDOW_MINUTES} minutes",
    }

    data = docspace_request(f"/api/2.0/people/{user_id}", method="PUT", json_body=payload)
    return data is not None

  def disable_suspicious_users(anomalies: List[Dict[str, Any]]) -> None:
    if not anomalies:
      return

    send_security_alert(anomalies)

    for a in anomalies:
      user_id = a["user_id"]
      ok = disable_user(user_id)
      if ok:
        print(f"[OK] User disabled: {user_id}")
      else:
        print(f"[ERROR] Failed to disable user: {user_id}")

  # =========================
  # Main runner
  # =========================

  def run_detection() -> None:
    now = datetime.now(timezone.utc)
    dt_from = now - timedelta(minutes=WINDOW_MINUTES)

    print(f"[INFO] Checking anomalous activity between {dt_from.isoformat()} and {now.isoformat()}...")

    events = get_recent_audit_events(dt_from, now)
    if not events:
      print("[INFO] No audit events in this window.")
      return

    user_map = build_user_file_change_map(events)
    anomalies = detect_anomalies(user_map)

    if not anomalies:
      print(f"[INFO] No users exceeded the threshold of {FILE_CHANGE_THRESHOLD} files.")
      return

    print(f"[INFO] Detected {len(anomalies)} user(s) with anomalous activity.")
    disable_suspicious_users(anomalies)

    print("[INFO] Anomalous activity handling completed.")

  # =========================
  # Optional: expose as an HTTP endpoint (run on demand)
  # =========================

  app = Flask(__name__)

  @app.get("/security/scan")
  def security_scan():
    try:
      run_detection()
      return jsonify({"status": "ok"}), 200
    except Exception as e:
      print("[ERROR] Scan failed:", e)
      return jsonify({"status": "error"}), 500

  if __name__ == "__main__":
    print("Security scan endpoint: http://localhost:3000/security/scan")
    app.run(host="0.0.0.0", port=3000)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Load audit events for a short time window

The script calculates a time range covering the last `WINDOW_MINUTES` and sends a GET request to [/api/2.0/security/audit/events/filter](/docspace/api-backend/usage-api/get-audit-events-by-filter) using the from and to query parameters.
The response returns audit events recorded during this period.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getRecentAuditEvents(dtFrom: Date, dtTo: Date) {
    const params = new URLSearchParams({
      from: toIso(dtFrom),
      to: toIso(dtTo),
    });

    const data = await requestJson(
      `/api/2.0/security/audit/events/filter?${params.toString()}`,
      'GET'
    );

    const resp = data && typeof data === 'object' ? (data.response ?? null) : null;

    if (!Array.isArray(resp)) return [];
    return resp;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_recent_audit_events(dt_from: datetime, dt_to: datetime) -> List[dict]:
    params = {"from": dt_from.isoformat(), "to": dt_to.isoformat()}
    query = urlencode(params)

    data = docspace_request(f"/api/2.0/security/audit/events/filter?{query}", "GET")
    if not isinstance(data, dict):
      return []

    events = data.get("response", [])
    return events if isinstance(events, list) else []
  ```

  </TabItem>
</Tabs>

## Step 2: Detect users with suspicious file-change volume

From the loaded audit events, the script keeps only actions related to file or document changes (for example, edit, update, upload, create, or version events).

For each user:
- a set of distinct file IDs is collected,
- the total number of unique files modified by the user is calculated.
If the number exceeds `FILE_CHANGE_THRESHOLD`, the user is marked as suspicious and added to the anomalies list.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function buildUserFileChangeMap(events: any[]) {
    const result = new Map<string, Set<string>>();

    for (const evt of events) {
      if (!isFileChangeEvent(evt)) continue;

      const userId = String(evt?.userId ?? evt?.account ?? '');
      const fileId = String(evt?.entityId ?? evt?.fileId ?? evt?.targetId ?? '');

      if (!userId || !fileId) continue;

      if (!result.has(userId)) result.set(userId, new Set());
      result.get(userId)!.add(fileId);
    }

    return result;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def is_file_change_event(evt: Dict[str, Any]) -> bool:
    entity_type = str(
      evt.get("entityType") or evt.get("targetType") or evt.get("entity") or ""
    ).lower()

    action = str(evt.get("action") or "").lower()

    is_file_entity = ("file" in entity_type) or ("document" in entity_type)

    is_change_action = any(
      k in action
      for k in ["edit", "update", "save", "modify", "upload", "create", "version"]
    )

    return is_file_entity and is_change_action
  ```

  </TabItem>
</Tabs>

## Step 3: Alert and restrict accounts

If suspicious users are detected:
1.	A security alert is generated (placeholder), containing:
  - user IDs,
  - number of files changed,
  - configured threshold.
2.	A PUT request is sent to [/api/2.0/people/:userid](/docspace/api-backend/usage-api/update-member) with the list of suspicious user IDs.
This updates the account status to `RESTRICTED_STATUS`, temporarily limiting further activity until the incident is reviewed.


<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function sendSecurityAlert(anomalies: { user_id: string; file_count: number }[]) {
    console.log("--- SECURITY ALERT ---");
    console.log(`Recipient: ${SECURITY_CONTACT}`);
    console.log(`Window: last ${WINDOW_MINUTES} minutes`);
    console.log(`Threshold: > ${FILE_CHANGE_THRESHOLD} unique files`);
    console.log("Suspicious users:");

    for (const a of anomalies) {
      console.log(`- userId=${a.user_id}, changed_files=${a.file_count}`);
    }
  }

  async function disableUser(userId: string) {
    // Update a user
    // PUT /api/2.0/people/:userid
    // Body includes "disable": true
    const payload = {
      disable: true,
      comment: `Auto-disabled: changed > ${FILE_CHANGE_THRESHOLD} files in ${WINDOW_MINUTES} minutes`,
    };

    const data = await requestJson(`/api/2.0/people/${encodeURIComponent(userId)}`, "PUT", payload);
    return Boolean(data);
  }

  async function disableSuspiciousUsers(anomalies: { user_id: string; file_count: number }[]) {
    if (!anomalies.length) return;

    sendSecurityAlert(anomalies);

    for (const a of anomalies) {
      const ok = await disableUser(a.user_id);
      if (ok) console.log(`[OK] User disabled: ${a.user_id}`);
      else console.log(`[ERROR] Failed to disable user: ${a.user_id}`);
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def send_security_alert(anomalies: List[Dict[str, Any]]) -> None:
    print("--- SECURITY ALERT ---")
    print(f"Recipient: {SECURITY_CONTACT}")
    print(f"Window: last {WINDOW_MINUTES} minutes")
    print(f"Threshold: > {FILE_CHANGE_THRESHOLD} unique files")
    print("Suspicious users:")

    for a in anomalies:
      print(f'- userId={a["user_id"]}, changed_files={a["file_count"]}')

  def disable_user(user_id: str) -> bool:
    # Update a user
    # PUT /api/2.0/people/:userid
    payload = {
      "disable": True,
      "comment": f"Auto-disabled: changed > {FILE_CHANGE_THRESHOLD} files in {WINDOW_MINUTES} minutes",
    }

    data = docspace_request(f"/api/2.0/people/{user_id}", method="PUT", json_body=payload)
    return data is not None

  def disable_suspicious_users(anomalies: List[Dict[str, Any]]) -> None:
    if not anomalies:
      return

    send_security_alert(anomalies)

    for a in anomalies:
      user_id = a["user_id"]
      ok = disable_user(user_id)
      if ok:
        print(f"[OK] User disabled: {user_id}")
      else:
        print(f"[ERROR] Failed to disable user: {user_id}")
  ```

  </TabItem>
</Tabs>