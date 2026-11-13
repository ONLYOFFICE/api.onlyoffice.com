# getRoomCreatingStatus

> RoomFromTemplateStatusWrapper getRoomCreatingStatus()

`GET /api/2.0/files/rooms/fromtemplate/status`

Get the room creation progress

Returns the progress of the job that `POST api/2.0/files/rooms/fromtemplate` started for your account. Any signed-in user can call it. The call shows only the job of your own account. The call is read-only. This is the call to poll. Repeat it until `isCompleted` is true. Then pass `roomId` to `GET api/2.0/files/rooms/{id}` to read the room. The record stays after the job ends, until you start the next job. The body is empty if your account has no record. It is also empty if the portal cannot read the job queue. So an empty body does not prove that no job was started.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The progress record of the caller room creation job, or an empty body when there is none | [**RoomFromTemplateStatusWrapper**](../models/room-from-template-status-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomFromTemplateStatusWrapper**](../models/room-from-template-status-wrapper.md)

## Authorization

[Basic](rooms.md#basic), [OAuth2](rooms.md#oauth2) (scopes: read, write), [ApiKeyBearer](rooms.md#apikeybearer), [asc_auth_key](rooms.md#asc_auth_key), [Bearer](rooms.md#bearer), [OpenId](rooms.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
