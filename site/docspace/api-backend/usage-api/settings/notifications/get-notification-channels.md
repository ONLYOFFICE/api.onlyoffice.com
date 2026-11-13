# getNotificationChannels

> NotificationChannelStatusWrapper getNotificationChannels()

`GET /api/2.0/settings/notification/channels`

Get notification channels

Returns the channels this installation can use to deliver notifications, each with `isEnabled`. The channel names are `email.sender` for letters and `telegram.sender` for Telegram messages. The list describes the installation and the portal, so every user gets the same answer. Any signed-in user can call it, including a guest. The call is read-only. A channel appears only if the notification service configures a sender with that name. An empty list means the configuration names no channel this build supports. The call always reports `email.sender` as enabled when it is listed. It reports `telegram.sender` as enabled only while the portal stores a Telegram bot name and token. To store them, use `POST api/2.0/settings/authservice`. An enabled channel says nothing about the caller. To get Telegram messages, a user also connects their own Telegram account. To get the link, use `GET api/2.0/settings/telegram/link`. To check the result, use `GET api/2.0/settings/telegram/check`. To read which kinds of notification a user receives, use `GET api/2.0/settings/notification/{type}`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The notification channels this installation can deliver through, each with the flag that says whether it is enabled | [**NotificationChannelStatusWrapper**](../../models/notification-channel-status-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**NotificationChannelStatusWrapper**](../../models/notification-channel-status-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
