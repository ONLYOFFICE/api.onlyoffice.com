# setTenantQuotaSettings

Referenced types are defined in the [full reference](../api.md).

> TenantQuotaSettingsWrapper setTenantQuotaSettings(TenantQuotaSettingsRequestsDto)

`PUT /api/2.0/settings/tenantquotasettings`

Save the tenant quota settings

Sets or removes the storage quota for a given tenant. Available only on a Standalone (self-hosted) installation; on SaaS the call is always refused. Requires a DocSpace administrator, and the portal's plan must include the statistics feature or the call is rejected as not covered by the plan. Pass a non-negative `quota` in bytes to enable the limit for the tenant identified by `tenantId`, or a negative value to remove any limit. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It returns the saved quota settings for that tenant, not its current usage.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantQuotaSettingsRequestsDto** | body | [**TenantQuotaSettingsRequestsDto**](../api.md#model-tenantquotasettingsrequestsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved tenant storage quota settings | [**TenantQuotaSettingsWrapper**](../api.md#model-tenantquotasettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **402** | The portal's pricing plan does not include the statistics feature required for tenant quotas | - | - |
| **405** | The caller is not a DocSpace administrator, or the portal is not a Standalone installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantQuotaSettingsWrapper**](../api.md#model-tenantquotasettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## SettingsRebrandingApi
