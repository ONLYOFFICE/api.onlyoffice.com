# getRoomsPrimaryExternalLink

> FileShareWrapper getRoomsPrimaryExternalLink(id)

`GET /api/2.0/files/rooms/{id}/link`

Get the room primary external link

Returns the primary external link of a room, the address for people outside the portal. Public and form-filling rooms get this link when they are created. If the room has no primary link yet, the call creates one. Requires read access to the room. Other callers get 403. To create the link, the caller also needs the right to manage the links of the room. Without it, the call returns 403. The call is read-only, except when it creates the link. A repeated call returns the same link. An archived public room still returns its link to room managers. Other members get 403. The entry is the same as in `GET api/2.0/files/rooms/{id}/links`, with the primary flag set. It includes the request token that must go with the address. The call also returns 403 if the room type takes no external links. An admin rule that allows external links only in public rooms also returns 403. If the link was revoked, the call returns 404 and creates no new link. If the room does not exist, the call also returns 404. If a string `id` points to a storage account that is not connected, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The primary external link of the room | [**FileShareWrapper**](../models/file-share-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A third-party identifier refers to a storage account that is not connected | - | - |
| **403** | The caller may not read the room, or the room has no primary link yet and the caller may not manage its links, its type takes no external links, or the admin restricts external links to public rooms | - | - |
| **404** | The room does not exist or its primary link was revoked, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileShareWrapper**](../models/file-share-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The room to act on, named by the identifier that &#x60;GET api/2.0/files/rooms&#x60; reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `sbox-42`] |


## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
