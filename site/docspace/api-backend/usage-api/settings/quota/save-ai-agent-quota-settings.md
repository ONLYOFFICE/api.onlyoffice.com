# saveAiAgentQuotaSettings

> EntityQuotaSettingsWrapper saveAiAgentQuotaSettings(QuotaSettingsRequestDto)

`POST /api/2.0/settings/aiagentquotasettings`

Save the AI Agent quota settings

Sets the default storage quota for AI agents of the portal, the starting limit of each new agent. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. If the plan of a SaaS portal lacks the statistics feature, the call returns 402. The call changes data. You can repeat it with the same body. If `enableQuota` is false, the portal does not apply the size to new agents. A zero or negative size saves 0. It returns the saved settings, not the usage of agents. The call returns 403 if `defaultQuota` is not a JSON number.

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
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**EntityQuotaSettingsWrapper**](../../models/entity-quota-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
