# getCspSettings

> CspWrapper getCspSettings()

`GET /api/2.0/security/csp`

Get CSP settings

Returns the Content Security Policy of the portal, with the allowed external domains and the full header value. Anyone can call it without signing in, from any origin. The call is read-only. To skip an unchanged policy, send the `Last-Modified` value of an earlier answer in `If-Modified-Since`. Send the value exactly as you got it. If the policy has not changed since then, the call returns 304 with an empty body. To change the allowed domains, use `POST api/2.0/security/csp`, which requires the EditPortalSettings permission.

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
