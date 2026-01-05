import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remind inactive room members based on audit events

This example shows how to use DocSpace audit events to identify room members who are not participating.
It loads audit events for the last N days, counts events per user for selected rooms, and sends a reminder to members whose activity is below a defined threshold. Optionally, it sends a short summary report to a room owner/manager.

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

  const MONITORED_ROOM_IDS = [12345, 67890];
  const PERIOD_DAYS = 30;
  const MIN_ACTIVITY = 1;

  const MANAGER_EMAIL = 'manager@company.com';

  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  async function docspaceRequest(path: string, method = 'GET', body: any = null) {
    const url = `${API_HOST}${path}`;

    try {
      const res = await fetch(url, {
        method: method.toUpperCase(),
        headers: HEADERS,
        body: body ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) {
        const t = await res.text();
        console.log(`DocSpace request failed. Status: ${res.status}, Message: ${t}`);
        return null;
      }

      return res.json();
    } catch (err: any) {
      console.log(`DocSpace request error: ${err?.message || err}`);
      return null;
    }
  }

  // Step 1: Get room members (placeholder)
  function fetchRoomMembers(roomId: number) {
    if (roomId === 12345) {
      return [
        { id: 'user-aaa', displayName: 'Alice Smith', email: 'alice@example.com' },
        { id: 'user-bbb', displayName: 'Bob Johnson', email: 'bob@example.com' },
      ];
    }

    if (roomId === 67890) {
      return [
        { id: 'user-ccc', displayName: 'Carol Davis', email: 'carol@example.com' },
      ];
    }

    return [];
  }

  // Step 2: Load audit events for the last PERIOD_DAYS
  async function getAuditEvents(fromIso: string, toIso: string) {
    const query = `from=${encodeURIComponent(fromIso)}&to=${encodeURIComponent(toIso)}`;
    const data = await docspaceRequest(`/api/2.0/security/audit/events/filter?${query}`, 'GET');

    if (!data || typeof data !== 'object') return [];
    const events = (data as any).response;

    return Array.isArray(events) ? events : [];
  }

  function getRoomIdFromEvent(evt: any) {
    const direct =
      evt.roomId ||
      evt.spaceId ||
      evt.folderId;

    if (direct != null) return Number(direct);

    const entity = evt.entity && typeof evt.entity === 'object' ? evt.entity : null;
    if (!entity) return null;

    const nested = entity.roomId || entity.spaceId;
    if (nested == null) return null;

    const n = Number(nested);
    return Number.isFinite(n) ? n : null;
  }

  function isRoomActivityEvent(evt: any, roomIds: number[]) {
    const entityType = String(evt.entityType || evt.targetType || evt.entity || '').toLowerCase();
    const isFileOrFolder =
      entityType.includes('file') ||
      entityType.includes('document') ||
      entityType.includes('folder') ||
      entityType.includes('room');

    if (!isFileOrFolder) return false;

    const roomId = getRoomIdFromEvent(evt);
    if (roomId == null) return false;

    return roomIds.includes(roomId);
  }

  // Step 3: Build room -> user -> activityCount map
  function buildRoomUserActivityMap(events: any[], roomIds: number[]) {
    const result: Record<number, Record<string, number>> = {};

    for (const evt of events) {
      if (!isRoomActivityEvent(evt, roomIds)) continue;

      const roomId = getRoomIdFromEvent(evt);
      if (roomId == null) continue;

      const userId = String(evt.userId || evt.account || '');
      if (!userId) continue;

      if (!result[roomId]) result[roomId] = {};
      if (!result[roomId][userId]) result[roomId][userId] = 0;

      result[roomId][userId] += 1;
    }

    return result;
  }

  // Step 4: Send reminders and manager report (placeholders)
  function sendReminderToUser(member: any, roomId: number, periodDays: number) {
    const to = member.email || member.displayName || 'user';

    console.log('--- USER REMINDER ---');
    console.log(`To: ${to}`);
    console.log('Subject: Infrequent activity in DocSpace room');
    console.log(
      `Body:\nHello ${member.displayName || 'there'},\n` +
      `We noticed that you had no activity in room ID ${roomId} during the last ${periodDays} days.\n` +
      'If this room is still relevant to you, please review its contents.'
    );
  }

  function sendManagerReport(lines: string[]) {
    console.log('--- MANAGER REPORT ---');
    console.log(`To: ${MANAGER_EMAIL}`);
    console.log('Subject: Monthly report: infrequent room users');

    if (!lines.length) {
      console.log('Body:\nAll monitored room members were active during this period.');
      return;
    }

    console.log('Body:');
    for (const line of lines) console.log(line);
  }

  // Main workflow
  (async () => {
    try {
      const now = new Date();
      const from = new Date(now.getTime() - PERIOD_DAYS * 24 * 60 * 60 * 1000);

      const fromIso = from.toISOString();
      const toIso = now.toISOString();

      console.log(`Checking infrequent users from ${fromIso} to ${toIso}...`);

      const roomMembersMap: Record<number, any[]> = {};
      for (const roomId of MONITORED_ROOM_IDS) {
        roomMembersMap[roomId] = fetchRoomMembers(roomId);
      }

      const events = await getAuditEvents(fromIso, toIso);
      const activityMap = buildRoomUserActivityMap(events, MONITORED_ROOM_IDS);

      const managerReportLines: string[] = [];

      for (const roomId of MONITORED_ROOM_IDS) {
        const members = roomMembersMap[roomId] || [];
        const roomActivity = activityMap[roomId] || {};

        if (!members.length) continue;

        console.log(`Room ${roomId}: checking ${members.length} member(s)...`);

        for (const member of members) {
          const userId = String(member.id || '');
          const count = roomActivity[userId] || 0;

          if (count < MIN_ACTIVITY) {
            sendReminderToUser(member, roomId, PERIOD_DAYS);
            managerReportLines.push(
              `Room ${roomId}: user ${member.displayName} (${member.email || userId}) had 0 events in the last ${PERIOD_DAYS} days.`
            );
          }
        }
      }

      sendManagerReport(managerReportLines);
      console.log('Monthly infrequent-users check completed.');
    } catch (err: any) {
      console.error(err?.message || err);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  from datetime import datetime, timedelta, timezone

  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  MONITORED_ROOM_IDS = [12345, 67890]
  PERIOD_DAYS = 30
  MIN_ACTIVITY = 1

  MANAGER_EMAIL = "manager@company.com"

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
        json=json_body
      )

      if response.status_code != 200:
        print(f"DocSpace request failed. Status: {response.status_code}, Message: {response.text}")
        return None

      return response.json()

    except Exception as e:
      print(f"DocSpace request error: {e}")
      return None

  # Step 1: Get room members (placeholder)
  def fetch_room_members(room_id):
    if room_id == 12345:
      return [
        {"id": "user-aaa", "displayName": "Alice Smith", "email": "alice@example.com"},
        {"id": "user-bbb", "displayName": "Bob Johnson", "email": "bob@example.com"},
      ]

    if room_id == 67890:
      return [
        {"id": "user-ccc", "displayName": "Carol Davis", "email": "carol@example.com"},
      ]

    return []

  # Step 2: Load audit events for the last PERIOD_DAYS
  def get_audit_events(dt_from, dt_to):
    params = f"from={dt_from.isoformat()}&to={dt_to.isoformat()}"
    data = docspace_request(f"/api/2.0/security/audit/events/filter?{params}", method="GET")

    if not isinstance(data, dict) or "response" not in data:
      return []

    events = data.get("response")
    return events if isinstance(events, list) else []

  def get_room_id_from_event(evt):
    room_id = evt.get("roomId") or evt.get("spaceId") or evt.get("folderId")
    if room_id is not None:
      try:
        return int(room_id)
      except Exception:
        return None

    entity = evt.get("entity")
    if not isinstance(entity, dict):
      return None

    nested = entity.get("roomId") or entity.get("spaceId")
    if nested is None:
      return None

    try:
      return int(nested)
    except Exception:
      return None

  def is_room_activity_event(evt, room_ids):
    entity_type = str(evt.get("entityType") or evt.get("targetType") or evt.get("entity") or "").lower()

    is_file_or_folder = (
      "file" in entity_type or
      "document" in entity_type or
      "folder" in entity_type or
      "room" in entity_type
    )

    if not is_file_or_folder:
      return False

    room_id = get_room_id_from_event(evt)
    if room_id is None:
      return False

    return room_id in room_ids

  # Step 3: Build room -> user -> activityCount map
  def build_room_user_activity_map(events, room_ids):
    result = {}

    for evt in events:
      if not is_room_activity_event(evt, room_ids):
        continue

      room_id = get_room_id_from_event(evt)
      if room_id is None:
        continue

      user_id = str(evt.get("userId") or evt.get("account") or "")
      if not user_id:
        continue

      if room_id not in result:
        result[room_id] = {}

      current = result[room_id].get(user_id, 0)
      result[room_id][user_id] = current + 1

    return result

  # Step 4: Send reminders and manager report (placeholders)
  def send_reminder_to_user(member, room_id, period_days):
    to = member.get("email") or member.get("displayName") or "user"

    print("--- USER REMINDER ---")
    print(f"To: {to}")
    print("Subject: Infrequent activity in DocSpace room")
    print(
      "Body:\n"
      f"Hello {member.get('displayName') or 'there'},\n"
      f"We noticed that you had no activity in room ID {room_id} during the last {period_days} days.\n"
      "If this room is still relevant to you, please review its contents."
    )

  def send_manager_report(report_lines):
    print("--- MANAGER REPORT ---")
    print(f"To: {MANAGER_EMAIL}")
    print("Subject: Monthly report: infrequent room users")

    if not report_lines:
      print("Body:\nAll monitored room members were active during this period.")
      return

    print("Body:")
    for line in report_lines:
      print(line)

  # Main workflow
  def monthly_infrequent_users_check():
    now = datetime.now(timezone.utc)
    dt_from = now - timedelta(days=PERIOD_DAYS)

    print(f"Checking infrequent users from {dt_from.isoformat()} to {now.isoformat()}...")

    room_members_map = {}
    for room_id in MONITORED_ROOM_IDS:
      room_members_map[room_id] = fetch_room_members(room_id)

    events = get_audit_events(dt_from, now)
    activity_map = build_room_user_activity_map(events, MONITORED_ROOM_IDS)

    manager_report_lines = []

    for room_id in MONITORED_ROOM_IDS:
      members = room_members_map.get(room_id, [])
      room_activity = activity_map.get(room_id, {})

      if not members:
        continue

      print(f"Room {room_id}: checking {len(members)} member(s)...")

      for member in members:
        user_id = str(member.get("id") or "")
        count = room_activity.get(user_id, 0)

        if count < MIN_ACTIVITY:
          send_reminder_to_user(member, room_id, PERIOD_DAYS)
          manager_report_lines.append(
            f"Room {room_id}: user {member.get('displayName')} "
            f"({member.get('email') or user_id}) had 0 events in the last {PERIOD_DAYS} days."
          )

    send_manager_report(manager_report_lines)
    print("Monthly infrequent-users check completed.")

  if __name__ == "__main__":
    monthly_infrequent_users_check()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Get room members

The script loads room members for each monitored room.
In this example, `fetch_room_members()` is a placeholder returning static data. In a real integration, replace it with a real DocSpace endpoint for room members or sharing entries.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function fetchRoomMembers(roomId: number) {
    if (roomId === 12345) {
      return [
        { id: 'user-aaa', displayName: 'Alice Smith', email: 'alice@example.com' },
        { id: 'user-bbb', displayName: 'Bob Johnson', email: 'bob@example.com' },
      ];
    }

    if (roomId === 67890) {
      return [
        { id: 'user-ccc', displayName: 'Carol Davis', email: 'carol@example.com' },
      ];
    }

    return [];
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def fetch_room_members(room_id):
    if room_id == 12345:
      return [
        {"id": "user-aaa", "displayName": "Alice Smith", "email": "alice@example.com"},
        {"id": "user-bbb", "displayName": "Bob Johnson", "email": "bob@example.com"},
      ]

    if room_id == 67890:
      return [
        {"id": "user-ccc", "displayName": "Carol Davis", "email": "carol@example.com"},
      ]

    return []
  ```

  </TabItem>
</Tabs>

## Step 2: Retrieve audit events for the period

A GET request is sent to [/api/2.0/security/audit/events/filter](/docspace/api-backend/usage-api/get-audit-events-by-filter) with:
- `from`: start datetime
- `to`: end datetime
The response returns a list of audit events (usually under response).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getAuditEvents(fromIso: string, toIso: string) {
    const query = `from=${encodeURIComponent(fromIso)}&to=${encodeURIComponent(toIso)}`;
    const data = await docspaceRequest(`/api/2.0/security/audit/events/filter?${query}`, 'GET');

    if (!data || typeof data !== 'object') return [];
    const events = (data as any).response;

    return Array.isArray(events) ? events : [];
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_audit_events(dt_from, dt_to):
    params = f"from={dt_from.isoformat()}&to={dt_to.isoformat()}"
    data = docspace_request(f"/api/2.0/security/audit/events/filter?{params}", method="GET")

    if not isinstance(data, dict) or "response" not in data:
      return []

    events = data.get("response")
    return events if isinstance(events, list) else []
  ```

  </TabItem>
</Tabs>

## Step 3: Count activity per user in monitored rooms

The script filters audit events that belong to the monitored rooms and counts events per user.
If a user has fewer than `MIN_ACTIVITY` events, they are treated as inactive for the period.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function buildRoomUserActivityMap(events: any[], roomIds: number[]) {
    const result: Record<number, Record<string, number>> = {};

    for (const evt of events) {
      if (!isRoomActivityEvent(evt, roomIds)) continue;

      const roomId = getRoomIdFromEvent(evt);
      if (roomId == null) continue;

      const userId = String(evt.userId || evt.account || '');
      if (!userId) continue;

      if (!result[roomId]) result[roomId] = {};
      if (!result[roomId][userId]) result[roomId][userId] = 0;

      result[roomId][userId] += 1;
    }

    return result;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def build_room_user_activity_map(events, room_ids):
    result = {}

    for evt in events:
      if not is_room_activity_event(evt, room_ids):
        continue

      room_id = get_room_id_from_event(evt)
      if room_id is None:
        continue

      user_id = str(evt.get("userId") or evt.get("account") or "")
      if not user_id:
        continue

      if room_id not in result:
        result[room_id] = {}

      current = result[room_id].get(user_id, 0)
      result[room_id][user_id] = current + 1

    return result
  ```

  </TabItem>
</Tabs>

## Step 4: Send reminders and a manager report

The script sends:
- a reminder to each inactive user (placeholder)
- one summary report to the manager (placeholder)

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function sendReminderToUser(member: any, roomId: number, periodDays: number) {
    const to = member.email || member.displayName || 'user';

    console.log('--- USER REMINDER ---');
    console.log(`To: ${to}`);
    console.log('Subject: Infrequent activity in DocSpace room');
    console.log(
      `Body:\nHello ${member.displayName || 'there'},\n` +
      `We noticed that you had no activity in room ID ${roomId} during the last ${periodDays} days.\n` +
      'If this room is still relevant to you, please review its contents.'
    );
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def send_reminder_to_user(member, room_id, period_days):
    to = member.get("email") or member.get("displayName") or "user"

    print("--- USER REMINDER ---")
    print(f"To: {to}")
    print("Subject: Infrequent activity in DocSpace room")
    print(
      "Body:\n"
      f"Hello {member.get('displayName') or 'there'},\n"
      f"We noticed that you had no activity in room ID {room_id} during the last {period_days} days.\n"
      "If this room is still relevant to you, please review its contents."
    )
  ```

  </TabItem>
</Tabs>