# pinRoom

> FolderIntegerWrapper pinRoom(id)

`PUT /api/2.0/files/rooms/{id}/pin`

Pin a room

Pins a room to the top of the room list of the calling account and returns the room with the pinned flag set. Pinning is personal: it changes the order only for the caller, is invisible to the other members of the room, and does not survive a trip through the Archive section, so an unarchived room has to be pinned again. Pinned rooms stay above the unpinned ones whatever sorting or filter the listing uses, and their own order between each other is stable. An account may keep only a limited number of pinned rooms at a time, ten on a portal with the default configuration, and AI rooms are counted separately against their own allowance; a request over the limit is refused until something is unpinned with `PUT api/2.0/files/rooms/{id}/unpin`. Pinning a room that is already pinned changes nothing and is safe to repeat. Anybody who can read the room may pin it, including guests and portal administrators who were never invited, while somebody who is not in the room is refused, an archived room is rejected and an unknown room is answered as missing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room with its pinned flag set for the caller | [**FolderIntegerWrapper**](../models/folder-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
