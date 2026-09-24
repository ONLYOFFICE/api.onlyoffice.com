# saveThirdParty

> FolderStringWrapper saveThirdParty(ThirdPartyRequestDto)

`POST /api/2.0/files/thirdparty`

Connect a third-party account

Connects an account at a third-party storage service to the portal, or re-authenticates one that is already connected, and returns the folder that now stands for its root. Send `providerId` to update an existing account and omit it to connect a new one; the accepted `providerKey` values come from `GET api/2.0/files/thirdparty/providers`. The credentials to send depend on the service: the OAuth services take `token`, which is the authorization code from their consent screen and not an access token, while the WebDAV family and SharePoint take `login` with `password`, plus `url` where the server address is not fixed. Credentials are verified against the service before anything is stored, so a wrong password is refused and nothing is saved. The caller needs the rights to create rooms, and the portal-wide third-party switch has to be on, otherwise the call is refused. A new account is attached to the Rooms section and becomes available as room storage for `POST api/2.0/files/rooms/thirdparty/{id}`. Connecting twice with the same title creates two separate accounts.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **ThirdPartyRequestDto** | body | [**ThirdPartyRequestDto**](../../models/third-party-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The root folder of the connected account | [**FolderStringWrapper**](../../models/folder-string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
