import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Monitor changes in critical folders and notify the department owner

This example shows how to monitor a critical folder (for example, **Compliance**) in ONLYOFFICE DocSpace and notify the department owner whenever a file in that folder is changed.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  import http from "http";
  import crypto from "crypto";

  // DocSpace configuration
  const API_HOST = "https://yourportal.onlyoffice.com";
  const API_KEY = "YOUR_API_KEY";

  // If WEBHOOK_SECRET is empty, signature validation is skipped.
  const WEBHOOK_SECRET = "your_webhook_secret";

  // Folder (or room root folder) that must be monitored
  const COMPLIANCE_FOLDER_ID = 123456;

  // Department owner (recipient)
  const DEPARTMENT_OWNER_EMAIL = "compliance.owner@company.com";

  const HEADERS: Record<string, string> = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  function verifySignature(secretKey: string, rawBody: Buffer, signatureHeader?: string): boolean {
    // If WEBHOOK_SECRET is empty, the signature check is skipped.
    if (!secretKey) return true;

    if (!signatureHeader || !signatureHeader.startsWith("sha256=")) return false;

    const received = signatureHeader.split("=", 2)[1]?.trim()?.toLowerCase();
    if (!received) return false;

    const expected = crypto.createHmac("sha256", secretKey).update(rawBody).digest("hex").toLowerCase();
    if (received.length !== expected.length) return false;

    return crypto.timingSafeEqual(Buffer.from(received), Buffer.from(expected));
  }

  async function docspaceRequest(path: string, method: string = "GET", jsonBody: any = null) {
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

  function getResponseNode(data: any) {
    if (data && typeof data === "object" && "response" in data) return data.response;
    return data;
  }

  // Step 1: Extract fileId and userId from the webhook payload
  function extractFileAndUser(payload: any): { fileId: number | null; userId: number | null } {
    const entity = payload?.entity || payload?.data || {};
    const trigger = payload?.trigger || {};

    // Keep extraction tolerant: different integrations can format payload differently
    const entityType = String(trigger?.entity || entity?.entityType || entity?.type || "").toLowerCase();
    const action = String(trigger?.action || entity?.action || entity?.event || "").toLowerCase();

    // Allow several “file changed” verbs
    const allowedEntity = entityType === "file" || entityType === "document" || entityType === "";
    const allowedAction = ["update", "change", "save", "edit", "modify"].some((x) => action.includes(x)) || action === "";

    if (!allowedEntity || !allowedAction) return { fileId: null, userId: null };

    const fileIdRaw = entity?.fileId ?? entity?.id ?? payload?.fileId;
    const userIdRaw = entity?.userId ?? trigger?.userId ?? payload?.userId ?? null;

    const fileId = fileIdRaw != null ? Number(fileIdRaw) : null;
    const userId = userIdRaw != null ? Number(userIdRaw) : null;

    return {
      fileId: Number.isFinite(fileId as number) ? (fileId as number) : null,
      userId: Number.isFinite(userId as number) ? (userId as number) : null,
    };
  }

  // Step 2: Load file info and check if it belongs to COMPLIANCE_FOLDER_ID
  async function getFileInfo(fileId: number): Promise<{
    title: string;
    folderId: number | null;
    webUrl: string | null;
  } | null> {
    const data = await docspaceRequest(`/api/2.0/files/file/${fileId}`, "GET");
    const file = getResponseNode(data);

    if (!file || typeof file !== "object") return null;

    const title = String(file.title || "file");
    const folderId =
      typeof file.folderId === "number"
        ? file.folderId
        : typeof file.parentId === "number"
        ? file.parentId
        : null;

    // Prefer URL fields returned by API (if present)
    const webUrl = (file.webUrl || file.shortWebUrl || file.viewUrl || null) as string | null;

    return { title, folderId, webUrl };
  }

  async function getUserInfo(userId: number): Promise<{ name: string; email: string } | null> {
    const data = await docspaceRequest(`/api/2.0/people/${userId}`, "GET");
    const user = getResponseNode(data);

    if (!user || typeof user !== "object") return null;

    const first = String(user.firstName || user.firstname || "");
    const last = String(user.lastName || user.lastname || "");
    const email = String(user.email || "");

    const name = `${first} ${last}`.trim() || String(user.displayName || email || "User");
    return { name, email };
  }

  // Step 3: Send a notification (stub)
  async function sendNotification(params: {
    to: string;
    fileId: number;
    fileTitle: string;
    fileUrl?: string | null;
    changedBy?: string | null;
  }) {
    const { to, fileId, fileTitle, fileUrl, changedBy } = params;

    console.log("--- COMPLIANCE NOTIFICATION ---");
    console.log(`To: ${to}`);
    console.log("Subject: File changed in Compliance folder");

    const lines: string[] = [];
    lines.push(`File: "${fileTitle}" (id=${fileId})`);
    if (fileUrl) lines.push(`Link: ${fileUrl}`);
    if (changedBy) lines.push(`Changed by: ${changedBy}`);
    lines.push("Action: Please review the recent changes.");

    console.log("Body:\n" + lines.join("\n"));

    // Replace with SMTP / mail provider / Slack / Teams integration
  }

  // Step 4: Orchestrate webhook handling
  async function handleWebhookPayload(payload: any) {
    const { fileId, userId } = extractFileAndUser(payload);

    if (fileId === null) {
      console.log("[INFO] Webhook is not a file-change event, skipping.");
      return;
    }

    const fileInfo = await getFileInfo(fileId);
    if (!fileInfo) {
      console.log(`[WARN] Could not load file metadata for fileId=${fileId}`);
      return;
    }

    if (fileInfo.folderId !== COMPLIANCE_FOLDER_ID) {
      console.log(
        `[INFO] File ${fileId} is not in Compliance folder (folderId=${fileInfo.folderId}), skipping.`
      );
      return;
    }

    let changedBy: string | null = null;
    if (userId !== null) {
      const user = await getUserInfo(userId);
      if (user) {
        changedBy = user.email ? `${user.name} <${user.email}>` : user.name;
      }
    }

    await sendNotification({
      to: DEPARTMENT_OWNER_EMAIL,
      fileId,
      fileTitle: fileInfo.title,
      fileUrl: fileInfo.webUrl,
      changedBy,
    });
  }

  // Minimal HTTP webhook server
  const PORT = 3000;

  const server = http.createServer((req, res) => {
    // DocSpace may send HEAD requests to validate the webhook URL
    if (req.method === "HEAD" && req.url === "/docspace/webhook") {
      res.statusCode = 200;
      res.end();
      return;
    }

    if (req.method !== "POST" || req.url !== "/docspace/webhook") {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }

    const chunks: Buffer[] = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", async () => {
      const rawBody = Buffer.concat(chunks);
      const signatureHeader = req.headers["x-docspace-signature-256"] as string | undefined;

      if (!verifySignature(WEBHOOK_SECRET, rawBody, signatureHeader)) {
        console.log("[WARN] Invalid webhook signature.");
        res.statusCode = 401;
        res.end("Invalid signature");
        return;
      }

      let payload: any;
      try {
        payload = JSON.parse(rawBody.toString("utf8"));
      } catch {
        res.statusCode = 400;
        res.end("Bad JSON");
        return;
      }

      try {
        await handleWebhookPayload(payload);
        res.statusCode = 200;
        res.end("OK");
      } catch (e: any) {
        console.log("[ERROR] Webhook handler error:", e?.message || e);
        res.statusCode = 500;
        res.end("Internal error");
      }
    });
  });

  server.listen(PORT, () => {
    console.log(`Webhook listener: http://localhost:${PORT}/docspace/webhook`);
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  from flask import Flask, request, jsonify
  import hmac
  import hashlib
  import requests
  import os
  from typing import Optional, Dict, Any, Tuple

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # If WEBHOOK_SECRET is empty, signature validation is skipped.
  WEBHOOK_SECRET = "your_webhook_secret"

  COMPLIANCE_FOLDER_ID = 123456
  DEPARTMENT_OWNER_EMAIL = "compliance.owner@company.com"

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  app = Flask(__name__)

  def verify_signature(secret_key: str, raw_body: bytes, signature_header: Optional[str]) -> bool:
    # If WEBHOOK_SECRET is empty, the signature check is skipped.
    if not secret_key:
      return True

    if not signature_header or not signature_header.startswith("sha256="):
      return False

    received = signature_header.split("=", 1)[1].strip().lower()
    expected = hmac.new(secret_key.encode("utf-8"), raw_body, hashlib.sha256).hexdigest().lower()
    return hmac.compare_digest(received, expected)

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

  def get_response_node(data: Any) -> Any:
    if isinstance(data, dict) and "response" in data:
      return data.get("response")
    return data

  # Step 1: Extract fileId and userId from payload
  def extract_file_and_user(payload: Dict[str, Any]) -> Tuple[Optional[int], Optional[int]]:
    entity = payload.get("entity") or payload.get("data") or {}
    trigger = payload.get("trigger") or {}

    entity_type = str(trigger.get("entity") or entity.get("entityType") or entity.get("type") or "").lower()
    action = str(trigger.get("action") or entity.get("action") or entity.get("event") or "").lower()

    allowed_entity = entity_type in ("file", "document", "")
    allowed_action = (action == "") or any(x in action for x in ["update", "change", "save", "edit", "modify"])

    if not allowed_entity or not allowed_action:
      return None, None

    file_id_raw = entity.get("fileId") or entity.get("id") or payload.get("fileId")
    user_id_raw = entity.get("userId") or trigger.get("userId") or payload.get("userId")

    try:
      file_id = int(file_id_raw) if file_id_raw is not None else None
    except Exception:
      file_id = None

    try:
      user_id = int(user_id_raw) if user_id_raw is not None else None
    except Exception:
      user_id = None

    return file_id, user_id

  # Step 2: Load file metadata and check folder
  def get_file_info(file_id: int) -> Optional[Dict[str, Any]]:
    data = docspace_request(f"/api/2.0/files/file/{file_id}", "GET")
    node = get_response_node(data)

    if not isinstance(node, dict):
      return None

    title = str(node.get("title") or "file")

    folder_id = node.get("folderId")
    if folder_id is None:
      folder_id = node.get("parentId")

    try:
      folder_id_int = int(folder_id) if folder_id is not None else None
    except Exception:
      folder_id_int = None

    web_url = node.get("webUrl") or node.get("shortWebUrl") or node.get("viewUrl") or None
    web_url = str(web_url) if web_url else None

    return {"title": title, "folderId": folder_id_int, "webUrl": web_url}

  def get_user_info(user_id: int) -> Optional[Dict[str, str]]:
    data = docspace_request(f"/api/2.0/people/{user_id}", "GET")
    node = get_response_node(data)

    if not isinstance(node, dict):
      return None

    first = str(node.get("firstName") or node.get("firstname") or "")
    last = str(node.get("lastName") or node.get("lastname") or "")
    email = str(node.get("email") or "")

    name = (first + " " + last).strip() or str(node.get("displayName") or email or "User")
    return {"name": name, "email": email}

  # Step 3: Send notification (stub)
  def send_notification(to: str, file_id: int, file_title: str, file_url: Optional[str], changed_by: Optional[str]) -> None:
    print("--- COMPLIANCE NOTIFICATION ---")
    print(f"To: {to}")
    print("Subject: File changed in Compliance folder")

    lines = [
      f'File: "{file_title}" (id={file_id})',
    ]
    if file_url:
      lines.append(f"Link: {file_url}")
    if changed_by:
      lines.append(f"Changed by: {changed_by}")
    lines.append("Action: Please review the recent changes.")

    print("Body:\n" + "\n".join(lines))

    # Replace with SMTP / mail provider / Slack / Teams integration

  # Step 4: Handle webhook event end-to-end
  def handle_webhook_payload(payload: Dict[str, Any]) -> None:
    file_id, user_id = extract_file_and_user(payload)
    if file_id is None:
      print("[INFO] Webhook is not a file-change event, skipping.")
      return

    info = get_file_info(file_id)
    if not info:
      print(f"[WARN] Could not load file metadata for fileId={file_id}")
      return

    if info.get("folderId") != COMPLIANCE_FOLDER_ID:
      print(f"[INFO] File {file_id} not in Compliance folder (folderId={info.get('folderId')}), skipping.")
      return

    changed_by = None
    if user_id is not None:
      user = get_user_info(user_id)
      if user:
        changed_by = f"{user['name']} <{user['email']}>" if user["email"] else user["name"]

    send_notification(
      to=DEPARTMENT_OWNER_EMAIL,
      file_id=file_id,
      file_title=info["title"],
      file_url=info.get("webUrl"),
      changed_by=changed_by,
    )

  @app.route("/docspace/webhook", methods=["POST", "HEAD"])
  def docspace_webhook():
    # DocSpace may send HEAD requests to validate the webhook URL
    if request.method == "HEAD":
      return "", 200

    raw_body = request.data
    signature_header = request.headers.get("x-docspace-signature-256")

    if not verify_signature(WEBHOOK_SECRET, raw_body, signature_header):
      print("[WARN] Invalid webhook signature.")
      return "Invalid signature", 401

    try:
      payload = request.get_json(force=True, silent=False)
    except Exception as e:
      print("[ERROR] Failed to parse JSON:", e)
      return "Bad JSON", 400

    try:
      handle_webhook_payload(payload)
    except Exception as e:
      print("[ERROR] Webhook handler error:", e)
      return "Internal error", 500

    return jsonify({"status": "ok"}), 200

  if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3000))
    print(f"Webhook listener: http://localhost:{port}/docspace/webhook")
    app.run(host="0.0.0.0", port=port)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Receive and verify the webhook request

When a file is changed, DocSpace sends a notification to your webhook URL.

At this step, the backend:

- accepts the incoming request from DocSpace,
- checks that the request is authentic using the secret key configured in webhook settings,
- reads the event data only after successful validation.

If the request cannot be validated, the server responds with 401 and stops processing it.

DocSpace may also send HEAD requests to check that the webhook URL is reachable, so the endpoint should return 200 OK for such requests.


<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function extractFileAndUser(payload: any): { fileId: number | null; userId: number | null } {
    const entity = payload?.entity || payload?.data || {};
    const trigger = payload?.trigger || {};

    // Keep extraction tolerant: different integrations can format payload differently
    const entityType = String(trigger?.entity || entity?.entityType || entity?.type || "").toLowerCase();
    const action = String(trigger?.action || entity?.action || entity?.event || "").toLowerCase();

    // Allow several “file changed” verbs
    const allowedEntity = entityType === "file" || entityType === "document" || entityType === "";
    const allowedAction = ["update", "change", "save", "edit", "modify"].some((x) => action.includes(x)) || action === "";

    if (!allowedEntity || !allowedAction) return { fileId: null, userId: null };

    const fileIdRaw = entity?.fileId ?? entity?.id ?? payload?.fileId;
    const userIdRaw = entity?.userId ?? trigger?.userId ?? payload?.userId ?? null;

    const fileId = fileIdRaw != null ? Number(fileIdRaw) : null;
    const userId = userIdRaw != null ? Number(userIdRaw) : null;

    return {
      fileId: Number.isFinite(fileId as number) ? (fileId as number) : null,
      userId: Number.isFinite(userId as number) ? (userId as number) : null,
    };
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def extract_file_and_user(payload: Dict[str, Any]) -> Tuple[Optional[int], Optional[int]]:
    entity = payload.get("entity") or payload.get("data") or {}
    trigger = payload.get("trigger") or {}

    entity_type = str(trigger.get("entity") or entity.get("entityType") or entity.get("type") or "").lower()
    action = str(trigger.get("action") or entity.get("action") or entity.get("event") or "").lower()

    allowed_entity = entity_type in ("file", "document", "")
    allowed_action = (action == "") or any(x in action for x in ["update", "change", "save", "edit", "modify"])

    if not allowed_entity or not allowed_action:
      return None, None

    file_id_raw = entity.get("fileId") or entity.get("id") or payload.get("fileId")
    user_id_raw = entity.get("userId") or trigger.get("userId") or payload.get("userId")

    try:
      file_id = int(file_id_raw) if file_id_raw is not None else None
    except Exception:
      file_id = None

    try:
      user_id = int(user_id_raw) if user_id_raw is not None else None
    except Exception:
      user_id = None

    return file_id, user_id
  ```

  </TabItem>
</Tabs>

## Step 2: Load file metadata and check the monitored folder

For each accepted event, the script loads file metadata using GET [/api/2.0/files/file/{fileId}](/docspace/api-backend/usage-api/get-folder-info)

It reads:
- `title`: file name,
- `folderId`: where the file is stored.

If `folderId` equals `COMPLIANCE_FOLDER_ID`, the change is considered relevant. Otherwise, the event is ignored.
Once the template is selected, the integration starts room creation using POST 
In this example the minimal payload is `{ "templateId": <templateId>, "title": "<projectRoomTitle>" }`

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getFileInfo(fileId: number): Promise<{
    title: string;
    folderId: number | null;
    webUrl: string | null;
  } | null> {
    const data = await docspaceRequest(`/api/2.0/files/file/${fileId}`, "GET");
    const file = getResponseNode(data);

    if (!file || typeof file !== "object") return null;

    const title = String(file.title || "file");
    const folderId =
      typeof file.folderId === "number"
        ? file.folderId
        : typeof file.parentId === "number"
        ? file.parentId
        : null;

    // Prefer URL fields returned by API (if present)
    const webUrl = (file.webUrl || file.shortWebUrl || file.viewUrl || null) as string | null;

    return { title, folderId, webUrl };
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_file_info(file_id: int) -> Optional[Dict[str, Any]]:
    data = docspace_request(f"/api/2.0/files/file/{file_id}", "GET")
    node = get_response_node(data)

    if not isinstance(node, dict):
      return None

    title = str(node.get("title") or "file")

    folder_id = node.get("folderId")
    if folder_id is None:
      folder_id = node.get("parentId")

    try:
      folder_id_int = int(folder_id) if folder_id is not None else None
    except Exception:
      folder_id_int = None

    web_url = node.get("webUrl") or node.get("shortWebUrl") or node.get("viewUrl") or None
    web_url = str(web_url) if web_url else None

    return {"title": title, "folderId": folder_id_int, "webUrl": web_url}
  ```

  </TabItem>
</Tabs>

## Step 3: Resolve the user who changed the file (optional)

If the payload contains userId, the script calls GET [/api/2.0/people/{userId}](/docspace/api-backend/usage-api/get-folder-info) and resolves a friendly name/email to include in the notification.
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function sendNotification(params: {
    to: string;
    fileId: number;
    fileTitle: string;
    fileUrl?: string | null;
    changedBy?: string | null;
  }) {
    const { to, fileId, fileTitle, fileUrl, changedBy } = params;

    console.log("--- COMPLIANCE NOTIFICATION ---");
    console.log(`To: ${to}`);
    console.log("Subject: File changed in Compliance folder");

    const lines: string[] = [];
    lines.push(`File: "${fileTitle}" (id=${fileId})`);
    if (fileUrl) lines.push(`Link: ${fileUrl}`);
    if (changedBy) lines.push(`Changed by: ${changedBy}`);
    lines.push("Action: Please review the recent changes.");

    console.log("Body:\n" + lines.join("\n"));

    // Replace with SMTP / mail provider / Slack / Teams integration
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def send_notification(to: str, file_id: int, file_title: str, file_url: Optional[str], changed_by: Optional[str]) -> None:
    print("--- COMPLIANCE NOTIFICATION ---")
    print(f"To: {to}")
    print("Subject: File changed in Compliance folder")

    lines = [
      f'File: "{file_title}" (id={file_id})',
    ]
    if file_url:
      lines.append(f"Link: {file_url}")
    if changed_by:
      lines.append(f"Changed by: {changed_by}")
    lines.append("Action: Please review the recent changes.")

    print("Body:\n" + "\n".join(lines))

    # Replace with SMTP / mail provider / Slack / Teams integration
  ```

  </TabItem>
</Tabs>

## Step 4: Notify the department owner

Finally, the script sends a notification to `DEPARTMENT_OWNER_EMAIL` containing:
- file title and file ID,
- a web URL (if the API returns a usable `webUrl/shortWebUrl`),
- changed-by user (if available).
In the example, the notification is printed to the console as a stub. Replace it with SMTP/mail provider/chat notifications.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function handleWebhookPayload(payload: any) {
    const { fileId, userId } = extractFileAndUser(payload);

    if (fileId === null) {
      console.log("[INFO] Webhook is not a file-change event, skipping.");
      return;
    }

    const fileInfo = await getFileInfo(fileId);
    if (!fileInfo) {
      console.log(`[WARN] Could not load file metadata for fileId=${fileId}`);
      return;
    }

    if (fileInfo.folderId !== COMPLIANCE_FOLDER_ID) {
      console.log(
        `[INFO] File ${fileId} is not in Compliance folder (folderId=${fileInfo.folderId}), skipping.`
      );
      return;
    }

    let changedBy: string | null = null;
    if (userId !== null) {
      const user = await getUserInfo(userId);
      if (user) {
        changedBy = user.email ? `${user.name} <${user.email}>` : user.name;
      }
    }

    await sendNotification({
      to: DEPARTMENT_OWNER_EMAIL,
      fileId,
      fileTitle: fileInfo.title,
      fileUrl: fileInfo.webUrl,
      changedBy,
    });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def handle_webhook_payload(payload: Dict[str, Any]) -> None:
    file_id, user_id = extract_file_and_user(payload)
    if file_id is None:
      print("[INFO] Webhook is not a file-change event, skipping.")
      return

    info = get_file_info(file_id)
    if not info:
      print(f"[WARN] Could not load file metadata for fileId={file_id}")
      return

    if info.get("folderId") != COMPLIANCE_FOLDER_ID:
      print(f"[INFO] File {file_id} not in Compliance folder (folderId={info.get('folderId')}), skipping.")
      return

    changed_by = None
    if user_id is not None:
      user = get_user_info(user_id)
      if user:
        changed_by = f"{user['name']} <{user['email']}>" if user["email"] else user["name"]

    send_notification(
      to=DEPARTMENT_OWNER_EMAIL,
      file_id=file_id,
      file_title=info["title"],
      file_url=info.get("webUrl"),
      changed_by=changed_by,
    )
  ```

  </TabItem>
</Tabs>