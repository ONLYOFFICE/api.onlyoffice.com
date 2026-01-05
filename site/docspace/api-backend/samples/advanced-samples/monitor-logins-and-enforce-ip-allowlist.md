import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Monitor logins and enforce IP allowlist

This example demonstrates how to monitor login activity in ONLYOFFICE DocSpace and detect logins that violate an IP allowlist policy.

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
  const HEADERS: Record<string, string> = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // In a real project, store this data in a database.
  // Here we keep allowed IPs per user in memory for demonstration.
  const ALLOWED_IPS_BY_USER: Record<string, string[]> = {};

  // Example: new user data coming from an external system (JSON)
  const NEW_USER = {
    id: 'user_id_here',
    email: 'user@example.com',
    allowedIps: ['203.0.113.10', '198.51.100.0-198.51.100.255'], // range is for illustration
  };

  // Helper: basic request wrapper (beginner-friendly)
  async function requestJson(method: string, url: string, body?: any) {
    const res = await fetch(url, {
      method,
      headers: HEADERS,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
      const t = await res.text();
      console.log(`Request failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    try {
      return await res.json();
    } catch {
      return null;
    }
  }

  // Step 1: Retrieve current IP restrictions
  async function getRestrictions() {
    const url = `${API_HOST}/api/2.0/settings/iprestrictions`;
    const settings = await requestJson('GET', url);
    if (settings) {
      console.log('Current IP restrictions settings retrieved.');
    }
    return settings;
  }

  // Step 2: Update IP restrictions (portal-wide allowlist)
  async function saveRestrictions(ipRestrictions: any[], enable = true) {
    const url = `${API_HOST}/api/2.0/settings/iprestrictions`;
    const body = { enable, ipRestrictions };

    const settings = await requestJson('PUT', url, body);
    if (settings) {
      console.log('IP restrictions updated successfully.');
    }
    return settings;
  }

  // Helper: normalize different response shapes into a list
  function extractIpRestrictionsList(currentSettings: any): any[] {
    // currentSettings may be:
    // - list: [ { "ip": "...", "forAdmin": false }, ... ]
    // - dict: { "response": { "ipRestrictions": [...] }, ... }
    // - dict: { "ipRestrictions": [...] }
    if (Array.isArray(currentSettings)) {
      return currentSettings;
    }

    if (currentSettings && typeof currentSettings === 'object') {
      const resp = currentSettings.response ?? currentSettings;
      if (Array.isArray(resp)) return resp;
      if (resp && typeof resp === 'object' && Array.isArray(resp.ipRestrictions)) return resp.ipRestrictions;
    }

    return [];
  }

  // Helper: ensure that allowed IPs for a user exist in the portal IP restrictions
  async function ensureUserIpsInPortalRestrictions(userId: string, allowedIps: string[]) {
    // Save per-user allowed IPs in memory (for demo)
    ALLOWED_IPS_BY_USER[userId] = allowedIps;

    const currentSettings = await getRestrictions();
    if (!currentSettings) return;

    const currentList = extractIpRestrictionsList(currentSettings);
    const updatedList = [...currentList];

    for (const ip of allowedIps) {
      const alreadyExists = currentList.some((entry) => entry && typeof entry === 'object' && entry.ip === ip);
      if (!alreadyExists) {
        updatedList.push({
          ip,
          forAdmin: false, // adjust if you want to restrict admins separately
        });
      }
    }

    await saveRestrictions(updatedList, true);
  }

  // Step 3: Retrieve login events for a given period
  async function getLoginEventsByFilter(params: { userId?: string; from?: string; to?: string }) {
    const url = new URL(`${API_HOST}/api/2.0/security/audit/login/filter`);

    if (params.userId) url.searchParams.set('userId', params.userId);
    if (params.from) url.searchParams.set('from', params.from);
    if (params.to) url.searchParams.set('to', params.to);

    const data = await requestJson('GET', url.toString());
    if (data) {
      console.log('Login events retrieved successfully.');
    }
    return data;
  }

  // Helper: simple check if IP is allowed for a user (exact match demo)
  function isIpAllowedForUser(userId: string, ip: string) {
    const allowedIps = ALLOWED_IPS_BY_USER[userId] || [];
    return allowedIps.includes(ip);
  }

  // Step 4: Placeholder to notify administrators about unauthorized logins
  function sendSecurityAlert(payload: any) {
    // In a real implementation, send this data to:
    // - your email server
    // - Slack / Teams webhook
    // - incident/ticket system
    console.log('\n[SECURITY ALERT] Unauthorized login detected:');
    console.log(JSON.stringify(payload, null, 2));
  }

  // Step 5: Check login events and notify if IP is not allowed for the user
  async function checkLoginsForUnauthorizedIps(fromDate: string, toDate: string) {
    const loginData = await getLoginEventsByFilter({ from: fromDate, to: toDate });
    if (!loginData) return;

    // loginData may be:
    // - { "response": [ ... ], ... }
    // - directly [ ... ]
    const events = Array.isArray(loginData) ? loginData : loginData.response;

    if (!Array.isArray(events)) {
      console.log('Login events data is not a list.');
      return;
    }

    const suspiciousEvents: any[] = [];

    for (const event of events) {
      if (!event || typeof event !== 'object') continue;

      const userId = event.userId || event.account || event.user;
      const ip = event.ip || event.ipAddress;

      if (!userId || !ip) continue;

      if (!isIpAllowedForUser(String(userId), String(ip))) {
        suspiciousEvents.push({
          userId,
          ip,
          date: event.date || event.time,
          raw: event,
        });
      }
    }

    if (suspiciousEvents.length === 0) {
      console.log('\nNo unauthorized IP logins detected for the selected period.');
      return;
    }

    sendSecurityAlert({
      from: fromDate,
      to: toDate,
      events: suspiciousEvents,
    });
  }

  // Main workflow: add IP restrictions for a new user and monitor logins
  (async () => {
    try {
      console.log('\nStep 1: Registering allowed IP range(s) for a new user...');
      await ensureUserIpsInPortalRestrictions(NEW_USER.id, NEW_USER.allowedIps);

      console.log('\nStep 2: Checking login history for unauthorized IP addresses (example period)...');
      const startDate = '2025-01-01';
      const endDate = '2025-12-31';

      await checkLoginsForUnauthorizedIps(startDate, endDate);

      console.log('\nIP-based access check completed.');
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

  # Set API base URL
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
  }

  # In a real project, store this data in a database.
  # Here we keep allowed IPs per user in memory for demonstration.
  ALLOWED_IPS_BY_USER = {}

  # Example: new user data coming from an external system (JSON)
  NEW_USER = {
    "id": "user_id_here",
    "email": "user@example.com",
    "allowedIps": ["203.0.113.10", "198.51.100.0-198.51.100.255"],  # range is for illustration
  }

  # Step 1: Retrieve current IP restrictions
  def get_restrictions():
    url = f"{API_HOST}/api/2.0/settings/iprestrictions"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      settings = response.json()
      print("Current IP restrictions settings retrieved.")
      return settings
    else:
      print(
        f"IP restrictions retrieval failed. Status code: {response.status_code}, "
        f"Message: {response.text}"
      )
      return None

  # Step 2: Update IP restrictions (portal-wide allowlist)
  def save_restrictions(ip_restrictions, enable=True):
    url = f"{API_HOST}/api/2.0/settings/iprestrictions"
    data = {
      "enable": enable,
      "ipRestrictions": ip_restrictions,
    }

    response = requests.put(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      settings = response.json()
      print("IP restrictions updated successfully.")
      return settings
    else:
      print(
        f"IP restrictions update failed. Status code: {response.status_code}, "
        f"Message: {response.text}"
      )
      return None

  # Helper: normalize different response shapes into a list
  def extract_ip_restrictions_list(current_settings):
    # current_settings may be:
    # - list: [ { "ip": "...", "forAdmin": false }, ... ]
    # - dict: { "response": { "ipRestrictions": [...] }, ... }
    # - dict: { "ipRestrictions": [...] }
    if isinstance(current_settings, list):
      return current_settings

    if isinstance(current_settings, dict):
      resp = current_settings.get("response", current_settings)

      if isinstance(resp, list):
        return resp

      if isinstance(resp, dict):
        ip_list = resp.get("ipRestrictions", [])
        return ip_list if isinstance(ip_list, list) else []

    return []

  # Helper: ensure that allowed IPs for a user exist in the portal IP restrictions
  def ensure_user_ips_in_portal_restrictions(user_id, allowed_ips):
    # Save per-user allowed IPs in memory (for demo)
    ALLOWED_IPS_BY_USER[user_id] = allowed_ips

    current_settings = get_restrictions()
    if not current_settings:
      return

    current_list = extract_ip_restrictions_list(current_settings)
    updated_list = list(current_list)

    for ip in allowed_ips:
      already_exists = any(
        isinstance(entry, dict) and entry.get("ip") == ip for entry in current_list
      )
      if not already_exists:
        updated_list.append(
          {
            "ip": ip,
            "forAdmin": False,  # adjust if you want to restrict admins separately
          }
        )

    save_restrictions(updated_list, enable=True)

  # Step 3: Retrieve login events for a given period
  def get_login_events_by_filter(user_id=None, start_date=None, end_date=None):
    url = f"{API_HOST}/api/2.0/security/audit/login/filter"
    params = {}

    if user_id:
      params["userId"] = user_id
    if start_date:
      params["from"] = start_date
    if end_date:
      params["to"] = end_date

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      data = response.json()
      print("Login events retrieved successfully.")
      return data
    else:
      print(
        f"Login events retrieval failed. Status code: {response.status_code}, "
        f"Message: {response.text}"
      )
      return None

  # Helper: simple check if IP is allowed for a user (exact match demo)
  def is_ip_allowed_for_user(user_id, ip):
    allowed_ips = ALLOWED_IPS_BY_USER.get(user_id, [])
    return ip in allowed_ips

  # Step 4: Placeholder to notify administrators about unauthorized logins
  def send_security_alert(payload):
    # In a real implementation, send this data to:
    # - your email server
    # - Slack / Teams webhook
    # - incident/ticket system
    print("\n[SECURITY ALERT] Unauthorized login detected:")
    print(json.dumps(payload, indent=2, ensure_ascii=False))

  # Step 5: Check login events and notify if IP is not allowed for the user
  def check_logins_for_unauthorized_ips(from_date, to_date):
    login_data = get_login_events_by_filter(start_date=from_date, end_date=to_date)
    if not login_data:
      return

    # login_data may be:
    # - { "response": [ ... ], ... }
    # - directly [ ... ]
    events = login_data.get("response") if isinstance(login_data, dict) else login_data

    if not isinstance(events, list):
      print("Login events data is not a list.")
      return

    suspicious_events = []

    for event in events:
      if not isinstance(event, dict):
        continue

      user_id = event.get("userId") or event.get("account") or event.get("user")
      ip = event.get("ip") or event.get("ipAddress")

      if not user_id or not ip:
        continue

      if not is_ip_allowed_for_user(user_id, ip):
        suspicious_events.append(
          {
            "userId": user_id,
            "ip": ip,
            "date": event.get("date") or event.get("time"),
            "raw": event,
          }
        )

    if not suspicious_events:
      print("\nNo unauthorized IP logins detected for the selected period.")
      return

    payload = {
      "from": from_date,
      "to": to_date,
      "events": suspicious_events,
    }
    send_security_alert(payload)

  # Main workflow: add IP restrictions for a new user and monitor logins
  def main():
    print("\nStep 1: Registering allowed IP range(s) for a new user...")
    ensure_user_ips_in_portal_restrictions(NEW_USER["id"], NEW_USER["allowedIps"])

    print("\nStep 2: Checking login history for unauthorized IP addresses (example period)...")
    start_date = "2025-01-01"
    end_date = "2025-12-31"

    check_logins_for_unauthorized_ips(start_date, end_date)

    print("\nIP-based access check completed.")

  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve current IP restrictions

A GET request is sent to [/api/2.0/settings/iprestrictions](/docspace/api-backend/usage-api/get-ip-restrictions) to retrieve the current portal IP restriction settings.

This step helps you understand what IP rules are already configured before adding new IP entries.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getRestrictions() {
    const url = `${API_HOST}/api/2.0/settings/iprestrictions`;
    const settings = await requestJson('GET', url);
    if (settings) {
      console.log('Current IP restrictions settings retrieved.');
    }
    return settings;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_restrictions():
    url = f"{API_HOST}/api/2.0/settings/iprestrictions"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      settings = response.json()
      print("Current IP restrictions settings retrieved.")
      return settings
    else:
      print(
        f"IP restrictions retrieval failed. Status code: {response.status_code}, "
        f"Message: {response.text}"
      )
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Update portal IP restrictions (allowlist)

A PUT request is sent to [/api/2.0/settings/iprestrictions](/docspace/api-backend/usage-api/save-ip-restrictions) to enable IP restrictions and store the updated allowlist.

The request body includes:
- `enable`: Enables or disables IP restrictions for the portal.
- `ipRestrictions`: A list of IP entries (each entry typically contains an ip value and additional flags like forAdmin).

In this example, we add missing user IPs to the portal-wide allowlist.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function saveRestrictions(ipRestrictions: any[], enable = true) {
    const url = `${API_HOST}/api/2.0/settings/iprestrictions`;
    const body = { enable, ipRestrictions };

    const settings = await requestJson('PUT', url, body);
    if (settings) {
      console.log('IP restrictions updated successfully.');
    }
    return settings;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def save_restrictions(ip_restrictions, enable=True):
    url = f"{API_HOST}/api/2.0/settings/iprestrictions"
    data = {
      "enable": enable,
      "ipRestrictions": ip_restrictions,
    }

    response = requests.put(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      settings = response.json()
      print("IP restrictions updated successfully.")
      return settings
    else:
      print(
        f"IP restrictions update failed. Status code: {response.status_code}, "
        f"Message: {response.text}"
      )
      return None
  ```

  </TabItem>
</Tabs>

## Step 3: Retrieve login events for a selected period

A GET request is sent to [/api/2.0/security/audit/login/filter](/docspace/api-backend/usage-api/get-login-events-by-filter) to fetch login events for a selected date range.

This step is used to monitor authentication activity and detect logins that may violate your IP rules.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getLoginEventsByFilter(params: { userId?: string; from?: string; to?: string }) {
    const url = new URL(`${API_HOST}/api/2.0/security/audit/login/filter`);

    if (params.userId) url.searchParams.set('userId', params.userId);
    if (params.from) url.searchParams.set('from', params.from);
    if (params.to) url.searchParams.set('to', params.to);

    const data = await requestJson('GET', url.toString());
    if (data) {
      console.log('Login events retrieved successfully.');
    }
    return data;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_login_events_by_filter(user_id=None, start_date=None, end_date=None):
    url = f"{API_HOST}/api/2.0/security/audit/login/filter"
    params = {}

    if user_id:
      params["userId"] = user_id
    if start_date:
      params["from"] = start_date
    if end_date:
      params["to"] = end_date

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      data = response.json()
      print("Login events retrieved successfully.")
      return data
    else:
      print(
        f"Login events retrieval failed. Status code: {response.status_code}, "
        f"Message: {response.text}"
      )
      return None
  ```

  </TabItem>
</Tabs>

## Step 4: Send a security alert (placeholder)

This is a placeholder step showing where you would notify administrators or security tools.

In a real system, this can be replaced with:
- Email notification
- Slack / Teams webhook
- Ticket or incident creation

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function sendSecurityAlert(payload: any) {
    // In a real implementation, send this data to:
    // - your email server
    // - Slack / Teams webhook
    // - incident/ticket system
    console.log('\n[SECURITY ALERT] Unauthorized login detected:');
    console.log(JSON.stringify(payload, null, 2));
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def send_security_alert(payload):
    # In a real implementation, send this data to:
    # - your email server
    # - Slack / Teams webhook
    # - incident/ticket system
    print("\n[SECURITY ALERT] Unauthorized login detected:")
    print(json.dumps(payload, indent=2, ensure_ascii=False))
  ```

  </TabItem>
</Tabs>

## Step 5: Check logins and alert on unauthorized IP addresses

This step loops through login events, reads the user ID and IP address from each event, and checks if the IP is allowed for that user.

If an event uses a non-allowed IP, the script collects it into a list and sends one combined alert payload.

If you want, next we can make the demo even more “junior-proof” without changing logic:
- add one small function that prints a clean “Step X completed” message consistently,
- rename a couple of variables to be 100% consistent between Node.js and Python (still same flow).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function checkLoginsForUnauthorizedIps(fromDate: string, toDate: string) {
    const loginData = await getLoginEventsByFilter({ from: fromDate, to: toDate });
    if (!loginData) return;

    // loginData may be:
    // - { "response": [ ... ], ... }
    // - directly [ ... ]
    const events = Array.isArray(loginData) ? loginData : loginData.response;

    if (!Array.isArray(events)) {
      console.log('Login events data is not a list.');
      return;
    }

    const suspiciousEvents: any[] = [];

    for (const event of events) {
      if (!event || typeof event !== 'object') continue;

      const userId = event.userId || event.account || event.user;
      const ip = event.ip || event.ipAddress;

      if (!userId || !ip) continue;

      if (!isIpAllowedForUser(String(userId), String(ip))) {
        suspiciousEvents.push({
          userId,
          ip,
          date: event.date || event.time,
          raw: event,
        });
      }
    }

    if (suspiciousEvents.length === 0) {
      console.log('\nNo unauthorized IP logins detected for the selected period.');
      return;
    }

    sendSecurityAlert({
      from: fromDate,
      to: toDate,
      events: suspiciousEvents,
    });
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def check_logins_for_unauthorized_ips(from_date, to_date):
    login_data = get_login_events_by_filter(start_date=from_date, end_date=to_date)
    if not login_data:
      return

    # login_data may be:
    # - { "response": [ ... ], ... }
    # - directly [ ... ]
    events = login_data.get("response") if isinstance(login_data, dict) else login_data

    if not isinstance(events, list):
      print("Login events data is not a list.")
      return

    suspicious_events = []

    for event in events:
      if not isinstance(event, dict):
        continue

      user_id = event.get("userId") or event.get("account") or event.get("user")
      ip = event.get("ip") or event.get("ipAddress")

      if not user_id or not ip:
        continue

      if not is_ip_allowed_for_user(user_id, ip):
        suspicious_events.append(
          {
            "userId": user_id,
            "ip": ip,
            "date": event.get("date") or event.get("time"),
            "raw": event,
          }
        )

    if not suspicious_events:
      print("\nNo unauthorized IP logins detected for the selected period.")
      return

    payload = {
      "from": from_date,
      "to": to_date,
      "events": suspicious_events,
    }
    send_security_alert(payload)
  ```

  </TabItem>
</Tabs>
