# getTfaSettings

> TfaSettingsArrayWrapper getTfaSettings()

`GET /api/2.0/settings/tfaapp`

Get the TFA settings

Returns the two-factor authentication methods the portal offers, with the portal-wide state of each. The list has at most two entries, `sms` and `app`. Each entry appears only if the installation offers its method. Its `available` field says if the portal can turn it on. An empty list means the portal offers neither method. Any signed-in user can call it. The call is read-only. It returns the portal policy, not the caller's own linked app. To change the policy, use `PUT api/2.0/settings/tfaapp`. To read your own backup codes, use `GET api/2.0/settings/tfaappcodes`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The TFA methods the portal offers, with the portal-wide state of each | [**TfaSettingsArrayWrapper**](../../models/tfa-settings-array-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TfaSettingsArrayWrapper**](../../models/tfa-settings-array-wrapper.md)

## Authorization

[Basic](../settings.md#basic), [OAuth2](../settings.md#oauth2) (scopes: read, write), [ApiKeyBearer](../settings.md#apikeybearer), [asc_auth_key](../settings.md#asc_auth_key), [Bearer](../settings.md#bearer), [OpenId](../settings.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
