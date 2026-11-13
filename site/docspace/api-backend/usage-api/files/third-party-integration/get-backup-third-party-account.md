# getBackupThirdPartyAccount

> ThirdPartyFolderWrapper getBackupThirdPartyAccount()

`GET /api/2.0/files/thirdparty/backup`

Get the third-party backup folder

Returns the root folder of the third-party storage account where the portal saves scheduled and manual backups. A portal has at most one such account. A DocSpace admin connects it with `POST api/2.0/files/thirdparty/backup`. Any signed-in user can call it. The call is read-only. The body is `null` with status 200 if no backup account is connected or the caller cannot read its folder. The answer does not tell these cases apart. The folder operations accept the returned `id`. The `title` is the title of the account. The list of `GET api/2.0/files/thirdparty` does not have this account. To remove it, use `DELETE api/2.0/files/thirdparty/{providerId}`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The root folder of the backup storage account, or null when none is connected | [**ThirdPartyFolderWrapper**](../../models/third-party-folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: Not defined
- **Accept**: application/json
