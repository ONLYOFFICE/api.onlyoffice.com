import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Automatic home folder creation for new users in a shared Employees room

This example shows how to automatically create a personal home folder for every new user inside an existing shared room/folder (for example, Employees), instead of creating a separate room per user.


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
  const WEBHOOK_SECRET = "your_webhook_secret";

  const EMPLOYEES_ROOM_ID = 100100;
  const TEMPLATE_FOLDER_ID = 200200;
  const HR_GROUP_ID = "9001";

  const ALLOWED_TRIGGERS = new Set(["user.created"]);

  const HEADERS = {
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  const app = express();

  // Step 1: Receive and validate the webhook request
  app.use(
    express.json({
      verify: (req, res, buf) => {
        req.rawBody = buf;
      },
    })
  );

  function verify_signature(secretKey, rawBody, signatureHeader) {
    if (!signatureHeader || !signatureHeader.startsWith("sha256=")) return false;

    const received = signatureHeader.split("=", 2)[1].trim().toLowerCase();
    const expected = crypto.createHmac("sha256", secretKey).update(rawBody).digest("hex").toLowerCase();

    try {
      return crypto.timingSafeEqual(Buffer.from(received, "utf8"), Buffer.from(expected, "utf8"));
    } catch {
      return false;
    }
  }

  async function docspace_request(pathname, method = "GET", json_body = null) {
    const url = `${API_HOST}${pathname}`;

    let res;
    try {
      res = await fetch(url, {
        method: String(method).toUpperCase(),
        headers: HEADERS,
        body: json_body ? JSON.stringify(json_body) : undefined,
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

  function get_response_node(data) {
    if (data && typeof data === "object" && !Array.isArray(data) && "response" in data) {
      return data.response;
    }
    return data;
  }

  function extract_trigger_and_payload(body) {
    const trigger = String((body?.event?.trigger || "")).trim();
    const payload = body?.payload;
    return { trigger, payload: payload && typeof payload === "object" && !Array.isArray(payload) ? payload : null };
  }

  function extract_user_id(payload) {
    const raw = payload?.id;
    const val = raw !== undefined && raw !== null ? String(raw).trim() : "";
    return val ? val : null;
  }

  function build_display_name(payload) {
    const first_name = String(payload?.firstName || "").trim();
    const last_name = String(payload?.lastName || "").trim();
    const full = `${first_name} ${last_name}`.trim();
    if (full) return full;

    const user_name = payload?.userName;
    if (user_name) return String(user_name);

    const email = payload?.email;
    if (email) return String(email);

    return "New user";
  }

  // Step 2: Create or reuse the user's home folder
  async function list_children(folder_id) {
    const data = await docspace_request(`/api/2.0/files/${folder_id}`, "GET", null);
    const node = get_response_node(data);

    if (Array.isArray(node)) {
      return node.filter((x) => x && typeof x === "object" && !Array.isArray(x));
    }

    if (node && typeof node === "object" && !Array.isArray(node)) {
      const items = node.files || node.folders || node.items || node.response || [];
      if (Array.isArray(items)) {
        return items.filter((x) => x && typeof x === "object" && !Array.isArray(x));
      }
    }

    if (data && typeof data === "object" && !Array.isArray(data)) {
      const resp = data.response;
      if (Array.isArray(resp)) {
        return resp.filter((x) => x && typeof x === "object" && !Array.isArray(x));
      }
    }

    return [];
  }

  async function find_folder_by_title(parent_id, title) {
    const items = await list_children(parent_id);
    const title_norm = String(title || "").trim();

    for (const it of items) {
      const it_title = String(it.title || "").trim();
      if (it_title !== title_norm) continue;

      const is_folder =
        it.isFolder === true ||
        it.folder === true ||
        String(it.type || "").toLowerCase() === "folder" ||
        it.folderId !== undefined && it.folderId !== null;

      if (!is_folder) continue;

      const raw_id = it.id ?? it.folderId;
      const n = Number(raw_id);
      if (Number.isFinite(n)) return n;
    }

    return null;
  }

  async function create_folder(parent_folder_id, title) {
    const payload = { title };
    const data = await docspace_request(`/api/2.0/files/folder/${parent_folder_id}`, "POST", payload);
    const node = get_response_node(data);

    if (!node || typeof node !== "object" || Array.isArray(node)) return null;

    const raw_id = node.id ?? node.folderId;
    const n = Number(raw_id);
    return Number.isFinite(n) ? n : null;
  }

  async function get_or_create_home_folder(parent_id, folder_title) {
    const existing = await find_folder_by_title(parent_id, folder_title);
    if (existing !== null) {
      console.log(`[INFO] Home folder already exists: "${folder_title}" (id=${existing})`);
      return existing;
    }

    const created = await create_folder(parent_id, folder_title);
    if (created !== null) {
      console.log(`[INFO] Home folder created: "${folder_title}" (id=${created})`);
      return created;
    }

    console.log(`[ERROR] Failed to create home folder: "${folder_title}"`);
    return null;
  }

  // Step 3: Copy starter documents from the template folder
  function _is_folder_item(it) {
    return (
      it?.isFolder === true ||
      it?.folder === true ||
      String(it?.type || "").toLowerCase() === "folder"
    );
  }

  async function list_files_in_folder(folder_id) {
    const items = await list_children(folder_id);
    const out = [];

    for (const it of items) {
      if (_is_folder_item(it)) continue;
      if (it && typeof it === "object" && "id" in it) out.push(it);
    }

    return out;
  }

  async function copy_file_to_folder(file_id, dest_folder_id) {
    const payload = { destFolderId: dest_folder_id, destTitle: null };
    const data = await docspace_request(`/api/2.0/files/file/${file_id}/copyas`, "POST", payload);
    return data !== null;
  }

  async function copy_templates_to_home(template_folder_id, home_folder_id) {
    const files = await list_files_in_folder(template_folder_id);
    if (!files.length) {
      console.log(`[WARN] No files found in TEMPLATE_FOLDER_ID=${template_folder_id}. Nothing to copy.`);
      return;
    }

    for (const f of files) {
      const raw_id = f.id;
      const file_id = Number(raw_id);
      if (!Number.isFinite(file_id)) continue;

      const ok = await copy_file_to_folder(file_id, home_folder_id);
      if (ok) console.log(`[INFO] Template copied: fileId=${file_id} -> homeFolderId=${home_folder_id}`);
      else console.log(`[WARN] Failed to copy template: fileId=${file_id} -> homeFolderId=${home_folder_id}`);
    }
  }

  // Step 4: Share the home folder with the user (and optional HR group)
  async function share_home_folder(home_folder_id, user_id) {
    const share = [{ shareTo: user_id, access: "ReadWrite" }];

    if (HR_GROUP_ID) {
      share.push({ shareTo: String(HR_GROUP_ID), access: "Read" });
    }

    const payload = { share };
    const data = await docspace_request(`/api/2.0/files/folder/${home_folder_id}/share`, "PUT", payload);
    return data !== null;
  }

  // Step 5: Send a welcome message (optional)
  function send_welcome_email(user_payload, home_folder_id) {
    const email = String(user_payload?.email || "unknown");
    const first_name = String(user_payload?.firstName || "there");
    const folder_link = `${API_HOST}/products/files/#/files/folder/${home_folder_id}`;

    console.log("[WELCOME EMAIL]");
    console.log(`To: ${email}`);
    console.log("Subject: Welcome to DocSpace");
    console.log(`Body: Hello ${first_name}, your personal folder has been created in /Employees.`);
    console.log(`Link: ${folder_link}`);
  }

  async function handle_user_created(user_id, user_payload) {
    const display_name = build_display_name(user_payload);
    console.log(`[INFO] User created: userId=${user_id}, displayName=${display_name}`);

    const home_folder_id = await get_or_create_home_folder(EMPLOYEES_ROOM_ID, display_name);
    if (home_folder_id === null) return;

    await copy_templates_to_home(TEMPLATE_FOLDER_ID, home_folder_id);

    const shared = await share_home_folder(home_folder_id, user_id);
    if (shared) console.log(`[INFO] Home folder shared: homeFolderId=${home_folder_id}`);
    else console.log(`[WARN] Failed to share home folder: homeFolderId=${home_folder_id}`);

    send_welcome_email(user_payload, home_folder_id);
    console.log("[INFO] Provisioning completed.");
  }

  app.head("/docspace/webhook", (req, res) => res.status(200).send(""));
  app.get("/docspace/webhook", (req, res) => res.json({ status: "ok" }));

  app.post("/docspace/webhook", async (req, res) => {
    // Step 1: Receive and validate the webhook request
    const raw_body = req.rawBody;
    const signature_header = req.header("x-docspace-signature-256");

    if (!verify_signature(WEBHOOK_SECRET, raw_body, signature_header)) {
      console.log("[WARN] Invalid webhook signature.");
      return res.status(401).send("Invalid signature");
    }

    const body = req.body;
    if (!body || typeof body !== "object") return res.json({ status: "ok" });

    const { trigger, payload } = extract_trigger_and_payload(body);
    if (!ALLOWED_TRIGGERS.has(trigger)) {
      console.log(`[INFO] Trigger '${trigger}' is not handled. Skipping.`);
      return res.json({ status: "ok" });
    }

    if (!payload) {
      console.log("[INFO] No payload object. Skipping.");
      return res.json({ status: "ok" });
    }

    const user_id = extract_user_id(payload);
    if (user_id === null) {
      console.log("[INFO] No user id in payload. Skipping.");
      return res.json({ status: "ok" });
    }

    try {
      await handle_user_created(user_id, payload);
    } catch (e) {
      console.log("[ERROR] Handler failed:", e?.message || e);
      return res.status(500).send("Internal error");
    }

    return res.json({ status: "ok" });
  });

  const port = Number(process.env.PORT || 3000);
  app.listen(port, "0.0.0.0", () => {
    console.log(`Webhook listener: http://localhost:${port}/docspace/webhook`);
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
  WEBHOOK_SECRET = "your_webhook_secret"

  EMPLOYEES_ROOM_ID = 100100
  TEMPLATE_FOLDER_ID = 200200
  HR_GROUP_ID = "9001"

  ALLOWED_TRIGGERS = {
    "user.created",
  }

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  app = Flask(__name__)

  def verify_signature(secret_key: str, raw_body: bytes, signature_header: Optional[str]) -> bool:
    if not signature_header or not signature_header.startswith("sha256="):
      return False

    received = signature_header.split("=", 1)[1].strip().lower()
    expected = hmac.new(secret_key.encode("utf-8"), raw_body, hashlib.sha256).hexdigest().lower()
    return hmac.compare_digest(received, expected)

  def docspace_request(
    path: str,
    method: str = "GET",
    json_body: Optional[Dict[str, Any]] = None
  ) -> Optional[Dict[str, Any]]:
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

  def extract_trigger_and_payload(body: Dict[str, Any]) -> Tuple[str, Optional[Dict[str, Any]]]:
    trigger = str(((body.get("event") or {}).get("trigger") or "")).strip()
    payload = body.get("payload")
    return trigger, payload if isinstance(payload, dict) else None

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

  # Step 2: Create /Employees/{DisplayName} (or reuse it)
  def list_children(folder_id: int) -> List[Dict[str, Any]]:
    data = docspace_request(f"/api/2.0/files/{folder_id}", "GET")
    node = get_response_node(data)

    if isinstance(node, list):
      return [x for x in node if isinstance(x, dict)]

    if isinstance(node, dict):
      items = node.get("files") or node.get("folders") or node.get("items") or node.get("response") or []
      if isinstance(items, list):
        return [x for x in items if isinstance(x, dict)]

    if isinstance(data, dict):
      resp = data.get("response")
      if isinstance(resp, list):
        return [x for x in resp if isinstance(x, dict)]

    return []

  def find_folder_by_title(parent_id: int, title: str) -> Optional[int]:
    items = list_children(parent_id)
    title_norm = str(title or "").strip()

    for it in items:
      it_title = str(it.get("title") or "").strip()
      if it_title != title_norm:
        continue

      is_folder = (
        it.get("isFolder") is True
        or it.get("folder") is True
        or str(it.get("type") or "").lower() == "folder"
        or it.get("folderId") is not None
      )
      if not is_folder:
        continue

      raw_id = it.get("id") or it.get("folderId")
      try:
        return int(raw_id)
      except Exception:
        continue

    return None

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

  def get_or_create_home_folder(parent_id: int, folder_title: str) -> Optional[int]:
    existing = find_folder_by_title(parent_id, folder_title)
    if existing is not None:
      print(f'[INFO] Home folder already exists: "{folder_title}" (id={existing})')
      return existing

    created = create_folder(parent_id, folder_title)
    if created is not None:
      print(f'[INFO] Home folder created: "{folder_title}" (id={created})')
      return created

    print(f'[ERROR] Failed to create home folder: "{folder_title}"')
    return None

  # Step 3: Copy starter documents from the template folder
  def list_files_in_folder(folder_id: int) -> List[Dict[str, Any]]:
    items = list_children(folder_id)
    out: List[Dict[str, Any]] = []

    for it in items:
      is_folder = (
        it.get("isFolder") is True
        or it.get("folder") is True
        or str(it.get("type") or "").lower() == "folder"
      )
      if is_folder:
        continue

      if "id" in it:
        out.append(it)

    return out

  def copy_file_to_folder(file_id: int, dest_folder_id: int) -> bool:
    payload = {"destFolderId": dest_folder_id, "destTitle": None}
    data = docspace_request(f"/api/2.0/files/file/{file_id}/copyas", "POST", json_body=payload)
    return data is not None

  def copy_templates_to_home(template_folder_id: int, home_folder_id: int) -> None:
    files = list_files_in_folder(template_folder_id)
    if not files:
      print(f"[WARN] No files found in TEMPLATE_FOLDER_ID={template_folder_id}. Nothing to copy.")
      return

    for f in files:
      raw_id = f.get("id")
      try:
        file_id = int(raw_id)
      except Exception:
        continue

      ok = copy_file_to_folder(file_id, home_folder_id)
      if ok:
        print(f"[INFO] Template copied: fileId={file_id} -> homeFolderId={home_folder_id}")
      else:
        print(f"[WARN] Failed to copy template: fileId={file_id} -> homeFolderId={home_folder_id}")

  # Step 4: Share the home folder with the user (and optional HR group)
  def share_home_folder(home_folder_id: int, user_id: str) -> bool:
    share = [
      {"shareTo": user_id, "access": "ReadWrite"},
    ]

    if HR_GROUP_ID:
      share.append({"shareTo": str(HR_GROUP_ID), "access": "Read"})

    payload = {"share": share}
    data = docspace_request(f"/api/2.0/files/folder/{home_folder_id}/share", "PUT", json_body=payload)
    return data is not None

  # Step 5: Send a welcome message (optional)
  def send_welcome_email(user_payload: Dict[str, Any], home_folder_id: int) -> None:
    email = str(user_payload.get("email") or "unknown")
    first_name = str(user_payload.get("firstName") or "there")
    folder_link = f"{API_HOST}/products/files/#/files/folder/{home_folder_id}"

    print("[WELCOME EMAIL]")
    print(f"To: {email}")
    print("Subject: Welcome to DocSpace")
    print(f"Body: Hello {first_name}, your personal folder has been created in /Employees.")
    print(f"Link: {folder_link}")

  def handle_user_created(user_id: str, user_payload: Dict[str, Any]) -> None:
    display_name = build_display_name(user_payload)
    print(f"[INFO] User created: userId={user_id}, displayName={display_name}")

    home_folder_id = get_or_create_home_folder(EMPLOYEES_ROOM_ID, display_name)
    if home_folder_id is None:
      return

    copy_templates_to_home(TEMPLATE_FOLDER_ID, home_folder_id)

    if share_home_folder(home_folder_id, user_id):
      print(f"[INFO] Home folder shared: homeFolderId={home_folder_id}")
    else:
      print(f"[WARN] Failed to share home folder: homeFolderId={home_folder_id}")

    send_welcome_email(user_payload, home_folder_id)
    print("[INFO] Provisioning completed.")

  @app.route("/docspace/webhook", methods=["POST", "HEAD", "GET"])
  def docspace_webhook():
    if request.method == "HEAD":
      return "", 200

    if request.method == "GET":
      return jsonify({"status": "ok"}), 200

    # Step 1: Receive and validate the user.created webhook
    raw_body = request.data
    signature_header = request.headers.get("x-docspace-signature-256")

    if not verify_signature(WEBHOOK_SECRET, raw_body, signature_header):
      print("[WARN] Invalid webhook signature.")
      return "Invalid signature", 401

    body = request.get_json(silent=True)
    if not isinstance(body, dict) or not body:
      return jsonify({"status": "ok"}), 200

    trigger, payload = extract_trigger_and_payload(body)
    if trigger not in ALLOWED_TRIGGERS:
      print(f"[INFO] Trigger '{trigger}' is not handled. Skipping.")
      return jsonify({"status": "ok"}), 200

    if not payload:
      print("[INFO] No payload object. Skipping.")
      return jsonify({"status": "ok"}), 200

    user_id = extract_user_id(payload)
    if user_id is None:
      print("[INFO] No user id in payload. Skipping.")
      return jsonify({"status": "ok"}), 200

    try:
      handle_user_created(user_id, payload)
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

## Step 1: Receive and validate the webhook request

When an event happens in DocSpace (for example, a user is created), DocSpace sends a request to your webhook URL.

At this step the script simply:

- receives the request from DocSpace,
- reads the event type (`event.trigger`),
- reads the main data object (`payload`).

If the event is not one you are interested in, the script stops and does nothing.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  app.post("/docspace/webhook", async (req, res) => {
    // Step 1: Receive and validate the webhook request
    const raw_body = req.rawBody;
    const signature_header = req.header("x-docspace-signature-256");

    if (!verify_signature(WEBHOOK_SECRET, raw_body, signature_header)) {
      console.log("[WARN] Invalid webhook signature.");
      return res.status(401).send("Invalid signature");
    }

    const body = req.body;
    if (!body || typeof body !== "object") return res.json({ status: "ok" });

    const { trigger, payload } = extract_trigger_and_payload(body);
    if (!ALLOWED_TRIGGERS.has(trigger)) {
      console.log(`[INFO] Trigger '${trigger}' is not handled. Skipping.`);
      return res.json({ status: "ok" });
    }

    if (!payload) {
      console.log("[INFO] No payload object. Skipping.");
      return res.json({ status: "ok" });
    }

    const user_id = extract_user_id(payload);
    if (user_id === null) {
      console.log("[INFO] No user id in payload. Skipping.");
      return res.json({ status: "ok" });
    }

    try {
      await handle_user_created(user_id, payload);
    } catch (e) {
      console.log("[ERROR] Handler failed:", e?.message || e);
      return res.status(500).send("Internal error");
    }

    return res.json({ status: "ok" });
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  @app.route("/docspace/webhook", methods=["POST", "HEAD", "GET"])
  def docspace_webhook():
    if request.method == "HEAD":
      return "", 200

    if request.method == "GET":
      return jsonify({"status": "ok"}), 200

    # Step 1: Receive and validate the user.created webhook
    raw_body = request.data
    signature_header = request.headers.get("x-docspace-signature-256")

    if not verify_signature(WEBHOOK_SECRET, raw_body, signature_header):
      print("[WARN] Invalid webhook signature.")
      return "Invalid signature", 401

    body = request.get_json(silent=True)
    if not isinstance(body, dict) or not body:
      return jsonify({"status": "ok"}), 200

    trigger, payload = extract_trigger_and_payload(body)
    if trigger not in ALLOWED_TRIGGERS:
      print(f"[INFO] Trigger '{trigger}' is not handled. Skipping.")
      return jsonify({"status": "ok"}), 200

    if not payload:
      print("[INFO] No payload object. Skipping.")
      return jsonify({"status": "ok"}), 200

    user_id = extract_user_id(payload)
    if user_id is None:
      print("[INFO] No user id in payload. Skipping.")
      return jsonify({"status": "ok"}), 200

    try:
      handle_user_created(user_id, payload)
    except Exception as e:
      print("[ERROR] Handler failed:", e)
      return "Internal error", 500

    return jsonify({"status": "ok"}), 200
  ```

  </TabItem>
</Tabs>

## Step 2: Create or reuse the user's home folder

A folder name is generated from the user data:
- `firstName` + `lastName` (fallback: `userName`, then `email`)

Then the script:
- lists items in the shared Employees location (`EMPLOYEES_ROOM_ID`)
- reuses an existing folder if a folder with the same title is found
- otherwise creates a new folder with the generated title.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function list_children(folder_id) {
    const data = await docspace_request(`/api/2.0/files/${folder_id}`, "GET", null);
    const node = get_response_node(data);

    if (Array.isArray(node)) {
      return node.filter((x) => x && typeof x === "object" && !Array.isArray(x));
    }

    if (node && typeof node === "object" && !Array.isArray(node)) {
      const items = node.files || node.folders || node.items || node.response || [];
      if (Array.isArray(items)) {
        return items.filter((x) => x && typeof x === "object" && !Array.isArray(x));
      }
    }

    if (data && typeof data === "object" && !Array.isArray(data)) {
      const resp = data.response;
      if (Array.isArray(resp)) {
        return resp.filter((x) => x && typeof x === "object" && !Array.isArray(x));
      }
    }

    return [];
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def list_children(folder_id: int) -> List[Dict[str, Any]]:
    data = docspace_request(f"/api/2.0/files/{folder_id}", "GET")
    node = get_response_node(data)

    if isinstance(node, list):
      return [x for x in node if isinstance(x, dict)]

    if isinstance(node, dict):
      items = node.get("files") or node.get("folders") or node.get("items") or node.get("response") or []
      if isinstance(items, list):
        return [x for x in items if isinstance(x, dict)]

    if isinstance(data, dict):
      resp = data.get("response")
      if isinstance(resp, list):
        return [x for x in resp if isinstance(x, dict)]

    return []
  ```

  </TabItem>
</Tabs>

## Step 3: Copy starter documents from the template folder

To populate the home folder with standard files, the script:
- lists files in `TEMPLATE_FOLDER_ID`
- copies each file into the home folder using the DocSpace copy endpoint.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function _is_folder_item(it) {
    return (
      it?.isFolder === true ||
      it?.folder === true ||
      String(it?.type || "").toLowerCase() === "folder"
    );
  }

  async function list_files_in_folder(folder_id) {
    const items = await list_children(folder_id);
    const out = [];

    for (const it of items) {
      if (_is_folder_item(it)) continue;
      if (it && typeof it === "object" && "id" in it) out.push(it);
    }

    return out;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def list_files_in_folder(folder_id: int) -> List[Dict[str, Any]]:
    items = list_children(folder_id)
    out: List[Dict[str, Any]] = []

    for it in items:
      is_folder = (
        it.get("isFolder") is True
        or it.get("folder") is True
        or str(it.get("type") or "").lower() == "folder"
      )
      if is_folder:
        continue

      if "id" in it:
        out.append(it)

    return out
  ```

  </TabItem>
</Tabs>

## Step 4: Share the home folder with the user (and optional HR group)

Access permissions are applied using the folder share endpoint.
In the example:
- the new user receives `ReadWrite`
- `HR_GROUP_ID` (if configured) receives `Read`.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function share_home_folder(home_folder_id, user_id) {
    const share = [{ shareTo: user_id, access: "ReadWrite" }];

    if (HR_GROUP_ID) {
      share.push({ shareTo: String(HR_GROUP_ID), access: "Read" });
    }

    const payload = { share };
    const data = await docspace_request(`/api/2.0/files/folder/${home_folder_id}/share`, "PUT", payload);
    return data !== null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def share_home_folder(home_folder_id: int, user_id: str) -> bool:
    share = [
      {"shareTo": user_id, "access": "ReadWrite"},
    ]

    if HR_GROUP_ID:
      share.append({"shareTo": str(HR_GROUP_ID), "access": "Read"})

    payload = {"share": share}
    data = docspace_request(f"/api/2.0/files/folder/{home_folder_id}/share", "PUT", json_body=payload)
    return data is not None
  ```

  </TabItem>
</Tabs>

## Step 5: Send a welcome message (optional)

A placeholder welcome notification is generated containing:
- recipient email
- a link to the created home folder
Replace this stub with SMTP/SendGrid/Slack/Teams depending on your integration.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function send_welcome_email(user_payload, home_folder_id) {
    const email = String(user_payload?.email || "unknown");
    const first_name = String(user_payload?.firstName || "there");
    const folder_link = `${API_HOST}/products/files/#/files/folder/${home_folder_id}`;

    console.log("[WELCOME EMAIL]");
    console.log(`To: ${email}`);
    console.log("Subject: Welcome to DocSpace");
    console.log(`Body: Hello ${first_name}, your personal folder has been created in /Employees.`);
    console.log(`Link: ${folder_link}`);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def send_welcome_email(user_payload: Dict[str, Any], home_folder_id: int) -> None:
    email = str(user_payload.get("email") or "unknown")
    first_name = str(user_payload.get("firstName") or "there")
    folder_link = f"{API_HOST}/products/files/#/files/folder/{home_folder_id}"

    print("[WELCOME EMAIL]")
    print(f"To: {email}")
    print("Subject: Welcome to DocSpace")
    print(f"Body: Hello {first_name}, your personal folder has been created in /Employees.")
    print(f"Link: {folder_link}")
  ```

  </TabItem>
</Tabs>