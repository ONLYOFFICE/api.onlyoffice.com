# getNotificationSettings

> NotificationSettingsWrapper getNotificationSettings(type)

`GET /api/2.0/settings/notification/{type}`

Check notification availability

Returns whether one kind of notification is turned on for the calling user. Set the kind in the route `type`. Kinds 0 and 1 are the new-item badges and the room activity letters. Kinds 2 and 3 are the daily feed digest and the tips letters. Any signed-in user can call it, including a guest. The call is read-only and reads only the caller's own settings. Badges are on by default. Kinds 1, 2, and 3 are off until `POST api/2.0/settings/notification` turns them on. The call returns 400 if `type` is not one of these kinds. To list the muted rooms, use `GET api/2.0/settings/notification/rooms`. To list the delivery channels, use `GET api/2.0/settings/notification/channels`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **type** | path | **NotificationType** | The kind of notification being asked about. A value outside the defined set fails the call rather than falling back to a default. | [required] [example: `0`] [enum: `0`, `1`, `2`, `3`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The notification kind that was asked for together with the flag that says whether it is switched on for the calling user | [**NotificationSettingsWrapper**](../../models/notification-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The `type` is not one of the notification kinds 0-3 | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**NotificationSettingsWrapper**](../../models/notification-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
