# getIsAuthentificated

> BooleanWrapper getIsAuthentificated()

`GET /api/2.0/authentication`

Check authentication

Returns whether the request carries a valid sign-in to the current portal. The call checks the authentication cookie or the token in the `Authorization` header. Anyone can call it without signing in. It is read-only and also works while the portal is unpaid. It returns `true` for a signed-in user and `false` in every other case. A `false` result gives no reason. The token may be missing, malformed, expired, or revoked. To sign in again, use `POST api/2.0/authentication`. To learn who the caller is, use `GET api/2.0/people/@self`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the request carries a valid token or cookie of an active portal user, `false` in every other case | [**BooleanWrapper**](../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../models/boolean-wrapper.md)

## Authorization

[Basic](authentication.md#basic), [OAuth2](authentication.md#oauth2) (scopes: read, write), [ApiKeyBearer](authentication.md#apikeybearer), [asc_auth_key](authentication.md#asc_auth_key), [Bearer](authentication.md#bearer), [OpenId](authentication.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
