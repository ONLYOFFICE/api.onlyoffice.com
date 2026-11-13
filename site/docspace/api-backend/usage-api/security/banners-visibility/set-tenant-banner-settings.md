# setTenantBannerSettings

> TenantBannerSettingsWrapper setTenantBannerSettings(TenantBannerSettingsRequestDto)

`POST /api/2.0/settings/banner`

Set the banners visibility

Sets whether the portal hides its promotional banners from all users. The flag works only on a Standalone installation, and SaaS portals always show the banners. If the installation has no Enterprise license, the call returns 402. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data. You can repeat it with the same body. It returns the saved setting.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantBannerSettingsRequestDto** | body | [**TenantBannerSettingsRequestDto**](../../models/tenant-banner-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved promotional banners visibility setting | [**TenantBannerSettingsWrapper**](../../models/tenant-banner-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal is not an Enterprise installation | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantBannerSettingsWrapper**](../../models/tenant-banner-settings-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
