import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Automatically sanitize file names on upload

This example shows how to enforce consistent and safe file naming rules in ONLYOFFICE DocSpace by automatically renaming files right after upload.

When DocSpace sends a webhook to your backend, the handler:

- reads `event.trigger` and `payload`,
- accepts only upload triggers (`file.uploaded`, `file.created`),
- extracts `payload.id` (fileId) and `payload.title`,
- generates a normalized title,
- renames the file via the DocSpace API.

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

  // Config
  const API_HOST = "https://yourportal.onlyoffice.com";
  const API_KEY = "YOUR_API_KEY";
  const WEBHOOK_SECRET = "your_webhook_secret"; // optional

  const ALLOWED_TRIGGERS = new Set<string>(["file.uploaded", "file.created"]);

  const HEADERS: Record<string, string> = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  // Step 1: Webhook validation (optional)
  function verifySignature(rawBody: Buffer, signatureHeader: string | undefined) {
    if (!WEBHOOK_SECRET) return true; // signature is optional

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

  // DocSpace request helper
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
        console.log(`[ERROR] ${method} ${url} -> ${res.status} ${text}`);
        return null;
      }

      return res.json();
    } catch (err: any) {
      console.log(`[ERROR] Request error: ${err?.message || err}`);
      return null;
    }
  }

  // Step 2: Read trigger + payload (your real webhook shape)
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

  function extractTitle(payload: any) {
    const title = payload?.title ?? null;
    return title ? String(title) : "";
  }

  // Optional: load title from API if webhook payload has no title
  async function getFileTitle(fileId: number) {
    const data = await docspaceRequest(`/api/2.0/files/file/${fileId}`, "GET");
    const node = data && typeof data === "object" ? (data.response ?? null) : null;
    const title = node && typeof node === "object" ? (node as any).title : null;
    return title ? String(title) : null;
  }

  // Step 3: Build a safe title
  function sanitizeFileName(originalName: string, maxLength: number = 100) {
    const name = String(originalName || "").trim();

    const lastDot = name.lastIndexOf(".");
    const hasExt = lastDot > 0 && lastDot < name.length - 1;

    const baseRaw = hasExt ? name.slice(0, lastDot) : name;
    const extRaw = hasExt ? name.slice(lastDot) : "";

    let base = baseRaw.replace(/ /g, "_");
    base = base.replace(/[^A-Za-z0-9_\.-]+/g, "_");
    base = base.replace(/_+/g, "_");
    base = base.replace(/^[_\.-]+|[_\.-]+$/g, "");

    if (!base) base = "file";

    if ((base + extRaw).length > maxLength) {
      const allowedBaseLen = Math.max(maxLength - extRaw.length, 1);
      base = base.slice(0, allowedBaseLen);
    }

    return base + extRaw;
  }

  // Rename via API
  async function renameFile(fileId: number, newTitle: string) {
    const payload = { title: newTitle };
    const data = await docspaceRequest(`/api/2.0/files/file/${fileId}`, "PUT", payload);
    return Boolean(data);
  }

  // Main flow
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
      console.log("[INFO] No numeric payload.id (fileId). Skipping.");
      return;
    }

    let title = extractTitle(payload);
    if (!title) {
      const apiTitle = await getFileTitle(fileId);
      title = apiTitle || "";
    }

    if (!title) {
      console.log(`[WARN] Cannot determine title for fileId=${fileId}. Skipping.`);
      return;
    }

    const safeTitle = sanitizeFileName(title, 100);

    if (safeTitle === title) {
      console.log(`[INFO] Title already OK. fileId=${fileId}, title="${title}"`);
      return;
    }

    const ok = await renameFile(fileId, safeTitle);
    if (!ok) {
      console.log(`[ERROR] Failed to rename fileId=${fileId}.`);
      return;
    }

    console.log(`[INFO] Renamed fileId=${fileId}: "${title}" -> "${safeTitle}"`);
  }

  // Express webhook receiver
  const app = express();

  // keep raw body for optional signature validation
  app.use(
    express.json({
      limit: "2mb",
      verify: (req: any, _res, buf) => {
        req.rawBody = buf;
      },
    })
  );

  app.head("/docspace/sanitize-upload", (_req, res) => res.status(200).send(""));
  app.get("/docspace/sanitize-upload", (_req, res) => res.status(200).json({ status: "ok" }));

  app.post("/docspace/sanitize-upload", async (req: any, res) => {
    const rawBody: Buffer = req.rawBody || Buffer.from(JSON.stringify(req.body || {}));
    const signature = req.headers["x-docspace-signature-256"] as string | undefined;

    if (!verifySignature(rawBody, signature)) {
      console.log("[WARN] Invalid webhook signature.");
      return res.status(401).send("Invalid signature");
    }

    try {
      await handleWebhook(req.body);
    } catch (err: any) {
      console.log("[ERROR]", err?.message || err);
      return res.status(500).send("Internal error");
    }

    return res.status(200).json({ status: "ok" });
  });

  app.listen(3000, () => {
    console.log("Webhook listener: http://localhost:3000/docspace/sanitize-upload");
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
  import re
  from typing import Optional, Dict, Any, Tuple

  # Config
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"
  WEBHOOK_SECRET = "your_webhook_secret"  # optional

  ALLOWED_TRIGGERS = {"file.uploaded", "file.created"}

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  app = Flask(__name__)

  # Step 1: Webhook validation (optional)
  def verify_signature(secret_key: str, raw_body: bytes, signature_header: Optional[str]) -> bool:
    if not secret_key:
      return True

    if not signature_header or not signature_header.startswith("sha256="):
      return False

    received = signature_header.split("=", 1)[1].strip().lower()
    expected = hmac.new(secret_key.encode("utf-8"), raw_body, hashlib.sha256).hexdigest().lower()
    return hmac.compare_digest(received, expected)

  # DocSpace request helper
  def docspace_request(path: str, method: str = "GET", json_body: Optional[Dict[str, Any]] = None) -> Optional[Dict[str, Any]]:
    url = f"{API_HOST}{path}"

    try:
      resp = requests.request(method.upper(), url, headers=HEADERS, json=json_body)
    except Exception as e:
      print(f"[ERROR] Request failed: {method} {url} -> {e}")
      return None

    if resp.status_code < 200 or resp.status_code >= 300:
      print(f"[ERROR] {method} {url} -> {resp.status_code} {resp.text}")
      return None

    try:
      return resp.json()
    except Exception:
      print(f"[ERROR] Non-JSON response: {method} {url}")
      return None

  # Step 2: Read trigger + payload (your real webhook shape)
  def extract_trigger_and_payload(body: Dict[str, Any]) -> Tuple[str, Optional[Dict[str, Any]]]:
    trigger = str(((body.get("event") or {}).get("trigger") or "")).strip()
    payload = body.get("payload")
    return trigger, payload if isinstance(payload, dict) else None

  def extract_file_id(payload: Dict[str, Any]) -> Optional[int]:
    raw = payload.get("id")
    try:
      return int(raw) if raw is not None else None
    except Exception:
      return None

  def extract_title(payload: Dict[str, Any]) -> str:
    title = payload.get("title")
    return str(title) if title else ""

  def get_file_title(file_id: int) -> Optional[str]:
    data = docspace_request(f"/api/2.0/files/file/{file_id}", "GET")
    if not isinstance(data, dict):
      return None

    node = data.get("response")
    if not isinstance(node, dict):
      return None

    title = node.get("title")
    return str(title) if title else None

  # Step 3: Build a safe title
  def sanitize_file_name(original_name: str, max_length: int = 100) -> str:
    name = str(original_name or "").strip()

    if "." in name:
      base, ext = name.rsplit(".", 1)
      ext = "." + ext
    else:
      base, ext = name, ""

    base = base.replace(" ", "_")
    base = re.sub(r"[^A-Za-z0-9_\.-]+", "_", base)
    base = re.sub(r"_+", "_", base)
    base = base.strip("_.-")

    if not base:
      base = "file"

    if len(base + ext) > max_length:
      allowed_base_length = max(max_length - len(ext), 1)
      base = base[:allowed_base_length]

    return base + ext

  def rename_file(file_id: int, new_title: str) -> bool:
    payload = {"title": new_title}
    data = docspace_request(f"/api/2.0/files/file/{file_id}", "PUT", json_body=payload)
    return data is not None

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
      print("[INFO] No numeric payload.id (fileId). Skipping.")
      return

    title = extract_title(payload)
    if not title:
      api_title = get_file_title(file_id)
      title = api_title or ""

    if not title:
      print(f"[WARN] Cannot determine title for fileId={file_id}. Skipping.")
      return

    safe_title = sanitize_file_name(title, max_length=100)
    if safe_title == title:
      print(f'[INFO] Title already OK. fileId={file_id}, title="{title}"')
      return

    if not rename_file(file_id, safe_title):
      print(f"[ERROR] Failed to rename fileId={file_id}.")
      return

    print(f'[INFO] Renamed fileId={file_id}: "{title}" -> "{safe_title}"')

  @app.route("/docspace/sanitize-upload", methods=["POST", "HEAD", "GET"])
  def docspace_sanitize_upload():
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
    print(f"Webhook listener: http://localhost:{port}/docspace/sanitize-upload")
    app.run(host="0.0.0.0", port=port)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Read the webhook event and file data

The handler receives a DocSpace webhook with:

- `event.trigger` — event name (for example `file.uploaded`)
- `payload` — file object with `id` and usually `title`

The script processes only `file.uploaded` and `file.created`, and extracts:

- `fileId` from `payload.id`
- `title` from `payload.title`

If the title is missing, the script loads it via GET [/api/2.0/files/file/{fileId}](/docspace/api-backend/usage-api/get-file-info)

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function verifySignature(rawBody: Buffer, signatureHeader: string | undefined) {
    if (!WEBHOOK_SECRET) return true; // signature is optional

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

## Step 2: Generate a safe file name

The script normalizes the title:

- replaces spaces with `_`
- replaces unsupported characters with `_`
- collapses repeated `_`
- trims separators
- preserves the extension
- limits total length

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function extractTriggerAndPayload(body: any) {
    const trigger = String(body?.event?.trigger || "").trim();
    const payload = body?.payload && typeof body.payload === "object" ? body.payload : null;
    return { trigger, payload };
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def extract_trigger_and_payload(body: Dict[str, Any]) -> Tuple[str, Optional[Dict[str, Any]]]:
    trigger = str(((body.get("event") or {}).get("trigger") or "")).strip()
    payload = body.get("payload")
    return trigger, payload if isinstance(payload, dict) else None
  ```

  </TabItem>
</Tabs>

## Step 3: Rename the file in DocSpace

If the sanitized name differs from the original title, the script renames the file using PUT [/api/2.0/files/file/{fileId}](/docspace/api-backend/usage-api/update-file) with body `{ "title": "<newTitle>" }`

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function sanitizeFileName(originalName: string, maxLength: number = 100) {
    const name = String(originalName || "").trim();

    const lastDot = name.lastIndexOf(".");
    const hasExt = lastDot > 0 && lastDot < name.length - 1;

    const baseRaw = hasExt ? name.slice(0, lastDot) : name;
    const extRaw = hasExt ? name.slice(lastDot) : "";

    let base = baseRaw.replace(/ /g, "_");
    base = base.replace(/[^A-Za-z0-9_\.-]+/g, "_");
    base = base.replace(/_+/g, "_");
    base = base.replace(/^[_\.-]+|[_\.-]+$/g, "");

    if (!base) base = "file";

    if ((base + extRaw).length > maxLength) {
      const allowedBaseLen = Math.max(maxLength - extRaw.length, 1);
      base = base.slice(0, allowedBaseLen);
    }

    return base + extRaw;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def sanitize_file_name(original_name: str, max_length: int = 100) -> str:
    name = str(original_name or "").strip()

    if "." in name:
      base, ext = name.rsplit(".", 1)
      ext = "." + ext
    else:
      base, ext = name, ""

    base = base.replace(" ", "_")
    base = re.sub(r"[^A-Za-z0-9_\.-]+", "_", base)
    base = re.sub(r"_+", "_", base)
    base = base.strip("_.-")

    if not base:
      base = "file"

    if len(base + ext) > max_length:
      allowed_base_length = max(max_length - len(ext), 1)
      base = base[:allowed_base_length]

    return base + ext
  ```

  </TabItem>
</Tabs>