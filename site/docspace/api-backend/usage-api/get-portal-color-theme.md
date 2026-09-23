# getPortalColorTheme

Referenced types are defined in the [full reference](../api.md).

> CustomColorThemesSettingsWrapper getPortalColorTheme()

`GET /api/2.0/settings/colortheme`

Get a color theme

Returns the portal's color theme configuration: every saved custom theme, which one is currently selected, and how many custom themes the plan still allows. No permission is required; anonymous callers can read it too. This is a read-only, idempotent call. The response supports conditional requests: send the standard If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty instead of resending the same settings. A `limit` of `0` means the plan does not cap the number of custom themes.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Current color theme configuration: saved themes, selected theme, and plan limit | [**CustomColorThemesSettingsWrapper**](../api.md#model-customcolorthemessettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CustomColorThemesSettingsWrapper**](../api.md#model-customcolorthemessettingswrapper)

## Authorization

[cookieAuth](../api.md#cookieauth), [bearerAuth](../api.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
