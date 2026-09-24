# getNotificationSettings

> NotificationSettingsWrapper getNotificationSettings(type)

`GET /api/2.0/settings/notification/{type}`

Check notification availability

Reports whether one kind of notification is switched on for the calling user, taking the kind as the integer `type` in the route: 0 the new-item badges the Files responses carry, 1 the room activity letters, 2 the daily feed digest, 3 the periodic tips letters. The answer describes the caller's own account only - there is no way to read another member's settings - and the call is read-only and safe to repeat. Every signed-in member reads its own settings: the portal owner, a DocSpace administrator, a room administrator, a user and a guest are all accepted, and no permission is demanded. Badges come back switched on for an account that has not changed them, while the kinds 1, 2 and 3 come back switched off until they are switched on with `POST api/2.0/settings/notification`. What comes back is the kind that was asked for together with `isEnabled`. A `type` outside 0-3 is not recognised and the call fails instead of falling back to a default. The rooms silenced one by one are listed by `GET api/2.0/settings/notification/rooms`, and the delivery channels of the installation by `GET api/2.0/settings/notification/channels`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **type** | path | **NotificationType** | The kind of notification being asked about. A value outside the defined set fails the call rather than falling back to a default. | [required] [example: `0`] [enum: `0`, `1`, `2`, `3`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The notification kind that was asked for together with the flag that says whether it is switched on for the calling user | [**NotificationSettingsWrapper**](../../models/notification-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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

- **Content-Type**: Not defined
- **Accept**: application/json
