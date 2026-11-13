# getClaims

> TokenDiagnosticsWrapper getClaims()

`GET /api/2.0/people/tokendiagnostics`

Get user claims

Returns the account name and all claims of the token or cookie that authenticated the current request. Use it to find out which account a token belongs to and which scopes and roles it has. Any signed-in user can call it, including a guest. It reports only on the caller. The call is read-only. Each claim comes as one `type:value` string, in the order of authentication. The name `Unknown Name` means that the identity has no name claim. To read the profile of the caller, use `GET api/2.0/people/@self`.

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
