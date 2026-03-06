import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Automatically detect document status by filename and route to folders

This example shows how to automatically classify an uploaded document as **Draft**, **Final**, or **Signed** based on its filename, and move it to the corresponding folder in ONLYOFFICE DocSpace.

When a file is uploaded, a webhook triggers a backend script that:

- receives a file upload event,
- reads the file name,
- looks for keywords like `draft`, `final`, or `signed` in the filename,
- moves the file into the appropriate folder:
  - `/Draft`,
  - `/Final`,
  - `/Signed`.

This pattern is useful for simple workflow automation where users follow naming conventions (for example, `Contract_draft.docx`, `Agreement_final.pdf`, `NDA_signed.pdf`).

## Status definitions

In this example, **Draft**, **Final**, and **Signed** are *convention-based labels* derived from the file name. They are not built-in DocSpace document statuses.

- **Draft**: the file name contains `draft` (for example, `Contract_draft.docx`). The file is moved to `/Draft`.
- **Final**: the file name contains `final` (for example, `Agreement_final.pdf`). The file is moved to `/Final`.
- **Signed**: the file name contains `signed` (for example, `NDA_signed.pdf`). The file is moved to `/Signed`.

If no keyword is found, the script treats the status as unknown and does not move the file. If multiple keywords match, the script uses a fixed precedence rule (Signed → Final → Draft).

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform these operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.
3. Expose your webhook endpoint over HTTPS in production (terminate TLS in your app or behind a reverse proxy/load balancer, and reject non-HTTPS requests). For local testing, use a secure tunnel that provides an HTTPS URL.

## Webhook configuration

This example relies on DocSpace webhooks. To register and manage webhooks on your portal, see [Webhooks](/docspace/api-backend/get-started/how-it-works/webhooks.md) and the Help Center instructions: https://helpcenter.onlyoffice.com/administration/docspace-webhooks.aspx.

- Register a webhook and enable the triggers used in this example.
- Set the payload URL to your backend endpoint.
- Generate/set a secret key and store it on the backend as `WEBHOOK_SECRET`. DocSpace sends the signature in the `x-docspace-signature-256` header so you can validate the request against the raw body.

## Timeouts and retries

DocSpace retries failed webhook deliveries. According to the webhook docs:

- Up to 5 attempts are made, with exponential backoff (`2^attempt` seconds).
- Any successful status (any 2xx) stops retries.
- If your endpoint returns `410 Gone`, the webhook is removed from the portal.

Keep the handler fast: validate the request, enqueue background work if needed, and return quickly. Make processing idempotent because the same event may be delivered more than once.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  import express from "express";
  import crypto from "crypto";

  // Config
  const API_HOST = process.env.DOCSPACE_API_HOST; // Set DOCSPACE_API_HOST in env (recommended). For quick tests you can temporarily paste your portal URL here.
  const API_KEY = process.env.DOCSPACE_API_KEY; // Set DOCSPACE_API_KEY in env (recommended). For quick tests you can temporarily paste token here.
  const WEBHOOK_SECRET = process.env.DOCSPACE_WEBHOOK_SECRET; // Optional. If empty, the signature check is skipped (dev only).

  // Destination folders
  const DRAFT_FOLDER_ID = 539564;
  const FINAL_FOLDER_ID = 341029;
  const SIGNED_FOLDER_ID = 694513;

  // Triggers enabled in DocSpace webhook settings
  const ALLOWED_TRIGGERS = new Set<string>(["file.uploaded", "file.created"]);

  const HEADERS: Record<string, string> = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  // Optional: verify webhook signature (if WEBHOOK_SECRET is set)
  function verifySignature(rawBody: Buffer, signatureHeader: string | undefined) {
    if (!WEBHOOK_SECRET) return true;

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

  // DocSpace API helper
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
        console.error(`[ERROR] DocSpace request failed: ${method} ${url}`);
        console.error(`[ERROR] Status: ${res.status}, Message: ${text}`);
        return null;
      }

      return res.json();
    } catch (err: any) {
      console.error(`[ERROR] DocSpace request error: ${err?.message || err}`);
      return null;
    }
  }

  // Extract trigger and payload (same structure as working DocSpace webhooks)
  function extractTriggerAndPayload(body: any) {
    const trigger = String(body?.event?.trigger || "").trim();
    const payload = body?.payload && typeof body.payload === "object" ? body.payload : null;
    return { trigger, payload };
  }

  function extractFileId(payload: any) {
    const raw = payload?.id ?? null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }

  // Load file info (title)
  async function getFileInfo(fileId: number) {
    const data = await docspaceRequest(`/api/2.0/files/file/${fileId}`, "GET");
    const node = data && typeof data === "object" ? (data.response ?? null) : null;
    return node && typeof node === "object" ? node : null;
  }

  // Detect status by filename
  function detectStatusFromTitle(title: string) {
    const name = String(title || "").toLowerCase();
    if (name.includes("signed")) return "signed";
    if (name.includes("final")) return "final";
    if (name.includes("draft")) return "draft";
    return "unknown";
  }

  function getFolderIdForStatus(status: string) {
    if (status === "draft") return DRAFT_FOLDER_ID;
    if (status === "final") return FINAL_FOLDER_ID;
    if (status === "signed") return SIGNED_FOLDER_ID;
    return null;
  }

  // Move file to folder
  async function moveFileToFolder(fileId: number, destFolderId: number) {
    const payload = {
      fileIds: [fileId],
      destFolderId,
      deleteAfter: true,
      content: true,
      toFillOut: false,
    };

    const data = await docspaceRequest("/api/2.0/files/fileops/move", "PUT", payload);
    return Boolean(data);
  }

  // Main webhook logic
  async function handleWebhook(body: any) {
    const { trigger, payload } = extractTriggerAndPayload(body);

    if (!payload) {
      console.log("[INFO] No payload object. Skipping.");
      return;
    }

    if (!ALLOWED_TRIGGERS.has(trigger)) {
      console.log(`[INFO] Trigger '${trigger}' is not handled. Skipping.`);
      return;
    }

    const fileId = extractFileId(payload);
    if (fileId == null) {
      console.log("[INFO] No file ID in payload.id. Skipping.");
      return;
    }

    const fileInfo = await getFileInfo(fileId);
    const titleFromWebhook = String(payload?.title || "");
    const title = String(fileInfo?.title || titleFromWebhook || "Untitled");

    const status = detectStatusFromTitle(title);
    if (status === "unknown") {
      console.log(`[INFO] No status keyword in filename. Leaving file as is. fileId=${fileId}`);
      return;
    }

    const destFolderId = getFolderIdForStatus(status);
    if (!destFolderId) {
      console.warn(`[WARN] No folder configured for status '${status}'. Skipping.`);
      return;
    }

    const ok = await moveFileToFolder(fileId, destFolderId);
    if (!ok) {
      console.error(`[ERROR] Failed to move file ${fileId} to folder ${destFolderId}.`);
      return;
    }

    console.log(`[INFO] File routed: fileId=${fileId}, status=${status}, destFolderId=${destFolderId}`);
  }

  // Express server
  const app = express();

  // Keep raw body for optional signature verification
  app.use(
    express.json({
      limit: "2mb",
      verify: (req: any, _res, buf) => {
        req.rawBody = buf;
      },
    })
  );

  app.head("/docspace/webhook", (_req, res) => {
    res.status(200).send("");
  });

  app.get("/docspace/webhook", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  app.post("/docspace/webhook", async (req: any, res) => {
    const rawBody: Buffer = req.rawBody || Buffer.from(JSON.stringify(req.body || {}));
    const signature = req.headers["x-docspace-signature-256"] as string | undefined;

    if (!verifySignature(rawBody, signature)) {
      console.warn("[WARN] Invalid webhook signature.");
      return res.status(401).send("Invalid signature");
    }

    try {
      await handleWebhook(req.body);
    } catch (err: any) {
      console.error("[ERROR]", err?.message || err);
      return res.status(500).send("Internal error");
    }

    return res.status(200).json({ status: "ok" });
  });

  app.listen(3000, () => {
    console.log("DocSpace webhook listener: http://localhost:3000/docspace/webhook");
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

  app = Flask(__name__)

  # Config
  API_HOST = os.environ.get("DOCSPACE_API_HOST")  # Set DOCSPACE_API_HOST in env (recommended). For quick tests you can temporarily paste your portal URL here.
  API_KEY = os.environ.get("DOCSPACE_API_KEY")  # Set DOCSPACE_API_KEY in env (recommended). For quick tests you can temporarily paste token here.
  WEBHOOK_SECRET = os.environ.get("DOCSPACE_WEBHOOK_SECRET")  # Optional. If empty, the signature check is skipped (dev only).

  # Destination folders
  DRAFT_FOLDER_ID = 539564
  FINAL_FOLDER_ID = 341029
  SIGNED_FOLDER_ID = 694513

  # Triggers enabled in DocSpace webhook settings
  ALLOWED_TRIGGERS = {"file.uploaded", "file.created"}

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  # Optional: verify webhook signature (if WEBHOOK_SECRET is set)
  def verify_signature(secret_key, raw_body, signature_header):
    if not secret_key:
      return True

    if not signature_header or not signature_header.startswith("sha256="):
      return False

    received = signature_header.split("=", 1)[1].strip().lower()
    expected = hmac.new(secret_key.encode("utf-8"), raw_body, hashlib.sha256).hexdigest().lower()
    return hmac.compare_digest(received, expected)

  # DocSpace API helper
  def docspace_request(path, method= "GET", json_body= None):
    url = f"{API_HOST}{path}"

    try:
      resp = requests.request(method.upper(), url, headers=HEADERS, json=json_body, timeout=30)
    except Exception as e:
      print(f"[ERROR] DocSpace request error: {e}")
      return None

    if not (200 <= resp.status_code < 300):
      print(f"[ERROR] DocSpace request failed: {method} {url}")
      print(f"[ERROR] Status: {resp.status_code}, Message: {resp.text}")
      return None

    try:
      return resp.json()
    except Exception:
      print(f"[ERROR] Invalid JSON response from: {url}")
      return None

  # Extract trigger and payload (same structure as working DocSpace webhooks)
  def extract_trigger_and_payload(body):
    trigger = str(((body.get("event") or {}).get("trigger") or "")).strip()
    payload = body.get("payload")
    return trigger, payload if isinstance(payload, dict) else None

  def extract_file_id(payload):
    raw = payload.get("id")
    try:
      return int(raw) if raw is not None else None
    except Exception:
      return None

  # Load file info (title)
  def get_file_info(file_id):
    data = docspace_request(f"/api/2.0/files/file/{file_id}", method="GET")
    if not isinstance(data, dict):
      return None
    node = data.get("response")
    return node if isinstance(node, dict) else None

  # Detect status by filename
  def detect_status_from_title(title):
    name = str(title or "").lower()
    if "signed" in name:
      return "signed"
    if "final" in name:
      return "final"
    if "draft" in name:
      return "draft"
    return "unknown"

  def get_folder_id_for_status(status):
    if status == "draft":
      return DRAFT_FOLDER_ID
    if status == "final":
      return FINAL_FOLDER_ID
    if status == "signed":
      return SIGNED_FOLDER_ID
    return None

  # Move file to folder
  def move_file_to_folder(file_id, dest_folder_id):
    payload = {
      "fileIds": [file_id],
      "destFolderId": dest_folder_id,
      "deleteAfter": True,
      "content": True,
      "toFillOut": False,
    }
    data = docspace_request("/api/2.0/files/fileops/move", method="PUT", json_body=payload)
    return data is not None

  # Main webhook logic
  def handle_webhook(body):
    trigger, payload = extract_trigger_and_payload(body)

    if not payload:
      print("[INFO] No payload object. Skipping.")
      return

    if trigger not in ALLOWED_TRIGGERS:
      print(f"[INFO] Trigger '{trigger}' is not handled. Skipping.")
      return

    file_id = extract_file_id(payload)
    if file_id is None:
      print("[INFO] No file ID in payload.id. Skipping.")
      return

    file_info = get_file_info(file_id)
    title_from_webhook = str(payload.get("title") or "")
    title = str((file_info or {}).get("title") or title_from_webhook or "Untitled")

    status = detect_status_from_title(title)
    if status == "unknown":
      print(f"[INFO] No status keyword in filename. Leaving file as is. fileId={file_id}")
      return

    dest_folder_id = get_folder_id_for_status(status)
    if not dest_folder_id:
      print(f"[WARN] No folder configured for status '{status}'. Skipping.")
      return

    if not move_file_to_folder(file_id, dest_folder_id):
      print(f"[ERROR] Failed to move file {file_id} to folder {dest_folder_id}.")
      return

    print(f"[INFO] File routed: fileId={file_id}, status={status}, destFolderId={dest_folder_id}")

  # Webhook endpoint
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

    try:
      handle_webhook(body)
    except Exception as e:
      print("[ERROR] Handler failed:", e)
      return "Internal error", 500

    return jsonify({"status": "ok"}), 200

  if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3000))
    print(f"DocSpace webhook listener: http://localhost:{port}/docspace/webhook")
    app.run(host="0.0.0.0", port=port)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Receive the file upload webhook

DocSpace sends an HTTP POST notification when a file is created or uploaded.

The script reads `event.trigger` and `payload` from the webhook JSON.
Only upload-related triggers are processed (for example, `file.uploaded`, `file.created`). All other triggers are ignored.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function extractTriggerAndPayload(body: any) {
    const trigger = String(body?.event?.trigger || "").trim();
    const payload = body?.payload && typeof body.payload === "object" ? body.payload : null;
    return { trigger, payload };
  }

  function extractFileId(payload: any) {
    const raw = payload?.id ?? null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def extract_trigger_and_payload(body):
    trigger = str(((body.get("event") or {}).get("trigger") or "")).strip()
    payload = body.get("payload")
    return trigger, payload if isinstance(payload, dict) else None

  def extract_file_id(payload):
    raw = payload.get("id")
    try:
      return int(raw) if raw is not None else None
    except Exception:
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Read the uploaded file name

To classify the document reliably, the script loads file metadata from DocSpace and reads the actual file title.
It requests file details using GET [/api/2.0/files/file/:fileId](/docspace/api-backend/usage-api/get-file-info).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getFileInfo(fileId: number) {
    const data = await docspaceRequest(`/api/2.0/files/file/${fileId}`, "GET");
    const node = data && typeof data === "object" ? (data.response ?? null) : null;
    return node && typeof node === "object" ? node : null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_file_info(file_id):
    data = docspace_request(f"/api/2.0/files/file/{file_id}", method="GET")
    if not isinstance(data, dict):
      return None
    node = data.get("response")
    return node if isinstance(node, dict) else None
  ```

  </TabItem>
</Tabs>

## Step 3: Detect document status by filename

The script checks the filename for keywords:

- contains `signed` - status is **Signed**
- contains `final` - status is **Final**
- contains `draft` - status is **Draft**

If the status is unknown, the script does nothing and leaves the file where it is.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function detectStatusFromTitle(title: string) {
    const name = String(title || "").toLowerCase();
    if (name.includes("signed")) return "signed";
    if (name.includes("final")) return "final";
    if (name.includes("draft")) return "draft";
    return "unknown";
  }

  function getFolderIdForStatus(status: string) {
    if (status === "draft") return DRAFT_FOLDER_ID;
    if (status === "final") return FINAL_FOLDER_ID;
    if (status === "signed") return SIGNED_FOLDER_ID;
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def detect_status_from_title(title):
    name = str(title or "").lower()
    if "signed" in name:
      return "signed"
    if "final" in name:
      return "final"
    if "draft" in name:
      return "draft"
    return "unknown"

  def get_folder_id_for_status(status):
    if status == "draft":
      return DRAFT_FOLDER_ID
    if status == "final":
      return FINAL_FOLDER_ID
    if status == "signed":
      return SIGNED_FOLDER_ID
    return None
  ```

  </TabItem>
</Tabs>

## Step 4: Move the file into the corresponding folder

If the status is recognized, the script moves the file into the corresponding folder using PUT [/api/2.0/files/fileops/move](/docspace/api-backend/usage-api/move-batch-items).

The request body contains:

`{ "fileIds": [<fileId>], "destFolderId": <folderId>, "deleteAfter": true, "content": true, "toFillOut": false }`

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function moveFileToFolder(fileId: number, destFolderId: number) {
    const payload = {
      fileIds: [fileId],
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
  def move_file_to_folder(file_id, dest_folder_id):
    payload = {
      "fileIds": [file_id],
      "destFolderId": dest_folder_id,
      "deleteAfter": True,
      "content": True,
      "toFillOut": False,
    }
    data = docspace_request("/api/2.0/files/fileops/move", method="PUT", json_body=payload)
    return data is not None
  ```

  </TabItem>
</Tabs>
