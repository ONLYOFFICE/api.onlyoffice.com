# configureCsp

> CspWrapper configureCsp(CspRequestDto)

`POST /api/2.0/security/csp`

Configure CSP settings

Replaces the list of external domains that the Content Security Policy of the portal trusts. It returns the stored list and the policy header that browsers now get. Send the complete list in `domains`. An empty or omitted list restores the built-in policy of the portal. Every domain becomes an allowed source for scripts, styles, images, fonts, frames, media, and connections. Requires the EditPortalSettings permission, which the portal owner and DocSpace admins have. Other callers get 403. The call changes data for the whole portal, and you can repeat it with the same body. The call returns 400 for an unreadable body, an invalid address, or an entry with non-ASCII characters. It then saves nothing. It also returns 403 if the built header is larger than the installation allows, 15 KB by default. To read the current policy, use `GET api/2.0/security/csp`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **CspRequestDto** | body | [**CspRequestDto**](../../models/csp-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The stored domains and the policy header the portal now serves | [**CspWrapper**](../../models/csp-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read, or an entry of `domains` is not a valid address or holds non-ASCII characters | - | - |
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
