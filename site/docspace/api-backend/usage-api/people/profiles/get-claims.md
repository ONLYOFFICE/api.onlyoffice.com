# getClaims

> TokenDiagnosticsWrapper getClaims()

`GET /api/2.0/people/tokendiagnostics`

Get user claims

Returns the identity the current request was authenticated with, as the portal sees it: the account name and the full list of claims attached to the token or the cookie. It is a diagnostics operation meant for working out why a call is rejected - which account a token really belongs to, and which scopes and roles it carries - rather than a source of profile data. It needs no permission of its own and reports on the caller only, so it cannot be used to inspect another account. The call is read-only, and every claim comes back as a single `type:value` string, in the order the authentication produced them. An account name of `Unknown Name` means the identity carries no name claim, not that the request is unauthenticated. For the profile behind the identity, read `GET api/2.0/people/@self`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The account name and the claims of the current identity | [**TokenDiagnosticsWrapper**](../../models/token-diagnostics-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TokenDiagnosticsWrapper**](../../models/token-diagnostics-wrapper.md)

## Authorization

[Basic](../people.md#basic), [OAuth2](../people.md#oauth2) (scopes: read, write), [ApiKeyBearer](../people.md#apikeybearer), [asc_auth_key](../people.md#asc_auth_key), [Bearer](../people.md#bearer), [OpenId](../people.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
