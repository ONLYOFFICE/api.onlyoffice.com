# linkTelegram

Referenced types are defined in the [full reference](../api.md).

> StringWrapper linkTelegram()

`GET /api/2.0/settings/telegram/link`

Get the Telegram link

Returns the personal `t.me` deep link that connects the current user's account to the portal's Telegram bot, so that notifications can be delivered to that user in Telegram. The bot keys must be configured for the portal beforehand with `POST api/2.0/settings/authservice`; without a configured bot name the response comes back empty. Any authenticated user may call it, and the link always belongs to the caller's own account. The call mutates state: unless the user still has an outstanding registration token it issues a fresh one, so calling it twice in a row hands back the same link instead of invalidating the first. That token is short-lived (20 minutes with the default configuration), and once it has expired the operation has to be called again for a new link. Linking itself is completed in Telegram, not here, so poll `GET api/2.0/settings/telegram/check` until its `status` becomes `1`. Remove an established link with `DELETE api/2.0/settings/telegram/link`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | A `t.me` deep link that connects the caller's account to the portal's Telegram bot | [**StringWrapper**](../api.md#model-stringwrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../api.md#model-stringwrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
