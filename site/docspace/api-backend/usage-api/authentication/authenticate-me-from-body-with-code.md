# authenticateMeFromBodyWithCode

> AuthenticationTokenWrapper authenticateMeFromBodyWithCode(code, AuthWithCodeRequestsDto)

`POST /api/2.0/authentication/{code}`

Authenticate a user by code

Finishes a two-factor sign-in: checks the one-time code and, when it matches, issues the authentication token. Call it only after `POST api/2.0/authentication` answered with `sms` or `tfa` set, and repeat the same credentials in the body next to `code` - the code alone does not identify the user. The code comes from the SMS the portal sent, which `POST api/2.0/authentication/sendsms` resends, or from the authenticator app; whichever second factor the portal has enabled for this user is the one checked here. Open to unauthenticated callers, mutating and not idempotent: a code is single-use, the sign-in is written to the login history, and the first code accepted from an authenticator app also connects that app to the user. The answer carries `token` for the `Authorization` header, `expires` unless `session=true` tied the token to the browser session, and either `sms` with the masked phone number or `tfa`. A wrong, empty or expired code fails with 401 and counts against the brute-force limit, which then refuses further attempts with 403.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **code** | path | **String** | The two-factor authentication code. Send the same value as the `code` of the request body, which is the one the handler reads. | [required] |
| **AuthWithCodeRequestsDto** | body | [**AuthWithCodeRequestsDto**](../models/auth-with-code-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The authentication token to send in the `Authorization` header, together with the second factor that was accepted | [**AuthenticationTokenWrapper**](../models/authentication-token-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body could not be validated, for example `confirmData.email` is not an email address | - | - |
| **401** | The credentials were rejected, or the two-factor code is wrong, empty or expired | - | - |
| **403** | The user is disabled, or too many failed attempts have blocked further sign-ins for these credentials | - | - |
| **404** | No user of this portal matches the credentials in the request body | - | - |
| **429** | The portal rate limiter rejected the call - retry after the interval in the `Retry-After` header | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AuthenticationTokenWrapper**](../models/authentication-token-wrapper.md)

## Authorization

[cookieAuth](authentication.md#cookieauth), [bearerAuth](authentication.md#bearerauth)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
