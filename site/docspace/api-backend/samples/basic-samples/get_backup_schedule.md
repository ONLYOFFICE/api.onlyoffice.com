# Get backup schedule

This example demonstrates how to retrieve the current portal’s backup schedule in ONLYOFFICE DocSpace using the API.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Config
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'your_api_key';

  // Headers with authentication
  const HEADERS = {
    Authorization: API_KEY,
  };

  function getBackupSchedule(dump) {
    // Optional query parameter: Dump=True to request dump-based schedule info
    const params = new URLSearchParams();
    if (dump !== undefined && dump !== null) {
      params.set('Dump', dump ? 'True' : 'False');
    }

    const qs = params.toString();
    const url = `${API_HOST}/api/2.0/backup/getbackupschedule${qs ? `?${qs}` : ''}`;

    return fetch(url, {
      method: 'GET',
      headers: HEADERS,
    })
      .then((res) => {
        if (res.status === 200) return res.json();
        return res.text().then((t) => {
          throw new Error(`Failed to get backup schedule: ${res.status} - ${t}`);
        });
      })
      .then((data) => {
        const schedule = data?.response || {};
        console.log('Storage type:', schedule.storageType);
        console.log('Cron params:', schedule.cronParams); // period/hour/day
        console.log('Backups stored:', schedule.backupsStored);
        console.log('Last backup time:', schedule.lastBackupTime);
        console.log('Dump enabled:', schedule.dump);
        return schedule;
      })
      .catch((err) => {
        console.error(err.message);
        return null;
      });
  }

  // Run (retrieve schedule without forcing the Dump query param)
  getBackupSchedule();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests

  API_HOST = 'https://yourportal.onlyoffice.com'
  API_KEY = 'your_api_key'

  # Headers with authentication
  HEADERS = {
    'Authorization': API_KEY
  }

  def get_backup_schedule(dump: bool | None = None):
    # Optional query parameter: Dump=True to request dump-based schedule info
    params = {}
    if dump is not None:
      params['Dump'] = dump

    response = requests.get(
      f'{API_HOST}/api/2.0/backup/getbackupschedule',
      headers=HEADERS,
      params=params
    )

    if response.status_code == 200:
      schedule = response.json().get('response', {})
      print("Storage type:", schedule.get('storageType'))
      print("Cron params:", schedule.get('cronParams'))       # period/hour/day
      print("Backups stored:", schedule.get('backupsStored'))
      print("Last backup time:", schedule.get('lastBackupTime'))
      print("Dump enabled:", schedule.get('dump'))
      return schedule
    else:
      raise Exception(f"Failed to get backup schedule: {response.status_code} - {response.text}")

  if __name__ == '__main__':
    # Retrieve schedule (without forcing the Dump query param)
    get_backup_schedule()
  ```

  </TabItem>
</Tabs>
</details>

## How it works

A GET request is sent to [/api/2.0/backup/getbackupschedule](/docspace/api-backend/usage-api/get-backup-schedule) with an optional query parameter:

- `Dump` — boolean flag indicating whether to return info for a dump-based configuration.

If successful (200), the API returns the current backup schedule, including:

- `storageType` — target storage (e.g., Local, CustomCloud, DataStore, etc.).
- `storageParams` — storage-specific settings (if applicable).
- `cronParams` — schedule configuration (period, hour, day).
- `backupsStored` — how many backups are retained.
- `lastBackupTime` — timestamp of the last completed backup.
- `dump` — whether dump mode is enabled.
- `count`, `links`, `status`, `statusCode` — additional metadata fields.