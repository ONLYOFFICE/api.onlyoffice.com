# startBackup

> BackupProgressWrapper startBackup(StartBackupRequestDto)

`POST /api/2.0/backup/startbackup`

Start the backup

Starts a backup of the portal and returns the queued job. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. With `dump`, a caller without the space access permission also gets 403. The call queues work. To follow the job, poll `GET api/2.0/backup/getbackupprogress` until `isCompleted` is true. Do not repeat it while a backup runs. A repeat returns the running job. But after the free backups of the month, it opens another payment session in the wallet. Once the job ends, a repeated call makes another backup. After the portal spends its free backups of the month, the call charges each backup to the portal wallet. It then also turns on the paid backup service. If the wallet cannot pay for the backup, the call returns 402. It also returns 402 for a `Documents` backup if the portal is over its storage quota. The call returns 400 if `folderId` is missing or does not match `storageType`. It also returns 400 if an item of `storageParams` has no key or value, or repeats a key. If the target folder does not exist, the call returns 404. It returns 403 if you cannot create files in the folder. The root folders of rooms, the archive, and room templates also return 403.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **StartBackupRequestDto** | body | [**StartBackupRequestDto**](../models/start-backup-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued backup job | [**BackupProgressWrapper**](../models/backup-progress-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, the folder ID does not match the storage type or is missing, an item of `storageParams` is null, has no key or no value, or repeats a key, or a dump was requested on a portal that is not a standalone installation | - | - |
| **402** | The portal already uses more storage than its plan allows and the backup goes to `Documents`, or the free backups of the current month are used up and the paid backup service is not available to this portal or cannot be charged | - | - |
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
