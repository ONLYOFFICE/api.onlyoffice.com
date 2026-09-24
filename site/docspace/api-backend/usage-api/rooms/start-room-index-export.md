# startRoomIndexExport

> DocumentBuilderTaskWrapper startRoomIndexExport(id)

`POST /api/2.0/files/rooms/{id}/indexexport`

Start the room index export

Queues a background job that builds the index of a virtual data room as a spreadsheet, and answers with the job record to poll. The room has to be a virtual data room with indexing switched on, and the caller has to be its manager or a portal administrator; any other kind of room, a room template, and a member invited with a lower access level are refused, while an unknown room is answered as missing. There is one job per account: starting an export while an earlier one is still running answers with that earlier record instead of queuing a second job, and a finished record is replaced by the new one. Poll `GET api/2.0/files/rooms/indexexport` until `isCompleted` is true, then read `status` to tell a completed job from a failed or cancelled one, and take `resultFileId` and `resultFileUrl` from the same record. The report is saved as a spreadsheet in the My documents section of the caller, not in the room. Cancel a running job with `DELETE api/2.0/files/rooms/indexexport`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued export job to poll | [**DocumentBuilderTaskWrapper**](../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **501** | Folder indexing is turned off | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocumentBuilderTaskWrapper**](../models/document-builder-task-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
