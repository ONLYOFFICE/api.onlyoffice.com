# checkTelegram

> TelegramStatusWrapper checkTelegram()

`GET /api/2.0/settings/telegram/check`

Check the Telegram connection

Returns whether the current user's account is linked to the portal's Telegram bot. Linking needs a bot that `POST api/2.0/settings/authservice` configures for the portal. Any signed-in user can call it, including a guest. The call is read-only and covers only the caller's own account. The `status` field is `unlinked`, `linked`, or `linking`. The value `linking` means the user got a registration link but has not opened it in Telegram yet. This state ends when the user opens the link or the link expires. The `username` field is filled only when `status` is `linked`. To start linking, use `GET api/2.0/settings/telegram/link`. To remove a link, use `DELETE api/2.0/settings/telegram/link`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The current user's Telegram link state, with the username filled in only when linked | [**TelegramStatusWrapper**](../../models/telegram-status-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TelegramStatusWrapper**](../../models/telegram-status-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
