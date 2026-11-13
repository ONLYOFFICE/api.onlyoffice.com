# unarchiveRoom

> FileOperationWrapper unarchiveRoom(id, ArchiveRoomRequest)

`PUT /api/2.0/files/rooms/{id}/unarchive`

Unarchive a room

Starts a background job that moves a room from the Archive section back to Rooms, and returns the job record. The room becomes writable again with its members, tags, logo, and links. The job does not restore the pins of the members. To pin the room again, use `PUT api/2.0/files/rooms/{id}/pin`. Requires the room manager role in the room. Other callers get 403. The call queues work. Repeat `GET api/2.0/files/fileops` until `finished` is true. The room may leave the archive before `finished` becomes true. You can repeat the call. A room that is not archived stays where it is. The `deleteAfter` field sets only how long the finished record stays. A folder that is not a room returns 403. A room with a file that is locked or being edited also returns 403. The call returns 404 if the room does not exist, was deleted, or is a room template. If a string `id` points to a storage account that is not connected, the call returns 400.  Raises the `room.restored` webhook once the queued operation moves the room out of the archive, for AI agents too.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to move, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **ArchiveRoomRequest** | body | [**ArchiveRoomRequest**](../models/archive-room-request.md) | The body of the request. It carries only the lifetime of the job record, so an empty object is a normal request. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued unarchive operation to poll | [**FileOperationWrapper**](../models/file-operation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or a third-party identifier refers to a storage account that is not connected | - | - |
| **403** | The caller may not read or unarchive this room, the id names a folder that is not a room, or a file in the room is locked or being edited | - | - |
| **404** | The room does not exist or is a room template, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationWrapper**](../models/file-operation-wrapper.md)

## Third-party storage

For a file or folder in a connected third-party storage the identifier is a string such as `sbox-42`, and the call differs in these parts only:

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **String** | The room to move, named by the identifier that &#x60;GET api/2.0/files/rooms&#x60; reports for it. | [required] [example: `sbox-42`] |


## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
