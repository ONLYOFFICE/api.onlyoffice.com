# getPortalHostname

> StringWrapper getPortalHostname()

`GET /api/2.0/settings/machine`

Get the portal hostname

Returns the host name of the current request, as its `Host` header states it. Sign the request with the confirmation token of the setup wizard. A signed-in user without the token gets 403, even a DocSpace admin. An invalid or expired token returns 401. Take the token from `wizardToken` of `GET api/2.0/settings` before setup is complete. The call is read-only. The value is the name that the caller connected to, such as the public name of a proxy. It can differ from the alias or the custom domain of the portal.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | Hostname the current request arrived on | [**StringWrapper**](../../models/string-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | The caller is not signed in and sent no setup wizard token, or the token is invalid or expired | - | - |
| **403** | The caller is signed in but sent no setup wizard token, whatever their role | - | - |
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
