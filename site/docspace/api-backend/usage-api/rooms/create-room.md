# createRoom

> FolderWrapper createRoom(CreateRoomRequestDto)

`POST /api/2.0/files/rooms`

Create a room

Creates a room in the Rooms section and returns it. The call creates an Instructions room, a Knowledge room, or an AI project in the AI rooms section instead. You cannot change `roomType` after this call. Requires a DocSpace admin or a room admin. Other callers get 403. The call changes data. Do not repeat it. Each call creates another room. A repeat with the same `logo` returns 404 but still creates a room. That room has no logo, tags, or primary external link. The call adds the tag names that the portal does not have yet. A public room and a form filling room get a primary external link. To invite members, use `PUT api/2.0/files/rooms/{id}/share` after this call. The call returns 400 if `title` is blank, `cover` is unknown, or `share` is not empty. It also returns 400 if `private` is set together with `indexing`, a lifetime, or a watermark. A room of the AI rooms section also returns 400 with settings that do not apply to its type. The call returns 402 if the portal reached the room limit of its plan or its payment is overdue. Rooms of the AI rooms section do not count toward this limit. A logo that does not fit into the storage quota also returns 402. The call returns 403 if `quota` is set while room quotas are turned off, or is over the portal limit. It also returns 403 for a public room while the portal forbids external sharing. A private room also returns 403 if the caller has no encryption keys. A Knowledge room returns 403 while vectorization is turned off. If `logo.tmpFile` names no uploaded picture, or one already used, the call returns 404.  Raises the `room.created` webhook when `roomType` is not `AiRoom`. Raises the `agent.created` webhook instead when `roomType` is `AiRoom`, which creates an AI agent in the Rooms section.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CreateRoomRequestDto** | body | [**CreateRoomRequestDto**](../models/create-room-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The created room with its id, type, settings, logo and tags | [**FolderWrapper**](../models/folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `title` or `roomType`, `private` is set together with `indexing`, an enabled `lifetime` or an enabled `watermark`, `title` is blank or longer than 170 characters, `roomType` is not a known room type, `color` is not six hexadecimal digits, `cover` is longer than 50 characters or not a known cover, `share` is not empty, `lifetime` has an unknown `period` or a `value` outside 1-999, the `watermark` text is longer than 255 characters, `logo` has no `tmpFile`, a position outside 0-1280, a size outside 1-1280 or a position outside the uploaded picture, or a tag name is empty | - | - |
| **402** | The portal has reached the room limit of its pricing plan or its payment is overdue, or the logo does not fit into the portal storage quota | - | - |
| **403** | The caller is a user or a guest, `roomType` is a public room while the portal forbids external sharing, `private` is set while the caller has no encryption keys or the connected document server cannot work with encrypted files, `quota` is set while the storage quota for rooms is turned off or exceeds the portal storage limit, or `logo.tmpFile` is not a picture the caller uploaded | - | - |
| **404** | `logo.tmpFile` names no uploaded picture, or one already used | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderWrapper**](../models/folder-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
