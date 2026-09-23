# startBackupRestore

Referenced types are defined in the [full reference](../backup.md).

> BackupProgressWrapper startBackupRestore(BackupRestoreDto)

`POST /api/2.0/backup/startrestore`

Start the restoring process

Queues the restoring of the current portal from a backup and returns straight away: the work itself is done by the separate backup worker service, which picks the job up from an integration event, so the response reports a progress of 0 and the `Created` status, and the returned `taskId` is the handle to poll with `GET api/2.0/backup/getrestoreprogress` - the one operation of this service that stays reachable while the portal is being restored, because every other one answers 403 in that state. The source is given either by `backupId`, which is the ID of a record from `GET api/2.0/backup/getbackuphistory`, or, when `backupId` is not a GUID, by the `filePath` key of `storageParams` together with the matching `storageType`; an all-zero GUID is parsed as a GUID and therefore reaches neither branch. The caller needs the portal settings permission, restoring has to be allowed by the pricing plan of a portal that is not a standalone installation, and `dump` - restoring the whole server rather than this one portal - additionally requires the space access permission.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **BackupRestoreDto** | body | [**BackupRestoreDto**](../backup.md#model-backuprestoredto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the queued restoring job | [**BackupProgressWrapper**](../backup.md#model-backupprogresswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The pricing plan of this portal does not allow restoring | - | - |
| **403** | No permissions to perform this action | - | - |
| **404** | The backup record was not found, or the file it points to is missing | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../backup.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BackupProgressWrapper**](../backup.md#model-backupprogresswrapper)

## Authorization

[Basic](../backup.md#basic), [OAuth2](../backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](../backup.md#apikeybearer), [asc_auth_key](../backup.md#asc_auth_key), [Bearer](../backup.md#bearer), [OpenId](../backup.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
