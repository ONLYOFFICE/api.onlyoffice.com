# getTenantAccessDevToolsSettings

> TenantDevToolsAccessSettingsWrapper getTenantAccessDevToolsSettings()

`GET /api/2.0/settings/devtoolsaccess`

Get the Developer Tools access settings

Returns whether the portal currently restricts the `User` role from using the developer tools (API keys, OAuth apps, webhooks). Requires an authenticated session; every role can read the restriction, even though it only limits what a `User` may do, not what a `RoomAdmin` or `DocSpaceAdmin` may do. This is a read-only, idempotent call. Change the restriction with `POST api/2.0/security/devtoolsaccess`, which requires the EditPortalSettings permission.

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
