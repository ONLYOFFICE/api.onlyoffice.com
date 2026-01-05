import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Notify manager when a client uploads an invoice

This example shows how to use ONLYOFFICE DocSpace webhooks to react when a client uploads an invoice to their room.

When DocSpace sends a webhook to your backend, the receiver:

- verifies the webhook signature,
- reads the event trigger (`event.trigger`) and file data (`payload`),
- accepts only upload-like triggers (`file.uploaded`/`file.created`),
- checks that the file belongs to the target client room (by `payload.rootId`),
- checks that the file looks like an invoice (by file name),
- moves the file to the `Incoming` folder,
- notifies the account manager (placeholder),
- optionally triggers an external processing pipeline (placeholder).


## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  import express from 'express';
  import crypto from 'crypto';

  // Config
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';
  const WEBHOOK_SECRET = 'your_webhook_secret';

  const CLIENT_ROOT_ID = 86193;
  const INCOMING_FOLDER_ID = 654321;

  const MANAGER_EMAIL = 'manager@example.com';
  const ALLOWED_TRIGGERS = new Set(['file.uploaded', 'file.created']);

  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Verify webhook signature
  function verifySignature(rawBody, signatureHeader) {
    if (!signatureHeader || !signatureHeader.startsWith('sha256=')) return false;

    const received = signatureHeader.split('=', 2)[1]?.trim()?.toLowerCase();
    if (!received) return false;

    const expected = crypto
      .createHmac('sha256', WEBHOOK_SECRET)
      .update(rawBody)
      .digest('hex')
      .toLowerCase();

    if (received.length !== expected.length) return false;
    return crypto.timingSafeEqual(Buffer.from(received), Buffer.from(expected));
  }

  // Step 2: Check upload trigger and extract file data
  function extractUploadEvent(body) {
    const trigger = String(body?.event?.trigger || '').trim();
    const payload = body?.payload && typeof body.payload === 'object' ? body.payload : null;

    if (!payload) return { ok: false, reason: 'No payload object.' };
    if (!ALLOWED_TRIGGERS.has(trigger)) return { ok: false, reason: `Trigger '${trigger}' is not handled.` };

    const fileId = Number(payload?.id ?? null);
    if (!Number.isFinite(fileId)) return { ok: false, reason: 'No valid file id in payload.id.' };

    const rootIdRaw = payload?.rootId ?? null;
    const rootId = rootIdRaw === null ? null : Number(rootIdRaw);
    if (rootIdRaw !== null && !Number.isFinite(rootId)) return { ok: false, reason: 'Invalid payload.rootId.' };

    return { ok: true, trigger, payload, fileId, rootId };
  }

  // Step 3: Check that the file belongs to the target client room
  function isTargetClientRoom(rootId) {
    if (rootId == null) return false;
    return String(rootId) === String(CLIENT_ROOT_ID);
  }

  // Step 4: Check that the file looks like an invoice
  function isInvoiceTitle(title) {
    return String(title || '').trim().toLowerCase().startsWith('invoice');
  }

  async function getFileTitle(fileId) {
    const res = await fetch(`${API_HOST}/api/2.0/files/file/${fileId}`, {
      method: 'GET',
      headers: HEADERS,
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Failed to load file info: ${res.status} - ${text}`);
      return null;
    }

    const data = await res.json();
    const file = data?.response || {};
    const title = String(file?.title || '').trim();
    return title || null;
  }

  // Step 5: Move invoice to Incoming and notify manager
  async function moveFileToIncoming(fileId) {
    const payload = {
      fileIds: [fileId],
      destFolderId: INCOMING_FOLDER_ID,
      deleteAfter: true,
      content: true,
      toFillOut: false,
    };

    const res = await fetch(`${API_HOST}/api/2.0/files/fileops/move`, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Failed to move file: ${res.status} - ${text}`);
      return false;
    }

    return true;
  }

  function notifyManager(fileId, title) {
    console.log('[MANAGER NOTIFICATION]');
    console.log(`To: ${MANAGER_EMAIL}`);
    console.log(`Invoice uploaded: ${title} (fileId=${fileId})`);
  }

  // Webhook endpoint
  const app = express();

  app.use(
    express.json({
      limit: '2mb',
      verify: (req, _res, buf) => {
        req.rawBody = buf;
      },
    })
  );

  app.head('/docspace/webhook', (_req, res) => res.status(200).send(''));
  app.get('/docspace/webhook', (_req, res) => res.status(200).json({ status: 'ok' }));

  app.post('/docspace/webhook', async (req, res) => {
    const signature = req.headers['x-docspace-signature-256'];

    if (!verifySignature(req.rawBody, signature)) {
      console.log('Invalid webhook signature.');
      return res.status(401).send('Unauthorized');
    }

    const evt = extractUploadEvent(req.body);
    if (!evt.ok) {
      console.log(evt.reason);
      return res.status(200).json({ status: 'ok' });
    }

    if (!isTargetClientRoom(evt.rootId)) {
      console.log('File is not in the target client room/root. Skipping.');
      return res.status(200).json({ status: 'ok' });
    }

    const titleFromApi = await getFileTitle(evt.fileId);
    const title = titleFromApi || String(evt.payload?.title || 'Untitled');

    if (!isInvoiceTitle(title)) {
      console.log('File title does not look like an invoice. Skipping.');
      return res.status(200).json({ status: 'ok' });
    }

    const moved = await moveFileToIncoming(evt.fileId);
    if (!moved) {
      return res.status(200).json({ status: 'ok' });
    }

    notifyManager(evt.fileId, title);
    return res.status(200).json({ status: 'ok' });
  });

  app.listen(3000, () => {
    console.log('DocSpace webhook listener: http://localhost:3000/docspace/webhook');
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

  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'YOUR_API_KEY'
  WEBHOOK_SECRET = 'your_webhook_secret'

  CLIENT_ROOT_ID = 86193
  INCOMING_FOLDER_ID = 654321

  MANAGER_EMAIL = 'manager@example.com'
  ALLOWED_TRIGGERS = {'file.uploaded', 'file.created'}

  HEADERS = {
    'Authorization': f'Bearer {API_KEY}',
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }

  app = Flask(__name__)

  # Step 1: Verify webhook signature
  def verify_signature(raw_body: bytes, signature_header: Optional[str]) -> bool:
    if not signature_header or not signature_header.startswith('sha256='):
      return False

    received = signature_header.split('=', 1)[1].strip().lower()
    expected = hmac.new(WEBHOOK_SECRET.encode('utf-8'), raw_body, hashlib.sha256).hexdigest().lower()
    return hmac.compare_digest(received, expected)

  # Step 2: Check upload trigger and extract file data
  def extract_upload_event(body: Dict[str, Any]) -> Tuple[bool, str, Optional[Dict[str, Any]], Optional[int], Optional[int]]:
    trigger = str(((body.get('event') or {}).get('trigger') or '')).strip()
    payload = body.get('payload') if isinstance(body.get('payload'), dict) else None

    if not payload:
      return False, 'No payload object.', None, None, None

    if trigger not in ALLOWED_TRIGGERS:
      return False, f"Trigger '{trigger}' is not handled.", payload, None, None

    file_id_raw = payload.get('id')
    try:
      file_id = int(file_id_raw) if file_id_raw is not None else None
    except Exception:
      file_id = None

    if file_id is None:
      return False, 'No valid file id in payload.id.', payload, None, None

    root_id_raw = payload.get('rootId')
    root_id: Optional[int] = None
    if root_id_raw is not None:
      try:
        root_id = int(root_id_raw)
      except Exception:
        return False, 'Invalid payload.rootId.', payload, file_id, None

    return True, trigger, payload, file_id, root_id

  # Step 3: Check that the file belongs to the target client room
  def is_target_client_room(root_id: Optional[int]) -> bool:
    if root_id is None:
      return False
    return str(root_id) == str(CLIENT_ROOT_ID)

  # Step 4: Check that the file looks like an invoice
  def is_invoice_title(title: str) -> bool:
    return str(title or '').strip().lower().startswith('invoice')

  def get_file_title(file_id: int) -> Optional[str]:
    r = requests.get(f'{API_HOST}/api/2.0/files/file/{file_id}', headers=HEADERS)
    if r.status_code != 200:
      print(f'Failed to load file info. Status code: {r.status_code}, Message: {r.text}')
      return None

    data = r.json() or {}
    file = data.get('response') or {}
    title = str(file.get('title') or '').strip()
    return title if title else None

  # Step 5: Move invoice to Incoming and notify manager
  def move_file_to_incoming(file_id: int) -> bool:
    payload = {
      'fileIds': [file_id],
      'destFolderId': INCOMING_FOLDER_ID,
      'deleteAfter': True,
      'content': True,
      'toFillOut': False,
    }
    r = requests.put(f'{API_HOST}/api/2.0/files/fileops/move', headers=HEADERS, json=payload)
    if r.status_code != 200:
      print(f'Failed to move file. Status code: {r.status_code}, Message: {r.text}')
      return False
    return True

  def notify_manager(file_id: int, title: str) -> None:
    print('[MANAGER NOTIFICATION]')
    print(f'To: {MANAGER_EMAIL}')
    print(f'Invoice uploaded: {title} (fileId={file_id})')

  @app.route('/docspace/webhook', methods=['POST', 'HEAD', 'GET'])
  def docspace_webhook():
    if request.method == 'HEAD':
      return '', 200

    if request.method == 'GET':
      return jsonify({'status': 'ok'}), 200

    raw_body = request.data
    signature = request.headers.get('x-docspace-signature-256')

    if not verify_signature(raw_body, signature):
      print('Invalid webhook signature.')
      return 'Unauthorized', 401

    body = request.get_json(silent=True) or {}
    if not isinstance(body, dict) or not body:
      return jsonify({'status': 'ok'}), 200

    ok, _trigger, payload, file_id, root_id = extract_upload_event(body)
    if not ok or payload is None or file_id is None:
      return jsonify({'status': 'ok'}), 200

    if not is_target_client_room(root_id):
      print('File is not in the target client room/root. Skipping.')
      return jsonify({'status': 'ok'}), 200

    title_from_api = get_file_title(file_id)
    title = title_from_api or str(payload.get('title') or 'Untitled')

    if not is_invoice_title(title):
      print('File title does not look like an invoice. Skipping.')
      return jsonify({'status': 'ok'}), 200

    if not move_file_to_incoming(file_id):
      return jsonify({'status': 'ok'}), 200

    notify_manager(file_id, title)
    return jsonify({'status': 'ok'}), 200

  if __name__ == '__main__':
    port = int(os.environ.get('PORT', 3000))
    print(f'DocSpace webhook listener: http://localhost:{port}/docspace/webhook')
    app.run(host='0.0.0.0', port=port)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Receive an event from DocSpace

When a client uploads a file, DocSpace calls your webhook URL (`/docspace/webhook`) and sends a JSON payload.

The handler:

- receives the request,
- makes sure the request is really coming from DocSpace (basic security check),
- then reads the event data from JSON.

If the request does not look valid, the handler returns 401.
DocSpace may also send a `HEAD` request to check that your URL is reachable, so the example answers `200` for `HEAD`.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function verifySignature(rawBody, signatureHeader) {
    if (!signatureHeader || !signatureHeader.startsWith('sha256=')) return false;

    const received = signatureHeader.split('=', 2)[1]?.trim()?.toLowerCase();
    if (!received) return false;

    const expected = crypto
      .createHmac('sha256', WEBHOOK_SECRET)
      .update(rawBody)
      .digest('hex')
      .toLowerCase();

    if (received.length !== expected.length) return false;
    return crypto.timingSafeEqual(Buffer.from(received), Buffer.from(expected));
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def verify_signature(raw_body: bytes, signature_header: Optional[str]) -> bool:
    if not signature_header or not signature_header.startswith('sha256='):
      return False

    received = signature_header.split('=', 1)[1].strip().lower()
    expected = hmac.new(WEBHOOK_SECRET.encode('utf-8'), raw_body, hashlib.sha256).hexdigest().lower()
    return hmac.compare_digest(received, expected)
  ```

  </TabItem>
</Tabs>

## Step 2: Detect an "invoice upload" event

The script reads:
- `event.trigger` — what happened (`file.uploaded`, `file.created`, etc.)
- `payload` — file data sent by DocSpace

It processes only upload-like triggers:
- `file.uploaded`
- `file.created`

All other triggers are ignored (server still returns 200 OK).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function extractUploadEvent(body) {
    const trigger = String(body?.event?.trigger || '').trim();
    const payload = body?.payload && typeof body.payload === 'object' ? body.payload : null;

    if (!payload) return { ok: false, reason: 'No payload object.' };
    if (!ALLOWED_TRIGGERS.has(trigger)) return { ok: false, reason: `Trigger '${trigger}' is not handled.` };

    const fileId = Number(payload?.id ?? null);
    if (!Number.isFinite(fileId)) return { ok: false, reason: 'No valid file id in payload.id.' };

    const rootIdRaw = payload?.rootId ?? null;
    const rootId = rootIdRaw === null ? null : Number(rootIdRaw);
    if (rootIdRaw !== null && !Number.isFinite(rootId)) return { ok: false, reason: 'Invalid payload.rootId.' };

    return { ok: true, trigger, payload, fileId, rootId };
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def extract_upload_event(body: Dict[str, Any]) -> Tuple[bool, str, Optional[Dict[str, Any]], Optional[int], Optional[int]]:
    trigger = str(((body.get('event') or {}).get('trigger') or '')).strip()
    payload = body.get('payload') if isinstance(body.get('payload'), dict) else None

    if not payload:
      return False, 'No payload object.', None, None, None

    if trigger not in ALLOWED_TRIGGERS:
      return False, f"Trigger '{trigger}' is not handled.", payload, None, None

    file_id_raw = payload.get('id')
    try:
      file_id = int(file_id_raw) if file_id_raw is not None else None
    except Exception:
      file_id = None

    if file_id is None:
      return False, 'No valid file id in payload.id.', payload, None, None

    root_id_raw = payload.get('rootId')
    root_id: Optional[int] = None
    if root_id_raw is not None:
      try:
        root_id = int(root_id_raw)
      except Exception:
        return False, 'Invalid payload.rootId.', payload, file_id, None

    return True, trigger, payload, file_id, root_id
  ```

  </TabItem>
</Tabs>

## Step 3: Make sure the upload belongs to the target client room

To avoid reacting to uploads from other rooms, the script compares:

- `payload.rootId` (the room/root container from the webhook) with
- `CLIENT_ROOT_ID` (the client room you want to monitor)

If `rootId` does not match your client room, the script skips the event.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function isTargetClientRoom(rootId) {
    if (rootId == null) return false;
    return String(rootId) === String(CLIENT_ROOT_ID);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def is_target_client_room(root_id: Optional[int]) -> bool:
    if root_id is None:
      return False
    return str(root_id) == str(CLIENT_ROOT_ID)
  ```

  </TabItem>
</Tabs>

## Step 4: Check if the file looks like an invoice

The script verifies the file name the title must start with `invoice` (case-insensitive)

To be safer, it also loads the file title from DocSpace GET [/api/2.0/files/file/{fileId}](/docspace/api-backend/usage-api/get-file-info)

If the file does not look like an invoice, the script skips it.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function isInvoiceTitle(title) {
    return String(title || '').trim().toLowerCase().startsWith('invoice');
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def is_invoice_title(title: str) -> bool:
    return str(title or '').strip().lower().startswith('invoice')
  ```

  </TabItem>
</Tabs>

## Step 5: Move the invoice and notify the manager

If all checks pass, the script:

1. Moves the file into the Incoming folder:
- PUT [/api/2.0/files/fileops/move}](/docspace/api-backend/usage-api/move-batch-items)
- with `destFolderId = INCOMING_FOLDER_ID`

2. Sends a notification to the account manager (placeholder)
3. Optionally triggers an external processing pipeline (placeholder)


<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function moveFileToIncoming(fileId) {
    const payload = {
      fileIds: [fileId],
      destFolderId: INCOMING_FOLDER_ID,
      deleteAfter: true,
      content: true,
      toFillOut: false,
    };

    const res = await fetch(`${API_HOST}/api/2.0/files/fileops/move`, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.log(`Failed to move file: ${res.status} - ${text}`);
      return false;
    }

    return true;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def move_file_to_incoming(file_id: int) -> bool:
    payload = {
      'fileIds': [file_id],
      'destFolderId': INCOMING_FOLDER_ID,
      'deleteAfter': True,
      'content': True,
      'toFillOut': False,
    }
    r = requests.put(f'{API_HOST}/api/2.0/files/fileops/move', headers=HEADERS, json=payload)
    if r.status_code != 200:
      print(f'Failed to move file. Status code: {r.status_code}, Message: {r.text}')
      return False
    return True
  ```

  </TabItem>
</Tabs>