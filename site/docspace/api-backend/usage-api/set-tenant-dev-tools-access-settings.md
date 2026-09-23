# setTenantDevToolsAccessSettings

Referenced types are defined in the [full reference](../api.md).

> TenantDevToolsAccessSettingsWrapper setTenantDevToolsAccessSettings(TenantDevToolsAccessSettingsDto)

`POST /api/2.0/settings/devtoolsaccess`

Set the Developer Tools access settings

Sets whether the portal restricts the `User` role from using the developer tools (API keys, OAuth apps, webhooks); `RoomAdmin` and `DocSpaceAdmin` are never affected by this setting. Requires Owner or DocSpaceAdmin (the EditPortalSettings permission). This is a mutating, idempotent, portal-wide call: it applies to every `User` on the tenant immediately. It returns the saved setting; read the current value at any time from `GET api/2.0/settings/devtoolsaccess`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantDevToolsAccessSettingsDto** | body | [**TenantDevToolsAccessSettingsDto**](../api.md#model-tenantdevtoolsaccesssettingsdto) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Saved developer tools access restriction for the `User` role | [**TenantDevToolsAccessSettingsWrapper**](../api.md#model-tenantdevtoolsaccesssettingswrapper) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../api.md#model-errorapiresponse) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantDevToolsAccessSettingsWrapper**](../api.md#model-tenantdevtoolsaccesssettingswrapper)

## Authorization

[Basic](../api.md#basic), [OAuth2](../api.md#oauth2) (scopes: read, write), [ApiKeyBearer](../api.md#apikeybearer), [asc_auth_key](../api.md#asc_auth_key), [Bearer](../api.md#bearer), [OpenId](../api.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## SecurityActiveConnectionsApi
