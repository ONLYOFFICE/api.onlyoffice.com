# Delete backup schedule

This example demonstrates how to delete the current portal’s backup schedule in ONLYOFFICE DocSpace using the API.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>

``` py
import requests

API_HOST = 'https://yourportal.onlyoffice.com'
API_KEY = 'your_api_key'

# Headers with authentication
HEADERS = {
    'Authorization': AUTH_TOKEN
}

def delete_backup_schedule(dump: bool | None = None):
    # Optional query parameter: Dump=True for dump-based schedules
    params = {}
    if dump is not None:
        params['Dump'] = dump

    response = requests.delete(
        f'{BASE_URL}/api/2.0/backup/deletebackupschedule',
        headers=HEADERS,
        params=params
    )

    if response.status_code == 200:
        result = response.json().get('response')
        print(f"Backup schedule deleted: {result}")
        return result
    else:
        raise Exception(f"Failed to delete backup schedule: {response.status_code} - {response.text}")

if __name__ == '__main__':
    # Delete backup schedule without specifying Dump
    delete_backup_schedule()
```

</details>

## How it works

A DELETE request is sent to [/api/2.0/backup/deletebackupschedule](/docspace/api-backend/usage-api/delete-backup-schedule) with an optional query parameter:

- `Dump` — boolean flag indicating whether the operation targets a dump-based schedule.

If successful (200), the API returns:

- `response` — boolean (true if deletion succeeded).
- `count`, `links`, `status`, `statusCode` — additional metadata fields.

On success, the portal’s configured backup schedule is removed, and no further automatic backups will be executed until a new schedule is created.