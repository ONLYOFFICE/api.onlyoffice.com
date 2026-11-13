# applyExternalSharePassword

> ExternalShareWrapper applyExternalSharePassword(key, ExternalShareRequestParam)

`POST /api/2.0/files/share/{key}/password`

Unlock a password-protected link

Checks the password of a protected external share link, and returns the same data as `GET api/2.0/files/share/{key}`. Call it after that operation reports that the link requires a password. Anyone can call it without signing in. A signed-in caller who can read the room does not need the password. The call changes data but not the entry. The portal remembers a correct password for the caller, so later requests with the token skip it. The portal counts only wrong passwords for each link and calling address. So you can repeat the call with the correct password. A wrong password gives an invalid-password `status`, not an HTTP error. The portal then forgets the remembered password. After too many attempts, the call returns 403 until the block expires, even with the correct password.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **key** | path | **String** | The token of the external share link, taken verbatim from the `requestToken` of a link returned by the link operations of an entry, such as `GET api/2.0/files/rooms/{id}/link`. It is an opaque URL-safe string that carries the link's own identifier, so it cannot be assembled by hand. | [required] [example: `q7Ry8cQ1lZ0dP3sK2mXfA9tBnV6hJ4uE8wCz5oLg`] |
| **ExternalShareRequestParam** | body | [**ExternalShareRequestParam**](../../models/external-share-request-param.md) | The body of the request, holding the password to check. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The entry the token points at, with the status the link reached after the password was checked | [**ExternalShareWrapper**](../../models/external-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | Too many attempts were made for this link from the calling address, and the block has not expired yet | - | - |
| **429** | Too many requests | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**ExternalShareWrapper**](../../models/external-share-wrapper.md)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
