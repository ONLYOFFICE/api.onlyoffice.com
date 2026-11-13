# startRoomIndexExport

> DocumentBuilderTaskWrapper startRoomIndexExport(id)

`POST /api/2.0/files/rooms/{id}/indexexport`

Start the room index export

Starts a background job that exports the index of a room to a spreadsheet, and returns the job. The room must have indexing turned on. Requires a DocSpace admin or the room role room manager in this room. Other callers get 403. It also returns 403 if the folder is not a room, the room is archived, or indexing is turned off. The call queues work. Each account has one export job. If an earlier job still runs, the call returns that job and starts nothing. So a repeated call during the export changes nothing. After the job ends, a new call replaces it with a new job, which saves another spreadsheet. Repeat `GET api/2.0/files/rooms/indexexport` until `isCompleted` is true. Then read `status` to tell success from failure or cancellation. The portal saves the spreadsheet in the My documents section of the caller, not in the room. The `resultFileId` and `resultFileUrl` fields of the job point to it. To cancel the job, use `DELETE api/2.0/files/rooms/indexexport`. If the room does not exist or is a room template, the call returns 404.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **id** | path | **Integer** (int32) | The room to act on, named by the identifier that `GET api/2.0/files/rooms` reports for it. Rooms kept in the portal itself use whole numbers, while a room backed by a connected third-party account uses the string form of the same listing. | [required] [example: `1`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The queued export job to poll | [**DocumentBuilderTaskWrapper**](../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller may not read the folder, the folder lies in the archive or is not a room with indexing turned on, or the caller is neither its room manager nor a portal administrator | - | - |
| **404** | The folder does not exist or lies in the room templates section | - | - |
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
