# createRoom

> FolderWrapper createRoom(CreateRoomRequestDto)

`POST /api/2.0/files/rooms`

Create a room

Creates a room in the portal Rooms section and returns it. `roomType` decides which sharing links, member roles and form features the room offers, and it cannot be changed afterwards, so a room of the wrong kind has to be recreated. The caller must be the portal owner, a portal administrator or a room administrator; a user or a guest is refused, and so is a public room while the portal forbids external sharing. `title` is required and must not be blank: characters a folder name cannot hold are replaced with underscores and the rest is truncated, so the stored title can differ from the one sent and two rooms can share it. `quota` is accepted only while the per-room quota feature is on and must stay within the portal quota, `cover` only for an id returned by `GET api/2.0/files/rooms/covers`, and `color` as six hexadecimal digits with no leading number sign. Tag names the portal does not know yet are added to the tag catalogue. `share` is not implemented and any non-empty value is rejected, so invite members afterwards with `PUT api/2.0/files/rooms/{id}/share`. Passing the portal room limit ends the call as a billing refusal and creates nothing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateRoomRequestDto** | body | [**CreateRoomRequestDto**](../models/create-room-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created room with its id, type, settings, logo and tags | [**FolderWrapper**](../models/folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `title` or `roomType`, `title` is blank or longer than 170 characters, `roomType` is not a known room type, `color` is not six hexadecimal digits, `cover` is longer than 50 characters or not a known cover, `share` is not empty, `lifetime` has an unknown `period` or a `value` outside 1-999, the `watermark` text is longer than 255 characters, `logo` has no `tmpFile`, a position outside 0-1280, a size outside 1-1280 or a position outside the uploaded picture, or a tag name is empty | - | - |
| **402** | The portal has reached the room limit of its pricing plan or its payment is overdue, or the logo does not fit into the portal storage quota | - | - |
| **403** | The caller is a user or a guest, `roomType` is a public room while the portal forbids external sharing, `private` is set while the caller has no encryption keys, `quota` is set while the storage quota for rooms is turned off or exceeds the portal storage limit, or `logo.tmpFile` is not a picture the caller uploaded | - | - |
| **404** | `logo.tmpFile` names no uploaded picture, or one already used | - | - |
| **500** | `logo.width` or `logo.height` is larger than 2147483647 | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderWrapper**](../models/folder-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
