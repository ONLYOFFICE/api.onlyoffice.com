# sendModuleEvent

> sendModuleEvent(x-Module-Key, SendModuleEventRequest)

`POST /api/2.0/portal/moduleevents`

Send a module event

Sends one event from an integration module to the open DocSpace pages of the request host's portal. Set exactly one addressee, `user` or `room`. With `user`, only that portal user's open sessions receive it. With `room`, everyone in the portal subscribed to `plugin-{module}-{room}` receives it. Browsers receive the socket event `plugin:{module}:{event}` with `{ message }`. The key, not the body, sets `{module}`. Anyone can call it without signing in, with the module key in the `X-Module-Key` header. A missing or unknown key returns 401. The installation administrator issues each key for a list of portals. A key not allowed for this portal returns 403. The call only queues the event for delivery and stores nothing. A user with no open session never sees the event. Each repeated call delivers the event again. If the portal's payment has lapsed, the call returns 402. If `user` names no active user of this portal, the call returns 404. The call returns 400 for a missing body, an invalid event or room name, or not exactly one addressee. A body over 64 KB returns 413.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **x-Module-Key** | header | **String** | The secret key the installation administrator issued to the module. It is not a user or portal credential: the module the event belongs to is the one this key is configured for, so the key is the module's identity. | [optional] [example: `mk_Q2hhdE1vZHVsZUtleTIwMjYtMTAtMjM`] |
| **SendModuleEventRequest** | body | [**SendModuleEventRequest**](../../models/send-module-event-request.md) | The event to deliver. | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The event was handed to the socket service for delivery | - | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The body is missing, the event or room name is invalid, or there is not exactly one addressee | - | - |
| **401** | The X-Module-Key header is missing or matches no configured module | - | - |
| **402** | The portal's payment has lapsed | - | - |
| **403** | The module key is not allowed for this portal | - | - |
| **404** | No active user of this portal has the given e-mail | - | - |
| **413** | The body is larger than 64 KB | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

null (empty response body)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
