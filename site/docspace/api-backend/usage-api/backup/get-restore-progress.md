# getRestoreProgress

> BackupProgressWrapper getRestoreProgress(dump)

`GET /api/2.0/backup/getrestoreprogress`

Get the restoring progress

Returns the state of the restore job of the portal. Anyone can call it without signing in. It also works while the portal is being restored and other calls are refused. The call is read-only. This is the call to poll after `POST api/2.0/backup/startrestore`. Repeat it until `isCompleted` is true. Without `dump`, the call returns any restore job of the portal, including a server-wide one. If there is no job, the call returns 200 without the `response` field.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **dump** | query | **Boolean** | Which restoring job to look for, read as three states rather than as a flag: leave it out for whichever job concerns this portal, including a server-wide one, send false for the job of this portal alone, and send true for the server-wide job. On a portal that is not a standalone installation the value is forced to false. | [optional] [example: `false`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the restoring job, or an empty payload when there is no such job | [**BackupProgressWrapper**](../models/backup-progress-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
