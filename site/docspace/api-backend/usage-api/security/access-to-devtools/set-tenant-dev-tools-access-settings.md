# setTenantDevToolsAccessSettings

> TenantDevToolsAccessSettingsWrapper setTenantDevToolsAccessSettings(TenantDevToolsAccessSettingsDto)

`POST /api/2.0/settings/devtoolsaccess`

Set the Developer Tools access settings

Sets whether the portal restricts the `User` role from using the developer tools (API keys, OAuth apps, webhooks); `RoomAdmin` and `DocSpaceAdmin` are never affected by this setting. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). This is a mutating, idempotent, portal-wide call: it applies to every `User` on the tenant immediately. It returns the saved setting; read the current value at any time from `GET api/2.0/settings/devtoolsaccess`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantDevToolsAccessSettingsDto** | body | [**TenantDevToolsAccessSettingsDto**](../../models/tenant-dev-tools-access-settings-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved developer tools access restriction for the `User` role | [**TenantDevToolsAccessSettingsWrapper**](../../models/tenant-dev-tools-access-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
