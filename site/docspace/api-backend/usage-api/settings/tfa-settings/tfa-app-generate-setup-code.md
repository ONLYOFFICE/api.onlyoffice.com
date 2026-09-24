# tfaAppGenerateSetupCode

> TfaSetupCodeWrapper tfaAppGenerateSetupCode()

`GET /api/2.0/settings/tfaapp/setup`

Generate the TFA setup code

Issues the secret the current user has to enter in an authenticator application before the authenticator-application method can be used, both as a scannable QR-code image and as a key for manual entry. The call is reachable only with a confirmation token carrying the `TfaActivation` role, obtained from `GET api/2.0/settings/tfaapp/confirm` or from the login flow; an ordinary bearer token is refused. The authenticator method has to be enabled on the portal and be its current policy, and the account must have no application linked yet: for an already-linked account the call answers 405, so reset the credential first with `PUT api/2.0/settings/tfaappnewapp`. Accounts flagged as outsiders are refused. Repeating the call is safe and hands back the same secret for the account, so the QR code and the manual key always describe one and the same credential. `qrCodeSetupImageUrl` is a base64 `data:` URL of a PNG image, and `account` is the label the application will show. Finish the setup by sending a code from the application to `POST api/2.0/settings/tfaapp/validate`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The account label, the manual entry key and the QR-code image for linking an authenticator application | [**TfaSetupCodeWrapper**](../../models/tfa-setup-code-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
