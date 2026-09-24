# createBackupSchedule

> BooleanWrapper createBackupSchedule(BackupScheduleDto)

`POST /api/2.0/backup/createbackupschedule`

Create the backup schedule

Sets the backup schedule of the current portal. A portal keeps at most one schedule, so this replaces the existing one rather than adding a second, and `dump` writes the schedule of the whole server instead, which requires the space access permission and works on a standalone installation only. Scheduled backups have to be allowed by the pricing plan of a portal that is not a standalone installation. `cronParams` is a period plus a time rather than a cron string: `hour` is the hour of the day from 0 to 23, and `day` has to be given for `EveryWeek`, where it is the day of the week from 1 to 7 with Sunday as 1, and for `EveryMonth`, where it is the day of the month from 1 to 31. It is left out for `EveryDay`, and because an omitted `day` is stored as 0, which neither period accepts, a weekly or monthly schedule sent without it fails instead of falling back to a default. `backupsStored` is the number of scheduled copies to keep, from 1 to 30, and it defaults to 1. Older copies are removed by a background cleaner, and only the ones this schedule created: archives made by `POST api/2.0/backup/startbackup` are not counted and not removed. A portal whose subscription stops covering backups has its schedule deleted by the scheduler, not suspended, and its administrators are notified that the scheduled backup failed. The keys expected in `storageParams` are the same as for `POST api/2.0/backup/startbackup`, except that they are sent as an array of key and value pairs here and returned as an object by `GET api/2.0/backup/getbackupschedule`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BackupScheduleDto** | body | [**BackupScheduleDto**](../models/backup-schedule-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True if the schedule was saved | [**BooleanWrapper**](../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The number of the stored copies is outside 1 - 30, or a dump was requested on a portal that is not a standalone installation | - | - |
| **402** | The portal subscription does not cover scheduled backups, has expired or has not been paid | - | - |
| **403** | No permissions to perform this action | - | - |
| **404** | The target folder was not found | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../models/boolean-wrapper.md)

## Authorization

[Basic](backup.md#basic), [OAuth2](backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](backup.md#apikeybearer), [asc_auth_key](backup.md#asc_auth_key), [Bearer](backup.md#bearer), [OpenId](backup.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
