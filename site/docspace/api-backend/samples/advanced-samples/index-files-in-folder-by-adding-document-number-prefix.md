import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Index files in a folder by adding a document number prefix

This example demonstrates how to assign simple document numbers to files in a specific DocSpace folder. The script loads the folder contents, generates an index prefix in the format `TYPE-YEAR-COUNTER`, and renames each file by adding this prefix to the beginning of the file title.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Folder to index
  const TARGET_FOLDER_ID = 'folder_id_here';

  // Index type prefix
  const INDEX_TYPE = 'DOC';

  // Counter width, for example: 4 -> 0001
  const COUNTER_WIDTH = 4;

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  async function docspaceRequest(path: string, method: string = 'GET', body: any = null) {
    const url = `${API_HOST}${path}`;

    try {
      const res = await fetch(url, {
        method,
        headers: HEADERS,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        const t = await res.text();
        console.log(`Request failed. Status: ${res.status}, Message: ${t}`);
        return null;
      }

      return res.json();
    } catch (err: any) {
      console.log(`Request error: ${err?.message || err}`);
      return null;
    }
  }

  // Step 1: Get folder contents
  async function getFolderContents(folderId: string) {
    const data = await docspaceRequest(`/api/2.0/files/folder/${folderId}`, 'GET');
    if (!data || typeof data !== 'object') return [];

    const resp = (data as any).response != null ? (data as any).response : data;

    if (Array.isArray(resp)) return resp;

    if (resp && typeof resp === 'object') {
      const files = (resp as any).files;
      return Array.isArray(files) ? files : [];
    }

    return [];
  }

  // Helper: detect if item is a file
  function isFileItem(item: any) {
    if (!item || typeof item !== 'object') return false;

    const isFolderFlag = item.isFolder === true || item.folder === true;
    if (isFolderFlag) return false;

    const fileType = String(item.fileType || item.type || '').toLowerCase();
    if (fileType && fileType !== 'folder') return true;

    return Boolean(item.id && item.title && !isFolderFlag);
  }

  // Step 2: Build index prefix TYPE-YEAR-COUNTER
  function buildIndexPrefix(docType: string, counter: number) {
    const year = new Date().getFullYear();
    const padded = String(counter).padStart(COUNTER_WIDTH, '0');
    return `${docType}-${year}-${padded}`;
  }

  // Step 3: Build new title
  function buildIndexedTitle(prefix: string, originalTitle: string) {
    return `${prefix}_${originalTitle}`;
  }

  // Step 4: Rename file
  async function renameFile(fileId: string, newTitle: string) {
    const payload = { title: newTitle };

    const data = await docspaceRequest(`/api/2.0/files/file/${fileId}`, 'PUT', payload);
    return Boolean(data);
  }

  // Run sequence
  (async () => {
    try {
      const items = await getFolderContents(String(TARGET_FOLDER_ID));
      const files = items.filter(isFileItem);

      if (!files.length) {
        console.log('No files found in the folder.');
        return;
      }

      let counter = 1;

      for (const item of files) {
        const fileId = String(item.id);
        const originalTitle = String(item.title || 'file');

        const prefix = buildIndexPrefix(INDEX_TYPE, counter);
        const newTitle = buildIndexedTitle(prefix, originalTitle);

        const ok = await renameFile(fileId, newTitle);
        if (ok) {
          console.log(`Renamed: "${originalTitle}" -> "${newTitle}"`);
        }

        counter += 1;
      }

      console.log('Indexing complete.');
    } catch (err: any) {
      console.error(err?.message || err);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  from datetime import datetime

  # Set API base URL
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Folder to index
  TARGET_FOLDER_ID = 123456  # Replace with actual folder ID

  # Index type prefix
  INDEX_TYPE = "DOC"  # e.g. 'DOC', 'INV', 'CNTR'

  COUNTER_WIDTH = 4

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  def docspace_request(path, method="GET", json_body=None):
    url = f"{API_HOST}{path}"

    try:
      response = requests.request(
        method.upper(),
        url,
        headers=HEADERS,
        json=json_body,
      )

      if response.status_code != 200:
        print(f"Request failed. Status: {response.status_code}, Message: {response.text}")
        return None

      return response.json()

    except Exception as e:
      print(f"Request error: {e}")
      return None

  # Step 1: Get folder contents
  def get_folder_contents(folder_id):
    data = docspace_request(f"/api/2.0/files/folder/{folder_id}", method="GET")
    if not isinstance(data, dict):
      return []

    resp = data.get("response", data)

    if isinstance(resp, list):
      return resp

    if isinstance(resp, dict):
      files = resp.get("files") or []
      return files if isinstance(files, list) else []

    return []

  # Helper: detect if item is a file
  def is_file_item(item):
    if not isinstance(item, dict):
      return False

    is_folder_flag = item.get("isFolder") is True or item.get("folder") is True
    if is_folder_flag:
      return False

    file_type = str(item.get("fileType") or item.get("type") or "").lower()
    if file_type and file_type != "folder":
      return True

    return bool(item.get("id") and item.get("title") and not is_folder_flag)

  # Step 2: Build index prefix TYPE-YEAR-COUNTER
  def build_index_prefix(doc_type, counter):
    year = datetime.now().year
    padded_counter = str(counter).zfill(COUNTER_WIDTH)
    return f"{doc_type}-{year}-{padded_counter}"

  # Step 3: Build new title
  def build_indexed_title(prefix, original_title):
    return f"{prefix}_{original_title}"

  # Step 4: Rename file
  def rename_file(file_id, new_title):
    payload = {"title": new_title}

    data = docspace_request(
      f"/api/2.0/files/file/{file_id}",
      method="PUT",
      json_body=payload,
    )

    return data is not None

  def index_folder(folder_id, type_prefix):
    items = get_folder_contents(folder_id)
    files = [item for item in items if is_file_item(item)]

    if not files:
      print("No files found in the folder.")
      return

    counter = 1

    for item in files:
      file_id = item.get("id")
      if file_id is None:
        continue

      original_title = str(item.get("title") or "file")

      prefix = build_index_prefix(type_prefix, counter)
      new_title = build_indexed_title(prefix, original_title)

      ok = rename_file(file_id, new_title)
      if ok:
        print(f'Renamed: "{original_title}" -> "{new_title}"')

      counter += 1

    print("Indexing complete.")

  if __name__ == "__main__":
    index_folder(TARGET_FOLDER_ID, INDEX_TYPE)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve folder contents

A GET request is sent to [/api/2.0/files/folder/:folderId](/docspace/api-backend/usage-api/get-folder-info) to retrieve the folder contents.

The response typically includes:
- `files`: files stored directly in this folder
- `folders`: subfolders (this example does not scan subfolders)

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getFolderContents(folderId: string) {
    const data = await docspaceRequest(`/api/2.0/files/folder/${folderId}`, 'GET');
    if (!data || typeof data !== 'object') return [];

    const resp = (data as any).response != null ? (data as any).response : data;

    if (Array.isArray(resp)) return resp;

    if (resp && typeof resp === 'object') {
      const files = (resp as any).files;
      return Array.isArray(files) ? files : [];
    }

    return [];
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_folder_contents(folder_id):
    data = docspace_request(f"/api/2.0/files/folder/{folder_id}", method="GET")
    if not isinstance(data, dict):
      return []

    resp = data.get("response", data)

    if isinstance(resp, list):
      return resp

    if isinstance(resp, dict):
      files = resp.get("files") or []
      return files if isinstance(files, list) else []

    return []
  ```

  </TabItem>
</Tabs>

## Step 2: Select only files

The script filters the returned items and keeps only file entries (folders are skipped). This ensures that only documents are renamed.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function isFileItem(item: any) {
    if (!item || typeof item !== 'object') return false;

    const isFolderFlag = item.isFolder === true || item.folder === true;
    if (isFolderFlag) return false;

    const fileType = String(item.fileType || item.type || '').toLowerCase();
    if (fileType && fileType !== 'folder') return true;

    return Boolean(item.id && item.title && !isFolderFlag);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def is_file_item(item):
    if not isinstance(item, dict):
      return False

    is_folder_flag = item.get("isFolder") is True or item.get("folder") is True
    if is_folder_flag:
      return False

    file_type = str(item.get("fileType") or item.get("type") or "").lower()
    if file_type and file_type != "folder":
      return True

    return bool(item.get("id") and item.get("title") and not is_folder_flag)
  ```

  </TabItem>
</Tabs>

## Step 3: Generate an index prefix

For each file, the script generates a prefix:
- `INDEX_TYPE`: a short document type label (for example, DOC)
- `YEAR`: current year
- `COUNTER`: sequential number padded with COUNTER_WIDTH

Example:
- `DOC-2025-0001`
- `DOC-2025-0002`

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function buildIndexPrefix(docType: string, counter: number) {
    const year = new Date().getFullYear();
    const padded = String(counter).padStart(COUNTER_WIDTH, '0');
    return `${docType}-${year}-${padded}`;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def build_index_prefix(doc_type, counter):
    year = datetime.now().year
    padded_counter = str(counter).zfill(COUNTER_WIDTH)
    return f"{doc_type}-{year}-{padded_counter}"
  ```

  </TabItem>
</Tabs>

## Step 4: Rename the file by adding the prefix

A PUT request is sent to [/api/2.0/files/file/:fileId](/docspace/api-backend/usage-api/update-file) with:

- `title`: the new file title (prefix + original title)

This updates the file name in the folder while keeping the file ID the same.
In this example, `notify_admin()`/`notifyAdmin()` is a placeholder that prints the message. In a real integration, replace it with your email, webhook, or incident system.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function renameFile(fileId: string, newTitle: string) {
    const payload = { title: newTitle };

    const data = await docspaceRequest(`/api/2.0/files/file/${fileId}`, 'PUT', payload);
    return Boolean(data);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def rename_file(file_id, new_title):
    payload = {"title": new_title}

    data = docspace_request(
      f"/api/2.0/files/file/{file_id}",
      method="PUT",
      json_body=payload,
    )

    return data is not None
  ```

  </TabItem>
</Tabs>