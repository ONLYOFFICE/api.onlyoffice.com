# unarchiveRoom

Referenced types are defined in the [full reference](../files.md).

> FileOperationWrapper unarchiveRoom(id, ArchiveRoomRequest)

`PUT /api/2.0/files/rooms/{id}/unarchive`

Unarchive a room

Queues a background job that moves one room from the Archive section back to the Rooms section, and returns the operation record of that job. The room becomes writable again with the membership, tags, logo and links it had before, while the pinned state of its members is not restored and has to be set again with `PUT api/2.0/files/rooms/{id}/pin`. The caller must be a manager of the room; a member who was only invited to it is refused, a room template is answered as missing, and a room that was never archived simply stays where it is. The room is not moved when the response arrives: poll `GET api/2.0/files/fileops` until `finished` is true, and expect a room that is still archived until then. `deleteAfter` decides only how long the finished record survives. Calling the operation twice in a row does not corrupt the room, and a deleted or unknown room id is reported as missing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to move, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `1`] |
| **ArchiveRoomRequest** | body | [**ArchiveRoomRequest**](../files.md#model-archiveroomrequest) | The body of the request. It carries only the lifetime of the job record, so an empty object is a normal request. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued unarchive operation to poll | [**FileOperationWrapper**](../files.md#model-fileoperationwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
