# startBackupRestore

> BackupProgressWrapper startBackupRestore(StartBackupRestoreRequestDto)

`POST /api/2.0/backup/startrestore`

Start the restoring process

Starts restoring the portal from a backup and returns the queued job. The restore replaces the current data of the portal. The source is a backup from the history, or a file in `storageParams` if `backupId` is not a GUID. An all-zero `backupId` selects no backup, so the job fails. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. With `dump`, a caller without the space access permission also gets 403. The call queues work and cannot be undone. While the restore runs, most API calls return 403. To follow the job, poll `GET api/2.0/backup/getrestoreprogress` until `isCompleted` is true. You cannot cancel a restore through the API. A repeated call during the restore returns 403 or the running job. After the restore ends, a repeated call restores the portal again. If the plan does not allow restoring, the call returns 402. The call returns 400 if `backupId` is missing, or it is not a GUID and `storageParams` has no `filePath`. It also returns 400 if an item of `storageParams` has no key or value, or repeats a key. The call returns 404 if the backup, the file, or its folder does not exist. For `Local` storage, a missing uploaded archive also returns 404. It returns 403 if you cannot create files in the folder of the backup file.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **StartBackupRestoreRequestDto** | body | [**StartBackupRestoreRequestDto**](../models/start-backup-restore-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued restoring job | [**BackupProgressWrapper**](../models/backup-progress-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `backupId`, `backupId` is not a GUID and `storageParams` has no `filePath`, or an item of `storageParams` is null, has no key or no value, or repeats a key | - | - |
| **402** | The pricing plan of this portal does not allow restoring | - | - |
| **403** | No permissions to perform this action | - | - |
| **404** | The backup record was not found, the file given in `filePath` or its folder was not found, or, for `Local` storage, no backup archive has been uploaded to the portal | - | - |
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
