# configureDeepLink

> TenantDeepLinkSettingsWrapper configureDeepLink(DeepLinkConfigurationRequestDto)

`POST /api/2.0/settings/deeplink`

Configure the deep link settings

Sets how mobile devices open portal links: in the browser, in the app, or by asking the user. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data. You can repeat it with the same body. It returns the saved settings. To read them without signing in, use `GET api/2.0/settings/deeplink`. If the mode is not a defined value, the call returns 400 and saves nothing.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **DeepLinkConfigurationRequestDto** | body | [**DeepLinkConfigurationRequestDto**](../../models/deep-link-configuration-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved deep link handling settings | [**TenantDeepLinkSettingsWrapper**](../../models/tenant-deep-link-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The handling mode is not one of the supported deep link handling values | - | - |
| **403** | The caller has no portal-settings right | - | - |
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
