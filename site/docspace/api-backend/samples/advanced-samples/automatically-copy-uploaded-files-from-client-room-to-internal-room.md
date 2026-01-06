import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Automatically copy uploaded files from a client room to an internal room

This example shows how to automatically copy every newly uploaded file from a client-facing room (for example, “Shared with Client”) to an internal room (for example, “Internal Processing”).

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

  // Optional: if empty, signature validation is skipped
  const WEBHOOK_SECRET = "YOUR_WEBHOOK_SECRET";

  const SHARED_WITH_CLIENT_ROOM_ID = 111111; // replace
  const INTERNAL_PROCESSING_FOLDER_ID = 222222; // replace

  const HEADERS: Record<string, string> = {
    Accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
  };

  // -----------------------------
  // Small helpers
  // -----------------------------

  async function requestJson(path: string, method: string, jsonBody?: any) {
    const url = `${API_HOST}${path}`;

    let res: Response;
    try {
      res = await fetch(url, {
        method,
        headers: HEADERS,
        body: jsonBody ? JSON.stringify(jsonBody) : undefined,
      });
    } catch (e: any) {
      console.log(`[ERROR] Request failed: ${method} ${url}`);
      console.log(`[ERROR] ${e?.message || e}`);
      return null;
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.log(`[ERROR] Request failed: ${method} ${url}`);
      console.log(`[ERROR] Status: ${res.status}, Message: ${text}`);
      return null;
    }

    try {
      return await res.json();
    } catch {
      return null;
    }
  }

  function verifySignature(rawBody: Buffer, signatureHeader?: string | null) {
    // If WEBHOOK_SECRET is empty, skip verification
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

  function extractFileId(payload: any): number | null {
    const data = payload?.data ?? payload?.entity ?? payload ?? {};
    const raw = data.fileId ?? data.id ?? payload?.fileId ?? null;

    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }

  function extractSourceFolderId(payload: any): number | null {
    const data = payload?.data ?? payload?.entity ?? payload ?? {};
    const raw = data.folderId ?? data.roomId ?? data.parentId ?? payload?.folderId ?? null;

    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  }

  // -----------------------------
  // Step 2: Copy the file
  // -----------------------------

  async function copyFileToInternalFolder(fileId: number, destFolderId: number) {
    const payload = {
      fileIds: [fileId],
      destFolderId,
      deleteAfter: false, // keep originals (copy)
      content: true,
      toFillOut: false,
    };

    return requestJson("/api/2.0/files/fileops/copy", "PUT", payload);
  }

  // -----------------------------
  // Step 1: Webhook handler
  // -----------------------------

  const app = express();

  // Capture raw body for signature validation
  app.use(
    express.json({
      limit: "2mb",
      verify: (req: any, _res, buf) => {
        req.rawBody = buf;
      },
    })
  );

  app.head("/webhook", (_req, res) => {
    // DocSpace (or your reverse proxy) may validate the URL with HEAD
    return res.status(200).send("");
  });

  app.post("/webhook", async (req: any, res) => {
    const rawBody: Buffer = req.rawBody ?? Buffer.from("");
    const signatureHeader = req.header("x-docspace-signature-256");

    // Step 1: Validate webhook signature (optional)
    if (!verifySignature(rawBody, signatureHeader)) {
      console.log("[WARN] Invalid webhook signature.");
      return res.status(401).send("Invalid signature");
    }

    const payload = req.body;
    if (!payload || typeof payload !== "object") {
      return res.status(200).json({ status: "ok" });
    }

    // Step 2: Extract fileId (+ optional source folder check)
    const fileId = extractFileId(payload);
    if (fileId === null) {
      console.log("[INFO] No fileId in payload. Skipping.");
      return res.status(200).json({ status: "ok" });
    }

    const sourceFolderId = extractSourceFolderId(payload);
    if (sourceFolderId !== null && sourceFolderId !== SHARED_WITH_CLIENT_ROOM_ID) {
      console.log(
        `[INFO] Upload folder ${sourceFolderId} does not match source room ${SHARED_WITH_CLIENT_ROOM_ID}. Skipping.`
      );
      return res.status(200).json({ status: "ok" });
    }

    // Step 3: Copy file to internal room/folder
    try {
      console.log(`[INFO] Copying fileId=${fileId} -> destFolderId=${INTERNAL_PROCESSING_FOLDER_ID}`);
      const data = await copyFileToInternalFolder(fileId, INTERNAL_PROCESSING_FOLDER_ID);

      if (!data) {
        console.log("[ERROR] Copy request failed.");
        return res.status(500).send("Copy failed");
      }

      console.log("[INFO] Copy completed.");
      return res.status(200).json({ status: "ok" });
    } catch (e: any) {
      console.log("[ERROR] Handler failed:", e?.message || e);
      return res.status(500).send("Internal error");
    }
  });

  app.listen(3000, () => {
    console.log("Webhook server listening on http://localhost:3000/webhook");
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import hmac
  import hashlib
  import requests
  from typing import Any, Dict, Optional
  from flask import Flask, request, jsonify

  # Config
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Optional: if empty, signature validation is skipped
  WEBHOOK_SECRET = "YOUR_WEBHOOK_SECRET"

  SHARED_WITH_CLIENT_ROOM_ID = 111111       # replace
  INTERNAL_PROCESSING_FOLDER_ID = 222222    # replace

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  app = Flask(__name__)

  # -----------------------------
  # Small helpers
  # -----------------------------

  def verify_signature(secret_key: str, raw_body: bytes, signature_header: Optional[str]) -> bool:
    # If WEBHOOK_SECRET is empty, skip verification
    if not secret_key:
      return True

    if not signature_header or not signature_header.startswith("sha256="):
      return False

    received = signature_header.split("=", 1)[1].strip().lower()
    expected = hmac.new(secret_key.encode("utf-8"), raw_body, hashlib.sha256).hexdigest().lower()

    return hmac.compare_digest(received, expected)

  def extract_file_id(payload: Dict[str, Any]) -> Optional[int]:
    data = payload.get("data") or payload.get("entity") or payload
    raw = data.get("fileId") or data.get("id") or payload.get("fileId")

    try:
      return int(raw)
    except Exception:
      return None

  def extract_source_folder_id(payload: Dict[str, Any]) -> Optional[int]:
    data = payload.get("data") or payload.get("entity") or payload
    raw = data.get("folderId") or data.get("roomId") or data.get("parentId") or payload.get("folderId")

    try:
      return int(raw)
    except Exception:
      return None

  def docspace_request(method: str, path: str, *, json_body: Optional[Dict[str, Any]] = None) -> Optional[Dict[str, Any]]:
    url = f"{API_HOST}{path}"

    try:
      r = requests.request(method.upper(), url, headers=HEADERS, json=json_body)
    except Exception as e:
      print(f"[ERROR] Request to {url} failed: {e}")
      return None

    if r.status_code != 200:
      print(f"[ERROR] {method} {url} failed. Status: {r.status_code}, Message: {r.text}")
      return None

    try:
      return r.json()
    except Exception:
      return None

  # -----------------------------
  # Step 3: Copy the file
  # -----------------------------

  def copy_file_to_internal_folder(file_id: int, dest_folder_id: int) -> bool:
    payload = {
      "fileIds": [file_id],
      "destFolderId": dest_folder_id,
      "deleteAfter": False,  # keep originals (copy)
      "content": True,
      "toFillOut": False,
    }

    data = docspace_request("PUT", "/api/2.0/files/fileops/copy", json_body=payload)
    return data is not None

  # -----------------------------
  # Step 1: Webhook endpoint
  # -----------------------------

  @app.route("/webhook", methods=["POST", "HEAD"])
  def webhook():
    if request.method == "HEAD":
      # DocSpace (or your reverse proxy) may validate the URL with HEAD
      return "", 200

    raw_body = request.data
    signature_header = request.headers.get("x-docspace-signature-256")

    # Step 1: Validate webhook signature (optional)
    if not verify_signature(WEBHOOK_SECRET, raw_body, signature_header):
      print("[WARN] Invalid webhook signature.")
      return "Invalid signature", 401

    payload = request.get_json(silent=True)
    if not isinstance(payload, dict) or not payload:
      return jsonify({"status": "ok"}), 200

    # Step 2: Extract fileId (+ optional source folder check)
    file_id = extract_file_id(payload)
    if file_id is None:
      print("[INFO] No fileId in payload. Skipping.")
      return jsonify({"status": "ok"}), 200

    source_folder_id = extract_source_folder_id(payload)
    if source_folder_id is not None and source_folder_id != SHARED_WITH_CLIENT_ROOM_ID:
      print(
        f"[INFO] Upload folder {source_folder_id} does not match source room {SHARED_WITH_CLIENT_ROOM_ID}. Skipping."
      )
      return jsonify({"status": "ok"}), 200

    # Step 3: Copy file to internal room/folder
    print(f"[INFO] Copying fileId={file_id} -> destFolderId={INTERNAL_PROCESSING_FOLDER_ID}")
    ok = copy_file_to_internal_folder(file_id, INTERNAL_PROCESSING_FOLDER_ID)

    if not ok:
      return "Copy failed", 500

    print("[INFO] Copy completed.")
    return jsonify({"status": "ok"}), 200

  if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Receive and verify the webhook request

When a file is uploaded, DocSpace sends a notification to your webhook URL.

At this step, the backend:

- accepts the incoming request from DocSpace,
- checks that the request is authentic using the secret key configured in webhook settings,
- reads the event data only after successful validation.

If the request cannot be validated, the server responds with 401 and stops processing it.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  app.post("/webhook", async (req: any, res) => {
    const rawBody: Buffer = req.rawBody ?? Buffer.from("");
    const signatureHeader = req.header("x-docspace-signature-256");

    // Verify webhook signature (optional)
    if (!verifySignature(rawBody, signatureHeader)) {
      console.log("[WARN] Invalid webhook signature.");
      return res.status(401).send("Invalid signature");
    }

    const payload = req.body;
    if (!payload || typeof payload !== "object") {
      return res.status(200).json({ status: "ok" });
    }

    // дальнейшая обработка — в следующих шагах
  });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  @app.route("/webhook", methods=["POST", "HEAD"])
  def webhook():
    if request.method == "HEAD":
      return "", 200

    raw_body = request.data
    signature_header = request.headers.get("x-docspace-signature-256")

    # Verify webhook signature (optional)
    if not verify_signature(WEBHOOK_SECRET, raw_body, signature_header):
      print("[WARN] Invalid webhook signature.")
      return "Invalid signature", 401

    payload = request.get_json(silent=True)
    if not isinstance(payload, dict) or not payload:
      return jsonify({"status": "ok"}), 200
  ```

  </TabItem>
</Tabs>

## Step 2: Extract the uploaded file ID and validate the source room (optional)

From the webhook JSON, the script extracts:
- `fileId` — the uploaded file ID
- optional `folderId`/`roomId` — where the file was uploaded

If `folderId` is present, the script checks it equals `SHARED_WITH_CLIENT_ROOM_ID`.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  const fileId = extractFileId(payload);
  if (fileId === null) {
    console.log("[INFO] No fileId in payload. Skipping.");
    return res.status(200).json({ status: "ok" });
  }

  const sourceFolderId = extractSourceFolderId(payload);
  if (
    sourceFolderId !== null &&
    sourceFolderId !== SHARED_WITH_CLIENT_ROOM_ID
  ) {
    console.log(
      `[INFO] Upload folder ${sourceFolderId} does not match source room ${SHARED_WITH_CLIENT_ROOM_ID}. Skipping.`
    );
    return res.status(200).json({ status: "ok" });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  file_id = extract_file_id(payload)
  if file_id is None:
    print("[INFO] No fileId in payload. Skipping.")
    return jsonify({"status": "ok"}), 200

  source_folder_id = extract_source_folder_id(payload)
  if (
    source_folder_id is not None and
    source_folder_id != SHARED_WITH_CLIENT_ROOM_ID
  ):
    print(
      f"[INFO] Upload folder {source_folder_id} does not match source room {SHARED_WITH_CLIENT_ROOM_ID}. Skipping."
    )
    return jsonify({"status": "ok"}), 200
  ```

  </TabItem>
</Tabs>

## Step 3: Copy the file to the internal room

When `fileId` is known (and the source check passed), the script copies the file using PUT [/api/2.0/files/fileops/copy](/docspace/api-backend/usage-api/copy-batch-items) with JSON body:

- `fileIds`: [fileId]
- `destFolderId`: INTERNAL_PROCESSING_FOLDER_ID
- `deleteAfter`: false (copy, keep original)
- `content`: true
- `toFillOut`: false
As a result, every client upload is duplicated into the internal processing area automatically.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function copyFileToInternalFolder(fileId: number, destFolderId: number) {
    const payload = {
      fileIds: [fileId],
      destFolderId,
      deleteAfter: false, // keep originals (copy)
      content: true,
      toFillOut: false,
    };

    return requestJson("/api/2.0/files/fileops/copy", "PUT", payload);
  }

  console.log(
    `[INFO] Copying fileId=${fileId} -> destFolderId=${INTERNAL_PROCESSING_FOLDER_ID}`
  );

  const result = await copyFileToInternalFolder(
    fileId,
    INTERNAL_PROCESSING_FOLDER_ID
  );

  if (!result) {
    console.log("[ERROR] Copy request failed.");
    return res.status(500).send("Copy failed");
  }

  console.log("[INFO] Copy completed.");
  return res.status(200).json({ status: "ok" });
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def copy_file_to_internal_folder(file_id: int, dest_folder_id: int) -> bool:
    payload = {
      "fileIds": [file_id],
      "destFolderId": dest_folder_id,
      "deleteAfter": False,  # keep originals (copy)
      "content": True,
      "toFillOut": False,
    }

    data = docspace_request("PUT", "/api/2.0/files/fileops/copy", json_body=payload)
    return data is not None
  
  print(
    f"[INFO] Copying fileId={file_id} -> destFolderId={INTERNAL_PROCESSING_FOLDER_ID}"
  )

  ok = copy_file_to_internal_folder(file_id, INTERNAL_PROCESSING_FOLDER_ID)
  if not ok:
    return "Copy failed", 500

  print("[INFO] Copy completed.")
  return jsonify({"status": "ok"}), 200
  ```

  </TabItem>
</Tabs>