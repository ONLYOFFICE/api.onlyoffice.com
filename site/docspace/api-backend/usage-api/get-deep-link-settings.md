# getDeepLinkSettings

Referenced types are defined in the [full reference](../api.md).

> TenantDeepLinkSettingsWrapper getDeepLinkSettings()

`GET /api/2.0/settings/deeplink`

Get the deep link settings

Returns how the portal currently responds when a client opens a DocSpace link on a mobile device: always in the browser, always in the native app, or asking the user to choose. No permission is required; anonymous callers can read it too. This is a read-only, idempotent call. The response supports conditional requests: send the standard If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty instead of resending the settings. Change the mode with `POST api/2.0/settings/deeplink`, which requires the EditPortalSettings permission.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Current deep link handling settings | [**TenantDeepLinkSettingsWrapper**](../api.md#model-tenantdeeplinksettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantDeepLinkSettingsWrapper**](../api.md#model-tenantdeeplinksettingswrapper)

## Authorization

[cookieAuth](../api.md#cookieauth), [bearerAuth](../api.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
