# archiveRoom

> FileOperationWrapper archiveRoom(id, ArchiveRoomRequest)

`PUT /api/2.0/files/rooms/{id}/archive`

Archive a room

Starts a background job that moves a room to the Archive section, and returns the job record. Members can still read an archived room. Only deleting or unarchiving the room changes it. No one can create, rename, or edit files in it, or change its settings, tags, logo, or links. Requires the room manager role in the room. Other callers get 403. A DocSpace admin without an invitation also gets 403. The call queues work. Repeat `GET api/2.0/files/fileops` until `finished` is true. You can repeat the call on an archived room. The `deleteAfter` field sets only how long the finished record stays. Instructions and Knowledge rooms cannot be archived and return 403. To remove one, use `DELETE api/2.0/files/rooms/{id}`. A folder that is not a room also returns 403. A room with a file that is locked or being edited also returns 403. If the room does not exist or is a room template, the call returns 404. If a string `id` points to a storage account that is not connected, the call returns 400. To restore the room, use `PUT api/2.0/files/rooms/{id}/unarchive`.  Raises the `room.archived` webhook once the queued operation moves the room to the archive, for an AI agent as well.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to move, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **ArchiveRoomRequest** | body | [**ArchiveRoomRequest**](../models/archive-room-request.md) | The body of the request. It carries only the lifetime of the job record, so an empty object is a normal request. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued archive operation to poll | [**FileOperationWrapper**](../models/file-operation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or a third-party identifier refers to a storage account that is not connected | - | - |
| **403** | The caller may not read or archive this room, the id names a folder that is not a room, the room is an Instructions or Knowledge room, which is never archived, or a file in the room is locked or being edited | - | - |
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
