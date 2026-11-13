# sendSmsCode

> AuthenticationTokenWrapper sendSmsCode(AuthRequestDto)

`POST /api/2.0/authentication/sendsms`

Send SMS code

Sends a new SMS code to the stored phone number of a user. Use it to resend the code after `POST api/2.0/authentication` returns `sms`. The call checks the credentials in the body as `POST api/2.0/authentication` does. Anyone can call it without signing in. Each call sends another SMS and counts toward the SMS usage of the portal. Earlier codes stay valid until they expire, by default after 10 minutes. The first accepted code cancels every code of the number. By default, a number gets at most 6 codes until its newest code expires or a code is accepted. You can repeat the call up to this limit. After it, wait until the newest code expires. The answer has no token. To finish the sign-in, send the code to `POST api/2.0/authentication/{code}`. The call returns 401 for a wrong password or an unknown user. It returns 403 for a disabled user or after too many failed attempts. A rejected key in `confirmData` returns 404. If the user has no stored phone number, the call returns 400. If SMS codes are off on the portal or for the user, it returns 405.

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
| **405** | SMS two-factor is not available on the portal or not required for this user, so there is no code to send | - | - |
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
