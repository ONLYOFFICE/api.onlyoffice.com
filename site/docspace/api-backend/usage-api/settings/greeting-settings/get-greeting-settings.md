# getGreetingSettings

> StringWrapper getGreetingSettings()

`GET /api/2.0/settings/greetingsettings`

Get greeting settings

Returns the greeting title of the current portal as a plain string. The portal shows it as the welcome heading on the sign-in page and keeps it as the portal name. Any signed-in user can call it, including a guest. The call is read-only. The answer is never empty. If the portal has no title, the call returns the built-in default caption in the language of the caller. So the answer cannot tell a saved title from the default one. To check that, use `GET api/2.0/settings/greetingsettings/isdefault`. The `greetingSettings` field of `GET api/2.0/settings` has the same string. The title is not the portal address or the white-label logo text. To read the logo text, use `GET api/2.0/settings/whitelabel/logotext`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The greeting title of the portal, or the localized default caption when the portal has no title of its own | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
