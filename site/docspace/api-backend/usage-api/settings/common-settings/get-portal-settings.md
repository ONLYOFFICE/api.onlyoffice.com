# getPortalSettings

> SettingsWrapper getPortalSettings(withpassword)

`GET /api/2.0/settings`

Get the portal settings

Returns the current portal's general configuration: branding, culture, feature flags, and DocSpace/Standalone mode, everything the client needs to render its shell before or after login. No permission is required, but the response shape depends on the caller's identity. An anonymous caller receives only the public subset (culture, branding, DocSpace/Standalone flags, deep link data, setup-wizard and join-by-domain hints); once authenticated, the response also includes tenant-specific fields such as the owner ID, time zone, invitation limit, AI/banner/dev-tools flags, and, for a DocSpace administrator, the tenant wallet's low-balance flag. This is a read-only, idempotent call. Pass `withPassword=true` to also receive the parameters (`salt`, iteration count, hash size) used to hash the password client-side before it is sent to the authentication endpoints; these are only added for an anonymous caller or when explicitly requested, never as part of the default authenticated response.

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

[cookieAuth](../settings.md#cookieauth), [bearerAuth](../settings.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
