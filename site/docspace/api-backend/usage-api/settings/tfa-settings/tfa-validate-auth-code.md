# tfaValidateAuthCode

> BooleanWrapper tfaValidateAuthCode(TfaValidateRequestDto)

`POST /api/2.0/settings/tfaapp/validate`

Validate the TFA code

Checks a two-factor code for the account of the confirmation link. Then it completes the pending TFA step. Sign the request with the confirmation token of a `TfaActivation` or `TfaAuth` link. The sign-in flow or `GET api/2.0/settings/tfaapp/confirm` issues that link. With an ordinary sign-in token, the call returns 403. It accepts a code from the app or an unused backup code, which it spends. The call changes data and signs the account in. It clears the confirmation cookie, but the key stays valid for one hour by default. A repeat with that key accepts the same app code for 5 minutes. It signs in again and returns `false`. For a `TfaAuth` link, send the repeat without the new session cookie. A repeat with a spent backup code returns 400. On the first activation, it also generates the backup codes. It returns `true` for the first activation, and `false` if an app was already linked. If the authenticator method is off on the portal, the call checks no code and returns `false`. If the code is wrong, the call returns 400. If the account exceeds the portal login attempt limit within a minute, the call returns 403. The call works even when the portal payment is overdue.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TfaValidateRequestDto** | body | [**TfaValidateRequestDto**](../../models/tfa-validate-request-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the code completed a first activation and backup codes were generated, `false` when an application was already linked | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **400** | The request body cannot be read or has no `code`, or the code matches neither the authenticator application nor an unused backup code | - | - |
| **403** | The account the confirmation link was issued for has used up the portal's login attempt limit for TFA codes | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
