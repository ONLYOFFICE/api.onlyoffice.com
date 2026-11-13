# createBackupSchedule

> BooleanWrapper createBackupSchedule(CreateBackupScheduleRequestDto)

`POST /api/2.0/backup/createbackupschedule`

Create the backup schedule

Creates the backup schedule of the portal, or replaces the current one. A portal has at most one schedule. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. With `dump`, a caller without the space access permission also gets 403. The call changes data. You can repeat it with the same body. It returns `true`. If the free backups of the month are spent and the paid service is off, the scheduler deletes the schedule. It then sends a notice that the scheduled backup failed. The call returns 400 if `cronParams` is missing or a value is out of range. A weekly or monthly schedule without `day` also returns 400. It also returns 400 if `storageParams` has no key that the storage needs, or repeats a key. It also returns 400 for an unknown `module` or a `Documents` folder ID that is not a number. If the target folder does not exist, the call returns 404. It returns 403 if you cannot create files in the folder. The root folders of rooms, the archive, and room templates also return 403. If the plan has no free backups and the paid backup service is off, the call returns 402. It also returns 402 if the portal subscription has expired or is not paid.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateBackupScheduleRequestDto** | body | [**CreateBackupScheduleRequestDto**](../models/create-backup-schedule-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | True if the schedule was saved | [**BooleanWrapper**](../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, `cronParams` is missing, its period is not a defined value, its hour or day is out of range for the period, which includes a weekly or monthly schedule sent without `day`, the number of the stored copies is outside 1-30, `storageType` is not a storage the backups can be written to, a `ThirdPartyConsumer` schedule has no known `module`, the `folderId` or `filePath` key the storage type needs is missing, the `folderId` of a `Documents` schedule is not a number, a dump was requested on a portal that is not a standalone installation, or `storageParams` repeats a key or, on a dump, contains `tenantId` | - | - |
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
