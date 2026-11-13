# getRoomTemplateCreatingStatus

> RoomTemplateStatusWrapper getRoomTemplateCreatingStatus()

`GET /api/2.0/files/roomtemplate/status`

Get room template creation status

Returns the state of the room template job that the caller started with `POST api/2.0/files/roomtemplate`. Any signed-in user can call it. The call is read-only and reports only the jobs of the caller. If the caller has started none, the call returns no status object. This is the call to poll. Repeat it until `isCompleted` is true, then read `templateId`. Use `isCompleted`, not `progress`, as the end signal. After the job ends, the call returns the same state until the caller starts another job.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The state of the caller's latest template creation, or an empty body when this account has started none | [**RoomTemplateStatusWrapper**](../models/room-template-status-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomTemplateStatusWrapper**](../models/room-template-status-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
