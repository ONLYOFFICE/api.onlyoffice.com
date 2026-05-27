---
sidebar_position: 27
---

# Expiration

These parameters define the expiration settings.

## services.CoAuthoring.expire.filesCron

**type:** `string` | **default:** `"00 00 */1 * * *"`

Defines the time for check starting (every hour by default).

## services.CoAuthoring.expire.documentsCron

**type:** `string` | **default:** `"0 */2 * * * *"`

Defines the time for starting check, during which old files are deleted from the cache (every two minutes by default).

## services.CoAuthoring.expire.files

**type:** `integer` | **default:** `86400`

Defines the time of life for the folders in `App_Data`.

## services.CoAuthoring.expire.filesremovedatonce

**type:** `integer` | **default:** `100`

Defines the number of simultaneously deleted document folders from the cache.

## services.CoAuthoring.expire.sessionidle

**type:** `string` | **default:** `"1h"`

Defines the inactive session lifetime. This parameter allows ending editing session for an idle user. It is also used to initialize document saving procedure by terminating the last editing session. So, it defines the time after which an inactive user will be disconnected from the editing session. Its value format is "1s", "1m", "1h", "1d" etc.

:::note
Please note that by inactivity, we mean the absence of any action in the editor, including cursor movement.
:::

## services.CoAuthoring.expire.sessionabsolute

**type:** `string` | **default:** `"30d"`

Defines the lifetime for any editing session.

## services.CoAuthoring.expire.changeindex

**type:** `integer` | **default:** `86400`

Defines the time for changing indexes.

## services.CoAuthoring.expire.forcesave

**type:** `integer` | **default:** `604800`

Defines the time of life for the forcesaving executed with success.

## services.CoAuthoring.expire.forcesaveLock

**type:** `integer` | **default:** `5000`

Defines the time of life for the forcesaved locks in the ioredis cluster mode.

## services.CoAuthoring.expire.lastsave

**type:** `integer` | **default:** `604800`

Defines the time of life for the last database save executed with success.

## services.CoAuthoring.expire.lockDoc

**type:** `integer` | **default:** `30`

Defines the time for locking documents.

## services.CoAuthoring.expire.locks

**type:** `integer` | **default:** `604800`

Defines the time of life for the locks.

## services.CoAuthoring.expire.message

**type:** `integer` | **default:** `86400`

Defines the time of life for the messages.

## services.CoAuthoring.expire.monthUniqueUsers

**type:** `string` | **default:** `"1y"`

Defines the time of life for the list of the month unique users.

## services.CoAuthoring.expire.pemCheckPeriod

**type:** `string` | **default:** `"10m"`

Defines the time for checking the PEM files ttl.

## services.CoAuthoring.expire.pemStdTTL

**type:** `string` | **default:** `"1h"`

Defines the time of life for the PEM files with secrets.

## services.CoAuthoring.expire.presence

**type:** `integer` | **default:** `300`

Defines the time of life for the user presence status.

## services.CoAuthoring.expire.saved

**type:** `integer` | **default:** `3600`

Defines the time of life for the database save executed with success.

## services.CoAuthoring.expire.saveLock

**type:** `integer` | **default:** `60`

Defines the time for saving locks.

## services.CoAuthoring.expire.sessionclosecommand

**type:** `string` | **default:** `"2m"`

Defines the time before the `sessionidle` or `sessionabsolute ttl` expires when a warning message is sent.

## services.CoAuthoring.expire.updateVersionStatus

**type:** `string` | **default:** `"5m"`

Defines the time when the user can open the file again after an error occurs due to opening an already saved file using the old key.

## Example

```json
{
  "services": {
    "CoAuthoring": {
      "expire": {
        "saveLock": 60,
        "presence": 300,
        "locks": 604800,
        "changeindex": 86400,
        "lockDoc": 30,
        "message": 86400,
        "lastsave": 604800,
        "forcesave": 604800,
        "forcesaveLock": 5000,
        "saved": 3600,
        "documentsCron": "0 */2 * * * *",
        "files": 86400,
        "filesCron": "00 00 */1 * * *",
        "filesremovedatonce": 100,
        "sessionidle": "1h",
        "sessionabsolute": "30d",
        "sessionclosecommand": "2m",
        "pemStdTTL": "1h",
        "pemCheckPeriod": "10m",
        "updateVersionStatus": "5m",
        "monthUniqueUsers": "1y"
      }
    }
  }
}
```

