import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Disable inactive external contractors based on audit login events

Script loads external contractors (placeholder), checks their last login via audit login filter for the last N days, and disables users who have no login events or are inactive for INACTIVITY_DAYS.

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

  // If the user has not logged in for INACTIVITY_DAYS days, disable them
  const INACTIVITY_DAYS = 30;

  // How many days back we search login audit events
  const LOGIN_LOOKBACK_DAYS = 180;

  // People status value/name. Replace if your portal expects a numeric status code.
  const DISABLED_STATUS = 'Terminated';

  // Headers with API key for authentication
  const HEADERS: Record<string, string> = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Basic request helper
  async function requestJson(method: string, path: string, body: any = null) {
    const url = `${API_HOST}${path}`;

    try {
      const res = await fetch(url, {
        method,
        headers: HEADERS,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        const text = await res.text();
        console.log(`Request failed: ${method} ${url}`);
        console.log(`Status: ${res.status}, Message: ${text}`);
        return null;
      }

      return res.json();
    } catch (err: any) {
      console.log(`Request error: ${err?.message || err}`);
      return null;
    }
  }

  function isoDaysAgo(days: number) {
    const ms = days * 24 * 60 * 60 * 1000;
    return new Date(Date.now() - ms).toISOString();
  }

  function parseIsoDate(value: any): Date | null {
    if (!value || typeof value !== 'string') return null;
    const d = new Date(value);
    return Number.isNaN(d.getTime()) ? null : d;
  }

  // Step 1: Load external contractors (placeholder)
  function fetchExternalContractors() {
    // Replace this with:
    // - your HR/CRM source, or
    // - DocSpace People list filtered by your own logic.
    return [
      { id: 'user-id-1', email: 'contractor1@vendor.com', displayName: 'Contractor One' },
      { id: 'user-id-2', email: 'contractor2@vendor.com', displayName: 'Contractor Two' },
    ];
  }

  // Step 2: Get the last login date from audit logs
  async function getLastLoginDate(userId: string): Promise<Date | null> {
    const now = new Date();
    const from = isoDaysAgo(LOGIN_LOOKBACK_DAYS);

    const params = new URLSearchParams({
      userId: String(userId),
      action: '0', // 0 = login
      from,
      to: now.toISOString(),
    });

    const data = await requestJson(
      'GET',
      `/api/2.0/security/audit/login/filter?${params.toString()}`,
    );

    const events = data && data.response ? data.response : [];
    if (!Array.isArray(events) || events.length === 0) return null;

    let last: Date | null = null;

    for (const e of events) {
      const dt = parseIsoDate(e?.date || e?.created || e?.time);
      if (!dt) continue;
      if (!last || dt > last) last = dt;
    }

    return last;
  }

  function isInactive(lastLogin: Date | null, now: Date) {
    // If there are no login events, treat the contractor as inactive
    if (!lastLogin) return true;

    const diffMs = now.getTime() - lastLogin.getTime();
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    return days >= INACTIVITY_DAYS;
  }

  // Step 3: Disable inactive users
  async function disableUsers(userIds: string[]) {
    if (!userIds.length) return true;

    const body = {
      userIds,
      resendAll: false,
    };

    // Replace DISABLED_STATUS if your portal expects numeric status codes:
    // PUT /api/2.0/people/status/{status}
    const data = await requestJson('PUT', `/api/2.0/people/status/${DISABLED_STATUS}`, body);
    return Boolean(data);
  }

  async function cleanupInactiveExternalContractors() {
    const now = new Date();

    console.log('Loading external contractors...');
    const contractors = fetchExternalContractors();

    if (!contractors.length) {
      console.log('No external contractors found.');
      return;
    }

    const toDisable: string[] = [];

    for (const u of contractors) {
      const userId = String(u.id);
      const label = u.displayName || u.email || userId;

      console.log(`\nChecking: ${label} (${userId})`);

      const lastLogin = await getLastLoginDate(userId);

      if (lastLogin) {
        console.log(`Last login: ${lastLogin.toISOString()}`);
      } else {
        console.log('No login events found.');
      }

      if (isInactive(lastLogin, now)) {
        console.log(`Inactive >= ${INACTIVITY_DAYS} days. Marking for disable.`);
        toDisable.push(userId);
      } else {
        console.log('Still active. Skipping.');
      }
    }

    console.log('\nSummary:');
    if (!toDisable.length) {
      console.log('No inactive users found. Nothing to disable.');
      return;
    }

    const ok = await disableUsers(toDisable);
    console.log(ok ? `Disabled ${toDisable.length} user(s).` : 'Failed to disable users.');
  }

  cleanupInactiveExternalContractors().catch((err: any) => console.error(err?.message || err));
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  from datetime import datetime, timedelta, timezone
  from typing import Optional, Dict, Any, List
  from urllib.parse import urlencode

  # Set API base URL
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # If the user has not logged in for INACTIVITY_DAYS days, disable them
  INACTIVITY_DAYS = 30

  # How many days back we search login audit events
  LOGIN_LOOKBACK_DAYS = 180

  # People status value/name. Replace if your portal expects a numeric status code.
  DISABLED_STATUS = "Terminated"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  # Basic request helper
  def request_json(method: str, path: str, json_body: Optional[Dict[str, Any]] = None) -> Optional[Dict[str, Any]]:
    url = f"{API_HOST}{path}"

    try:
      r = requests.request(method.upper(), url, headers=HEADERS, json=json_body)
    except Exception as e:
      print(f"Request error: {e}")
      return None

    if r.status_code != 200:
      print(f"Request failed: {method} {url}")
      print(f"Status: {r.status_code}, Message: {r.text}")
      return None

    try:
      return r.json()
    except Exception:
      print("Response is not JSON.")
      return None

  # Step 1: Load external contractors (placeholder)
  def fetch_external_contractors() -> List[Dict[str, Any]]:
    # Replace this with:
    # - your HR/CRM source, or
    # - DocSpace People list filtered by your own logic.
    return [
      {"id": "user-id-1", "email": "contractor1@vendor.com", "displayName": "Contractor One"},
      {"id": "user-id-2", "email": "contractor2@vendor.com", "displayName": "Contractor Two"},
    ]

  # Step 2: Get the last login date from audit logs
  def get_last_login_date(user_id: str) -> Optional[datetime]:
    now = datetime.now(timezone.utc)
    dt_from = now - timedelta(days=LOGIN_LOOKBACK_DAYS)

    params = {
      "userId": str(user_id),
      "action": 0,  # 0 = login
      "from": dt_from.isoformat(),
      "to": now.isoformat(),
    }

    query = urlencode(params)
    data = request_json("GET", f"/api/2.0/security/audit/login/filter?{query}")

    if not isinstance(data, dict):
      return None

    events = data.get("response", [])
    if not isinstance(events, list) or not events:
      return None

    last: Optional[datetime] = None

    for e in events:
      if not isinstance(e, dict):
        continue

      dt_str = e.get("date") or e.get("created") or e.get("time")
      if not isinstance(dt_str, str):
        continue

      try:
        dt = datetime.fromisoformat(dt_str.replace("Z", "+00:00"))
        if dt.tzinfo is None:
          dt = dt.replace(tzinfo=timezone.utc)
      except Exception:
        continue

      if last is None or dt > last:
        last = dt

    return last

  def is_inactive(last_login: Optional[datetime], now: datetime) -> bool:
    # If there are no login events, treat the contractor as inactive
    if last_login is None:
      return True
    return (now - last_login).days >= INACTIVITY_DAYS

  # Step 3: Disable inactive users
  def disable_users(user_ids: List[str]) -> bool:
    if not user_ids:
      return True

    payload = {
      "userIds": user_ids,
      "resendAll": False,
    }

    # Replace DISABLED_STATUS if your portal expects numeric status codes:
    # PUT /api/2.0/people/status/{status}
    data = request_json("PUT", f"/api/2.0/people/status/{DISABLED_STATUS}", json_body=payload)
    return data is not None

  def cleanup_inactive_external_contractors() -> None:
    now = datetime.now(timezone.utc)

    print("Loading external contractors...")
    contractors = fetch_external_contractors()

    if not contractors:
      print("No external contractors found.")
      return

    to_disable: List[str] = []

    for u in contractors:
      user_id = str(u.get("id") or "")
      label = u.get("displayName") or u.get("email") or user_id

      if not user_id:
        continue

      print(f"\nChecking: {label} ({user_id})")

      last_login = get_last_login_date(user_id)

      if last_login:
        print(f"Last login: {last_login.isoformat()}")
      else:
        print("No login events found.")

      if is_inactive(last_login, now):
        print(f"Inactive >= {INACTIVITY_DAYS} days. Marking for disable.")
        to_disable.append(user_id)
      else:
        print("Still active. Skipping.")

    print("\nSummary:")
    if not to_disable:
      print("No inactive users found. Nothing to disable.")
      return

    ok = disable_users(to_disable)
    print(f"Disabled {len(to_disable)} user(s)." if ok else "Failed to disable users.")

  if __name__ == "__main__":
    cleanup_inactive_external_contractors()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Load external contractors

The script prepares a list of external contractors (placeholder). Replace this part with your HR/CRM source or your own People API filtering logic to return external user IDs that should be checked.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function fetchExternalContractors() {
    // Replace this with:
    // - your HR/CRM source, or
    // - DocSpace People list filtered by your own logic.
    return [
      { id: 'user-id-1', email: 'contractor1@vendor.com', displayName: 'Contractor One' },
      { id: 'user-id-2', email: 'contractor2@vendor.com', displayName: 'Contractor Two' },
    ];
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def fetch_external_contractors() -> List[Dict[str, Any]]:
    # Replace this with:
    # - your HR/CRM source, or
    # - DocSpace People list filtered by your own logic.
    return [
      {"id": "user-id-1", "email": "contractor1@vendor.com", "displayName": "Contractor One"},
      {"id": "user-id-2", "email": "contractor2@vendor.com", "displayName": "Contractor Two"},
    ]
  ```

  </TabItem>
</Tabs>

## Step 2: Check last login via audit logs

Then it sends a GET request to [/api/2.0/security/audit/login/filter](/docspace/api-backend/usage-api/get-login-events-by-filter) with:

- `userId`: contractor user ID in DocSpace
- `action=0`: login events only
- `from` / `to`: date range for audit search (for example, the last 180 days)

The script parses the returned events and picks the most recent login timestamp.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getLastLoginDate(userId: string): Promise<Date | null> {
    const now = new Date();
    const from = isoDaysAgo(LOGIN_LOOKBACK_DAYS);

    const params = new URLSearchParams({
      userId: String(userId),
      action: '0', // 0 = login
      from,
      to: now.toISOString(),
    });

    const data = await requestJson(
      'GET',
      `/api/2.0/security/audit/login/filter?${params.toString()}`,
    );

    const events = data && data.response ? data.response : [];
    if (!Array.isArray(events) || events.length === 0) return null;

    let last: Date | null = null;

    for (const e of events) {
      const dt = parseIsoDate(e?.date || e?.created || e?.time);
      if (!dt) continue;
      if (!last || dt > last) last = dt;
    }

    return last;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_last_login_date(user_id: str) -> Optional[datetime]:
    now = datetime.now(timezone.utc)
    dt_from = now - timedelta(days=LOGIN_LOOKBACK_DAYS)

    params = {
      "userId": str(user_id),
      "action": 0,  # 0 = login
      "from": dt_from.isoformat(),
      "to": now.isoformat(),
    }

    query = urlencode(params)
    data = request_json("GET", f"/api/2.0/security/audit/login/filter?{query}")

    if not isinstance(data, dict):
      return None

    events = data.get("response", [])
    if not isinstance(events, list) or not events:
      return None

    last: Optional[datetime] = None

    for e in events:
      if not isinstance(e, dict):
        continue

      dt_str = e.get("date") or e.get("created") or e.get("time")
      if not isinstance(dt_str, str):
        continue

      try:
        dt = datetime.fromisoformat(dt_str.replace("Z", "+00:00"))
        if dt.tzinfo is None:
          dt = dt.replace(tzinfo=timezone.utc)
      except Exception:
        continue

      if last is None or dt > last:
        last = dt

    return last
  ```

  </TabItem>
</Tabs>

## Step 3: Disable inactive users

If the last login is missing or older than `INACTIVITY_DAYS`, the script adds the user to the disable list.
Then it sends a PUT request to [/api/2.0/people/status/:status](/docspace/api-backend/usage-api/update-user-status) with the collected userIds. This updates the user status and disables inactive contractors.
If your portal uses numeric status codes instead of string statuses, replace Terminated with the required status value.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function disableUsers(userIds: string[]) {
    if (!userIds.length) return true;

    const body = {
      userIds,
      resendAll: false,
    };

    // Replace DISABLED_STATUS if your portal expects numeric status codes:
    // PUT /api/2.0/people/status/{status}
    const data = await requestJson('PUT', `/api/2.0/people/status/${DISABLED_STATUS}`, body);
    return Boolean(data);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def disable_users(user_ids: List[str]) -> bool:
    if not user_ids:
      return True

    payload = {
      "userIds": user_ids,
      "resendAll": False,
    }

    # Replace DISABLED_STATUS if your portal expects numeric status codes:
    # PUT /api/2.0/people/status/{status}
    data = request_json("PUT", f"/api/2.0/people/status/{DISABLED_STATUS}", json_body=payload)
    return data is not None
  ```

  </TabItem>
</Tabs>