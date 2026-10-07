# updateRoom

> FolderWrapper updateRoom(id, UpdateRoomRequest)

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
| **200** | The room as it is after the update | [**FolderWrapper**](../models/folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or holds a property the room update does not define, `title` is longer than 170 characters, `color` is not six hexadecimal digits, `cover` is longer than 50 characters or not a known cover, `lifetime` has an unknown `period` or a `value` outside 1-999, `logo` has no `tmpFile`, a position outside 0-1280, a size outside 1-1280 or a position outside the uploaded picture, the `watermark` text is longer than 255 characters, a tag name is empty, `chatSettings` is sent for a room that is not an AI room, or a third-party identifier refers to a storage account that is not connected | - | - |
| **402** | The new logo or watermark image does not fit into the portal storage quota | - | - |
| **403** | The caller may not edit this room, the room does not exist or lies in Trash or in the archive, `quota` exceeds the storage limit of the portal, or `logo.tmpFile` or a relative `watermark.imageUrl` is not an image the caller uploaded | - | - |
| **404** | The uploaded image named by `logo.tmpFile` or `watermark.imageUrl` no longer exists, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **500** | A third-party identifier carries a storage account number beyond the 32-bit range, or `logo.width` or `logo.height` is larger than 2147483647 | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FolderWrapper**](../models/folder-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The room to update, named by the identifier that &#x60;GET api/2.0/files/rooms&#x60; reports for it. | [required] [example: `sbox-42`] |

Return type: [**ThirdPartyFolderWrapper**](../models/third-party-folder-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
