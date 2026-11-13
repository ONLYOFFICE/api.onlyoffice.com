# getTfaAppCodes

> TfaAppCodeArrayWrapper getTfaAppCodes()

`GET /api/2.0/settings/tfaappcodes`

Get the TFA backup codes

Returns the backup codes of the current user's authenticator app, including the spent ones. At sign-in, each backup code can replace a code from the app once. Any signed-in user can call it, always for their own account. There is no way to read the codes of another account. If the authenticator method is unavailable or off on the portal, or no app is linked, the call returns 405. To link an app, use `GET api/2.0/settings/tfaapp/confirm` and then `POST api/2.0/settings/tfaapp/validate`. The call is read-only. The portal generates the codes when the app is first linked. To replace the whole set, use `PUT api/2.0/settings/tfaappnewcodes`. By default, there are five codes of six characters. The installation can set another number and length.

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
