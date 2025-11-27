import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Start and monitor a customer operations report for accounting

This example demonstrates how to start generating a customer operations report in ONLYOFFICE DocSpace, periodically check its status, and terminate the report generation if the request is no longer needed. The report is generated as an "xlsx" file and saved in Documents, so it can be used for finance or accounting reconciliation.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  // Config
  const BASE_URL = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Helper: build ISO range from simple YYYY-MM-DD strings
  function buildDateRange(startDateStr, endDateStr) {
    const start = new Date(`${startDateStr}T00:00:00Z`);
    const end = new Date(`${endDateStr}T23:59:59Z`);

    return {
      startDate: start.toISOString(), // e.g. 2024-01-01T00:00:00.000Z
      endDate: end.toISOString(),     // e.g. 2024-01-31T23:59:59.000Z
    };
  }

  // Step 1: Start generating the customer operations report
  async function startCustomerOperationsReport(
    startDate,
    endDate,
    participantName = null,
    credit = true,
    debit = true
  ) {
    const url = `${BASE_URL}/api/2.0/portal/payment/customer/operationsreport`;

    const data = {
      startDate,
      endDate,
      participantName,
      credit,
      debit,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      const json = await res.json();
      const result = json.response || json;
      console.log('Customer operations report generation started.');
      console.log('Initial response:', result);
      return result;
    }

    const text = await res.text();
    console.log(
      'Failed to start customer operations report:',
      res.status,
      text
    );
    return null;
  }

  // Step 2: Get the status of the customer operations report generation
  async function getCustomerOperationsReportStatus() {
    const url = `${BASE_URL}/api/2.0/portal/payment/customer/operationsreport`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const status = json.response || json;
      console.log('Current report status:');
      console.log(status);
      return status;
    }

    const text = await res.text();
    console.log(
      'Failed to get customer operations report status:',
      res.status,
      text
    );
    return null;
  }

  // Step 3: Terminate the customer operations report generation
  async function terminateCustomerOperationsReport() {
    const url = `${BASE_URL}/api/2.0/portal/payment/customer/operationsreport`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const result = json.response || json;
      console.log('Customer operations report generation terminated.');
      console.log('Server response:', result);
      return true;
    }

    const text = await res.text();
    console.log(
      'Failed to terminate customer operations report:',
      res.status,
      text
    );
    return false;
  }

  // Example usage: start and poll
  (async () => {
    // Вместо длинных ISO-строк — просто даты
    const { startDate, endDate } = buildDateRange('2024-01-01', '2024-01-31');
    const participantName = null; // или 'Customer Name'
    const credit = true;
    const debit = true;

    const startResult = await startCustomerOperationsReport(
      startDate,
      endDate,
      participantName,
      credit,
      debit
    );

    if (startResult) {
      const intervalSeconds = 10;
      const maxChecks = 5;

      for (let attempt = 1; attempt <= maxChecks; attempt++) {
        console.log(`\nStatus check ${attempt}/${maxChecks}`);
        const status = await getCustomerOperationsReportStatus();
        if (!status) break;

        const reportStatus = status.status;
        const downloadUrl = status.downloadUrl;

        if (reportStatus === 'Completed') {
          console.log('\nCustomer operations report is ready.');
          if (downloadUrl) {
            console.log('Download URL:', downloadUrl);
          } else {
            console.log(
              'The report is completed, but no download URL was found. ' +
                'Check the response structure or use the Files API to ' +
                'download the report from Documents.'
            );
          }
          break;
        }

        if (reportStatus === 'Failed') {
          console.log('\nCustomer operations report generation failed.');
          break;
        }

        if (attempt < maxChecks) {
          await new Promise((resolve) =>
            setTimeout(resolve, intervalSeconds * 1000)
          );
        }
      }

      // Optional: terminate a long-running report manually
      await terminateCustomerOperationsReport();
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import time
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY  = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json",
  }

  # Step 1: Start generating the customer operations report
  def start_customer_operations_report(start_date, end_date,
                                      participant_name=None,
                                      credit=True, debit=True):
    url = f"{BASE_URL}/api/2.0/portal/payment/customer/operationsreport"

    data = {
      "startDate": start_date,
      "endDate": end_date,
      "participantName": participant_name,
      "credit": credit,
      "debit": debit,
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      result = payload.get("response", payload)
      print("Customer operations report generation started.")
      print("Initial response:", result)
      return result

    print("Failed to start customer operations report:",
          response.status_code, response.text)
    return None

  # Step 2: Get the status of the customer operations report generation
  def get_customer_operations_report_status():
    url = f"{BASE_URL}/api/2.0/portal/payment/customer/operationsreport"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      status = payload.get("response", payload)
      print("Current report status:")
      print(status)
      return status

    print("Failed to get customer operations report status:",
          response.status_code, response.text)
    return None

  # Step 3: Terminate the customer operations report generation
  def terminate_customer_operations_report():
    url = f"{BASE_URL}/api/2.0/portal/payment/customer/operationsreport"
    response = requests.delete(url, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      result = payload.get("response", payload)
      print("Customer operations report generation terminated.")
      print("Server response:", result)
      return True

    print("Failed to terminate customer operations report:",
      response.status_code, response.text)
    return False

  if __name__ == "__main__":
    # Example filters – replace with real values
    start_date = "2024-01-01"
    end_date   = "2024-01-31"
    participant_name = None   # or "Customer Name"
    credit = True             # include credit operations
    debit = True              # include debit operations

    # Step 1: Start the report generation
    start_result = start_customer_operations_report(
      start_date=start_date,
      end_date=end_date,
      participant_name=participant_name,
      credit=credit,
      debit=debit,
    )

    if start_result:
      # Simple polling loop for Step 2
      interval_seconds = 10
      max_checks = 5

      for attempt in range(1, max_checks + 1):
        print(f"\nStatus check {attempt}/{max_checks}")
        status = get_customer_operations_report_status()
        if status is None:
          break

        # Adjust field names to your actual response structure
        report_status = status.get("status")
        download_url = status.get("downloadUrl")

        if report_status == "Completed":
          print("\nCustomer operations report is ready.")
        if download_url:
          print("Download URL:", download_url)
        else:
          print(
                "The report is completed, but no download URL was found. "
                "Check the response structure or use the Files API to "
                "download the report from Documents."
              )
          break

        if report_status == "Failed":
          print("\nCustomer operations report generation failed.")
          break

        if attempt < max_checks:
          time.sleep(interval_seconds)

      # Optional: terminate a long-running report manually
      terminate_customer_operations_report()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Start generating the customer operations report

A POST request is sent to [/api/2.0/portal/payment/customer/operationsreport](/docspace/api-backend/usage-api/create-customer-operations-report)

This method starts generating a customer operations report as an "xlsx" file and saves it in Documents.

The request body includes:

- `startDate`: The report start date (ISO 8601, for example 2008-04-10T06:30:00.0000000+04:00).
- `endDate`: The report end date.
- `participantName`: Participant name filter (for example, a specific customer).
- `credit`: Whether to include credit operations.
- `debit`: Whether to include debit operations.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function startCustomerOperationsReport(
    startDate,
    endDate,
    participantName = null,
    credit = true,
    debit = true
  ) {
    const url = `${BASE_URL}/api/2.0/portal/payment/customer/operationsreport`;

    const data = {
      startDate,
      endDate,
      participantName,
      credit,
      debit,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      const json = await res.json();
      const result = json.response || json;
      console.log('Customer operations report generation started.');
      console.log('Initial response:', result);
      return result;
    }

    const text = await res.text();
    console.log(
      'Failed to start customer operations report:',
      res.status,
      text
    );
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def start_customer_operations_report(start_date, end_date,
                                      participant_name=None,
                                      credit=True, debit=True):
    url = f"{BASE_URL}/api/2.0/portal/payment/customer/operationsreport"

    data = {
      "startDate": start_date,
      "endDate": end_date,
      "participantName": participant_name,
      "credit": credit,
      "debit": debit,
    }

    response = requests.post(url, json=data, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      result = payload.get("response", payload)
      print("Customer operations report generation started.")
      print("Initial response:", result)
      return result

    print("Failed to start customer operations report:",
          response.status_code, response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 2: Get report status or result

A GET request is sent to [/api/2.0/portal/payment/customer/operationsreport](/docspace/api-backend/usage-api/get-customer-operations-report)

This method returns the current status of generating a customer operations report.
The response may contain fields such as:

`status`: Current status (for example, "InProgress", "Completed", "Failed").
`downloadUrl`: URL to download the generated report file (when completed).

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function getCustomerOperationsReportStatus() {
    const url = `${BASE_URL}/api/2.0/portal/payment/customer/operationsreport`;

    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const status = json.response || json;
      console.log('Current report status:');
      console.log(status);
      return status;
    }

    const text = await res.text();
    console.log(
      'Failed to get customer operations report status:',
      res.status,
      text
    );
    return null;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def get_customer_operations_report_status():
    url = f"{BASE_URL}/api/2.0/portal/payment/customer/operationsreport"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      status = payload.get("response", payload)
      print("Current report status:")
      print(status)
      return status

    print("Failed to get customer operations report status:",
          response.status_code, response.text)
    return None
  ```

  </TabItem>
</Tabs>

## Step 3: Terminate report generation (optional)

A DELETE request is sent to [/api/2.0/portal/payment/customer/operationsreport](/docspace/api-backend/usage-api/terminate-customer-operations-report)

This method terminates generating a customer operations report.
Use it when the user cancels the action in the UI or the report is no longer required.

<Tabs>
  <TabItem value="nodejs" label="Node.js">
  
  ``` ts
  async function terminateCustomerOperationsReport() {
    const url = `${BASE_URL}/api/2.0/portal/payment/customer/operationsreport`;

    const res = await fetch(url, {
      method: 'DELETE',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const result = json.response || json;
      console.log('Customer operations report generation terminated.');
      console.log('Server response:', result);
      return true;
    }

    const text = await res.text();
    console.log(
      'Failed to terminate customer operations report:',
      res.status,
      text
    );
    return false;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def terminate_customer_operations_report():
    url = f"{BASE_URL}/api/2.0/portal/payment/customer/operationsreport"
    response = requests.delete(url, headers=HEADERS)

    if response.status_code == 200:
      payload = response.json()
      result = payload.get("response", payload)
      print("Customer operations report generation terminated.")
      print("Server response:", result)
      return True

    print("Failed to terminate customer operations report:",
      response.status_code, response.text)
    return False
  ```

  </TabItem>
</Tabs>