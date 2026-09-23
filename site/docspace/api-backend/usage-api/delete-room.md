# deleteRoom

Referenced types are defined in the [full reference](../files.md).

> FileOperationWrapper deleteRoom(id, DeleteRoomRequest)

`DELETE /api/2.0/files/rooms/{id}`

Remove a room

Queues a background job that deletes one room with everything inside it, and returns the operation record of that job. Deleting a room is destructive and has no trash step: the room and its files are gone once the job finishes, unlike a file or a folder, which is moved to the trash first. The right to delete is checked before the job is queued, so a caller who may not delete the room is refused straight away and an unknown room is answered as missing; the same checks run again when the job starts, which is why the `error` of the finished operation still has to be read. Poll `GET api/2.0/files/fileops` until `finished` is true, or read the returned record again by its `id`. The record is kept until it is read once, so one poll after completion still sees it. `deleteAfter` in the body is required by the contract but has no effect on the job. An archived room is deleted the same way, and a second delete of the same id reports that the room is missing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to delete, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `10`] |
| **DeleteRoomRequest** | body | [**DeleteRoomRequest**](../files.md#model-deleteroomrequest) | The body of the request. It is required even though the deletion does not depend on what it holds. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued delete operation to poll | [**FileOperationWrapper**](../files.md#model-fileoperationwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
