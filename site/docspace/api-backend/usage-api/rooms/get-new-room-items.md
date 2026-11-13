# getNewRoomItems

> NewItemsFileEntryBaseArrayWrapper getNewRoomItems(id)

`GET /api/2.0/files/rooms/{id}/news`

Get new items in a room

Returns the files of a room that are new for the caller, grouped by the day of the last change. The newest day comes first, and in each day the newest file comes first. The list has only files, including files in subfolders at any depth. A new folder is not an entry. Changes of the caller are never new for the caller. A deleted file leaves the list. Requires read access to the room. Other callers get 403. The call is read-only and keeps the new-item marks. Opening the room with `GET api/2.0/files/rooms/{id}` clears them, so call this one first. An empty array means that nothing is new. A folder in Trash returns 403. If the room does not exist or was deleted, the call returns 404. If a string `id` points to a storage account that is not connected, the call returns 400. To read the new items of all rooms, use `GET api/2.0/files/rooms/news`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The new files of the room, grouped by day | [**NewItemsFileEntryBaseArrayWrapper**](../models/new-items-file-entry-base-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | A third-party identifier refers to a storage account that is not connected | - | - |
| **403** | The caller cannot read this room, or the id names a folder in the Trash | - | - |
| **404** | No room with this ID exists, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**NewItemsFileEntryBaseArrayWrapper**](../models/new-items-file-entry-base-array-wrapper.md)

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
