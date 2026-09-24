# unlinkTelegram

> BooleanWrapper unlinkTelegram()

`DELETE /api/2.0/settings/telegram/link`

Unlink Telegram

Removes the link between the current user's account and the portal's Telegram bot, so that this user stops receiving notifications in Telegram. Any authenticated user may call it, and only for their own account: one member cannot unlink another. Nothing has to be linked beforehand, and the call is destructive but idempotent, returning `true` both when a link was removed and when there was none to remove, so a retry after a timeout is safe. Only the portal-side link is dropped: the chat itself stays in the user's Telegram, and the portal's bot configuration is untouched, so the other members keep their own links. Re-linking is not automatic, request a new link with `GET api/2.0/settings/telegram/link` and confirm the result with `GET api/2.0/settings/telegram/check`. Delivery over the other notification channels is unaffected; the channels enabled for the portal are listed by `GET api/2.0/settings/notification/channels`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Always `true` once the caller has no link to the Telegram bot | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
