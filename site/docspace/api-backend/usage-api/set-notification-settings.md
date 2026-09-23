# setNotificationSettings

Referenced types are defined in the [full reference](../api.md).

> NotificationSettingsWrapper setNotificationSettings(NotificationSettingsRequestsDto)

`POST /api/2.0/settings/notification`

Set notification status

Switches one kind of notification on or off for the calling user: send the kind as `type` - 0 the new-item badges, 1 the room activity letters, 2 the daily feed digest, 3 the periodic tips letters - together with `isEnabled`. The change touches the caller's own account only, and repeating the call with the same pair leaves the account as it is. Every signed-in member configures its own settings: the portal owner, a DocSpace administrator, a room administrator, a user and a guest are all accepted, and no permission is demanded. With 0 switched off the Files responses report `new` as 0 and mark files as muted; with 1 switched off both the hourly room digest and the letters a room sends at once, such as an editor mention, stop; with 2 switched off the daily digest stops; with 3 switched off the tips letters stop. What comes back is an echo of the request rather than a re-read of the stored state, and a `type` outside 0-3 is echoed as well while nothing is stored, so confirm the result with `GET api/2.0/settings/notification/{type}`. To silence a single room instead of a whole kind use `POST api/2.0/settings/notification/rooms`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **NotificationSettingsRequestsDto** | body | [**NotificationSettingsRequestsDto**](../api.md#model-notificationsettingsrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The notification kind and state as they were sent in the request | [**NotificationSettingsWrapper**](../api.md#model-notificationsettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**NotificationSettingsWrapper**](../api.md#model-notificationsettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
