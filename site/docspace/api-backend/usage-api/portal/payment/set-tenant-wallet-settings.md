# setTenantWalletSettings

> TenantWalletSettingsResponseWrapper setTenantWalletSettings(TenantWalletSettingsWrapper)

`POST /api/2.0/portal/payment/topupsettings`

Set the auto top-up settings

Switches the portal's automatic wallet top-up on or off and sets its thresholds: while it is on, the payment method on file is charged whenever the wallet balance falls below `minBalance`, enough to bring it up to `upToBalance`, in `currency`. The portal needs a billing customer whose wallet balance exists - a portal that has never had one answers 404, so top the wallet up once with `POST api/2.0/portal/payment/deposit` first - and only the payer may change the settings. The body replaces the stored settings as a whole and an omitted body resets them to the defaults; `minBalance` is accepted between 5 and 1000 and `upToBalance` between 6 and 5000, while `lowBalanceThreshold` and `lowBalanceNotified` are ignored on the way in and kept as the portal had them. The call is mutating and idempotent, it charges nothing by itself, it is written to the portal audit trail, and switching the top-up on also re-arms the low-balance warning. The settings as they were stored come back in the answer.

## Parameters

|Name | In | Type | Description | Notes |
|------------- | ------------- | ------------- | ------------- | -------------|
| **TenantWalletSettingsWrapper** | body | [**TenantWalletSettingsWrapper**](../../models/tenant-wallet-settings-wrapper.md) |  | [optional] |

## Responses

| Status code | Description | Type | Response headers |
|------------- | ------------- | ------------- | -------------|
| **200** | The automatic top-up settings as they were stored | [**TenantWalletSettingsResponseWrapper**](../../models/tenant-wallet-settings-response-wrapper.md) | `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset` |
| **403** | The caller is not the payer of this portal, or the portal has no billing service configured | - | - |
| **404** | This portal has no billing customer, or its wallet has no balance yet | - | - |
| **401** | Unauthorized | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **429** | Too Many Requests. | [**ErrorApiResponse**](../../models/error-api-response.md) | `Retry-After` |
| **500** | Internal Server Error. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **400** | Bad Request. | [**ErrorApiResponse**](../../models/error-api-response.md) | - |
| **502** | Bad Gateway. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |
| **503** | Service Unavailable. Returned by the reverse proxy, response body may be HTML and not JSON. | - | - |

## Return type

[**TenantWalletSettingsResponseWrapper**](../../models/tenant-wallet-settings-response-wrapper.md)

## Authorization

[Basic](../portal.md#basic), [OAuth2](../portal.md#oauth2) (scopes: read, write), [ApiKeyBearer](../portal.md#apikeybearer), [asc_auth_key](../portal.md#asc_auth_key), [Bearer](../portal.md#bearer), [OpenId](../portal.md#openid)

## HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
