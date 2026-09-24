# getBackupSchedule

> ScheduleWrapper getBackupSchedule(Dump)

`GET /api/2.0/backup/getbackupschedule`

Get the backup schedule

Returns the backup schedule of the current portal. A portal keeps at most one schedule, so no ID is passed in, and when none is set the call still answers 200 with a body that carries no `response` member at all. `dump` asks for the schedule of the whole server instead of the one of this portal and requires the space access permission. The answer cannot be sent back unchanged: `storageParams` is returned as an object keyed by parameter name, while `POST api/2.0/backup/createbackupschedule` expects an array of key and value pairs. For every storage type except `ThirdPartyConsumer` the `folderId` key of the answer is built from the stored base path rather than read back from the saved parameters, and a schedule that keeps an unlimited number of copies reports `backupsStored` as null instead of 0.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **Dump** | query | **Boolean** | Applies the operation to the whole server rather than to the current portal, which requires the space access permission and works on a standalone installation only. Server-wide backups and schedules are kept apart from the ones of a portal, so the two values address different data. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The backup schedule, or an empty payload when none is set | [**ScheduleWrapper**](../models/schedule-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal subscription has expired or has not been paid | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ScheduleWrapper**](../models/schedule-wrapper.md)

## Authorization

[Basic](backup.md#basic), [OAuth2](backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](backup.md#apikeybearer), [asc_auth_key](backup.md#asc_auth_key), [Bearer](backup.md#bearer), [OpenId](backup.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
