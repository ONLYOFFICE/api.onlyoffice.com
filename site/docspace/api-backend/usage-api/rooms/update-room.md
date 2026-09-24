# updateRoom

> FolderIntegerWrapper updateRoom(id, UpdateRoomRequest)

`PUT /api/2.0/files/rooms/{id}`

Update a room

Applies a partial change to one room and returns the whole room as it is after it. Only the fields present in the body are touched, an empty body changes nothing, and a property the body does not define is rejected as an invalid request instead of being ignored. The caller must be a manager of this room: portal administrators do not get in without an invitation, and an archived room is refused. `title` is trimmed, sanitised the way a room title is sanitised at creation, and a blank value is treated as no change. `tags` replaces the whole tag set and an empty array clears it, an empty `color` restores the default and an empty `cover` removes the cover. A `quota` of -1 switches the room back to no custom limit, any other negative value restores the portal default, and a positive one is accepted only while the per-room quota feature is on. Turning `indexing` on renumbers the room contents. `chatSettings` belongs to an AI room and is rejected anywhere else. Use `POST api/2.0/files/rooms/{id}/logo` for logo cropping.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to update, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **UpdateRoomRequest** | body | [**UpdateRoomRequest**](../models/update-room-request.md) | The fields to change. Only the properties present in the object are applied, and a property that the object does not define is rejected instead of being ignored. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room as it is after the update | [**FolderIntegerWrapper**](../models/folder-integer-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: application/json
- **Accept**: application/json
