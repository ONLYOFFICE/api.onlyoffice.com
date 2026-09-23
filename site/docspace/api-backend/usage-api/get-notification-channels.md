# getNotificationChannels

Referenced types are defined in the [full reference](../api.md).

> NotificationChannelStatusWrapper getNotificationChannels()

`GET /api/2.0/settings/notification/channels`

Get notification channels

Lists the ways this installation can deliver a notification, each as the internal name of the channel together with `isEnabled`: `email.sender` for letters and `telegram.sender` for Telegram messages. The list describes the installation and the portal rather than the calling user, so every member gets the same answer, and the call is read-only. Any signed-in member may ask for it, whatever its role, and no permission is demanded. A channel appears only when the notification service of the running installation is configured with a sender of that name, so the list can be shorter than the two names above, and an empty list means that configuration names no channel this build implements. `email.sender` is reported as enabled whenever it is listed, while `telegram.sender` is reported as enabled only while the portal has a Telegram bot name and token stored, which is what `POST api/2.0/settings/authservice` writes. An enabled channel says nothing about the caller: a member also has to connect their own Telegram account, for which `GET api/2.0/settings/telegram/link` hands out the link and `GET api/2.0/settings/telegram/check` reports the outcome. Which kinds of notification a member receives is a separate setting, read with `GET api/2.0/settings/notification/{type}`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The notification channels this installation can deliver through, each with the flag that says whether it is enabled | [**NotificationChannelStatusWrapper**](../api.md#model-notificationchannelstatuswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**NotificationChannelStatusWrapper**](../api.md#model-notificationchannelstatuswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
