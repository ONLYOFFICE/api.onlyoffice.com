# saveThirdPartyBackup

> FolderStringWrapper saveThirdPartyBackup(ThirdPartyBackupRequestDto)

`POST /api/2.0/files/thirdparty/backup`

Connect the third-party backup storage

Connects the third-party storage account the portal writes its backups to, and returns the folder that stands for its root. Only a portal administrator may call it, and the portal-wide third-party switch has to be on; other callers are refused. The account is portal-wide and single: a second call does not add another one but re-authenticates and retitles the existing one, which makes the operation safe to repeat with the same body. The credentials follow the same rules as in `POST api/2.0/files/thirdparty` - an authorization code in `token` for the OAuth services, `login` with `password` and, where the server address is not fixed, `url` for the WebDAV family and SharePoint - and are verified against the service before anything is stored, so a wrong password leaves the previous account untouched. The account is deliberately absent from `GET api/2.0/files/thirdparty`; read it back with `GET api/2.0/files/thirdparty/backup` and remove it with `DELETE api/2.0/files/thirdparty/{providerId}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ThirdPartyBackupRequestDto** | body | [**ThirdPartyBackupRequestDto**](../../models/third-party-backup-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The root folder of the backup storage account | [**FolderStringWrapper**](../../models/folder-string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderStringWrapper**](../../models/folder-string-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
