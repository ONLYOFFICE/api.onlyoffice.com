import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Monitor VDR activity and alert on suspicious user behavior

This example shows how to monitor user activity in a Virtual Data Room (VDR) in ONLYOFFICE DocSpace using audit logs.

The workflow analyzes audit events for a selected period and identifies users with unusually high activity inside the VDR. For those users, it additionally retrieves login history to provide context for further investigation.

The result is a structured alert payload that can be sent to a security or compliance channel.

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

  // Simple configuration for monitoring
  const MONITORED_ROOM_TITLE = 'Sensitive VDR – Finance';
  const MAX_EVENTS_PER_USER = 20; // Example threshold
  const AUDIT_PERIOD_FROM = '2025-01-01';
  const AUDIT_PERIOD_TO = '2025-12-31';

  // Step 1: Create a Virtual Data Room (roomType: 8)
  async function createVdrRoom(title: string) {
    const url = `${API_HOST}/api/2.0/files/rooms`;

    const body = {
      title,
      roomType: 8, // 8 = Virtual Data Room (VDR)
    };

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`VDR creation failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('VDR created successfully.');
    return json;
  }

  // Step 2: Get filtered audit trail data
  async function getAuditEventsByFilter(params: { userId?: string; from?: string; to?: string }) {
    const url = new URL(`${API_HOST}/api/2.0/security/audit/events/filter`);
    if (params.userId) url.searchParams.set('userId', params.userId);
    if (params.from) url.searchParams.set('from', params.from);
    if (params.to) url.searchParams.set('to', params.to);

    const res = await fetch(url.toString(), { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Audit events retrieval failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('Filtered audit events retrieved successfully.');
    return json;
  }

  // Step 3: Get filtered login events for a user
  async function getLoginEventsByFilter(params: { userId?: string; from?: string; to?: string }) {
    const url = new URL(`${API_HOST}/api/2.0/security/audit/login/filter`);
    if (params.userId) url.searchParams.set('userId', params.userId);
    if (params.from) url.searchParams.set('from', params.from);
    if (params.to) url.searchParams.set('to', params.to);

    const res = await fetch(url.toString(), { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Login events retrieval failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('Filtered login events retrieved successfully.');
    return json;
  }

  // Helper: Detect suspicious activity per user based on a simple threshold
  function detectSuspiciousUsers(auditEvents: any[], maxEvents: number) {
    const counters: Record<string, number> = {};

    for (const event of auditEvents) {
      const userId = event?.userId || event?.createBy || event?.createdBy;
      if (!userId) continue;

      const key = String(userId);
      counters[key] = (counters[key] || 0) + 1;
    }

    return Object.entries(counters)
      .filter(([, count]) => count > maxEvents)
      .map(([userId]) => userId);
  }

  // Step 4: Placeholder for sending an alert to security
  function sendSecurityAlert(payload: any) {
    // In a real implementation, send this data to:
    // - your email server
    // - Slack / Teams webhook
    // - incident/ticket system
    console.log('\n[SECURITY ALERT] Suspicious activity detected:');
    console.log(JSON.stringify(payload, null, 2));
  }

  // Main monitoring workflow
  (async () => {
    try {
      console.log('\nStep 1: Creating or locating the VDR...');
      const vdr = await createVdrRoom(MONITORED_ROOM_TITLE);
      if (!vdr) {
        console.log('VDR creation failed. Monitoring cannot continue.');
        return;
      }

      const roomId = vdr?.response?.id || vdr?.id;
      console.log('VDR room ID:', roomId);

      console.log('\nStep 2: Retrieving audit trail data for the selected period...');
      const auditData = await getAuditEventsByFilter({
        from: AUDIT_PERIOD_FROM,
        to: AUDIT_PERIOD_TO,
      });
      if (!auditData) return;

      let auditEvents = Array.isArray(auditData) ? auditData : auditData.response;
      if (!Array.isArray(auditEvents)) auditEvents = [];

      const suspiciousUsers = detectSuspiciousUsers(auditEvents, MAX_EVENTS_PER_USER);
      if (suspiciousUsers.length === 0) {
        console.log('\nNo suspicious activity detected for the selected period.');
        return;
      }

      console.log('\nSuspicious users detected:', suspiciousUsers);

      console.log('\nStep 3: Retrieving login history for suspicious users...');
      const loginDetails: Record<string, any> = {};

      for (const userId of suspiciousUsers) {
        const loginData = await getLoginEventsByFilter({
          userId,
          from: AUDIT_PERIOD_FROM,
          to: AUDIT_PERIOD_TO,
        });
        loginDetails[userId] = loginData;
      }

      console.log('\nStep 4: Sending security alert with audit and login details...');
      const payload = {
        roomId,
        period: { from: AUDIT_PERIOD_FROM, to: AUDIT_PERIOD_TO },
        maxEventsPerUser: MAX_EVENTS_PER_USER,
        suspiciousUsers,
        loginDetails,
      };

      sendSecurityAlert(payload);

      console.log('\nMonitoring completed.');
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
    "Content-Type": "application/json"
  }

  # Simple configuration for monitoring
  MONITORED_ROOM_TITLE = "Sensitive VDR – Finance"
  MAX_EVENTS_PER_USER = 20  # Example threshold
  AUDIT_PERIOD_FROM = "2025-01-01"
  AUDIT_PERIOD_TO = "2025-12-31"

  # Step 1: Create a Virtual Data Room (roomType: 8)
  def create_vdr_room(title):
    url = f"{API_HOST}/api/2.0/files/rooms"

    body = {
      "title": title,
      "roomType": 8  # 8 = Virtual Data Room (VDR)
    }

    response = requests.post(url, headers=HEADERS, data=json.dumps(body))

    if response.status_code in (200, 201):
      data = response.json()
      print("VDR created successfully.")
      return data
    else:
      print(f"VDR creation failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Step 2: Get filtered audit trail data
  def get_audit_events_by_filter(user_id=None, start_date=None, end_date=None):
    url = f"{API_HOST}/api/2.0/security/audit/events/filter"
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
      print("Filtered audit events retrieved successfully.")
      return data
    else:
      print(f"Audit events retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Step 3: Get filtered login events for a user
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
      print("Filtered login events retrieved successfully.")
      return data
    else:
      print(f"Login events retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Helper: Detect suspicious activity per user based on a simple threshold
  def detect_suspicious_users(audit_events, max_events):
    counters = {}

    for event in audit_events:
      user_id = event.get("userId") or event.get("createBy") or event.get("createdBy")
      if not user_id:
        continue

      if user_id not in counters:
        counters[user_id] = 0
      counters[user_id] += 1

    suspicious = [user_id for user_id, count in counters.items() if count > max_events]
    return suspicious

  # Step 4: Placeholder for sending an alert to security
  def send_security_alert(payload):
    # In a real implementation, send this data to:
    # - your email server
    # - Slack / Teams webhook
    # - incident/ticket system
    print("\n[SECURITY ALERT] Suspicious activity detected:")
    print(json.dumps(payload, indent=2))

  # Main monitoring workflow
  def monitor_vdr_activity():
    print("\nStep 1: Creating or locating the VDR...")
    vdr = create_vdr_room(MONITORED_ROOM_TITLE)
    if not vdr:
      print("VDR creation failed. Monitoring cannot continue.")
      return

    room_id = vdr.get("response", {}).get("id") or vdr.get("id")
    print(f"VDR room ID: {room_id}")

    print("\nStep 2: Retrieving audit trail data for the selected period...")
    audit_data = get_audit_events_by_filter(
      start_date=AUDIT_PERIOD_FROM,
      end_date=AUDIT_PERIOD_TO
    )
    if not audit_data:
      return

    audit_events = audit_data.get("response") or audit_data
    if not isinstance(audit_events, list):
      audit_events = []

    suspicious_users = detect_suspicious_users(audit_events, MAX_EVENTS_PER_USER)
    if not suspicious_users:
      print("\nNo suspicious activity detected for the selected period.")
      return

    print("\nSuspicious users detected:", suspicious_users)

    print("\nStep 3: Retrieving login history for suspicious users...")
    login_details = {}

    for user_id in suspicious_users:
      login_data = get_login_events_by_filter(
        user_id=user_id,
        start_date=AUDIT_PERIOD_FROM,
        end_date=AUDIT_PERIOD_TO
      )
      login_details[user_id] = login_data

    print("\nStep 4: Sending security alert with audit and login details...")
    payload = {
      "roomId": room_id,
      "period": {"from": AUDIT_PERIOD_FROM, "to": AUDIT_PERIOD_TO},
      "maxEventsPerUser": MAX_EVENTS_PER_USER,
      "suspiciousUsers": suspicious_users,
      "loginDetails": login_details,
    }
    send_security_alert(payload)

    print("\nMonitoring completed.")

  if __name__ == "__main__":
    monitor_vdr_activity()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create a Virtual Data Room (VDR)

A POST request is sent to [/api/2.0/files/rooms](/docspace/api-backend/usage-api/create-room) to create a new room.

The request body includes:
- `title`: Room title.
- `roomType`: Room type. Use 8 to create a Virtual Data Room (VDR).

The API returns a room object. The room ID is used in the monitoring payload.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createVdrRoom(title: string) {
    const url = `${API_HOST}/api/2.0/files/rooms`;

    const body = {
      title,
      roomType: 8, // 8 = Virtual Data Room (VDR)
    };

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`VDR creation failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('VDR created successfully.');
    return json;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_vdr_room(title):
    url = f"{API_HOST}/api/2.0/files/rooms"

    body = {
      "title": title,
      "roomType": 8  # 8 = Virtual Data Room (VDR)
    }

    response = requests.post(url, headers=HEADERS, data=json.dumps(body))

    if response.status_code in (200, 201):
      data = response.json()
      print("VDR created successfully.")
      return data
    else:
      print(f"VDR creation failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Retrieve audit events for the selected period

A GET request is sent to [/api/2.0/security/audit/events/filter](/docspace/api-backend/usage-api/get-audit-events-by-filter) to retrieve audit trail events.

The request uses query parameters:
- `from`: Period start date (YYYY-MM-DD)
- `to`: Period end date (YYYY-MM-DD)
- `userId`: Optional filter (used when needed)

The API returns a list of events (typically under response).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getAuditEventsByFilter(params: { userId?: string; from?: string; to?: string }) {
    const url = new URL(`${API_HOST}/api/2.0/security/audit/events/filter`);
    if (params.userId) url.searchParams.set('userId', params.userId);
    if (params.from) url.searchParams.set('from', params.from);
    if (params.to) url.searchParams.set('to', params.to);

    const res = await fetch(url.toString(), { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Audit events retrieval failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('Filtered audit events retrieved successfully.');
    return json;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_audit_events_by_filter(user_id=None, start_date=None, end_date=None):
    url = f"{API_HOST}/api/2.0/security/audit/events/filter"
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
      print("Filtered audit events retrieved successfully.")
      return data
    else:
      print(f"Audit events retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 3: Retrieve login events for suspicious users

A GET request is sent to [/api/2.0/security/audit/login/filter](/docspace/api-backend/usage-api/get-login-events-by-filter) to retrieve login history.
This step is run for each suspicious user ID detected by the threshold rule.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getLoginEventsByFilter(params: { userId?: string; from?: string; to?: string }) {
    const url = new URL(`${API_HOST}/api/2.0/security/audit/login/filter`);
    if (params.userId) url.searchParams.set('userId', params.userId);
    if (params.from) url.searchParams.set('from', params.from);
    if (params.to) url.searchParams.set('to', params.to);

    const res = await fetch(url.toString(), { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Login events retrieval failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('Filtered login events retrieved successfully.');
    return json;
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
      print("Filtered login events retrieved successfully.")
      return data
    else:
      print(f"Login events retrieval failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 4: Send a security alert

This is a placeholder step that shows where to send the monitoring output.

The payload includes:
- `roomId`: The VDR room ID
- `period`: Reporting period
- `maxEventsPerUser`: Threshold used for detection
- `suspiciousUsers`: List of user IDs that exceeded the threshold
- `loginDetails`: Login audit data for each suspicious user

You can replace this placeholder with Slack, email, or your incident management system.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function sendSecurityAlert(payload: any) {
    // In a real implementation, send this data to:
    // - your email server
    // - Slack / Teams webhook
    // - incident/ticket system
    console.log('\n[SECURITY ALERT] Suspicious activity detected:');
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
    print("\n[SECURITY ALERT] Suspicious activity detected:")
    print(json.dumps(payload, indent=2))
  ```

  </TabItem>
</Tabs>