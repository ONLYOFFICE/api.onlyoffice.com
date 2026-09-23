# archiveRoom

Referenced types are defined in the [full reference](../files.md).

> FileOperationWrapper archiveRoom(id, ArchiveRoomRequest)

`PUT /api/2.0/files/rooms/{id}/archive`

Archive a room

Queues a background job that moves one room from the Rooms section to the Archive section, and returns the operation record of that job. An archived room stays readable to its members and becomes read only: files cannot be created, renamed or edited in it, and its settings, tags, logo and links can no longer be changed, which is why many other room operations answer an archived room with a refusal. The caller must be a manager of the room; administrators of the portal cannot archive a room they were not invited to, and a room template cannot be archived at all and is answered as missing. The room is not archived when the response arrives: poll `GET api/2.0/files/fileops` until `finished` is true. Archiving an already archived room is harmless. `deleteAfter` decides only how long the finished record survives, not what happens to the room. Use `PUT api/2.0/files/rooms/{id}/unarchive` to bring the room back.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to move, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **ArchiveRoomRequest** | body | [**ArchiveRoomRequest**](../files.md#model-archiveroomrequest) | The body of the request. It carries only the lifetime of the job record, so an empty object is a normal request. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued archive operation to poll | [**FileOperationWrapper**](../files.md#model-fileoperationwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**FileOperationWrapper**](../files.md#model-fileoperationwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
