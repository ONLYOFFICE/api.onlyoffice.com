# unarchiveRoom

> FileOperationWrapper unarchiveRoom(id, ArchiveRoomRequest)

`PUT /api/2.0/files/rooms/{id}/unarchive`

Unarchive a room

Queues a background job that moves one room from the Archive section back to the Rooms section, and returns the operation record of that job. The room becomes writable again with the membership, tags, logo and links it had before, while the pinned state of its members is not restored and has to be set again with `PUT api/2.0/files/rooms/{id}/pin`. The caller must be a manager of the room; a member who was only invited to it is refused, a room template is answered as missing, and a room that was never archived simply stays where it is. The room is not moved when the response arrives: poll `GET api/2.0/files/fileops` until `finished` is true, and expect a room that is still archived until then. `deleteAfter` decides only how long the finished record survives. Calling the operation twice in a row does not corrupt the room, and a deleted or unknown room id is reported as missing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to move, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **ArchiveRoomRequest** | body | [**ArchiveRoomRequest**](../models/archive-room-request.md) | The body of the request. It carries only the lifetime of the job record, so an empty object is a normal request. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued unarchive operation to poll | [**FileOperationWrapper**](../models/file-operation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationWrapper**](../models/file-operation-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
