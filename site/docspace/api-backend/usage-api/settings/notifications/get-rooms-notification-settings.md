# getRoomsNotificationSettings

> RoomsNotificationSettingsWrapper getRoomsNotificationSettings()

`GET /api/2.0/settings/notification/rooms`

Get muted rooms

Returns the rooms the calling user has silenced, as the `disabledRooms` list of their identifiers. The list describes the caller's own account only, the call is read-only, and an empty list means nothing is silenced. Every signed-in member reads its own list, whatever its role - owner, administrator, user or guest - and no permission is demanded. The identifiers come back the way `POST api/2.0/settings/notification/rooms` stored them, in the order they were added and without paging; they are kept as opaque values, so both the numeric identifier of a portal room and the string identifier of a room on a connected third-party account appear here, and an identifier stays in the list after the room itself is deleted. While a room is on this list its activity is left out of the hourly room digest and of the daily feed, the letters that room would send at once are not sent, and its new-item counters are hidden from the Files responses. Silencing a room changes nothing for its other members. The kinds of notification this list is applied to are switched with `POST api/2.0/settings/notification`.

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
