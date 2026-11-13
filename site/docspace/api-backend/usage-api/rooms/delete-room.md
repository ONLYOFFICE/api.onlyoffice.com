# deleteRoom

> FileOperationWrapper deleteRoom(id, DeleteRoomRequest)

`DELETE /api/2.0/files/rooms/{id}`

Remove a room

Starts a background job that deletes a room with all its contents, and returns the job record. The job does not move the room to Trash, so the deletion cannot be undone. An archived room is deleted the same way. Requires the right to delete the room. Other callers get 403. The call checks the right before it queues the job. The job checks it again, so read the `error` of the finished job. Repeat `GET api/2.0/files/fileops` until `finished` is true. You can also read the record by its `id`. The portal keeps the record until you read it once after the job ends. The job ignores `deleteAfter` in the body. If the room does not exist, the call returns 404. A repeat after the job ends also returns 404. A repeat while the job runs queues a second job. If a string `id` points to a storage account that is not connected, the call returns 400.  Raises the `room.deleted` webhook once the queued operation deletes the room. Raises the `agent.deleted` webhook instead when the room is an AI agent.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to delete, named by the identifier that `GET api/2.0/files/rooms` reports for it. | [required] [example: `10`] |
| **DeleteRoomRequest** | body | [**DeleteRoomRequest**](../models/delete-room-request.md) | The body of the request. It is required even though the deletion does not depend on what it holds. | [required] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued delete operation to poll | [**FileOperationWrapper**](../models/file-operation-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or a third-party identifier refers to a storage account that is not connected | - | - |
| **403** | The caller may not delete this room | - | - |
| **404** | The room does not exist, or the id is neither a 32-bit number nor a third-party identifier of a known storage type | - | - |
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
| **id** | path | **String** | The room to delete, named by the identifier that &#x60;GET api/2.0/files/rooms&#x60; reports for it. | [required] [example: `sbox-42`] |


## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
