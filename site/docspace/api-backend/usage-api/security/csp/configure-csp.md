# configureCsp

> CspWrapper configureCsp(CspRequestsDto)

`POST /api/2.0/security/csp`

Configure CSP settings

Replaces the list of external domains the portal's Content Security Policy trusts and returns the policy header the portal serves to browsers from that moment on. The list in `domains` replaces the stored one, so an omitted or empty list falls back to the portal's built-in policy, and every entry that is sent becomes an allowed source for scripts, styles, images, fonts, frames, media and connections at once. An entry may be a host, a host with a scheme, or a wildcard host such as `*.example.com`; it has to form a valid absolute address and may contain ASCII characters only, and an entry that does not is refused with 400 before anything is saved. The caller needs the portal-settings right of a DocSpace administrator, and the request is also refused with 403 when the header built from the list grows past the size configured for the installation, 15 KB by default. The change applies to the whole portal at once and is idempotent. Read the current state with `GET api/2.0/security/csp`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CspRequestsDto** | body | [**CspRequestsDto**](../../models/csp-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored domains and the policy header the portal now serves | [**CspWrapper**](../../models/csp-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | An entry of `domains` is not a valid address or holds non-ASCII characters | - | - |
| **403** | The caller does not have the portal-settings right of a DocSpace administrator, or the built policy header exceeds the size allowed for the installation | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**CspWrapper**](../../models/csp-wrapper.md)

## Authorization

[Basic](../security.md#basic), [OAuth2](../security.md#oauth2) (scopes: read, write), [ApiKeyBearer](../security.md#apikeybearer), [asc_auth_key](../security.md#asc_auth_key), [Bearer](../security.md#bearer), [OpenId](../security.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
