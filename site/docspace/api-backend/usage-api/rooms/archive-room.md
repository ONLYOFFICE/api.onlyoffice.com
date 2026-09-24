# archiveRoom

> FileOperationWrapper archiveRoom(id, ArchiveRoomRequest)

`PUT /api/2.0/files/rooms/{id}/archive`

Archive a room

Queues a background job that moves one room from the Rooms section to the Archive section, and returns the operation record of that job. An archived room stays readable to its members and becomes read only: files cannot be created, renamed or edited in it, and its settings, tags, logo and links can no longer be changed, which is why many other room operations answer an archived room with a refusal. The caller must be a manager of the room; administrators of the portal cannot archive a room they were not invited to, and a room template cannot be archived at all and is answered as missing. The room is not archived when the response arrives: poll `GET api/2.0/files/fileops` until `finished` is true. Archiving an already archived room is harmless. `deleteAfter` decides only how long the finished record survives, not what happens to the room. Use `PUT api/2.0/files/rooms/{id}/unarchive` to bring the room back.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to move, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **ArchiveRoomRequest** | body | [**ArchiveRoomRequest**](../models/archive-room-request.md) | The body of the request. It carries only the lifetime of the job record, so an empty object is a normal request. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued archive operation to poll | [**FileOperationWrapper**](../models/file-operation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
