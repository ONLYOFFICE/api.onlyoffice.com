# getPortalHostname

> StringWrapper getPortalHostname()

`GET /api/2.0/settings/machine`

Get the portal hostname

Returns the hostname the current request arrived on, exactly as sent in the HTTP Host header, so a client mid-setup can learn the address the portal is actually reachable at. This call is not for a normal logged-in session: it requires a confirmation link bearing the Wizard claim, of the kind generated during initial portal setup, and the link is consumed as part of authenticating the request. This is a read-only, idempotent call. The value reflects whatever the caller connected through, including a reverse proxy's public name, and is not necessarily the tenant's configured alias or mapped domain.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Hostname the current request arrived on | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**StringWrapper**](../../models/string-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
