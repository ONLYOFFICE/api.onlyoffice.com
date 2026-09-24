# getBackupHistory

> BackupHistoryRecordArrayWrapper getBackupHistory(Dump)

`GET /api/2.0/backup/getbackuphistory`

Get the backup history

Lists the backups of the current portal whose archive is still present in the storage it was written to. The records come back in no particular order, so sort them by `createdOn` if the newest one is wanted. `dump` lists the backups of the whole server instead and requires the space access permission. Despite being a read operation, this prunes the history as it goes: a record whose archive is no longer in its storage is deleted outright, so the list can shrink between two calls without anybody deleting anything. A record whose storage can no longer be reached at all - a disconnected third-party account, for instance - is neither returned nor deleted, so it stays invisible while still occupying the history. The `id` of a record is the same value as the `taskId` that `POST api/2.0/backup/startbackup` returned for it, and it is what `DELETE api/2.0/backup/deletebackup/{id}` and the `backupId` of `POST api/2.0/backup/startrestore` expect.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **Dump** | query | **Boolean** | Applies the operation to the whole server rather than to the current portal, which requires the space access permission and works on a standalone installation only. Server-wide backups and schedules are kept apart from the ones of a portal, so the two values address different data. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The backups whose archive is still stored | [**BackupHistoryRecordArrayWrapper**](../models/backup-history-record-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal subscription has expired or has not been paid | - | - |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BackupHistoryRecordArrayWrapper**](../models/backup-history-record-array-wrapper.md)

## Authorization

[Basic](backup.md#basic), [OAuth2](backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](backup.md#apikeybearer), [asc_auth_key](backup.md#asc_auth_key), [Bearer](backup.md#bearer), [OpenId](backup.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
