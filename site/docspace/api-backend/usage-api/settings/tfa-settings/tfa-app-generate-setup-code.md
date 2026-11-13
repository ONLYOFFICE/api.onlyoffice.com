# tfaAppGenerateSetupCode

> TfaSetupCodeWrapper tfaAppGenerateSetupCode()

`GET /api/2.0/settings/tfaapp/setup`

Generate the TFA setup code

Returns the secret that the current user enters in an authenticator app, as a QR code and a key. Sign the request with the confirmation token of a `TfaActivation` link. With an ordinary sign-in token, the call returns 403. The sign-in flow or `GET api/2.0/settings/tfaapp/confirm` issues that link. The authenticator method must be the current portal policy, and the account must have no app linked. Otherwise, the call returns 405. To replace a linked app, first unlink it with `PUT api/2.0/settings/tfaappnewapp`. The first call changes data and creates the secret. Later calls return the same secret until the app is unlinked. To finish the setup, send a code from the app to `POST api/2.0/settings/tfaapp/validate`. The call works even when the portal payment is overdue.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The account label, the manual entry key and the QR-code image for linking an authenticator application | [**TfaSetupCodeWrapper**](../../models/tfa-setup-code-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The request is signed with an ordinary sign-in token, not with the confirmation token of a TfaActivation link | - | - |
| **405** | The authenticator method is not enabled on this portal, or the account already has an application linked | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TfaSetupCodeWrapper**](../../models/tfa-setup-code-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
