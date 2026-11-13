# linkTelegram

> StringWrapper linkTelegram()

`GET /api/2.0/settings/telegram/link`

Get the Telegram link

Returns the personal `t.me` link that connects the current user's account to the portal's Telegram bot. After linking, the portal can send the user notifications in Telegram. Linking needs a bot that `POST api/2.0/settings/authservice` configures for the portal. Without a bot name, the call returns an empty link. Any signed-in user can call it, including a guest. The call changes data. If the user has no valid registration token, it issues a new one. A repeated call returns the same link while the token is valid. The token expires in 20 minutes by default. After that, call this operation again for a new link. The user completes linking by opening the link in Telegram. Then poll `GET api/2.0/settings/telegram/check` until `status` is `linked`. To remove a link, use `DELETE api/2.0/settings/telegram/link`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A `t.me` deep link that connects the caller's account to the portal's Telegram bot | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
