# getBackupHistory

> BackupHistoryRecordArrayWrapper getBackupHistory(dump)

`GET /api/2.0/backup/getbackuphistory`

Get the backup history

Returns the backups of the portal whose archive is still in its storage. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. With `dump`, a caller without the space access permission also gets 403. The call changes data. It deletes the record of each backup whose archive is gone, in the Trash, or unreadable. It skips a backup only when its storage cannot be opened, and keeps its record. You can repeat the call. The list has no set order, so sort it by `createdOn`. If the portal subscription has expired or is not paid, the call returns 402.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **dump** | query | **Boolean** | Applies the operation to the whole server rather than to the current portal, which requires the space access permission and works on a standalone installation only. Server-wide backups and schedules are kept apart from the ones of a portal, so the two values address different data. | [optional] [example: `false`] |

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
