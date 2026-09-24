# startBackup

> BackupProgressWrapper startBackup(BackupDto)

`POST /api/2.0/backup/startbackup`

Start the backup

Queues a backup of the current portal and returns straight away: the archive itself is written by the separate backup worker service, which picks the job up from an integration event, so the response reports a progress of 0 and the `Created` status, and its `taskId` is the handle to poll with `GET api/2.0/backup/getbackupprogress`. The caller needs the portal settings permission, and `dump` - a backup of the whole server instead of this one portal - additionally requires the space access permission and is rejected outside a standalone installation. The keys expected in `storageParams` depend on `storageType`: `Documents` takes an integer `folderId`, `ThridpartyDocuments` takes a provider-specific non-integer `folderId`, `Local` takes `filePath` and works on a standalone installation only, `ThirdPartyConsumer` takes `module` together with the settings of that consumer, and `DataStore` takes no keys at all; the `subdir` key is added by the operation itself and must not be sent. A portal that has already used up the free backups of the current calendar month is charged through the paid backup service instead, and the call is rejected with 402 when that service is not available to it.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BackupDto** | body | [**BackupDto**](../models/backup-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued backup job | [**BackupProgressWrapper**](../models/backup-progress-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The folder ID does not match the storage type, or a dump was requested on a portal that is not a standalone installation | - | - |
| **402** | The free backups of the current month are used up and the paid backup service is not available to this portal | - | - |
| **403** | No permissions to perform this action | - | - |
| **404** | The target folder or the backup quota was not found | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BackupProgressWrapper**](../models/backup-progress-wrapper.md)

## Authorization

[Basic](backup.md#basic), [OAuth2](backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](backup.md#apikeybearer), [asc_auth_key](backup.md#asc_auth_key), [Bearer](backup.md#bearer), [OpenId](backup.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
