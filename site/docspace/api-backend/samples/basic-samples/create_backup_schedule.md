import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create a backup schedule

This example demonstrates how to create a daily backup schedule in ONLYOFFICE DocSpace using the API (e.g., run every day at 03:00, keep the last 7 backups, optionally include a full portal dump).

Complete source code on GitHub: [Node.js](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/nodejs/samples/create_backup_schedule.js)/[Python](https://github.com/ONLYOFFICE/docspace-samples/blob/master/api-backend/python/samples/create_backup_schedule.py)

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with authentication
  const HEADERS = {
    Authorization: API_KEY,
    'Content-Type': 'application/json',
  };

  function createBackupSchedule() {
    // Backup schedule payload: daily at 3 AM, keep last 7 backups
    const payload = {
      storageType: 'CustomCloud', // Or "Local", "DataStore"
      cronParams: {
        period: 'EveryDay',
        hour: 3,
        day: 0,
      },
      backupsStored: 7,
      dump: true, // Include full portal dump
    };

    return fetch(`${API_HOST}/api/2.0/backup/createbackupschedule`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('Backup schedule created successfully.');
        } else {
          return res.text().then((t) => {
            const text = await res.text();
            console.log(`Backup schedule creation failed. Status code: ${res.status}, Message: ${text}`);
          });
        }
      })
      .catch((err) => {
        console.log(`Error: ${err.message}`);
      });
  }

  // Run
  createBackupSchedule();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  # Headers with authentication
  HEADERS = {
    'Authorization': API_KEY,
    'Content-Type': 'application/json'
  }

  def create_backup_schedule():
    # Backup schedule payload: daily at 3 AM, keep last 7 backups
    payload = {
      "storageType": "CustomCloud",  # Or "Local", "DataStore"
      "cronParams": {
        "period": "EveryDay",
        "hour": 3,
        "day": 0
      },
      "backupsStored": 7,
      "dump": True  # Include full portal dump
    }

    # Send request to create backup schedule
    response = requests.post(
      f'{API_HOST}/api/2.0/backup/createbackupschedule',
      headers=HEADERS,
      json=payload
    )

    # Check response status
    if response.status_code == 200:
      print("Backup schedule created successfully.")
    else:
      print(f"Backup schedule creation failed. Status code: {response.status_code}, Message: {response.text}")

  if __name__ == "__main__":
    create_backup_schedule()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A POST request is sent to [/api/2.0/backup/createbackupschedule](/docspace/api-backend/usage-api/create-backup-schedule) with a JSON payload:

- `storageType` — backup storage target, e.g. "CustomCloud", "Local", "DataStore".
- `cronParams` — schedule configuration:
  - `period` — e.g. "EveryDay" (or "EveryWeek", etc.)
  - `hour` — hour in 24-hour format (0–23)
  - `day` — day index (used for certain periods; ignored for "EveryDay")
- `backupsStored` — how many recent backups to retain.
- `dump` — true to include a full portal dump in each backup.

On success (200), the schedule is created and the API may return the created schedule object in response.

