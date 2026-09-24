# getIsAuthentificated

> BooleanWrapper getIsAuthentificated()

`GET /api/2.0/authentication`

Check authentication

Reports whether the credentials that came with this very request identify a signed-in user of the current portal - the authentication cookie, or the token in the `Authorization` header. Nothing has to be called first: the operation is open to unauthenticated callers, who simply get `false`, it is read-only and idempotent, and it answers even while the portal's payment has lapsed. The result is a bare boolean that carries no reason, so `false` covers a missing, malformed, expired and revoked token alike; the way to recover from it is to sign in again with `POST api/2.0/authentication`. It says nothing about who the caller is or how long the session still lasts - read `GET api/2.0/people/@self` for the profile behind the token.

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

[cookieAuth](authentication.md#cookieauth), [bearerAuth](authentication.md#bearerauth)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
