# getRoomIndexExport

> DocumentBuilderTaskWrapper getRoomIndexExport()

`GET /api/2.0/files/rooms/indexexport`

Get the room index export

Returns the room index export job of the caller, started with `POST api/2.0/files/rooms/{id}/indexexport`. Each account has at most one job, whatever room it exports. Any signed-in user can call it. The call is read-only. This is the call to poll. Repeat it until `isCompleted` is true. The `isCompleted` field is also true for a failed or cancelled job. So read `status` for the result and `error` for the message. The `percentage` field changes in large steps and does not show the remaining time. After a successful export, `resultFileId`, `resultFileName`, and `resultFileUrl` point to the spreadsheet in the My documents section of the caller. If the account has no job or cancelled it, the response body is null. The job stays after completion until the next export replaces it.

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
