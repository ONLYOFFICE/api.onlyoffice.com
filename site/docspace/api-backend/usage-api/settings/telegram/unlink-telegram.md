# unlinkTelegram

> BooleanWrapper unlinkTelegram()

`DELETE /api/2.0/settings/telegram/link`

Unlink Telegram

Deletes the link between the current user's account and the portal's Telegram bot. After this call, the portal no longer sends the user notifications in Telegram. Any signed-in user can call it, including a guest. The call deletes only the caller's own link, and other members keep theirs. The call changes data, and you can repeat it. It returns `true` both when it deleted a link and when there was none. The chat stays in the user's Telegram. The bot settings of the portal and the other notification channels do not change. To list the channels of the portal, use `GET api/2.0/settings/notification/channels`. To link the account again, use `GET api/2.0/settings/telegram/link`.

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
