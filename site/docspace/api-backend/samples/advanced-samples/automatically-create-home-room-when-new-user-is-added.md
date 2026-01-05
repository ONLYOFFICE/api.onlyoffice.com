import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Automatically create a home room when a new user is added

This example shows how to automatically create a personal home room for every new user in ONLYOFFICE DocSpace using webhooks.

When DocSpace notifies your backend about a new user, the script:
- receives and verifies the webhook request
- checks that the trigger is supported
- extracts user data from the payload
- creates a personal room for the user
- creates a default folder structure inside the room
- copies starter documents from templates into the room
- applies sharing rules (user gets full access, optional HR group gets read-only)
- sends a welcome message with a room link (placeholder)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  import express from "express";
  import crypto from "crypto";

  const API_HOST = "https://yourportal.onlyoffice.com";
  const API_KEY = "YOUR_API_KEY";
  const WEBHOOK_SECRET = "YOUR_WEBHOOK_SECRET";

  const TEMPLATE_FILE_IDS = [1111, 2222];

  const HR_GROUP_ID = "HR_GROUP_ID";
  const HOME_ROOM_TYPE = 2;

  const ALLOWED_TRIGGERS = new Set(["user.created", "user.added"]);

  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  async function docspaceRequest(path, method = "GET", jsonBody = null) {
    const url = `${API_HOST}${path}`;

    let res;
    try {
      res = await fetch(url, {
        method,
        headers: HEADERS,
        body: jsonBody ? JSON.stringify(jsonBody) : undefined,
      });
    } catch (e) {
      console.log(`[ERROR] Request failed: ${method} ${url} -> ${e?.message || e}`);
      return null;
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.log(`[ERROR] API error: ${method} ${url} -> ${res.status} ${text}`);
      return null;
    }

    try {
      return await res.json();
    } catch {
      console.log(`[ERROR] Non-JSON response: ${method} ${url}`);
      return null;
    }
  }

  function getResponseNode(data) {
    if (data && typeof data === "object" && !Array.isArray(data) && "response" in data) {
      return data.response;
    }
    return data;
  }

  // Step 1: Receive and verify the webhook request
  function verifySignature(secretKey, rawBody, signatureHeader) {
    if (!signatureHeader || !signatureHeader.startsWith("sha256=")) return false;

    const received = signatureHeader.split("=", 2)[1]?.trim()?.toLowerCase();
    if (!received) return false;

    const expected = crypto.createHmac("sha256", secretKey).update(rawBody).digest("hex").toLowerCase();
    if (received.length !== expected.length) return false;

    return crypto.timingSafeEqual(Buffer.from(received), Buffer.from(expected));
  }

  function extractTriggerAndPayload(body) {
    const trigger = String(body?.event?.trigger || "").trim();
    const payload = body?.payload && typeof body.payload === "object" ? body.payload : null;
    return { trigger, payload };
  }

  // Step 2: Detect the user event and extract user data
  function extractUserId(payload) {
    const raw = payload?.id;
    const val = raw != null ? String(raw).trim() : "";
    return val ? val : null;
  }

  function buildDisplayName(payload) {
    const first = String(payload?.firstName || "").trim();
    const last = String(payload?.lastName || "").trim();
    const full = `${first} ${last}`.trim();
    if (full) return full;

    if (payload?.userName) return String(payload.userName);
    if (payload?.email) return String(payload.email);

    return "New user";
  }

  async function getUserInfo(userId) {
    const data = await docspaceRequest(`/api/2.0/people/${encodeURIComponent(userId)}`, "GET");
    const node = getResponseNode(data);
    return node && typeof node === "object" && !Array.isArray(node) ? node : null;
  }

  // Step 3: Create a personal home room
  async function createHomeRoom(displayName) {
    const payload = {
      title: `Home – ${displayName}`,
      roomType: HOME_ROOM_TYPE,
      share: [],
    };

    const data = await docspaceRequest("/api/2.0/files/rooms", "POST", payload);
    const node = getResponseNode(data);

    if (!node || typeof node !== "object") return null;

    const roomIdRaw = node.id ?? node.roomId ?? null;
    const roomId = Number(roomIdRaw);

    return Number.isFinite(roomId) ? roomId : null;
  }

  // Step 4: Create a default folder structure
  async function createFolder(parentFolderId, title) {
    const payload = { title };
    const data = await docspaceRequest(`/api/2.0/files/folder/${parentFolderId}`, "POST", payload);
    const node = getResponseNode(data);

    if (!node || typeof node !== "object") return null;

    const folderIdRaw = node.id ?? node.folderId ?? null;
    const folderId = Number(folderIdRaw);

    return Number.isFinite(folderId) ? folderId : null;
  }

  async function createBaseFolders(roomId) {
    const names = ["Documents", "Personal", "Shared with me"];

    for (const title of names) {
      const folderId = await createFolder(roomId, title);
      if (folderId) console.log(`[INFO] Folder created: "${title}" (id=${folderId})`);
      else console.log(`[WARN] Failed to create folder: "${title}"`);
    }
  }

  // Step 5: Copy starter documents from templates
  async function copyTemplatesToRoom(roomId) {
    for (const templateId of TEMPLATE_FILE_IDS) {
      const payload = { destFolderId: roomId, destTitle: null };
      const data = await docspaceRequest(`/api/2.0/files/file/${templateId}/copyas`, "POST", payload);

      if (!data) console.log(`[WARN] Failed to copy template ${templateId} into room ${roomId}`);
      else console.log(`[INFO] Template copied: fileId=${templateId} -> roomId=${roomId}`);
    }
  }

  // Step 6: Apply access rules (ACL)
  async function applyRoomAcl(roomId, userId) {
    const entries = [{ id: String(userId), isGroup: false, access: 4 }];

    if (HR_GROUP_ID) {
      entries.push({ id: String(HR_GROUP_ID), isGroup: true, access: 1 });
    }

    const payload = { entries };
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}/share`, "PUT", payload);

    if (!data) console.log(`[WARN] Failed to apply sharing rules for room ${roomId}`);
    else console.log(`[INFO] Sharing rules applied for room ${roomId}`);
  }

  // Step 7: Send a welcome message (placeholder)
  function sendWelcomeMessage(userPayload, roomId) {
    const email = String(userPayload?.email || "unknown");
    const firstName = String(userPayload?.firstName || "there");
    const roomLink = `${API_HOST}/products/files/rooms/${roomId}`;

    console.log("[WELCOME MESSAGE]");
    console.log(`To: ${email}`);
    console.log("Subject: Welcome to DocSpace");
    console.log(`Body: Hello ${firstName}, your personal home room has been created.`);
    console.log(`Link: ${roomLink}`);
  }

  async function handleUserEvent(userId, payload) {
    console.log(`[INFO] New user detected: userId=${userId}`);

    let displayName = buildDisplayName(payload);

    const userInfo = await getUserInfo(userId);
    if (userInfo && typeof userInfo === "object") {
      displayName = String(userInfo.displayName || userInfo.email || displayName);
    }

    const roomId = await createHomeRoom(displayName);
    if (roomId == null) {
      console.log("[ERROR] Failed to create home room.");
      return;
    }

    console.log(`[INFO] Home room created: roomId=${roomId}`);

    await createBaseFolders(roomId);
    await copyTemplatesToRoom(roomId);
    await applyRoomAcl(roomId, userId);
    sendWelcomeMessage(payload, roomId);

    console.log("[INFO] Home room provisioning completed.");
  }

  const app = express();

  app.use(
    express.json({
      limit: "2mb",
      verify: (req, _res, buf) => {
        req.rawBody = buf;
      },
    })
  );

  app.head("/docspace/webhook", (_req, res) => res.status(200).send(""));
  app.get("/docspace/webhook", (_req, res) => res.status(200).json({ status: "ok" }));

  app.post("/docspace/webhook", async (req, res) => {
    const signatureHeader = req.headers["x-docspace-signature-256"];

    if (!req.rawBody) {
      console.log("[WARN] Missing raw body buffer. Cannot verify signature.");
      return res.status(400).send("Missing raw body");
    }

    if (!verifySignature(WEBHOOK_SECRET, req.rawBody, signatureHeader)) {
      console.log("[WARN] Invalid webhook signature.");
      return res.status(401).send("Invalid signature");
    }

    const { trigger, payload } = extractTriggerAndPayload(req.body);

    if (!payload) {
      console.log("[INFO] No payload object. Skipping.");
      return res.status(200).json({ status: "ok" });
    }

    if (!ALLOWED_TRIGGERS.has(trigger)) {
      console.log(`[INFO] Trigger '${trigger}' is not handled. Skipping.`);
      return res.status(200).json({ status: "ok" });
    }

    const userId = extractUserId(payload);
    if (!userId) {
      console.log("[INFO] No userId in payload. Skipping.");
      return res.status(200).json({ status: "ok" });
    }

    try {
      await handleUserEvent(userId, payload);
    } catch (e) {
      console.log("[ERROR] Handler failed:", e?.message || e);
      return res.status(500).send("Internal error");
    }

    return res.status(200).json({ status: "ok" });
  });

  app.listen(3000, () => {
    console.log("Webhook listener: http://localhost:3000/docspace/webhook");
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
  from typing import Optional, Dict, Any, List, Tuple

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"
  WEBHOOK_SECRET = "YOUR_WEBHOOK_SECRET"

  TEMPLATE_FILE_IDS = [
    1111,
    2222,
  ]

  HR_GROUP_ID = "HR_GROUP_ID"

  HOME_ROOM_TYPE = 2

  ALLOWED_TRIGGERS = {
    "user.created",
    "user.added",
  }

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  app = Flask(__name__)

  def docspace_request(path: str, method: str = "GET", json_body: Optional[Dict[str, Any]] = None) -> Optional[Dict[str, Any]]:
    url = f"{API_HOST}{path}"

    try:
      r = requests.request(method.upper(), url, headers=HEADERS, json=json_body)
    except Exception as e:
      print(f"[ERROR] Request failed: {method} {url} -> {e}")
      return None

    if r.status_code < 200 or r.status_code >= 300:
      print(f"[ERROR] API error: {method} {url} -> {r.status_code} {r.text}")
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

  # Step 1: Receive and verify the webhook request
  def verify_signature(secret_key: str, raw_body: bytes, signature_header: Optional[str]) -> bool:
    if not signature_header or not signature_header.startswith("sha256="):
      return False

    received = signature_header.split("=", 1)[1].strip().lower()
    expected = hmac.new(secret_key.encode("utf-8"), raw_body, hashlib.sha256).hexdigest().lower()
    return hmac.compare_digest(received, expected)

  def extract_trigger_and_payload(body: Dict[str, Any]) -> Tuple[str, Optional[Dict[str, Any]]]:
    trigger = str(((body.get("event") or {}).get("trigger") or "")).strip()
    payload = body.get("payload")
    return trigger, payload if isinstance(payload, dict) else None

  # Step 2: Detect the user event and extract user data
  def extract_user_id(payload: Dict[str, Any]) -> Optional[str]:
    raw = payload.get("id")
    val = str(raw).strip() if raw is not None else ""
    return val if val else None

  def build_display_name(payload: Dict[str, Any]) -> str:
    first_name = str(payload.get("firstName") or "").strip()
    last_name = str(payload.get("lastName") or "").strip()
    full = (first_name + " " + last_name).strip()
    if full:
      return full

    user_name = payload.get("userName")
    if user_name:
      return str(user_name)

    email = payload.get("email")
    if email:
      return str(email)

    return "New user"

  def get_user_info(user_id: str) -> Optional[Dict[str, Any]]:
    data = docspace_request(f"/api/2.0/people/{user_id}", "GET")
    node = get_response_node(data)
    return node if isinstance(node, dict) else None

  # Step 3: Create a personal home room
  def create_home_room(display_name: str) -> Optional[int]:
    payload = {
      "title": f"Home – {display_name}",
      "roomType": HOME_ROOM_TYPE,
      "share": [],
    }

    data = docspace_request("/api/2.0/files/rooms", "POST", json_body=payload)
    node = get_response_node(data)

    if not isinstance(node, dict):
      return None

    room_id_raw = node.get("id") or node.get("roomId")
    try:
      return int(room_id_raw)
    except Exception:
      return None

  # Step 4: Create a default folder structure
  def create_folder(parent_folder_id: int, title: str) -> Optional[int]:
    payload = {"title": title}
    data = docspace_request(f"/api/2.0/files/folder/{parent_folder_id}", "POST", json_body=payload)
    node = get_response_node(data)

    if not isinstance(node, dict):
      return None

    folder_id_raw = node.get("id") or node.get("folderId")
    try:
      return int(folder_id_raw)
    except Exception:
      return None

  def create_base_folders(room_id: int) -> None:
    for title in ["Documents", "Personal", "Shared with me"]:
      folder_id = create_folder(room_id, title)
      if folder_id:
        print(f'[INFO] Folder created: "{title}" (id={folder_id})')
      else:
        print(f'[WARN] Failed to create folder: "{title}"')

  # Step 5: Copy starter documents from templates
  def copy_templates_to_room(room_id: int) -> None:
    for template_id in TEMPLATE_FILE_IDS:
      payload = {"destFolderId": room_id, "destTitle": None}
      data = docspace_request(f"/api/2.0/files/file/{template_id}/copyas", "POST", json_body=payload)

      if data is None:
        print(f"[WARN] Failed to copy template {template_id} into room {room_id}")
      else:
        print(f"[INFO] Template copied: fileId={template_id} -> roomId={room_id}")

  # Step 6: Apply access rules (ACL)
  def apply_room_acl(room_id: int, user_id: str) -> None:
    entries: List[Dict[str, Any]] = [
      {"id": str(user_id), "isGroup": False, "access": 4},
    ]

    if HR_GROUP_ID:
      entries.append({"id": str(HR_GROUP_ID), "isGroup": True, "access": 1})

    payload = {"entries": entries}
    data = docspace_request(f"/api/2.0/files/rooms/{room_id}/share", "PUT", json_body=payload)

    if data is None:
      print(f"[WARN] Failed to apply sharing rules for room {room_id}")
    else:
      print(f"[INFO] Sharing rules applied for room {room_id}")

  # Step 7: Send a welcome message (placeholder)
  def send_welcome_message(user_payload: Dict[str, Any], room_id: int) -> None:
    email = str(user_payload.get("email") or "unknown")
    first_name = str(user_payload.get("firstName") or "there")
    room_link = f"{API_HOST}/products/files/rooms/{room_id}"

    print("[WELCOME MESSAGE]")
    print(f"To: {email}")
    print("Subject: Welcome to DocSpace")
    print(f"Body: Hello {first_name}, your personal home room has been created.")
    print(f"Link: {room_link}")

  def handle_user_event(user_id: str, payload: Dict[str, Any]) -> None:
    print(f"[INFO] New user detected: userId={user_id}")

    display_name = build_display_name(payload)

    user_info = get_user_info(user_id)
    if isinstance(user_info, dict):
      display_name = str(user_info.get("displayName") or user_info.get("email") or display_name)

    room_id = create_home_room(display_name)
    if room_id is None:
      print("[ERROR] Failed to create home room.")
      return

    print(f"[INFO] Home room created: roomId={room_id}")

    create_base_folders(room_id)
    copy_templates_to_room(room_id)
    apply_room_acl(room_id, user_id)
    send_welcome_message(payload, room_id)

    print("[INFO] Home room provisioning completed.")

  @app.route("/docspace/webhook", methods=["POST", "HEAD", "GET"])
  def docspace_webhook():
    if request.method == "HEAD":
      return "", 200

    if request.method == "GET":
      return jsonify({"status": "ok"}), 200

    raw_body = request.data
    signature_header = request.headers.get("x-docspace-signature-256")

    if not verify_signature(WEBHOOK_SECRET, raw_body, signature_header):
      print("[WARN] Invalid webhook signature.")
      return "Invalid signature", 401

    body = request.get_json(silent=True)
    if not isinstance(body, dict) or not body:
      return jsonify({"status": "ok"}), 200

    trigger, payload = extract_trigger_and_payload(body)
    if not payload:
      print("[INFO] No payload object. Skipping.")
      return jsonify({"status": "ok"}), 200

    if trigger not in ALLOWED_TRIGGERS:
      print(f"[INFO] Trigger '{trigger}' is not handled. Skipping.")
      return jsonify({"status": "ok"}), 200

    user_id = extract_user_id(payload)
    if user_id is None:
      print("[INFO] No userId in payload. Skipping.")
      return jsonify({"status": "ok"}), 200

    try:
      handle_user_event(user_id, payload)
    except Exception as e:
      print("[ERROR] Handler failed:", e)
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

When a new user is added, DocSpace sends a notification to your webhook URL.

At this step, the backend:

- accepts the incoming request from DocSpace,
- checks that the request is authentic using the secret key configured in webhook settings,
- reads the event data only after successful validation.

If the request cannot be validated, the server responds with 401 and stops processing it.
DocSpace may also send HEAD requests to check that the webhook URL is reachable, so the endpoint should return 200 OK for such requests.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function verifySignature(secretKey, rawBody, signatureHeader) {
    if (!signatureHeader || !signatureHeader.startsWith("sha256=")) return false;

    const received = signatureHeader.split("=", 2)[1]?.trim()?.toLowerCase();
    if (!received) return false;

    const expected = crypto.createHmac("sha256", secretKey).update(rawBody).digest("hex").toLowerCase();
    if (received.length !== expected.length) return false;

    return crypto.timingSafeEqual(Buffer.from(received), Buffer.from(expected));
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def verify_signature(secret_key: str, raw_body: bytes, signature_header: Optional[str]) -> bool:
    if not signature_header or not signature_header.startswith("sha256="):
      return False

    received = signature_header.split("=", 1)[1].strip().lower()
    expected = hmac.new(secret_key.encode("utf-8"), raw_body, hashlib.sha256).hexdigest().lower()
    return hmac.compare_digest(received, expected)
  ```

  </TabItem>
</Tabs>

## Step 2: Detect the user event and extract user data

The script checks the trigger name:
- `event.trigger` must match one of the values in ALLOWED_TRIGGERS (for example, user.created)

Then it reads user fields from payload, including:
- `payload.id` (user ID, can be a GUID string)
- `payload.firstName`, `payload.lastName`
- `payload.email`

If the trigger is not in the allowed list, the handler returns 200 OK and does nothing.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function extractUserId(payload) {
    const raw = payload?.id;
    const val = raw != null ? String(raw).trim() : "";
    return val ? val : null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def extract_user_id(payload: Dict[str, Any]) -> Optional[str]:
    raw = payload.get("id")
    val = str(raw).strip() if raw is not None else ""
    return val if val else None
  ```

  </TabItem>
</Tabs>

## Step 3: Create a personal home room

The script creates a room for the new user using POST [/api/2.0/files/rooms](/docspace/api-backend/usage-api/create-room)

Fields used in this example:
- `title`: Home – {displayName}
- `roomType`: `HOME_ROOM_TYPE` (example: `2`)
- `share`: empty array

The API response returns the new room identifier (`id`/`roomId`), which is used in the next steps.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createHomeRoom(displayName) {
    const payload = {
      title: `Home – ${displayName}`,
      roomType: HOME_ROOM_TYPE,
      share: [],
    };

    const data = await docspaceRequest("/api/2.0/files/rooms", "POST", payload);
    const node = getResponseNode(data);

    if (!node || typeof node !== "object") return null;

    const roomIdRaw = node.id ?? node.roomId ?? null;
    const roomId = Number(roomIdRaw);

    return Number.isFinite(roomId) ? roomId : null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_home_room(display_name: str) -> Optional[int]:
    payload = {
      "title": f"Home – {display_name}",
      "roomType": HOME_ROOM_TYPE,
      "share": [],
    }

    data = docspace_request("/api/2.0/files/rooms", "POST", json_body=payload)
    node = get_response_node(data)

    if not isinstance(node, dict):
      return None

    room_id_raw = node.get("id") or node.get("roomId")
    try:
      return int(room_id_raw)
    except Exception:
      return None
  ```

  </TabItem>
</Tabs> 

## Step 4: Create a default folder structure

After the room is created, the script creates folders inside it using the room ID as the parent container.
For each folder name, it sends POST [/api/2.0/files/folder/{parentFolderId}](/docspace/api-backend/usage-api/create-folder)
In this example, `parentFolderId` is the created `roomId`.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createFolder(parentFolderId, title) {
    const payload = { title };
    const data = await docspaceRequest(`/api/2.0/files/folder/${parentFolderId}`, "POST", payload);
    const node = getResponseNode(data);

    if (!node || typeof node !== "object") return null;

    const folderIdRaw = node.id ?? node.folderId ?? null;
    const folderId = Number(folderIdRaw);

    return Number.isFinite(folderId) ? folderId : null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_folder(parent_folder_id: int, title: str) -> Optional[int]:
    payload = {"title": title}
    data = docspace_request(f"/api/2.0/files/folder/{parent_folder_id}", "POST", json_body=payload)
    node = get_response_node(data)

    if not isinstance(node, dict):
      return None

    folder_id_raw = node.get("id") or node.get("folderId")
    try:
      return int(folder_id_raw)
    except Exception:
      return None
  ```

  </TabItem>
</Tabs> 

## Step 5: Copy starter documents from templates

To give each user a standard set of documents, the script copies templates into the room.
For each file ID in `TEMPLATE_FILE_IDS`, it sends POST [/api/2.0/files/file/{fileId}/copyas](/docspace/api-backend/usage-api/copy-file-as)

Body fields:
- `destFolderId`: room ID
- `destTitle`: null (keeps the original file name)

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function copyTemplatesToRoom(roomId) {
    for (const templateId of TEMPLATE_FILE_IDS) {
      const payload = { destFolderId: roomId, destTitle: null };
      const data = await docspaceRequest(`/api/2.0/files/file/${templateId}/copyas`, "POST", payload);

      if (!data) console.log(`[WARN] Failed to copy template ${templateId} into room ${roomId}`);
      else console.log(`[INFO] Template copied: fileId=${templateId} -> roomId=${roomId}`);
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def copy_templates_to_room(room_id: int) -> None:
    for template_id in TEMPLATE_FILE_IDS:
      payload = {"destFolderId": room_id, "destTitle": None}
      data = docspace_request(f"/api/2.0/files/file/{template_id}/copyas", "POST", json_body=payload)

      if data is None:
        print(f"[WARN] Failed to copy template {template_id} into room {room_id}")
      else:
        print(f"[INFO] Template copied: fileId={template_id} -> roomId={room_id}")
  ```

  </TabItem>
</Tabs>

## Step 6: Apply access rules (ACL)

To configure who can access the room, the script applies room sharing rules PUT [/api/2.0/files/rooms/{roomId}/share](/docspace/api-backend/usage-api/set-room-security)
Entries used in this example:
- the new user (`payload.id`) gets full access (`access: 4`)
- an optional HR group (`HR_GROUP_ID`) gets read-only access (`access: 1`)

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function applyRoomAcl(roomId, userId) {
    const entries = [{ id: String(userId), isGroup: false, access: 4 }];

    if (HR_GROUP_ID) {
      entries.push({ id: String(HR_GROUP_ID), isGroup: true, access: 1 });
    }

    const payload = { entries };
    const data = await docspaceRequest(`/api/2.0/files/rooms/${roomId}/share`, "PUT", payload);

    if (!data) console.log(`[WARN] Failed to apply sharing rules for room ${roomId}`);
    else console.log(`[INFO] Sharing rules applied for room ${roomId}`);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def apply_room_acl(room_id: int, user_id: str) -> None:
    entries: List[Dict[str, Any]] = [
      {"id": str(user_id), "isGroup": False, "access": 4},
    ]

    if HR_GROUP_ID:
      entries.append({"id": str(HR_GROUP_ID), "isGroup": True, "access": 1})

    payload = {"entries": entries}
    data = docspace_request(f"/api/2.0/files/rooms/{room_id}/share", "PUT", json_body=payload)

    if data is None:
      print(f"[WARN] Failed to apply sharing rules for room {room_id}")
    else:
      print(f"[INFO] Sharing rules applied for room {room_id}")
  ```

  </TabItem>
</Tabs>