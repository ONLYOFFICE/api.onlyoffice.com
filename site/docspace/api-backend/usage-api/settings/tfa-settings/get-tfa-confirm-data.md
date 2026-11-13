# getTfaConfirmData

> TfaConfirmDataWrapper getTfaConfirmData()

`GET /api/2.0/settings/tfaapp/confirm`

Get TFA confirmation data

Returns the confirmation link that the current user follows to pass the portal two-factor step. Any signed-in user can call it, always for their own account. If the portal policy does not require TFA from the caller, the response body is empty. With the SMS method, the call is read-only and fills only `url`. The link activates a phone while the account has no activated number. After that, it authorizes the phone. With the authenticator method, the call changes data. It issues a new confirmation key and sets it as a cookie. Earlier keys stay valid for one hour by default. The link activates an app while none is linked. Once one is linked, it verifies a code. If the portal last turned TFA off and the app was linked over a day ago, the call unlinks it. To send the code from that flow, use `POST api/2.0/settings/tfaapp/validate`. To read the portal policy, use `GET api/2.0/settings/tfaapp`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The confirmation link for the caller's TFA step, with the cookie filled in for the authenticator method | [**TfaConfirmDataWrapper**](../../models/tfa-confirm-data-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TfaConfirmDataWrapper**](../../models/tfa-confirm-data-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
