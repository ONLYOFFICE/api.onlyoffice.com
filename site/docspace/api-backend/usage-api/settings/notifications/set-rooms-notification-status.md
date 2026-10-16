# setRoomsNotificationStatus

> RoomsNotificationSettingsWrapper setRoomsNotificationStatus(RoomsNotificationsSettingsRequestDto)

`POST /api/2.0/settings/notification/rooms`

Mute or unmute a room

Adds one room to the calling user's silenced list or takes it off again: `mute` true silences the room, false lets its notifications through. One call carries one room, so several rooms take several calls, and repeating a call with the same pair changes nothing. The room is named by `roomsId` and kept as an opaque value: the numeric identifier of a portal room and the string identifier of a room on a connected third-party account are both accepted, and neither the room's existence nor the caller's access to it is checked, so a mistyped identifier is stored as sent. Every signed-in member manages its own list, whatever its role, and the list of another member cannot be touched. While a room is silenced its activity is left out of the hourly room digest and of the daily feed, the letters it would send at once are not sent, and its new-item counters are hidden. The Files responses stop offering the `mute` action on a room once badges, room activity and the daily feed are all switched off, while this call keeps working. What comes back is the whole updated list, the same shape `GET api/2.0/settings/notification/rooms` returns.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **RoomsNotificationsSettingsRequestDto** | body | [**RoomsNotificationsSettingsRequestDto**](../../models/rooms-notifications-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The identifiers of the rooms the calling user has silenced, as the list stands after the change | [**RoomsNotificationSettingsWrapper**](../../models/rooms-notification-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**RoomsNotificationSettingsWrapper**](../../models/rooms-notification-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
