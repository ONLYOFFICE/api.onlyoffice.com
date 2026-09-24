# setTenantBannerSettings

> TenantBannerSettingsWrapper setTenantBannerSettings(TenantBannerSettingsDto)

`POST /api/2.0/settings/banner`

Set the banners visibility

Sets whether the portal's promotional banners are hidden for every user. Available only on an Enterprise license; every other plan is refused regardless of the caller's role. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). The flag only takes effect on a Standalone (self-hosted) installation; on SaaS, banners are always shown no matter what is saved here. This is a mutating, idempotent, portal-wide call: it applies to every user on the tenant immediately. It returns the saved setting; read the current value at any time from `GET api/2.0/settings/banner`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantBannerSettingsDto** | body | [**TenantBannerSettingsDto**](../../models/tenant-banner-settings-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved promotional banners visibility setting | [**TenantBannerSettingsWrapper**](../../models/tenant-banner-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
