# authenticateMeFromBodyWithCode

> AuthenticationTokenWrapper authenticateMeFromBodyWithCode(code, AuthWithCodeRequestDto)

`POST /api/2.0/authentication/{code}`

Authenticate a user by code

Finishes a two-factor sign-in with a one-time code and returns the authentication token. Call it after `POST api/2.0/authentication` returns `sms` or `tfa`. Send the same credentials again, with the code in `code`. With SMS codes on, the call checks an SMS code. Otherwise it checks an authenticator app code or a backup code. Anyone can call it without signing in. The call changes data. An SMS code or a backup code works only once, so a repeated call returns 401. An app code is accepted again for up to 5 minutes, and each call opens a new session. An accepted SMS code cancels the other codes and activates the phone number. The first accepted app code connects the app and creates backup codes. A new `culture` also becomes the user's language. The answer has `token`, and `sms` or `tfa` shows the checked factor. To get a new SMS code, use `POST api/2.0/authentication/sendsms`. The call returns 401 for a wrong, empty, or expired code. It also returns 401 if the user has no second factor. After too many wrong SMS codes, even a right one returns 401, by default for up to 10 minutes. More app code attempts than the portal's login attempt limit return 401 until one minute passes without attempts. A wrong password or an unknown user also returns 401. The call returns 403 for a disabled user or too many failed password attempts. A rejected key in `confirmData` returns 404. If `confirmData.email` is not an email address, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **code** | path | **String** | The two-factor authentication code. Send the same value as the `code` of the request body, which is the one the handler reads. | [required] |
| **AuthWithCodeRequestDto** | body | [**AuthWithCodeRequestDto**](../models/auth-with-code-request-dto.md) |  | [optional] |

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

[Basic](authentication.md#basic), [OAuth2](authentication.md#oauth2) (scopes: read, write), [ApiKeyBearer](authentication.md#apikeybearer), [asc_auth_key](authentication.md#asc_auth_key), [Bearer](authentication.md#bearer), [OpenId](authentication.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
