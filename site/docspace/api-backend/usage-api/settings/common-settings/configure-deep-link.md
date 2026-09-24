# configureDeepLink

> TenantDeepLinkSettingsWrapper configureDeepLink(DeepLinkConfigurationRequestsDto)

`POST /api/2.0/settings/deeplink`

Configure the deep link settings

Sets how the portal responds when a client opens a DocSpace link on a mobile device: always in the browser, always in the native app, or asking the user to choose each time. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). The handling mode must be one of the documented enum values; anything else is rejected without being saved. This is a mutating, idempotent call: sending the same mode again leaves the setting unchanged. It returns the saved deep link settings, including the timestamp of the last change; read the current value at any time, including anonymously, from `GET api/2.0/settings/deeplink`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DeepLinkConfigurationRequestsDto** | body | [**DeepLinkConfigurationRequestsDto**](../../models/deep-link-configuration-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved deep link handling settings | [**TenantDeepLinkSettingsWrapper**](../../models/tenant-deep-link-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The handling mode is not one of the supported deep link handling values | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantDeepLinkSettingsWrapper**](../../models/tenant-deep-link-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
