import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Monitor storage usage and warn when quota is near the limit

This example shows how to track DocSpace storage consumption using the API. The script reads the portal quota (total capacity) and the current used space, calculates the usage percentage, and triggers a warning (placeholder) when the usage exceeds a configured threshold.
Optionally, it requests files usage statistics (if available) and prints the largest folders/files returned by the API to help you locate the main storage consumers.

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

  // Threshold in percent, for example: warn when 90% of quota is used
  const QUOTA_THRESHOLD_PERCENT = 90;

  function bytesToGb(value: any) {
    const n = Number(value);
    if (!Number.isFinite(n) || n <= 0) return '0 GB';
    const gb = n / (1024 * 1024 * 1024);
    return `${gb.toFixed(1)} GB`;
  }

  function pickNumber(value: any) {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }

  function getValue(json: any, key: string) {
    if (!json || typeof json !== 'object') return null;

    if (json.response && typeof json.response === 'object') {
      if (json.response[key] != null) return json.response[key];
    }

    if (json[key] != null) return json[key];
    return null;
  }

  function getStorageSizeBytes(quotaInfo: any) {
    let v = getValue(quotaInfo, 'StorageSize');
    if (v == null) v = getValue(quotaInfo, 'storageSize');
    return pickNumber(v);
  }

  function getUsedSizeBytesFromQuota(quotaInfo: any) {
    let v = getValue(quotaInfo, 'UsedSize');
    if (v == null) v = getValue(quotaInfo, 'usedSize');
    return pickNumber(v);
  }

  function getUsedSpaceBytes(usedSpaceInfo: any) {
    let v = getValue(usedSpaceInfo, 'response');
    if (v == null) v = getValue(usedSpaceInfo, 'usedSpace');
    return pickNumber(v);
  }

  // Step 1: Get portal quota and space usage by modules
  async function getPortalQuota() {
    const url = `${API_HOST}/api/2.0/settings/quota`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (res.ok) {
      return res.json();
    }

    const t = await res.text();
    console.log(`Failed to get portal quota. Status code: ${res.status}, Message: ${t}`);
    return null;
  }

  // Step 2: Get total used space of the portal
  async function getPortalUsedSpace() {
    const url = `${API_HOST}/api/2.0/portal/usedspace`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (res.ok) {
      return res.json();
    }

    const t = await res.text();
    console.log(`Failed to get portal used space. Status code: ${res.status}, Message: ${t}`);
    return null;
  }

  // Step 3: Get used space of files in root folders (to find heavy areas)
  async function getFilesUsedSpace() {
    const url = `${API_HOST}/api/2.0/files/filesusedspace`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (res.ok) {
      return res.json();
    }

    const t = await res.text();
    console.log(`Failed to get files used space. Status code: ${res.status}, Message: ${t}`);
    return null;
  }

  function getTopHeavyItems(items: any, limit = 10) {
    if (!Array.isArray(items)) return [];

    const normalized: { path: string; size: number }[] = [];

    for (const item of items) {
      if (!item || typeof item !== 'object') continue;

      const path = item.path || item.Path || '';
      const sizeRaw = item.size ?? item.Size;

      const size = Number(sizeRaw);
      if (!path || !Number.isFinite(size)) continue;

      normalized.push({ path: String(path), size });
    }

    normalized.sort((a, b) => b.size - a.size);
    return normalized.slice(0, limit);
  }

  function sendQuotaWarning(message: string) {
    console.log('[WARNING]', message);
    // Replace this placeholder with your notification system (email, Slack webhook, etc.)
  }

  async function checkDiskUsage() {
    const quotaInfo = await getPortalQuota();
    const usedSpaceInfo = await getPortalUsedSpace();
    const filesUsageInfo = await getFilesUsedSpace();

    if (!quotaInfo || !usedSpaceInfo) {
      console.log('Usage check skipped because quota or used space data is missing.');
      return;
    }

    const totalBytes = getStorageSizeBytes(quotaInfo);

    let usedBytes = getUsedSizeBytesFromQuota(quotaInfo);
    if (usedBytes == null) {
      usedBytes = getUsedSpaceBytes(usedSpaceInfo);
    }

    if (!Number.isFinite(totalBytes) || !Number.isFinite(usedBytes)) {
      console.log('Cannot calculate percentage: totalBytes or usedBytes is missing.');
      return;
    }

    const percentUsed = (usedBytes / totalBytes) * 100;

    console.log('\n=== DocSpace storage usage report ===');
    console.log(`Total quota: ${bytesToGb(totalBytes)}`);
    console.log(`Used space: ${bytesToGb(usedBytes)} (${percentUsed.toFixed(1)}%)`);

    if (percentUsed >= QUOTA_THRESHOLD_PERCENT) {
      const warningMessage =
        `DocSpace storage usage has reached ${percentUsed.toFixed(1)}% of the quota. ` +
        `Please clean up or increase the quota.`;
      sendQuotaWarning(warningMessage);
    }

    const items =
      (filesUsageInfo && filesUsageInfo.response && filesUsageInfo.response.StorageUsage) ||
      (filesUsageInfo && filesUsageInfo.response) ||
      (filesUsageInfo && filesUsageInfo.storageUsage) ||
      filesUsageInfo;

    const topHeavy = getTopHeavyItems(items, 10);

    if (topHeavy.length > 0) {
      console.log('\nTop heavy folders/files (by size):');
      for (let i = 0; i < topHeavy.length; i++) {
        console.log(`${i + 1}. ${topHeavy[i].path} – ${bytesToGb(topHeavy[i].size)}`);
      }
    } else {
      console.log('\nNo detailed per-folder/file usage data found in filesusedspace response.');
    }

    console.log('\nDisk usage monitoring check finished.');
  }

  (async () => {
    try {
      await checkDiskUsage();
    } catch (err: any) {
      console.error(err?.message || err);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  # Set API base URL
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  # Threshold in percent, for example: warn when 90% of quota is used
  QUOTA_THRESHOLD_PERCENT = 90

  def bytes_to_gb(value):
    try:
      value = int(value)
    except (TypeError, ValueError):
      return "0 GB"

    if value <= 0:
      return "0 GB"

    gb = value / (1024 * 1024 * 1024)
    return f"{gb:.1f} GB"

  # Step 1: Get portal quota and space usage by modules
  def get_portal_quota():
    url = f"{API_HOST}/api/2.0/settings/quota"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()

    print(
      f"Failed to get portal quota. Status code: {response.status_code}, "
      f"Message: {response.text}"
    )
    return None

  # Step 2: Get total used space of the portal
  def get_portal_used_space():
    url = f"{API_HOST}/api/2.0/portal/usedspace"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()

    print(
      f"Failed to get portal used space. Status code: {response.status_code}, "
      f"Message: {response.text}"
    )
    return None

  # Step 3: Get used space of files in root folders (to find heavy areas)
  def get_files_used_space():
    url = f"{API_HOST}/api/2.0/files/filesusedspace"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()

    print(
      f"Failed to get files used space. Status code: {response.status_code}, "
      f"Message: {response.text}"
    )
    return None

  def get_top_heavy_items(items, limit=10):
    if not isinstance(items, list):
      return []

    normalized = []
    for item in items:
      path = item.get("path") or item.get("Path") or ""
      size = item.get("size")
      if size is None:
        size = item.get("Size")

      try:
        size = int(size)
      except (TypeError, ValueError):
        continue

      if path:
        normalized.append({"path": path, "size": size})

    normalized.sort(key=lambda x: x["size"], reverse=True)
    return normalized[:limit]

  def send_quota_warning(message):
    print("[WARNING]", message)
    # Replace this placeholder with your notification system (email, Slack webhook, etc.)

  def check_disk_usage():
    quota_info = get_portal_quota()
    used_space_info = get_portal_used_space()
    files_usage_info = get_files_used_space()

    if not quota_info or not used_space_info:
      print("Usage check skipped because quota or used space data is missing.")
      return

    total_bytes = (
      quota_info.get("response", {}).get("StorageSize")
      or quota_info.get("StorageSize")
      or quota_info.get("response", {}).get("storageSize")
      or quota_info.get("storageSize")
    )

    used_bytes_from_quota = (
      quota_info.get("response", {}).get("UsedSize")
      or quota_info.get("UsedSize")
      or quota_info.get("response", {}).get("usedSize")
      or quota_info.get("usedSize")
    )

    used_bytes = used_bytes_from_quota
    if not used_bytes:
      used_bytes = used_space_info.get("response") or used_space_info.get("usedSpace")

    if not total_bytes or not used_bytes:
      print("Cannot calculate percentage: totalBytes or usedBytes is missing.")
      return

    total_bytes = int(total_bytes)
    used_bytes = int(used_bytes)
    percent_used = (used_bytes / total_bytes) * 100

    print("\n=== DocSpace storage usage report ===")
    print(f"Total quota: {bytes_to_gb(total_bytes)}")
    print(f"Used space: {bytes_to_gb(used_bytes)} ({percent_used:.1f}%)")

    if percent_used >= QUOTA_THRESHOLD_PERCENT:
      warning_message = (
        f"DocSpace storage usage has reached {percent_used:.1f}% of the quota. "
        f"Please clean up or increase the quota."
      )
      send_quota_warning(warning_message)

    items = (
      files_usage_info.get("response", {}).get("StorageUsage")
      or files_usage_info.get("response")
      or files_usage_info.get("storageUsage")
      or files_usage_info
    )

    top_heavy = get_top_heavy_items(items if isinstance(items, list) else [], limit=10)

    if top_heavy:
      print("\nTop heavy folders/files (by size):")
      for index, item in enumerate(top_heavy, start=1):
        print(f'{index}. {item["path"]} – {bytes_to_gb(item["size"])}')
    else:
      print("\nNo detailed per-folder/file usage data found in filesusedspace response.")

    print("\nDisk usage monitoring check finished.")

  if __name__ == "__main__":
    check_disk_usage()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve portal quota

A GET request is sent to [/api/2.0/settings/quota](/docspace/api-backend/usage-api/get-portal-quota) to retrieve the portal quota.

The response typically includes:
- total available storage size
- used size (depending on portal configuration)

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getPortalQuota() {
    const url = `${API_HOST}/api/2.0/settings/quota`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (res.ok) {
      return res.json();
    }

    const t = await res.text();
    console.log(`Failed to get portal quota. Status code: ${res.status}, Message: ${t}`);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_portal_quota():
    url = f"{API_HOST}/api/2.0/settings/quota"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()

    print(
      f"Failed to get portal quota. Status code: {response.status_code}, "
      f"Message: {response.text}"
    )
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Retrieve portal used space

A GET request is sent to [/api/2.0/portal/usedspace](/docspace/api-backend/usage-api/get-portal-used-space) to retrieve the total used space value.
This value is used as a fallback if the quota endpoint does not provide `UsedSize`.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getPortalUsedSpace() {
    const url = `${API_HOST}/api/2.0/portal/usedspace`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (res.ok) {
      return res.json();
    }

    const t = await res.text();
    console.log(`Failed to get portal used space. Status code: ${res.status}, Message: ${t}`);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_portal_used_space():
    url = f"{API_HOST}/api/2.0/portal/usedspace"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()

    print(
      f"Failed to get portal used space. Status code: {response.status_code}, "
      f"Message: {response.text}"
    )
    return None
  ```

  </TabItem>
</Tabs>

## Step 3: Find "heavy" folders and files

A GET request is sent to [/api/2.0/files/filesusedspace](/docspace/api-backend/usage-api/get-files-used-space) to retrieve per-folder usage data.
The script sorts the items by size and prints the top 10 biggest entries.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getFilesUsedSpace() {
    const url = `${API_HOST}/api/2.0/files/filesusedspace`;
    const res = await fetch(url, { method: 'GET', headers: HEADERS });

    if (res.ok) {
      return res.json();
    }

    const t = await res.text();
    console.log(`Failed to get files used space. Status code: ${res.status}, Message: ${t}`);
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_files_used_space():
    url = f"{API_HOST}/api/2.0/files/filesusedspace"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      return response.json()

    print(
      f"Failed to get files used space. Status code: {response.status_code}, "
      f"Message: {response.text}"
    )
    return None
  ```

  </TabItem>
</Tabs>