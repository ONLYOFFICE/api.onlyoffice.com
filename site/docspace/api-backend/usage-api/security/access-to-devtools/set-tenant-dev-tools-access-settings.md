# setTenantDevToolsAccessSettings

> TenantDevToolsAccessSettingsWrapper setTenantDevToolsAccessSettings(TenantDevToolsAccessSettingsRequestDto)

`POST /api/2.0/settings/devtoolsaccess`

Set the Developer Tools access settings

Sets whether the portal blocks the developer tools for the user type `user`. The tools are API keys, OAuth apps, and webhooks. Room admins and DocSpace admins keep access. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data. You can repeat it with the same body. The change applies to all users immediately. It returns the saved setting.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantDevToolsAccessSettingsRequestDto** | body | [**TenantDevToolsAccessSettingsRequestDto**](../../models/tenant-dev-tools-access-settings-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved developer tools access restriction for the `User` role | [**TenantDevToolsAccessSettingsWrapper**](../../models/tenant-dev-tools-access-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller has no portal-settings right | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantDevToolsAccessSettingsWrapper**](../../models/tenant-dev-tools-access-settings-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
