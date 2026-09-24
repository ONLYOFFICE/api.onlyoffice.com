# getRoomCreatingStatus

> RoomFromTemplateStatusWrapper getRoomCreatingStatus()

`GET /api/2.0/files/rooms/fromtemplate/status`

Get the room creation progress

Returns the progress of the room-from-template job started by the calling account with `POST api/2.0/files/rooms/fromtemplate`. The record is private to the account that started the job: jobs of other members are never reported, and only one record is kept per account. The body is empty when the account has no such record, and it is also empty when the job queue cannot be read, so an empty answer is not proof that nothing was started. `progress` is a percentage, `isCompleted` marks the end of the job whether it succeeded or failed, `error` carries the failure message and is empty on success, and `roomId` is meaningful only once the room exists. The record survives the end of the job and is dropped when the next creation starts, so polling after completion keeps returning the same answer. Poll this operation until `isCompleted` is true and then read the room itself with `GET api/2.0/files/rooms/{id}`. The call changes nothing and is safe to repeat.

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
