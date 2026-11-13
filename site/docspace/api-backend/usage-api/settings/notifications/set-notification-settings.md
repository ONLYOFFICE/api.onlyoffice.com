# setNotificationSettings

> NotificationSettingsWrapper setNotificationSettings(NotificationSettingsRequestDto)

`POST /api/2.0/settings/notification`

Set notification status

Turns one kind of notification on or off for the calling user. Kinds 0 and 1 of `type` are the new-item badges and the room activity letters. Kinds 2 and 3 are the daily feed digest and the tips letters. Any signed-in user can call it, including a guest. It changes data only in the caller's own settings. You can repeat it with the same body. With badges off, the Files responses show `new` as 0 and mark files as muted. With room activity off, the hourly room digest and immediate room letters, such as mentions, stop. Turning off kind 2 or 3 stops the daily digest or the tips letters. The call returns the request as sent, not the stored state. If `type` is not one of these kinds, the call stores nothing but still returns it. So check the result with `GET api/2.0/settings/notification/{type}`. The call returns 400 if the body cannot be read or has no `type`. To mute a single room, use `POST api/2.0/settings/notification/rooms`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **NotificationSettingsRequestDto** | body | [**NotificationSettingsRequestDto**](../../models/notification-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The notification kind and state as they were sent in the request | [**NotificationSettingsWrapper**](../../models/notification-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `type` | - | - |
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

- **Content-Type**: application/json
- **Accept**: application/json
