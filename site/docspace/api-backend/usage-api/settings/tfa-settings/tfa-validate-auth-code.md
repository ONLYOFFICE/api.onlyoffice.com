# tfaValidateAuthCode

> BooleanWrapper tfaValidateAuthCode(TfaValidateRequestsDto)

`POST /api/2.0/settings/tfaapp/validate`

Validate the TFA code

Verifies a two-factor authentication code for the account named in the confirmation link being used, and completes that account's pending TFA step. The call is reachable only with a confirmation token carrying the `TfaActivation` or `TfaAuth` role, issued by `GET api/2.0/settings/tfaapp/confirm` or by the login flow; an ordinary bearer token is refused. Both a code from the authenticator application and one of the account's unused backup codes are accepted, and a backup code is spent by the check. The call mutates state: it signs the account in, clears the confirmation cookie so the link cannot be replayed, and on the very first activation it generates the backup codes later returned by `GET api/2.0/settings/tfaappcodes`. Pass `session=true` to keep that sign-in for the browser session only instead of a persistent one. It answers `true` only for that first activation and `false` when an application was already linked. A wrong code is rejected as an invalid request, and further attempts are refused once the portal's login attempt limit is reached. The call also works while the portal's payment is overdue.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TfaValidateRequestsDto** | body | [**TfaValidateRequestsDto**](../../models/tfa-validate-requests-dto.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | `true` when the code completed a first activation and backup codes were generated, `false` when an application was already linked | [**BooleanWrapper**](../../models/boolean-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**BooleanWrapper**](../../models/boolean-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
