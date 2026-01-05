import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Generate and upload a monthly compliance report

This example demonstrates how to generate a monthly compliance report in ONLYOFFICE DocSpace using the API. It retrieves audit events for a selected period, optionally filters events to focus on important documents, builds a human-readable TXT report, and uploads the report to a dedicated folder (for example, a “Compliance” room folder).

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

  // Folder where compliance reports will be stored
  const COMPLIANCE_ROOM_FOLDER_ID = 'compliance_room_folder_id_here';

  // Headers with API key for authentication (JSON requests)
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Retrieve audit events for a given period
  async function getAuditEventsByFilter(startDate?: string, endDate?: string) {
    const url = new URL(`${API_HOST}/api/2.0/security/audit/events/filter`);
    if (startDate) url.searchParams.set('from', startDate);
    if (endDate) url.searchParams.set('to', endDate);

    const res = await fetch(url.toString(), { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Audit events retrieval failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('Audit events retrieved successfully.');
    return json;
  }

  // Step 2: Filter events for important documents (simple example)
  function filterImportantEvents(auditEvents: any[]) {
    // In a real-world scenario, you might filter by:
    // - roomId / folderId
    // - fileId list
    // - event type (create, update, delete, share)
    // This example simply returns all events as "important".
    return auditEvents;
  }

  // Step 3: Build a human-readable text report
  function buildComplianceReportText(fromDate: string, toDate: string, events: any[]) {
    const lines: string[] = [];
    lines.push('Compliance report');
    lines.push(`Period: ${fromDate} — ${toDate}`);
    lines.push(`Total events: ${events.length}`);
    lines.push('');
    lines.push('Events:');
    lines.push('-'.repeat(80));

    for (const e of events) {
      const dateStr = e.date || e.time || '';
      const user = e.user || e.userId || e.createdBy || e.createBy || '';
      const action = e.action || e.eventType || '';
      const target = e.target || e.targetId || e.fileId || e.folderId || '';
      const ip = e.ip || '';
      const country = e.country || '';
      const city = e.city || '';
      const browser = e.browser || '';
      const platform = e.platform || '';
      const page = e.page || '';
      const context = e.context || '';

      lines.push(`ID: ${e.id}`);
      lines.push(`Date: ${dateStr}`);
      lines.push(`User: ${user}`);
      lines.push(`Action: ${action}`);
      lines.push(`Target: ${target}`);
      if (context) lines.push(`Context: ${context}`);
      if (page) lines.push(`Page: ${page}`);
      if (ip || country || city) lines.push(`Location/IP: ${ip} | ${country}, ${city}`);
      if (browser || platform) lines.push(`Client: ${browser} on ${platform}`);
      lines.push('-'.repeat(80));
    }

    return lines.join('\n');
  }

  // Step 4: Upload the report as a TXT file into the Compliance room
  async function uploadReportToComplianceFolder(folderId: string, fileName: string, content: string) {
    // Correct endpoint: /api/2.0/files/{folderId}/upload
    const url = `${API_HOST}/api/2.0/files/${folderId}/upload`;

    const form = new FormData();
    form.append('file', new Blob([content], { type: 'text/plain' }), fileName);

    // For file upload, set Authorization only; the browser/runtime will set multipart headers
    const headers = {
      Authorization: `Bearer ${API_KEY}`,
    };

    const res = await fetch(url, { method: 'POST', headers, body: form });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Report upload failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('Compliance report uploaded successfully.');
    return json;
  }

  // Main workflow: generate a monthly compliance report
  (async () => {
    try {
      // Example: January 2025
      const year = 2025;
      const month = 1;

      // Simple date range: start = first day, end = day 31 (demo)
      const fromDate = `${year}-${String(month).padStart(2, '0')}-01`;
      const toDate = `${year}-${String(month).padStart(2, '0')}-31`;

      console.log('\nStep 1: Retrieving audit events for the month...');
      const auditData = await getAuditEventsByFilter(fromDate, toDate);
      if (!auditData) return;

      // In DocSpace audit API the events are usually under "response"
      let events = (auditData.response ?? auditData) as any[];
      if (!Array.isArray(events)) events = [];

      console.log(`Total audit events retrieved: ${events.length}`);

      console.log('\nStep 2: Filtering important events...');
      const importantEvents = filterImportantEvents(events);
      console.log(`Important events count: ${importantEvents.length}`);

      console.log('\nStep 3: Building compliance report content...');
      const reportContent = buildComplianceReportText(fromDate, toDate, importantEvents);

      const reportFileName = `compliance-report-${year}-${String(month).padStart(2, '0')}.txt`;

      console.log('\nStep 4: Uploading the report to the Compliance room...');
      await uploadReportToComplianceFolder(COMPLIANCE_ROOM_FOLDER_ID, reportFileName, reportContent);

      console.log('\nMonthly compliance report generation completed.');
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

  # Folder where compliance reports will be stored
  COMPLIANCE_ROOM_FOLDER_ID = "compliance_room_folder_id_here"

  # Headers with API key for authentication (JSON requests)
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
  }

  # Step 1: Retrieve audit events for a given period
  def get_audit_events_by_filter(start_date=None, end_date=None):
    url = f"{API_HOST}/api/2.0/security/audit/events/filter"
    params = {}

    if start_date:
      params["from"] = start_date
    if end_date:
      params["to"] = end_date

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      data = response.json()
      print("Audit events retrieved successfully.")
      return data
    else:
      print(
        f"Audit events retrieval failed. Status code: {response.status_code}, "
        f"Message: {response.text}"
      )
      return None

  # Step 2: Filter events for important documents (simple example)
  def filter_important_events(audit_events):
    # In a real-world scenario, you might filter by:
    # - roomId / folderId
    # - fileId list
    # - event type (create, update, delete, share)
    # This example simply returns all events as "important".
    return audit_events

  # Step 3: Build a human-readable text report
  def build_compliance_report_text(from_date, to_date, events):
    lines = []
    lines.append("Compliance report")
    lines.append(f"Period: {from_date} — {to_date}")
    lines.append(f"Total events: {len(events)}")
    lines.append("")
    lines.append("Events:")
    lines.append("-" * 80)

    for e in events:
      date_str = e.get("date") or e.get("time") or ""
      user = e.get("user") or e.get("userId") or e.get("createdBy") or e.get("createBy") or ""
      action = e.get("action") or e.get("eventType") or ""
      target = e.get("target") or e.get("targetId") or e.get("fileId") or e.get("folderId") or ""
      ip = e.get("ip", "")
      country = e.get("country", "")
      city = e.get("city", "")
      browser = e.get("browser", "")
      platform = e.get("platform", "")
      page = e.get("page", "")
      context = e.get("context", "")

      lines.append(f"ID: {e.get('id')}")
      lines.append(f"Date: {date_str}")
      lines.append(f"User: {user}")
      lines.append(f"Action: {action}")
      lines.append(f"Target: {target}")
      if context:
        lines.append(f"Context: {context}")
      if page:
        lines.append(f"Page: {page}")
      if ip or country or city:
        lines.append(f"Location/IP: {ip} | {country}, {city}")
      if browser or platform:
        lines.append(f"Client: {browser} on {platform}")
      lines.append("-" * 80)

    return "\n".join(lines)

  # Step 4: Upload the report as a TXT file into the Compliance room
  def upload_report_to_compliance_folder(folder_id, file_name, content):
    # Correct endpoint: /api/2.0/files/{folderId}/upload
    url = f"{API_HOST}/api/2.0/files/{folder_id}/upload"

    # Using the "files" parameter of requests to send multipart/form-data
    files = {
      "file": (file_name, content.encode("utf-8"), "text/plain")
    }

    # For file upload, use Authorization header only; requests will handle multipart headers
    headers = {
      "Authorization": f"Bearer {API_KEY}",
    }

    response = requests.post(url, headers=headers, files=files)

    if response.status_code == 200:
      data = response.json()
      print("Compliance report uploaded successfully.")
      return data
    else:
      print(
        f"Report upload failed. Status code: {response.status_code}, "
        f"Message: {response.text}"
      )
      return None

  # Main workflow: generate a monthly compliance report
  def generate_monthly_compliance_report(year, month):
    # Simple date range: start = first day, end = day 31 (demo)
    from_date = f"{year}-{str(month).zfill(2)}-01"
    to_date = f"{year}-{str(month).zfill(2)}-31"

    print("\nStep 1: Retrieving audit events for the month...")
    audit_data = get_audit_events_by_filter(start_date=from_date, end_date=to_date)
    if not audit_data:
      return

    # In DocSpace audit API the events are usually under "response"
    events = audit_data.get("response") or audit_data
    if not isinstance(events, list):
      events = []

    print(f"Total audit events retrieved: {len(events)}")

    print("\nStep 2: Filtering important events...")
    important_events = filter_important_events(events)
    print(f"Important events count: {len(important_events)}")

    print("\nStep 3: Building compliance report content...")
    report_content = build_compliance_report_text(from_date, to_date, important_events)

    report_file_name = f"compliance-report-{year}-{str(month).zfill(2)}.txt"

    print("\nStep 4: Uploading the report to the Compliance room...")
    upload_report_to_compliance_folder(
      COMPLIANCE_ROOM_FOLDER_ID,
      report_file_name,
      report_content,
    )

    print("\nMonthly compliance report generation completed.")

  if __name__ == "__main__":
    # Example: January 2025
    generate_monthly_compliance_report(2025, 1)
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Retrieve audit events for the month

A GET request is sent to [/api/2.0/security/audit/events/filter](/docspace/api-backend/usage-api/get-audit-events-by-filter) to retrieve audit events for a selected period.

The request uses query parameters:
- `from`: Period start date (YYYY-MM-DD)
- `to`: Period end date (YYYY-MM-DD)

The API returns a list of audit events (typically under response).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function getAuditEventsByFilter(startDate?: string, endDate?: string) {
    const url = new URL(`${API_HOST}/api/2.0/security/audit/events/filter`);
    if (startDate) url.searchParams.set('from', startDate);
    if (endDate) url.searchParams.set('to', endDate);

    const res = await fetch(url.toString(), { method: 'GET', headers: HEADERS });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Audit events retrieval failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('Audit events retrieved successfully.');
    return json;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_audit_events_by_filter(start_date=None, end_date=None):
    url = f"{API_HOST}/api/2.0/security/audit/events/filter"
    params = {}

    if start_date:
      params["from"] = start_date
    if end_date:
      params["to"] = end_date

    response = requests.get(url, headers=HEADERS, params=params)

    if response.status_code == 200:
      data = response.json()
      print("Audit events retrieved successfully.")
      return data
    else:
      print(
        f"Audit events retrieval failed. Status code: {response.status_code}, "
        f"Message: {response.text}"
      )
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Filter important events

This step filters audit events to keep only events relevant for compliance reporting.

In a real scenario, you might filter by:
- Room or folder ID
- Specific file IDs
- Event type (create, update, delete, share)

This example keeps all events for simplicity.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function filterImportantEvents(auditEvents: any[]) {
    // In a real-world scenario, you might filter by:
    // - roomId / folderId
    // - fileId list
    // - event type (create, update, delete, share)
    // This example simply returns all events as "important".
    return auditEvents;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def filter_important_events(audit_events):
    # In a real-world scenario, you might filter by:
    # - roomId / folderId
    # - fileId list
    # - event type (create, update, delete, share)
    # This example simply returns all events as "important".
    return audit_events
  ```

  </TabItem>
</Tabs>

## Step 3: Build a TXT compliance report

This step converts raw audit events into a human-readable text report:

- Report header with period and event count
- List of events with key fields (date, user, action, target, IP/location, client)

This format is easy to archive and review.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  function buildComplianceReportText(fromDate: string, toDate: string, events: any[]) {
    const lines: string[] = [];
    lines.push('Compliance report');
    lines.push(`Period: ${fromDate} — ${toDate}`);
    lines.push(`Total events: ${events.length}`);
    lines.push('');
    lines.push('Events:');
    lines.push('-'.repeat(80));

    for (const e of events) {
      const dateStr = e.date || e.time || '';
      const user = e.user || e.userId || e.createdBy || e.createBy || '';
      const action = e.action || e.eventType || '';
      const target = e.target || e.targetId || e.fileId || e.folderId || '';
      const ip = e.ip || '';
      const country = e.country || '';
      const city = e.city || '';
      const browser = e.browser || '';
      const platform = e.platform || '';
      const page = e.page || '';
      const context = e.context || '';

      lines.push(`ID: ${e.id}`);
      lines.push(`Date: ${dateStr}`);
      lines.push(`User: ${user}`);
      lines.push(`Action: ${action}`);
      lines.push(`Target: ${target}`);
      if (context) lines.push(`Context: ${context}`);
      if (page) lines.push(`Page: ${page}`);
      if (ip || country || city) lines.push(`Location/IP: ${ip} | ${country}, ${city}`);
      if (browser || platform) lines.push(`Client: ${browser} on ${platform}`);
      lines.push('-'.repeat(80));
    }

    return lines.join('\n');
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def build_compliance_report_text(from_date, to_date, events):
    lines = []
    lines.append("Compliance report")
    lines.append(f"Period: {from_date} — {to_date}")
    lines.append(f"Total events: {len(events)}")
    lines.append("")
    lines.append("Events:")
    lines.append("-" * 80)

    for e in events:
      date_str = e.get("date") or e.get("time") or ""
      user = e.get("user") or e.get("userId") or e.get("createdBy") or e.get("createBy") or ""
      action = e.get("action") or e.get("eventType") or ""
      target = e.get("target") or e.get("targetId") or e.get("fileId") or e.get("folderId") or ""
      ip = e.get("ip", "")
      country = e.get("country", "")
      city = e.get("city", "")
      browser = e.get("browser", "")
      platform = e.get("platform", "")
      page = e.get("page", "")
      context = e.get("context", "")

      lines.append(f"ID: {e.get('id')}")
      lines.append(f"Date: {date_str}")
      lines.append(f"User: {user}")
      lines.append(f"Action: {action}")
      lines.append(f"Target: {target}")
      if context:
        lines.append(f"Context: {context}")
      if page:
        lines.append(f"Page: {page}")
      if ip or country or city:
        lines.append(f"Location/IP: {ip} | {country}, {city}")
      if browser or platform:
        lines.append(f"Client: {browser} on {platform}")
      lines.append("-" * 80)

    return "\n".join(lines)
  ```

  </TabItem>
</Tabs>

## Step 4: Upload the report to the Compliance folder

A POST request is sent to [/api/2.0/files/:folderId/upload](/docspace/api-backend/usage-api/upload-file) to upload the report as a TXT file into a selected folder.
The request is sent as `multipart/form-data` with a single uploaded file. The response confirms the upload and returns file information.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function uploadReportToComplianceFolder(folderId: string, fileName: string, content: string) {
    // Correct endpoint: /api/2.0/files/{folderId}/upload
    const url = `${API_HOST}/api/2.0/files/${folderId}/upload`;

    const form = new FormData();
    form.append('file', new Blob([content], { type: 'text/plain' }), fileName);

    // For file upload, set Authorization only; the browser/runtime will set multipart headers
    const headers = {
      Authorization: `Bearer ${API_KEY}`,
    };

    const res = await fetch(url, { method: 'POST', headers, body: form });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Report upload failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('Compliance report uploaded successfully.');
    return json;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def upload_report_to_compliance_folder(folder_id, file_name, content):
    # Correct endpoint: /api/2.0/files/{folderId}/upload
    url = f"{API_HOST}/api/2.0/files/{folder_id}/upload"

    # Using the "files" parameter of requests to send multipart/form-data
    files = {
      "file": (file_name, content.encode("utf-8"), "text/plain")
    }

    # For file upload, use Authorization header only; requests will handle multipart headers
    headers = {
      "Authorization": f"Bearer {API_KEY}",
    }

    response = requests.post(url, headers=headers, files=files)

    if response.status_code == 200:
      data = response.json()
      print("Compliance report uploaded successfully.")
      return data
    else:
      print(
        f"Report upload failed. Status code: {response.status_code}, "
        f"Message: {response.text}"
      )
      return None
  ```

  </TabItem>
</Tabs>