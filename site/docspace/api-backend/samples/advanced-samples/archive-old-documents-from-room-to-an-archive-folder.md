import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Archive old documents from a room to an archive folder

This example scans a DocSpace room (or folder), identifies files older than a defined threshold, and moves them to an archive folder in batches.

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

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // IDs and thresholds
  const ROOM_ROOT_FOLDER_ID = 'room_root_folder_id_here';
  const ARCHIVE_FOLDER_ID = 'archive_folder_id_here';
  const MAX_FILE_AGE_MONTHS = 1;

  // Convert months to days (simple approximation)
  const MAX_FILE_AGE_DAYS = MAX_FILE_AGE_MONTHS * 30;

  function toNumber(value: any) {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }

  // Step 1: Retrieve folder or room contents
  async function getFolderContents(folderId: string) {
    const url = `${API_HOST}/api/2.0/files/folder/${folderId}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const t = await res.text();
      console.log(
        `Folder contents retrieval failed for ID ${folderId}. ` +
        `Status: ${res.status}, Message: ${t}`
      );
      return null;
    }

    const data = await res.json();
    const contents = data && data.response ? data.response : null;
    if (!contents || typeof contents !== 'object') {
      console.log('Unexpected folder contents format.');
      return null;
    }

    const files = Array.isArray(contents.files) ? contents.files : [];
    const folders = Array.isArray(contents.folders) ? contents.folders : [];

    return { files, folders };
  }

  function pickFileDateString(fileEntry: any) {
    return (
      fileEntry.modified ||
      fileEntry.modifiedOn ||
      fileEntry.updated ||
      fileEntry.created ||
      fileEntry.createdOn ||
      null
    );
  }

  function parseDate(dateStr: any) {
    if (!dateStr) return null;

    const s = String(dateStr).slice(0, 10);
    const d = new Date(s);

    if (Number.isNaN(d.getTime())) return null;
    return d;
  }

  function getFileAgeDays(fileEntry: any) {
    const dateStr = pickFileDateString(fileEntry);
    const d = parseDate(dateStr);
    if (!d) return null;

    const today = new Date();
    const diffMs = today.getTime() - d.getTime();
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }

  // Step 2: Recursively scan folder tree and collect files
  async function walkFolderTree(folderId: string, pathPrefix = '/') {
    const contents = await getFolderContents(folderId);
    if (!contents) return [];

    const result: any[] = [];
    const currentPath = pathPrefix || '/';

    for (const fileEntry of contents.files) {
      const title = fileEntry.title || 'Untitled';
      const ageDays = getFileAgeDays(fileEntry);

      result.push({
        id: fileEntry.id,
        title: title,
        path: `${currentPath}${title}`,
        ageDays: ageDays,
      });
    }

    for (const folderEntry of contents.folders) {
      const subFolderId = folderEntry.id;
      const folderTitle = folderEntry.title || 'Folder';
      const subPath = `${currentPath}${folderTitle}/`;

      const subFiles = await walkFolderTree(String(subFolderId), subPath);
      result.push(...subFiles);
    }

    return result;
  }

  // Step 3: Filter old files
  function filterOldFiles(files: any[]) {
    const oldFiles: any[] = [];

    for (const f of files) {
      const ageDays = toNumber(f.ageDays);
      if (ageDays != null && ageDays >= MAX_FILE_AGE_DAYS) {
        oldFiles.push(f);
      }
    }

    return oldFiles;
  }

  // Step 4: Move files to archive (in batches)
  async function moveFilesToArchive(fileIds: string[]) {
    if (!fileIds || fileIds.length === 0) {
      console.log('No files to move to archive.');
      return;
    }

    const url = `${API_HOST}/api/2.0/files/fileops/move`;
    const batchSize = 50;

    for (let i = 0; i < fileIds.length; i += batchSize) {
      const batch = fileIds.slice(i, i + batchSize);

      const payload = {
        fileIds: batch,
        destFolderId: ARCHIVE_FOLDER_ID,
        deleteAfter: true,
        content: true,
        toFillOut: false,
      };

      const res = await fetch(url, { method: 'PUT', headers: HEADERS, body: JSON.stringify(payload) });

      if (res.ok) {
        console.log(`Moved files to archive: ${batch.join(', ')}`);
      } else {
        const t = await res.text();
        console.log(`Failed to move files batch. Status: ${res.status}, Message: ${t}`);
      }
    }
  }

  // Optional: send report to admin (placeholder)
  function sendReportToAdmin(reportText: string) {
    console.log('\n[ADMIN REPORT]');
    console.log(reportText);
  }

  function buildReport(allFiles: any[], oldFiles: any[]) {
    const header = 'Old documents archive report\n';
    const summary =
      `Total files scanned: ${allFiles.length}\n` +
      `Old files (>= ${MAX_FILE_AGE_MONTHS} months): ${oldFiles.length}\n`;

    let details = '\nList of archived files (first 50):\n';
    const sample = oldFiles.slice(0, 50);

    if (sample.length === 0) {
      details += 'No files were archived.\n';
    } else {
      for (const f of sample) {
        const ageDays = f.ageDays != null ? `${f.ageDays} days` : 'unknown age';
        details += `- ${f.path} (age: ${ageDays})\n`;
      }
    }

    return header + summary + details;
  }

  // Main workflow
  (async () => {
    try {
      console.log('Scanning room/folder tree for old documents...');
      const allFiles = await walkFolderTree(String(ROOM_ROOT_FOLDER_ID));
      console.log(`Collected ${allFiles.length} files in total.`);

      const oldFiles = filterOldFiles(allFiles);
      console.log(`Found ${oldFiles.length} files older than ${MAX_FILE_AGE_MONTHS} months.`);

      if (oldFiles.length === 0) {
        console.log('Nothing to archive. Exiting.');
        return;
      }

      const fileIds = oldFiles
        .map((f) => f.id)
        .filter((id) => id != null)
        .map((id) => String(id));

      console.log('Moving old files to archive folder...');
      await moveFilesToArchive(fileIds);

      const reportText = buildReport(allFiles, oldFiles);
      sendReportToAdmin(reportText);

      console.log('\nArchiving completed.');
    } catch (err: any) {
      console.error(err?.message || err);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  from datetime import datetime, date

  # Basic configuration
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  # IDs and thresholds
  ROOM_ROOT_FOLDER_ID = "room_root_folder_id_here"
  ARCHIVE_FOLDER_ID = "archive_folder_id_here"
  MAX_FILE_AGE_MONTHS = 1

  MAX_FILE_AGE_DAYS = MAX_FILE_AGE_MONTHS * 30

  # Step 1: Retrieve folder or room contents
  def get_folder_contents(folder_id):
    url = f"{API_HOST}/api/2.0/files/folder/{folder_id}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
      print(
        f"Folder contents retrieval failed for ID {folder_id}. "
        f"Status: {response.status_code}, Message: {response.text}"
      )
      return None

    data = response.json()
    if not isinstance(data, dict) or "response" not in data:
      print("Unexpected folder contents format.")
      return None

    contents = data["response"]
    files = contents.get("files", []) or []
    folders = contents.get("folders", []) or []
    return {"files": files, "folders": folders}

  def get_file_date_string(file_entry):
    return (
      file_entry.get("modified")
      or file_entry.get("modifiedOn")
      or file_entry.get("updated")
      or file_entry.get("created")
      or file_entry.get("createdOn")
    )

  def parse_date(date_str):
    if not date_str:
      return None

    try:
      return datetime.fromisoformat(date_str).date()
    except Exception:
      try:
        return datetime.strptime(date_str[:10], "%Y-%m-%d").date()
      except Exception:
        return None

  def get_file_age_days(file_entry):
    date_str = get_file_date_string(file_entry)
    file_date = parse_date(date_str)
    if not file_date:
      return None

    today = date.today()
    return (today - file_date).days

  # Step 2: Recursively scan folder tree and collect files
  def walk_folder_tree(folder_id, path_prefix="/"):
    contents = get_folder_contents(folder_id)
    if not contents:
      return []

    result = []
    current_path = path_prefix or "/"

    for file_entry in contents["files"]:
      title = file_entry.get("title") or "Untitled"
      age_days = get_file_age_days(file_entry)

      result.append({
        "id": file_entry.get("id"),
        "title": title,
        "path": f"{current_path}{title}",
        "ageDays": age_days,
      })

    for folder_entry in contents["folders"]:
      sub_folder_id = folder_entry.get("id")
      folder_title = folder_entry.get("title") or "Folder"
      sub_path = f"{current_path}{folder_title}/"
      result.extend(walk_folder_tree(sub_folder_id, sub_path))

    return result

  # Step 3: Filter old files
  def filter_old_files(files):
    old_files = []

    for f in files:
      age_days = f.get("ageDays")
      if age_days is not None and age_days >= MAX_FILE_AGE_DAYS:
        old_files.append(f)

    return old_files

  # Step 4: Move files to archive (in batches)
  def move_files_to_archive(file_ids):
    if not file_ids:
      print("No files to move to archive.")
      return

    url = f"{API_HOST}/api/2.0/files/fileops/move"
    batch_size = 50

    for i in range(0, len(file_ids), batch_size):
      batch = file_ids[i:i + batch_size]

      payload = {
        "fileIds": batch,
        "destFolderId": ARCHIVE_FOLDER_ID,
        "deleteAfter": True,
        "content": True,
        "toFillOut": False,
      }

      response = requests.put(url, json=payload, headers=HEADERS)

      if response.status_code == 200:
        print(f"Moved files to archive: {batch}")
      else:
        print(
          f"Failed to move files batch. "
          f"Status: {response.status_code}, Message: {response.text}"
        )

  # Optional: send report to admin (placeholder)
  def send_report_to_admin(report_text):
    print("\n[ADMIN REPORT]")
    print(report_text)

  def build_report(all_files, old_files):
    header = "Old documents archive report\n"
    summary = (
      f"Total files scanned: {len(all_files)}\n"
      f"Old files (>= {MAX_FILE_AGE_MONTHS} months): {len(old_files)}\n"
    )

    details = "\nList of archived files (first 50):\n"
    sample = old_files[:50]

    if not sample:
      details += "No files were archived.\n"
    else:
      for f in sample:
        age_days = f.get("ageDays")
        age_text = f"{age_days} days" if age_days is not None else "unknown age"
        details += f"- {f.get('path')} (age: {age_text})\n"

    return header + summary + details

  def main():
    print("Scanning room/folder tree for old documents...")
    all_files = walk_folder_tree(ROOM_ROOT_FOLDER_ID)
    print(f"Collected {len(all_files)} files in total.")

    old_files = filter_old_files(all_files)
    print(f"Found {len(old_files)} files older than {MAX_FILE_AGE_MONTHS} months.")

    if not old_files:
      print("Nothing to archive. Exiting.")
      return

    file_ids = [f["id"] for f in old_files if f.get("id") is not None]
    print("Moving old files to archive folder...")
    move_files_to_archive(file_ids)

    report_text = build_report(all_files, old_files)
    send_report_to_admin(report_text)

    print("\nArchiving completed.")

  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve folder contents

A GET request is sent to [/api/2.0/files/folder/:folderId](/docspace/api-backend/usage-api/get-folder-info) to retrieve folder contents.

The response includes:
- `files`: list of files in the folder
- `folders`: list of subfolders to scan recursively

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getFolderContents(folderId: string) {
    const url = `${API_HOST}/api/2.0/files/folder/${folderId}`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (!res.ok) {
      const t = await res.text();
      console.log(
        `Folder contents retrieval failed for ID ${folderId}. ` +
        `Status: ${res.status}, Message: ${t}`
      );
      return null;
    }

    const data = await res.json();
    const contents = data && data.response ? data.response : null;
    if (!contents || typeof contents !== 'object') {
      console.log('Unexpected folder contents format.');
      return null;
    }

    const files = Array.isArray(contents.files) ? contents.files : [];
    const folders = Array.isArray(contents.folders) ? contents.folders : [];

    return { files, folders };
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_folder_contents(folder_id):
    url = f"{API_HOST}/api/2.0/files/folder/{folder_id}"
    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
      print(
        f"Folder contents retrieval failed for ID {folder_id}. "
        f"Status: {response.status_code}, Message: {response.text}"
      )
      return None

    data = response.json()
    if not isinstance(data, dict) or "response" not in data:
      print("Unexpected folder contents format.")
      return None

    contents = data["response"]
    files = contents.get("files", []) or []
    folders = contents.get("folders", []) or []
    return {"files": files, "folders": folders}
  ```

  </TabItem>
</Tabs>

## Step 2: Scan folders recursively

The script walks through the folder tree starting from ROOM_ROOT_FOLDER_ID and collects all files with:
- `file ID` — used later to identify the file in DocSpace API operations
- `title` — the file name as displayed in the DocSpace interface
- `full path` — the file location inside the room, used for reporting
- `age in days` — calculated from available date fields such as creation or last update time

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function walkFolderTree(folderId: string, pathPrefix = '/') {
    const contents = await getFolderContents(folderId);
    if (!contents) return [];

    const result: any[] = [];
    const currentPath = pathPrefix || '/';

    for (const fileEntry of contents.files) {
      const title = fileEntry.title || 'Untitled';
      const ageDays = getFileAgeDays(fileEntry);

      result.push({
        id: fileEntry.id,
        title: title,
        path: `${currentPath}${title}`,
        ageDays: ageDays,
      });
    }

    for (const folderEntry of contents.folders) {
      const subFolderId = folderEntry.id;
      const folderTitle = folderEntry.title || 'Folder';
      const subPath = `${currentPath}${folderTitle}/`;

      const subFiles = await walkFolderTree(String(subFolderId), subPath);
      result.push(...subFiles);
    }

    return result;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def walk_folder_tree(folder_id, path_prefix="/"):
    contents = get_folder_contents(folder_id)
    if not contents:
      return []

    result = []
    current_path = path_prefix or "/"

    for file_entry in contents["files"]:
      title = file_entry.get("title") or "Untitled"
      age_days = get_file_age_days(file_entry)

      result.append({
        "id": file_entry.get("id"),
        "title": title,
        "path": f"{current_path}{title}",
        "ageDays": age_days,
      })

    for folder_entry in contents["folders"]:
      sub_folder_id = folder_entry.get("id")
      folder_title = folder_entry.get("title") or "Folder"
      sub_path = f"{current_path}{folder_title}/"
      result.extend(walk_folder_tree(sub_folder_id, sub_path))

    return result
  ```

  </TabItem>
</Tabs>

## Step 3: Filter old files

The script compares each file age with the threshold:
- `MAX_FILE_AGE_DAYS = MAX_FILE_AGE_MONTHS * 30`

Files older than the threshold are selected for archiving.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function filterOldFiles(files: any[]) {
    const oldFiles: any[] = [];

    for (const f of files) {
      const ageDays = toNumber(f.ageDays);
      if (ageDays != null && ageDays >= MAX_FILE_AGE_DAYS) {
        oldFiles.push(f);
      }
    }

    return oldFiles;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def filter_old_files(files):
    old_files = []

    for f in files:
      age_days = f.get("ageDays")
      if age_days is not None and age_days >= MAX_FILE_AGE_DAYS:
        old_files.append(f)

    return old_files
  ```

  </TabItem>
</Tabs>

## Step 4: Move old files to the archive folder

A PUT request is sent to [/api/2.0/files/fileops/move](/docspace/api-backend/usage-api/move-batch-items).
The script moves files in batches (50 IDs per request) to `ARCHIVE_FOLDER_ID`.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function moveFilesToArchive(fileIds: string[]) {
    if (!fileIds || fileIds.length === 0) {
      console.log('No files to move to archive.');
      return;
    }

    const url = `${API_HOST}/api/2.0/files/fileops/move`;
    const batchSize = 50;

    for (let i = 0; i < fileIds.length; i += batchSize) {
      const batch = fileIds.slice(i, i + batchSize);

      const payload = {
        fileIds: batch,
        destFolderId: ARCHIVE_FOLDER_ID,
        deleteAfter: true,
        content: true,
        toFillOut: false,
      };

      const res = await fetch(url, { method: 'PUT', headers: HEADERS, body: JSON.stringify(payload) });

      if (res.ok) {
        console.log(`Moved files to archive: ${batch.join(', ')}`);
      } else {
        const t = await res.text();
        console.log(`Failed to move files batch. Status: ${res.status}, Message: ${t}`);
      }
    }
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def move_files_to_archive(file_ids):
    if not file_ids:
      print("No files to move to archive.")
      return

    url = f"{API_HOST}/api/2.0/files/fileops/move"
    batch_size = 50

    for i in range(0, len(file_ids), batch_size):
      batch = file_ids[i:i + batch_size]

      payload = {
        "fileIds": batch,
        "destFolderId": ARCHIVE_FOLDER_ID,
        "deleteAfter": True,
        "content": True,
        "toFillOut": False,
      }

      response = requests.put(url, json=payload, headers=HEADERS)

      if response.status_code == 200:
        print(f"Moved files to archive: {batch}")
      else:
        print(
          f"Failed to move files batch. "
          f"Status: {response.status_code}, Message: {response.text}"
        )
  ```

  </TabItem>
</Tabs>