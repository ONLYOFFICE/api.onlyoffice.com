# setTenantBannerSettings

Referenced types are defined in the [full reference](../api.md).

> TenantBannerSettingsWrapper setTenantBannerSettings(TenantBannerSettingsDto)

`POST /api/2.0/settings/banner`

Set the banners visibility

Sets whether the portal's promotional banners are hidden for every user. Available only on an Enterprise license; every other plan is refused regardless of the caller's role. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). The flag only takes effect on a Standalone (self-hosted) installation; on SaaS, banners are always shown no matter what is saved here. This is a mutating, idempotent, portal-wide call: it applies to every user on the tenant immediately. It returns the saved setting; read the current value at any time from `GET api/2.0/settings/banner`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantBannerSettingsDto** | body | [**TenantBannerSettingsDto**](../api.md#model-tenantbannersettingsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved promotional banners visibility setting | [**TenantBannerSettingsWrapper**](../api.md#model-tenantbannersettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantBannerSettingsWrapper**](../api.md#model-tenantbannersettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## SecurityCSPApi
