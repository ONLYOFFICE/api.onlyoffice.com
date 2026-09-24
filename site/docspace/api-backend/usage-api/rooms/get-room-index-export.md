# getRoomIndexExport

> DocumentBuilderTaskWrapper getRoomIndexExport()

`GET /api/2.0/files/rooms/indexexport`

Get the room index export

Returns the state of the index export of the calling account, the job started by `POST api/2.0/files/rooms/{id}/indexexport`. The record is not addressed by room: there is at most one per account, and the answer describes the latest export whichever room it was started for. When the account has never started one, or its record was cancelled, the body is null rather than an error, so null is the normal way of saying that there is nothing to report. While the job runs, `percentage` moves in coarse steps instead of smoothly, which makes it a rough hint rather than a measure of the remaining time; `isCompleted` is the field to wait on, and it is also set for a job that failed or was cancelled, so read `status` to tell the outcomes apart and `error` for the message. After a successful build, `resultFileId`, `resultFileName` and `resultFileUrl` point to the spreadsheet saved in the My documents section of the caller. The record survives completion and is replaced only by the next export.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the export, or null when the account has none | [**DocumentBuilderTaskWrapper**](../models/document-builder-task-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**DocumentBuilderTaskWrapper**](../models/document-builder-task-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
