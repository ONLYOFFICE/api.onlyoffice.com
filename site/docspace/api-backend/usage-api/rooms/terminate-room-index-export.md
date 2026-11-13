# terminateRoomIndexExport

> terminateRoomIndexExport()

`DELETE /api/2.0/files/rooms/indexexport`

Terminate the room index export

Cancels the room index export job of the caller and deletes the job. Any signed-in user can call it. The call acts only on the caller's own job, so you cannot stop the job of another account. The call changes data. If the caller has no job, the call changes nothing, so you can repeat it. The cancellation is asynchronous. A job that is already saving the file may still finish. A spreadsheet saved before the cancellation stays in the My documents section of the caller. After this call, `GET api/2.0/files/rooms/indexexport` returns an empty body until a new export starts. The response has no body and does not say whether a job was running.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The export of the calling account was cancelled, if there was one | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
