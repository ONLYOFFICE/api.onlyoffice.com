# getTenantAiAccessSettings

> TenantAiAccessSettingsWrapper getTenantAiAccessSettings()

`GET /api/2.0/settings/ai-access`

Get the AI access settings

Returns whether AI functionality (chat, agents, vectorization) is currently available on the portal at all; AI is enabled by default. Requires an authenticated session; every role can read it. This is a read-only, idempotent call. When the setting is disabled, every AI-specific endpoint and folder is unavailable regardless of the caller's own permissions; this call only reports the portal-wide switch, not any per-user entitlement.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether AI functionality is currently enabled for the portal | [**TenantAiAccessSettingsWrapper**](../../models/tenant-ai-access-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantAiAccessSettingsWrapper**](../../models/tenant-ai-access-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
