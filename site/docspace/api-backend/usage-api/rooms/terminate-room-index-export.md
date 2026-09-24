# terminateRoomIndexExport

> terminateRoomIndexExport()

`DELETE /api/2.0/files/rooms/indexexport`

Terminate the room index export

Cancels the room index export of the calling account and drops its job record. No room is named because there is at most one export per account, so the call always acts on the caller's own job and never on somebody else's: an account with nothing running gets a successful answer that changes nothing, which makes the call safe to repeat and makes it useless as a way of stopping an export somebody else started. Afterwards `GET api/2.0/files/rooms/indexexport` answers with an empty body until a new export is started with `POST api/2.0/files/rooms/{id}/indexexport`. The cancellation is asynchronous: the background job stops at its next checkpoint, so one that is already saving the file may still finish, and a report that was written before the cancellation stays in the My documents section of the caller and has to be deleted as an ordinary file. The answer carries no body and says nothing about whether an export was running.

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
