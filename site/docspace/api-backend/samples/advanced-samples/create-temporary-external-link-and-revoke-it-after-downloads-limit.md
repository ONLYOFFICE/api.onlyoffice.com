import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a temporary external link and revoke it after downloads limit

This example demonstrates how to share a file via a temporary external link in ONLYOFFICE DocSpace using the API. It creates a read-only link with an expiration date and a maximum download limit, checks audit events to see how the link was used, and revokes the link if it is expired or overused.

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
  const FILE_ID = 'file_id_here';

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Create a temporary external link
  async function createTemporaryLink(fileId: string, expires: string, maxDownloads: number) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/link`;

    const body = {
      expirationDate: expires,
      access: 1, // Read Only
      maxDownloads: maxDownloads,
    };

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to create link. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('Temporary link created.');
    return json;
  }

  // Step 2: Retrieve audit events for the file (to check link activity)
  async function getExternalLinkActivity(fileId: string) {
    const url = new URL(`${API_HOST}/api/2.0/security/audit/events/filter`);
    url.searchParams.set('targetId', fileId);

    const res = await fetch(url.toString(), { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get activity. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    return res.json();
  }

  // Step 3: Revoke the external link (mark it as expired)
  async function revokeExternalLink(fileId: string, linkId: string) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/links`;

    const body = {
      sharedTo: {
        id: linkId,
        // One simple option is to mark it as expired
        isExpired: true,
        // Alternatively:
        // expirationDate: '2025-01-01'
      },
    };

    const res = await fetch(url, { method: 'PUT', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to revoke link. Status code: ${res.status}, Message: ${t}`);
      return false;
    }

    console.log('External link revoked (marked as expired).');
    return true;
  }

  // Main flow
  (async () => {
    try {
      const expires = '2025-06-30';
      const maxDownloads = 3;

      // Step 1: Create link
      const link = await createTemporaryLink(FILE_ID, expires, maxDownloads);
      if (!link) return;

      // Created link ID
      const sharedLinkId = link?.response?.sharedLink?.id;
      if (!sharedLinkId) {
        console.log('Could not determine the created link ID from the response.');
        return;
      }

      // Step 2: Check activity
      const activity = await getExternalLinkActivity(FILE_ID);
      if (!activity) return;

      const events = Array.isArray(activity) ? activity : activity.response;
      const safeEvents = Array.isArray(events) ? events : [];

      // Filter downloads by action string (simple demo)
      const downloads = safeEvents.filter((e: any) => {
        const action = String(e?.action || '');
        return action.includes('Download') || action.includes('Downloaded');
      });

      const today = new Date().toISOString().slice(0, 10);

      // Step 3: Revoke if expired or overused
      if (downloads.length >= maxDownloads || today > expires) {
        console.log('Link expired or overused — revoking...');
        await revokeExternalLink(FILE_ID, sharedLinkId);
      }
    } catch (err: any) {
      console.error(err?.message || err);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  import json
  from datetime import date

  # Set API base URL
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"
  FILE_ID = "file_id_here"

  # Headers with API key for authentication
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
  }

  # Step 1: Create a temporary external link
  def create_temporary_link(file_id, expires, max_downloads):
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/link"

    body = {
      "expirationDate": expires,
      "access": 1,          # Read Only
      "maxDownloads": max_downloads,
    }

    r = requests.post(url, headers=HEADERS, data=json.dumps(body))
    if r.status_code != 200:
      print(f"Failed to create link. Status code: {r.status_code}, Message: {r.text}")
      return None

    print("Temporary link created.")
    return r.json()

  # Step 2: Retrieve audit events for the file (to check link activity)
  def get_external_link_activity(file_id):
    url = f"{API_HOST}/api/2.0/security/audit/events/filter"
    params = {"targetId": file_id}

    r = requests.get(url, headers=HEADERS, params=params)
    if r.status_code != 200:
      print(f"Failed to get activity. Status code: {r.status_code}, Message: {r.text}")
      return None

    return r.json()

  # Step 3: Revoke the external link (mark it as expired)
  def revoke_external_link(file_id, link_id):
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/links"

    body = {
      "sharedTo": {
        "id": link_id,
        # One simple option is to mark it as expired
        "isExpired": True
        # Alternatively:
        # "expirationDate": "2025-01-01"
      }
    }

    r = requests.put(url, headers=HEADERS, data=json.dumps(body))
    if r.status_code != 200:
      print(f"Failed to revoke link. Status code: {r.status_code}, Message: {r.text}")
      return False

    print("External link revoked (marked as expired).")
    return True

  def main():
    expires = "2025-06-30"
    max_downloads = 3

    # Step 1: Create link
    link = create_temporary_link(FILE_ID, expires, max_downloads)
    if not link:
      return

    # Created link ID
    shared_link_id = link.get("response", {}).get("sharedLink", {}).get("id")
    if not shared_link_id:
      print("Could not determine the created link ID from the response.")
      return

    # Step 2: Check activity
    activity = get_external_link_activity(FILE_ID)
    if not activity:
      return

    events = activity.get("response", [])
    if not isinstance(events, list):
      events = []

    # Filter downloads by action string (simple demo)
    downloads = [
      e for e in events
      if "Download" in e.get("action", "") or "Downloaded" in e.get("action", "")
    ]

    today = date.today().isoformat()

    # Step 3: Revoke if expired or overused
    if len(downloads) >= max_downloads or today > expires:
      print("Link expired or overused — revoking...")
      revoke_external_link(FILE_ID, shared_link_id)

  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create a temporary external link

A POST request is sent to [/api/2.0/files/file/:fileId/link](/docspace/api-backend/usage-api/create-file-primary-external-link) to create an external link for a file.

The request body includes:
- `expirationDate`: Date when the link expires (YYYY-MM-DD).
- `access`: Access level for the link (for example, 1 for read-only).
- `maxDownloads`: Maximum number of downloads allowed.

The API returns link information, including the link ID, which is needed to revoke it later.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createTemporaryLink(fileId: string, expires: string, maxDownloads: number) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/link`;

    const body = {
      expirationDate: expires,
      access: 1, // Read Only
      maxDownloads: maxDownloads,
    };

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to create link. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('Temporary link created.');
    return json;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_temporary_link(file_id, expires, max_downloads):
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/link"

    body = {
      "expirationDate": expires,
      "access": 1,          # Read Only
      "maxDownloads": max_downloads,
    }

    r = requests.post(url, headers=HEADERS, data=json.dumps(body))
    if r.status_code != 200:
      print(f"Failed to create link. Status code: {r.status_code}, Message: {r.text}")
      return None

    print("Temporary link created.")
    return r.json()
  ```

  </TabItem>
</Tabs>

## Step 2: Check external link activity in audit events

A GET request is sent to [/api/2.0/security/audit/events/filter](/docspace/api-backend/usage-api/get-audit-events-by-filter) with `targetId` to retrieve audit events related to the file. This step reads the audit log and counts how many download events occurred. In this example, downloads are detected using a simple substring check on the action field.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getExternalLinkActivity(fileId: string) {
    const url = new URL(`${API_HOST}/api/2.0/security/audit/events/filter`);
    url.searchParams.set('targetId', fileId);

    const res = await fetch(url.toString(), { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to get activity. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    return res.json();
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_external_link_activity(file_id):
    url = f"{API_HOST}/api/2.0/security/audit/events/filter"
    params = {"targetId": file_id}

    r = requests.get(url, headers=HEADERS, params=params)
    if r.status_code != 200:
      print(f"Failed to get activity. Status code: {r.status_code}, Message: {r.text}")
      return None

    return r.json()
  ```

  </TabItem>
</Tabs>

## Step 3: Revoke the external link if it is expired or overused

A PUT request is sent to [/api/2.0/files/file/:fileId/links](/docspace/api-backend/usage-api/set-file-external-link) to update link settings.

In this example, the link is revoked by marking it as expired:
- `sharedTo.id`: Link ID to update
- `sharedTo.isExpired`: true to invalidate the link

If the downloads count reaches maxDownloads, or the current date is later than expirationDate, the script revokes the external link.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function revokeExternalLink(fileId: string, linkId: string) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/links`;

    const body = {
      sharedTo: {
        id: linkId,
        // One simple option is to mark it as expired
        isExpired: true,
        // Alternatively:
        // expirationDate: '2025-01-01'
      },
    };

    const res = await fetch(url, { method: 'PUT', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Failed to revoke link. Status code: ${res.status}, Message: ${t}`);
      return false;
    }

    console.log('External link revoked (marked as expired).');
    return true;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def revoke_external_link(file_id, link_id):
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/links"

    body = {
      "sharedTo": {
        "id": link_id,
        # One simple option is to mark it as expired
        "isExpired": True
        # Alternatively:
        # "expirationDate": "2025-01-01"
      }
    }

    r = requests.put(url, headers=HEADERS, data=json.dumps(body))
    if r.status_code != 200:
      print(f"Failed to revoke link. Status code: {r.status_code}, Message: {r.text}")
      return False

    print("External link revoked (marked as expired).")
    return True
  ```

  </TabItem>
</Tabs>