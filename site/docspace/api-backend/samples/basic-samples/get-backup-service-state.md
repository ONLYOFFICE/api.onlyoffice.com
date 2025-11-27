import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Get backup service state

This example demonstrates how to check the current state of the backup service in ONLYOFFICE DocSpace.
The backup service is responsible for creating, storing, and managing scheduled or manual backups of your portal data — including user information, files, and configuration — either locally or in a connected cloud storage.

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

  // Step 1: Get backup service state
  async function getBackupsServiceState() {
    const url = `${BASE_URL}/api/2.0/backup/service/state`;
    const res = await fetch(url, {
      method: 'GET',
      headers: HEADERS,
    });

    if (res.status === 200) {
      const json = await res.json();
      const stateInfo = json.response || json;
      console.log('Backup service state:');
      console.log(JSON.stringify(stateInfo, null, 2));
      return stateInfo;
    }

    if (res.status === 403) {
      console.log('You do not have enough permissions to perform this operation (403).');
      return null;
    }

    const text = await res.text();
    console.log(`Request failed: ${res.status}`);
    console.log(text);
    return null;
  }

  // Example usage
  (async () => {
    await getBackupsServiceState();
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import json
  import requests

  # Set API base URL
  BASE_URL = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # Headers with API key for authentication
  HEADERS = {
    "Authorization": f"Bearer {API_KEY}",
    "Accept": "application/json"
  }

  # Step 1: Get backup service state
  def get_backups_service_state():
    url = f"{BASE_URL}/api/2.0/backup/service/state"
    response = requests.get(url, headers=HEADERS)

    if response.status_code == 200:
      data = response.json()
      state_info = data.get("response", data)
      print("Backup service state:")
      print(json.dumps(state_info, indent=2))
      return state_info
    elif response.status_code == 403:
      print("You don’t have enough permissions to perform this operation (403).")
      return None
    else:
      print(f"Request failed: {response.status_code}")
      print(response.text)
      return None

  def main():
    get_backups_service_state()

  if __name__ == "__main__":
    main()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/backup/service/state](/docspace/api-backend/usage-api/get-backups-service-state) to check the current operational status of the backup service, including whether it is active, when the last backup was created, and when the next backup is scheduled.