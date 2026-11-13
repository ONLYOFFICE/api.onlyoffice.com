# setRoomsNotificationStatus

> RoomsNotificationSettingsWrapper setRoomsNotificationStatus(RoomsNotificationsSettingsRequestDto)

`POST /api/2.0/settings/notification/rooms`

Mute or unmute a room

Mutes or unmutes one room for the calling user. Set `mute` to true to mute the room, or to false to unmute it. Any signed-in user can call it, including a guest. It changes data only in the caller's own list. One call changes one room. A repeated call with the same body changes nothing. Name the room in `roomsId`, as a numeric portal room ID or a string ID of a third-party room. The call checks neither that the room exists nor that the caller can access it. So it stores a mistyped ID as sent. For a muted room, the portal leaves its activity out of the hourly room digest and the daily feed. It also skips that room's immediate letters. The Files responses hide its new-item counters. They stop offering the `mute` action on rooms when badges, room activity, and the daily feed are all off. This call still works then. It returns the whole updated list, like `GET api/2.0/settings/notification/rooms`.

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
