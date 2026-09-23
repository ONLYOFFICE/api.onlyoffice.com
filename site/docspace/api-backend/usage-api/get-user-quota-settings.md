# getUserQuotaSettings

Referenced types are defined in the [full reference](../api.md).

> TenantUserQuotaSettingsWrapper getUserQuotaSettings()

`GET /api/2.0/settings/userquotasettings`

Get the user quota settings

Returns the portal's per-user default storage quota: whether it is enabled and, if so, its size in bytes. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); every other authenticated role, and an anonymous caller, is refused. This is a read-only, idempotent call. When `enableQuota` is false, the size value is not enforced and users get unlimited personal storage regardless of what it holds. The response supports conditional requests: send the standard If-Modified-Since header with the previous `lastModified` value, and an unchanged response comes back empty instead of resending the settings.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Current per-user default storage quota settings | [**TenantUserQuotaSettingsWrapper**](../api.md#model-tenantuserquotasettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantUserQuotaSettingsWrapper**](../api.md#model-tenantuserquotasettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
