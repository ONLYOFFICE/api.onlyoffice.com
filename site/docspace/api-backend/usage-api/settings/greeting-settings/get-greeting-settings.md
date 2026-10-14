# getGreetingSettings

> StringWrapper getGreetingSettings()

`GET /api/2.0/settings/greetingsettings`

Get greeting settings

Returns the greeting title of the current portal - the caption shown as the welcome heading on the sign-in page, kept as the portal name. Any authenticated user may call it and no administrative right is needed; the call is read-only. The title comes back as a bare string and is never empty: when the portal has no title of its own, the built-in default caption is returned instead, localized to the caller's language. Because of that fallback this operation cannot tell a saved title from the default one - call `GET api/2.0/settings/greetingsettings/isdefault` when that distinction matters. The same string is part of the portal settings answer as the `greetingSettings` field of `GET api/2.0/settings`, so a client that already reads the settings needs no separate call. The value is a caption only: it is neither the portal address nor the white-label logo text of the header, which is returned by `GET api/2.0/settings/whitelabel/logotext`.

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
