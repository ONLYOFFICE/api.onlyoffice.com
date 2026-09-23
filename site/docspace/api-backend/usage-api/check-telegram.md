# checkTelegram

Referenced types are defined in the [full reference](../api.md).

> TelegramStatusWrapper checkTelegram()

`GET /api/2.0/settings/telegram/check`

Check the Telegram connection

Reports whether the current user's account is linked to the portal's Telegram bot, and under which Telegram username. The bot keys must be configured for the portal beforehand with `POST api/2.0/settings/authservice`; until a bot is configured, linking cannot be completed and the status never reaches the linked state. Any authenticated user may call it, and only for their own account: there is no way to read another member's Telegram status. This is a read-only, idempotent call. The returned `status` is published as a number, where `0` means the account is not linked, `1` means it is linked, and `2` means a registration link has been issued and the portal is still waiting for the user to open it in Telegram. The `username` field is filled in only in state `1` and comes back empty in the other two. Start or resume linking with `GET api/2.0/settings/telegram/link`, and drop an established link with `DELETE api/2.0/settings/telegram/link`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The current user's Telegram link state, with the username filled in only when linked | [**TelegramStatusWrapper**](../api.md#model-telegramstatuswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TelegramStatusWrapper**](../api.md#model-telegramstatuswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
