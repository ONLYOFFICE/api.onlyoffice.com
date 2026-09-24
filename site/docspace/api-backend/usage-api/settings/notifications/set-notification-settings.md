# setNotificationSettings

> NotificationSettingsWrapper setNotificationSettings(NotificationSettingsRequestsDto)

`POST /api/2.0/settings/notification`

Set notification status

Switches one kind of notification on or off for the calling user: send the kind as `type` - 0 the new-item badges, 1 the room activity letters, 2 the daily feed digest, 3 the periodic tips letters - together with `isEnabled`. The change touches the caller's own account only, and repeating the call with the same pair leaves the account as it is. Every signed-in member configures its own settings: the portal owner, a DocSpace administrator, a room administrator, a user and a guest are all accepted, and no permission is demanded. With 0 switched off the Files responses report `new` as 0 and mark files as muted; with 1 switched off both the hourly room digest and the letters a room sends at once, such as an editor mention, stop; with 2 switched off the daily digest stops; with 3 switched off the tips letters stop. What comes back is an echo of the request rather than a re-read of the stored state, and a `type` outside 0-3 is echoed as well while nothing is stored, so confirm the result with `GET api/2.0/settings/notification/{type}`. To silence a single room instead of a whole kind use `POST api/2.0/settings/notification/rooms`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **NotificationSettingsRequestsDto** | body | [**NotificationSettingsRequestsDto**](../../models/notification-settings-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The notification kind and state as they were sent in the request | [**NotificationSettingsWrapper**](../../models/notification-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**NotificationSettingsWrapper**](../../models/notification-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
