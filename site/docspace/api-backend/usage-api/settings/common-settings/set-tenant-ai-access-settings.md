# setTenantAiAccessSettings

> TenantAiAccessSettingsWrapper setTenantAiAccessSettings(TenantAiAccessSettingsRequestDto)

`POST /api/2.0/settings/ai-access`

Set the AI access settings

Turns AI features on or off for the whole portal: chat, agents, and vectorization. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data. You can repeat it with the same body. Turning AI off hides the AI agents and AI rooms folders from all users. AI rooms and their files then return 403, and AI chat operations stop working. The call deletes nothing, so turning AI on again restores access. It returns the saved setting.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantAiAccessSettingsRequestDto** | body | [**TenantAiAccessSettingsRequestDto**](../../models/tenant-ai-access-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved AI access setting for the portal | [**TenantAiAccessSettingsWrapper**](../../models/tenant-ai-access-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, so the AI access setting cannot be changed | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantAiAccessSettingsWrapper**](../../models/tenant-ai-access-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
