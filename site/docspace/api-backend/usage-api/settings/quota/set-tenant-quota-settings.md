# setTenantQuotaSettings

> TenantQuotaSettingsWrapper setTenantQuotaSettings(TenantQuotaSettingsRequestDto)

`PUT /api/2.0/settings/tenantquotasettings`

Save the tenant quota settings

Sets or removes the storage quota of a portal on a Standalone installation. A `quota` of 0 or more turns the limit on with that size in bytes. A negative `quota` removes the limit. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. On SaaS, the call returns 402 if the plan lacks the statistics feature, and 415 otherwise. The call changes data. You can repeat it with the same body. It returns the saved quota settings of that portal, not its usage. If the body has no `tenantId`, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantQuotaSettingsRequestDto** | body | [**TenantQuotaSettingsRequestDto**](../../models/tenant-quota-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved tenant storage quota settings | [**TenantQuotaSettingsWrapper**](../../models/tenant-quota-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `tenantId` | - | - |
| **402** | The portal's pricing plan does not include the statistics feature required for tenant quotas | - | - |
| **403** | The caller has no portal-settings right | - | - |
| **415** | The caller is not a DocSpace administrator, or the portal is not a Standalone installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantQuotaSettingsWrapper**](../../models/tenant-quota-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
