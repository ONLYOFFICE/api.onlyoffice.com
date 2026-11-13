# getTenantWalletSettings

> TenantWalletSettingsWrapper getTenantWalletSettings()

`GET /api/2.0/portal/payment/topupsettings`

Get the auto top-up settings

Returns the automatic top-up settings of the portal wallet. Requires a DocSpace admin. Other callers get 403. The portal does not need a billing customer or a billing service. The call is read-only. If the portal never set up the top-up, the call returns the defaults. Then `enabled` is false, `currency` is null, and `minBalance` and `upToBalance` are 0. These zeros are out of range for `POST api/2.0/portal/payment/topupsettings`. So send real values instead of the defaults. Until the portal first saves the settings, `lastModified` is `0001-01-01T00:00:00`. The portal sets `lowBalanceThreshold` and `lowBalanceNotified`. You cannot set them. A save with `enabled` true clears `lowBalanceNotified`, and one with false resets `lowBalanceThreshold`.

## Parameters
This endpoint does not need any parameter.

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The automatic top-up settings of the portal, or their defaults when it has never configured them | [**TenantWalletSettingsWrapper**](../../models/tenant-wallet-settings-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not a DocSpace administrator | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantWalletSettingsWrapper**](../../models/tenant-wallet-settings-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
