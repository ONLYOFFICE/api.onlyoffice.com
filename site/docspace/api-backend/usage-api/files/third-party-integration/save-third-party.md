# saveThirdParty

> ThirdPartyFolderWrapper saveThirdParty(ThirdPartyRequestDto)

`POST /api/2.0/files/thirdparty`

Connect a third-party account

Connects a third-party storage account as room storage, or re-authenticates the caller's account with `providerId`. It returns the root folder of the account. Third-party storage must be turned on with `PUT api/2.0/files/thirdparty`. Requires the right to create rooms. Other callers get 403. The call changes data. It checks the credentials at the service before it saves anything. Without `providerId`, each call adds a new account, so do not repeat it. You can repeat a re-authentication with the same body if it has no `token`. A `token` is a one-time code of Google Drive, Box, Dropbox, or OneDrive. So the service rejects a repeat with the same `token`. A re-authenticated room account keeps its server address. The call returns 400 if `customerTitle` or `providerKey` is missing, or `providerKey` names no known service. For a new account, it also returns 400 if a needed `token`, `password`, or `url` is missing. The call returns 403 if third-party storage is turned off or the service rejects the credentials. It also returns 403 if `providerId` names the account of another user. For a new account, a title that is empty after the call removes invalid characters also returns 403. If no account has the `providerId`, the call returns 404. To create a room on the account, use `POST api/2.0/files/rooms/thirdparty/{id}`. To connect backup storage, use `POST api/2.0/files/thirdparty/backup`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ThirdPartyRequestDto** | body | [**ThirdPartyRequestDto**](../../models/third-party-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The root folder of the connected account | [**ThirdPartyFolderWrapper**](../../models/third-party-folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `customerTitle` or `providerKey`, `providerId` is neither a number nor a numeric string, or, for a new account, `providerKey` names no known storage service, the `token` or `password` the service needs is missing, or `url` is missing or is not an HTTP address for a service that needs it | - | - |
| **403** | The caller cannot create rooms, the portal-wide third-party switch is off or no storage service is enabled, the title of a new account is empty once invalid characters are removed, the service rejects the credentials, or `providerId` names an account connected by another member | - | - |
| **404** | `providerId` names no third-party account on the portal | - | - |
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
