# saveThirdPartyBackup

> ThirdPartyFolderWrapper saveThirdPartyBackup(ThirdPartyBackupRequestDto)

`POST /api/2.0/files/thirdparty/backup`

Connect the third-party backup storage

Connects the third-party storage account where the portal saves backups, and returns its root folder. Third-party storage must be turned on with `PUT api/2.0/files/thirdparty`. Requires a DocSpace admin. Other callers get 403. The call changes data. A portal has one backup account. A second call re-authenticates and renames that account instead of adding one. So you can repeat the call with the same body if it has no `token`. A `token` is a one-time code of Google Drive, Box, Dropbox, or OneDrive. So the service rejects a repeat with the same `token`. The credentials follow the rules of `POST api/2.0/files/thirdparty`. The call checks them at the service before it saves anything. So wrong credentials leave the current account unchanged. The call returns 400 if `providerKey` names no known service or a needed `url` is missing. While no backup account exists, a missing `token` or `password` also returns 400. The call returns 403 if third-party storage is turned off or the service rejects the credentials. While no backup account exists, a title that is empty after the call removes invalid characters also returns 403. The list of `GET api/2.0/files/thirdparty` does not have this account. To read it, use `GET api/2.0/files/thirdparty/backup`. To remove it, use `DELETE api/2.0/files/thirdparty/{providerId}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ThirdPartyBackupRequestDto** | body | [**ThirdPartyBackupRequestDto**](../../models/third-party-backup-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The root folder of the backup storage account | [**ThirdPartyFolderWrapper**](../../models/third-party-folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, `providerKey` names no known storage service, `url` is missing or is not an HTTP address for a service that needs it, or, while no backup account is connected yet, the `token` or `password` the service needs is missing | - | - |
| **403** | The caller is not a DocSpace administrator, the portal-wide third-party switch is off or no storage service is enabled, the service rejects the credentials, or, while no backup account is connected yet, the title is empty once invalid characters are removed | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ThirdPartyFolderWrapper**](../../models/third-party-folder-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
