import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a client collaboration room with welcome pack and restricted access

This example shows how to onboard a client in DocSpace by creating a dedicated collaboration room, adding a standard folder structure and welcome materials, granting access to the account manager and the client, and generating a shareable link. Optionally, it logs the created room details to an external CRM (placeholder).

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

  const ADMIN_EMAIL = 'admin@example.com';

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Simple API helper
  async function apiRequest(path: string, method: string = 'GET', body: any = null) {
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

  // Step 1: Start portal backup
  async function startBackup() {
    const body = {
      storageType: 'Documents',
      dump: true,
      storageParams: [],
    };

    const data = await apiRequest('/api/2.0/backup/startbackup', 'POST', body);
    if (!data) return null;

    const response = data.response || data;

    const backupId =
      response.id ||
      response.backupId ||
      null;

    return backupId;
  }

  // Step 2: Notify admin (placeholder)
  function notifyAdmin(subject: string, message: string) {
    console.log('\n[ADMIN NOTIFICATION]');
    console.log(`To: ${ADMIN_EMAIL}`);
    console.log(subject);
    console.log(message);
  }

  // Run sequence
  (async () => {
    try {
      const backupId = await startBackup();

      if (!backupId) {
        notifyAdmin('Backup failed', 'The backup could not be started.');
        return;
      }

      const report =
        'Backup has been started successfully.\n' +
        `Backup ID: ${backupId}\n` +
        `Started at: ${new Date().toISOString()}`;

      notifyAdmin('Backup started', report);
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

  ADMIN_EMAIL = "admin@example.com"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  # Simple API helper
  def api_request(path, method="GET", body=None):
    url = f"{API_HOST}{path}"

    try:
      response = requests.request(
        method=method,
        url=url,
        headers=HEADERS,
        json=body
      )

      if response.status_code != 200:
        print(
          f"Request failed. Status: {response.status_code}, "
          f"Message: {response.text}"
        )
        return None

      return response.json()

    except Exception as e:
      print(f"Request error: {e}")
      return None

  # Step 1: Start portal backup
  def start_backup():
    body = {
      "storageType": "Documents",
      "dump": True,
      "storageParams": []
    }

    data = api_request("/api/2.0/backup/startbackup", method="POST", body=body)
    if not data:
      return None

    response = data.get("response", data)

    backup_id = response.get("id") or response.get("backupId")
    return backup_id

  # Step 2: Notify admin (placeholder)
  def notify_admin(subject, message):
    print("\n[ADMIN NOTIFICATION]")
    print(f"To: {ADMIN_EMAIL}")
    print(subject)
    print(message)

  def main():
    backup_id = start_backup()

    if not backup_id:
      notify_admin("Backup failed", "The backup could not be started.")
      return

    report = (
      "Backup has been started successfully.\n"
      f"Backup ID: {backup_id}\n"
      f"Started at: {datetime.utcnow().isoformat()} UTC"
    )

    notify_admin("Backup started", report)

  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Start a manual backup

A POST request is sent to [/api/2.0/backup/startbackup](/docspace/api-backend/usage-api/start-backup).

The request body includes:
- `storageType`: backup destination type (example: Documents).
- `dump`: whether the backup should include a dump (true / false).
- `storageParams`: optional storage parameters (can be empty).

If the request succeeds, the API response may contain a backup task identifier (for example `id` or `backupId`). The script saves this value to include it in the notification.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function startBackup() {
    const body = {
      storageType: 'Documents',
      dump: true,
      storageParams: [],
    };

    const data = await apiRequest('/api/2.0/backup/startbackup', 'POST', body);
    if (!data) return null;

    const response = data.response || data;

    const backupId =
      response.id ||
      response.backupId ||
      null;

    return backupId;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def start_backup():
    body = {
      "storageType": "Documents",
      "dump": True,
      "storageParams": []
    }

    data = api_request("/api/2.0/backup/startbackup", method="POST", body=body)
    if not data:
      return None

    response = data.get("response", data)

    backup_id = response.get("id") or response.get("backupId")
    return backup_id
  ```

  </TabItem>
</Tabs>

## Step 2: Notify an administrator

After the backup is started, the script prepares a short report:
- backup start status
- backup ID (if returned)
- timestamp

In this example, `notify_admin()`/`notifyAdmin()` is a placeholder that prints the message. In a real integration, replace it with your email, webhook, or incident system.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function notifyAdmin(subject: string, message: string) {
    console.log('\n[ADMIN NOTIFICATION]');
    console.log(`To: ${ADMIN_EMAIL}`);
    console.log(subject);
    console.log(message);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def notify_admin(subject, message):
    print("\n[ADMIN NOTIFICATION]")
    print(f"To: {ADMIN_EMAIL}")
    print(subject)
    print(message)
  ```

  </TabItem>
</Tabs>