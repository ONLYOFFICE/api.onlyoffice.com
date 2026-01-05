import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Automatically configure room structure and permissions after room creation

This example demonstrates webhook-based room provisioning in ONLYOFFICE DocSpace.

When a room is created, DocSpace sends a webhook to your backend. The backend script:
- verifies the webhook signature,
- checks that the event is a room creation event (event.trigger),
- extracts the new room ID from payload,
- creates a default folder structure inside the room,
- applies room sharing rules (ACL) to automatically grant access to users and groups.

This pattern is useful for standardized workspaces (clients, departments, projects).


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

  const DEFAULT_FOLDERS = ["Documents", "Tasks", "Archive"];

  const ROLE_TO_ACCESS = {
    Manager: 4,
    Editor: 3,
    Viewer: 1,
  };

  const USER_RULES = [
    { userId: "USER_ID_1", role: "Manager" },
    { userId: "USER_ID_2", role: "Editor" },
    { userId: "USER_ID_3", role: "Viewer" },
  ];

  const HR_GROUP_ID = "GROUP_ID_HR";

  const ALLOWED_TRIGGERS = new Set(["room.created"]);

  const HEADERS = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  // Step 1: Validate and accept the webhook request
  function verifySignature(rawBody, signatureHeader) {
    if (!signatureHeader || !signatureHeader.startsWith("sha256=")) return false;

    const received = signatureHeader.split("=", 2)[1]?.trim()?.toLowerCase();
    if (!received) return false;

    const expected = crypto
      .createHmac("sha256", WEBHOOK_SECRET)
      .update(rawBody)
      .digest("hex")
      .toLowerCase();

    if (received.length !== expected.length) return false;
    return crypto.timingSafeEqual(Buffer.from(received), Buffer.from(expected));
  }

  async function apiRequest(path, method = "GET", body = null) {
    const url = `${API_HOST}${path}`;

    try {
      const res = await fetch(url, {
        method,
        headers: HEADERS,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.log(`[ERROR] API error: ${method} ${url} -> ${res.status} ${text}`);
        return null;
      }

      return await res.json();
    } catch (err) {
      console.log(`[ERROR] Request failed: ${method} ${url} -> ${err?.message || err}`);
      return null;
    }
  }

  function getResponseNode(data) {
    if (!data || typeof data !== "object") return null;
    return data.response != null ? data.response : data;
  }

  function extractTriggerAndPayload(body) {
    const trigger = String(body?.event?.trigger || "").trim();
    const payload = body?.payload && typeof body.payload === "object" ? body.payload : null;
    return { trigger, payload };
  }

  // Step 2: Identify the target room container
  function extractRoomId(payload) {
    const n = Number(payload?.id ?? payload?.roomId ?? null);
    return Number.isFinite(n) ? n : null;
  }

  // Step 3: Create a default workspace structure
  async function createFolder(parentFolderId, title) {
    const payload = { title };
    const data = await apiRequest(`/api/2.0/files/folder/${parentFolderId}`, "POST", payload);
    const node = getResponseNode(data);

    if (!node || typeof node !== "object") return null;

    const idRaw = node.id ?? node.folderId ?? null;
    const folderId = Number(idRaw);

    if (!Number.isFinite(folderId)) {
      console.log(`[WARN] Folder created but id not detected for "${title}".`);
      return null;
    }

    console.log(`[INFO] Folder created: "${title}" (id=${folderId})`);
    return folderId;
  }

  async function createDefaultFolders(roomId) {
    for (const name of DEFAULT_FOLDERS) {
      await createFolder(roomId, name);
    }
  }

  // Step 4: Build sharing rules for users and groups
  function buildAclEntries() {
    const entries = [];

    for (const rule of USER_RULES) {
      const userId = String(rule.userId || "").trim();
      const role = String(rule.role || "").trim();
      if (!userId) continue;

      const access = ROLE_TO_ACCESS[role];
      if (access == null) {
        console.log(`[WARN] Unknown role "${role}" for userId=${userId}. Skipping.`);
        continue;
      }

      entries.push({ id: userId, isGroup: false, access });
    }

    if (HR_GROUP_ID) {
      entries.push({ id: String(HR_GROUP_ID), isGroup: true, access: 1 });
    }

    return entries;
  }

  // Step 5: Apply sharing rules to the room
  async function applyAcl(roomId) {
    const entries = buildAclEntries();
    if (!entries.length) {
      console.log("[WARN] No ACL entries to apply.");
      return false;
    }

    const payload = { entries };
    const data = await apiRequest(`/api/2.0/files/rooms/${roomId}/share`, "PUT", payload);

    if (!data) {
      console.log(`[ERROR] Failed to apply ACL for roomId=${roomId}.`);
      return false;
    }

    console.log(`[INFO] ACL applied for roomId=${roomId}.`);
    return true;
  }

  async function handleRoomCreated(payload) {
    const roomId = extractRoomId(payload);
    if (!roomId) {
      console.log("[WARN] Missing roomId in payload.");
      return;
    }

    console.log(`[INFO] Room created: id=${roomId}`);

    await createDefaultFolders(roomId);
    await applyAcl(roomId);

    console.log("[INFO] Provisioning completed.");
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
    const signature = req.headers["x-docspace-signature-256"];

    if (!req.rawBody) {
      console.log("[WARN] Missing raw body buffer. Cannot verify signature.");
      return res.status(400).send("Missing raw body");
    }

    if (!verifySignature(req.rawBody, signature)) {
      console.log("[WARN] Invalid signature.");
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

    try {
      await handleRoomCreated(payload);
    } catch (err) {
      console.log(err?.message || err);
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

  # Step 0: Configuration
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"
  WEBHOOK_SECRET = "YOUR_WEBHOOK_SECRET"

  DEFAULT_FOLDERS = ["Documents", "Tasks", "Archive"]

  ROLE_TO_ACCESS = {
    "Manager": 4,
    "Editor": 3,
    "Viewer": 1,
  }

  USER_RULES = [
    {"userId": "USER_ID_1", "role": "Manager"},
    {"userId": "USER_ID_2", "role": "Editor"},
    {"userId": "USER_ID_3", "role": "Viewer"},
  ]

  HR_GROUP_ID = "GROUP_ID_HR"

  ALLOWED_TRIGGERS = {
    "room.created",
  }

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  app = Flask(__name__)

  def api_request(path: str, method: str = "GET", json_body: Optional[dict] = None) -> Optional[Dict[str, Any]]:
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

  # Step 1: Validate and accept the webhook request
  def verify_signature(raw_body: bytes, header: Optional[str]) -> bool:
    if not header or not header.startswith("sha256="):
      return False

    received = header.split("=", 1)[1].strip().lower()
    expected = hmac.new(WEBHOOK_SECRET.encode("utf-8"), raw_body, hashlib.sha256).hexdigest().lower()
    return hmac.compare_digest(received, expected)

  def extract_trigger_and_payload(body: Dict[str, Any]) -> Tuple[str, Optional[Dict[str, Any]]]:
    trigger = str(((body.get("event") or {}).get("trigger") or "")).strip()
    payload = body.get("payload")
    return trigger, payload if isinstance(payload, dict) else None

  # Step 2: Identify the target room container
  def extract_room_id(payload: Dict[str, Any]) -> Optional[int]:
    room_id_raw = payload.get("id") or payload.get("roomId")
    try:
      return int(room_id_raw) if room_id_raw is not None else None
    except Exception:
      return None

  # Step 3: Create a default workspace structure
  def create_folder(parent_folder_id: int, title: str) -> Optional[int]:
    payload = {"title": title}
    data = api_request(f"/api/2.0/files/folder/{parent_folder_id}", "POST", payload)
    node = get_response_node(data)

    if not isinstance(node, dict):
      return None

    folder_id_raw = node.get("id") or node.get("folderId")
    try:
      folder_id = int(folder_id_raw)
      print(f'[INFO] Folder created: "{title}" (id={folder_id})')
      return folder_id
    except Exception:
      print(f'[WARN] Folder created but id not detected for "{title}".')
      return None

  def create_default_folders(room_id: int) -> None:
    for name in DEFAULT_FOLDERS:
      create_folder(room_id, name)

  # Step 4: Build sharing rules for users and groups
  def build_acl_entries() -> List[Dict[str, Any]]:
    entries: List[Dict[str, Any]] = []

    for rule in USER_RULES:
      user_id = str(rule.get("userId") or "").strip()
      role = str(rule.get("role") or "").strip()
      if not user_id:
        continue

      access = ROLE_TO_ACCESS.get(role)
      if access is None:
        print(f"[WARN] Unknown role '{role}' for userId={user_id}. Skipping.")
        continue

      entries.append({"id": user_id, "isGroup": False, "access": access})

    if HR_GROUP_ID:
      entries.append({"id": str(HR_GROUP_ID), "isGroup": True, "access": 1})

    return entries

  # Step 5: Apply sharing rules to the room
  def apply_acl(room_id: int) -> bool:
    entries = build_acl_entries()
    if not entries:
      print("[WARN] No ACL entries to apply.")
      return False

    payload = {"entries": entries}
    data = api_request(f"/api/2.0/files/rooms/{room_id}/share", "PUT", payload)

    if not data:
      print(f"[ERROR] Failed to apply ACL for roomId={room_id}.")
      return False

    print(f"[INFO] ACL applied for roomId={room_id}.")
    return True

  def handle_room_created(payload: Dict[str, Any]) -> None:
    room_id = extract_room_id(payload)
    if not room_id:
      print("[WARN] Missing roomId in payload.")
      return

    print(f"[INFO] Room created: id={room_id}")

    create_default_folders(room_id)
    apply_acl(room_id)

    print("[INFO] Provisioning completed.")

  @app.route("/docspace/webhook", methods=["POST", "HEAD", "GET"])
  def webhook():
    if request.method == "HEAD":
      return "", 200

    if request.method == "GET":
      return jsonify({"status": "ok"}), 200

    raw_body = request.data
    signature = request.headers.get("x-docspace-signature-256")

    if not verify_signature(raw_body, signature):
      print("[WARN] Invalid signature.")
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

    try:
      handle_room_created(payload)
    except Exception as e:
      print(f"[ERROR] Provisioning error: {e}")
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

## Step 1: Validate and accept the webhook request

When a new room is created, DocSpace sends a notification to your webhook URL.

At this step, the script:

- receives the incoming request from DocSpace,
- checks that the request really comes from DocSpace (using the secret key you configured),
- reads the event type from `event.trigger`,
- ignores events that are not relevant for this scenario.

If the request does not pass validation, the script stops processing it.
If the event type is not supported, the script simply returns `200 OK` and does nothing.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function verifySignature(rawBody, signatureHeader) {
    if (!signatureHeader || !signatureHeader.startsWith("sha256=")) return false;

    const received = signatureHeader.split("=", 2)[1]?.trim()?.toLowerCase();
    if (!received) return false;

    const expected = crypto
      .createHmac("sha256", WEBHOOK_SECRET)
      .update(rawBody)
      .digest("hex")
      .toLowerCase();

    if (received.length !== expected.length) return false;
    return crypto.timingSafeEqual(Buffer.from(received), Buffer.from(expected));
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def verify_signature(raw_body: bytes, header: Optional[str]) -> bool:
    if not header or not header.startswith("sha256="):
      return False

    received = header.split("=", 1)[1].strip().lower()
    expected = hmac.new(WEBHOOK_SECRET.encode("utf-8"), raw_body, hashlib.sha256).hexdigest().lower()
    return hmac.compare_digest(received, expected)
  ```

  </TabItem>
</Tabs>

## Step 2: Identify the target room container

The script extracts the room container identifier from `payload.id` (fallback: `payload.roomId`).
This ID is then used as the target room for all provisioning actions in this example.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function extractRoomId(payload) {
    const n = Number(payload?.id ?? payload?.roomId ?? null);
    return Number.isFinite(n) ? n : null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def extract_room_id(payload: Dict[str, Any]) -> Optional[int]:
    room_id_raw = payload.get("id") or payload.get("roomId")
    try:
      return int(room_id_raw) if room_id_raw is not None else None
    except Exception:
      return None
  ```

  </TabItem>
</Tabs>

## Step 3: Create a default workspace structure

To keep all workspaces consistent, the script creates folders defined in `DEFAULT_FOLDERS`.
Each folder is created inside the room container using a folder creation request.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createFolder(parentFolderId, title) {
    const payload = { title };
    const data = await apiRequest(`/api/2.0/files/folder/${parentFolderId}`, "POST", payload);
    const node = getResponseNode(data);

    if (!node || typeof node !== "object") return null;

    const idRaw = node.id ?? node.folderId ?? null;
    const folderId = Number(idRaw);

    if (!Number.isFinite(folderId)) {
      console.log(`[WARN] Folder created but id not detected for "${title}".`);
      return null;
    }

    console.log(`[INFO] Folder created: "${title}" (id=${folderId})`);
    return folderId;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_folder(parent_folder_id: int, title: str) -> Optional[int]:
    payload = {"title": title}
    data = api_request(f"/api/2.0/files/folder/{parent_folder_id}", "POST", payload)
    node = get_response_node(data)

    if not isinstance(node, dict):
      return None

    folder_id_raw = node.get("id") or node.get("folderId")
    try:
      folder_id = int(folder_id_raw)
      print(f'[INFO] Folder created: "{title}" (id={folder_id})')
      return folder_id
    except Exception:
      print(f'[WARN] Folder created but id not detected for "{title}".')
      return None
  ```

  </TabItem>
</Tabs> 

## Step 4: Build sharing rules for users and groups

The script converts your internal roles into DocSpace access codes using `ROLE_TO_ACCESS`, then builds a list of share entries:
- one entry per user in `USER_RULES`
- an optional read-only entry for `HR_GROUP_ID`

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function buildAclEntries() {
    const entries = [];

    for (const rule of USER_RULES) {
      const userId = String(rule.userId || "").trim();
      const role = String(rule.role || "").trim();
      if (!userId) continue;

      const access = ROLE_TO_ACCESS[role];
      if (access == null) {
        console.log(`[WARN] Unknown role "${role}" for userId=${userId}. Skipping.`);
        continue;
      }

      entries.push({ id: userId, isGroup: false, access });
    }

    if (HR_GROUP_ID) {
      entries.push({ id: String(HR_GROUP_ID), isGroup: true, access: 1 });
    }

    return entries;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def build_acl_entries() -> List[Dict[str, Any]]:
    entries: List[Dict[str, Any]] = []

    for rule in USER_RULES:
      user_id = str(rule.get("userId") or "").strip()
      role = str(rule.get("role") or "").strip()
      if not user_id:
        continue

      access = ROLE_TO_ACCESS.get(role)
      if access is None:
        print(f"[WARN] Unknown role '{role}' for userId={user_id}. Skipping.")
        continue

      entries.append({"id": user_id, "isGroup": False, "access": access})

    if HR_GROUP_ID:
      entries.append({"id": str(HR_GROUP_ID), "isGroup": True, "access": 1})

    return entries
  ```

  </TabItem>
</Tabs> 

## Step 5: Apply sharing rules to the room

All prepared share entries are applied in a single room sharing request.

As a result, right after the room is created:
- the folder structure is ready
- required users and groups immediately get access

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function applyAcl(roomId) {
    const entries = buildAclEntries();
    if (!entries.length) {
      console.log("[WARN] No ACL entries to apply.");
      return false;
    }

    const payload = { entries };
    const data = await apiRequest(`/api/2.0/files/rooms/${roomId}/share`, "PUT", payload);

    if (!data) {
      console.log(`[ERROR] Failed to apply ACL for roomId=${roomId}.`);
      return false;
    }

    console.log(`[INFO] ACL applied for roomId=${roomId}.`);
    return true;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def apply_acl(room_id: int) -> bool:
    entries = build_acl_entries()
    if not entries:
      print("[WARN] No ACL entries to apply.")
      return False

    payload = {"entries": entries}
    data = api_request(f"/api/2.0/files/rooms/{room_id}/share", "PUT", payload)

    if not data:
      print(f"[ERROR] Failed to apply ACL for roomId={room_id}.")
      return False

    print(f"[INFO] ACL applied for roomId={room_id}.")
    return True
  ```

  </TabItem>
</Tabs> 