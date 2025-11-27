import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a folder history report

This example demonstrates how to generate an activity report for a specific folder in ONLYOFFICE DocSpace using the API.
The report contains details about all operations performed inside the selected folder.

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
    Authorization: `Bearer ${API_KEY}`,
    Accept: 'application/json',
  };

  // Step 1: Create a folder history report
  async function createFolderHistoryReport(folderId) {
    const url = `${BASE_URL}/api/2.0/files/folder/${folderId}/log/report`;
    const res = await fetch(url, {
      method: 'POST',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const data = await res.json();
      let reportUrl = data.response || data;

      if (reportUrl && typeof reportUrl === 'object') {
        reportUrl = reportUrl.url || reportUrl.link;
      }

      if (typeof reportUrl === 'string' && reportUrl) {
        console.log('Report URL:', reportUrl);
        return reportUrl;
      }

      console.log('Unexpected response format:', JSON.stringify(data, null, 2));
      return null;
    }

    if (res.status === 403) {
      console.log("You do not have enough permission to perform this operation (403).");
      return null;
    }

    if (res.status === 404) {
      console.log('Folder not found (404).');
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    const folderId = 20202; // Replace with your actual folder ID

    const reportUrl = await createFolderHistoryReport(folderId);

    // (Optional) Open the report in the browser if available
    if (reportUrl) {
      console.log('Open this URL in browser:', reportUrl);
      // Optionally, you can auto-open it using a library like "open":
      // import open from 'open';
      // await open(reportUrl);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  import webbrowser

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json"
  }

  # Step 1: Create a folder history report
  def create_folder_history_report(folder_id: int):
    url = f"{BASE_URL}/api/2.0/files/folder/{folder_id}/log/report"
    response = requests.post(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      report_url = data.get("response", data)

      # Handle different response formats
      if isinstance(report_url, dict):
        report_url = report_url.get("url") or report_url.get("link")
      if isinstance(report_url, str) and report_url:
        print("Report URL:", report_url)
        return report_url

      print("Unexpected response format:", data)
      return None

      elif response.status_code == 403:
        print("You don't have enough permission to perform this operation (403).")
        return None
      elif response.status_code == 404:
        print("Folder not found (404).")
        return None
      else:
        print(f"Request failed: {response.status_code}")
        print(response.text)
        return None


  def main():
    folder_id = 20202  # Replace with your actual folder ID

    # Step 1: Create folder history report
    report_url = create_folder_history_report(folder_id)

    # (Optional) Open the report in the browser if available
    if report_url:
      try:
        webbrowser.open(report_url)
      except Exception:
        pass


  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A POST request is sent to [/api/2.0/files/folder/:folderId/log/report](/docspace/api-backend/usage-api/get-folder-history) to generate a folder activity report.