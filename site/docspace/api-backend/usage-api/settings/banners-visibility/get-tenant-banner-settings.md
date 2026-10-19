# getTenantBannerSettings

> TenantBannerSettingsWrapper getTenantBannerSettings()

`GET /api/2.0/settings/banner`

Get the banners visibility

Returns whether the portal's promotional banners are currently hidden from every user's interface. Requires an authenticated session; every role can read it, since the flag affects what they see regardless of their own permissions. This is a read-only, idempotent call. The flag only takes effect on a Standalone (self-hosted) installation; on SaaS, banners are always shown no matter what is saved here. Change the setting with `POST api/2.0/settings/banner`, which additionally requires an Enterprise license.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the portal's promotional banners are currently hidden | [**TenantBannerSettingsWrapper**](../../models/tenant-banner-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantBannerSettingsWrapper**](../../models/tenant-banner-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
