import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Set "Need Review" comment when a file is updated

This example demonstrates how to automatically set a file comment to Need Review whenever a file is updated in ONLYOFFICE DocSpace.

When DocSpace sends a webhook to your backend, the receiver:
- verifies the webhook signature (optional but recommended),
- reads the event trigger (`event.trigger`) and file data (`payload`),
- accepts only update triggers (for example, `file.updated`),
- extracts `fileId` from `payload.id`,
- loads the file info to get a version value,
- sets the file comment to `Need Review` using the DocSpace API.


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

  // Optional: webhook signature verification (recommended)
  const WEBHOOK_SECRET = "YOUR_WEBHOOK_SECRET";

  // Comment text to enforce on every update
  const NEED_REVIEW_TEXT = "Need Review";

  // Put here the exact trigger names you enabled in DocSpace Webhooks
  const ALLOWED_TRIGGERS = new Set([
    "file.updated",
    // "file.versionCreated",
  ]);

  const HEADERS = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  async function dsRequest(path, method = "GET", body = null) {
    const url = `${API_HOST}${path}`;

    try {
      const res = await fetch(url, {
        method,
        headers: HEADERS,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.log(`[ERROR] DocSpace request failed: ${method} ${url}`);
        console.log(`[ERROR] Status: ${res.status}, Message: ${text}`);
        return null;
      }

      return await res.json();
    } catch (err) {
      console.log(`[ERROR] DocSpace request error: ${err?.message || err}`);
      return null;
    }
  }

  function getResponseNode(data) {
    if (!data || typeof data !== "object") return null;
    return data.response != null ? data.response : data;
  }

  // Step 1: Receive and verify the webhook request
  function verifySignature(rawBody, signatureHeader) {
    // If WEBHOOK_SECRET is empty, the signature check is skipped.
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

  function extractTriggerAndPayload(body) {
    const trigger = String(body?.event?.trigger || "").trim();
    const payload = body?.payload && typeof body.payload === "object" ? body.payload : null;
    return { trigger, payload };
  }

  // Step 2: Detect file update events and extract the file ID
  function extractFileId(payload) {
    const n = Number(payload?.id ?? null);
    return Number.isFinite(n) ? n : null;
  }

  // Step 3: Read file information (confirm access + obtain version)
  async function getFileInfo(fileId) {
    const data = await dsRequest(`/api/2.0/files/file/${fileId}`, "GET");
    const node = getResponseNode(data);
    return node && typeof node === "object" ? node : null;
  }

  // Step 4: Set the comment to NEED_REVIEW_TEXT
  async function setFileComment(fileId, version, comment) {
    const payload = { version, comment };
    const data = await dsRequest(`/api/2.0/files/file/${fileId}/comment`, "PUT", payload);
    return Boolean(data);
  }

  async function handleWebhook(body) {
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
      console.log("[INFO] No valid file id in payload.id. Skipping.");
      return;
    }

    console.log("[INFO] File update webhook received");
    console.log(`  trigger: ${trigger}`);
    console.log(`  fileId: ${fileId}`);

    const fileInfo = await getFileInfo(fileId);
    if (!fileInfo) {
      console.log(`[WARN] Cannot read file info for fileId=${fileId}. Skipping.`);
      return;
    }

    const fileVersionRaw = fileInfo.version ?? fileInfo.versionNumber ?? 1;
    const fileVersion = Number.isFinite(Number(fileVersionRaw)) ? Number(fileVersionRaw) : 1;

    const ok = await setFileComment(fileId, fileVersion, NEED_REVIEW_TEXT);
    if (ok) {
      console.log(`[OK] Comment set for fileId=${fileId}: "${NEED_REVIEW_TEXT}"`);
    } else {
      console.log(`[ERROR] Failed to set comment for fileId=${fileId}`);
    }
  }

  // Minimal Express webhook receiver
  const app = express();

  // Capture raw body for signature verification
  app.use(
    express.json({
      limit: "2mb",
      verify: (req, _res, buf) => {
        req.rawBody = buf;
      },
    })
  );

  app.head("/docspace/review-comment", (_req, res) => {
    res.status(200).send("");
  });

  app.get("/docspace/review-comment", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  app.post("/docspace/review-comment", async (req, res) => {
    if (!req.rawBody) {
      console.log("[WARN] Missing raw body buffer. Cannot verify signature.");
      return res.status(400).send("Missing raw body");
    }

    const signature = req.headers["x-docspace-signature-256"];

    if (!verifySignature(req.rawBody, signature)) {
      console.log("[WARN] Invalid webhook signature.");
      return res.status(401).send("Invalid signature");
    }

    try {
      await handleWebhook(req.body);
    } catch (err) {
      console.log(`[ERROR] Handler error: ${err?.message || err}`);
      return res.status(500).send("Internal error");
    }

    return res.status(200).json({ status: "ok" });
  });

  app.listen(3000, () => {
    console.log("Webhook server listening on http://localhost:3000/docspace/review-comment");
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  from flask import Flask, request, jsonify
  import hmac
  import hashlib
  import os
  import requests
  from typing import Optional, Dict, Any, Tuple

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Optional: webhook signature verification (recommended)
  WEBHOOK_SECRET = "YOUR_WEBHOOK_SECRET"

  # Comment text to enforce on every update
  NEED_REVIEW_TEXT = "Need Review"

  # Put here the exact trigger names you enabled in DocSpace Webhooks
  ALLOWED_TRIGGERS = {
    "file.updated",
    # "file.versionCreated",
  }

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  app = Flask(__name__)

  def ds_request(method: str, path: str, json_body: Optional[dict] = None) -> Optional[dict]:
    url = f"{API_HOST}{path}"

    try:
      r = requests.request(method.upper(), url, headers=HEADERS, json=json_body)
    except Exception as e:
      print(f"[ERROR] Request failed: {method} {url} -> {e}")
      return None

    if r.status_code < 200 or r.status_code >= 300:
      txt = r.text if r.text else ""
      print(f"[ERROR] {method} {url} -> {r.status_code} {txt}")
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
    # If WEBHOOK_SECRET is empty, the signature check is skipped.
    if not secret_key:
      return True

    if not signature_header or not signature_header.startswith("sha256="):
      return False

    received = signature_header.split("=", 1)[1].strip().lower()
    expected = hmac.new(secret_key.encode("utf-8"), raw_body, hashlib.sha256).hexdigest().lower()

    return hmac.compare_digest(received, expected)

  def extract_trigger_and_payload(body: Dict[str, Any]) -> Tuple[str, Optional[Dict[str, Any]]]:
    trigger = str(((body.get("event") or {}).get("trigger") or "")).strip()
    payload = body.get("payload")
    return trigger, payload if isinstance(payload, dict) else None

  # Step 2: Detect file update events and extract the file ID
  def extract_file_id(payload: Dict[str, Any]) -> Optional[int]:
    raw = payload.get("id")
    try:
      return int(raw) if raw is not None else None
    except Exception:
      return None

  # Step 3: Read file information (confirm access + obtain version)
  def get_file_info(file_id: int) -> Optional[Dict[str, Any]]:
    data = ds_request("GET", f"/api/2.0/files/file/{file_id}")
    node = get_response_node(data)
    return node if isinstance(node, dict) else None

  # Step 4: Set the comment to NEED_REVIEW_TEXT
  def set_file_comment(file_id: int, version: int, comment: str) -> bool:
    payload = {"version": int(version), "comment": comment}
    data = ds_request("PUT", f"/api/2.0/files/file/{file_id}/comment", json_body=payload)
    return isinstance(data, dict)

  def handle_webhook(body: Dict[str, Any]) -> None:
    trigger, payload = extract_trigger_and_payload(body)

    if not payload:
      print("[INFO] No payload object. Skipping.")
      return

    if trigger not in ALLOWED_TRIGGERS:
      print(f"[INFO] Trigger '{trigger}' is not handled. Skipping.")
      return

    file_id = extract_file_id(payload)
    if file_id is None:
      print("[INFO] No valid file id in payload.id. Skipping.")
      return

    print("[INFO] File update webhook received")
    print(f"  trigger: {trigger}")
    print(f"  fileId: {file_id}")

    file_info = get_file_info(file_id)
    if not file_info:
      print(f"[WARN] Cannot read file info for fileId={file_id}. Skipping.")
      return

    file_version_raw = file_info.get("version") or file_info.get("versionNumber") or 1
    try:
      file_version = int(file_version_raw)
    except Exception:
      file_version = 1

    ok = set_file_comment(file_id, file_version, NEED_REVIEW_TEXT)
    if ok:
      print(f'[OK] Comment set for fileId={file_id}: "{NEED_REVIEW_TEXT}"')
    else:
      print(f"[ERROR] Failed to set comment for fileId={file_id}")

  @app.route("/docspace/review-comment", methods=["POST", "HEAD", "GET"])
  def review_comment_webhook():
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
      print("[INFO] Empty or non-dict payload. Skipping.")
      return jsonify({"status": "ok"}), 200

    try:
      handle_webhook(body)
    except Exception as e:
      print(f"[ERROR] Error while handling webhook: {e}")
      return "Internal error", 500

    return jsonify({"status": "ok"}), 200

  if __name__ == "__main__":
    port = int(os.environ.get("PORT", 3000))
    print(f"DocSpace webhook listener: http://localhost:{port}/docspace/review-comment")
    app.run(host="0.0.0.0", port=port)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Receive the webhook request

When a webhook trigger fires, DocSpace sends an HTTP POST request to your endpoint
(for example, `/docspace/review-comment`).

At this step, the backend:

- receives the webhook request and reads its JSON body,
- optionally verifies that the request really comes from DocSpace using the secret key configured for the webhook.

If signature validation is enabled and the check fails, the endpoint returns 401 and stops processing the request.

Signature validation is optional.
If `WEBHOOK_SECRET` is not set, the example skips this check and processes the webhook payload directly.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function verifySignature(rawBody, signatureHeader) {
    // If WEBHOOK_SECRET is empty, the signature check is skipped.
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
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def verify_signature(secret_key: str, raw_body: bytes, signature_header: Optional[str]) -> bool:
    # If WEBHOOK_SECRET is empty, the signature check is skipped.
    if not secret_key:
      return True

    if not signature_header or not signature_header.startswith("sha256="):
      return False

    received = signature_header.split("=", 1)[1].strip().lower()
    expected = hmac.new(secret_key.encode("utf-8"), raw_body, hashlib.sha256).hexdigest().lower()

    return hmac.compare_digest(received, expected)
  ```

  </TabItem>
</Tabs>

## Step 2: Detect file update events and extract the file ID

The webhook payload is expected to have this structure:
·	`event.trigger` — trigger name (for example, `file.updated`)
·	`payload` — file data
·	`payload.id` — file ID

Only triggers listed in `ALLOWED_TRIGGERS` are processed. Others are ignored.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function extractFileId(payload) {
    const n = Number(payload?.id ?? null);
    return Number.isFinite(n) ? n : null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def extract_file_id(payload: Dict[str, Any]) -> Optional[int]:
    raw = payload.get("id")
    try:
      return int(raw) if raw is not None else None
    except Exception:
      return None
  ```

  </TabItem>
</Tabs>

## Step 3: Read file information

The handler calls GET [/api/2.0/files/file/{fileId}](/docspace/api-backend/usage-api/get-file-info)
This confirms that the file exists and the access token can read it. The file info is also used as a fallback source for a version value.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getFileInfo(fileId) {
    const data = await dsRequest(`/api/2.0/files/file/${fileId}`, "GET");
    const node = getResponseNode(data);
    return node && typeof node === "object" ? node : null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_file_info(file_id: int) -> Optional[Dict[str, Any]]:
    data = ds_request("GET", f"/api/2.0/files/file/{file_id}")
    node = get_response_node(data)
    return node if isinstance(node, dict) else None
  ```

  </TabItem>
</Tabs>

## Step 4: Set the comment to "Need Review"

For every matching update event, the script sets the file comment to `NEED_REVIEW_TEXT` PUT [/api/2.0/files/file/{fileId}/comment](/docspace/api-backend/usage-api/update-file-comment)

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function setFileComment(fileId, version, comment) {
    const payload = { version, comment };
    const data = await dsRequest(`/api/2.0/files/file/${fileId}/comment`, "PUT", payload);
    return Boolean(data);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def set_file_comment(file_id: int, version: int, comment: str) -> bool:
    payload = {"version": int(version), "comment": comment}
    data = ds_request("PUT", f"/api/2.0/files/file/{file_id}/comment", json_body=payload)
    return isinstance(data, dict)
  ```

  </TabItem>
</Tabs>