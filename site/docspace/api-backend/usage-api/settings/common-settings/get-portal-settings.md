# getPortalSettings

> SettingsWrapper getPortalSettings(withpassword)

`GET /api/2.0/settings`

Get the portal settings

Returns the general portal settings: culture, branding, feature flags, and installation type. Anyone can call it without signing in, even when the portal is unpaid, suspended, or blocked. The call is read-only. The fields depend on the caller. An anonymous caller gets only public fields, such as culture, branding, and setup and join hints. A signed-in caller also gets the owner ID, time zone, invitation limit, and feature flags. A DocSpace admin also gets the low wallet balance flag. Password hashing parameters come back to an anonymous caller, or if `withPassword` is true. Use them to hash a password for the sign-in operations.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **withpassword** | query | **Boolean** | Whether the answer also carries the salt, iteration count and hash size a client needs to hash a password before sending it to the authentication operations. They are included for an anonymous caller anyway; for a signed-in one they are left out unless this is set. | [optional] [example: `true`] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Current portal settings, tailored to the caller's authentication state | [**SettingsWrapper**](../../models/settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**SettingsWrapper**](../../models/settings-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
