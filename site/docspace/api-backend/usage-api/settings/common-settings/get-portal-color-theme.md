# getPortalColorTheme

> CustomColorThemesSettingsWrapper getPortalColorTheme()

`GET /api/2.0/settings/colortheme`

Get a color theme

Returns the color themes of the portal, the selected theme, and the limit on their number. Anyone can call it without signing in, even when the portal is unpaid, suspended, or blocked. The call is read-only. It supports `If-Modified-Since` with the `Last-Modified` value of the last answer. If nothing changed, it returns 304 with an empty body.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Current color theme configuration: saved themes, selected theme, and plan limit | [**CustomColorThemesSettingsWrapper**](../../models/custom-color-themes-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **304** | The color theme configuration has not changed since the `Last-Modified` value sent back in `If-Modified-Since`; the body is empty | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CustomColorThemesSettingsWrapper**](../../models/custom-color-themes-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
