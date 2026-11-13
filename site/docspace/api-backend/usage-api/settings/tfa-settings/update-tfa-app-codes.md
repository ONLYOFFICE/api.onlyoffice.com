# updateTfaAppCodes

> TfaAppCodeArrayWrapper updateTfaAppCodes()

`PUT /api/2.0/settings/tfaappnewcodes`

Regenerate the TFA backup codes

Replaces the current user's backup codes with a new set and returns it. Use it after the old codes are spent or may have leaked. Any signed-in user can call it, always for their own account. If the authenticator method is unavailable on the portal or no app is linked, the call returns 405. The call changes data, and the old codes stop working immediately. Store the new codes before you leave the response. Do not repeat it. Each call creates another set and discards the previous one, so a retry returns different codes. The new codes are unused. By default, there are five codes of six characters. The installation can set another number and length. The secret of the linked app does not change, so the app keeps working. To read the current set without a change, use `GET api/2.0/settings/tfaappcodes`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The newly generated backup codes, all unused, replacing the caller's previous set | [**TfaAppCodeArrayWrapper**](../../models/tfa-app-code-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
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
