# authenticateMe

> AuthenticationTokenWrapper authenticateMe(AuthRequestDto)

`POST /api/2.0/authentication`

Authenticate a user

Signs a user in to the current portal and returns an authentication token. If the user has a second factor, the call returns what that factor needs instead. Send `userName` with `password` or `passwordHash`, a confirmation link in `confirmData`, or a third-party account. Anyone can call it without signing in. The call changes data. Each successful call opens a new session. You can repeat it with the same password or third-party account. After a sign-in with a `confirmData` link, a repeated call with this link returns 404. A new `culture` also becomes the user's language. With SMS codes on, the answer has `sms` and no `token`. Without an activated phone number, `confirmUrl` holds a phone activation link for `POST api/2.0/authentication/setphone`. Otherwise the call sends an SMS code. It sends none while an earlier code is still valid. With an authenticator app on, the answer has `tfa` and no `token`. Before the app is connected, the answer also has its setup key in `tfaKey`. To finish such a sign-in, send the code to `POST api/2.0/authentication/{code}`. The call returns 401 for a wrong password, an unknown user, or a rejected third-party account. It also returns 401 if the portal does not allow third-party sign-in. A rejected `confirmData` key or its unknown user returns 404. The call returns 403 for a disabled user, a wrong CAPTCHA, or too many failed attempts. Failed attempts count per user name and IP address. During a block, a solved CAPTCHA in `recaptchaResponse` lets the call through. The portal's login settings set the attempt limit and the block time. If `confirmData.email` is not an email address, the call returns 400.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **AuthRequestDto** | body | [**AuthRequestDto**](../models/auth-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The authentication token, or the second factor that has to be passed before a token is issued | [**AuthenticationTokenWrapper**](../models/authentication-token-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body could not be validated, for example `confirmData.email` is not an email address | - | - |
| **401** | The password, the confirmation key or the third-party profile was rejected, or third-party sign-in is not allowed for this portal | - | - |
| **403** | The user is disabled, or too many failed attempts and CAPTCHA failures have blocked further sign-ins for these credentials | - | - |
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
