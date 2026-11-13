# getRoomsNotificationSettings

> RoomsNotificationSettingsWrapper getRoomsNotificationSettings()

`GET /api/2.0/settings/notification/rooms`

Get muted rooms

Returns the IDs of the rooms the calling user has muted, as `disabledRooms`. Any signed-in user can call it, including a guest. The call is read-only and reads only the caller's own list. An empty list means no room is muted. The list is in the order the rooms were added, without paging. It holds the IDs as `POST api/2.0/settings/notification/rooms` stored them. So it can hold numeric portal room IDs and string IDs of third-party rooms. An ID stays in the list after its room is deleted. For a muted room, the portal leaves its activity out of the hourly room digest and the daily feed. It also skips that room's immediate letters. The Files responses hide its new-item counters. Muting a room changes nothing for its other members. To turn whole kinds of notification on or off, use `POST api/2.0/settings/notification`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The identifiers of the rooms the calling user has silenced | [**RoomsNotificationSettingsWrapper**](../../models/rooms-notification-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomsNotificationSettingsWrapper**](../../models/rooms-notification-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
