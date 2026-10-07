# saveAiAgentQuotaSettings

> EntityQuotaSettingsWrapper saveAiAgentQuotaSettings(QuotaSettingsRequestDto)

`POST /api/2.0/settings/aiagentquotasettings`

Save the AI Agent quota settings

Sets the portal's default storage quota for AI agents, applied as the starting limit for newly created agents. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission), and on a paid SaaS tenant the portal's plan must include the statistics feature, or the call is rejected as not covered by the plan. The requested size cannot exceed the portal's own total storage quota, nor, on a Standalone install with a portal-wide quota enabled, that quota's size. Disable enforcement by passing `enableQuota=false`; the size is then ignored for new agents. This is a mutating, idempotent call: sending the same body again leaves the quota unchanged. It returns the saved settings, not any agent's current usage.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **QuotaSettingsRequestDto** | body | [**QuotaSettingsRequestDto**](../../models/quota-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved default AI agent storage quota settings | [**EntityQuotaSettingsWrapper**](../../models/entity-quota-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `defaultQuota` | - | - |
| **402** | The portal's pricing plan does not include the statistics feature required for AI agent quotas | - | - |
| **403** | The caller has no portal-settings right, or `defaultQuota` is not a JSON number | - | - |
| **500** | The `defaultQuota` is not a whole number within the 64-bit range, or exceeds the portal's total storage quota or, on a Standalone installation with a portal-wide quota enabled, that quota | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EntityQuotaSettingsWrapper**](../../models/entity-quota-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
