# updateRoom

> FolderWrapper updateRoom(id, UpdateRoomRequest)

`PUT /api/2.0/files/rooms/{id}`

Update a room

Changes the settings of a room and returns the whole room. The call changes only the fields in the body. An empty body changes nothing. Requires the room manager role in the room. Other callers get 403. A DocSpace admin without an invitation also gets 403. The call changes data, and you can repeat it with the same body. The portal deletes an uploaded image after use. So a repeated `logo` or uploaded `watermark.imageUrl` returns 404. After each call with `lifetime`, the portal waits 6 hours by default before it deletes expired files. The call trims a `title` and cleans it as at room creation. A blank `title` changes nothing. The `tags` array replaces all tags of the room, and an empty array removes them. An empty `color` restores the default color. An empty `cover` removes the cover. A `quota` of `-1` removes the custom limit. Any other negative `quota` restores the portal default. A positive `quota` works only while the room quota feature is turned on. If you turn on `indexing`, the call renumbers the room contents. The call returns 400 if the body has a property that the room update does not define. It also returns 400 for `chatSettings` in a room that is not an AI room. A private room with `indexing`, `lifetime`, or `watermark` also returns 400. If a new logo or watermark image does not fit the portal storage quota, the call returns 402. It returns 403 for a room in Trash or in the archive, or a `quota` over the portal limit. It also returns 403 if `logo.tmpFile` is not an image the caller uploaded. If the room or the uploaded image does not exist, the call returns 404. To crop and set only a logo, use `POST api/2.0/files/rooms/{id}/logo`.  Raises the `room.updated` webhook on every successful call, even one that changes nothing. Raises the `agent.updated` webhook instead when the room is an AI agent. Raises the `folder.updated` webhook instead when the ID is a folder inside the room, not the room itself.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to update, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **UpdateRoomRequest** | body | [**UpdateRoomRequest**](../models/update-room-request.md) | The fields to change. Only the properties present in the object are applied, and a property that the object does not define is rejected instead of being ignored. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The room as it is after the update | [**FolderWrapper**](../models/folder-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or holds a property the room update does not define, a private room is given `indexing`, an enabled `lifetime` or an enabled `watermark`, `title` is longer than 170 characters, `color` is not six hexadecimal digits, `cover` is longer than 50 characters or not a known cover, `lifetime` has an unknown `period` or a `value` outside 1-999, `logo` has no `tmpFile`, a position outside 0-1280, a size outside 1-1280 or a position outside the uploaded picture, the `watermark` text is longer than 255 characters, a tag name is empty, `chatSettings` is sent for a room that is not an AI room, or a third-party identifier refers to a storage account that is not connected | - | - |
| **402** | The new logo or watermark image does not fit into the portal storage quota | - | - |
| **403** | The caller may not edit this room, the room lies in Trash or in the archive, `quota` exceeds the storage limit of the portal, or `logo.tmpFile` or a relative `watermark.imageUrl` is not an image the caller uploaded | - | - |
| **404** | No room has this id, the uploaded image named by `logo.tmpFile` or `watermark.imageUrl` no longer exists, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
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
