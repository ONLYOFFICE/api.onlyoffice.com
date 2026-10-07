# sendSmsCode

> AuthenticationTokenWrapper sendSmsCode(AuthRequestDto)

`POST /api/2.0/authentication/sendsms`

Send SMS code

Sends a new SMS authentication code to the phone number stored for the user and reports when that code expires. The credentials in the body are checked exactly as by `POST api/2.0/authentication`, so use this operation to resend the code after that call answered with `sms`; the user needs SMS two-factor enabled and a phone number already stored, which `POST api/2.0/authentication/setphone` registers. Open to unauthenticated callers, mutating and not idempotent: every call sends a message, is counted in the portal's SMS usage and spends one of the few codes a number is allowed within the code lifetime (ten minutes by default), after which the call fails until those codes expire. Codes sent earlier stay valid, so a resent code does not invalidate them, and the first one to be accepted invalidates all of them. The answer carries `sms`, the masked number and `expires`, and no token - submit the code to `POST api/2.0/authentication/{code}`.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AuthRequestDto** | body | [**AuthRequestDto**](../models/auth-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The masked phone number the code was sent to and the moment that code expires - no authentication token yet | [**AuthenticationTokenWrapper**](../models/authentication-token-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body could not be validated, for example `confirmData.email` is not an email address | - | - |
| **401** | The password, the confirmation key or the third-party profile was rejected | - | - |
| **403** | The user is disabled, or too many failed attempts have blocked further sign-ins for these credentials | - | - |
| **404** | No user of this portal matches the credentials in the request body | - | - |
| **429** | The portal rate limiter rejected the call - retry after the interval in the `Retry-After` header | [**ErrorApiResponse**](../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**AuthenticationTokenWrapper**](../models/authentication-token-wrapper.md)

## Authorization

[Basic](authentication.md#basic), [OAuth2](authentication.md#oauth2) (scopes: read, write), [ApiKeyBearer](authentication.md#apikeybearer), [asc_auth_key](authentication.md#asc_auth_key), [Bearer](authentication.md#bearer), [OpenId](authentication.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
