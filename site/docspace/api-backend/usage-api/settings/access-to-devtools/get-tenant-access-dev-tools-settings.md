# getTenantAccessDevToolsSettings

> TenantDevToolsAccessSettingsWrapper getTenantAccessDevToolsSettings()

`GET /api/2.0/settings/devtoolsaccess`

Get the Developer Tools access settings

Returns whether the portal blocks the developer tools for the user type `user`. The tools are API keys, OAuth apps, and webhooks. Any signed-in user can call it, including a guest. The call is read-only. To change the setting, use `POST api/2.0/settings/devtoolsaccess`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Whether the `User` role is currently restricted from using the developer tools | [**TenantDevToolsAccessSettingsWrapper**](../../models/tenant-dev-tools-access-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantDevToolsAccessSettingsWrapper**](../../models/tenant-dev-tools-access-settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
