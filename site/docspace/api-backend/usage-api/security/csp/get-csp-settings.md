# getCspSettings

> CspWrapper getCspSettings()

`GET /api/2.0/security/csp`

Get CSP settings

Returns the Content Security Policy this portal serves: `domains`, the external hosts an administrator has allowed, and `header`, the whole policy value built from them together with the portal's own defaults and the integrations it has switched on. The operation is anonymous and reachable cross-origin - no token is needed - because the login and editor front-ends read it before anyone has signed in. It is read-only for the caller, but it does repair the portal's cached policy when the cache has lost it, so a call can rebuild the header instead of only reading it. The answer honours `If-Modified-Since`: send back the `Last-Modified` value of an earlier answer and an unchanged policy comes back as an empty not-modified response rather than a body. `domains` is an empty list on a portal nobody has configured, while `header` is filled from the defaults even then. Change the allowed domains with `POST api/2.0/security/csp`, which does need a DocSpace administrator.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The allowed domains and the full policy header the portal serves | [**CspWrapper**](../../models/csp-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **304** | The CSP settings have not changed since the `Last-Modified` value sent back in `If-Modified-Since`; the body is empty | - | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CspWrapper**](../../models/csp-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
