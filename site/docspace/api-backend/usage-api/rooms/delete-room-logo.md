# deleteRoomLogo

> FolderIntegerWrapper deleteRoomLogo(id)

`DELETE /api/2.0/files/rooms/{id}/logo`

Remove a room logo

Removes the uploaded logo of a room and returns the room with empty logo addresses. What the room falls back to is its cover and colour, which the logo only hid: if a cover was set before the logo, it is shown again, and `POST api/2.0/files/rooms/{id}/cover` is what changes it. Nothing else about the room is touched, so membership, tags, links and settings are preserved. A room that has no logo is accepted and answered with 200, and repeating the call is therefore harmless. The caller must be a manager of the room; a member invited even with editing rights is refused, and so is a room in the Archive section. A room that does not exist or was deleted is answered as missing. After the logo is removed a new one can be set again through `POST api/2.0/files/logos` followed by `POST api/2.0/files/rooms/{id}/logo`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room with its logo removed | [**FolderIntegerWrapper**](../models/folder-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderIntegerWrapper**](../models/folder-integer-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
