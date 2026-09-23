# setTenantAiAccessSettings

Referenced types are defined in the [full reference](../api.md).

> TenantAiAccessSettingsWrapper setTenantAiAccessSettings(TenantAiAccessSettingsDto)

`POST /api/2.0/settings/ai-access`

Set the AI access settings

Turns AI functionality (chat, agents, vectorization) on or off for the whole portal; AI is enabled by default. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission); every other caller is refused. Disabling it immediately hides the AI Agents folder from root folder listings, makes AI status checks report disabled, and makes AI chat endpoints unreachable for every user on the tenant, not only the caller. This is a mutating, idempotent, portal-wide call, and the change is pushed to already-connected clients over the real-time notification hub rather than waiting for their next request. It returns the saved setting.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantAiAccessSettingsDto** | body | [**TenantAiAccessSettingsDto**](../api.md#model-tenantaiaccesssettingsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved AI access setting for the portal | [**TenantAiAccessSettingsWrapper**](../api.md#model-tenantaiaccesssettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator, so the AI access setting cannot be changed | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantAiAccessSettingsWrapper**](../api.md#model-tenantaiaccesssettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
