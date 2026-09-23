# startRoomIndexExport

Referenced types are defined in the [full reference](../files.md).

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
| **200** | The queued export job to poll | [**DocumentBuilderTaskWrapper**](../files.md#model-documentbuildertaskwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **501** | Folder indexing is turned off | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../files.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocumentBuilderTaskWrapper**](../files.md#model-documentbuildertaskwrapper)

## Authorization

[Basic](../files.md#basic), [OAuth2](../files.md#oauth2) (scopes: read, write), [ApiKeyBearer](../files.md#apikeybearer), [asc_auth_key](../files.md#asc_auth_key), [Bearer](../files.md#bearer), [OpenId](../files.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
