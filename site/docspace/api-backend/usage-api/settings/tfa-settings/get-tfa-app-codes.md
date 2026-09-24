# getTfaAppCodes

> TfaAppCodeArrayWrapper getTfaAppCodes()

`GET /api/2.0/settings/tfaappcodes`

Get the TFA backup codes

Returns the one-time backup codes of the current user's authenticator-application credential, each with the flag that says whether it has been spent. A backup code is accepted in place of a code from the application when signing in, and every code works exactly once, so this list is what a member falls back on after losing access to their authenticator. Any authenticated member may call it, always for their own account: there is no way to read someone else's codes. The authenticator method has to be enabled on the portal and an application has to be linked to the account already, otherwise the call answers 405; link one through `GET api/2.0/settings/tfaapp/confirm` and `POST api/2.0/settings/tfaapp/validate`. Accounts flagged as outsiders are refused. This is a read-only, idempotent call: the codes are generated once, when the application is first linked, and the whole set is replaced by `PUT api/2.0/settings/tfaappnewcodes`. The default configuration issues five codes of six characters, and a portal may be configured for a different number and length.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The caller's backup codes, each with the flag showing whether it has already been used | [**TfaAppCodeArrayWrapper**](../../models/tfa-app-code-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **405** | The authenticator method is not enabled on this portal, or the caller has no application linked | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TfaAppCodeArrayWrapper**](../../models/tfa-app-code-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
