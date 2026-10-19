# getBackupsServiceState

> BackupServiceStateWrapper getBackupsServiceState()

`GET /api/2.0/backup/getservicestate`

Check whether backups are enabled

Reports whether the paid backup service is switched on for the current portal. This is a wallet setting of the portal, not the health of the backup service or of the worker that runs the jobs, so a false answer does not mean backups are unavailable and a true one does not mean they are working. While it is on, backups beyond the free monthly allowance are charged to the portal wallet. While it is off and that allowance is used up, `POST api/2.0/backup/startbackup` and `POST api/2.0/backup/createbackupschedule` answer 402. Starting a backup once the allowance is used up switches the service on by itself, as soon as a billing session opens for the portal, so this flag can change without anybody editing the portal settings.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the paid backup service is switched on for this portal | [**BackupServiceStateWrapper**](../models/backup-service-state-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | No permissions to perform this action | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BackupServiceStateWrapper**](../models/backup-service-state-wrapper.md)

## Authorization

[Basic](backup.md#basic), [OAuth2](backup.md#oauth2) (scopes: read, write), [ApiKeyBearer](backup.md#apikeybearer), [asc_auth_key](backup.md#asc_auth_key), [Bearer](backup.md#bearer), [OpenId](backup.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
