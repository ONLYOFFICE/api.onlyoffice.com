# getBackupProgress

> BackupProgressWrapper getBackupProgress(Dump)

`GET /api/2.0/backup/getbackupprogress`

Get the backup progress

Reports the state of the backup job of the current portal, and is the operation to poll after `POST api/2.0/backup/startbackup`. The queue holds one job per portal, so no job ID is passed in; `dump` asks for the state of the server-wide job instead and requires the space access permission. When there is no such job - none was ever started, or the finished one has already been dropped from the queue - the call still answers 200, but the body carries no `response` member at all, so a client has to treat the payload as optional rather than expect an empty object. While the job runs, `isCompleted` is false, `error` and `link` are empty strings and `progress` grows from 0 to 100. Once it stops, `isCompleted` turns true and `status` says how it ended: a non-empty `error` is the only report of a failure, `warning` is set when the archive was written but some files could not be read or when the job was cancelled, and `link` becomes the download link to the stored archive.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **Dump** | query | **Boolean** | Applies the operation to the whole server rather than to the current portal, which requires the space access permission and works on a standalone installation only. Server-wide backups and schedules are kept apart from the ones of a portal, so the two values address different data. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the backup job, or an empty payload when there is no such job | [**BackupProgressWrapper**](../models/backup-progress-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BackupProgressWrapper**](../models/backup-progress-wrapper.md)

## Authorization

[Basic](backup.md#basic), [OAuth2](backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](backup.md#apikeybearer), [asc_auth_key](backup.md#asc_auth_key), [Bearer](backup.md#bearer), [OpenId](backup.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
