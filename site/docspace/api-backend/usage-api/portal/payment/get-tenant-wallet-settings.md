# getTenantWalletSettings

> TenantWalletSettingsResponseWrapper getTenantWalletSettings()

`GET /api/2.0/portal/payment/topupsettings`

Get the auto top-up settings

Returns the portal's automatic wallet top-up settings - whether it is on, the balance that triggers a charge, the balance it is topped up to, and the currency both are expressed in. Any DocSpace administrator may read them, and unlike the operation that changes them this one needs neither a billing customer nor a configured billing service, so it answers on a portal that has never paid for anything. It is read-only and changes nothing. A portal that has never configured top-up gets the defaults rather than an empty result: `enabled` is false, `currency` is null, and `minBalance` and `upToBalance` are 0. Those two zeros are outside the ranges `POST api/2.0/portal/payment/topupsettings` accepts - 5 to 1000 and 6 to 5000 - so the answer cannot be sent straight back to it; supply real values instead. `lastModified` is `0001-01-01T00:00:00` until the settings are stored for the first time. `lowBalanceThreshold` and `lowBalanceNotified` are maintained by the portal itself: they are reported here, but ignored when the settings are written.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The automatic top-up settings of the portal, or their defaults when it has never configured them | [**TenantWalletSettingsResponseWrapper**](../../models/tenant-wallet-settings-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantWalletSettingsResponseWrapper**](../../models/tenant-wallet-settings-response-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
